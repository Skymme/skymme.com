/**
 * Mise en ligne de skymme.com sur l'hébergement mutualisé OVH.
 *
 * Adapté du script de Le Mamichat : le site est statique, on recopie `dist/`
 * dans `www/` en SFTP, fichier par fichier, via curl — aucune dépendance.
 *
 *   npm run deploy -- --dry-run    liste ce qui serait envoyé, sans rien envoyer
 *   npm run deploy                 envoie
 *
 * Les identifiants ne sont JAMAIS dans le dépôt : ils viennent de
 * `.env.deploy` (ignoré par git) ou de l'environnement.
 *
 *   FTP_HOST=ftp.cluster121.hosting.ovh.net
 *   FTP_USER=votre-login-ftp
 *   FTP_PASS=votre-mot-de-passe
 *   FTP_DIR=www
 *
 * Le script envoie et écrase, il ne supprime jamais rien côté serveur : le
 * journal déjà en ligne dans `www/le-mamichat/` n'est pas touché. Par sécurité,
 * il refuse aussi de viser ce dossier ou d'y déposer quoi que ce soit.
 *
 * Le quota de 100 Mo est PARTAGÉ avec Le Mamichat : le contrôle ci-dessous ne
 * voit que le poids de ce site, qui doit donc rester léger.
 */
import { execFileSync } from 'node:child_process'
import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from 'node:fs'
import { join, posix, relative, sep } from 'node:path'

const DIST = 'dist'
const DRY = process.argv.includes('--dry-run')

/** Quota de l'hébergement, en Mo (partagé avec les autres dossiers de www/). */
const QUOTA_MB = Number(process.env.FTP_QUOTA_MB) || 100
/** Dossiers de www/ qui appartiennent à d'autres projets. */
const PROTECTED = ['le-mamichat']
/** Clé publique du serveur, relevée au premier envoi. */
const KNOWN_HOSTS = '.sftp_known_hosts'

/**
 * Épingle la clé SSH du serveur. Sans elle, curl refuse de se connecter en
 * SFTP ; avec elle, on sait qu'on parle toujours à la même machine.
 */
function pinHostKey(host) {
  if (existsSync(KNOWN_HOSTS) && readFileSync(KNOWN_HOSTS, 'utf8').includes(host)) return

  console.log(`Première connexion : relevé de la clé SSH de ${host}...`)
  // Clé RSA uniquement : le curl livré avec Git pour Windows (libssh2 sur
  // WinCNG) ne sait pas vérifier une clé ed25519 et échoue avec « curl 79 »
  // dès qu'une telle clé figure dans le fichier.
  const keys = execFileSync('ssh-keyscan', ['-T', '10', '-t', 'rsa', host], {
    encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'],
  })
  if (!keys.trim()) {
    console.error(`Impossible de relever la clé SSH de ${host}.`)
    process.exit(1)
  }
  writeFileSync(KNOWN_HOSTS, keys)
  console.log(`Clé enregistrée dans ${KNOWN_HOSTS}.`)
}

// --- Identifiants ----------------------------------------------------------
function config() {
  const env = { ...process.env }

  if (existsSync('.env.deploy')) {
    for (const line of readFileSync('.env.deploy', 'utf8').split('\n')) {
      const match = /^\s*([A-Z_]+)\s*=\s*(.*)\s*$/.exec(line)
      if (match) env[match[1]] ??= match[2].replace(/^["']|["']$/g, '')
    }
  }

  const missing = ['FTP_HOST', 'FTP_USER', 'FTP_PASS', 'FTP_DIR'].filter((k) => !env[k])
  if (missing.length && !DRY) {
    console.error(
      existsSync('.env.deploy')
        ? `\nIl reste à renseigner ${missing.join(' et ')} dans .env.deploy\n` +
          'Espace client OVH > Hébergements > skymme.com > onglet FTP - SSH.\n'
        : '\nPas de fichier .env.deploy à la racine du projet.\n' +
          'Créez-le (il est ignoré par git) avec :\n\n' +
          '  FTP_HOST=ftp.cluster121.hosting.ovh.net\n' +
          '  FTP_USER=votre-login-ftp\n' +
          '  FTP_PASS=votre-mot-de-passe\n' +
          '  FTP_DIR=www\n',
    )
    process.exit(1)
  }
  return env
}

// --- Inventaire ------------------------------------------------------------
const SKIP = /\.md$/i

function walk(dir) {
  const out = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) out.push(...walk(full))
    else if (!SKIP.test(entry)) out.push(full)
  }
  return out
}

if (!existsSync(DIST)) {
  console.error('Pas de dossier `dist/`. Lancez `npm run build` d\'abord.')
  process.exit(1)
}

const env = config()
const mb = (bytes) => bytes / 1024 / 1024
const toPosix = (file) => relative(DIST, file).split(sep).join('/')

const dir = posix.normalize(env.FTP_DIR ?? 'www').replace(/\/+$/, '')
const files = walk(DIST)

// Garde-fou : ne jamais écrire dans le dossier d'un autre projet.
for (const name of PROTECTED) {
  const hitsDir = dir.split('/').includes(name)
  const hitsFile = files.some((f) => toPosix(f).split('/')[0] === name)
  if (hitsDir || hitsFile) {
    console.error(`\nRefusé : cet envoi toucherait www/${name}/, qui appartient à un autre projet.`)
    process.exit(1)
  }
}

const total = files.reduce((sum, f) => sum + statSync(f).size, 0)
console.log(`${files.length} fichiers, ${mb(total).toFixed(2)} Mo (quota de ${QUOTA_MB} Mo partagé)`)

if (mb(total) > QUOTA_MB) {
  console.error(`\nTrop lourd pour l'hébergement (${mb(total).toFixed(1)} Mo > ${QUOTA_MB} Mo).`)
  process.exit(1)
}

if (DRY) {
  for (const file of files) {
    const remote = posix.join(dir, toPosix(file))
    console.log(`  ${(statSync(file).size / 1024).toFixed(0).padStart(7)} Ko  ->  ${remote}`)
  }
  console.log('\nEssai à blanc : rien n\'a été envoyé.')
  process.exit(0)
}

// --- Envoi -----------------------------------------------------------------
// `--ftp-create-dirs` vaut aussi pour SFTP : l'arborescence distante est créée
// au fil de l'eau.
pinHostKey(env.FTP_HOST)

let done = 0
for (const file of files) {
  const rel = toPosix(file)
  // En SFTP, le chemin part de la racine du système : /~/ ramène au home.
  const url = `sftp://${env.FTP_HOST}/~/${posix.join(dir, rel)}`
  try {
    execFileSync('curl', [
      '--silent', '--show-error', '--ftp-create-dirs',
      '--knownhosts', KNOWN_HOSTS,
      '--user', `${env.FTP_USER}:${env.FTP_PASS}`,
      '--upload-file', file, url,
    ], { stdio: ['ignore', 'ignore', 'pipe'] })
    done += 1
    console.log(`  ${String(done).padStart(3)}/${files.length}  ${rel}`)
  } catch (error) {
    // Le message de curl peut contenir l'URL, donc le login : on ne le réaffiche pas.
    console.error(`\nÉchec sur ${rel} (curl ${error.status}).`)
    console.error('Vérifiez FTP_HOST, FTP_USER, FTP_PASS et FTP_DIR.')
    process.exit(1)
  }
}

console.log(`\nEn ligne : ${files.length} fichiers déposés dans ${dir}.`)

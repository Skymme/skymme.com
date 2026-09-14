/**
 * Recopie les PDF du CV depuis le dépôt Curriculum-Vitae voisin.
 *
 *   npm run sync-cv                          cherche ../Curriculum-Vitae/pdf
 *   CV_DIR=/chemin/vers/pdf npm run sync-cv  ou un autre dossier
 *
 * Les PDF sont versionnés dans public/cv/ pour que le site se construise seul ;
 * ce script sert à les remettre à jour après un `./build.sh` côté CV.
 *
 * Seule la version Data Scientist est publiée (mise en page classique et ATS) :
 * un CV unique en ligne, les autres variantes restent pour les candidatures.
 */
import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const source = process.env.CV_DIR ?? join('..', 'Curriculum-Vitae', 'pdf')
const target = join('public', 'cv')
const PUBLISHED = /^CV-Jade-Vaillant-Data-Scientist(-ATS)?\.pdf$/

if (!existsSync(source)) {
  console.error(`Dossier introuvable : ${source}`)
  process.exit(1)
}

mkdirSync(target, { recursive: true })
const pdfs = readdirSync(source).filter((f) => PUBLISHED.test(f))
for (const pdf of pdfs) {
  copyFileSync(join(source, pdf), join(target, pdf))
  console.log(`  ${pdf}`)
}
console.log(`${pdfs.length} PDF recopiés dans ${target}.`)

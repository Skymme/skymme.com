# skymme.com

Le site personnel de Jade Vaillant : présentation, projets, parcours, compétences
et CV téléchargeable. En ligne sur [skymme.com](https://skymme.com).

Site **statique** d'une seule page : tout le contenu est écrit en HTML dans
`index.html`, lisible sans JavaScript (moteurs de recherche, lecteurs d'écran,
logiciels de recrutement). Le script ne gère que le thème clair/sombre,
l'apparition des blocs au défilement et la copie de l'adresse e-mail.

## Stack

- [Vite](https://vite.dev) + TypeScript, sans framework
- [Tailwind CSS 4](https://tailwindcss.com), avec des jetons sémantiques dans
  `src/style.css`
- Charte inspirée de Meeply : sombre par défaut, accent bleu électrique, police
  système, aucune police web à charger

## Développer

```sh
npm install
npm run dev       # http://localhost:5173
npm run build     # vérifie les types puis produit dist/
npm run preview   # sert dist/ pour vérifier le build
```

## Mettre à jour le CV

Les PDF vivent dans `public/cv/` et sont générés par le dépôt
[Curriculum-Vitae](https://github.com/Skymme/Curriculum-Vitae). Seule la
version **Data Scientist** est publiée (mise en page classique et ATS) : un seul
CV en ligne. Après un `./build.sh` là-bas, depuis ce dépôt :

```sh
npm run sync-cv   # recopie les deux PDF Data Scientist dans public/cv/
```

Le contenu texte (expériences, compétences) est, lui, recopié à la main dans
`index.html` : pensez à le reporter quand le CV change.

## Mettre en ligne

`skymme.com` tourne sur l'hébergement gratuit 100 Mo d'OVH, partagé avec
[Le Mamichat](https://skymme.com/le-mamichat/). Ce site se dépose à la racine
`www/`.

1. Créez `.env.deploy` à la racine (ignoré par git) :

   ```sh
   FTP_HOST=ftp.cluster121.hosting.ovh.net
   FTP_USER=votre-login-ftp
   FTP_PASS=votre-mot-de-passe
   FTP_DIR=www
   ```

   Identifiants : espace client OVH > Hébergements > skymme.com > onglet FTP - SSH.

2. Construisez puis envoyez :

   ```sh
   npm run build
   npm run deploy -- --dry-run   # liste ce qui partirait, sans rien envoyer
   npm run deploy
   ```

Le script envoie en SFTP et **ne supprime jamais rien** côté serveur. Il refuse
aussi de toucher `www/le-mamichat/`. Un fichier retiré du site reste donc en
ligne tant qu'on ne l'efface pas à la main.

### Deux pièges déjà rencontrés

- **`curl 79 … ssh-ed25519 failed`** : le curl de Git pour Windows ne sait pas
  vérifier une clé de serveur ed25519. Le script n'épingle plus que la clé RSA ;
  si un ancien `.sftp_known_hosts` contient une ligne `ssh-ed25519`, supprimez
  le fichier pour qu'il soit relevé à nouveau.
- **`curl 78` sur `index.html`** : sur un hébergement neuf, OVH place dans
  `www/` un `index.html` qui est un lien vers sa page « Site en construction »,
  hors de votre espace. Il a été renommé en `www/index-ovh-welcome.html` lors
  du premier envoi (rien n'a été supprimé) ; pour retrouver la page OVH, il
  suffit de le renommer à nouveau en `index.html`.

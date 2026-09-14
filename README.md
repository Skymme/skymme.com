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
[Curriculum-Vitae](https://github.com/Skymme/Curriculum-Vitae). Après un
`./build.sh` là-bas, depuis ce dépôt :

```sh
npm run sync-cv   # recopie ../Curriculum-Vitae/pdf/*.pdf dans public/cv/
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

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// `base: './'` : chemins relatifs, le site marche à la racine de skymme.com
// comme dans un sous-dossier, sans reconstruire.
export default defineConfig({
  base: './',
  plugins: [tailwindcss()],
})

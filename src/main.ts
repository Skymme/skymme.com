import './style.css'

const root = document.documentElement

// ── Thème ─────────────────────────────────────────────────────────
// Le thème initial est posé avant le premier rendu par le script inline de
// index.html ; ici on ne fait que gérer la bascule.
type Theme = 'light' | 'dark'

const toggle = document.querySelector<HTMLButtonElement>('[data-theme-toggle]')
const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')

function applyTheme(theme: Theme): void {
  root.dataset.theme = theme
  toggle?.setAttribute('aria-label', theme === 'dark' ? 'Passer en thème clair' : 'Passer en thème sombre')
  themeColor?.setAttribute('content', theme === 'dark' ? '#0a0d12' : '#e5ecf6')
}

applyTheme(root.dataset.theme === 'light' ? 'light' : 'dark')

toggle?.addEventListener('click', () => {
  const next: Theme = root.dataset.theme === 'dark' ? 'light' : 'dark'
  applyTheme(next)
  try {
    localStorage.setItem('theme', next)
  } catch {
    // Stockage indisponible (navigation privée) : le choix vaut pour la visite.
  }
})

// ── Apparition des blocs au défilement ────────────────────────────
const reveals = document.querySelectorAll<HTMLElement>('.reveal')

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  )
  reveals.forEach((el) => observer.observe(el))
} else {
  reveals.forEach((el) => el.classList.add('is-visible'))
}

// ── Lien de navigation actif ──────────────────────────────────────
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav]'))
const sections = navLinks
  .map((link) => document.querySelector<HTMLElement>(link.hash))
  .filter((section): section is HTMLElement => section !== null)

const spy = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      for (const link of navLinks) {
        link.classList.toggle('is-active', link.hash === `#${entry.target.id}`)
      }
    }
  },
  { rootMargin: '-45% 0px -50% 0px' },
)
sections.forEach((section) => spy.observe(section))

// ── Copie de l'adresse e-mail ─────────────────────────────────────
document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((button) => {
  const label = button.querySelector<HTMLElement>('[data-copy-label]')
  const initial = label?.textContent ?? ''

  button.addEventListener('click', async () => {
    const value = button.dataset.copy ?? ''
    try {
      await navigator.clipboard.writeText(value)
      if (label) {
        label.textContent = 'Adresse copiée'
        window.setTimeout(() => {
          label.textContent = initial
        }, 2000)
      }
    } catch {
      // Presse-papiers refusé : on retombe sur le client mail.
      window.location.href = `mailto:${value}`
    }
  })
})

// ── Année du pied de page ─────────────────────────────────────────
document.querySelectorAll<HTMLElement>('[data-year]').forEach((el) => {
  el.textContent = String(new Date().getFullYear())
})

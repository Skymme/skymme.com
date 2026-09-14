import '@fontsource-variable/outfit'
import '@fontsource-variable/rubik'
import './style.css'

const root = document.documentElement
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

// ── Thème ─────────────────────────────────────────────────────────
// Le thème initial est posé avant le premier rendu par le script inline de
// index.html ; ici on gère la bascule, révélée en cercle depuis le bouton
// (portage du Theme Toggler de Magic UI, via l'API View Transitions).
type Theme = 'light' | 'dark'

interface ViewTransitionDocument {
  startViewTransition?: (update: () => void) => { ready: Promise<void> }
}

const toggle = document.querySelector<HTMLButtonElement>('[data-theme-toggle]')
const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')

function applyTheme(theme: Theme): void {
  root.dataset.theme = theme
  toggle?.setAttribute('aria-label', theme === 'dark' ? 'Passer en thème clair' : 'Passer en thème sombre')
  themeColor?.setAttribute('content', theme === 'dark' ? '#0f1112' : '#f6f7f9')
}

applyTheme(root.dataset.theme === 'light' ? 'light' : 'dark')

toggle?.addEventListener('click', () => {
  const next: Theme = root.dataset.theme === 'dark' ? 'light' : 'dark'
  try {
    localStorage.setItem('theme', next)
  } catch {
    // Stockage indisponible (navigation privée) : le choix vaut pour la visite.
  }

  const doc = document as unknown as ViewTransitionDocument
  if (reducedMotion.matches || typeof doc.startViewTransition !== 'function') {
    applyTheme(next)
    return
  }

  // Coordonnées en pourcentages : les valeurs en px se décalent sur les
  // écrans à mise à l'échelle fractionnaire (Windows 150 %).
  const { left, top, width, height } = toggle.getBoundingClientRect()
  const vw = window.innerWidth
  const vh = window.innerHeight
  const x = left + width / 2
  const y = top + height / 2
  const radius = Math.hypot(Math.max(x, vw - x), Math.max(y, vh - y))
  const at = `at ${(x / vw) * 100}% ${(y / vh) * 100}%`
  const end = `${(radius / (Math.hypot(vw, vh) / Math.SQRT2)) * 100}%`

  const transition = doc.startViewTransition.call(document, () => applyTheme(next))
  transition.ready
    .then(() => {
      root.animate(
        { clipPath: [`circle(0% ${at})`, `circle(${end} ${at})`] },
        { duration: 560, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', pseudoElement: '::view-transition-new(root)' },
      )
    })
    .catch(() => {})
})

// ── Barre de progression de la lecture ────────────────────────────
// Portage du Scroll Progress de Magic UI.
const progress = document.querySelector<HTMLElement>('[data-progress]')
if (progress) {
  let queued = false
  const update = () => {
    queued = false
    const max = root.scrollHeight - window.innerHeight
    progress.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`
  }
  window.addEventListener(
    'scroll',
    () => {
      if (queued) return
      queued = true
      requestAnimationFrame(update)
    },
    { passive: true },
  )
  window.addEventListener('resize', update)
  update()
}

// ── Halo qui suit le pointeur sur les cartes ──────────────────────
// Portage de la Magic Card de Magic UI : le CSS lit --mx et --my.
document.querySelectorAll<HTMLElement>('[data-spotlight]').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    card.style.setProperty('--my', `${event.clientY - rect.top}px`)
  })
})

// ── Compteurs ─────────────────────────────────────────────────────
// Portage du Number Ticker de Magic UI : le HTML porte déjà la valeur finale.
if (!reducedMotion.matches) {
  document.querySelectorAll<HTMLElement>('[data-ticker]').forEach((el) => {
    const target = Number(el.dataset.ticker)
    if (!Number.isFinite(target)) return
    el.style.display = 'inline-block'
    el.style.minWidth = `${String(target).length}ch`
    el.textContent = '0'
    const begin = performance.now() + 400
    const step = (now: number) => {
      const p = Math.max(0, Math.min(1, (now - begin) / 1400))
      el.textContent = String(Math.round(target * (p >= 1 ? 1 : 1 - 2 ** (-10 * p))))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  })
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
        const active = link.hash === `#${entry.target.id}`
        link.classList.toggle('is-active', active)
        if (active) link.setAttribute('aria-current', 'location')
        else link.removeAttribute('aria-current')
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

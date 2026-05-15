import { useState } from 'react'
import { en } from '../content/en'

const nav = [
  { href: '#about', label: en.nav.about },
  { href: '#formats', label: en.nav.formats },
  { href: '#moments', label: en.nav.moments },
  { href: '#artists', label: en.nav.artists },
  { href: '#media', label: en.nav.media },
  { href: '#contact', label: en.nav.contact },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <a className="logo" href="#top" onClick={() => setOpen(false)}>
          <span className="logo__mark" aria-hidden="true" />
          <span className="logo__stack">
            <span className="logo__text">{en.site.name}</span>
            <span className="logo__tagline">{en.site.logoTagline}</span>
          </span>
        </a>

        <nav
          id="site-nav"
          className={`nav ${open ? 'nav--open' : ''}`}
          aria-label="Primary"
        >
          <ul className="nav__list">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <div className="lang-toggle" role="group" aria-label="Language (coming soon)">
            <span className="lang-toggle__item lang-toggle__item--active">EN</span>
            <span className="lang-toggle__sep" aria-hidden="true">
              /
            </span>
            <span className="lang-toggle__item">ES</span>
          </div>
          <a className="btn btn--sm btn--primary" href="#contact" onClick={() => setOpen(false)}>
            {en.hero.ctaPrimary}
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="nav-toggle__bar" />
            <span className="nav-toggle__bar" />
          </button>
        </div>
      </div>
    </header>
  )
}

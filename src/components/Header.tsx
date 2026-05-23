import { useState } from 'react'
import { JazzmarriedLogo } from './JazzmarriedLogo'
import { en } from '../content/en'

type HeaderVariant = 'home' | 'corporate'

const homeNav = [
  { href: '#top', label: en.nav.home },
  { href: '#weddings', label: en.nav.weddings },
  { href: '#experiences', label: en.nav.experiences },
  { href: '#work', label: en.nav.work },
  { href: '#formats', label: en.nav.formats },
  { href: '#videos', label: en.nav.videos },
  { href: '#about', label: en.nav.about },
  { href: '/corporate-events-barcelona', label: en.nav.corporate },
  { href: '#contact', label: en.nav.contact },
]

const corporateNav = [
  { href: '/', label: en.nav.home },
  { href: '#perfect-for', label: 'Perfect for' },
  { href: '#formats', label: en.nav.formats },
  { href: '#why', label: 'Why JazzMarried' },
  { href: '#use-cases', label: 'Use cases' },
  { href: '/#contact', label: en.nav.contact },
]

type HeaderProps = {
  variant?: HeaderVariant
}

export function Header({ variant = 'home' }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const nav = variant === 'corporate' ? corporateNav : homeNav
  const logoHref = variant === 'corporate' ? '/' : '#top'
  const contactHref = variant === 'corporate' ? '/#contact' : '#contact'

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <a
          className="logo"
          href={logoHref}
          onClick={() => setOpen(false)}
          aria-label={`${en.site.name}. ${en.site.logoTagline}`}
        >
          <JazzmarriedLogo name={en.site.name} tagline={en.site.logoTagline} />
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
          <a className="btn btn--sm btn--primary" href={contactHref} onClick={() => setOpen(false)}>
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

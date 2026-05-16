import { en } from '../content/en'

const footerNav = [
  { href: '#top', label: en.nav.home },
  { href: '#weddings', label: en.nav.weddings },
  { href: '#formats', label: en.nav.formats },
  { href: '#videos', label: en.nav.videos },
  { href: '#about', label: en.nav.about },
  { href: '#contact', label: en.nav.contact },
]

const externalLinks = [
  { href: 'https://www.instagram.com/', label: en.footer.links.instagram, external: true },
  { href: 'https://www.bodas.net/', label: en.footer.links.bodas, external: true },
]

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">{en.site.name}</p>
          <p className="site-footer__tag">{en.footer.line1}</p>
          <p className="site-footer__loc">{en.footer.line2}</p>
        </div>
        <nav className="site-footer__nav" aria-label="Footer">
          <ul>
            {footerNav.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
            {externalLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="site-footer__fine">© {new Date().getFullYear()} {en.site.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}

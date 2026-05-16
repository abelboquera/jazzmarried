import { en } from '../content/en'

const links = [
  { href: 'https://www.instagram.com/', label: en.footer.links.instagram, external: true },
  { href: 'https://www.bodas.net/', label: en.footer.links.bodas, external: true },
  { href: 'https://example.com/the-shu-shus', label: en.footer.links.shushu, external: true },
  { href: 'https://example.com/abel-boquera', label: en.footer.links.abel, external: true },
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
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} target={l.external ? '_blank' : undefined} rel={l.external ? 'noreferrer' : undefined}>
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

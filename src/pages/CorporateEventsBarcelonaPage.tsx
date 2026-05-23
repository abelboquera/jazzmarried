import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { RevealSection } from '../components/RevealSection'
import { corporateEventsBarcelona as c } from '../content/corporateEventsBarcelona'
import { usePageSeo } from '../hooks/usePageSeo'

export function CorporateEventsBarcelonaPage() {
  usePageSeo(c.seo)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header variant="corporate" />
      <main id="main" className="corporate-page">
        <section className="corporate-hero" aria-labelledby="corporate-hero-heading">
          <div className="corporate-hero__bg" aria-hidden="true">
            <img src={c.hero.image} alt="" loading="eager" decoding="async" />
            <div className="corporate-hero__scrim" />
          </div>
          <div className="shell corporate-hero__content">
            <p className="corporate-hero__eyebrow">Barcelona · corporate &amp; international events</p>
            <h1 id="corporate-hero-heading" className="corporate-hero__title">
              {c.hero.headline}
            </h1>
            <p className="corporate-hero__subtitle">{c.hero.subtitle}</p>
            <div className="corporate-hero__cta">
              <a className="btn btn--primary" href={c.cta.contactHref}>
                {c.hero.ctaPrimary}
              </a>
              <a
                className="btn btn--ghost corporate-hero__btn-ghost"
                href={c.hero.pdfHref}
                title={c.hero.pdfNote}
              >
                {c.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </section>

        <RevealSection id="perfect-for" className="section section--corporate-light">
          <div className="shell section__inner">
            <div className="section__header">
              <h2 className="section__title">{c.perfectFor.title}</h2>
              <p className="section__lede">{c.perfectFor.intro}</p>
              <div className="rule" aria-hidden="true" />
            </div>
            <ul className="corporate-tags">
              {c.perfectFor.items.map((item) => (
                <li key={item} className="corporate-tags__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        <RevealSection id="formats" className="section section--formats">
          <div className="shell section__inner">
            <div className="section__header">
              <h2 className="section__title">{c.formats.title}</h2>
              <p className="section__lede">{c.formats.intro}</p>
              <div className="rule" aria-hidden="true" />
            </div>
            <ul className="card-grid card-grid--formats">
              {c.formats.items.map((item) => (
                <li key={item.title} className="format-card">
                  <h3 className="format-card__title">{item.title}</h3>
                  <p className="format-card__body">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        <RevealSection id="why" className="section section--why">
          <div className="shell section__inner">
            <div className="section__header">
              <h2 className="section__title">{c.why.title}</h2>
              <div className="rule" aria-hidden="true" />
            </div>
            <ul className="why-list">
              {c.why.items.map((text) => (
                <li key={text} className="why-list__item">
                  <span className="why-list__icon" aria-hidden="true" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        <RevealSection id="use-cases" className="section section--corporate-light">
          <div className="shell section__inner">
            <div className="section__header">
              <h2 className="section__title">{c.useCases.title}</h2>
              <div className="rule" aria-hidden="true" />
            </div>
            <ul className="corporate-use-cases">
              {c.useCases.items.map((text) => (
                <li key={text} className="corporate-use-cases__item">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        <RevealSection id="contact" className="section section--corporate-cta">
          <div className="shell section__inner corporate-cta">
            <h2 className="corporate-cta__title">{c.cta.title}</h2>
            <p className="corporate-cta__body">{c.cta.body}</p>
            <div className="corporate-cta__actions">
              <a className="btn btn--primary" href={c.cta.contactHref}>
                {c.cta.button}
              </a>
              <a className="corporate-cta__email" href={`mailto:${c.cta.email}`}>
                {c.cta.email}
              </a>
            </div>
          </div>
        </RevealSection>
      </main>
      <Footer />
    </>
  )
}

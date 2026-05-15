import { en } from '../content/en'

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-heading">
      <div
        className="hero__bg"
        role="img"
        aria-label="Warm boutique background for Jazzmarried — replace with your photography when ready."
      >
        <div className="hero__bg-image" />
        <div className="hero__scrim" aria-hidden="true" />
      </div>
      <div className="shell hero__content">
        <p className="hero__eyebrow">{en.hero.eyebrow}</p>
        <h1 id="hero-heading" className="hero__title">
          {en.hero.headline}
        </h1>
        <p className="hero__subtitle">{en.hero.subtitle}</p>
        <p className="hero__trust">{en.hero.trustLine}</p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#contact">
            {en.hero.ctaPrimary}
          </a>
          <a className="btn btn--ghost" href="#formats">
            {en.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}

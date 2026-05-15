import { en } from '../content/en'

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-heading">
      <div
        className="hero__bg"
        role="img"
        aria-label="Black and white photograph of vocalist Sinead Savage with band members outdoors in Barcelona."
      >
        <div className="hero__bg-image" />
        <div className="hero__scrim" />
      </div>
      <div className="shell hero__content">
        <p className="hero__eyebrow">Barcelona · weddings & private events</p>
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

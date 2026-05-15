import { en } from '../content/en'

const HERO_VIDEO_SRC = '/media/voice-band-live.mp4'
const HERO_POSTER = '/images/band-sinead-flytones.png'

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-heading">
      <div className="hero__bg">
        <div className="hero__bg-fallback" aria-hidden="true" />
        <video
          className="hero__bg-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER}
          aria-label="Live performance footage — Jazzmarried collective on stage."
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="hero__scrim" aria-hidden="true" />
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

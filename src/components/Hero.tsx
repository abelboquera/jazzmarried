import { useCallback, useRef, useState } from 'react'
import { en } from '../content/en'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const HERO_VIDEO_SRC = '/media/voice-band-live.mp4'
const HERO_POSTER = '/images/band-sinead-flytones.jpg'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reducedMotion = usePrefersReducedMotion()
  const [soundOn, setSoundOn] = useState(false)

  const toggleSound = useCallback(() => {
    if (!videoRef.current || reducedMotion) return
    setSoundOn((prev) => {
      const next = !prev
      if (next) {
        queueMicrotask(() => {
          const el = videoRef.current
          if (!el) return
          el.volume = 1
          void el.play().catch(() => {
            setSoundOn(false)
          })
        })
      }
      return next
    })
  }, [reducedMotion])

  return (
    <section id="top" className="hero" aria-labelledby="hero-heading">
      <div className="hero__bg">
        <div className="hero__bg-fallback" aria-hidden="true" />
        <video
          ref={videoRef}
          className="hero__bg-video"
          autoPlay
          muted={!soundOn}
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER}
          aria-label="Live performance footage — JazzMarried collective on stage."
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="hero__scrim" aria-hidden="true" />
      </div>
      <div className="shell hero__content">
        <h1 id="hero-heading" className="hero__title">
          {en.hero.headline}
        </h1>
        <p className="hero__subtitle">{en.hero.subtitle}</p>
        <p className="hero__trust">{en.hero.trustLine}</p>

        {!reducedMotion ? (
          <div className="hero__sound-row">
            <button
              type="button"
              className="hero__sound-toggle"
              onClick={toggleSound}
              aria-pressed={soundOn}
              aria-label={soundOn ? en.hero.soundMuteAria : en.hero.soundOnAria}
            >
              {soundOn ? en.hero.soundMute : en.hero.soundOn}
            </button>
            <span className="hero__sound-hint">{en.hero.soundHint}</span>
          </div>
        ) : null}

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

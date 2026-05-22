import { useCallback, useEffect, useRef, useState } from 'react'
import { en } from '../content/en'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const HERO_VIDEO_SRC = '/media/voice-band-live.mp4'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reducedMotion = usePrefersReducedMotion()
  const [soundOn, setSoundOn] = useState(false)

  useEffect(() => {
    if (reducedMotion) return
    const video = videoRef.current
    if (!video) return

    video.setAttribute('playsinline', '')
    video.setAttribute('webkit-playsinline', '')

    const tryPlay = () => {
      void video.play().catch(() => {
        /* iOS may defer autoplay until interaction */
      })
    }

    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      tryPlay()
    } else {
      video.addEventListener('loadeddata', tryPlay, { once: true })
      video.addEventListener('canplay', tryPlay, { once: true })
    }

    return () => {
      video.removeEventListener('loadeddata', tryPlay)
      video.removeEventListener('canplay', tryPlay)
    }
  }, [reducedMotion])

  const toggleSound = useCallback(() => {
    if (!videoRef.current || reducedMotion) return
    setSoundOn((prev) => {
      const next = !prev
      const el = videoRef.current
      if (!el) return next
      el.muted = !next
      if (next) {
        el.volume = 1
        queueMicrotask(() => {
          void el.play().catch(() => {
            setSoundOn(false)
            el.muted = true
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
          preload="auto"
          aria-label="Live performance footage — JazzMarried curated lineup on stage."
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
          <a className="btn btn--ghost" href="#videos">
            {en.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}

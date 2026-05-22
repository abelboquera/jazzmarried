import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { en } from '../content/en'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const HERO_VIDEO_SRC = '/media/voice-band-live.mp4'

function ensureMuted(video: HTMLVideoElement) {
  video.defaultMuted = true
  video.muted = true
  video.volume = 0
  video.setAttribute('muted', '')
}

async function playMuted(video: HTMLVideoElement): Promise<boolean> {
  ensureMuted(video)
  try {
    await video.play()
    return !video.paused
  } catch {
    return false
  }
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const reducedMotion = usePrefersReducedMotion()
  const [soundOn, setSoundOn] = useState(false)

  useLayoutEffect(() => {
    if (reducedMotion) return
    const video = videoRef.current
    if (!video) return

    video.setAttribute('playsinline', '')
    video.setAttribute('webkit-playsinline', '')
    ensureMuted(video)
    void playMuted(video)
  }, [reducedMotion])

  useEffect(() => {
    if (reducedMotion) return
    const video = videoRef.current
    if (!video) return

    const onReady = () => {
      void playMuted(video)
    }

    video.addEventListener('loadedmetadata', onReady)
    video.addEventListener('canplay', onReady)

    const onPageShow = () => {
      if (video.paused) void playMuted(video)
    }
    window.addEventListener('pageshow', onPageShow)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && video.paused) void playMuted(video)
      },
      { threshold: 0.15 },
    )
    observer.observe(video)

    return () => {
      video.removeEventListener('loadedmetadata', onReady)
      video.removeEventListener('canplay', onReady)
      window.removeEventListener('pageshow', onPageShow)
      observer.disconnect()
    }
  }, [reducedMotion])

  useEffect(() => {
    if (reducedMotion) return
    const section = sectionRef.current
    if (!section) return

    const onFirstTouch = () => {
      const video = videoRef.current
      if (video?.paused) void playMuted(video)
    }

    section.addEventListener('touchstart', onFirstTouch, { once: true, passive: true })
    return () => section.removeEventListener('touchstart', onFirstTouch)
  }, [reducedMotion])

  const toggleSound = useCallback(() => {
    const el = videoRef.current
    if (!el || reducedMotion) return

    setSoundOn((prev) => {
      const next = !prev
      if (next) {
        void playMuted(el).then((playing) => {
          if (!playing) {
            setSoundOn(false)
            return
          }
          el.muted = false
          el.volume = 1
          el.removeAttribute('muted')
        })
      } else {
        ensureMuted(el)
      }
      return next
    })
  }, [reducedMotion])

  return (
    <section ref={sectionRef} id="top" className="hero" aria-labelledby="hero-heading">
      <div className="hero__bg">
        <div className="hero__bg-fallback" aria-hidden="true" />
        <video
          ref={videoRef}
          className="hero__bg-video"
          autoPlay
          muted
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

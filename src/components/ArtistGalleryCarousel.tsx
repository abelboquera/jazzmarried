import { useCallback, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export type GallerySlide = {
  readonly src: string
  readonly width: number
  readonly height: number
  readonly alt: string
  readonly caption: string
}

type Props = {
  slides: readonly GallerySlide[]
  ariaLabel: string
  prevLabel: string
  nextLabel: string
  dotLabel: (index: number, total: number) => string
}

export function ArtistGalleryCarousel({
  slides,
  ariaLabel,
  prevLabel,
  nextLabel,
  dotLabel,
}: Props) {
  const n = slides.length
  const [index, setIndex] = useState(0)
  const reduced = usePrefersReducedMotion()
  const touchStartX = useRef<number | null>(null)

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + n * 10) % n)
    },
    [n],
  )

  const slide = slides[index]

  return (
    <div
      className="artist-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') {
          e.preventDefault()
          go(-1)
        }
        if (e.key === 'ArrowRight') {
          e.preventDefault()
          go(1)
        }
      }}
    >
      <div
        className="artist-carousel__frame"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0]?.clientX ?? null
        }}
        onTouchEnd={(e) => {
          const start = touchStartX.current
          touchStartX.current = null
          if (start == null) return
          const end = e.changedTouches[0]?.clientX
          if (end == null) return
          const dx = end - start
          if (dx > 56) go(-1)
          if (dx < -56) go(1)
        }}
      >
        <div className="artist-carousel__media">
          <img
            key={slide.src}
            src={slide.src}
            width={slide.width}
            height={slide.height}
            alt={slide.alt}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
            className={reduced ? undefined : 'artist-carousel__img'}
          />
        </div>
        <figcaption className="artist-gallery__credit" aria-live="polite">
          {slide.caption}
        </figcaption>
      </div>

      <div className="artist-carousel__toolbar">
        <button type="button" className="artist-carousel__arrow" onClick={() => go(-1)} aria-label={prevLabel}>
          ‹
        </button>
        <ul className="artist-carousel__dots" aria-label="Slides">
          {slides.map((_, i) => (
            <li key={i}>
              <button
                type="button"
                className={`artist-carousel__dot${i === index ? ' artist-carousel__dot--active' : ''}`}
                aria-label={dotLabel(i + 1, n)}
                aria-current={i === index ? 'true' : undefined}
                onClick={() => setIndex(i)}
              />
            </li>
          ))}
        </ul>
        <button type="button" className="artist-carousel__arrow" onClick={() => go(1)} aria-label={nextLabel}>
          ›
        </button>
      </div>
    </div>
  )
}

import { en } from '../content/en'
import { RevealSection } from './RevealSection'

export function Artists() {
  const paras = en.artists.paragraphs
  const last = paras.length - 1

  return (
    <RevealSection id="artists" className="section section--artists">
      <div className="shell section__inner">
        <div className="section__header">
          <h2 className="section__title">{en.artists.title}</h2>
          <div className="rule" aria-hidden="true" />
        </div>

        <div className="artist-gallery" aria-label="Press and live photos">
          <figure className="artist-gallery__item artist-gallery__item--wide">
            <img
              src="/images/band-sinead-flytones.jpg"
              width={3208}
              height={2104}
              alt="Sinead Savage with The Flytones — group photo outdoors in Barcelona."
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className="artist-gallery__item">
            <img
              src="/images/sinead-live.jpg"
              width={746}
              height={960}
              alt="Sinead Savage performing live — intimate stage atmosphere."
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className="artist-gallery__item">
            <img
              src="/images/sinead-portrait.jpg"
              width={3456}
              height={2108}
              alt="Sinead Savage — vocalist with Jazzmarried collective line-ups."
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        <figure className="artist-gallery__david">
          <img
            src="/images/david-philips-solo.png"
            width={1024}
            height={536}
            alt="David Philips — singer-guitarist with acoustic guitar, portrait with directional light and dark background."
            loading="lazy"
            decoding="async"
          />
        </figure>
        <p className="artist-gallery__david-caption">{en.artists.davidPhotoCaption}</p>

        <p className="artist-gallery__caption">{en.artists.galleryCaption}</p>

        <div className="prose prose--narrow">
          {paras.map((text, i) => (
            <p key={i} className={i === last ? 'prose__highlight' : undefined}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}

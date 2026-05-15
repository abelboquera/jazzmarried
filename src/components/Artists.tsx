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
            <div className="artist-gallery__thumb">
              <img
                src="/images/band-sinead-flytones.jpg"
                width={3208}
                height={2104}
                alt="Sinead Savage with The Flytones — voice-led band outdoors in Barcelona."
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="artist-gallery__credit">
              {en.artists.sineadBandPhotoCaption}
            </figcaption>
          </figure>
          <figure className="artist-gallery__item">
            <div className="artist-gallery__thumb">
              <img
                src="/images/shu-shus-trio.png"
                width={1024}
                height={678}
                alt="The Shu Shu’s — instrumental trio, promotional black and white portrait of three musicians."
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="artist-gallery__credit">
              {en.artists.shuShusPhotoCaption}
            </figcaption>
          </figure>
          <figure className="artist-gallery__item">
            <div className="artist-gallery__thumb">
              <img
                src="/images/sinead-live.jpg"
                width={746}
                height={960}
                alt="Sinead Savage performing live — intimate stage atmosphere."
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="artist-gallery__credit">
              {en.artists.sineadPhotoCaption}
            </figcaption>
          </figure>
        </div>

        <div className="artist-gallery__spotlights">
          <figure className="artist-gallery__spotlight">
            <img
              src="/images/abel-boquera.png"
              width={1024}
              height={768}
              alt="Abel Boquera — pianist, studio portrait."
              loading="lazy"
              decoding="async"
            />
            <figcaption className="artist-gallery__credit">{en.artists.abelPhotoCaption}</figcaption>
          </figure>

          <figure className="artist-gallery__spotlight">
            <img
              src="/images/david-philips-solo.png"
              width={1024}
              height={536}
              alt="David Philips — singer-guitarist with acoustic guitar, portrait with directional light and dark background."
              loading="lazy"
              decoding="async"
            />
            <figcaption className="artist-gallery__credit">{en.artists.davidPhotoCaption}</figcaption>
          </figure>
        </div>

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

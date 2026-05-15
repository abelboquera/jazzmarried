import { ArtistGalleryCarousel, type GallerySlide } from './ArtistGalleryCarousel'
import { en } from '../content/en'
import { RevealSection } from './RevealSection'

export function Artists() {
  const paras = en.artists.paragraphs
  const last = paras.length - 1

  const slides: readonly GallerySlide[] = [
    {
      src: '/images/band-sinead-flytones.jpg',
      width: 3208,
      height: 2104,
      alt: 'Sinead Savage with The Flytones — voice-led band outdoors in Barcelona.',
      caption: en.artists.sineadBandPhotoCaption,
    },
    {
      src: '/images/shu-shus-trio.png',
      width: 1024,
      height: 678,
      alt: 'The Shu Shu’s — instrumental trio, promotional black and white portrait of three musicians.',
      caption: en.artists.shuShusPhotoCaption,
    },
    {
      src: '/images/sinead-live.jpg',
      width: 746,
      height: 960,
      alt: 'Sinead Savage performing live — intimate stage atmosphere.',
      caption: en.artists.sineadPhotoCaption,
    },
    {
      src: '/images/abel-boquera.png',
      width: 1024,
      height: 768,
      alt: 'Abel Boquera — pianist, studio portrait.',
      caption: en.artists.abelPhotoCaption,
    },
    {
      src: '/images/david-philips-solo.png',
      width: 1024,
      height: 536,
      alt: 'David Philips — singer-guitarist with acoustic guitar, portrait with directional light and dark background.',
      caption: en.artists.davidPhotoCaption,
    },
  ]

  return (
    <RevealSection id="artists" className="section section--artists">
      <div className="shell section__inner">
        <div className="section__header">
          <h2 className="section__title">{en.artists.title}</h2>
          <div className="rule" aria-hidden="true" />
        </div>

        <ArtistGalleryCarousel
          slides={slides}
          ariaLabel={en.artists.carouselAriaLabel}
          prevLabel={en.artists.carouselPrev}
          nextLabel={en.artists.carouselNext}
          dotLabel={(photoNumber, total) => `Photo ${photoNumber} of ${total}`}
        />

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

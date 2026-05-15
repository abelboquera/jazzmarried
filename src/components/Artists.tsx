import { en } from '../content/en'
import { RevealSection } from './RevealSection'

export function Artists() {
  return (
    <RevealSection id="artists" className="section section--artists">
      <div className="shell section__inner">
        <div className="section__header">
          <h2 className="section__title">{en.artists.title}</h2>
          <p className="section__lede section__lede--narrow">{en.artists.intro}</p>
        </div>

        <div className="artist-gallery" aria-label="Press and live photos">
          <figure className="artist-gallery__item artist-gallery__item--wide">
            <img
              src="/images/band-sinead-flytones.png"
              width={1200}
              height={800}
              alt="Black and white group portrait of musicians at an outdoor celebration in Barcelona."
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className="artist-gallery__item">
            <img
              src="/images/sinead-live.png"
              width={800}
              height={1200}
              alt="Vocalist performing outdoors with handheld microphone — intimate live atmosphere."
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className="artist-gallery__item">
            <img
              src="/images/sinead-portrait.png"
              width={1200}
              height={800}
              alt="Portrait of a vocalist smiling, wearing a wide-brimmed hat, black and white."
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
        <p className="artist-gallery__caption">{en.artists.galleryCaption}</p>

        <ul className="artist-blocks">
          {en.artists.blocks.map((b) => (
            <li key={b.title} className="artist-block">
              <h3 className="artist-block__title">{b.title}</h3>
              <p>{b.body}</p>
            </li>
          ))}
        </ul>
        <p className="artist-network-note">{en.artists.networkNote}</p>
      </div>
    </RevealSection>
  )
}

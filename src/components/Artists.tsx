import { en } from '../content/en'
import { RevealSection } from './RevealSection'

export function Artists() {
  const blocks = [
    { title: en.artists.sinead.name, body: en.artists.sinead.body },
    { title: en.artists.shushu.name, body: en.artists.shushu.body },
    { title: en.artists.scene.name, body: en.artists.scene.body },
  ]

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
              alt="Sinead Savage with band members The Flytones, black and white group portrait in Barcelona."
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className="artist-gallery__item">
            <img
              src="/images/sinead-live.png"
              width={800}
              height={1200}
              alt="Sinead Savage singing into a microphone at an outdoor performance."
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className="artist-gallery__item">
            <img
              src="/images/sinead-portrait.png"
              width={1200}
              height={800}
              alt="Sinead Savage smiling, wearing a wide-brimmed hat, black and white portrait."
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
        <p className="artist-gallery__caption">{en.artists.galleryCaption}</p>

        <ul className="artist-blocks">
          {blocks.map((b) => (
            <li key={b.title} className="artist-block">
              <h3 className="artist-block__title">{b.title}</h3>
              <p>{b.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </RevealSection>
  )
}

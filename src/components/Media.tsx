import { en } from '../content/en'
import { RevealSection } from './RevealSection'

/** Paths under `public/` — swap or extend when you add YouTube embeds. */
const VOICE_BAND_VIDEO = '/media/voice-band-live.mp4'
const POSTER = '/images/band-sinead-flytones.png'
const PHOTO_ENSEMBLE = '/images/band-sinead-flytones.png'
const PHOTO_INTIMATE = '/images/sinead-live.png'

export function Media() {
  const [item0, item1, item2] = en.media.items

  return (
    <RevealSection id="media" className="section section--media">
      <div className="shell section__inner">
        <div className="section__header">
          <h2 className="section__title">{en.media.title}</h2>
          <p className="section__lede">{en.media.intro}</p>
        </div>
        <ul className="media-grid">
          <li className="media-card">
            <div className="media-card__frame">
              <video
                className="media-card__video"
                controls
                playsInline
                preload="metadata"
                poster={POSTER}
                aria-label={item0.title}
              >
                <source src={VOICE_BAND_VIDEO} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h3 className="media-card__title">{item0.title}</h3>
          </li>

          <li className="media-card">
            <div className="media-card__frame">
              <figure className="media-card__photo">
                <img
                  src={PHOTO_ENSEMBLE}
                  width={1200}
                  height={675}
                  alt="Soul-jazz ensemble line-up with Sinead Savage and musicians in Barcelona."
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <h3 className="media-card__title">{item1.title}</h3>
          </li>

          <li className="media-card">
            <div className="media-card__frame">
              <figure className="media-card__photo">
                <img
                  src={PHOTO_INTIMATE}
                  width={800}
                  height={450}
                  alt="Sinead Savage performing outdoors — intimate live atmosphere for cocktails or dinner."
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
            <h3 className="media-card__title">{item2.title}</h3>
          </li>
        </ul>
      </div>
    </RevealSection>
  )
}

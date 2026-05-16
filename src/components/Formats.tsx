import { en } from '../content/en'
import { RevealSection } from './RevealSection'

function embedSrc(youtubeId: string) {
  return `https://www.youtube.com/embed/${youtubeId}?rel=0`
}

export function Formats() {
  return (
    <RevealSection id="formats" className="section section--formats">
      <div className="shell section__inner">
        <div className="section__header">
          <h2 className="section__title">{en.formats.title}</h2>
          <p className="section__lede">{en.formats.intro}</p>
          <div className="rule" aria-hidden="true" />
        </div>
        <ul className="card-grid card-grid--formats">
          {en.formats.items.map((item) => {
            const clips = 'clips' in item ? item.clips : undefined
            const hasClips = clips && clips.length > 0
            return (
              <li
                key={item.title}
                className={`format-card${hasClips ? ' format-card--has-media' : ''}${hasClips && clips.length > 1 ? ' format-card--wide' : ''}`}
              >
                {hasClips ? (
                  <div className="format-card__clips">
                    {clips.map((clip) => (
                      <div key={clip.youtubeId} className="format-card__clip">
                        <div className="format-card__embed">
                          <iframe
                            src={embedSrc(clip.youtubeId)}
                            title={`${item.title} — ${clip.label}`}
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          />
                        </div>
                        <p className="format-card__clip-label">{clip.label}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
                <div className="format-card__content">
                  <h3 className="format-card__title">{item.title}</h3>
                  <p className="format-card__body">{item.body}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </RevealSection>
  )
}

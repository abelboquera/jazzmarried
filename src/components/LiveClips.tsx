import { en } from '../content/en'
import { RevealSection } from './RevealSection'

function embedSrc(youtubeId: string) {
  return `https://www.youtube.com/embed/${youtubeId}?rel=0`
}

export function LiveClips() {
  return (
    <RevealSection id="videos" className="section section--videos">
      <div className="shell section__inner">
        <div className="section__header">
          <h2 className="section__title">{en.liveClips.title}</h2>
          <p className="section__lede">{en.liveClips.intro}</p>
          <div className="rule" aria-hidden="true" />
        </div>
        <ul className="media-grid">
          {en.liveClips.items.map((item) => (
            <li key={item.youtubeId} className="media-card">
              <div className="media-card__frame">
                <div className="media-card__embed">
                  <iframe
                    src={embedSrc(item.youtubeId)}
                    title={item.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
              <h3 className="media-card__title">{item.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </RevealSection>
  )
}

import { en } from '../content/en'
import { RevealSection } from './RevealSection'

export function Media() {
  return (
    <RevealSection id="media" className="section section--media">
      <div className="shell section__inner">
        <div className="section__header">
          <h2 className="section__title">{en.media.title}</h2>
          <p className="section__lede">{en.media.intro}</p>
        </div>
        <ul className="media-grid">
          {en.media.items.map((item) => (
            <li key={item.title} className="media-card">
              <div className="media-card__frame">
                <div className="media-card__placeholder" role="img" aria-label={`${item.title} — ${item.hint}`}>
                  <span className="media-card__play" aria-hidden="true" />
                  <span className="media-card__hint">{item.hint}</span>
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

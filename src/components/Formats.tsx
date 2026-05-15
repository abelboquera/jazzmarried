import { en } from '../content/en'
import { RevealSection } from './RevealSection'

export function Formats() {
  return (
    <RevealSection id="formats" className="section section--formats">
      <div className="shell section__inner">
        <div className="section__header">
          <h2 className="section__title">{en.formats.title}</h2>
          <p className="section__lede">{en.formats.intro}</p>
          <div className="rule" aria-hidden="true" />
        </div>
        <ul className="card-grid">
          {en.formats.items.map((item) => (
            <li key={item.title} className="format-card">
              <h3 className="format-card__title">{item.title}</h3>
              <p className="format-card__body">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </RevealSection>
  )
}

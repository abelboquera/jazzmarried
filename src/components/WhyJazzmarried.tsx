import { en } from '../content/en'
import { RevealSection } from './RevealSection'

export function WhyJazzmarried() {
  return (
    <RevealSection id="why" className="section section--why">
      <div className="shell section__inner">
        <div className="section__header">
          <h2 className="section__title">{en.why.title}</h2>
          <div className="rule" aria-hidden="true" />
        </div>
        <ul className="why-list">
          {en.why.items.map((text) => (
            <li key={text} className="why-list__item">
              <span className="why-list__icon" aria-hidden="true" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </RevealSection>
  )
}

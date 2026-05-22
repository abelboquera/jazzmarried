import { en } from '../content/en'
import { RevealSection } from './RevealSection'

export function Moments() {
  return (
    <RevealSection id="weddings" className="section section--moments">
      <div className="shell section__inner">
        <div className="section__header">
          <h2 className="section__title">{en.moments.title}</h2>
          {en.moments.intros.map((text) => (
            <p key={text.slice(0, 48)} className="section__lede">
              {text}
            </p>
          ))}
          <div className="rule" aria-hidden="true" />
        </div>
        <ol className="moments">
          {en.moments.items.map((item, i) => (
            <li key={item.title} className="moments__item">
              <span className="moments__index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="moments__title">{item.title}</h3>
                <p className="moments__body">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </RevealSection>
  )
}

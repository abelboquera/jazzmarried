import { en } from '../content/en'
import { RevealSection } from './RevealSection'

export function About() {
  return (
    <RevealSection id="about" className="section section--about">
      <div className="shell section__inner">
        <div className="section__header">
          <h2 className="section__title">{en.about.title}</h2>
          <div className="rule" aria-hidden="true" />
        </div>
        <div className="prose prose--columns">
          <p>{en.about.p1}</p>
          <p>{en.about.p2}</p>
          <p className="prose__highlight">{en.about.p3}</p>
        </div>
      </div>
    </RevealSection>
  )
}

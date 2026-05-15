import { en } from '../content/en'
import { RevealSection } from './RevealSection'

export function About() {
  const paras = en.about.paragraphs
  const last = paras.length - 1

  return (
    <RevealSection id="about" className="section section--about">
      <div className="shell section__inner">
        <div className="section__header">
          <h2 className="section__title">{en.about.title}</h2>
          <div className="rule" aria-hidden="true" />
        </div>
        <div className="prose prose--columns">
          {paras.map((text, i) => (
            <p key={i} className={i === last ? 'prose__highlight' : undefined}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}

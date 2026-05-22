import { en } from '../content/en'
import { RevealSection } from './RevealSection'

export function CaseStudies() {
  return (
    <RevealSection id="work" className="section section--work">
      <div className="shell section__inner">
        <div className="section__header">
          <h2 className="section__title">{en.caseStudies.title}</h2>
          <p className="section__lede">{en.caseStudies.intro}</p>
          <div className="rule" aria-hidden="true" />
        </div>
        <ul className="case-studies">
          {en.caseStudies.items.map((item) => (
            <li key={item.title} className="case-study">
              <p className="case-study__type">{item.type}</p>
              <h3 className="case-study__title">{item.title}</h3>
              <p className="case-study__meta">
                {item.location} · {item.format}
              </p>
              <p className="case-study__body">{item.body}</p>
              <p className="case-study__highlight">{item.highlight}</p>
            </li>
          ))}
        </ul>
        <p className="case-studies__cta-wrap">
          <a className="btn btn--primary" href="#contact">
            {en.caseStudies.cta}
          </a>
        </p>
      </div>
    </RevealSection>
  )
}

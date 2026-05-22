import { en } from '../content/en'
import { ExperienceCardImage } from './ExperienceCardImage'
import { RevealSection } from './RevealSection'

export function Experiences() {
  return (
    <RevealSection id="experiences" className="section section--experiences">
      <div className="shell section__inner">
        <div className="section__header">
          <h2 className="section__title">{en.experiences.title}</h2>
          <p className="section__lede">{en.experiences.intro}</p>
          <div className="rule" aria-hidden="true" />
        </div>
        <ul className="card-grid card-grid--experiences">
          {en.experiences.items.map((item) => (
            <li key={item.title} className="experience-card">
              <div className="experience-card__media">
                <ExperienceCardImage
                  src={item.image}
                  fallback={item.imageFallback}
                  alt={item.imageAlt}
                />
              </div>
              <div className="experience-card__body-wrap">
                <h3 className="experience-card__title">{item.title}</h3>
                <p className="experience-card__meta">{item.meta}</p>
                <p className="experience-card__body">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="experiences__footnote">{en.experiences.footnote}</p>
        <p className="experiences__cta-wrap">
          <a className="btn btn--primary" href="#contact">
            {en.experiences.cta}
          </a>
        </p>
      </div>
    </RevealSection>
  )
}

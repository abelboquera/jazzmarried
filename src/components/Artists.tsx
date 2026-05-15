import { en } from '../content/en'
import { RevealSection } from './RevealSection'

export function Artists() {
  const blocks = [
    { title: en.artists.sinead.name, body: en.artists.sinead.body },
    { title: en.artists.shushu.name, body: en.artists.shushu.body },
    { title: en.artists.scene.name, body: en.artists.scene.body },
  ]

  return (
    <RevealSection id="artists" className="section section--artists">
      <div className="shell section__inner">
        <div className="section__header">
          <h2 className="section__title">{en.artists.title}</h2>
          <p className="section__lede section__lede--narrow">{en.artists.intro}</p>
        </div>
        <ul className="artist-blocks">
          {blocks.map((b) => (
            <li key={b.title} className="artist-block">
              <h3 className="artist-block__title">{b.title}</h3>
              <p>{b.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </RevealSection>
  )
}

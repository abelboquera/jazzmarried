import { type FormEvent, useState } from 'react'
import { en } from '../content/en'
import { RevealSection } from './RevealSection'

const MAIL = 'hello@jazzmarried.com'

const momentOptions = [
  { value: '', label: en.contact.placeholders.moment },
  { value: 'ceremony', label: 'Ceremony' },
  { value: 'cocktail', label: 'Cocktail' },
  { value: 'dinner', label: 'Dinner' },
  { value: 'celebration', label: 'Celebration' },
  { value: 'other', label: 'Other' },
]

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'opened'>('idle')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const lines = [
      `Name: ${fd.get('name') ?? ''}`,
      `Email: ${fd.get('email') ?? ''}`,
      `Phone / WhatsApp: ${fd.get('phone') ?? ''}`,
      `Event date: ${fd.get('date') ?? ''}`,
      `Event location: ${fd.get('location') ?? ''}`,
      `Event type: ${fd.get('type') ?? ''}`,
      `Music moment: ${fd.get('moment') ?? ''}`,
      `Preferred format: ${fd.get('format') ?? ''}`,
      '',
      String(fd.get('message') ?? ''),
    ]
    const subject = encodeURIComponent(`Jazzmarried inquiry — ${fd.get('date') ?? 'date TBC'}`)
    const body = encodeURIComponent(lines.join('\n'))
    window.location.href = `mailto:${MAIL}?subject=${subject}&body=${body}`
    setStatus('opened')
  }

  return (
    <RevealSection id="contact" className="section section--contact">
      <div className="shell section__inner">
        <div className="contact-grid">
          <div className="contact-intro">
            <h2 className="section__title">{en.contact.title}</h2>
            <p className="contact-intro__lead">{en.contact.lead}</p>
            <p className="contact-intro__closing">{en.contact.closing}</p>
            <p className="contact-intro__seo">
              If you are looking for a live jazz wedding band Barcelona couples trust for taste,{' '}
              <strong>wedding music Barcelona</strong> with a soul-jazz thread,{' '}
              <strong>jazz for weddings</strong> that stays elegant, a <strong>soul band for events</strong>, or{' '}
              <strong>piano for weddings Barcelona</strong> — tell us what you are planning and we will respond with
              format ideas.
            </p>
            <p className="contact-intro__mailto">
              {en.contact.mailtoNote}{' '}
              <a href={`mailto:${MAIL}`}>{en.contact.mailto}</a>
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row form-row--2">
              <label className="field">
                <span className="field__label">{en.contact.fields.name}</span>
                <input name="name" type="text" autoComplete="name" required placeholder={en.contact.placeholders.name} />
              </label>
              <label className="field">
                <span className="field__label">{en.contact.fields.email}</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder={en.contact.placeholders.email}
                />
              </label>
            </div>
            <div className="form-row form-row--2">
              <label className="field">
                <span className="field__label">{en.contact.fields.phone}</span>
                <input name="phone" type="tel" autoComplete="tel" placeholder={en.contact.placeholders.phone} />
              </label>
              <label className="field">
                <span className="field__label">{en.contact.fields.date}</span>
                <input name="date" type="text" placeholder={en.contact.placeholders.date} />
              </label>
            </div>
            <div className="form-row form-row--2">
              <label className="field">
                <span className="field__label">{en.contact.fields.location}</span>
                <input name="location" type="text" placeholder={en.contact.placeholders.location} />
              </label>
              <label className="field">
                <span className="field__label">{en.contact.fields.type}</span>
                <input name="type" type="text" placeholder={en.contact.placeholders.type} />
              </label>
            </div>
            <div className="form-row form-row--2">
              <label className="field">
                <span className="field__label">{en.contact.fields.moment}</span>
                <select name="moment" defaultValue="">
                  {momentOptions.map((o) => (
                    <option key={o.value || 'empty'} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="field">
                <span className="field__label">{en.contact.fields.format}</span>
                <input name="format" type="text" placeholder={en.contact.placeholders.format} />
              </label>
            </div>
            <label className="field">
              <span className="field__label">{en.contact.fields.message}</span>
              <textarea name="message" rows={5} placeholder={en.contact.placeholders.message} />
            </label>
            <div className="contact-form__actions">
              <button type="submit" className="btn btn--primary">
                {en.contact.submit}
              </button>
              {status === 'opened' ? (
                <p className="form-note" role="status">
                  If your mail app did not open, email us directly at {MAIL}.
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </RevealSection>
  )
}

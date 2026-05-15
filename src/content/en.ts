/**
 * English copy for Jazzmarried landing page.
 * Add `src/content/es.ts` later and switch via context or route.
 */
export const en = {
  site: {
    name: 'Jazzmarried',
    tagline: 'Live jazz, soul & vintage music for weddings and private events.',
  },
  nav: {
    about: 'About',
    formats: 'Formats',
    moments: 'Moments',
    artists: 'Collaborators',
    media: 'Media',
    why: 'Why Jazzmarried',
    contact: 'Contact',
  },
  hero: {
    headline: 'Jazz, soul & vintage grooves for weddings and private events',
    subtitle:
      'Jazzmarried is a play on “Just Married”: elegant live music for ceremonies, cocktails, dinners and private celebrations in Barcelona and beyond.',
    trustLine:
      'Directed by Abel Boquera · Barcelona jazz & soul musicians · Custom live formats',
    ctaPrimary: 'Request availability',
    ctaSecondary: 'Explore formats',
  },
  about: {
    title: 'About',
    p1: 'Jazzmarried is a live music project for weddings and private events inspired by jazz, soul, rhythm & blues, bossa nova and vintage sounds.',
    p2: 'Directed by Abel Boquera, pianist and Hammond organist, the project brings together professional musicians from Barcelona’s jazz and soul scene to create tailored live formats for each event.',
    p3: 'From intimate piano solo performances to voice-led bands, organ trio grooves or full soul-jazz lineups, Jazzmarried adapts the music to the space, the atmosphere and the people in the room.',
    p4: 'Abel has performed and collaborated with artists such as Gisele Jackson, Muriel Grossmann, Ray Gelato, Benjamin Herman and Adrian Cunningham.',
  },
  formats: {
    title: 'Formats',
    intro: 'Choose the scale that fits your space, schedule and energy.',
    items: [
      {
        title: 'Piano solo',
        body: 'Perfect for ceremonies, intimate cocktails and elegant dinners.',
      },
      {
        title: 'Duo',
        body: 'Voice & piano, sax & piano, guitar & voice, or other intimate combinations.',
      },
      {
        title: 'Jazz trio / organ trio',
        body: 'Warm jazz, bossa nova, blues and soul-jazz grooves with more presence.',
      },
      {
        title: 'Voice + band',
        body: 'A vocalist-led format for cocktails, dinners and celebrations with more energy.',
      },
      {
        title: 'Full soul-jazz band',
        body: 'A larger live band for events that need rhythm, character and a stronger stage presence.',
      },
    ],
  },
  moments: {
    title: 'Moments',
    intro: 'Music shaped for each chapter of the day.',
    items: [
      {
        title: 'Ceremony',
        body: 'Elegant songs, ballads and personal requests with clarity and warmth.',
      },
      {
        title: 'Cocktail',
        body: 'Jazz, bossa nova, swing and soul — conversational and inviting.',
      },
      {
        title: 'Dinner',
        body: 'Refined, warm and non-invasive live music that supports the table.',
      },
      {
        title: 'Celebration',
        body: 'Soul, rhythm & blues, funk and energetic vintage grooves when the room opens up.',
      },
    ],
  },
  artists: {
    title: 'Featured collaborators',
    intro:
      'Jazzmarried draws on a curated circle of musicians from Barcelona’s jazz and soul world. Formats and lineups are built around your event — not a fixed catalogue act.',
    sinead: {
      name: 'Sinead Savage',
      body: 'Irish vocalist specialised in events, with international experience and winter seasons performing in Switzerland.',
    },
    shushu: {
      name: 'The Shu Shu’s',
      body: 'Barcelona-based soul-jazz / organ trio often connected to the instrumental backbone of Jazzmarried.',
    },
    scene: {
      name: 'Barcelona jazz & soul musicians',
      body: 'Trusted collaborators depending on format, date and what the room needs — always professional, always musical.',
    },
  },
  media: {
    title: 'Media',
    intro: 'Replace placeholders with your live footage when ready.',
    items: [
      { title: 'Voice & band — live example', hint: 'Add video URL here' },
      { title: 'Organ trio / soul-jazz — live example', hint: 'Add video URL here' },
      { title: 'Piano solo / cocktail atmosphere — live example', hint: 'Add video URL here' },
    ],
  },
  why: {
    title: 'Why Jazzmarried',
    items: [
      'Real musicians, not generic backing tracks',
      'Tailored formats for each event',
      'Elegant sound and professional stage presence',
      'A clear jazz / soul / vintage musical identity',
      'Barcelona based — available for destination weddings and private events',
    ],
  },
  contact: {
    title: 'Inquiry',
    lead: 'Tell us about your event and we’ll suggest the right format.',
    closing:
      'Tell us about your event. We’ll help you find the format, sound and atmosphere that fits it best.',
    fields: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone / WhatsApp',
      date: 'Event date',
      location: 'Event location',
      type: 'Event type',
      moment: 'Music moment',
      format: 'Preferred format',
      message: 'Message',
    },
    placeholders: {
      name: 'Your name',
      email: 'you@example.com',
      phone: '+34 …',
      date: 'e.g. 12 September 2026',
      location: 'Venue or city',
      type: 'Wedding, private dinner, corporate…',
      moment: 'Select…',
      format: 'Solo, duo, trio, band…',
      message: 'Guest count, timings, musical wishes…',
    },
    submit: 'Send inquiry',
    mailtoNote: 'Prefer email? Write to',
    mailto: 'hello@jazzmarried.com',
  },
  footer: {
    line1: 'Live jazz, soul & vintage music for weddings and private events.',
    line2: 'Barcelona · Available for destination events',
    links: {
      instagram: 'Instagram',
      bodas: 'Bodas.net',
      shushu: 'The Shu Shu’s',
      abel: 'Abel Boquera',
    },
  },
} as const

export type SiteContent = typeof en

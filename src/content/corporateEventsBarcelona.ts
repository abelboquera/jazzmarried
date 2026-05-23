/**
 * Copy for /corporate-events-barcelona landing page.
 */
export const corporateEventsBarcelona = {
  path: '/corporate-events-barcelona',
  seo: {
    title: 'Live Music for Corporate Events in Barcelona | JazzMarried',
    description:
      'JazzMarried offers elegant live jazz and soul music for corporate events, trade fairs, cocktail receptions, gala dinners, hotels and private events in Barcelona.',
    keywords:
      'live music corporate events Barcelona, jazz band corporate events Barcelona, live jazz for events Barcelona, music for trade fairs Barcelona, music for gala dinners Barcelona, live music Fira Barcelona events, soul band corporate events Barcelona',
    canonical: 'https://jazzmarried.com/corporate-events-barcelona',
  },
  hero: {
    headline: 'Live Jazz & Soul Music for Corporate Events in Barcelona',
    subtitle:
      'Elegant live music for trade fairs, cocktail receptions, gala dinners, brand activations, hotels, private events and international congress weeks.',
    ctaPrimary: 'Request availability',
    ctaSecondary: 'Download corporate PDF',
    pdfHref: '/downloads/jazzmarried-corporate-events.pdf',
    pdfNote: 'PDF brochure — if the file is not yet available, contact us and we will send it.',
    image: '/images/experiences/trade-fair.jpg',
    imageAlt: 'Live jazz for a corporate networking event in Barcelona.',
  },
  perfectFor: {
    title: 'Perfect for',
    intro:
      'Premium live music for companies, agencies and venues — especially during Barcelona trade fair and congress weeks, without overpowering conversation.',
    items: [
      'Trade fair weeks in Barcelona',
      'Events around Fira Barcelona during congress weeks',
      'Exhibitor stand cocktails',
      'Networking receptions',
      'Gala dinners',
      'Product launches',
      'Brand activations',
      'Hotel events',
      'Private corporate dinners',
      'Showroom events',
      'Company celebrations',
      'After-parties',
    ],
  },
  formats: {
    title: 'Flexible formats',
    intro: 'Compact, professional line-ups that fit receptions, dinners and celebrations — scaled to your room and schedule.',
    items: [
      {
        title: 'Duo',
        body: 'Voice + piano / Hammond / guitar. Ideal for receptions, cocktails, hotel lounges, private dinners and intimate corporate events.',
      },
      {
        title: 'Trio',
        body: 'Hammond / piano + sax / voice + drums / guitar / double bass. Ideal for networking events, premium cocktails and company receptions.',
      },
      {
        title: 'Quartet / soul band',
        body: 'A fuller and more energetic format for gala dinners, after-parties, brand events and celebrations.',
      },
      {
        title: 'Bespoke event music',
        body: 'Tailored line-ups, repertoire and presentation for each event. Possibility to adapt the music to the brand, atmosphere and audience.',
      },
    ],
  },
  why: {
    title: 'Why JazzMarried',
    items: [
      'Professional musicians with international experience',
      'Elegant jazz, soul, vintage and New Orleans-inspired sound',
      'Flexible compact formats for events where conversation matters',
      'Fluent communication with international clients in English, Spanish and Catalan',
      'Experience with hotels, private events, corporate presentations, showrooms and premium celebrations',
      'Based in Barcelona and available for events around Fira Barcelona, hotels, venues and private spaces',
    ],
  },
  useCases: {
    title: 'Corporate event use cases',
    items: [
      'Background music for networking cocktails',
      'Live music for VIP dinners',
      'Jazz / soul trio for hotel receptions',
      'Music for brand activations and product launches',
      'Larger band for after-parties and company celebrations',
      'Elegant live soundtrack for international guests during congress weeks',
    ],
  },
  cta: {
    title: 'Planning a corporate event in Barcelona?',
    body: 'Tell us about your event and we’ll suggest the best live music format for your space, schedule and audience.',
    button: 'Contact JazzMarried',
    contactHref: '/#contact',
    email: 'hello@jazzmarried.com',
  },
} as const

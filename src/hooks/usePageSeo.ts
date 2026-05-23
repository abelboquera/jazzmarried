import { useLayoutEffect } from 'react'

type PageSeo = {
  title: string
  description: string
  keywords?: string
  canonical: string
}

function upsertMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function usePageSeo(seo: PageSeo) {
  useLayoutEffect(() => {
    document.title = seo.title
    upsertMeta('description', seo.description)
    if (seo.keywords) upsertMeta('keywords', seo.keywords)
    upsertLink('canonical', seo.canonical)
    upsertMeta('og:title', seo.title, 'property')
    upsertMeta('og:description', seo.description, 'property')
    upsertMeta('og:url', seo.canonical, 'property')
    upsertMeta('twitter:title', seo.title)
    upsertMeta('twitter:description', seo.description)
  }, [seo.title, seo.description, seo.keywords, seo.canonical])
}

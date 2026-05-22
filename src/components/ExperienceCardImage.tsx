import { useState } from 'react'

type Props = {
  src: string
  fallback: string
  alt: string
}

export function ExperienceCardImage({ src, fallback, alt }: Props) {
  const [activeSrc, setActiveSrc] = useState(src)

  return (
    <img
      src={activeSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (activeSrc !== fallback) setActiveSrc(fallback)
      }}
    />
  )
}

import { type ReactNode, useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type Props = {
  id?: string
  className?: string
  children: ReactNode
}

export function RevealSection({ id, className = '', children }: Props) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) {
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [reduced])

  return (
    <section
      ref={ref}
      id={id}
      className={`reveal ${visible ? 'reveal--in' : ''} ${className}`.trim()}
    >
      {children}
    </section>
  )
}

/**
 * Inline brand lockup: vinyl-inspired mark + wordmark (inherits .logo colour).
 */
export function JazzmarriedLogo() {
  return (
    <>
      <svg
        className="logo__icon"
        width={40}
        height={40}
        viewBox="0 0 48 48"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1" opacity={0.18} />
        <circle cx="24" cy="24" r="17.5" fill="none" stroke="currentColor" strokeWidth="1.35" opacity={0.42} />
        <path
          d="M24 6.5 A17.5 17.5 0 0 1 41.2 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity={0.32}
        />
        <path
          d="M41.2 24 A17.5 17.5 0 0 1 24 41.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          opacity={0.32}
        />
        <circle cx="24" cy="24" r="5.25" fill="currentColor" />
        <circle cx="24" cy="24" r="2" fill="var(--ivory)" />
      </svg>
      <span className="logo__word">Jazzmarried</span>
    </>
  )
}

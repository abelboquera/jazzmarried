type SpotlightVideo = {
  readonly label: string
  readonly youtubeId: string
  readonly title: string
}

type Props = {
  headingId: string
  title: string
  body: string
  image: string
  imageAlt: string
  videos: readonly SpotlightVideo[]
  videoNote?: string
}

export function ArtistSpotlight({ headingId, title, body, image, imageAlt, videos, videoNote }: Props) {
  return (
    <article className="artist-spotlight" aria-labelledby={headingId}>
      <div className="artist-spotlight__row">
        <div className="artist-spotlight__media">
          <img src={image} width={800} height={450} alt={imageAlt} loading="lazy" decoding="async" />
        </div>
        <div className="artist-spotlight__text">
          <h3 id={headingId} className="artist-spotlight__title">
            {title}
          </h3>
          <p className="artist-spotlight__body">{body}</p>
        </div>
      </div>
      {videos.length > 0 ? (
        <div className="artist-spotlight__embeds">
          {videos.map((v) => (
            <div key={v.youtubeId} className="artist-spotlight__embed">
              <p className="artist-spotlight__video-label">{v.label}</p>
              <div className="media-card__embed">
                <iframe
                  src={`https://www.youtube.com/embed/${v.youtubeId}?rel=0`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      ) : videoNote ? (
        <p className="artist-spotlight__video-note">{videoNote}</p>
      ) : null}
    </article>
  )
}

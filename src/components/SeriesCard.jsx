import { TvSeriesIcon, BookmarkIcon } from './Icons.jsx'
import { useBookmarks } from '../context/BookmarksContext.jsx'

export default function SeriesCard({ item }) {
  const { toggleBookmark, isBookmarked } = useBookmarks()
  const saved = isBookmarked(item.title)
  const image = item.thumbnail.regular.medium

  return (
    <article className="card">
      <div className="card__poster">
        <img src={image} alt={item.title} loading="lazy" />
        <button
          type="button"
          className={'card__bookmark' + (saved ? ' is-saved' : '')}
          onClick={() => toggleBookmark(item.title)}
          aria-label={saved ? 'Remove bookmark' : 'Add bookmark'}
        >
          <BookmarkIcon />
        </button>
      </div>

      <ul className="card__meta">
        <li>{item.year}</li>
        <li className="card__category">
          <TvSeriesIcon />
          {item.category}
        </li>
        <li>{item.rating}</li>
      </ul>

      <h2 className="card__title">{item.title}</h2>
    </article>
  )
}

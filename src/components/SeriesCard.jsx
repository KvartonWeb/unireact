import { TvSeriesIcon } from './Icons.jsx'

export default function SeriesCard({ item }) {
  return (
    <article className="card">
      <div className="card__poster">
        <img src={item.image} alt={item.title} loading="lazy" />
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

import SeriesCard from './SeriesCard.jsx'
import { series } from '../data/series.js'

export default function SeriesGrid() {
  return (
    <section className="grid" aria-label="TV Series list">
      {series.map((item, i) => (
        <SeriesCard key={`${item.title}-${i}`} item={item} />
      ))}
    </section>
  )
}

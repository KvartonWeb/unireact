import SeriesCard from './SeriesCard.jsx'
import { useMovies } from '../context/MoviesContext.jsx'

export default function SeriesGrid() {
  const { movies, loading } = useMovies()

  if (loading) {
    return <p className="status">Loading...</p>
  }

  const tvSeries = movies.filter((item) => item.category === 'TV Series')

  return (
    <section className="grid" aria-label="TV Series list">
      {tvSeries.map((item) => (
        <SeriesCard key={item.title} item={item} />
      ))}
    </section>
  )
}

import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const MoviesContext = createContext()

const API_URL =
  'https://raw.githubusercontent.com/lomsadze123/movie-api/refs/heads/main/data.json'

export function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setMovies(res.data)
      })
      .catch((err) => {
        console.error('failed to load movies', err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <MoviesContext.Provider value={{ movies, loading }}>
      {children}
    </MoviesContext.Provider>
  )
}

export function useMovies() {
  return useContext(MoviesContext)
}

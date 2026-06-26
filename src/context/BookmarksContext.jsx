import { createContext, useContext, useEffect, useState } from 'react'

const BookmarksContext = createContext()
const STORAGE_KEY = 'bookmarked'

export function BookmarksProvider({ children }) {
  const [bookmarked, setBookmarked] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      return JSON.parse(saved)
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarked))
  }, [bookmarked])

  function toggleBookmark(title) {
    setBookmarked((prev) => {
      if (prev.includes(title)) {
        return prev.filter((t) => t !== title)
      }
      return [...prev, title]
    })
  }

  function isBookmarked(title) {
    return bookmarked.includes(title)
  }

  return (
    <BookmarksContext.Provider value={{ bookmarked, toggleBookmark, isBookmarked }}>
      {children}
    </BookmarksContext.Provider>
  )
}

export function useBookmarks() {
  return useContext(BookmarksContext)
}

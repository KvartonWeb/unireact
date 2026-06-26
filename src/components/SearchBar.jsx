import { SearchIcon } from './Icons.jsx'

export default function SearchBar() {
  return (
    <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
      <span className="search__icon">
        <SearchIcon />
      </span>
      <input
        className="search__input"
        type="text"
        placeholder="Search for TV series"
        aria-label="Search for TV series"
      />
    </form>
  )
}

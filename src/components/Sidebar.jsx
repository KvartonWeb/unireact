import { Logo, HomeIcon, MoviesIcon, TvIcon, BookmarkNavIcon } from './Icons.jsx'
import avatar from '../assets/avatar.jpg'

const navItems = [
  { id: 'home', label: 'Home', Icon: HomeIcon },
  { id: 'movies', label: 'Movies', Icon: MoviesIcon },
  { id: 'tv', label: 'TV Series', Icon: TvIcon, active: true },
  { id: 'bookmark', label: 'Bookmarked', Icon: BookmarkNavIcon },
]

export default function Sidebar() {
  return (
    <nav className="sidebar" aria-label="Main navigation">
      <a href="#" className="sidebar__logo" aria-label="Home">
        <Logo />
      </a>

      <ul className="sidebar__nav">
        {navItems.map(({ id, label, Icon, active }) => (
          <li key={id}>
            <a
              href="#"
              className={'sidebar__link' + (active ? ' is-active' : '')}
              aria-label={label}
              aria-current={active ? 'page' : undefined}
            >
              <Icon />
            </a>
          </li>
        ))}
      </ul>

      <a href="#" className="sidebar__avatar" aria-label="User profile">
        <img src={avatar} alt="User avatar" />
      </a>
    </nav>
  )
}

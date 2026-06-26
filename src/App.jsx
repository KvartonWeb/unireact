import Sidebar from './components/Sidebar.jsx'
import SearchBar from './components/SearchBar.jsx'
import Header from './components/Header.jsx'
import SeriesGrid from './components/SeriesGrid.jsx'

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <SearchBar />
        <Header />
        <SeriesGrid />
      </main>
    </div>
  )
}

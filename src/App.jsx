import { Link, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import { ThemeProvider } from './context/ThemeProvider'
import CountryDetails from './pages/CountryDetails'
import Home from './pages/Home'

function NotFound() {
  return (
    <main className="mx-auto max-w-[1320px] px-6 py-24 text-center md:px-10 lg:px-20">
      <h1 className="mb-4 text-2xl font-extrabold text-lightText dark:text-white">
        Page not found
      </h1>
      <Link
        to="/"
        className="inline-block rounded-md bg-white px-8 py-2 text-sm text-lightText shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:bg-darkElements dark:text-white"
      >
        Back to home
      </Link>
    </main>
  )
}

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-lightBg font-sans text-lightText transition-colors duration-150 dark:bg-darkBg dark:text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:code" element={<CountryDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App

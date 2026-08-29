import { Link } from 'react-router-dom'
import { getCountryIdentifier } from '../utils/countries'

export default function BorderCountryButton({ country }) {
  return (
    <Link
      to={`/country/${getCountryIdentifier(country)}`}
      className="min-w-[96px] rounded bg-white px-6 py-1 text-center text-xs text-lightText shadow-md transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:bg-darkElements dark:text-white"
    >
      {country.name}
    </Link>
  )
}

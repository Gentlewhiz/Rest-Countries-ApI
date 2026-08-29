import { Link } from 'react-router-dom'
import { formatPopulation, getCountryIdentifier } from '../utils/countries'

export default function CountryCard({ country }) {
  const flagSrc = country.flags?.png || country.flags?.svg || country.flag

  return (
    <Link
      to={`/country/${getCountryIdentifier(country)}`}
      className="group flex flex-col overflow-hidden rounded-md bg-white shadow-md transition-transform duration-150 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:bg-darkElements"
    >
      <div className="aspect-[5/3] w-full overflow-hidden bg-gray-100 dark:bg-white/5">
        {flagSrc ? (
          <img
            src={flagSrc}
            alt={`Flag of ${country.name}`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-lightText/50 dark:text-white/50">
            No flag available
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col px-6 pb-12 pt-6">
        <h2 className="mb-4 text-lg font-extrabold text-lightText dark:text-white">
          {country.name}
        </h2>
        <dl className="space-y-1 text-sm text-lightText dark:text-white">
          <div>
            <dt className="inline font-semibold">Population: </dt>
            <dd className="inline">{formatPopulation(country.population)}</dd>
          </div>
          <div>
            <dt className="inline font-semibold">Region: </dt>
            <dd className="inline">{country.region || 'N/A'}</dd>
          </div>
          <div>
            <dt className="inline font-semibold">Capital: </dt>
            <dd className="inline">{country.capital || 'N/A'}</dd>
          </div>
        </dl>
      </div>
    </Link>
  )
}

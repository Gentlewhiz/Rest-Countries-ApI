import CountryCard from './CountryCard'
import EmptyState from './EmptyState'
import { getCountryIdentifier } from '../utils/countries'

export default function CountryGrid({ countries }) {
  if (!countries.length) {
    return <EmptyState message="No countries found." />
  }

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map((country) => (
        <CountryCard
          key={getCountryIdentifier(country) || country.name}
          country={country}
        />
      ))}
    </div>
  )
}

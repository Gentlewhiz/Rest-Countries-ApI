import rawCountries from '../../data.json'

/**
 * The full, unfiltered list of countries from the supplied data.json.
 * Treat this as read-only - never mutate it directly.
 */
export function getAllCountries() {
  return rawCountries
}

/**
 * The stable identifier used to route to / look up a single country.
 * alpha3Code is used instead of array index since it's stable and unique.
 */
export function getCountryIdentifier(country) {
  return country?.alpha3Code
}

export function findCountryByCode(code) {
  if (!code) return undefined
  return rawCountries.find((country) => country.alpha3Code === code)
}

export function searchByName(countries, query) {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return countries
  return countries.filter((country) =>
    country.name?.toLowerCase().includes(normalized)
  )
}

export function filterByRegion(countries, region) {
  if (!region) return countries
  return countries.filter((country) => country.region === region)
}

/** Every distinct, non-empty region present in the supplied data, sorted alphabetically. */
export function getRegions(countries) {
  const regions = new Set(
    countries.map((country) => country.region).filter(Boolean)
  )
  return Array.from(regions).sort((a, b) => a.localeCompare(b))
}

export function getBorderCountries(country) {
  if (!country?.borders?.length) return []
  return country.borders
    .map((code) => rawCountries.find((c) => c.alpha3Code === code))
    .filter(Boolean)
}

export function formatPopulation(population) {
  if (typeof population !== 'number') return 'N/A'
  return population.toLocaleString('en-US')
}

export function formatCurrencies(currencies) {
  if (!currencies?.length) return 'N/A'
  const names = currencies.map((c) => c.name).filter(Boolean)
  return names.length ? names.join(', ') : 'N/A'
}

export function formatLanguages(languages) {
  if (!languages?.length) return 'N/A'
  const names = languages.map((l) => l.name).filter(Boolean)
  return names.length ? names.join(', ') : 'N/A'
}

export function formatTopLevelDomain(domains) {
  if (!domains?.length) return 'N/A'
  return domains.join(', ')
}

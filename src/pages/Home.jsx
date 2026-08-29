import { useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar'
import RegionFilter from '../components/RegionFilter'
import CountryGrid from '../components/CountryGrid'
import {
  filterByRegion,
  getAllCountries,
  getRegions,
  searchByName,
} from '../utils/countries'

export default function Home() {
  const allCountries = useMemo(() => getAllCountries(), [])
  const regions = useMemo(() => getRegions(allCountries), [allCountries])

  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('')

  const countries = useMemo(() => {
    const byRegion = filterByRegion(allCountries, region)
    return searchByName(byRegion, query)
  }, [allCountries, region, query])

  return (
    <main className="mx-auto max-w-[1320px] px-6 pb-24 pt-10 md:px-10 lg:px-20">
      <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <SearchBar value={query} onChange={setQuery} />
        <RegionFilter regions={regions} value={region} onChange={setRegion} />
      </div>
      <CountryGrid countries={countries} />
    </main>
  )
}

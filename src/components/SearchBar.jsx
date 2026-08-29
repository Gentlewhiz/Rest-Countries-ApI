import { SearchIcon } from './icons'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full md:max-w-[480px]">
      <label htmlFor="country-search" className="sr-only">
        Search for a country
      </label>
      <SearchIcon className="pointer-events-none absolute left-8 top-1/2 h-4 w-4 -translate-y-1/2 text-lightText/40 dark:text-white/50" />
      <input
        id="country-search"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search for a country..."
        className="w-full rounded-md bg-white py-4 pl-16 pr-6 text-sm text-lightText shadow-md placeholder:text-lightInput focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-darkElements dark:text-white dark:placeholder:text-white/60"
      />
    </div>
  )
}

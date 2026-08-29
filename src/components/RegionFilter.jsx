import { useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from './icons'

export default function RegionFilter({ regions, value, onChange }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  function selectRegion(region) {
    onChange(region)
    setOpen(false)
  }

  return (
    <div ref={containerRef} className="relative w-full md:w-[200px]">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-md bg-white px-6 py-4 text-left text-sm text-lightText shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:bg-darkElements dark:text-white"
      >
        <span>{value || 'Filter by Region'}</span>
        <ChevronDownIcon
          className={`h-2.5 w-3 shrink-0 transition-transform duration-150 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Filter by region"
          className="absolute z-10 mt-2 w-full overflow-hidden rounded-md bg-white py-2 text-sm text-lightText shadow-lg dark:bg-darkElements dark:text-white"
        >
          {value && (
            <li role="option" aria-selected={false}>
              <button
                type="button"
                onClick={() => selectRegion('')}
                className="w-full px-6 py-2 text-left hover:bg-gray-100 focus-visible:bg-gray-100 focus-visible:outline-none dark:hover:bg-white/10 dark:focus-visible:bg-white/10"
              >
                All Regions
              </button>
            </li>
          )}
          {regions.map((region) => (
            <li key={region} role="option" aria-selected={region === value}>
              <button
                type="button"
                onClick={() => selectRegion(region)}
                className="w-full px-6 py-2 text-left hover:bg-gray-100 focus-visible:bg-gray-100 focus-visible:outline-none dark:hover:bg-white/10 dark:focus-visible:bg-white/10"
              >
                {region}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

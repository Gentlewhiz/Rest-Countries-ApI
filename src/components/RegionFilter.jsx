import { useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from './icons'

export default function RegionFilter({ regions, value, onChange }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  function selectRegion(region) {
    onChange(region)
    setOpen(false)
    triggerRef.current?.focus()
  }

  return (
    <div ref={containerRef} className="relative w-full md:w-[200px]">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="region-filter-menu"
        className="flex w-full items-center justify-between rounded-md bg-white px-6 py-4 text-left text-sm text-lightText shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:bg-darkElements dark:text-white"
      >
        <span>{value || 'Filter by Region'}</span>
        <ChevronDownIcon
          className={`h-2.5 w-3 shrink-0 transition-transform duration-150 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/*
        This is a disclosure, not a listbox: the buttons below are the real
        interactive elements and carry their own native semantics. There is
        no role="listbox"/"option" here on purpose - putting role="option"
        on a wrapper strips the nested button's semantics and leaves the
        thing a keyboard user actually focuses with no exposed role, which
        is worse than not labeling it at all.
      */}
      {open && (
        <div
          id="region-filter-menu"
          className="absolute z-10 mt-2 w-full overflow-hidden rounded-md bg-white py-2 text-sm text-lightText shadow-lg dark:bg-darkElements dark:text-white"
        >
          {value && (
            <button
              type="button"
              onClick={() => selectRegion('')}
              className="block w-full px-6 py-2 text-left hover:bg-gray-100 focus-visible:bg-gray-100 focus-visible:outline-none dark:hover:bg-white/10 dark:focus-visible:bg-white/10"
            >
              All Regions
            </button>
          )}
          {regions.map((region) => (
            <button
              key={region}
              type="button"
              aria-current={region === value ? 'true' : undefined}
              onClick={() => selectRegion(region)}
              className="block w-full px-6 py-2 text-left hover:bg-gray-100 focus-visible:bg-gray-100 focus-visible:outline-none dark:hover:bg-white/10 dark:focus-visible:bg-white/10"
            >
              {region}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

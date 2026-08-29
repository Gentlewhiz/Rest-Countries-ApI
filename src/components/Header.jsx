import { Link } from 'react-router-dom'
import { useTheme } from '../context/useTheme'
import { MoonIcon, SunIcon } from './icons'

export default function Header() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <header className="bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)] dark:bg-darkElements">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-6 md:px-10 lg:px-20">
        <Link
          to="/"
          className="rounded text-base font-extrabold text-lightText focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:text-white sm:text-xl"
        >
          Where in the world?
        </Link>
        <button
          type="button"
          onClick={toggleTheme}
          className="flex items-center gap-2 rounded text-xs font-semibold text-lightText focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:text-white sm:text-sm"
        >
          {isDark ? (
            <SunIcon className="h-4 w-4" />
          ) : (
            <MoonIcon className="h-4 w-4" />
          )}
          <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>
    </header>
  )
}

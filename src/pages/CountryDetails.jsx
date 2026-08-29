import { Link, useNavigate, useParams } from 'react-router-dom'
import BorderCountryButton from '../components/BorderCountryButton'
import { ArrowLeftIcon } from '../components/icons'
import {
  findCountryByCode,
  formatCurrencies,
  formatLanguages,
  formatPopulation,
  formatTopLevelDomain,
  getBorderCountries,
} from '../utils/countries'

function BackButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 rounded bg-white px-8 py-2 text-sm text-lightText shadow-md transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:bg-darkElements dark:text-white"
    >
      <ArrowLeftIcon className="h-4 w-4" />
      Back
    </button>
  )
}

function Detail({ label, value }) {
  return (
    <div className="text-sm leading-relaxed text-lightText dark:text-white md:text-base">
      <dt className="inline font-semibold">{label}: </dt>
      <dd className="inline text-lightText/90 dark:text-white/90">
        {value || 'N/A'}
      </dd>
    </div>
  )
}

export default function CountryDetails() {
  const { code } = useParams()
  const navigate = useNavigate()
  const country = findCountryByCode(code)

  const goBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  if (!country) {
    return (
      <main className="mx-auto max-w-[1320px] px-6 py-16 md:px-10 lg:px-20">
        <BackButton onClick={goBack} />
        <div className="mt-20 flex flex-col items-center gap-4 text-center">
          <h1 className="text-2xl font-extrabold text-lightText dark:text-white">
            Country not found
          </h1>
          <p className="text-sm text-lightText/70 dark:text-white/70">
            We couldn&apos;t find a country matching &ldquo;{code}&rdquo;.
          </p>
          <Link
            to="/"
            className="mt-4 inline-block rounded-md bg-white px-8 py-2 text-sm text-lightText shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:bg-darkElements dark:text-white"
          >
            Back to all countries
          </Link>
        </div>
      </main>
    )
  }

  const borders = getBorderCountries(country)
  const flagSrc = country.flags?.svg || country.flags?.png || country.flag

  return (
    <main className="mx-auto max-w-[1320px] px-6 py-16 md:px-10 lg:px-20">
      <BackButton onClick={goBack} />

      <div className="mt-16 flex flex-col items-start gap-14 lg:flex-row lg:items-center lg:gap-24">
        <div className="w-full lg:w-1/2">
          {flagSrc ? (
            <img
              src={flagSrc}
              alt={`Flag of ${country.name}`}
              className="w-full shadow-sm"
            />
          ) : (
            <div className="flex aspect-[3/2] w-full items-center justify-center bg-gray-100 text-sm text-lightText/50 dark:bg-white/5 dark:text-white/50">
              No flag available
            </div>
          )}
        </div>

        <div className="w-full lg:w-1/2">
          <h1 className="mb-5 text-2xl font-extrabold text-lightText dark:text-white">
            {country.name}
          </h1>

          <div className="mb-10 flex flex-col gap-2 md:flex-row md:gap-24">
            <dl className="space-y-2">
              <Detail label="Native Name" value={country.nativeName} />
              <Detail
                label="Population"
                value={formatPopulation(country.population)}
              />
              <Detail label="Region" value={country.region} />
              <Detail label="Sub Region" value={country.subregion} />
              <Detail label="Capital" value={country.capital} />
            </dl>
            <dl className="space-y-2">
              <Detail
                label="Top Level Domain"
                value={formatTopLevelDomain(country.topLevelDomain)}
              />
              <Detail
                label="Currencies"
                value={formatCurrencies(country.currencies)}
              />
              <Detail
                label="Languages"
                value={formatLanguages(country.languages)}
              />
            </dl>
          </div>

          {borders.length > 0 ? (
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-lightText dark:text-white">
                Border Countries:
              </span>
              {borders.map((border) => (
                <BorderCountryButton key={border.alpha3Code} country={border} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-lightText/70 dark:text-white/70">
              <span className="font-semibold text-lightText dark:text-white">
                Border Countries:
              </span>{' '}
              None
            </p>
          )}
        </div>
      </div>
    </main>
  )
}

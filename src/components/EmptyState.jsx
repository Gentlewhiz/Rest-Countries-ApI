export default function EmptyState({ message }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center gap-2 py-24 text-center">
      <p className="text-lg font-semibold text-lightText dark:text-white">
        {message}
      </p>
    </div>
  )
}

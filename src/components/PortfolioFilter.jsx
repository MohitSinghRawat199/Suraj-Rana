export default function PortfolioFilter({ categories, active, onChange }) {
  return (
    <div className="mb-10 flex flex-wrap gap-3">
      {categories.map((category) => {
        const activeFilter = active === category

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
              activeFilter
                ? 'border-[#9b7445] bg-[#9b7445] text-stone-950'
                : 'border-stone-200 bg-stone-50 text-stone-700 hover:border-[#9b7445]/60 hover:text-stone-900'
            }`}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

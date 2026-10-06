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
                ? 'border-[#d8b98a] bg-[#d8b98a] text-stone-950'
                : 'border-white/10 bg-white/5 text-stone-200 hover:border-[#d8b98a]/60 hover:text-white'
            }`}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

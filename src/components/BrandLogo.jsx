import { Link } from 'react-router-dom'

export default function BrandLogo() {
  return (
    <Link to="/" className="group inline-flex shrink-0 items-center gap-3" aria-label="Suraj Rana home">
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="h-10 w-10 text-[#9b7445] transition-transform duration-300 group-hover:rotate-[-4deg] sm:h-11 sm:w-11"
        fill="none"
      >
        <rect x="1" y="1" width="46" height="46" rx="14" stroke="currentColor" strokeOpacity=".7" />
        <circle cx="24" cy="24" r="17" stroke="currentColor" strokeOpacity=".35" />
        <path d="M11 36.5h26" stroke="currentColor" strokeOpacity=".55" />
        <text x="24" y="31" textAnchor="middle" fill="currentColor" fontFamily="Georgia, serif" fontSize="20" letterSpacing="-2">SR</text>
      </svg>
      <span className="flex flex-col">
        <span className="font-serif text-lg font-semibold leading-tight tracking-[0.12em] text-stone-900 sm:text-xl">Suraj Rana</span>
        <span className="mt-1 text-[9px] uppercase tracking-[0.22em] text-stone-500 sm:text-[10px]">Photography · Creative Media</span>
      </span>
    </Link>
  )
}

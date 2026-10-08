import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PortfolioCard({ item, index = 0, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, layout: { duration: 0.3 } }}
      style={{ gridRowEnd: `span ${index % 4 === 0 ? 4 : index % 3 === 0 ? 2 : 3}` }}
      className="portfolio-card group relative block h-full min-h-0 overflow-hidden rounded-[1.6rem] border border-white/10 bg-stone-900 text-left"
      aria-label={`Open ${item.title}`}
    >
      <div className="relative h-full min-h-[260px] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#e9d6b2]">{item.category}</p>
          <h3 className="mt-2 text-xl font-medium text-white">{item.title}</h3>
        </div>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          <ArrowUpRight size={16} />
        </span>
      </div>
    </motion.button>
  )
}

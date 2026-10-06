import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PortfolioCard({ item, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="group relative block overflow-hidden rounded-[1.6rem] border border-white/10 bg-stone-900 text-left"
      aria-label={`Open ${item.title}`}
    >
      <div className="relative h-[360px] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#e9d6b2]">{item.category}</p>
          <h3 className="mt-2 text-xl font-medium text-white">{item.title}</h3>
        </div>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          <ArrowUpRight size={16} />
        </span>
      </div>
    </motion.button>
  )
}

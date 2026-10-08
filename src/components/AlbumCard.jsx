import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function AlbumCard({ album, onClick }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-[1.8rem] border border-stone-200 bg-white"
    >
      <div className="relative overflow-hidden">
        <img
          src={album.image}
          alt={album.title}
          loading="lazy"
          className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="rounded-full border border-[#9b7445]/30 bg-[#9b7445]/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[#77552f]">
            {album.type}
          </span>
          <button
            type="button"
            onClick={onClick}
            className="inline-flex items-center gap-2 rounded-full bg-[#9b7445] px-3.5 py-2 text-sm font-medium text-stone-950"
          >
            View Album <ArrowUpRight size={14} />
          </button>
        </div>

        <h3 className="text-2xl font-medium text-stone-900">{album.title}</h3>
        <p className="mt-3 text-sm leading-7 text-stone-600">{album.spread}</p>
      </div>
    </motion.article>
  )
}

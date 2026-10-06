import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'

export default function Lightbox({ item, items, onClose, onPrevious, onNext }) {
  if (!item) return null

  const index = items.findIndex((entry) => entry.id === item.id)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.98, opacity: 0, y: 10 }}
          transition={{ duration: 0.22 }}
          className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white transition hover:bg-black/60"
            aria-label="Close lightbox"
          >
            <X size={18} />
          </button>

          <div className="grid md:grid-cols-[1.5fr_0.7fr]">
            <div className="relative min-h-[320px] bg-stone-950">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
            </div>

            <div className="flex flex-col justify-center bg-stone-900 p-6 md:p-8">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#d8b98a]">{item.category}</p>
              <h3 className="mt-3 text-3xl font-medium text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone-300">{item.description}</p>

              {item.behanceUrl && (
                <a
                  href={item.behanceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#d8b98a]/60 bg-[#d8b98a]/10 px-4 py-2 text-sm font-medium text-[#f5d8a6] transition hover:bg-[#d8b98a]/20"
                >
                  View on Behance
                </a>
              )}

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={onPrevious}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-[#d8b98a]/60"
                >
                  <ArrowLeft size={16} /> Previous
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  className="flex items-center gap-2 rounded-full bg-[#d8b98a] px-4 py-2 text-sm font-medium text-stone-950 transition hover:brightness-105"
                >
                  Next <ArrowRight size={16} />
                </button>
              </div>

              <div className="mt-6 text-xs uppercase tracking-[0.28em] text-stone-400">
                {index + 1} / {items.length}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

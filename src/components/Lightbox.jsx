import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { useEffect } from 'react'

export default function Lightbox({ item, items, onClose, onPrevious, onNext }) {
  useEffect(() => {
    if (!item) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onPrevious()
      if (event.key === 'ArrowRight') onNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [item, onClose, onPrevious, onNext])

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
        role="dialog"
        aria-modal="true"
        aria-label={`${item.title} image viewer`}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.98, opacity: 0, y: 10 }}
          transition={{ duration: 0.22 }}
          className="relative h-[min(90vh,820px)] w-full max-w-7xl overflow-y-auto rounded-[1.5rem] border border-stone-200 bg-white md:overflow-hidden"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition hover:bg-black/80"
            aria-label="Close lightbox"
          >
            <X size={18} />
          </button>

          <div className="grid h-full md:grid-cols-[1.5fr_0.7fr]">
            <div className="relative min-h-[320px] bg-stone-100 md:h-full">
              <img src={item.image} alt={item.title} decoding="async" className="h-full w-full object-cover" />
            </div>

            <div className="flex flex-col justify-center bg-white p-6 md:p-8">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#9b7445]">{item.category}</p>
              <h3 className="mt-3 text-3xl font-medium text-stone-900">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone-600">{item.description}</p>

              {item.behanceUrl && (
                <a
                  href={item.behanceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#9b7445]/60 bg-[#9b7445]/10 px-4 py-2 text-sm font-medium text-[#77552f] transition hover:bg-[#9b7445]/20"
                >
                  View on Behance
                </a>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onPrevious}
                  className="flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm text-stone-900 transition hover:border-[#9b7445]/60"
                >
                  <ArrowLeft size={16} /> Previous
                </button>
                <button
                  type="button"
                  onClick={onNext}
                  className="flex items-center gap-2 rounded-full bg-[#9b7445] px-4 py-2 text-sm font-medium text-stone-950 transition hover:brightness-105"
                >
                  Next <ArrowRight size={16} />
                </button>
              </div>

              <div className="mt-6 text-xs uppercase tracking-[0.28em] text-stone-500">
                {index + 1} / {items.length}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

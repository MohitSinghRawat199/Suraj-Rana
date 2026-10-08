import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { testimonials } from '../data/portfolioData'

export default function TestimonialSection() {
  const [active, setActive] = useState(0)
  const testimonial = testimonials[active]

  const move = (direction) => {
    setActive((current) => (current + direction + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="scroll-mt-24 bg-white/[0.02] py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#d8b98a]">Testimonials</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Words from the people behind the photographs</h2>
        </div>
        <div className="mt-10 rounded-[1.8rem] border border-white/10 bg-black/20 p-7 text-center md:p-12">
          <Quote className="mx-auto text-[#d8b98a]" size={26} />
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              aria-live="polite"
            >
              <blockquote className="mt-6 text-lg leading-8 text-stone-200 md:text-xl">“{testimonial.quote}”</blockquote>
              <p className="mt-6 font-medium text-white">{testimonial.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-400">{testimonial.project}</p>
              {testimonial.isPlaceholder && <p className="mt-5 text-[10px] uppercase tracking-[0.16em] text-[#d8b98a]">Sample content · replace with client-approved feedback</p>}
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button type="button" onClick={() => move(-1)} aria-label="Previous testimonial" className="rounded-full border border-white/15 p-3 text-white transition hover:border-[#d8b98a]/70"><ArrowLeft size={16} /></button>
            <span className="min-w-14 text-xs tracking-[0.18em] text-stone-400">{String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}</span>
            <button type="button" onClick={() => move(1)} aria-label="Next testimonial" className="rounded-full border border-white/15 p-3 text-white transition hover:border-[#d8b98a]/70"><ArrowRight size={16} /></button>
          </div>
        </div>
      </div>
    </section>
  )
}

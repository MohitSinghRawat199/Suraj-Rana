import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#9b7445]/20 bg-gradient-to-r from-white via-[#f7f2e9] to-[#efe6d8] px-6 py-12 shadow-[0_30px_80px_rgba(68,50,28,0.10)] md:px-12">
        <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#9b7445]">
              Let’s create
            </p>
            <h2 className="text-3xl font-semibold text-stone-900 md:text-5xl">
              Have a story worth capturing?
            </h2>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9b7445] px-5 py-3 text-sm font-medium text-stone-950 transition hover:brightness-110"
          >
            Contact Me <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

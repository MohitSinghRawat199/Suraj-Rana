import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PricingSection({ onBook }) {
  const plans = [
    { title: 'Wedding Shoot', price: '₹45,000', desc: 'Full-day coverage, album design, 300+ edited images' },
    { title: 'Maternity Shoot', price: '₹8,500', desc: '2-hour session, wardrobe guidance, 40+ edited images' },
    { title: 'Family & Lifestyle', price: '₹10,500', desc: '1.5-hour session, location shoot, 50+ edited images' },
    { title: 'Portrait Session', price: '₹5,000', desc: 'Studio or on-location, 25+ edited images' },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#d8b98a]">Pricing</p>
        <h2 className="text-3xl font-semibold text-white">Photography Packages</h2>
        <p className="mt-4 max-w-2xl mx-auto text-stone-300">Transparent pricing for common session types — custom quotes available on request.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((p) => (
          <div key={p.title} className="rounded-[1rem] border border-white/10 bg-white/[0.02] p-6 text-center">
            <h3 className="text-lg font-medium text-white">{p.title}</h3>
            <p className="mt-2 text-2xl font-semibold text-[#d8b98a]">{p.price}</p>
            <p className="mt-3 text-sm text-stone-300">{p.desc}</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={() => onBook && onBook(p.title)}
                className="inline-flex items-center gap-2 rounded-full bg-[#d8b98a] px-4 py-2 text-sm font-medium text-stone-950 transition hover:brightness-110"
              >
                Book Now <ArrowRight size={14} />
              </button>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white">Contact</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

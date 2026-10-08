import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PricingSection({ onBook }) {
  const plans = [
    { title: 'Wedding Album Design', price: '10,000', desc: 'Custom wedding album layouts in 12×24 or 12×36 formats, designed around your story' },
    { title: 'Maternity Shoot', price: '₹8,500', desc: '2-hour session, wardrobe guidance, 20+ edited images' },
    { title: 'Family & Lifestyle', price: '₹10,500', desc: '1.5-hour session, location shoot, 50+ edited images' },
    { title: 'Portrait Session', price: '₹5,000', desc: 'Studio or on-location, 25+ edited images' },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#9b7445]">Pricing</p>
        <h2 className="text-3xl font-semibold text-stone-900">Photography Packages</h2>
        <p className="mt-4 max-w-2xl mx-auto text-stone-600">Transparent pricing for common session types — custom quotes available on request.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((p) => (
          <div key={p.title} className="flex h-full flex-col rounded-[1rem] border border-stone-200 bg-white p-6 text-center">
            <h3 className="text-lg font-medium text-stone-900">{p.title}</h3>
            <p className="mt-2 text-2xl font-semibold text-[#9b7445]">{p.price}</p>
            <p className="mt-3 flex-1 text-sm text-stone-600">{p.desc}</p>
            <div className="mt-6 grid grid-cols-2 items-center gap-2">
              <button
                onClick={() => onBook && onBook(p.title)}
                className="inline-flex min-h-10 items-center justify-center gap-1 rounded-full bg-[#9b7445] px-2 py-2 text-sm font-medium text-stone-950 transition hover:brightness-110"
              >
                Book Now <ArrowRight size={14} />
              </button>
              <Link to="/contact" className="inline-flex min-h-10 items-center justify-center gap-1 rounded-full border border-stone-200 px-2 py-2 text-sm text-stone-900">Contact</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

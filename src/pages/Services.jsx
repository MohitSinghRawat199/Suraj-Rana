import { Camera, Palette, Sparkles, WandSparkles, BookOpenText, PackageOpen, Baby, Clapperboard } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/portfolioData'

const iconMap = {
  Camera,
  WandSparkles,
  BookOpenText,
  Sparkles,
  Baby,
  PackageOpen,
  Palette,
  Clapperboard,
}

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="Services" title="Creative solutions tailored to your story." description="From weddings and portraits to product visuals and graphic design, each service is built to feel elevated, personal and visually rich." />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={iconMap[service.icon] ? service.icon : 'Camera'}
          />
        ))}
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <h3 className="text-3xl font-medium text-white">Wedding Album Design</h3>
          <p className="mt-4 text-base leading-8 text-stone-300">
            Professional wedding album design with handcrafted storytelling, premium layouts, elegant typography and luxury finishes. Available in 12x24 and 12x36 formats.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-stone-950/60 px-3 py-2 text-sm text-stone-200">12x24 Album</span>
            <span className="rounded-full border border-white/10 bg-stone-950/60 px-3 py-2 text-sm text-stone-200">12x36 Album</span>
            <span className="rounded-full border border-white/10 bg-stone-950/60 px-3 py-2 text-sm text-stone-200">Luxury Finish</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
            alt="Wedding album preview"
            className="h-full min-h-[260px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

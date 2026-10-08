import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import { portfolioData, services } from '../data/portfolioData'

const albumDesignExample = portfolioData.find((item) => item.id === 3)

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
            icon={service.icon}
          />
        ))}
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6 md:p-8">
          <h3 className="text-3xl font-medium text-stone-900">Wedding Album Design</h3>
          <p className="mt-4 text-base leading-8 text-stone-600">
            Professional wedding album design with handcrafted storytelling, premium layouts, elegant typography and luxury finishes. Available in 12x24 and 12x36 formats.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-700">12x24 Album</span>
            <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-700">12x36 Album</span>
            <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-700">Luxury Finish</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white">
          <img
            src={albumDesignExample.image}
            alt="Birthday album design portfolio example"
            className="h-full min-h-[260px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

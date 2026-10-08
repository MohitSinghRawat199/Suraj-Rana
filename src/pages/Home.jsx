import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Camera, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/hero.png'
import { useState } from 'react'
import About from '../assets/Suraj.jpeg'
import CTASection from '../components/CTASection'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import SkillCard from '../components/SkillCard'
import { portfolioData, services, skillData } from '../data/portfolioData'

export default function HomePage() {
  const [showBooking, setShowBooking] = useState(false)
  const [preset, setPreset] = useState('')
  const featured = portfolioData.slice(0, 6)

  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pb-28 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#d8b98a]">
              Photographer • Photo Editor • Graphic Designer
            </p>
            <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Capturing Moments. <span className="text-[#d8b98a]">Creating Stories.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-stone-200 md:text-lg">
              I transform real moments and photographs into creative, professional and visually meaningful visual experiences.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d8b98a] px-6 py-3.5 text-sm font-medium text-stone-950 transition hover:brightness-110"
              >
                View My Work <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:border-[#d8b98a]/80 hover:text-[#f4dbc1]"
              >
                Let&apos;s Work Together
              </Link>
            </div>
          </motion.div>

          <div className="mt-16 flex items-center gap-5 text-sm text-stone-200">
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-3 py-2">
              <Camera size={16} className="text-[#d8b98a]" />
              <span>4+ Years Experience</span>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-3 py-2">
              <Sparkles size={16} className="text-[#d8b98a]" />
              <span>Luxury Storytelling</span>
            </div>
          </div>

          <div className="mt-16 flex justify-center md:mt-20">
            <div className="flex flex-col items-center gap-2 text-stone-200">
              <span className="text-[10px] uppercase tracking-[0.32em]">Scroll</span>
              <ChevronDown className="animate-bounce" size={18} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative mx-auto w-full max-w-[620px] overflow-hidden rounded-[2rem] border border-[#d8b98a]/35 bg-gradient-to-br from-[#111214] via-[#161a1d] to-[#0b0b0c] p-2 shadow-[0_28px_80px_rgba(216,185,138,0.12)] sm:p-3">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(216,185,138,0.18),transparent_35%)]" />
            <img
              src={About}
              alt="Suraj Rana profile portrait"
              className="relative h-auto max-h-[520px] w-full rounded-[1.4rem] object-cover object-center saturate-[1.05] contrast-[1.08] brightness-[0.92] sm:max-h-[460px] md:max-h-[520px]"
            />
          </div>

          <div className="relative">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d8b98a]/30 bg-[#d8b98a]/8 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-[#f4dbc1]">
              Behind the Lens
            </div>
            <SectionTitle eyebrow="Behind the Lens" title="Thoughtful imagery, styled with intention." />
            <p className="text-base leading-8 text-stone-300 md:text-lg">
              I am a passionate photographer, photo editor and graphic designer with a strong interest in visual storytelling, album design and creative media. My work blends natural emotion with refined post-production to create imagery that feels authentic, elevated and memorable.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#d8b98a]/35 bg-[#d8b98a]/10 px-5 py-3 text-sm font-medium text-[#f4dbc1] transition hover:border-[#d8b98a]/70 hover:bg-[#d8b98a]/15"
            >
              More About Me <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white/[0.02] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Featured Work" title="A visual language shaped by emotion and detail." align="center" />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((item, index) => (
              <div key={item.id} className={index === 0 || index === 4 ? 'md:col-span-2' : ''}>
                <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-stone-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-[340px] w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#d8b98a]">{item.category}</p>
                    <h3 className="mt-2 text-2xl font-medium text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-[#d8b98a]/60 hover:text-[#f4dbc1]"
            >
              View Full Portfolio <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Services" title="Creative solutions for every important moment." align="center" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.slice(0, 8).map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} />
          ))}
        </div>
      </section>

      <section className="bg-white/[0.02] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Skills" title="Crafting visuals with precision and creative intent." align="center" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {skillData.map((skill) => (
              <SkillCard key={skill} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      <PricingSection
        onBook={(pkg) => {
          setPreset(pkg)
          setShowBooking(true)
        }}
      />

      <BookingModal open={showBooking} onClose={() => setShowBooking(false)} presetPackage={preset} />
      <CTASection />
    </>
  )
}

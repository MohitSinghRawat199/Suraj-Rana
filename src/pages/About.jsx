import { motion } from 'framer-motion'
import { BookCopy, Briefcase, Camera, GraduationCap, Sparkles } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import AboutImage from '../assets/About-optimized.jpg'

export default function AboutPage() {
  const education = [
    { title: 'ITI Diploma', detail: 'Photographer' },
    { title: '6-Month Course', detail: 'Graphic Designing' },
  ]

  const knowledge = [
    'Camera handling',
    'Lighting',
    'Composition',
    'Framing',
    'Visual storytelling',
  ]
  const tools = ['Adobe Photoshop', 'Adobe Lightroom', 'Adobe Premiere Pro', 'CapCut']

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="About" title="About Me" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white">
          <img
            src={AboutImage}
            alt="Photographer profile"
            loading="lazy"
            decoding="async"
            className="h-full min-h-[520px] w-full object-cover"
          />
        </div>

        <div className="space-y-7">
          <div className="rounded-[1.8rem] border border-stone-200 bg-white p-6 md:p-8">
            <p className="text-base leading-8 text-stone-600 md:text-lg">
              I am a passionate and creative Photographer, Photo Editor and Graphic Designer with a strong interest in photography, photo editing, album designing and visual content creation.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-600 md:text-lg">
              I enjoy turning simple photographs into creative, professional and visually appealing images while maintaining a natural and realistic look.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-600 md:text-lg">
              I have experience working with Adobe Photoshop, Adobe Lightroom, Adobe Premiere Pro and CapCut, along with practical knowledge of photo retouching, color correction, creative manipulation, background editing, album designing and social media content creation.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[1.6rem] border border-stone-200 bg-white p-5">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#9b7445]/10 text-[#9b7445]">
                <Briefcase size={20} />
              </div>
              <h3 className="text-xl font-medium text-stone-900">Experience Areas</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">Wedding photography, portrait editing, product styling, album design and creative media production.</p>
            </div>

            <div className="rounded-[1.6rem] border border-stone-200 bg-white p-5">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#9b7445]/10 text-[#9b7445]">
                <Camera size={20} />
              </div>
              <h3 className="text-xl font-medium text-stone-900">Creative Focus</h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">Premium storytelling, natural light, emotion-based framing and polished post-production.</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-20 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[1.8rem] border border-stone-200 bg-white p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <GraduationCap className="text-[#9b7445]" size={22} />
            <h3 className="text-2xl font-medium text-stone-900">Education & Training</h3>
          </div>

          <div className="space-y-5">
            {education.map((item) => (
              <div key={item.title} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <p className="text-[#9b7445]">🎓 {item.title}</p>
                <p className="mt-2 text-stone-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-stone-200 bg-white p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <Sparkles className="text-[#9b7445]" size={22} />
            <h3 className="text-2xl font-medium text-stone-900">Photography Knowledge</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {knowledge.map((item) => (
              <span key={item} className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm text-stone-600">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-8 rounded-[1.8rem] border border-white/10 bg-white/[0.02] p-6 md:p-8" aria-labelledby="tools-heading">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d8b98a]">Tools</p>
        <h2 id="tools-heading" className="mt-3 text-2xl font-medium text-white">Software and creative workflow</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {tools.map((tool) => <span key={tool} className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-stone-200">{tool}</span>)}
        </div>
      </section>

      <div className="mt-20 rounded-[2rem] border border-stone-200 bg-gradient-to-r from-white via-[#f7f2e9] to-[#efe6d8] p-6 md:p-8">
        <div className="mb-4 flex items-center gap-3">
          <BookCopy className="text-[#9b7445]" size={22} />
          <h3 className="text-2xl font-medium text-stone-900">Career Objective</h3>
        </div>
        <p className="text-base leading-8 text-stone-600 md:text-lg">
          I am currently looking for an opportunity where I can contribute my creativity and technical skills, work with a professional team, learn from new experiences and grow my career in the Photography, Photo Editing, Graphic Designing and Creative Media industry.
        </p>
      </div>
    </div>
  )
}

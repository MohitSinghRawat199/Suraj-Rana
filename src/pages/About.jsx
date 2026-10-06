import { motion } from 'framer-motion'
import { BookCopy, Briefcase, Camera, GraduationCap, Sparkles } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

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

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="About" title="About Me" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
            alt="Photographer profile"
            className="h-full min-h-[520px] w-full object-cover"
          />
        </div>

        <div className="space-y-7">
          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <p className="text-base leading-8 text-stone-300 md:text-lg">
              I am a passionate and creative Photographer, Photo Editor and Graphic Designer with a strong interest in photography, photo editing, album designing and visual content creation.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-300 md:text-lg">
              I enjoy turning simple photographs into creative, professional and visually appealing images while maintaining a natural and realistic look.
            </p>
            <p className="mt-4 text-base leading-8 text-stone-300 md:text-lg">
              I have experience working with Adobe Photoshop, Adobe Lightroom, Adobe Premiere Pro and CapCut, along with practical knowledge of photo retouching, color correction, creative manipulation, background editing, album designing and social media content creation.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.02] p-5">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#d8b98a]/10 text-[#d8b98a]">
                <Briefcase size={20} />
              </div>
              <h3 className="text-xl font-medium text-white">Experience Areas</h3>
              <p className="mt-3 text-sm leading-7 text-stone-300">Wedding photography, portrait editing, product styling, album design and creative media production.</p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.02] p-5">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#d8b98a]/10 text-[#d8b98a]">
                <Camera size={20} />
              </div>
              <h3 className="text-xl font-medium text-white">Creative Focus</h3>
              <p className="mt-3 text-sm leading-7 text-stone-300">Premium storytelling, natural light, emotion-based framing and polished post-production.</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-20 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <GraduationCap className="text-[#d8b98a]" size={22} />
            <h3 className="text-2xl font-medium text-white">Education & Training</h3>
          </div>

          <div className="space-y-5">
            {education.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-stone-950/40 p-4">
                <p className="text-[#d8b98a]">🎓 {item.title}</p>
                <p className="mt-2 text-stone-200">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <Sparkles className="text-[#d8b98a]" size={22} />
            <h3 className="text-2xl font-medium text-white">Photography Knowledge</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {knowledge.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-stone-950/50 px-4 py-2 text-sm text-stone-150">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#121212] via-[#171412] to-[#101010] p-6 md:p-8">
        <div className="mb-4 flex items-center gap-3">
          <BookCopy className="text-[#d8b98a]" size={22} />
          <h3 className="text-2xl font-medium text-white">Career Objective</h3>
        </div>
        <p className="text-base leading-8 text-stone-300 md:text-lg">
          I am currently looking for an opportunity where I can contribute my creativity and technical skills, work with a professional team, learn from new experiences and grow my career in the Photography, Photo Editing, Graphic Designing and Creative Media industry.
        </p>
      </div>
    </div>
  )
}

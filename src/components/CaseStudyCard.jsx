import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import BeforeAfterSlider from './BeforeAfterSlider'

export default function CaseStudyCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.02]"
    >
      <div className="grid gap-1 sm:grid-cols-2">
        {project.images.map((photo, index) => (
          <img
            key={`${project.id}-${photo.id}`}
            src={photo.image}
            alt={`${project.title} photograph ${index + 1}`}
            loading="lazy"
            decoding="async"
            className={`h-64 w-full object-cover ${project.images.length === 3 && index === 0 ? 'sm:row-span-2 sm:h-full' : ''}`}
          />
        ))}
      </div>
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#d8b98a]">
          <span>{project.category}</span>
          {project.location && <span className="inline-flex items-center gap-1 text-stone-400"><MapPin size={12} />{project.location}</span>}
        </div>
        <h3 className="mt-3 text-2xl font-medium text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-stone-300">{project.story}</p>
        <div className="mt-5 border-t border-white/10 pt-5">
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400">Editing process</p>
          <p className="mt-2 text-sm leading-6 text-stone-300">{project.editingProcess}</p>
        </div>
        {project.beforeAfter && (
          <div className="mt-6">
            <BeforeAfterSlider
              originalImage={project.beforeAfter.originalImage}
              editedImage={project.beforeAfter.editedImage}
              title={`${project.title} edit`}
            />
          </div>
        )}
      </div>
    </motion.article>
  )
}

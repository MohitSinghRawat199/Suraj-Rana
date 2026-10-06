import * as LucideIcons from 'lucide-react'
import { motion } from 'framer-motion'

export default function ServiceCard({ title, description, icon }) {
  const Icon = LucideIcons[icon] || LucideIcons.Camera

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="rounded-[1.6rem] border border-white/10 bg-white/[0.02] p-6 shadow-[0_20px_45px_rgba(0,0,0,0.18)]"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#d8b98a]/30 bg-[#d8b98a]/10 text-[#f0d7a3]">
        <Icon size={22} />
      </div>
      <h3 className="mb-3 text-2xl font-medium text-white">{title}</h3>
      <p className="text-sm leading-7 text-stone-300">{description}</p>
    </motion.article>
  )
}

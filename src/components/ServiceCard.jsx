import { BookOpenText, Camera, Heart, Palette, PartyPopper, UserRound, WandSparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const serviceIcons = { Camera, UserRound, Heart, PartyPopper, WandSparkles, BookOpenText, Palette }

export default function ServiceCard({ title, description, icon }) {
  const Icon = serviceIcons[icon] || Camera

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="rounded-[1.6rem] border border-stone-200 bg-white p-6 shadow-[0_20px_45px_rgba(0,0,0,0.18)]"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#9b7445]/30 bg-[#9b7445]/10 text-[#77552f]">
        <Icon size={22} />
      </div>
      <h3 className="mb-3 text-2xl font-medium text-stone-900">{title}</h3>
      <p className="text-sm leading-7 text-stone-600">{description}</p>
    </motion.article>
  )
}

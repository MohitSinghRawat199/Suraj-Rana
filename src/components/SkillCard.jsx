import { motion } from 'framer-motion'

export default function SkillCard({ skill }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-center text-sm text-stone-700 shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
    >
      {skill}
    </motion.div>
  )
}

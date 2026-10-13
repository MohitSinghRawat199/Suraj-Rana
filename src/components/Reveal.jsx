import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ as = 'div', className, children, delay = 0, ...props }) {
  const prefersReducedMotion = useReducedMotion()
  const Element = prefersReducedMotion ? as : motion[as]

  return (
    <Element
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Element>
  )
}

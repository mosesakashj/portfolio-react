import { motion, useReducedMotion } from 'motion/react'
import { ChevronDown } from 'lucide-react'

export function ScrollIndicator() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className="text-ink-500 absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={reduceMotion ? {} : { y: [0, 6, 0] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <ChevronDown className="h-6 w-6" />
    </motion.div>
  )
}

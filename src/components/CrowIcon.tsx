import { motion } from 'framer-motion'

interface Props {
  className?: string
  animate?: boolean
}

export default function CrowIcon({ className = '', animate = false }: Props) {
  return (
    <motion.svg
      viewBox="0 0 200 220"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={animate ? { opacity: 0, y: -10 } : false}
      animate={animate ? { opacity: 1, y: 0 } : false}
      transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
      aria-hidden="true"
    >
      {/* crown */}
      <g fill="#7a1a1a">
        <path d="M50 60 L66 30 L86 50 L100 18 L114 50 L134 30 L150 60 L150 72 L50 72 Z" />
      </g>
      <g fill="#a07d3a">
        <circle cx="66" cy="30" r="3" />
        <circle cx="100" cy="18" r="3" />
        <circle cx="134" cy="30" r="3" />
      </g>

      {/* crow body — single solid silhouette, slightly stylised */}
      <g fill="#1a1411">
        {/* head */}
        <ellipse cx="100" cy="100" rx="40" ry="32" />
        {/* body */}
        <path d="M62 110
                 C 55 130, 60 170, 90 195
                 L 110 195
                 C 140 170, 145 130, 138 110 Z" />
        {/* beak */}
        <path d="M138 96 L172 100 L136 110 Z" />
        {/* tail feather hint */}
        <path d="M88 188 L96 218 L104 188 Z" />
      </g>

      {/* eye */}
      <circle cx="128" cy="92" r="3.6" fill="#ece1c4" />
      <circle cx="128.5" cy="92" r="1.8" fill="#7a1a1a" />
    </motion.svg>
  )
}

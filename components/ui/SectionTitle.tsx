'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export default function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${centered ? 'text-center' : ''} mb-12`}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        {title.split(' ').map((word, index) => (
          <span key={index}>
            {index === title.split(' ').length - 1 ? (
              <span className="gradient-text">{word}</span>
            ) : (
              <span>{word} </span>
            )}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400 text-lg">{subtitle}</p>
      )}
    </motion.div>
  )
}
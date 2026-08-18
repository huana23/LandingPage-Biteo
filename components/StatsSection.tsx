'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export default function StatsSection() {
  const { t } = useLanguage()

  const stats = [
    { number: '01', label: t('multiService') },
    { number: '02', label: t('localConnect') },
    { number: '03', label: t('seamlessExperience') },
    { number: '04', label: t('opportunity') },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-biteo-dark-text mb-6">
            {t('techServingLife')}
          </h2>
          <p className="text-lg text-biteo-secondary max-w-2xl mx-auto">
            {t('statsDescription')}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group text-center p-8 rounded-3xl bg-biteo-bg hover:bg-biteo-green/5 transition-colors"
            >
              <motion.p
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-biteo-green/20 mb-4 group-hover:text-biteo-green/30 transition-colors"
              >
                {stat.number}
              </motion.p>
              <p className="text-lg font-semibold text-biteo-dark-text">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function FinalCTA() {
  const { t } = useLanguage()

  return (
    <section id="join" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-biteo-dark-text mb-6">
            {t('readyExperience')}
          </h2>
          <p className="text-lg text-biteo-secondary mb-10 max-w-2xl mx-auto">
            {t('ctaDesc')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#ecosystem"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-biteo-green text-white font-semibold rounded-2xl hover:bg-biteo-dark transition-colors shadow-lg shadow-biteo-green/25"
            >
              {t('exploreBiteo')}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#download"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-biteo-bg text-biteo-dark-text font-semibold rounded-2xl border-2 border-gray-200 hover:border-biteo-green hover:text-biteo-green transition-all"
            >
              <Download className="w-5 h-5" />
              {t('downloadApp')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

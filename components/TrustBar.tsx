'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const categories = [
  { icon: '🎬', labelKey: 'video', color: 'bg-red-50' },
  { icon: '🍜', labelKey: 'culinary', color: 'bg-orange-50' },
  { icon: '✈️', labelKey: 'travel', color: 'bg-blue-50' },
  { icon: '🛍️', labelKey: 'shopping', color: 'bg-purple-50' },
  { icon: '🛒', labelKey: 'groceryShopping', color: 'bg-green-50' },
  { icon: '📍', labelKey: 'localExplore', color: 'bg-teal-50' },
]

export default function TrustBar() {
  const { t } = useLanguage()

  return (
    <section className="relative mt-6 md:-mt-16 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-5 sm:p-8 md:p-10"
        >
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-biteo-dark-text">
              {t('ecosystemTitle')}
            </h2>
            <p className="text-biteo-secondary mt-2">
              {t('ecosystemSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.labelKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className={`${category.color} rounded-2xl p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center gap-2 md:gap-3 cursor-pointer transition-shadow hover:shadow-md`}
              >
                <span className="text-2xl sm:text-3xl md:text-4xl">{category.icon}</span>
                <span className="text-xs sm:text-sm font-medium text-biteo-dark-text text-center leading-tight">
                  {t(category.labelKey)}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

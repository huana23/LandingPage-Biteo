'use client'

import { motion } from 'framer-motion'
import { Eye, Utensils, Map, ShoppingBag } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function FeaturedExperience() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Eye,
      labelKey: 'watch',
      descriptionKey: 'watchDesc',
      position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-full',
    },
    {
      icon: Utensils,
      labelKey: 'eat',
      descriptionKey: 'eatDesc',
      position: 'top-1/2 -right-full translate-y-1/2',
    },
    {
      icon: Map,
      labelKey: 'go',
      descriptionKey: 'goDesc',
      position: 'bottom-0 left-1/2 translate-x-1/2 translate-y-full',
    },
    {
      icon: ShoppingBag,
      labelKey: 'buy',
      descriptionKey: 'buyDesc',
      position: 'top-1/2 -left-full translate-y-1/2',
    },
  ]

  return (
    <section id="about" className="py-20 md:py-28 bg-biteo-green overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('everythingYouNeed')}
          </h2>
          <p className="text-lg text-white/80">
            {t('allServicesConnected')}
          </p>
        </motion.div>

        {/* Phone Mockup with Features */}
        <div className="relative max-w-lg mx-auto">
          <div className="relative">
            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 mx-auto w-64 sm:w-72"
            >
              <div className="bg-biteo-dark-text rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Phone notch */}
                  <div className="h-8 bg-biteo-dark-text rounded-b-2xl" />
                  
                  {/* App Screen */}
                  <div className="p-4">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-10 h-10 bg-biteo-green rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold">B</span>
                      </div>
                      <div>
                        <p className="font-semibold text-biteo-dark-text">Biteo</p>
                        <p className="text-xs text-biteo-secondary">Super App</p>
                      </div>
                    </div>

                    {/* Feature Icons */}
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {['🎬', '🍜', '✈️', '🛍️'].map((emoji, i) => (
                        <div key={i} className="aspect-square bg-gray-50 rounded-xl flex items-center justify-center text-xl">
                          {emoji}
                        </div>
                      ))}
                    </div>

                    {/* Featured Content */}
                    <div className="space-y-3">
                      <div className="bg-gradient-to-br from-biteo-green/10 to-biteo-lime/10 rounded-xl h-24" />
                      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl h-24" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Features */}
            {features.map((feature, index) => (
              <motion.div
                key={feature.labelKey}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
                className={`absolute ${feature.position} z-20 hidden md:block`}
              >
                <div className="glassmorphism rounded-2xl p-4 shadow-xl flex items-center gap-4 whitespace-nowrap">
                  <div className="w-12 h-12 bg-biteo-green/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-biteo-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-biteo-dark-text">{t(feature.labelKey)}</p>
                    <p className="text-xs text-biteo-secondary">{t(feature.descriptionKey)}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-10 -right-10 w-40 h-40 border-4 border-white/10 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-10 -left-10 w-32 h-32 border-4 border-white/10 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

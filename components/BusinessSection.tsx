'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import Image from '../assets/images/BusinessSectionImg.jpeg'
import { useLanguage } from '@/context/LanguageContext'

export default function BusinessSection() {
  const { t } = useLanguage()

  const benefits = [
    t('reachNewCustomers'),
    t('increaseRevenue'),
    t('manageEffectively'),
    t('buildDigitalBrand'),
    t('sustainableGrowth'),
  ]

  return (
    <section id="business" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src={Image.src}
                alt="Local Business"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-biteo-dark-text/60 to-transparent" />
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-6 left-6 right-6 glassmorphism rounded-2xl p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-biteo-green text-center">10K+</p>
                    <p className="text-sm text-biteo-secondary">{t('businesses')}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-biteo-green text-center">64</p>
                    <p className="text-sm text-biteo-secondary">{t('provinces')}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-biteo-green text-center">1M+</p>
                    <p className="text-sm text-biteo-secondary">{t('appUsers')}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-biteo-green/10 rounded-full -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-biteo-lime/10 rounded-full -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-biteo-green/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-biteo-green rounded-full" />
              <span className="text-sm font-semibold text-biteo-green">{t('forBusiness')}</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-biteo-dark-text mb-6">
              {t('bringBusinessCloser')}
            </h2>

            <p className="text-lg text-biteo-secondary mb-8">
              {t('businessDesc')}
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-biteo-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-biteo-green" />
                  </div>
                  <span className="text-biteo-dark-text font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#partners"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-biteo-green text-white font-semibold rounded-2xl hover:bg-biteo-dark transition-colors shadow-lg shadow-biteo-green/25"
            >
              {t('becomeBiteoPartner')}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

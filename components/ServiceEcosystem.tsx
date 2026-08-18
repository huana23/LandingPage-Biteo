'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image1 from '../assets/images/Blog1.jpeg'
import Image2 from '../assets/images/Blog2.jpeg'
import Image3 from '../assets/images/Blog3.jpeg'
import Image4 from '../assets/images/Blog4.jpeg'
import Image5 from '../assets/images/Blog5.jpeg'
import Image6 from '../assets/images/Blog6.jpeg'


import { useLanguage } from '@/context/LanguageContext'

export default function ServiceEcosystem() {
  const { t } = useLanguage()

  const services = [
    {
      icon: '🎬',
      title: t('entertainmentVideo'),
      description: t('entertainmentDesc'),
      image: Image1.src,
      color: 'from-red-100 to-pink-100',
      href: '/video-giai-tri',
    },
    {
      icon: '🍜',
      title: t('culinary'),
      description: t('culinaryDesc'),
      image: Image2.src,
      color: 'from-orange-100 to-amber-100',
      href: '/am-thuc',
    },
    {
      icon: '✈️',
      title: t('travel'),
      description: t('travelDesc'),
      image: Image3.src,
      color: 'from-blue-100 to-cyan-100',
      href: '/du-lich',
    },
    {
      icon: '🛍️',
      title: t('shopping'),
      description: t('shoppingDesc'),
      image: Image4.src,
      color: 'from-purple-100 to-violet-100',
      href: '/mua-sam',
    },
    {
      icon: '🛒',
      title: t('groceryShopping'),
      description: t('groceryDesc'),
      image: Image5.src,
      color: 'from-green-100 to-emerald-100',
      href: '/di-cho-ho',
    },
    {
      icon: '📍',
      title: t('localDiscoverTitle'),
      description: t('localDiscoverDesc'),
      image: Image6.src,
      color: 'from-teal-100 to-cyan-100',
      href: '/kham-pha-dia-phuong',
    },
  ]

  return (
    <section id="ecosystem" className="py-20 md:py-28 bg-biteo-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-biteo-dark-text mb-4">
            {t('oneApp')} <span className="text-gradient">{t('millionExperiences')}</span>
          </h2>
          <p className="text-lg text-biteo-secondary">
            {t('ecosystemDescription')}
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col h-full"
            >
              {/* Image */}
              <div className={`relative h-56 bg-gradient-to-br ${service.color} overflow-hidden`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 left-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-biteo-dark-text mb-2">
                  {service.title}
                </h3>
                <p className="text-biteo-secondary mb-4 line-clamp-3">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-biteo-green font-medium group-hover:gap-3 transition-all mt-auto"
                >
                  {t('discover')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

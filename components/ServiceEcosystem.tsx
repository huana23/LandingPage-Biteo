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
    <section
      id="ecosystem"
      className="bg-biteo-bg py-16 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <h2 className="mb-4 text-3xl font-bold text-biteo-dark-text sm:text-4xl lg:text-5xl">
            {t('oneApp')}{' '}
            <span className="text-gradient">
              {t('millionExperiences')}
            </span>
          </h2>

          <p className="text-base leading-relaxed text-biteo-secondary sm:text-lg">
            {t('ecosystemDescription')}
          </p>
        </motion.div>

        {/* =========================
            SERVICE CARDS
        ========================== */}
        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              whileHover={{
                y: -8,
              }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:shadow-card-hover"
            >
              {/* =========================
                  IMAGE
              ========================== */}
              <div
                className={`
                  relative
                  h-56
                  shrink-0
                  overflow-hidden
                  bg-gradient-to-br
                  sm:h-64
                  lg:h-72
                  ${service.color}
                `}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                {/* Icon */}
                <div className="absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 text-2xl shadow-lg backdrop-blur-sm">
                  {service.icon}
                </div>
              </div>

              {/* =========================
                  CONTENT
              ========================== */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">

                {/* Title */}
                <h3 className="mb-2 text-xl font-bold text-biteo-dark-text">
                  {service.title}
                </h3>

                {/* Description - FULL CONTENT */}
                <p className="text-sm leading-relaxed text-biteo-secondary sm:text-base">
                  {service.description}
                </p>

                {/* Discover */}
                <Link
                  href={service.href}
                  className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-biteo-green transition-all group-hover:gap-3 sm:text-base"
                >
                  {t('discover')}

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users, Building, MapPin } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Opportunities() {
  const { t } = useLanguage()

  const opportunities = [
    {
      icon: Users,
      title: t('collaborators'),
      description: t('collabDesc'),
      cta: t('becomeCollaborator'),
      href: '/dang-ky-nhan-vien-di-cho-ho',
      color: 'from-biteo-green/10 to-emerald-50',
    },
    {
      icon: Building,
      title: t('businessPartnerTitle'),
      description: t('businessPartnerDesc'),
      cta: t('registerPartner'),
      href: '/dang-ky-cua-hang',
      color: 'from-blue-50 to-cyan-50',
    },
    {
      icon: MapPin,
      title: t('localPartner'),
      description: t('localPartnerDesc'),
      cta: t('learnMore'),
      href: '/partner-policy',
      color: 'from-purple-50 to-pink-50',
    },
  ]

  return (
    <section id="partners" className="py-20 md:py-28 bg-biteo-bg">
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
            {t('opportunitiesTitle')} <span className="text-gradient">{t('newOpportunities')}</span>
          </h2>
          <p className="text-lg text-biteo-secondary">
            {t('opportunitiesDesc')}
          </p>
        </motion.div>

        {/* Opportunity Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {opportunities.map((opp, index) => (
            <motion.div
              key={opp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className={`bg-gradient-to-br ${opp.color} rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300`}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <opp.icon className="w-8 h-8 text-biteo-green" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-biteo-dark-text mb-3">
                {opp.title}
              </h3>
              <p className="text-biteo-secondary mb-6">
                {opp.description}
              </p>

              {/* CTA */}
              <Link
                href={opp.href}
                className="inline-flex items-center gap-2 text-biteo-green font-semibold hover:gap-3 transition-all"
              >
                {opp.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

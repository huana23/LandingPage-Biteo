'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Headphones, MessageCircle, Mail, Phone, Clock, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function SupportSection() {
  const { t } = useLanguage()

  const supportChannels = [
    {
      icon: MessageCircle,
      title: t('liveChat'),
      description: t('liveChatDesc'),
      availability: '24/7',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Mail,
      title: t('email'),
      description: t('emailDesc'),
      availability: t('responseIn24h'),
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Phone,
      title: t('hotline'),
      description: t('hotlineDesc'),
      availability: '0986498899',
      color: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Clock,
      title: t('faqCenter'),
      description: t('faqCenterDesc'),
      availability: t('alwaysUpdated'),
      color: 'bg-orange-100 text-orange-600',
    },
  ]

  const faqs = [
    {
      question: t('faqQ1'),
      answer: t('faqA1'),
    },
    {
      question: t('faqQ2'),
      answer: t('faqA2'),
    },
    {
      question: t('faqQ3'),
      answer: t('faqA3'),
    },
  ]

  return (
    <section id="support" className="py-20 md:py-28 bg-biteo-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Headphones className="w-4 h-4" />
            {t('support')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-biteo-dark-text mb-4">
            {t('supportTitle')} <span className="text-gradient">{t('supportTitleHighlight')}</span>
          </h2>
          <p className="text-lg text-biteo-secondary">
            {t('supportDesc')}
          </p>
        </motion.div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportChannels.map((channel, index) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all"
            >
              <div className={`w-14 h-14 ${channel.color} rounded-xl flex items-center justify-center mb-4`}>
                <channel.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-biteo-dark-text mb-2">
                {channel.title}
              </h3>
              <p className="text-sm text-biteo-secondary mb-3">
                {channel.description}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-biteo-green">
                <CheckCircle className="w-3 h-3" />
                {channel.availability}
              </span>
            </motion.div>
          ))}
        </div>

        {/* FAQ Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-10"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-biteo-dark-text mb-2">
                {t('faqTitle')}
              </h3>
              <p className="text-biteo-secondary">
                {t('faqSubtitle')}
              </p>
            </div>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-biteo-green text-white font-semibold rounded-xl hover:bg-biteo-dark transition-colors"
            >
              {t('contactSupport')}
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="border border-gray-100 rounded-xl p-5 hover:border-green-200 transition-colors"
              >
                <h4 className="font-semibold text-biteo-dark-text mb-2">
                  {faq.question}
                </h4>
                <p className="text-sm text-biteo-secondary">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-biteo-green text-white font-semibold rounded-xl hover:bg-biteo-dark transition-colors"
            >
              {t('contactSupport')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

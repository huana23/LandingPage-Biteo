'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, Shield, AlertTriangle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import PageHeader from '@/components/PageHeader'

export default function TermsPage() {
  const { t } = useLanguage()

  const sections = [
    { title: `${t('legal')} 1. ${t('termsTitle')}`, content: t('termsOverview') },
    { title: `${t('legal')} 2. ${t('services')}`, content: t('businessDesc') },
    { title: `${t('legal')} 3. ${t('register')}`, content: t('registrationSubtitle') },
    { title: `${t('legal')} 4. ${t('legal')}`, content: t('termsOverview') },
    { title: `${t('legal')} 5. ${t('contact')}`, content: t('supportDesc') },
    { title: `${t('legal')} 6. ${t('paymentSettlement')}`, content: t('paymentSettlementText') },
    { title: `${t('legal')} 7. ${t('privacyPolicy')}`, content: t('privacyDataText') },
    { title: `${t('legal')} 8. ${t('legal')}`, content: t('termsOverview') },
    { title: `${t('legal')} 9. ${t('terminateCooperation')}`, content: t('terminateCooperationText') },
    { title: `${t('legal')} 10. ${t('contact')}`, content: 'ceo.biteo@gmail.com | 0986498899' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <PageHeader backHref="/" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            {t('legal')}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('termsTitle')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('lastUpdated')}: 18 {t('weekdays')} 2026
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-xl p-8 mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{t('overview')}</h2>
              <p className="text-gray-600 leading-relaxed">
                {t('termsOverview')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {section.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('importantNotice')}</h4>
              <p className="text-sm text-gray-600">
                {t('importantNoticeText')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 bg-green-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-3">
            {t('needMoreHelp')}
          </h3>
          <p className="text-green-100 mb-6">
            {t('biteoTeamReady')}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-colors"
          >
            {t('contactNow')}
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

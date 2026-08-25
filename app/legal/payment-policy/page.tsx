'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CreditCard, FileText, AlertTriangle, Shield, Lock, DollarSign } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import PageHeader from '@/components/PageHeader'

export default function PaymentPolicyPage() {
  const { t } = useLanguage()

  const tableOfContents = [
    { id: 'general', title: t('paymentPolicyPart1'), icon: FileText },
    { id: 'methods', title: t('paymentPolicyPart2'), icon: CreditCard },
    { id: 'refunds', title: t('paymentPolicyPart3'), icon: DollarSign },
    { id: 'points', title: t('paymentPolicyPart4'), icon: Shield },
    { id: 'reconciliation', title: t('paymentPolicyPart5'), icon: Lock },
  ]

  const generalSections = [
    { title: t('paymentPolicyArt1Title'), content: t('paymentPolicyArt1Content') },
    { title: t('paymentPolicyArt2Title'), content: t('paymentPolicyArt2Content') },
    { title: t('paymentPolicyArt3Title'), content: t('paymentPolicyArt3Content') },
    { title: t('paymentPolicyArt4Title'), content: t('paymentPolicyArt4Content') },
  ]

  const methodSections = [
    { title: t('paymentPolicyArt5Title'), content: t('paymentPolicyArt5Content') },
    { title: t('paymentPolicyArt6Title'), content: t('paymentPolicyArt6Content') },
    { title: t('paymentPolicyArt7Title'), content: t('paymentPolicyArt7Content') },
    { title: t('paymentPolicyArt8Title'), content: t('paymentPolicyArt8Content') },
    { title: t('paymentPolicyArt9Title'), content: t('paymentPolicyArt9Content') },
    { title: t('paymentPolicyArt10Title'), content: t('paymentPolicyArt10Content') },
  ]

  const refundSections = [
    { title: t('paymentPolicyArt11Title'), content: t('paymentPolicyArt11Content') },
    { title: t('paymentPolicyArt12Title'), content: t('paymentPolicyArt12Content') },
    { title: t('paymentPolicyArt13Title'), content: t('paymentPolicyArt13Content') },
    { title: t('paymentPolicyArt14Title'), content: t('paymentPolicyArt14Content') },
    { title: t('paymentPolicyArt15Title'), content: t('paymentPolicyArt15Content') },
    { title: t('paymentPolicyArt16Title'), content: t('paymentPolicyArt16Content') },
  ]

  const pointSections = [
    { title: t('paymentPolicyArt17Title'), content: t('paymentPolicyArt17Content') },
    { title: t('paymentPolicyArt18Title'), content: t('paymentPolicyArt18Content') },
    { title: t('paymentPolicyArt19Title'), content: t('paymentPolicyArt19Content') },
    { title: t('paymentPolicyArt20Title'), content: t('paymentPolicyArt20Content') },
    { title: t('paymentPolicyArt21Title'), content: t('paymentPolicyArt21Content') },
  ]

  const reconciliationSections = [
    { title: t('paymentPolicyArt22Title'), content: t('paymentPolicyArt22Content') },
    { title: t('paymentPolicyArt23Title'), content: t('paymentPolicyArt23Content') },
    { title: t('paymentPolicyArt24Title'), content: t('paymentPolicyArt24Content') },
    { title: t('paymentPolicyArt25Title'), content: t('paymentPolicyArt25Content') },
    { title: t('paymentPolicyArt26Title'), content: t('paymentPolicyArt26Content') },
    { title: t('paymentPolicyArt27Title'), content: t('paymentPolicyArt27Content') },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <PageHeader />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CreditCard className="w-4 h-4" />
            {t('legal')}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('paymentPolicyPageTitle')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('paymentPolicyPageSubtitle')}
          </p>
        </motion.div>

        {/* Table of Contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-xl p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">{t('tableOfContents')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {tableOfContents.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">{item.title}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Part I - General */}
        <motion.div
          id="general"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">I</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('paymentPolicyPart1')}</h2>
          </div>
          <div className="space-y-4">
            {generalSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part II - Payment Methods */}
        <motion.div
          id="methods"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">II</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('paymentPolicyPart2')}</h2>
          </div>
          <div className="space-y-4">
            {methodSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part III - Refunds */}
        <motion.div
          id="refunds"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">III</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('paymentPolicyPart3')}</h2>
          </div>
          <div className="space-y-4">
            {refundSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part IV - Points */}
        <motion.div
          id="points"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">IV</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('paymentPolicyPart4')}</h2>
          </div>
          <div className="space-y-4">
            {pointSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part V - Reconciliation */}
        <motion.div
          id="reconciliation"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">V</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('paymentPolicyPart5')}</h2>
          </div>
          <div className="space-y-4">
            {reconciliationSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="bg-green-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-3">
            {t('paymentPolicyContactTitle')}
          </h3>
          <p className="text-green-100 mb-6">
            {t('pricingPolicyContactDesc')}
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

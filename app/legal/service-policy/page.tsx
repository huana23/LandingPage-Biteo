'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, FileText, Clock, AlertTriangle, CheckCircle, XCircle, RefreshCw } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import PageHeader from '@/components/PageHeader'

export default function ServiceOrderingPolicyPage() {
  const { t } = useLanguage()

  const tableOfContents = [
    { id: 'general', title: t('servicePolicyPart1'), icon: FileText },
    { id: 'ordering', title: t('servicePolicyPart2'), icon: Calendar },
    { id: 'service-provision', title: t('servicePolicyPart3'), icon: CheckCircle },
    { id: 'service-types', title: t('servicePolicyPart4'), icon: RefreshCw },
    { id: 'cancellation', title: t('servicePolicyPart5'), icon: XCircle },
    { id: 'refunds', title: t('servicePolicyPart6'), icon: AlertTriangle },
  ]

  const generalSections = [
    { title: t('servicePolicyArt1Title'), content: t('servicePolicyArt1Content') },
    { title: t('servicePolicyArt2Title'), content: t('servicePolicyArt2Content') },
    { title: t('servicePolicyArt3Title'), content: t('servicePolicyArt3Content') },
    { title: t('servicePolicyArt4Title'), content: t('servicePolicyArt4Content') },
  ]

  const orderingSections = [
    { title: t('servicePolicyArt5Title'), content: t('servicePolicyArt5Content') },
    { title: t('servicePolicyArt6Title'), content: t('servicePolicyArt6Content') },
    { title: t('servicePolicyArt7Title'), content: t('servicePolicyArt7Content') },
    { title: t('servicePolicyArt8Title'), content: t('servicePolicyArt8Content') },
    { title: t('servicePolicyArt9Title'), content: t('servicePolicyArt9Content') },
    { title: t('servicePolicyArt10Title'), content: t('servicePolicyArt10Content') },
  ]

  const provisionSections = [
    { title: t('servicePolicyArt11Title'), content: t('servicePolicyArt11Content') },
    { title: t('servicePolicyArt12Title'), content: t('servicePolicyArt12Content') },
    { title: t('servicePolicyArt13Title'), content: t('servicePolicyArt13Content') },
    { title: t('servicePolicyArt14Title'), content: t('servicePolicyArt14Content') },
    { title: t('servicePolicyArt15Title'), content: t('servicePolicyArt15Content') },
  ]

  const serviceTypesSections = [
    { title: t('servicePolicyArt16Title'), content: t('servicePolicyArt16Content') },
    { title: t('servicePolicyArt17Title'), content: t('servicePolicyArt17Content') },
    { title: t('servicePolicyArt18Title'), content: t('servicePolicyArt18Content') },
    { title: t('servicePolicyArt19Title'), content: t('servicePolicyArt19Content') },
    { title: t('servicePolicyArt20Title'), content: t('servicePolicyArt20Content') },
    { title: t('servicePolicyArt21Title'), content: t('servicePolicyArt21Content') },
    { title: t('servicePolicyArt22Title'), content: t('servicePolicyArt22Content') },
  ]

  const cancellationSections = [
    { title: t('servicePolicyArt23Title'), content: t('servicePolicyArt23Content') },
    { title: t('servicePolicyArt24Title'), content: t('servicePolicyArt24Content') },
    { title: t('servicePolicyArt25Title'), content: t('servicePolicyArt25Content') },
    { title: t('servicePolicyArt26Title'), content: t('servicePolicyArt26Content') },
    { title: t('servicePolicyArt27Title'), content: t('servicePolicyArt27Content') },
  ]

  const refundSections = [
    { title: t('servicePolicyArt28Title'), content: t('servicePolicyArt28Content') },
    { title: t('servicePolicyArt29Title'), content: t('servicePolicyArt29Content') },
    { title: t('servicePolicyArt30Title'), content: t('servicePolicyArt30Content') },
    { title: t('servicePolicyArt31Title'), content: t('servicePolicyArt31Content') },
    { title: t('servicePolicyArt32Title'), content: t('servicePolicyArt32Content') },
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
            <FileText className="w-4 h-4" />
            {t('legal')}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('servicePolicyPageTitle')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('servicePolicyPageSubtitle')}
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
            <h2 className="text-2xl font-bold text-gray-900">{t('servicePolicyPart1')}</h2>
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

        {/* Part II - Ordering */}
        <motion.div
          id="ordering"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">II</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('servicePolicyPart2')}</h2>
          </div>
          <div className="space-y-4">
            {orderingSections.map((section, index) => (
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

        {/* Part III - Service Provision */}
        <motion.div
          id="service-provision"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">III</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('servicePolicyPart3')}</h2>
          </div>
          <div className="space-y-4">
            {provisionSections.map((section, index) => (
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

        {/* Part IV - Service Types */}
        <motion.div
          id="service-types"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">IV</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('servicePolicyPart4')}</h2>
          </div>
          <div className="space-y-4">
            {serviceTypesSections.map((section, index) => (
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

        {/* Part V - Cancellation */}
        <motion.div
          id="cancellation"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">V</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('servicePolicyPart5')}</h2>
          </div>
          <div className="space-y-4">
            {cancellationSections.map((section, index) => (
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

        {/* Part VI - Refunds */}
        <motion.div
          id="refunds"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">VI</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('servicePolicyPart6')}</h2>
          </div>
          <div className="space-y-4">
            {refundSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.05 }}
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
          transition={{ duration: 0.6, delay: 1.6 }}
          className="bg-green-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-3">
            {t('servicePolicyContactTitle')}
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

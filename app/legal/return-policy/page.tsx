'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { RefreshCw, FileText, Package, AlertTriangle, CheckCircle, Truck, Shield } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import PageHeader from '@/components/PageHeader'

export default function ReturnPolicyPage() {
  const { t } = useLanguage()

  const tableOfContents = [
    { id: 'general', title: t('returnPolicyPart1'), icon: FileText },
    { id: 'conditions', title: t('returnPolicyPart2'), icon: CheckCircle },
    { id: 'procedure', title: t('returnPolicyPart3'), icon: Package },
    { id: 'refunds', title: t('returnPolicyPart4'), icon: RefreshCw },
    { id: 'disputes', title: t('returnPolicyPart5'), icon: AlertTriangle },
  ]

  const generalSections = [
    { title: t('returnPolicyArt1Title'), content: t('returnPolicyArt1Content') },
    { title: t('returnPolicyArt2Title'), content: t('returnPolicyArt2Content') },
    { title: t('returnPolicyArt3Title'), content: t('returnPolicyArt3Content') },
    { title: t('returnPolicyArt4Title'), content: t('returnPolicyArt4Content') },
  ]

  const conditionSections = [
    { title: t('returnPolicyArt5Title'), content: t('returnPolicyArt5Content') },
    { title: t('returnPolicyArt6Title'), content: t('returnPolicyArt6Content') },
    { title: t('returnPolicyArt7Title'), content: t('returnPolicyArt7Content') },
    { title: t('returnPolicyArt8Title'), content: t('returnPolicyArt8Content') },
    { title: t('returnPolicyArt9Title'), content: t('returnPolicyArt9Content') },
    { title: t('returnPolicyArt10Title'), content: t('returnPolicyArt10Content') },
    { title: t('returnPolicyArt11Title'), content: t('returnPolicyArt11Content') },
    { title: t('returnPolicyArt12Title'), content: t('returnPolicyArt12Content') },
    { title: t('returnPolicyArt13Title'), content: t('returnPolicyArt13Content') },
    { title: t('returnPolicyArt14Title'), content: t('returnPolicyArt14Content') },
    { title: t('returnPolicyArt15Title'), content: t('returnPolicyArt15Content') },
  ]

  const procedureSections = [
    { title: t('returnPolicyArt16Title'), content: t('returnPolicyArt16Content') },
    { title: t('returnPolicyArt17Title'), content: t('returnPolicyArt17Content') },
    { title: t('returnPolicyArt18Title'), content: t('returnPolicyArt18Content') },
    { title: t('returnPolicyArt19Title'), content: t('returnPolicyArt19Content') },
    { title: t('returnPolicyArt20Title'), content: t('returnPolicyArt20Content') },
    { title: t('returnPolicyArt21Title'), content: t('returnPolicyArt21Content') },
    { title: t('returnPolicyArt22Title'), content: t('returnPolicyArt22Content') },
  ]

  const refundSections = [
    { title: t('returnPolicyArt23Title'), content: t('returnPolicyArt23Content') },
    { title: t('returnPolicyArt24Title'), content: t('returnPolicyArt24Content') },
    { title: t('returnPolicyArt25Title'), content: t('returnPolicyArt25Content') },
    { title: t('returnPolicyArt26Title'), content: t('returnPolicyArt26Content') },
    { title: t('returnPolicyArt27Title'), content: t('returnPolicyArt27Content') },
    { title: t('returnPolicyArt28Title'), content: t('returnPolicyArt28Content') },
    { title: t('returnPolicyArt29Title'), content: t('returnPolicyArt29Content') },
    { title: t('returnPolicyArt30Title'), content: t('returnPolicyArt30Content') },
    { title: t('returnPolicyArt31Title'), content: t('returnPolicyArt31Content') },
  ]

  const disputeSections = [
    { title: t('returnPolicyArt28Title'), content: t('returnPolicyArt28Content') },
    { title: t('returnPolicyArt29Title'), content: t('returnPolicyArt29Content') },
    { title: t('returnPolicyArt30Title'), content: t('returnPolicyArt30Content') },
    { title: t('returnPolicyArt31Title'), content: t('returnPolicyArt31Content') },
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
            <RefreshCw className="w-4 h-4" />
            {t('legal')}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('returnPolicyPageTitle')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('returnPolicyPageSubtitle')}
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
            <h2 className="text-2xl font-bold text-gray-900">{t('returnPolicyPart1')}</h2>
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

        {/* Part II - Conditions */}
        <motion.div
          id="conditions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">II</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('returnPolicyPart2')}</h2>
          </div>
          <div className="space-y-4">
            {conditionSections.map((section, index) => (
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

        {/* Part III - Procedure */}
        <motion.div
          id="procedure"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">III</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('returnPolicyPart3')}</h2>
          </div>
          <div className="space-y-4">
            {procedureSections.map((section, index) => (
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

        {/* Part IV - Refunds */}
        <motion.div
          id="refunds"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">IV</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('returnPolicyPart4')}</h2>
          </div>
          <div className="space-y-4">
            {refundSections.map((section, index) => (
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

        {/* Part V - Disputes */}
        <motion.div
          id="disputes"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">V</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('returnPolicyPart5')}</h2>
          </div>
          <div className="space-y-4">
            {disputeSections.map((section, index) => (
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
            {t('returnPolicyContactTitle')}
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

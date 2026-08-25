'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, Lock, FileText, Users, Database, Eye, AlertTriangle, Trash2, Clock, Settings, Scale } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import PageHeader from '@/components/PageHeader'

export default function PrivacyPolicyPage() {
  const { t } = useLanguage()

  const tableOfContents = [
    { id: 'general', title: t('privacyPolicyPart1'), icon: Shield },
    { id: 'data-collection', title: t('privacyPolicyPart2'), icon: Database },
    { id: 'purpose', title: t('privacyPolicyPart3'), icon: Eye },
    { id: 'data-sharing', title: t('privacyPolicyPart4'), icon: Users },
    { id: 'storage', title: t('privacyPolicyPart5'), icon: Lock },
    { id: 'rights', title: t('privacyPolicyPart6'), icon: Scale },
    { id: 'incidents', title: t('privacyPolicyPart7'), icon: AlertTriangle },
  ]

  const generalSections = [
    { title: t('privacyPolicyArt1Title'), content: t('privacyPolicyArt1Content') },
    { title: t('privacyPolicyArt2Title'), content: t('privacyPolicyArt2Content') },
    { title: t('privacyPolicyArt3Title'), content: t('privacyPolicyArt3Content') },
  ]

  const dataCollectionSections = [
    { title: t('privacyPolicyArt4Title'), content: t('privacyPolicyArt4Content') },
    { title: t('privacyPolicyArt5Title'), content: t('privacyPolicyArt5Content') },
    { title: t('privacyPolicyArt6Title'), content: t('privacyPolicyArt6Content') },
    { title: t('privacyPolicyArt7Title'), content: t('privacyPolicyArt7Content') },
  ]

  const purposeSections = [
    { title: t('privacyPolicyArt8Title'), content: t('privacyPolicyArt8Content') },
    { title: t('privacyPolicyArt9Title'), content: t('privacyPolicyArt9Content') },
    { title: t('privacyPolicyArt10Title'), content: t('privacyPolicyArt10Content') },
  ]

  const dataSharingSections = [
    { title: t('privacyPolicyArt11Title'), content: t('privacyPolicyArt11Content') },
    { title: t('privacyPolicyArt12Title'), content: t('privacyPolicyArt12Content') },
    { title: t('privacyPolicyArt13Title'), content: t('privacyPolicyArt13Content') },
  ]

  const storageSections = [
    { title: t('privacyPolicyArt14Title'), content: t('privacyPolicyArt14Content') },
    { title: t('privacyPolicyArt15Title'), content: t('privacyPolicyArt15Content') },
  ]

  const rightsSections = [
    { title: t('privacyPolicyArt16Title'), content: t('privacyPolicyArt16Content') },
    { title: t('privacyPolicyArt17Title'), content: t('privacyPolicyArt17Content') },
  ]

  const incidentsSections = [
    { title: t('privacyPolicyArt18Title'), content: t('privacyPolicyArt18Content') },
    { title: t('privacyPolicyArt19Title'), content: t('privacyPolicyArt19Content') },
    { title: t('privacyPolicyArt20Title'), content: t('privacyPolicyArt20Content') },
    { title: t('privacyPolicyArt21Title'), content: t('privacyPolicyArt21Content') },
    { title: t('privacyPolicyArt22Title'), content: t('privacyPolicyArt22Content') },
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
            <Shield className="w-4 h-4" />
            {t('legal')}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('privacyPolicyPageTitle')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('privacyPolicyPageSubtitle')}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {t('lastUpdated')}: 2/9/2026
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
            <h2 className="text-2xl font-bold text-gray-900">{t('privacyPolicyPart1')}</h2>
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
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-green-600" />
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part II - Data Collection */}
        <motion.div
          id="data-collection"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">II</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('privacyPolicyPart2')}</h2>
          </div>
          <div className="space-y-4">
            {dataCollectionSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-600" />
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part III - Purpose */}
        <motion.div
          id="purpose"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">III</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('privacyPolicyPart3')}</h2>
          </div>
          <div className="space-y-4">
            {purposeSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-purple-600" />
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part IV - Data Sharing */}
        <motion.div
          id="data-sharing"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">IV</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('privacyPolicyPart4')}</h2>
          </div>
          <div className="space-y-4">
            {dataSharingSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-600" />
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part V - Storage */}
        <motion.div
          id="storage"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">V</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('privacyPolicyPart5')}</h2>
          </div>
          <div className="space-y-4">
            {storageSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-cyan-600" />
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part VI - Rights */}
        <motion.div
          id="rights"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-pink-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">VI</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('privacyPolicyPart6')}</h2>
          </div>
          <div className="space-y-4">
            {rightsSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-pink-600" />
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Part VII - Incidents */}
        <motion.div
          id="incidents"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">VII</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('privacyPolicyPart7')}</h2>
          </div>
          <div className="space-y-4">
            {incidentsSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  {section.title}
                </h3>
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
          transition={{ duration: 0.6, delay: 1.8 }}
          className="bg-green-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-3">
            {t('privacyPolicyContactTitle')}
          </h3>
          <p className="text-green-100 mb-6">
            {t('pricingPolicyContactDesc')}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-colors"
          >
            <Settings className="w-5 h-5" />
            {t('contactNow')}
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

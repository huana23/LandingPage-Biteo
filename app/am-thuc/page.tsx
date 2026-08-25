'use client'

import { motion } from 'framer-motion'
import {
  Utensils,
  MapPin,
  Search,
  Smartphone,
  Star,
  Heart,
  MessageCircle,
  Share2,
  Users,
  Shield,
  TrendingUp,
  Tag,
  CheckCircle2,
  ArrowRight,
  Handshake,
  Video,
  ChefHat,
  Radio,
  Store,
  Globe,
  Gift,
  Camera,
  Bookmark,
  Clock,
  DollarSign,
  Calendar,
  Package,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import PageHeader from '@/components/PageHeader'

const cuisineGroups = [
  { nameKey: 'culinaryS8SubDesc', items: [
    { flag: '🇻🇳', nameKey: 'catVietnam' },
    { flag: '🇯🇵', nameKey: 'catJapan' },
    { flag: '🇰🇷', nameKey: 'catKorea' },
    { flag: '🇮🇹', nameKey: 'catItaly' },
    { flag: '🇨🇳', nameKey: 'catChina' },
    { flag: '🇹🇭', nameKey: 'catThailand' },
  ]},
]

const searchItems = [
  'culinaryS1Item1',
  'culinaryS1Item2',
  'culinaryS1Item3',
  'culinaryS1Item4',
  'culinaryS1Item5',
  'culinaryS1Item6',
]

const mapFeatures = [
  'culinaryS2Item1',
  'culinaryS2Item2',
  'culinaryS2Item3',
  'culinaryS2Item4',
  'culinaryS2Item5',
]

const dishFeatures = [
  'culinaryS3Item1',
  'culinaryS3Item2',
  'culinaryS3Item3',
  'culinaryS3Item4',
  'culinaryS3Item5',
  'culinaryS3Item6',
  'culinaryS3Item7',
]

const reviewItems = [
  'culinaryS4Item1',
  'culinaryS4Item2',
  'culinaryS4Item3',
  'culinaryS4Item4',
]

const infoItems = [
  'culinaryS5Item1',
  'culinaryS5Item2',
  'culinaryS5Item3',
  'culinaryS5Item4',
  'culinaryS5Item5',
  'culinaryS5Item6',
  'culinaryS5Item7',
  'culinaryS5Item8',
  'culinaryS5Item9',
]

const favoriteItems = [
  'culinaryS7Item1',
  'culinaryS7Item2',
  'culinaryS7Item3',
  'culinaryS7Item4',
]

const communityItems = [
  'culinaryS10Item1',
  'culinaryS10Item2',
  'culinaryS10Item3',
  'culinaryS10Item4',
  'culinaryS10Item5',
  'culinaryS10Item6',
  'culinaryS10Item7',
]

const connectionItems = [
  'culinaryS11Item1',
  'culinaryS11Item2',
  'culinaryS11Item3',
  'culinaryS11Item4',
  'culinaryS11Item5',
  'culinaryS11Item6',
  'culinaryS11Item7',
]

export default function AmThucPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <PageHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Utensils className="w-4 h-4" />
            {t('culinaryHero')}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {t('culinaryPageTitle')}
          </h1>
          <p className="text-lg text-orange-500 font-medium mb-8">
            {t('culinaryPageHeroTag')}
          </p>

          {/* Intro Card */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {t('culinaryPageIntroTitle')}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('culinaryPageIntroDesc')}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('culinaryPageIntroText1')}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('culinaryPageIntroText2')}
            </p>
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl p-5 my-6 text-center font-semibold">
              {t('culinaryPageSlogan')}
            </div>
            <p className="text-gray-900 font-semibold mb-4">
              {t('culinaryPageIntroText3')}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t('culinaryPageIntroText4')}
            </p>
          </div>
        </motion.section>

        {/* Search */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                <Search className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                {t('culinaryS1Title')}
              </h2>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('culinaryS1Desc')}
            </p>
            <p className="text-gray-700 font-medium mb-4">
              {t('culinaryS1SubDesc')}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {searchItems.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-orange-50 rounded-xl p-4 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-800 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>
            <div className="bg-orange-50 rounded-2xl p-5 border-l-4 border-orange-500">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('culinaryS1Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Map Discovery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('culinaryS2Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('culinaryS2Desc')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 max-w-4xl mx-auto">
              {mapFeatures.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-teal-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('culinaryS2Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Discover Dishes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {t('culinaryS3Title')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t('culinaryS3Desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-6"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                <ChefHat className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {t('culinaryS3SubDesc')}
              </h3>
              <div className="space-y-2">
                {dishFeatures.slice(0, 4).map((key) => (
                  <div key={key} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-700 text-sm">{t(key)}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl p-6"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Camera className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {t('culinaryS3SubDesc')}
              </h3>
              <div className="space-y-2">
                {dishFeatures.slice(4).map((key) => (
                  <div key={key} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    <span className="text-gray-700 text-sm">{t(key)}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-card border-l-4 border-amber-500">
            <p className="text-gray-700 leading-relaxed italic">
              💡 {t('culinaryS3Note')}
            </p>
          </div>
        </motion.section>

        {/* Reviews */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('culinaryS4Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('culinaryS4Desc')}
              </p>
            </div>

            <p className="text-gray-700 font-medium mb-6 text-center">
              {t('culinaryS4SubDesc')}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {reviewItems.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-5 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium text-sm">{t(key)}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-5 border-l-4 border-yellow-500">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('culinaryS4Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Info Before Visiting */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('culinaryS5Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('culinaryS5Desc')}
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
              {infoItems.map((key, idx) => (
                <span key={key} className="flex items-center gap-2">
                  <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                    {t(key)}
                  </span>
                  {idx < infoItems.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-gray-400 hidden sm:block" />
                  )}
                </span>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-blue-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('culinaryS5Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Book Online */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('culinaryS6Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t('culinaryS6Desc')}
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-6">
              {t('culinaryS6Flow').split('→').map((step, idx, arr) => (
                <span key={idx} className="flex items-center gap-2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                    {step.trim()}
                  </span>
                  {idx < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-gray-400 hidden sm:block" />
                  )}
                </span>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-5 border-l-4 border-purple-500">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('culinaryS6Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Save Favorites */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {t('culinaryS7Title')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t('culinaryS7Desc')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {favoriteItems.map((key, idx) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-red-500" />
                </div>
                <p className="text-sm font-semibold text-gray-900">{t(key)}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-5 border-l-4 border-red-500 max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed italic">
              💡 {t('culinaryS7Note')}
            </p>
          </div>
        </motion.section>

        {/* Diverse Cuisines */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('culinaryS8Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('culinaryS8Desc')}
              </p>
            </div>

            <p className="text-gray-700 font-medium mb-6 text-center">
              {t('culinaryS8SubDesc')}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                { flag: '🇻🇳', name: t('catVietnam') },
                { flag: '🇯🇵', name: t('catJapan') },
                { flag: '🇰🇷', name: t('catKorea') },
                { flag: '🇮🇹', name: t('catItaly') },
                { flag: '🇨🇳', name: t('catChina') },
                { flag: '🇹🇭', name: t('catThailand') },
              ].map((cuisine, idx) => (
                <motion.div
                  key={cuisine.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="bg-white rounded-2xl px-6 py-4 shadow-card hover:shadow-card-hover transition-all text-center min-w-[120px]"
                >
                  <div className="text-4xl mb-2">{cuisine.flag}</div>
                  <p className="text-sm font-semibold text-gray-900">{cuisine.name}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-orange-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('culinaryS8Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Local Culinary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 text-white">
            <div className="text-center mb-8">
              <MapPin className="w-12 h-12 mx-auto mb-3 opacity-90" />
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                {t('culinaryS9Title')}
              </h2>
              <p className="opacity-90 max-w-3xl mx-auto">
                {t('culinaryS9Desc')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
              <p className="text-center font-semibold text-lg leading-relaxed">
                {t('culinaryS9Journey')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
              <p className="leading-relaxed italic opacity-95">
                💡 {t('culinaryS9Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Community Sharing */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {t('culinaryS10Title')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-4">
              {t('culinaryS10Desc')}
            </p>
            <p className="text-gray-700 font-medium">
              {t('culinaryS10SubDesc')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {communityItems.map((key, idx) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                <span className="text-gray-800 text-sm">{t(key)}</span>
              </motion.div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-card border-l-4 border-purple-500 mb-4">
            <p className="text-gray-700 leading-relaxed italic">
              💡 {t('culinaryS10Note')}
            </p>
          </div>

          <div className="grid sm:grid-cols-4 gap-4">
            {[
              { icon: Heart, color: 'from-red-400 to-pink-400', interaction: t('videoS3Like') },
              { icon: MessageCircle, color: 'from-blue-400 to-indigo-400', interaction: t('videoS3Comment') },
              { icon: Share2, color: 'from-green-400 to-emerald-400', interaction: t('videoS3Share') },
              { icon: Users, color: 'from-purple-400 to-pink-400', interaction: t('videoS3Follow') },
            ].map((item, idx) => (
              <motion.div
                key={item.interaction}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-4 shadow-card text-center"
              >
                <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs font-medium text-gray-700">{item.interaction}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Connect Restaurants */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('culinaryS11Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-4">
                {t('culinaryS11Desc')}
              </p>
              <p className="text-gray-700 font-medium">
                {t('culinaryS11SubDesc')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 max-w-4xl mx-auto">
              {connectionItems.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-indigo-50 rounded-xl p-4 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                  <span className="text-gray-800 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-5 border-l-4 border-indigo-500">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('culinaryS11Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* E-commerce */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 text-white">
            <div className="text-center mb-8">
              <Gift className="w-12 h-12 mx-auto mb-3 opacity-90" />
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                {t('culinaryS12Title')}
              </h2>
              <p className="opacity-90 max-w-3xl mx-auto mb-2">
                {t('culinaryS12Desc')}
              </p>
              <p className="opacity-90 font-medium">
                {t('culinaryS12SubDesc')}
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-6">
              {t('culinaryS12Flow').split('→').map((step, idx, arr) => (
                <span key={idx} className="flex items-center gap-2">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                    {step.trim()}
                  </span>
                  {idx < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-white/60 hidden sm:block" />
                  )}
                </span>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
              <p className="leading-relaxed italic opacity-95">
                💡 {t('culinaryS12Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Video & Livestream */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <Radio className="w-12 h-12 mx-auto mb-3 text-purple-500" />
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('culinaryS13Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('culinaryS13Desc')}
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-6">
              {t('culinaryS13Flow').split('→').map((step, idx, arr) => (
                <span key={idx} className="flex items-center gap-2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md">
                    {step.trim()}
                  </span>
                  {idx < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-gray-400 hidden sm:block" />
                  )}
                </span>
              ))}
            </div>

            <div className="space-y-4 mb-6 max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-5 border border-orange-200">
                <p className="text-gray-800 leading-relaxed">
                  🍜 {t('culinaryS13Ex1')}
                </p>
              </div>
              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-5 border border-teal-200">
                <p className="text-gray-800 leading-relaxed">
                  🎁 {t('culinaryS13Ex2')}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-5 border-l-4 border-purple-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('culinaryS13Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Value to Biteo */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <TrendingUp className="w-12 h-12 mx-auto mb-3 text-orange-400" />
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                {t('culinaryS14Title')}
              </h2>
              <p className="opacity-90 max-w-3xl mx-auto">
                {t('culinaryS14Desc')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
              <p className="text-center mb-2 opacity-80">
                {t('culinaryS14Question')}
              </p>
              <p className="text-center text-xl font-bold text-yellow-300">
                "{t('culinaryS14Quote')}"
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <p className="text-center font-medium leading-relaxed text-sm">
                  {t('culinaryS14Journey1')}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <p className="text-center font-medium leading-relaxed text-sm">
                  {t('culinaryS14Journey2')}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 text-center">
              <p className="leading-relaxed font-medium">
                💎 {t('culinaryS14Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: '50,000+', labelKey: 'restaurants', icon: Utensils },
            { value: '5M+', labelKey: 'reviews', icon: Star },
            { value: '2M+', labelKey: 'appUsers', icon: Users },
            { value: '63', labelKey: 'provinces', icon: MapPin },
          ].map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-card text-center"
            >
              <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{t(stat.labelKey)}</div>
            </motion.div>
          ))}
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 lg:p-12 text-center text-white"
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            {t('hungryNow')}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t('hungryNowDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              {t('downloadIOS')}
            </button>
            <button className="px-8 py-4 bg-white/20 text-white font-bold rounded-xl hover:bg-white/30 transition-all flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              {t('downloadAndroid')}
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

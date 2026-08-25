'use client'

import { motion } from 'framer-motion'
import {
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
  Compass,
  Building,
  Utensils,
  Plane,
  Gift,
  Camera,
  Bookmark,
  Clock,
  Calendar,
  Package,
  Globe,
  Bed,
  Camera as CameraAlt,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import PageHeader from '@/components/PageHeader'

const exploreItems = [
  'travelS1Item1',
  'travelS1Item2',
  'travelS1Item3',
  'travelS1Item4',
  'travelS1Item5',
  'travelS1Item6',
  'travelS1Item7',
  'travelS1Item8',
]

const accommodationItems = [
  'travelS2Item1',
  'travelS2Item2',
  'travelS2Item3',
  'travelS2Item4',
  'travelS2Item5',
  'travelS2Item6',
]

const localExploreItems = [
  'travelS3Item1',
  'travelS3Item2',
  'travelS3Item3',
  'travelS3Item4',
  'travelS3Item5',
  'travelS3Item6',
]

const cuisineItems = [
  'travelS4Item1',
  'travelS4Item2',
  'travelS4Item3',
  'travelS4Item4',
  'travelS4Item5',
  'travelS4Item6',
]

const videoItems = [
  'travelS5Item1',
  'travelS5Item2',
  'travelS5Item3',
  'travelS5Item4',
  'travelS5Item5',
  'travelS5Item6',
]

const saveItems = [
  'travelS7Item1',
  'travelS7Item2',
  'travelS7Item3',
  'travelS7Item4',
  'travelS7Item5',
]

const communityItems = [
  'travelS8Item1',
  'travelS8Item2',
  'travelS8Item3',
  'travelS8Item4',
  'travelS8Item5',
  'travelS8Item6',
]

const sellerItems = [
  'travelS9Item1',
  'travelS9Item2',
  'travelS9Item3',
  'travelS9Item4',
  'travelS9Item5',
  'travelS9Item6',
  'travelS9Item7',
  'travelS9Item8',
]

const specialtyItems = [
  'travelS10Item1',
  'travelS10Item2',
  'travelS10Item3',
  'travelS10Item4',
  'travelS10Item5',
  'travelS10Item6',
]

const qualityItems = [
  'travelS11Item1',
  'travelS11Item2',
  'travelS11Item3',
  'travelS11Item4',
]

export default function DuLichPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <PageHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Plane className="w-4 h-4" />
            {t('travelHero')}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {t('travelPageTitle')}
          </h1>
          <p className="text-lg text-blue-500 font-medium mb-8">
            {t('travelPageHeroTag')}
          </p>

          {/* Intro Card */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {t('travelPageIntroTitle')}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('travelPageIntroDesc')}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('travelPageIntroText1')}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('travelPageIntroText2')}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('travelPageIntroText3')}
            </p>
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl p-5 my-6 text-center font-semibold">
              {t('travelPageSlogan')}
            </div>
            <div className="bg-blue-50 rounded-2xl p-5 my-6">
              <p className="text-gray-700 leading-relaxed">
                🗺️ {t('travelPageIntroText4')}
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                🏨 {t('travelPageIntroText5')}
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                🍜 {t('travelPageIntroText6')}
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                🎒 {t('travelPageIntroText7')}
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                ❤️ {t('travelPageIntroText8')}
              </p>
            </div>
            <p className="text-gray-900 font-semibold mb-4">
              {t('travelPageIntroText9')}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t('travelPageIntroText10')}
            </p>
          </div>
        </motion.section>

        {/* Section 1: Explore Destinations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Compass className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {t('travelS1Title')}
                </h2>
                <p className="text-blue-600 font-medium">{t('travelS1SubTitle')}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('travelS1Desc')}
            </p>
            <p className="text-gray-700 font-medium mb-6">
              {t('travelS1SubDesc')}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {exploreItems.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-blue-50 rounded-xl p-4 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-800 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>
            <div className="bg-blue-50 rounded-2xl p-5 border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('travelS1Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Find Accommodation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Bed className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('travelS2Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('travelS2Desc')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 max-w-4xl mx-auto">
              {accommodationItems.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-purple-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('travelS2Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Explore by Local */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {t('travelS3Title')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t('travelS3Desc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-6"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {t('travelS3SubTitle')}
              </h3>
              <div className="space-y-2">
                {localExploreItems.slice(0, 3).map((key) => (
                  <div key={key} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500" />
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
              className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-6"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                <Building className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {t('travelS3SubTitle')}
              </h3>
              <div className="space-y-2">
                {localExploreItems.slice(3).map((key) => (
                  <div key={key} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    <span className="text-gray-700 text-sm">{t(key)}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-2xl p-5 text-center font-semibold max-w-3xl mx-auto">
            {t('travelS3Flow')}
          </div>
        </motion.section>

        {/* Section 4: Explore Local Cuisine */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('travelS4Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('travelS4Desc')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 max-w-4xl mx-auto">
              {cuisineItems.map((key, idx) => (
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

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-5 border-l-4 border-amber-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('travelS4Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 5: Watch Videos and Experiences */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('travelS5Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('travelS5Desc')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 max-w-4xl mx-auto">
              {videoItems.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-pink-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('travelS5Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 6: Plan Your Journey */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('travelS6Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t('travelS6Desc')}
              </p>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 mb-6 max-w-3xl mx-auto">
              <div className="space-y-3">
                {t('travelS6Flow').split('↓').map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <span className="text-gray-700">{step.trim()}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-5 border-l-4 border-emerald-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('travelS6Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 7: Save Favorite Destinations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {t('travelS7Title')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t('travelS7Desc')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {saveItems.map((key, idx) => (
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
              💡 {t('travelS7Note')}
            </p>
          </div>
        </motion.section>

        {/* Section 8: Explore from Community */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('travelS8Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-4">
                {t('travelS8Desc')}
              </p>
              <p className="text-gray-700 font-medium">
                {t('travelS8SubDesc')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 max-w-4xl mx-auto">
              {communityItems.map((key, idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-xl p-4 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-violet-500 flex-shrink-0" />
                  <span className="text-gray-800 text-sm">{t(key)}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid sm:grid-cols-5 gap-4 mb-6 max-w-3xl mx-auto">
              {[
                { icon: Heart, color: 'from-red-400 to-pink-400', label: t('travelS8View') },
                { icon: Star, color: 'from-yellow-400 to-amber-400', label: t('travelS8Like') },
                { icon: MessageCircle, color: 'from-blue-400 to-indigo-400', label: t('travelS8Comment') },
                { icon: Share2, color: 'from-green-400 to-emerald-400', label: t('travelS8Share') },
                { icon: Bookmark, color: 'from-purple-400 to-pink-400', label: t('travelS8Save') },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
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
                  <p className="text-xs font-medium text-gray-700">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-violet-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('travelS8Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 9: Connect with Sellers and Local Services */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {t('travelS9Title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-2">
                {t('travelS9Desc')}
              </p>
              <p className="text-gray-700 font-medium">
                {t('travelS9SubDesc')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6 max-w-4xl mx-auto">
              {sellerItems.map((key, idx) => (
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

            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-5 border-l-4 border-indigo-500 max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed italic">
                💡 {t('travelS9Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 10: Connect with Local Specialties */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 text-white">
            <div className="text-center mb-8">
              <Gift className="w-12 h-12 mx-auto mb-3 opacity-90" />
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                {t('travelS10Title')}
              </h2>
              <p className="opacity-90 max-w-3xl mx-auto mb-2">
                {t('travelS10Desc')}
              </p>
              <p className="opacity-90 font-medium">
                {t('travelS10SubDesc')}
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-6">
              {t('travelS10Flow').split('→').map((step, idx, arr) => (
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
                💡 {t('travelS10Note')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 11: From Exploration to Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              {t('travelS11Title')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t('travelS11Desc')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                {t('travelS11SubTitle1')}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {t('travelS11Flow1').split('→').map((step, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {step.trim()}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                {t('travelS11SubTitle2')}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {t('travelS11Flow2').split('→').map((step, idx) => (
                  <span key={idx} className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                    {step.trim()}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-5 border-l-4 border-blue-500 max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed italic">
              💡 {t('travelS11Note')}
            </p>
          </div>
        </motion.section>

        {/* Section 12: Value to Biteo */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <TrendingUp className="w-12 h-12 mx-auto mb-3 text-blue-400" />
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                {t('travelS12Title')}
              </h2>
              <p className="opacity-90 max-w-3xl mx-auto">
                {t('travelS12Desc')}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/20">
              <p className="text-center mb-2 opacity-80">
                {t('travelS12Question')}
              </p>
              <p className="text-center text-xl font-bold text-yellow-300">
                "{t('travelS12Quote')}"
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 mb-6 max-w-3xl mx-auto">
              <p className="text-center font-medium leading-relaxed text-sm">
                {t('travelS12Journey')}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 max-w-3xl mx-auto">
              {qualityItems.map((key, idx) => (
                <div key={key} className="bg-white/10 rounded-xl p-3 text-center">
                  <p className="text-sm font-medium">{t(key)}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 text-center">
              <p className="leading-relaxed font-medium">
                💎 {t('travelS12Note')}
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
            { value: '63', labelKey: 'provinces', icon: MapPin },
            { value: '500+', labelKey: 'destinations', icon: Compass },
            { value: '10K+', labelKey: 'accommodations', icon: Bed },
            { value: '5M+', labelKey: 'appUsers', icon: Users },
          ].map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-card text-center"
            >
              <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
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
          className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 lg:p-12 text-center text-white"
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            {t('readyTravel')}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t('readyTravelDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2">
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

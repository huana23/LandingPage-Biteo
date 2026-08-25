'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  MapPin,
  Search,
  Sparkles,
  Compass,
  Store,
  Hotel,
  Heart,
  Users,
  Globe,
  Video,
  Star,
  Bookmark,
  ShoppingBag,
  ChefHat,
  Coffee,
  Utensils,
  Camera,
  Play,
  Navigation,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Target,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import PageHeader from '@/components/PageHeader'

export default function KhamPhaDiaPhuongPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      <PageHeader accentClass="bg-teal-600" textClass="text-teal-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            {t('localHero')}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {t('localPageTitle')}
          </h1>
          <p className="text-lg text-teal-500 font-medium mb-8">
            {t('localPageHeroTag')}
          </p>

          {/* Intro Card */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              {t('localPageIntroTitle')}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('localPageIntroDesc')}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('localPageIntroText1')}
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('localPageIntroText2')}
            </p>
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-2xl p-5 my-6 text-center font-semibold">
              {t('localPageSlogan')}
            </div>
            <p className="text-gray-900 font-semibold mb-4">
              {t('localPageIntroText3')}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t('localPageIntroText4')}
            </p>
          </div>
        </motion.section>

        {/* Section 1: Find Locations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                <Search className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
                  {t('localS1Title')}
                </h2>
                <p className="text-gray-500 text-sm">{t('localS1Subtitle')}</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('localS1Intro')}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { key: 'localS1Item1', icon: Utensils },
                { key: 'localS1Item2', icon: Coffee },
                { key: 'localS1Item3', icon: Play },
                { key: 'localS1Item4', icon: Camera },
                { key: 'localS1Item5', icon: Store },
                { key: 'localS1Item6', icon: ShoppingBag },
                { key: 'localS1Item7', icon: Hotel },
                { key: 'localS1Item8', icon: Star },
              ].map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4 text-center hover:shadow-md transition-shadow"
                >
                  <item.icon className="w-5 h-5 text-teal-600 mx-auto mb-2" />
                  <p className="text-gray-700 font-medium text-sm">
                    {t(item.key)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 2: Explore by Region */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl lg:text-2xl font-bold">
                  {t('localS2Title')}
                </h2>
                <p className="text-teal-100 text-sm">{t('localS2Subtitle')}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Da Nang */}
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Navigation className="w-5 h-5" />
                  {t('localS2Example1City')}
                </h3>
                <div className="space-y-2">
                  {['localS2Example1Item1', 'localS2Example1Item2', 'localS2Example1Item3', 'localS2Example1Item4', 'localS2Example1Item5'].map((item, i) => (
                    <p key={item} className="text-teal-100 text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      {t(item).replace(/^→\s*/, '')}
                    </p>
                  ))}
                </div>
              </div>

              {/* Lam Dong */}
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  {t('localS2Example2City')}
                </h3>
                <div className="space-y-2">
                  {['localS2Example2Item1', 'localS2Example2Item2', 'localS2Example2Item3', 'localS2Example2Item4', 'localS2Example2Item5'].map((item, i) => (
                    <p key={item} className="text-teal-100 text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      {t(item).replace(/^→\s*/, '')}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-teal-100 leading-relaxed">
              {t('localS2Desc')}
            </p>
          </div>
        </motion.section>

        {/* Section 3: Find Services */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                <Store className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
                  {t('localS3Title')}
                </h2>
                <p className="text-gray-500 text-sm">{t('localS3Subtitle')}</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('localS3Intro')}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { key: 'localS3Item1', icon: Utensils },
                { key: 'localS3Item2', icon: Hotel },
                { key: 'localS3Item3', icon: Sparkles },
                { key: 'localS3Item4', icon: ShoppingBag },
                { key: 'localS3Item5', icon: Play },
                { key: 'localS3Item6', icon: Globe },
              ].map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-4 flex items-center gap-3 hover:shadow-md transition-shadow"
                >
                  <item.icon className="w-5 h-5 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">
                    {t(item.key)}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 4: Local Cuisine */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl lg:text-2xl font-bold">
                  {t('localS4Title')}
                </h2>
                <p className="text-orange-100 text-sm">{t('localS4Subtitle')}</p>
              </div>
            </div>

            <p className="text-orange-100 mb-6 leading-relaxed">
              {t('localS4Intro')}
            </p>

            <div className="flex flex-wrap items-center gap-2 justify-center">
              {['localS4Item1', 'localS4Item2', 'localS4Item3', 'localS4Item4', 'localS4Item5'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium"
                >
                  {t(item)}
                </motion.div>
              ))}
            </div>

            <div className="mt-6 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-orange-100 text-sm leading-relaxed">
                {t('localS4Desc')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 5: Culture & Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
                  {t('localS5Title')}
                </h2>
                <p className="text-gray-500 text-sm">{t('localS5Subtitle')}</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('localS5Intro')}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['localS5Item1', 'localS5Item2', 'localS5Item3', 'localS5Item4', 'localS5Item5', 'localS5Item6', 'localS5Item7', 'localS5Item8', 'localS5Item9'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 hover:shadow-md transition-shadow"
                >
                  <span className="text-gray-700 font-medium">
                    {t(item)}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('localS5Desc')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 6: Videos & Real Content */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Video className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl lg:text-2xl font-bold">
                  {t('localS6Title')}
                </h2>
                <p className="text-purple-200 text-sm">{t('localS6Subtitle')}</p>
              </div>
            </div>

            <p className="text-purple-100 mb-6 leading-relaxed">
              {t('localS6Intro')}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['localS6Item1', 'localS6Item2', 'localS6Item3', 'localS6Item4', 'localS6Item5', 'localS6Item6'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors"
                >
                  <span className="text-sm font-medium">
                    {t(item)}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-purple-100 text-sm leading-relaxed">
                {t('localS6Desc')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 7: Community Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
                  {t('localS7Title')}
                </h2>
                <p className="text-gray-500 text-sm">{t('localS7Subtitle')}</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('localS7Intro')}
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-6">
              {['localS7Item1', 'localS7Item2', 'localS7Item3', 'localS7Item4', 'localS7Item5', 'localS7Item6'].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full px-4 py-2 text-sm font-medium"
                >
                  {t(item)}
                </motion.span>
              ))}
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('localS7Desc')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 8: Save Favorites */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl lg:text-2xl font-bold">
                  {t('localS8Title')}
                </h2>
                <p className="text-pink-200 text-sm">{t('localS8Subtitle')}</p>
              </div>
            </div>

            <p className="text-pink-100 mb-6 leading-relaxed">
              {t('localS8Intro')}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {['localS8Item1', 'localS8Item2', 'localS8Item3', 'localS8Item4', 'localS8Item5'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors"
                >
                  <Bookmark className="w-5 h-5 mx-auto mb-2" />
                  <span className="text-sm font-medium">
                    {t(item)}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-pink-100 text-sm leading-relaxed">
                {t('localS8Desc')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 9: Connect Community */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
                  {t('localS9Title')}
                </h2>
                <p className="text-gray-500 text-sm">{t('localS9Subtitle')}</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('localS9Intro')}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {['localS9Item1', 'localS9Item2', 'localS9Item3', 'localS9Item4', 'localS9Item5', 'localS9Item6', 'localS9Item7', 'localS9Item8', 'localS9Item9', 'localS9Item10'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-3 text-center hover:shadow-md transition-shadow"
                >
                  <span className="text-gray-700 font-medium text-sm">
                    {t(item)}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                {t('localS9Desc')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 10 & 11: Two columns */}
        <section className="mb-16 grid md:grid-cols-2 gap-6">
          {/* Section 10: Shopping */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl shadow-xl p-6 sm:p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">{t('localS10Title')}</h2>
                <p className="text-purple-200 text-sm">{t('localS10Subtitle')}</p>
              </div>
            </div>

            <p className="text-purple-100 mb-4 text-sm leading-relaxed">
              {t('localS10Intro')}
            </p>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              {['localS10Item1', 'localS10Item2', 'localS10Item3', 'localS10Item4'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium">
                    {t(item)}
                  </div>
                  {index < 3 && <ArrowRight className="w-3 h-3 text-white/60" />}
                </motion.div>
              ))}
            </div>

            <p className="text-purple-100 text-xs leading-relaxed">
              {t('localS10Desc')}
            </p>
          </motion.div>

          {/* Section 11: Order */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">{t('localS11Title')}</h2>
                <p className="text-gray-500 text-sm">{t('localS11Subtitle')}</p>
              </div>
            </div>

            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {t('localS11Intro')}
            </p>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              {['localS11Item1', 'localS11Item2', 'localS11Item3', 'localS11Item4', 'localS11Item5'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-2"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full px-3 py-1.5 text-xs font-medium">
                    {t(item)}
                  </div>
                  {index < 4 && <ArrowRight className="w-3 h-3 text-gray-400" />}
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4">
              <p className="text-gray-600 text-xs leading-relaxed">
                {t('localS11Desc')}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Section 12: Complete Journey */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Navigation className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl lg:text-2xl font-bold">
                  {t('localS12Title')}
                </h2>
                <p className="text-teal-200 text-sm">{t('localS12Subtitle')}</p>
              </div>
            </div>

            <p className="text-teal-100 mb-6 leading-relaxed">
              {t('localS12Intro')}
            </p>

            <div className="flex flex-wrap items-center gap-3 justify-center mb-6">
              {['localS12Item1', 'localS12Item2', 'localS12Item3', 'localS12Item4', 'localS12Item5', 'localS12Item6', 'localS12Item7'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 text-sm font-medium">
                    {t(item)}
                  </div>
                  {index < 6 && <ArrowRight className="w-4 h-4 text-white/60" />}
                </motion.div>
              ))}
            </div>

            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-teal-100 text-sm leading-relaxed">
                {t('localS12Desc')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 13: Spread Local Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
                  {t('localS13Title')}
                </h2>
                <p className="text-gray-500 text-sm">{t('localS13Subtitle')}</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('localS13Intro')}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {['localS13Item1', 'localS13Item2', 'localS13Item3', 'localS13Item4', 'localS13Item5'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-4 text-center hover:shadow-md transition-shadow"
                >
                  <span className="text-gray-700 font-medium text-sm">
                    {t(item)}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Connection Chain */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                {t('localS13ChainTitle')}
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {['localS14User', 'localS14Place', 'localS14Business', 'localS14Product', 'localS14Service', 'localS14Community'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="bg-white rounded-full px-4 py-2 shadow-sm">
                      <span className="text-gray-700 font-medium text-sm">
                        {t(item)}
                      </span>
                    </div>
                    {index < 5 && <span className="text-amber-400 font-bold">↔</span>}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 14: Value for Biteo */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl lg:text-2xl font-bold">
                  {t('localS14Title')}
                </h2>
                <p className="text-green-200 text-sm">{t('localS14Subtitle')}</p>
              </div>
            </div>

            <p className="text-green-100 mb-6 leading-relaxed">
              {t('localS14Intro')}
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
              <p className="text-green-100 mb-4 text-center font-medium">
                "{t('localS14Question')}"
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {['localS14Item1', 'localS14Item2', 'localS14Item3', 'localS14Item4', 'localS14Item5', 'localS14Item6', 'localS14Item7'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                      {t(item)}
                    </div>
                    {index < 6 && <span className="text-white/60">→</span>}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-green-100 text-sm leading-relaxed">
                {t('localS14Desc')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {t('localCtaTitle')}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('localCtaDesc')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-shadow"
              >
                <MapPin className="w-5 h-5" />
                {t('localCtaButton1')}
              </Link>
              <Link
                href="/am-thuc"
                className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                <Utensils className="w-5 h-5" />
                {t('localCtaButton2')}
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

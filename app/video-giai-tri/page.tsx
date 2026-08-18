'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Play, Users, Video, Star, Smartphone, TrendingUp, Share2, Heart, MessageCircle, Eye, Zap, Globe, PlayCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const features = [
  {
    icon: Video,
    titleKey: 'diverseContent',
    descKey: 'diverseContentDesc',
  },
  {
    icon: Users,
    titleKey: 'creativeCommunity',
    descKey: 'creativeCommunityDesc',
  },
  {
    icon: Smartphone,
    titleKey: 'smoothExperience',
    descKey: 'smoothExperienceDesc',
  },
  {
    icon: TrendingUp,
    titleKey: 'personalizedContent',
    descKey: 'personalizedContentDesc',
  },
  {
    icon: Share2,
    titleKey: 'easyShare',
    descKey: 'easyShareDesc',
  },
  {
    icon: Heart,
    titleKey: 'unlimitedFavorites',
    descKey: 'unlimitedFavoritesDesc',
  },
]

const popularCategories = [
  { nameKey: 'catShortFilm', icon: '🎬' },
  { nameKey: 'catVideoFood', icon: '🍜' },
  { nameKey: 'catVideoTravel', icon: '✈️' },
  { nameKey: 'catMusic', icon: '🎵' },
  { nameKey: 'catComedy', icon: '😄' },
  { nameKey: 'catEducation', icon: '📚' },
]

const trendingCreators = [
  { nameKey: 'creatorVietnam', followers: '2.5M', avatar: '🌍' },
  { nameKey: 'creatorFood', followers: '1.8M', avatar: '🍲' },
  { nameKey: 'creatorComedy', followers: '3.2M', avatar: '😆' },
  { nameKey: 'creatorTravelKid', followers: '1.2M', avatar: '🎒' },
]

export default function VideoPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-bold text-green-600">Biteo</span>
            </Link>
            <Link
              href="/#ecosystem"
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">{t('back')}</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Play className="w-4 h-4" />
            {t('videoHero')}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('videoTitle')}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {t('videoDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-xl hover:from-red-600 hover:to-pink-600 transition-all shadow-lg shadow-red-500/30 flex items-center gap-2">
              <PlayCircle className="w-5 h-5" />
              {t('downloadApp')}
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all border border-gray-200 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              {t('tryNow')}
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: '50M+', labelKey: 'views', icon: Eye },
            { value: '1.2M', labelKey: 'videos', icon: Video },
            { value: '500K+', labelKey: 'creators', icon: Users },
            { value: '10M+', labelKey: 'appUsers', icon: Globe },
          ].map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-card text-center"
            >
              <stat.icon className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{t(stat.labelKey)}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('videoFeatures')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t(feature.titleKey)}</h3>
                <p className="text-gray-600 text-sm">{t(feature.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('popularCategories')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularCategories.map((category, index) => (
              <motion.div
                key={category.nameKey}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all text-center cursor-pointer"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{t(category.nameKey)}</h3>
                <p className="text-xs text-gray-500">{t('videos')}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trending Creators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('trendingCreators')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingCreators.map((creator, index) => (
              <motion.div
                key={creator.nameKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  {creator.avatar}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{t(creator.nameKey)}</h3>
                <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
                  <Users className="w-4 h-4" />
                  {creator.followers} {t('followers')}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl p-8 lg:p-12 text-center text-white"
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            {t('exploreVideo')}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t('exploreVideoDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              {t('downloadIOS')}
            </button>
            <button className="px-8 py-4 bg-white/20 text-white font-bold rounded-xl hover:bg-white/30 transition-all flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              {t('downloadAndroid')}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

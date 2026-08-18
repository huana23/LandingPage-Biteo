'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Utensils, MapPin, Star, Clock, Users, Award, Smartphone, Heart, Search, ChefHat, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const features = [
  {
    icon: Search,
    titleKey: 'smartSearch3',
    descKey: 'smartSearch3Desc',
  },
  {
    icon: MapPin,
    titleKey: 'accurateLocation',
    descKey: 'accurateLocationDesc',
  },
  {
    icon: Star,
    titleKey: 'realRatings',
    descKey: 'realRatingsDesc',
  },
  {
    icon: Clock,
    titleKey: 'bookOnline',
    descKey: 'bookOnlineDesc',
  },
  {
    icon: Utensils,
    titleKey: 'transparentInfo',
    descKey: 'transparentInfoDesc',
  },
  {
    icon: Heart,
    titleKey: 'saveFavorites3',
    descKey: 'saveFavorites3Desc',
  },
]

const popularCuisines = [
  { nameKey: 'catVietnam', icon: '🍜' },
  { nameKey: 'catJapan', icon: '🍣' },
  { nameKey: 'catKorea', icon: '�' },
  { nameKey: 'catItaly', icon: '🍕' },
  { nameKey: 'catChina', icon: '🥡' },
  { nameKey: 'catThailand', icon: '🌶️' },
]

const topRestaurants = [
  { nameKey: 'restBepMe', cuisineKey: 'catVietnam', rating: 4.8, reviews: '2.3K', icon: '🍲', featured: true },
  { nameKey: 'restSushi', cuisineKey: 'catJapan', rating: 4.7, reviews: '1.8K', icon: '🍣', featured: true },
  { nameKey: 'restKBBQ', cuisineKey: 'catKorea', rating: 4.6, reviews: '1.5K', icon: '🥩', featured: false },
  { nameKey: 'restPizza', cuisineKey: 'catItaly', rating: 4.5, reviews: '980', icon: '🍕', featured: false },
]

export default function AmThucPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
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
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Utensils className="w-4 h-4" />
            {t('culinaryHero')}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('culinaryTitle')}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {t('culinaryDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/30 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              {t('findFoodNear')}
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all border border-gray-200 flex items-center gap-2">
              <Search className="w-5 h-5" />
              {t('specificSearch')}
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
            { value: '50,000+', labelKey: 'restaurants', icon: Utensils },
            { value: '5M+', labelKey: 'reviews', icon: Star },
            { value: '2M+', labelKey: 'appUsers', icon: Users },
            { value: '63', labelKey: 'provinces', icon: MapPin },
          ].map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-card text-center"
            >
              <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
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
            {t('culinaryFeatures')}
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
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t(feature.titleKey)}</h3>
                <p className="text-gray-600 text-sm">{t(feature.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Popular Cuisines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('cuisines')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularCuisines.map((cuisine, index) => (
              <motion.div
                key={cuisine.nameKey}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all text-center cursor-pointer"
              >
                <div className="text-4xl mb-3">{cuisine.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{t(cuisine.nameKey)}</h3>
                <p className="text-xs text-gray-500">{t('restaurants')}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Top Restaurants */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              {t('restaurants2')}
            </h2>
            <Link href="#" className="text-orange-500 font-medium hover:text-orange-600 flex items-center gap-1">
              {t('seeAll')} <TrendingUp className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topRestaurants.map((restaurant, index) => (
              <motion.div
                key={restaurant.nameKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all ${restaurant.featured ? 'ring-2 ring-orange-200' : ''}`}
              >
                {restaurant.featured && (
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-medium px-3 py-1">
                    <Award className="w-3 h-3 inline mr-1" /> {t('featured')}
                  </div>
                )}
                <div className="p-5">
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-3xl mb-4">
                    {restaurant.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{t(restaurant.nameKey)}</h3>
                  <p className="text-sm text-gray-500 mb-3">{t(restaurant.cuisineKey)}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span className="font-semibold text-gray-900">{restaurant.rating}</span>
                      <span className="text-gray-400 text-sm">({restaurant.reviews})</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
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
        </motion.div>
      </div>
    </div>
  )
}

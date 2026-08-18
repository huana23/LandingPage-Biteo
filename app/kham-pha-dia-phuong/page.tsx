'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, MapPin, Compass, Camera, Star, Smartphone, Heart, Search, Navigation, Building, Globe } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const features = [
  {
    icon: Compass,
    titleKey: 'exploreAround',
    descKey: 'exploreAroundDesc',
  },
  {
    icon: MapPin,
    titleKey: 'diverseLocations',
    descKey: 'diverseLocationsDesc',
  },
  {
    icon: Search,
    titleKey: 'smartSearch',
    descKey: 'smartSearchDesc',
  },
  {
    icon: Camera,
    titleKey: 'realReview',
    descKey: 'realReviewDesc',
  },
  {
    icon: Navigation,
    titleKey: 'accurateDirections',
    descKey: 'accurateDirectionsDesc',
  },
  {
    icon: Heart,
    titleKey: 'saveFavorites',
    descKey: 'saveFavoritesDesc',
  },
]

const categories = [
  { nameKey: 'catCafe', icon: '☕' },
  { nameKey: 'catPark', icon: '🌳' },
  { nameKey: 'catRestaurant', icon: '🍽️' },
  { nameKey: 'catSpa', icon: '💆' },
  { nameKey: 'catGym', icon: '💪' },
  { nameKey: 'catShop', icon: '🛍️' },
]

const popularPlaces = [
  { name: 'The Coffee House', typeKey: 'catCafe', rating: 4.7, reviews: '5.2K', icon: '☕', distance: '500m' },
  { name: 'Công viên Tao Đàn', typeKey: 'catPark', rating: 4.6, reviews: '3.8K', icon: '🌳', distance: '1.2km' },
  { name: 'Yoga House', typeKey: 'catGym', rating: 4.8, reviews: '2.1K', icon: '🧘', distance: '800m' },
  { name: 'Lush Spa', typeKey: 'catSpa', rating: 4.9, reviews: '1.5K', icon: '💆', distance: '1.5km' },
]

const localHighlights = [
  { name: 'Hồ Con Rùa', descKey: 'turtleLake', icon: '�' },
  { name: 'Chợ Bến Thành', descKey: 'benThanhMarket', icon: '🏪' },
  { name: 'Phố đi bộ Nguyễn Huệ', descKey: 'nguyenHueStreet', icon: '🌃' },
  { name: 'Bảo tàng TP.HCM', descKey: 'hcmcMuseum', icon: '🏛️' },
]

export default function KhamPhaDiaPhuongPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
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
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Compass className="w-4 h-4" />
            {t('discoverHero')}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('discoverTitle')}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {t('discoverDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all shadow-lg shadow-teal-500/30 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              {t('discoverNow')}
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all border border-gray-200 flex items-center gap-2">
              <Navigation className="w-5 h-5" />
              {t('findNearMe')}
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
            { value: '100,000+', labelKey: 'locations', icon: MapPin },
            { value: '5M+', labelKey: 'reviews', icon: Camera },
            { value: '50+', labelKey: 'categories2', icon: Building },
            { value: '63', labelKey: 'provinces', icon: Globe },
          ].map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-card text-center"
            >
              <stat.icon className="w-8 h-8 text-teal-500 mx-auto mb-3" />
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
            {t('discoverFeatures')}
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
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-teal-500" />
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
            {t('categoryTitle')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
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
                <p className="text-xs text-gray-500">{t('locations')}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Popular Places */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              {t('placesNearYou')}
            </h2>
            <Link href="#" className="text-teal-500 font-medium hover:text-teal-600 flex items-center gap-1">
              {t('seeAll')} <MapPin className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularPlaces.map((place, index) => (
              <motion.div
                key={place.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="bg-gradient-to-br from-teal-100 to-cyan-100 p-6">
                  <div className="text-5xl flex items-center justify-center h-24">
                    {place.icon}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
                      {t(place.typeKey)}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {place.distance}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{place.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="font-semibold text-gray-900">{place.rating}</span>
                    <span className="text-gray-400 text-sm">({place.reviews})</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Local Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              {t('highlights')}
            </h2>
            <Link href="#" className="text-teal-500 font-medium hover:text-teal-600 flex items-center gap-1">
              {t('seeAll')} <Compass className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all text-center cursor-pointer"
              >
                <div className="text-5xl mb-4">{highlight.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{highlight.name}</h3>
                <p className="text-sm text-gray-500">{t(highlight.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl p-8 lg:p-12 text-center text-white"
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            {t('discoverWorld')}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t('discoverWorldDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-teal-600 font-bold rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2">
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

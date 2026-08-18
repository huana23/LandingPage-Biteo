'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Plane, MapPin, Hotel, Calendar, Camera, Star, Smartphone, Heart, Search, Navigation, Ticket, Globe } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const features = [
  {
    icon: Search,
    titleKey: 'smartSearch2',
    descKey: 'smartSearch2Desc',
  },
  {
    icon: MapPin,
    titleKey: 'diverseDestinations',
    descKey: 'diverseDestinationsDesc',
  },
  {
    icon: Hotel,
    titleKey: 'bookHotel',
    descKey: 'bookHotelDesc',
  },
  {
    icon: Ticket,
    titleKey: 'bookTicket',
    descKey: 'bookTicketDesc',
  },
  {
    icon: Camera,
    titleKey: 'travelGuide',
    descKey: 'travelGuideDesc',
  },
  {
    icon: Heart,
    titleKey: 'saveFavorites2',
    descKey: 'saveFavorites2Desc',
  },
]

const popularDestinations = [
  { nameKey: 'destDanang', icon: '🌊', typeKey: 'destDanangType', rating: 4.8 },
  { nameKey: 'destPhuquoc', icon: '🏝️', typeKey: 'destPhuquocType', rating: 4.7 },
  { nameKey: 'destSapa', icon: '🏔️', typeKey: 'destSapaType', rating: 4.6 },
  { nameKey: 'destHoian', icon: '🏮', typeKey: 'destHoianType', rating: 4.9 },
  { nameKey: 'destNhatrang', icon: '🌴', typeKey: 'destNhatrangType', rating: 4.7 },
  { nameKey: 'destHagiang', icon: '🌾', typeKey: 'destHagiangType', rating: 4.8 },
]

const travelTypes = [
  { nameKey: 'beachTravel', icon: '🏖️' },
  { nameKey: 'mountainTravel', icon: '⛰️' },
  { nameKey: 'culturalTravel', icon: '🏛️' },
  { nameKey: 'adventure', icon: '🧗' },
  { nameKey: 'familyTravel', icon: '👨‍👩‍👧‍👦' },
  { nameKey: 'foodTour', icon: '🍜' },
]

export default function DuLichPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
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
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Plane className="w-4 h-4" />
            {t('travelHero')}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('travelTitle')}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {t('travelDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              {t('exploreNow')}
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all border border-gray-200 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {t('planTrip')}
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
            { value: '3,500+', labelKey: 'destinations', icon: MapPin },
            { value: '10,000+', labelKey: 'hotels', icon: Hotel },
            { value: '5M+', labelKey: 'travelers', icon: Star },
            { value: '63', labelKey: 'provinces', icon: Globe },
          ].map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-card text-center"
            >
              <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
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
            {t('travelFeatures')}
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
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t(feature.titleKey)}</h3>
                <p className="text-gray-600 text-sm">{t(feature.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Popular Destinations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('popularDestinations')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularDestinations.map((destination, index) => (
              <motion.div
                key={destination.nameKey}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all text-center cursor-pointer"
              >
                <div className="text-4xl mb-3">{destination.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{t(destination.nameKey)}</h3>
                <p className="text-xs text-gray-500 mb-2">{t(destination.typeKey)}</p>
                <div className="flex items-center justify-center gap-1">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <span className="text-xs font-medium">{destination.rating}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Travel Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('travelTypes')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {travelTypes.map((type, index) => (
              <motion.div
                key={type.nameKey}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all text-center cursor-pointer"
              >
                <div className="text-4xl mb-3">{type.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{t(type.nameKey)}</h3>
                <p className="text-xs text-gray-500">{t('destinations')}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 lg:p-12 text-center text-white"
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            {t('nextTrip')}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t('nextTripDesc')}
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
        </motion.div>
      </div>
    </div>
  )
}

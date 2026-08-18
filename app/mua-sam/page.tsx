'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ShoppingBag, Package, Truck, Star, Heart, MapPin, Shield, Smartphone, Gift, TrendingUp, Tag, Store, Award } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const features = [
  {
    icon: Package,
    titleKey: 'localSpecialties',
    descKey: 'localSpecialtiesDesc',
  },
  {
    icon: Truck,
    titleKey: 'fastDelivery3',
    descKey: 'fastDelivery3Desc',
  },
  {
    icon: Star,
    titleKey: 'qualityProducts',
    descKey: 'qualityProductsDesc',
  },
  {
    icon: Shield,
    titleKey: 'securePayment',
    descKey: 'securePaymentDesc',
  },
  {
    icon: Heart,
    titleKey: 'favorites',
    descKey: 'favoritesDesc',
  },
  {
    icon: Gift,
    titleKey: 'greatOffers',
    descKey: 'greatOffersDesc',
  },
]

const categories = [
  { nameKey: 'catNorth', icon: '🍜' },
  { nameKey: 'catCentral', icon: '🌶️' },
  { nameKey: 'catSouth', icon: '�' },
  { nameKey: 'catOCOP', icon: '🏆' },
  { nameKey: 'catAgri', icon: '🌾' },
  { nameKey: 'catCraft', icon: '🎨' },
]

const featuredProducts = [
  { nameKey: 'shopBanhtrang', price: '45,000đ', rating: 4.9, reviews: '2.1K', location: 'Tây Ninh', icon: '🥞' },
  { nameKey: 'shopCoffee', price: '180,000đ', rating: 4.8, reviews: '1.8K', location: 'Đà Lạt', icon: '☕' },
  { nameKey: 'shopBanhda', price: '120,000đ', rating: 4.7, reviews: '1.2K', location: 'Hải Phòng', icon: '🍲' },
  { nameKey: 'shopNuocmam', price: '250,000đ', rating: 4.9, reviews: '980', location: 'Phú Quốc', icon: '🐟' },
]

const topSellers = [
  { nameKey: 'shopVungdat', products: 450, rating: 4.8, icon: '🏪' },
  { nameKey: 'shopOCOPStore', products: 320, rating: 4.9, icon: '🏆' },
  { nameKey: 'shopNongsan', products: 280, rating: 4.7, icon: '🌱' },
  { nameKey: 'shopBaMien', products: 250, rating: 4.8, icon: '🛒' },
]

export default function MuaSamPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
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
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ShoppingBag className="w-4 h-4" />
            {t('shoppingHero')}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('shoppingTitle')}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {t('shoppingDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-violet-600 transition-all shadow-lg shadow-purple-500/30 flex items-center gap-2">
              <Store className="w-5 h-5" />
              {t('shopNow')}
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all border border-gray-200 flex items-center gap-2">
              <Tag className="w-5 h-5" />
              {t('viewOffers')}
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
            { value: '50,000+', labelKey: 'shopProducts', icon: Package },
            { value: '2,000+', labelKey: 'sellers', icon: Store },
            { value: '1M+', labelKey: 'orders', icon: Truck },
            { value: '63', labelKey: 'provinces', icon: MapPin },
          ].map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-card text-center"
            >
              <stat.icon className="w-8 h-8 text-purple-500 mx-auto mb-3" />
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
            {t('shoppingFeatures')}
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
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-purple-500" />
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
            {t('productCategories2')}
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
                <p className="text-xs text-gray-500">{t('shopProducts')}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              {t('featuredProducts')}
            </h2>
            <Link href="#" className="text-purple-500 font-medium hover:text-purple-600 flex items-center gap-1">
              {t('seeAll')} <TrendingUp className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.nameKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-6">
                  <div className="text-5xl flex items-center justify-center h-32">
                    {product.icon}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{t(product.nameKey)}</h3>
                  <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {product.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-600">{product.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Top Sellers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              {t('topSellers')}
            </h2>
            <Link href="#" className="text-purple-500 font-medium hover:text-purple-600 flex items-center gap-1">
              {t('seeAll')} <Award className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topSellers.map((seller, index) => (
              <motion.div
                key={seller.nameKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  {seller.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{t(seller.nameKey)}</h3>
                <p className="text-sm text-gray-500 mb-3">{seller.products} {t('shopProducts')}</p>
                <div className="flex items-center justify-center gap-1">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="font-semibold">{seller.rating}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-500 to-violet-500 rounded-3xl p-8 lg:p-12 text-center text-white"
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            {t('shopNow2')}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t('shopNow2Desc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2">
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

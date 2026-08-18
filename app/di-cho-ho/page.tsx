'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ShoppingCart, Clock, MapPin, Truck, Shield, Smartphone, Star, Heart, Search, Calendar, CheckCircle, RefreshCw } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const features = [
  {
    icon: Search,
    titleKey: 'easySelect',
    descKey: 'easySelectDesc',
  },
  {
    icon: Clock,
    titleKey: 'fastDelivery2',
    descKey: 'fastDelivery2Desc',
  },
  {
    icon: Truck,
    titleKey: 'freeDelivery',
    descKey: 'freeDeliveryDesc',
  },
  {
    icon: Shield,
    titleKey: 'freshFood',
    descKey: 'freshFoodDesc',
  },
  {
    icon: RefreshCw,
    titleKey: 'easyReturn',
    descKey: 'easyReturnDesc',
  },
  {
    icon: Heart,
    titleKey: 'repeatBuy',
    descKey: 'repeatBuyDesc',
  },
]

const categories = [
  { nameKey: 'catVegetables', icon: '🥬' },
  { nameKey: 'catMeat', icon: '🥩' },
  { nameKey: 'catSeafood', icon: '🦐' },
  { nameKey: 'catDairy', icon: '🥛' },
  { nameKey: 'catSpices', icon: '�' },
  { nameKey: 'catDry', icon: '🍚' },
]

const howItWorks = [
  {
    step: 1,
    titleKey: 'selectProducts',
    descKey: 'selectProductsDesc',
    icon: Search,
  },
  {
    step: 2,
    titleKey: 'confirmOrder',
    descKey: 'confirmOrderDesc',
    icon: CheckCircle,
  },
  {
    step: 3,
    titleKey: 'receiveOrder',
    descKey: 'receiveOrderDesc',
    icon: Truck,
  },
]

const popularItems = [
  { name: 'Rau muống tươi', price: '15,000đ', unit: 'bó', icon: '🥬' },
  { name: 'Thịt ba chỉ', price: '85,000đ', unit: '500g', icon: '🥩' },
  { name: 'Cá basa tươi', price: '65,000đ', unit: '500g', icon: '🐟' },
  { name: 'Trứng gà ta', price: '45,000đ', unit: '10 quả', icon: '🥚' },
]

export default function DiChoHoPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
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
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ShoppingCart className="w-4 h-4" />
            {t('groceryHero')}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('groceryTitle')}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {t('groceryDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg shadow-green-600/30 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              {t('orderNow')}
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all border border-gray-200 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {t('scheduleDelivery')}
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
            { value: '1,500+', labelKey: 'products', icon: ShoppingCart },
            { value: '500K+', labelKey: 'orders', icon: Truck },
            { value: '50+', labelKey: 'areas', icon: MapPin },
            { value: '2-4h', labelKey: 'fastDelivery', icon: Clock },
          ].map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-card text-center"
            >
              <stat.icon className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{t(stat.labelKey)}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('howItWorks')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.1 }}
                className="relative text-center"
              >
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-green-200" />
                )}
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t(item.titleKey)}</h3>
                <p className="text-gray-600 text-sm">{t(item.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('groceryFeatures')}
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
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-green-600" />
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
            {t('productCategories')}
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
                <p className="text-xs text-gray-500">{t('products')}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Popular Items */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              {t('popularProducts')}
            </h2>
            <Link href="#" className="text-green-600 font-medium hover:text-green-700 flex items-center gap-1">
              {t('seeAll')} <Search className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6">
                  <div className="text-5xl flex items-center justify-center h-24">
                    {item.icon}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-green-600">{item.price}</span>
                      <span className="text-sm text-gray-400 ml-1">/{item.unit}</span>
                    </div>
                    <button className="w-10 h-10 bg-green-600 text-white rounded-xl flex items-center justify-center hover:bg-green-700 transition-colors">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
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
          className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 lg:p-12 text-center text-white"
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            {t('startShopping')}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t('startShoppingDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2">
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

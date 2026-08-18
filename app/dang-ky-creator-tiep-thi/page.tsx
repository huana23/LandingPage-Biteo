'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Phone, Mail, Instagram, Youtube, Facebook, CheckCircle, ArrowLeft, TrendingUp, Gift, Users, Zap } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function CreatorRegister() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    nickname: '',
    platform: '',
    accountUrl: '',
    followerCount: '',
    contentType: '',
    motivation: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const benefits = [
    { icon: TrendingUp, titleKey: 'creatorIncome', descKey: 'creatorIncomeDesc' },
    { icon: Users, titleKey: 'creatorFlexible', descKey: 'creatorFlexibleDesc' },
    { icon: Zap, titleKey: 'creatorSupport', descKey: 'creatorSupportDesc' },
    { icon: Gift, titleKey: 'creatorTools', descKey: 'creatorToolsDesc' },
    { icon: Users, titleKey: 'creatorCommunity', descKey: 'creatorCommunityDesc' },
  ]

  const platformOptions = [
    { id: 'instagram', label: 'Instagram', icon: '📸' },
    { id: 'tiktok', label: 'TikTok', icon: '🎵' },
    { id: 'youtube', label: 'YouTube', icon: '📺' },
    { id: 'facebook', label: 'Facebook', icon: '👥' },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center"
        >
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {t('creatorSuccessTitle')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('creatorSuccessDesc')}
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('home')}
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
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
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">{t('back')}</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Creator Program
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {t('creatorHeroTitle')}
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('creatorHeroDesc')}
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{t(benefit.titleKey)}</h3>
                    <p className="text-sm text-gray-600">{t(benefit.descKey)}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">1K+</div>
                  <div className="text-sm text-purple-100">{t('creators')}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">10M+</div>
                  <div className="text-sm text-purple-100">{t('creatorViews')}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-sm text-purple-100">{t('creatorOrders')}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t('creatorRegisterTitle')}
              </h2>
              <p className="text-gray-600 mb-8">
                {t('creatorRegisterDesc')}
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('fullName')} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder={t('fullName')}
                      className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-gray-50/50 hover:bg-gray-50"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('phone')} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="0xxx xxx xxx"
                      className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-gray-50/50 hover:bg-gray-50"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('emailAddress')} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@example.com"
                      className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-gray-50/50 hover:bg-gray-50"
                    />
                  </div>
                </div>

                {/* Nickname */}
                <div>
                  <label htmlFor="nickname" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('creatorNickname')} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="nickname"
                      name="nickname"
                      value={formData.nickname}
                      onChange={handleChange}
                      required
                      placeholder={t('creatorNicknamePlaceholder')}
                      className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-gray-50/50 hover:bg-gray-50"
                    />
                  </div>
                </div>

                {/* Platform */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    {t('creatorPlatform')} <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {platformOptions.map((platform) => (
                      <label
                        key={platform.id}
                        className={`flex flex-col items-center gap-1 p-3 border-2 rounded-xl cursor-pointer transition-all ${
                          formData.platform === platform.id
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-gray-200 hover:border-purple-200 hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="platform"
                          value={platform.id}
                          checked={formData.platform === platform.id}
                          onChange={handleChange}
                          required
                          className="sr-only"
                        />
                        <span className="text-xl">{platform.icon}</span>
                        <span className={`text-xs font-medium ${
                          formData.platform === platform.id ? 'text-purple-600' : 'text-gray-600'
                        }`}>
                          {platform.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Account URL */}
                <div>
                  <label htmlFor="accountUrl" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('creatorAccountUrl')} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Instagram className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="url"
                      id="accountUrl"
                      name="accountUrl"
                      value={formData.accountUrl}
                      onChange={handleChange}
                      required
                      placeholder="https://..."
                      className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-gray-50/50 hover:bg-gray-50"
                    />
                  </div>
                </div>

                {/* Follower Count */}
                <div>
                  <label htmlFor="followerCount" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('creatorFollowers')} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    <select
                      id="followerCount"
                      name="followerCount"
                      value={formData.followerCount}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-12 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all bg-gray-50/50 hover:bg-gray-100 appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 12px center',
                        backgroundSize: '18px',
                      }}
                    >
                      <option value="">{t('creatorFollowersPlaceholder')}</option>
                      <option value="1k-10k">1,000 - 10,000</option>
                      <option value="10k-50k">10,000 - 50,000</option>
                      <option value="50k-100k">50,000 - 100,000</option>
                      <option value="100k-500k">100,000 - 500,000</option>
                      <option value="500k+">{t('creatorOver500k')}</option>
                    </select>
                  </div>
                </div>

                {/* Content Type */}
                <div>
                  <label htmlFor="contentType" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('creatorContentType')} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Zap className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    <select
                      id="contentType"
                      name="contentType"
                      value={formData.contentType}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-12 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all bg-gray-50/50 hover:bg-gray-100 appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 12px center',
                        backgroundSize: '18px',
                      }}
                    >
                      <option value="">{t('creatorContentTypePlaceholder')}</option>
                      <option value="food">{t('creatorFoodReview')}</option>
                      <option value="lifestyle">{t('creatorLifestyle')}</option>
                      <option value="shopping">{t('creatorShopping')}</option>
                      <option value="cooking">{t('creatorCooking')}</option>
                      <option value="vlog">{t('creatorVlog')}</option>
                      <option value="other">{t('creatorOther')}</option>
                    </select>
                  </div>
                </div>

                {/* Motivation */}
                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('creatorMotivation')}
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    rows={4}
                    placeholder={t('creatorMotivationPlaceholder')}
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-gray-50/50 hover:bg-gray-50 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      {t('loading')}
                    </>
                  ) : (
                    t('ctvRegisterNow')
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  {t('creatorTermsAgree')}
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  User,
  Phone,
  Mail,
  Instagram,
  CheckCircle,
  ArrowLeft,
  TrendingUp,
  Gift,
  Users,
  Zap,
  AlertCircle,
} from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import PageHeader from '@/components/PageHeader'

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
  const [errorMessage, setErrorMessage] = useState('')

  /**
   * =========================================
   * BENEFITS
   * =========================================
   */
  const benefits = [
    {
      icon: TrendingUp,
      titleKey: 'creatorIncome',
      descKey: 'creatorIncomeDesc',
    },
    {
      icon: Users,
      titleKey: 'creatorFlexible',
      descKey: 'creatorFlexibleDesc',
    },
    {
      icon: Zap,
      titleKey: 'creatorSupport',
      descKey: 'creatorSupportDesc',
    },
    {
      icon: Gift,
      titleKey: 'creatorTools',
      descKey: 'creatorToolsDesc',
    },
    {
      icon: Users,
      titleKey: 'creatorCommunity',
      descKey: 'creatorCommunityDesc',
    },
  ]

  /**
   * =========================================
   * PLATFORM
   * =========================================
   */
  const platformOptions = [
    {
      id: 'instagram',
      label: 'Instagram',
      icon: '📸',
    },
    {
      id: 'tiktok',
      label: 'TikTok',
      icon: '🎵',
    },
    {
      id: 'youtube',
      label: 'YouTube',
      icon: '📺',
    },
    {
      id: 'facebook',
      label: 'Facebook',
      icon: '👥',
    },
  ]

  /**
   * =========================================
   * HANDLE CHANGE
   * =========================================
   */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Xóa lỗi khi người dùng nhập lại
    if (errorMessage) {
      setErrorMessage('')
    }
  }

  /**
   * =========================================
   * HANDLE SUBMIT
   * =========================================
   */
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    // Không cho submit nhiều lần
    if (isSubmitting) return

    setIsSubmitting(true)
    setErrorMessage('')

    try {
      /**
       * =========================================
       * EMAILJS ENV
       * =========================================
       *
       * Creator dùng CHUNG template với
       * đăng ký cửa hàng.
       *
       * .env.local:
       *
       * NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
       * NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
       * NEXT_PUBLIC_EMAILJS_DANG_KY_CUA_HANG=...
       */
      const serviceId =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID

      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_DANG_KY_CUA_HANG

      const publicKey =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      /**
       * =========================================
       * CHECK ENV
       * =========================================
       */
      if (!serviceId) {
        throw new Error(
          'Thiếu NEXT_PUBLIC_EMAILJS_SERVICE_ID'
        )
      }

      if (!templateId) {
        throw new Error(
          'Thiếu NEXT_PUBLIC_EMAILJS_DANG_KY_CUA_HANG'
        )
      }

      if (!publicKey) {
        throw new Error(
          'Thiếu NEXT_PUBLIC_EMAILJS_PUBLIC_KEY'
        )
      }

      /**
       * =========================================
       * PLATFORM LABEL
       * =========================================
       */
      const platformLabels: Record<string, string> = {
        instagram: 'Instagram',
        tiktok: 'TikTok',
        youtube: 'YouTube',
        facebook: 'Facebook',
      }

      const platformText =
        platformLabels[formData.platform] ||
        'Không cung cấp'

      /**
       * =========================================
       * FOLLOWER LABEL
       * =========================================
       */
      const followerLabels: Record<string, string> = {
        '1k-10k': '1,000 - 10,000',
        '10k-50k': '10,000 - 50,000',
        '50k-100k': '50,000 - 100,000',
        '100k-500k': '100,000 - 500,000',
        '500k+': 'Trên 500,000',
      }

      const followerText =
        followerLabels[
          formData.followerCount
        ] || 'Không cung cấp'

      /**
       * =========================================
       * CONTENT TYPE
       * =========================================
       *
       * Dùng t() để email nhận được
       * nội dung dễ đọc theo ngôn ngữ hiện tại.
       */
      const contentTypeLabels: Record<
        string,
        string
      > = {
        food: t('creatorFoodReview'),
        lifestyle: t('creatorLifestyle'),
        shopping: t('creatorShopping'),
        cooking: t('creatorCooking'),
        vlog: t('creatorVlog'),
        other: t('creatorOther'),
      }

      const contentTypeText =
        contentTypeLabels[
          formData.contentType
        ] || 'Không cung cấp'

      /**
       * =========================================
       * SUBMITTED TIME
       * =========================================
       */
      const submittedAt =
        new Date().toLocaleString('vi-VN', {
          timeZone: 'Asia/Ho_Chi_Minh',
        })

      /**
       * =========================================
       * EMAILJS TEMPLATE PARAMS
       * =========================================
       *
       * QUAN TRỌNG:
       *
       * Template cửa hàng và Creator dùng chung.
       *
       * Các field chung:
       * - registrationType
       * - title
       * - subject
       * - ownerName
       * - phone
       * - email
       * - address
       * - storeType
       * - businessLicense
       * - motivation
       * - submittedAt
       *
       * Các field riêng Creator:
       * - fullName
       * - nickname
       * - platform
       * - accountUrl
       * - followerCount
       * - contentType
       */
      const templateParams = {
        /**
         * =========================================
         * TYPE
         * =========================================
         *
         * Template có thể dùng:
         *
         * {{registrationType}}
         *
         * để biết đây là Creator hay Store.
         */
        registrationType:
          'Đăng ký Creator',

        /**
         * =========================================
         * TITLE
         * =========================================
         */
        title:
          'Đăng ký Creator',

        /**
         * =========================================
         * SUBJECT
         * =========================================
         */
        subject:
          'BITEo - ĐĂNG KÝ CREATOR',

        /**
         * =========================================
         * CREATOR INFO
         * =========================================
         */
        fullName:
          formData.fullName.trim(),

        nickname:
          formData.nickname.trim(),

        phone:
          formData.phone.trim(),

        email:
          formData.email.trim(),

        /**
         * =========================================
         * SOCIAL INFO
         * =========================================
         */
        platform:
          platformText,

        accountUrl:
          formData.accountUrl.trim(),

        followerCount:
          followerText,

        contentType:
          contentTypeText,

        /**
         * =========================================
         * MOTIVATION
         * =========================================
         */
        motivation:
          formData.motivation.trim() ||
          'Không cung cấp',

        /**
         * =========================================
         * COMMON STORE FIELDS
         * =========================================
         *
         * Vì template dùng chung với Store,
         * gửi các field này để template không
         * bị thiếu biến.
         */
        storeName:
          'Không áp dụng - Creator',

        ownerName:
          formData.fullName.trim(),

        address:
          'Không áp dụng - Creator',

        storeType:
          'Không áp dụng - Creator',

        businessLicense:
          'Không áp dụng - Creator',

        /**
         * =========================================
         * SUBMITTED TIME
         * =========================================
         */
        submittedAt,
      }

      /**
       * =========================================
       * DEBUG
       * =========================================
       */
      console.log(
        'EmailJS Creator Template Params:',
        templateParams
      )

      /**
       * =========================================
       * SEND EMAIL
       * =========================================
       */
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      /**
       * =========================================
       * SUCCESS
       * =========================================
       */
      console.log(
        'EmailJS CREATOR SUCCESS:',
        response.status,
        response.text
      )

      setIsSubmitted(true)

      /**
       * =========================================
       * RESET FORM
       * =========================================
       */
      setFormData({
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
    } catch (error) {
      /**
       * =========================================
       * ERROR
       * =========================================
       */
      console.error(
        'EmailJS CREATOR ERROR:',
        error
      )

      setErrorMessage(
        'Gửi đăng ký Creator thất bại. Vui lòng kiểm tra kết nối mạng hoặc thử lại sau.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  /**
   * =========================================
   * SUCCESS SCREEN
   * =========================================
   */
  if (isSubmitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 px-4 py-12">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-xl"
        >
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">
            <CheckCircle className="h-10 w-10 text-purple-600" />
          </div>

          {/* Title */}
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            {t('creatorSuccessTitle')}
          </h2>

          {/* Description */}
          <p className="mb-6 text-gray-600">
            {t('creatorSuccessDesc')}
          </p>

          {/* Home */}
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 py-3.5 font-semibold text-white transition-colors hover:bg-purple-700"
          >
            <ArrowLeft className="h-4 w-4" />

            {t('home')}
          </Link>
        </motion.div>
      </div>
    )
  }

  /**
   * =========================================
   * MAIN
   * =========================================
   */
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">

      {/* =========================================
          HEADER
      ========================================= */}

      <PageHeader backHref="/" />

      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="grid items-start gap-12 lg:grid-cols-2">

          {/* =========================================
              LEFT SIDE
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="lg:sticky lg:top-24"
          >

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
              <Zap className="h-4 w-4" />

              Creator Program
            </div>

            {/* Title */}
            <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              {t('creatorHeroTitle')}
            </h1>

            {/* Description */}
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              {t('creatorHeroDesc')}
            </p>

            {/* Benefits */}
            <div className="space-y-6">

              {benefits.map(
                (benefit, index) => (
                  <motion.div
                    key={benefit.titleKey}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    className="flex gap-4"
                  >

                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <benefit.icon className="h-6 w-6 text-purple-600" />
                    </div>

                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">
                        {t(
                          benefit.titleKey
                        )}
                      </h3>

                      <p className="text-sm text-gray-600">
                        {t(
                          benefit.descKey
                        )}
                      </p>
                    </div>

                  </motion.div>
                )
              )}

            </div>

            {/* Stats */}
            <div className="mt-10 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">

              <div className="grid grid-cols-3 gap-4 text-center">

                <div>
                  <div className="text-2xl font-bold">
                    1K+
                  </div>

                  <div className="text-sm text-purple-100">
                    {t('creators')}
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-bold">
                    10M+
                  </div>

                  <div className="text-sm text-purple-100">
                    {t('creatorViews')}
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-bold">
                    50K+
                  </div>

                  <div className="text-sm text-purple-100">
                    {t('creatorOrders')}
                  </div>
                </div>

              </div>
            </div>

          </motion.div>

          {/* =========================================
              RIGHT SIDE - FORM
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >

            <div className="rounded-3xl bg-white p-8 shadow-xl lg:p-10">

              {/* Title */}
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                {t('creatorRegisterTitle')}
              </h2>

              {/* Description */}
              <p className="mb-8 text-gray-600">
                {t('creatorRegisterDesc')}
              </p>

              {/* Error */}
              {errorMessage && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />

                  <span>
                    {errorMessage}
                  </span>
                </motion.div>
              )}

              {/* =========================================
                  FORM
              ========================================= */}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* =========================================
                    FULL NAME
                ========================================= */}

                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    {t('fullName')}{' '}

                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <div className="relative">

                    <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={
                        formData.fullName
                      }
                      onChange={
                        handleChange
                      }
                      required
                      placeholder={t(
                        'fullName'
                      )}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-12 pr-4 transition-all hover:bg-gray-50 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                    />

                  </div>
                </div>

                {/* =========================================
                    PHONE
                ========================================= */}

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    {t('phone')}{' '}

                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <div className="relative">

                    <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={
                        formData.phone
                      }
                      onChange={
                        handleChange
                      }
                      required
                      autoComplete="tel"
                      placeholder="0xxx xxx xxx"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-12 pr-4 transition-all hover:bg-gray-50 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                    />

                  </div>
                </div>

                {/* =========================================
                    EMAIL
                ========================================= */}

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    {t('emailAddress')}{' '}

                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <div className="relative">

                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={
                        formData.email
                      }
                      onChange={
                        handleChange
                      }
                      required
                      autoComplete="email"
                      placeholder="email@example.com"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-12 pr-4 transition-all hover:bg-gray-50 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                    />

                  </div>
                </div>

                {/* =========================================
                    NICKNAME
                ========================================= */}

                <div>
                  <label
                    htmlFor="nickname"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    {t('creatorNickname')}{' '}

                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <div className="relative">

                    <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <input
                      type="text"
                      id="nickname"
                      name="nickname"
                      value={
                        formData.nickname
                      }
                      onChange={
                        handleChange
                      }
                      required
                      placeholder={t(
                        'creatorNicknamePlaceholder'
                      )}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-12 pr-4 transition-all hover:bg-gray-50 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                    />

                  </div>
                </div>

                {/* =========================================
                    PLATFORM
                ========================================= */}

                <div>
                  <label className="mb-3 block text-sm font-medium text-gray-700">
                    {t('creatorPlatform')}{' '}

                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">

                    {platformOptions.map(
                      (platform) => (
                        <label
                          key={platform.id}
                          className={`flex cursor-pointer flex-col items-center gap-1 rounded-xl border-2 p-3 transition-all ${
                            formData.platform ===
                            platform.id
                              ? 'border-purple-500 bg-purple-50'
                              : 'border-gray-200 hover:border-purple-200 hover:bg-gray-50'
                          }`}
                        >

                          <input
                            type="radio"
                            name="platform"
                            value={
                              platform.id
                            }
                            checked={
                              formData.platform ===
                              platform.id
                            }
                            onChange={
                              handleChange
                            }
                            required
                            className="sr-only"
                          />

                          <span className="text-xl">
                            {
                              platform.icon
                            }
                          </span>

                          <span
                            className={`text-xs font-medium ${
                              formData.platform ===
                              platform.id
                                ? 'text-purple-600'
                                : 'text-gray-600'
                            }`}
                          >
                            {
                              platform.label
                            }
                          </span>

                        </label>
                      )
                    )}

                  </div>
                </div>

                {/* =========================================
                    ACCOUNT URL
                ========================================= */}

                <div>
                  <label
                    htmlFor="accountUrl"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    {t('creatorAccountUrl')}{' '}

                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <div className="relative">

                    <Instagram className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <input
                      type="url"
                      id="accountUrl"
                      name="accountUrl"
                      value={
                        formData.accountUrl
                      }
                      onChange={
                        handleChange
                      }
                      required
                      placeholder="https://..."
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-12 pr-4 transition-all hover:bg-gray-50 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                    />

                  </div>
                </div>

                {/* =========================================
                    FOLLOWERS
                ========================================= */}

                <div>
                  <label
                    htmlFor="followerCount"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    {t('creatorFollowers')}{' '}

                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <div className="relative">

                    <Users className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <select
                      id="followerCount"
                      name="followerCount"
                      value={
                        formData.followerCount
                      }
                      onChange={
                        handleChange
                      }
                      required
                      className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-12 pr-12 transition-all hover:bg-gray-100 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                      style={{
                        backgroundImage:
                          `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                        backgroundRepeat:
                          'no-repeat',
                        backgroundPosition:
                          'right 12px center',
                        backgroundSize:
                          '18px',
                      }}
                    >

                      <option value="">
                        {t(
                          'creatorFollowersPlaceholder'
                        )}
                      </option>

                      <option value="1k-10k">
                        1,000 - 10,000
                      </option>

                      <option value="10k-50k">
                        10,000 - 50,000
                      </option>

                      <option value="50k-100k">
                        50,000 - 100,000
                      </option>

                      <option value="100k-500k">
                        100,000 - 500,000
                      </option>

                      <option value="500k+">
                        {t(
                          'creatorOver500k'
                        )}
                      </option>

                    </select>

                  </div>
                </div>

                {/* =========================================
                    CONTENT TYPE
                ========================================= */}

                <div>
                  <label
                    htmlFor="contentType"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    {t('creatorContentType')}{' '}

                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <div className="relative">

                    <Zap className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <select
                      id="contentType"
                      name="contentType"
                      value={
                        formData.contentType
                      }
                      onChange={
                        handleChange
                      }
                      required
                      className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-12 pr-12 transition-all hover:bg-gray-100 focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
                      style={{
                        backgroundImage:
                          `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                        backgroundRepeat:
                          'no-repeat',
                        backgroundPosition:
                          'right 12px center',
                        backgroundSize:
                          '18px',
                      }}
                    >

                      <option value="">
                        {t(
                          'creatorContentTypePlaceholder'
                        )}
                      </option>

                      <option value="food">
                        {t(
                          'creatorFoodReview'
                        )}
                      </option>

                      <option value="lifestyle">
                        {t(
                          'creatorLifestyle'
                        )}
                      </option>

                      <option value="shopping">
                        {t(
                          'creatorShopping'
                        )}
                      </option>

                      <option value="cooking">
                        {t(
                          'creatorCooking'
                        )}
                      </option>

                      <option value="vlog">
                        {t(
                          'creatorVlog'
                        )}
                      </option>

                      <option value="other">
                        {t(
                          'creatorOther'
                        )}
                      </option>

                    </select>

                  </div>
                </div>

                {/* =========================================
                    MOTIVATION
                ========================================= */}

                <div>
                  <label
                    htmlFor="motivation"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    {t(
                      'creatorMotivation'
                    )}
                  </label>

                  <textarea
                    id="motivation"
                    name="motivation"
                    value={
                      formData.motivation
                    }
                    onChange={
                      handleChange
                    }
                    rows={4}
                    placeholder={t(
                      'creatorMotivationPlaceholder'
                    )}
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 transition-all hover:bg-gray-50 focus:border-transparent focus:ring-2 focus:ring-purple-500"
                  />

                </div>

                {/* =========================================
                    SUBMIT
                ========================================= */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 py-4 font-semibold text-white shadow-lg shadow-purple-500/30 transition-all hover:from-purple-600 hover:to-pink-600 disabled:cursor-not-allowed disabled:opacity-70"
                >

                  {isSubmitting ? (
                    <>
                      <svg
                        className="h-5 w-5 animate-spin"
                        viewBox="0 0 24 24"
                      >

                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />

                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />

                      </svg>

                      {t('loading')}
                    </>
                  ) : (
                    t('ctvRegisterNow')
                  )}

                </button>

                {/* Terms */}
                <p className="text-center text-xs text-gray-500">
                  {t(
                    'creatorTermsAgree'
                  )}
                </p>

              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
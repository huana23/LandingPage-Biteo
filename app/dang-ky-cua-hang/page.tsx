'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  User,
  Phone,
  Mail,
  MapPin,
  Store,
  Briefcase,
  CheckCircle,
  ArrowLeft,
  DollarSign,
  TrendingUp,
  Headphones,
  Star,
  AlertCircle,
} from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function StoreRegister() {
  const { t } = useLanguage()

  // =========================================
  // FORM DATA
  // =========================================

  const [formData, setFormData] = useState({
    storeName: '',
    ownerName: '',
    phone: '',
    email: '',
    address: '',
    storeType: '',
    businessLicense: '',
    motivation: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // =========================================
  // BENEFITS
  // =========================================

  const benefits = [
    {
      icon: TrendingUp,
      titleKey: 'storeIncreaseRevenue',
      descKey: 'storeIncreaseRevenueDesc',
    },
    {
      icon: Star,
      titleKey: 'storeModernTools',
      descKey: 'storeModernToolsDesc',
    },
    {
      icon: DollarSign,
      titleKey: 'storeMarketing',
      descKey: 'storeMarketingDesc',
    },
    {
      icon: Headphones,
      titleKey: 'storeReports',
      descKey: 'storeReportsDesc',
    },
  ]

  // =========================================
  // STORE TYPES
  // =========================================

  const storeTypeOptions = [
    {
      value: 'supermarket',
      labelKey: 'storeSupermarket',
    },
    {
      value: 'grocery',
      labelKey: 'storeGrocery',
    },
    {
      value: 'organic',
      labelKey: 'storeOrganic',
    },
    {
      value: 'specialty',
      labelKey: 'storeSpecialty',
    },
    {
      value: 'restaurant',
      labelKey: 'storeRestaurant',
    },
    {
      value: 'other',
      labelKey: 'storeOther',
    },
  ]

  // =========================================
  // HANDLE CHANGE
  // =========================================

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user edits form
    if (errorMessage) {
      setErrorMessage('')
    }
  }

  // =========================================
  // HANDLE SUBMIT
  // =========================================

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    if (isSubmitting) {
      return
    }

    setIsSubmitting(true)
    setErrorMessage('')

    try {
      // =========================================
      // EMAILJS ENV
      // =========================================

      const serviceId =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID

      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_DANG_KY_CUA_HANG

      const publicKey =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      // =========================================
      // CHECK ENV
      // =========================================

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

      // =========================================
      // STORE TYPE TEXT
      // =========================================

      const storeTypeLabels: Record<string, string> = {
        supermarket: t('storeSupermarket'),
        grocery: t('storeGrocery'),
        organic: t('storeOrganic'),
        specialty: t('storeSpecialty'),
        restaurant: t('storeRestaurant'),
        other: t('storeOther'),
      }

      const storeTypeText =
        storeTypeLabels[formData.storeType] ||
        'Không cung cấp'

      // =========================================
      // SUBMITTED TIME
      // =========================================

      const submittedAt = new Date().toLocaleString(
        'vi-VN',
        {
          timeZone: 'Asia/Ho_Chi_Minh',
        }
      )

      // =========================================
      // EMAILJS TEMPLATE PARAMS
      // =========================================

      const templateParams = {
        // Registration information
        registrationType: 'Đăng ký cửa hàng',

        title: 'Đăng ký cửa hàng',

        subject: 'BITEo - ĐĂNG KÝ CỬA HÀNG',

        // Store information
        storeName: formData.storeName.trim(),

        ownerName: formData.ownerName.trim(),

        phone: formData.phone.trim(),

        email:
          formData.email.trim() ||
          'Không cung cấp',

        address: formData.address.trim(),

        storeType: storeTypeText,

        businessLicense:
          formData.businessLicense.trim() ||
          'Không cung cấp',

        motivation:
          formData.motivation.trim() ||
          'Không cung cấp',

        // Time
        submittedAt,
      }

      // =========================================
      // DEBUG
      // =========================================

      console.log(
        'EmailJS Store Template Params:',
        templateParams
      )

      // =========================================
      // SEND EMAIL
      // =========================================

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      console.log(
        'EmailJS STORE SUCCESS:',
        response.status,
        response.text
      )

      // =========================================
      // SUCCESS
      // =========================================

      setIsSubmitted(true)

      // Reset form
      setFormData({
        storeName: '',
        ownerName: '',
        phone: '',
        email: '',
        address: '',
        storeType: '',
        businessLicense: '',
        motivation: '',
      })
    } catch (error) {
      console.error(
        'EmailJS STORE ERROR:',
        error
      )

      setErrorMessage(
        'Gửi đăng ký cửa hàng thất bại. Vui lòng kiểm tra kết nối mạng hoặc thử lại sau.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  // =========================================
  // SUCCESS SCREEN
  // =========================================

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4 py-12">
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
          {/* Success icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
            <CheckCircle className="h-10 w-10 text-orange-600" />
          </div>

          {/* Title */}
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            {t('storeSuccessTitle')}
          </h2>

          {/* Description */}
          <p className="mb-6 text-gray-600">
            {t('storeSuccessDesc')}
          </p>

          {/* Home button */}
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 py-3.5 font-semibold text-white transition-colors hover:bg-orange-700"
          >
            <ArrowLeft className="h-4 w-4" />

            {t('home')}
          </Link>
        </motion.div>
      </div>
    )
  }

  // =========================================
  // MAIN
  // =========================================

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">

      {/* =========================================
          HEADER
      ========================================= */}

      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600">
                <span className="text-lg font-bold text-white">
                  B
                </span>
              </div>

              <span className="text-2xl font-bold text-green-600">
                Biteo
              </span>
            </Link>

            {/* Back */}
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-600 transition-colors hover:text-green-600"
            >
              <ArrowLeft className="h-4 w-4" />

              <span className="text-sm font-medium">
                {t('back')}
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* =========================================
          CONTENT
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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
              <Store className="h-4 w-4" />

              {t('businessPartner')}
            </div>

            {/* Hero title */}
            <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              {t('storeHeroTitle')}
            </h1>

            {/* Hero description */}
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              {t('storeHeroDesc')}
            </p>

            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map(
                (benefit, index) => {
                  const Icon = benefit.icon

                  return (
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
                        <Icon className="h-6 w-6 text-orange-600" />
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
                }
              )}
            </div>

            {/* Stats */}
            <div className="mt-10 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 p-6 text-white">
              <div className="grid grid-cols-3 gap-4 text-center">

                <div>
                  <div className="text-2xl font-bold">
                    2K+
                  </div>

                  <div className="text-sm text-orange-100">
                    {t('storeBusinesses')}
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-bold">
                    1M+
                  </div>

                  <div className="text-sm text-orange-100">
                    {t('storeCustomers')}
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-bold">
                    99%
                  </div>

                  <div className="text-sm text-orange-100">
                    Uptime
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* =========================================
              RIGHT SIDE
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

              {/* Form title */}
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                {t('storeRegisterTitle')}
              </h2>

              <p className="mb-8 text-gray-600">
                {t('storeRegisterDesc')}
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

                {/* STORE NAME */}
                <div>
                  <label
                    htmlFor="storeName"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    {t('storeName')}

                    <span className="text-red-500">
                      {' '}*
                    </span>
                  </label>

                  <div className="relative">
                    <Store className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <input
                      type="text"
                      id="storeName"
                      name="storeName"
                      value={
                        formData.storeName
                      }
                      onChange={
                        handleChange
                      }
                      required
                      autoComplete="organization"
                      placeholder={t(
                        'storeNamePlaceholder'
                      )}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-12 pr-4 transition-all hover:bg-gray-50 focus:border-transparent focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* OWNER NAME */}
                <div>
                  <label
                    htmlFor="ownerName"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    {t('storeOwnerName')}

                    <span className="text-red-500">
                      {' '}*
                    </span>
                  </label>

                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <input
                      type="text"
                      id="ownerName"
                      name="ownerName"
                      value={
                        formData.ownerName
                      }
                      onChange={
                        handleChange
                      }
                      required
                      autoComplete="name"
                      placeholder={t(
                        'storeOwnerNamePlaceholder'
                      )}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-12 pr-4 transition-all hover:bg-gray-50 focus:border-transparent focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* PHONE */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    {t('storePhone')}

                    <span className="text-red-500">
                      {' '}*
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
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-12 pr-4 transition-all hover:bg-gray-50 focus:border-transparent focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    {t('storeEmail')}

                    <span className="ml-2 text-xs font-normal text-gray-400">
                      (không bắt buộc)
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
                      autoComplete="email"
                      placeholder="email@example.com"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-12 pr-4 transition-all hover:bg-gray-50 focus:border-transparent focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* ADDRESS */}
                <div>
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    {t('storeAddress')}

                    <span className="text-red-500">
                      {' '}*
                    </span>
                  </label>

                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={
                        formData.address
                      }
                      onChange={
                        handleChange
                      }
                      required
                      autoComplete="street-address"
                      placeholder={t(
                        'storeAddressPlaceholder'
                      )}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-12 pr-4 transition-all hover:bg-gray-50 focus:border-transparent focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* STORE TYPE */}
                <div>
                  <label
                    htmlFor="storeType"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    {t('storeType')}

                    <span className="text-red-500">
                      {' '}*
                    </span>
                  </label>

                  <div className="relative">
                    <Briefcase className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <select
                      id="storeType"
                      name="storeType"
                      value={
                        formData.storeType
                      }
                      onChange={
                        handleChange
                      }
                      required
                      className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-12 pr-12 transition-all hover:bg-gray-100 focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
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
                          'storeTypePlaceholder'
                        )}
                      </option>

                      {storeTypeOptions.map(
                        (option) => (
                          <option
                            key={option.value}
                            value={option.value}
                          >
                            {t(
                              option.labelKey
                            )}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>

                {/* TAX CODE */}
                <div>
                  <label
                    htmlFor="businessLicense"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    {t('storeTaxCode')}

                    <span className="ml-2 text-xs font-normal text-gray-400">
                      (không bắt buộc)
                    </span>
                  </label>

                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <input
                      type="text"
                      id="businessLicense"
                      name="businessLicense"
                      value={
                        formData.businessLicense
                      }
                      onChange={
                        handleChange
                      }
                      placeholder={t(
                        'storeTaxCodePlaceholder'
                      )}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-12 pr-4 transition-all hover:bg-gray-50 focus:border-transparent focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* MOTIVATION */}
                <div>
                  <label
                    htmlFor="motivation"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    {t('storeIntro')}

                    <span className="ml-2 text-xs font-normal text-gray-400">
                      (không bắt buộc)
                    </span>
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
                      'storeIntroPlaceholder'
                    )}
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 transition-all hover:bg-gray-50 focus:border-transparent focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-4 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:from-orange-600 hover:to-amber-600 disabled:cursor-not-allowed disabled:opacity-70"
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

                      {t('storeProcessing')}
                    </>
                  ) : (
                    t('storeRegisterBtn')
                  )}
                </button>

                {/* TERMS */}
                <p className="text-center text-xs text-gray-500">
                  {t('storeTermsAgree')}
                </p>

              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
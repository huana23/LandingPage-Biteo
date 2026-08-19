'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Briefcase,
  CheckCircle,
  ArrowLeft,
  Clock,
  Shield,
  TrendingUp,
  Heart,
  AlertCircle,
} from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function ShoppingAssistantRegister() {
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    dob: '',
    experience: '',
    motivation: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  /**
   * =====================================================
   * LOẠI ĐĂNG KÝ
   * =====================================================
   *
   * Dùng chung biến "type" cho tất cả các form.
   *
   * Form CTV sẽ gửi:
   * type = "Đăng ký cộng tác viên"
   *
   * Form này sẽ gửi:
   * type = "Nhân viên đăng ký đi chợ hộ"
   *
   * Cả hai dùng chung EmailJS Template.
   */

  const type = 'Nhân viên đăng ký đi chợ hộ'

  /**
   * =====================================================
   * HANDLE CHANGE
   * =====================================================
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

    if (errorMessage) {
      setErrorMessage('')
    }
  }

  /**
   * =====================================================
   * HANDLE SUBMIT
   * =====================================================
   */

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    if (isSubmitting) return

    setIsSubmitting(true)
    setErrorMessage('')

    try {
      /**
       * =================================================
       * EMAILJS ENV
       * =================================================
       */

      const serviceId =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID

      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_DANG_KY_DI_CHO_HO

      const publicKey =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      /**
       * =================================================
       * KIỂM TRA ENV
       * =================================================
       */

      if (!serviceId) {
        throw new Error(
          'Thiếu NEXT_PUBLIC_EMAILJS_SERVICE_ID'
        )
      }

      if (!templateId) {
        throw new Error(
          'Thiếu NEXT_PUBLIC_EMAILJS_DANG_KY_DI_CHO_HO'
        )
      }

      if (!publicKey) {
        throw new Error(
          'Thiếu NEXT_PUBLIC_EMAILJS_PUBLIC_KEY'
        )
      }

      /**
       * =================================================
       * EXPERIENCE
       * =================================================
       */

      const experienceLabels: Record<string, string> = {
        none: t('noExperience'),
        under1: t('under1Year'),
        '1-3': `1 - 3 ${t('year')}`,
        '3+': t('over1Year'),
      }

      const experienceText =
        experienceLabels[formData.experience] ||
        'Không cung cấp'

      /**
       * =================================================
       * THỜI GIAN ĐĂNG KÝ
       * =================================================
       */

      const submittedAt = new Date().toLocaleString(
        'vi-VN',
        {
          timeZone: 'Asia/Ho_Chi_Minh',
        }
      )

      /**
       * =================================================
       * EMAILJS TEMPLATE PARAMS
       * =================================================
       *
       * QUAN TRỌNG:
       *
       * Hai form dùng chung một template.
       *
       * Biến phân biệt duy nhất:
       *
       * {{type}}
       *
       */

      const templateParams = {
        /**
         * ===============================================
         * LOẠI ĐĂNG KÝ
         * ===============================================
         */

        type,

        /**
         * ===============================================
         * TIÊU ĐỀ
         * ===============================================
         */

        title:
          'Đăng ký nhân viên đi chợ hộ',

        subject:
          'BITEo - ĐĂNG KÝ NHÂN VIÊN ĐI CHỢ HỘ',

        /**
         * ===============================================
         * HỌ VÀ TÊN
         * ===============================================
         */

        name:
          formData.fullName.trim() ||
          'Không cung cấp',

        fullName:
          formData.fullName.trim() ||
          'Không cung cấp',

        /**
         * ===============================================
         * SỐ ĐIỆN THOẠI
         * ===============================================
         */

        phone:
          formData.phone.trim() ||
          'Không cung cấp',

        /**
         * ===============================================
         * EMAIL
         * ===============================================
         *
         * Không bắt buộc.
         */

        email:
          formData.email.trim() ||
          'Không cung cấp',

        /**
         * ===============================================
         * ĐỊA CHỈ
         * ===============================================
         */

        address:
          formData.address.trim() ||
          'Không cung cấp',

        /**
         * ===============================================
         * NGÀY SINH
         * ===============================================
         */

        dob:
          formData.dob ||
          'Không cung cấp',

        /**
         * ===============================================
         * KINH NGHIỆM
         * ===============================================
         */

        experience:
          experienceText,

        /**
         * ===============================================
         * LÝ DO
         * ===============================================
         */

        motivation:
          formData.motivation.trim() ||
          'Không cung cấp',

        /**
         * ===============================================
         * THỜI GIAN ĐĂNG KÝ
         * ===============================================
         */

        submittedAt,
      }

      /**
       * Debug
       */

      console.log(
        'EmailJS template params:',
        templateParams
      )

      /**
       * =================================================
       * GỬI EMAIL
       * =================================================
       */

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      console.log(
        'EmailJS SUCCESS:',
        response.status,
        response.text
      )

      /**
       * =================================================
       * THÀNH CÔNG
       * =================================================
       */

      setIsSubmitted(true)

      /**
       * Reset form
       */

      setFormData({
        fullName: '',
        phone: '',
        email: '',
        address: '',
        dob: '',
        experience: '',
        motivation: '',
      })
    } catch (error) {
      console.error(
        'EmailJS ERROR:',
        error
      )

      setErrorMessage(
        'Gửi đăng ký thất bại. Vui lòng kiểm tra kết nối mạng hoặc thử lại sau.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  /**
   * =====================================================
   * SUCCESS SCREEN
   * =====================================================
   */

  if (isSubmitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-green-50 px-4 py-12">
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

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>

          {/* Title */}

          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            {t('success')}
          </h2>

          {/* Description */}

          <p className="mb-6 text-gray-600">
            {t('responseIn24h')}
          </p>

          {/* Home */}

          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 font-semibold text-white transition-colors hover:bg-green-700"
          >
            <ArrowLeft className="h-4 w-4" />

            {t('home')}
          </Link>
        </motion.div>
      </div>
    )
  }

  /**
   * =====================================================
   * MAIN
   * =====================================================
   */

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">

      {/* =================================================
          HEADER
      ================================================= */}

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

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="grid items-start gap-12 lg:grid-cols-2">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

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

            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              <Briefcase className="h-4 w-4" />

              {t('register')}
            </div>

            {/* Title */}

            <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              {t('becomeCollaborator')}
            </h1>

            {/* Description */}

            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              {t('opportunitiesDesc')}
            </p>

            {/* Benefits */}

            <div className="space-y-6">

              {[
                {
                  icon: Clock,
                  title: t('flexibleWork'),
                  description:
                    t('flexibleWorkDesc'),
                },
                {
                  icon: TrendingUp,
                  title: t('extraIncome'),
                  description:
                    t('extraIncomeDesc'),
                },
                {
                  icon: Shield,
                  title: t('safe'),
                  description:
                    t('safeDesc'),
                },
                {
                  icon: Heart,
                  title: t('support247'),
                  description:
                    t('support247Desc'),
                },
              ].map(
                (benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay:
                        index * 0.1,
                    }}
                    className="flex gap-4"
                  >

                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <benefit.icon className="h-6 w-6 text-green-600" />
                    </div>

                    <div>

                      <h3 className="mb-1 font-semibold text-gray-900">
                        {benefit.title}
                      </h3>

                      <p className="text-sm text-gray-600">
                        {benefit.description}
                      </p>

                    </div>

                  </motion.div>
                )
              )}

            </div>

            {/* Stats */}

            <div className="mt-10 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">

              <div className="grid grid-cols-3 gap-4 text-center">

                <div>
                  <div className="text-2xl font-bold">
                    5K+
                  </div>

                  <div className="text-sm text-green-100">
                    {t('collaborators')}
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-bold">
                    500K+
                  </div>

                  <div className="text-sm text-green-100">
                    {t('orders')}/month
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-bold">
                    98%
                  </div>

                  <div className="text-sm text-green-100">
                    {t('rating')}
                  </div>
                </div>

              </div>
            </div>

          </motion.div>

          {/* =================================================
              RIGHT SIDE - FORM
          ================================================= */}

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
                {t('register')}
              </h2>

              <p className="mb-8 text-gray-600">
                {t('registrationSubtitle')}
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

              {/* =================================================
                  FORM
              ================================================= */}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* =================================================
                    INPUT ẨN - TYPE
                ================================================= */}

                <input
                  type="hidden"
                  name="type"
                  value={type}
                />

                {/* =================================================
                    FULL NAME
                ================================================= */}

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
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      placeholder={t('fullName')}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-12 pr-4 transition-all hover:bg-gray-50 focus:border-transparent focus:ring-2 focus:ring-green-500"
                    />

                  </div>
                </div>

                {/* =================================================
                    PHONE
                ================================================= */}

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
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                      placeholder="0xxx xxx xxx"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-12 pr-4 transition-all hover:bg-gray-50 focus:border-transparent focus:ring-2 focus:ring-green-500"
                    />

                  </div>
                </div>

                {/* =================================================
                    EMAIL
                ================================================= */}

                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    {t('emailAddress')}

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
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      placeholder="email@example.com"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-12 pr-4 transition-all hover:bg-gray-50 focus:border-transparent focus:ring-2 focus:ring-green-500"
                    />

                  </div>
                </div>

                {/* =================================================
                    ADDRESS
                ================================================= */}

                <div>

                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    {t('address')}{' '}

                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <div className="relative">

                    <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      autoComplete="street-address"
                      placeholder={t('address')}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-12 pr-4 transition-all hover:bg-gray-50 focus:border-transparent focus:ring-2 focus:ring-green-500"
                    />

                  </div>
                </div>

                {/* =================================================
                    DATE OF BIRTH
                ================================================= */}

                <div>

                  <label
                    htmlFor="dob"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    {t('dateOfBirth')}{' '}

                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <div className="relative">

                    <Calendar className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-12 pr-4 transition-all hover:bg-gray-50 focus:border-transparent focus:ring-2 focus:ring-green-500"
                    />

                  </div>
                </div>

                {/* =================================================
                    EXPERIENCE
                ================================================= */}

                <div>

                  <label
                    htmlFor="experience"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    {t('experience')}

                    <span className="ml-2 text-xs font-normal text-gray-400">
                      (không bắt buộc)
                    </span>
                  </label>

                  <div className="relative">

                    <Briefcase className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-gray-50/50 py-3.5 pl-12 pr-12 transition-all hover:bg-gray-100 focus:border-green-500 focus:ring-2 focus:ring-green-500"
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
                        {t('experience')}
                      </option>

                      <option value="none">
                        {t('noExperience')}
                      </option>

                      <option value="under1">
                        {t('under1Year')}
                      </option>

                      <option value="1-3">
                        1 - 3 {t('year')}
                      </option>

                      <option value="3+">
                        {t('over1Year')}
                      </option>

                    </select>

                  </div>
                </div>

                {/* =================================================
                    MOTIVATION
                ================================================= */}

                <div>

                  <label
                    htmlFor="motivation"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    {t('motivation')}

                    <span className="ml-2 text-xs font-normal text-gray-400">
                      (không bắt buộc)
                    </span>
                  </label>

                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    rows={4}
                    placeholder={t(
                      'motivationPlaceholder'
                    )}
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 transition-all hover:bg-gray-50 focus:border-transparent focus:ring-2 focus:ring-green-500"
                  />

                </div>

                {/* =================================================
                    THỜI GIAN - INPUT ẨN
                ================================================= */}

                <input
                  type="hidden"
                  name="submittedAt"
                  value={new Date().toLocaleString(
                    'vi-VN',
                    {
                      timeZone:
                        'Asia/Ho_Chi_Minh',
                    }
                  )}
                />

                {/* =================================================
                    SUBMIT
                ================================================= */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 py-4 font-semibold text-white shadow-lg shadow-green-600/30 transition-all hover:from-green-700 hover:to-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
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
                    t('submit')
                  )}

                </button>

                {/* Terms */}

                <p className="text-center text-xs text-gray-500">
                  {t('agreeTermsLabel')}
                </p>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
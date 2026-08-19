'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  User,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowLeft,
  Clock,
  Shield,
  Wallet,
  Star,
  Zap,
  TrendingUp,
  Users,
  AlertCircle,
} from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

export default function CTVRegister() {
  const { t } = useLanguage()

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    motivation: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  /*
   * ========================================
   * EMAILJS
   * ========================================
   *
   * .env.local
   *
   * NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_22nlwdi
   *
   * NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=Fxt_rd4n5OdxznTMb
   *
   * NEXT_PUBLIC_EMAILJS_DANG_KY_DI_CHO_HO=template_2tpehvh
   *
   * ========================================
   *
   * FORM NÀY DÙNG CHUNG TEMPLATE
   * VỚI FORM ĐĂNG KÝ ĐI CHỢ HỘ.
   *
   * Biến "type" sẽ cho EmailJS biết
   * loại đăng ký là gì.
   */

  const benefits = [
    {
      icon: Wallet,
      titleKey: 'ctvUnlimitedIncome',
      descKey: 'ctvUnlimitedIncomeDesc',
    },
    {
      icon: Clock,
      titleKey: 'ctvFlexibleTime',
      descKey: 'ctvFlexibleTimeDesc',
    },
    {
      icon: Shield,
      titleKey: 'ctvNoCapital',
      descKey: 'ctvNoCapitalDesc',
    },
    {
      icon: TrendingUp,
      titleKey: 'ctvGrowth',
      descKey: 'ctvGrowthDesc',
    },
    {
      icon: Star,
      titleKey: 'ctvTraining',
      descKey: 'ctvTrainingDesc',
    },
    {
      icon: Users,
      titleKey: 'ctvCommunity',
      descKey: 'ctvCommunityDesc',
    },
  ]

  /*
   * ========================================
   * HANDLE CHANGE
   * ========================================
   */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
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

  /*
   * ========================================
   * HANDLE SUBMIT
   * ========================================
   */

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    // Không cho gửi nhiều lần
    if (isSubmitting) {
      return
    }

    setIsSubmitting(true)
    setErrorMessage('')

    try {
      /*
       * ========================================
       * LẤY EMAILJS CONFIG TỪ ENV
       * ========================================
       */

      const serviceId =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID

      const publicKey =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      /*
       * DÙNG CHUNG TEMPLATE VỚI FORM ĐI CHỢ HỘ
       */

      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_DANG_KY_DI_CHO_HO

      /*
       * Kiểm tra ENV
       */

      if (
        !serviceId ||
        !publicKey ||
        !templateId
      ) {
        throw new Error(
          'EmailJS chưa được cấu hình. Vui lòng kiểm tra file .env.local'
        )
      }

      /*
       * ========================================
       * THỜI GIAN ĐĂNG KÝ
       * ========================================
       */

      const submittedAt =
        new Date().toLocaleString(
          'vi-VN',
          {
            timeZone:
              'Asia/Ho_Chi_Minh',
          }
        )

      /*
       * ========================================
       * LOẠI ĐĂNG KÝ
       * ========================================
       *
       * QUAN TRỌNG:
       *
       * Form đi chợ hộ cũng dùng biến "type"
       * nhưng giá trị khác.
       *
       * Form này:
       *
       * type = Đăng ký cộng tác viên
       *
       * EmailJS Template:
       *
       * {{type}}
       */

      const type =
        'Đăng ký cộng tác viên'

      /*
       * ========================================
       * LẤY DỮ LIỆU FORM
       * ========================================
       */

      const fullName =
        formData.fullName.trim() ||
        'Không cung cấp'

      const phone =
        formData.phone.trim() ||
        'Không cung cấp'

      /*
       * EMAIL KHÔNG BẮT BUỘC
       */

      const email =
        formData.email.trim() ||
        'Không cung cấp'

      const address =
        formData.address.trim() ||
        'Không cung cấp'

      const motivation =
        formData.motivation.trim() ||
        'Không cung cấp'

      /*
       * ========================================
       * TEMPLATE PARAMS
       * ========================================
       *
       * DÙNG CHUNG TEMPLATE VỚI
       * FORM ĐĂNG KÝ ĐI CHỢ HỘ.
       *
       * CTV không có ngày sinh và kinh nghiệm
       * nên gửi "Không cung cấp".
       */

      const templateParams = {
        /*
         * Loại đăng ký
         */
        type,

        /*
         * Có thể dùng nếu template của bạn
         * đang có {{title}}
         */
        title:
          'Đăng ký cộng tác viên',

        /*
         * Có thể dùng nếu template
         * đang có {{subject}}
         */
        subject:
          'BITEo - ĐĂNG KÝ CỘNG TÁC VIÊN',

        /*
         * Họ tên
         */
        name: fullName,

        fullName,

        /*
         * Số điện thoại
         */
        phone,

        /*
         * Email
         *
         * Không bắt buộc
         */
        email,

        /*
         * Địa chỉ
         */
        address,

        /*
         * CTV không có ngày sinh
         */
        dob:
          'Không cung cấp',

        /*
         * CTV không có kinh nghiệm
         */
        experience:
          'Không cung cấp',

        /*
         * Lý do
         */
        motivation,

        /*
         * Thời gian đăng ký
         */
        submittedAt,
      }

      /*
       * ========================================
       * DEBUG
       * ========================================
       */

      console.log(
        '========================================'
      )

      console.log(
        'EMAILJS CTV REGISTER'
      )

      console.log(
        'Template:',
        templateId
      )

      console.log(
        'Template params:',
        templateParams
      )

      console.log(
        '========================================'
      )

      /*
       * ========================================
       * GỬI EMAIL
       * ========================================
       */

      const response =
        await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          publicKey
        )

      /*
       * ========================================
       * EMAIL GỬI THÀNH CÔNG
       * ========================================
       */

      console.log(
        'EmailJS SUCCESS:',
        response.status,
        response.text
      )

      /*
       * Hiển thị màn hình thành công
       */

      setIsSubmitted(true)

      /*
       * Reset form
       */

      setFormData({
        fullName: '',
        phone: '',
        email: '',
        address: '',
        motivation: '',
      })
    } catch (error) {
      /*
       * ========================================
       * EMAIL GỬI THẤT BẠI
       * ========================================
       */

      console.error(
        'EmailJS ERROR:',
        error
      )

      setErrorMessage(
        'Không thể gửi đăng ký lúc này. Vui lòng kiểm tra kết nối mạng hoặc thử lại sau.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  /*
   * ========================================
   * SUCCESS SCREEN
   * ========================================
   */

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 text-center"
        >
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-blue-600" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {t('ctvSuccessTitle')}
          </h2>

          <p className="text-gray-600 mb-6">
            {t('ctvSuccessDesc')}
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />

            {t('home')}
          </Link>
        </motion.div>
      </div>
    )
  }

  /*
   * ========================================
   * MAIN
   * ========================================
   */

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">

      {/* ========================================
          HEADER
      ======================================== */}

      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between h-16">

            <Link
              href="/"
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  B
                </span>
              </div>

              <span className="text-2xl font-bold text-green-600">
                Biteo
              </span>
            </Link>

            <Link
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />

              <span className="text-sm font-medium">
                {t('back')}
              </span>
            </Link>

          </div>
        </div>
      </header>

      {/* ========================================
          CONTENT
      ======================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ========================================
              LEFT SIDE
          ======================================== */}

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

            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />

              {t('ctvRegisterTitle')}
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {t('ctvHeroTitle')}
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('ctvHeroDesc')}
            </p>

            <div className="space-y-6">

              {benefits.map(
                (benefit, index) => (
                  <motion.div
                    key={
                      benefit.titleKey
                    }
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

                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center">

                      <benefit.icon className="w-6 h-6 text-blue-600" />

                    </div>

                    <div>

                      <h3 className="font-semibold text-gray-900 mb-1">
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

            <div className="mt-10 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white">

              <div className="grid grid-cols-3 gap-4 text-center">

                <div>
                  <div className="text-2xl font-bold">
                    5K+
                  </div>

                  <div className="text-sm text-blue-100">
                    {t('collaborators')}
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-bold">
                    50+
                  </div>

                  <div className="text-sm text-blue-100">
                    {t('ctvProvinces')}
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-bold">
                    98%
                  </div>

                  <div className="text-sm text-blue-100">
                    {t('ctvSatisfied')}
                  </div>
                </div>

              </div>
            </div>

            {/* Testimonial */}

            <div className="mt-8 p-6 bg-white rounded-2xl border border-gray-200">

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>

                <div>

                  <p className="text-gray-600 italic mb-3">
                    "Làm CTV Biteo giúp tôi có thêm thu nhập 5-10 triệu mỗi tháng ngay trên điện thoại!"
                  </p>

                  <p className="text-sm font-medium text-gray-900">
                    — Minh Tuấn, TP.HCM
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* ========================================
              RIGHT SIDE - FORM
          ======================================== */}

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

            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">

              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t('ctvRegisterNow')}
              </h2>

              <p className="text-gray-600 mb-8">
                {t('ctvRegisterDesc')}
              </p>

              {/* ========================================
                  ERROR
              ======================================== */}

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

                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />

                  <span>
                    {errorMessage}
                  </span>

                </motion.div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* ========================================
                    INPUT ẨN - LOẠI ĐĂNG KÝ
                ======================================== */}

                <input
                  type="hidden"
                  name="type"
                  value="Đăng ký cộng tác viên"
                />

                {/* ========================================
                    FULL NAME
                ======================================== */}

                <div>

                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t('ctvFullName')}

                    <span className="text-red-500">
                      {' '}*
                    </span>
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
                      autoComplete="name"
                      placeholder={t(
                        'ctvFullName'
                      )}
                      className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50/50 hover:bg-gray-50"
                    />

                  </div>

                </div>

                {/* ========================================
                    PHONE
                ======================================== */}

                <div>

                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t('ctvPhone')}

                    <span className="text-red-500">
                      {' '}*
                    </span>
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
                      autoComplete="tel"
                      placeholder="0xxx xxx xxx"
                      className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50/50 hover:bg-gray-50"
                    />

                  </div>

                </div>

                {/* ========================================
                    EMAIL
                    KHÔNG BẮT BUỘC
                ======================================== */}

                <div>

                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t('ctvEmail')}

                    <span className="ml-2 text-xs font-normal text-gray-400">
                      (không bắt buộc)
                    </span>
                  </label>

                  <div className="relative">

                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      placeholder="email@example.com"
                      className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50/50 hover:bg-gray-50"
                    />

                  </div>

                </div>

                {/* ========================================
                    ADDRESS
                ======================================== */}

                <div>

                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t('ctvAddress')}

                    <span className="text-red-500">
                      {' '}*
                    </span>
                  </label>

                  <div className="relative">

                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      autoComplete="street-address"
                      placeholder={t(
                        'ctvAddressPlaceholder'
                      )}
                      className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50/50 hover:bg-gray-50"
                    />

                  </div>

                </div>

                {/* ========================================
                    MOTIVATION
                ======================================== */}

                <div>

                  <label
                    htmlFor="motivation"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t('ctvMotivation')}

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
                      'ctvMotivationPlaceholder'
                    )}
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50/50 hover:bg-gray-50 resize-none"
                  />

                </div>

                {/* ========================================
                    SUBMIT BUTTON
                ======================================== */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
                >

                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
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

                      {t('ctvProcessing')}
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />

                      {t('ctvRegisterNow')}
                    </>
                  )}

                </button>

                {/* Terms */}

                <p className="text-xs text-gray-500 text-center">
                  {t('ctvTermsAgree')}
                </p>

              </form>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import DocumentViewer from './DocumentViewer'

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/biteo', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/biteo', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/biteo', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/biteo', label: 'Github' },
]

interface LegalDocument {
  label: string
  href: string
  docUrl?: string
}

export default function Footer() {
  const { t } = useLanguage()
  const [documentViewer, setDocumentViewer] = useState<{
    isOpen: boolean
    docUrl: string
    title: string
  }>({
    isOpen: false,
    docUrl: '',
    title: '',
  })

  const legalDocuments: LegalDocument[] = [
    { label: t('termsOfUse'), href: '/terms' },
    { label: t('privacyPolicy'), href: '/legal/privacy', docUrl: '/docs/Chinh_sach_bao_mat_va_bao_ve_du_lieu_ca_nhan_Biteo_du_thao.docx' },
    { label: t('footerPartnerPolicy'), href: '/partner-policy' },
    { label: t('pricingPolicyLink'), href: '/legal/pricing-policy', docUrl: '/docs/Chinh_sach_gia_phi_hoa_hong_va_thay_doi_bieu_phi_Biteo_du_thao.docx' },
    { label: t('servicePolicyLink'), href: '/legal/service-policy', docUrl: '/docs/Chinh_sach_dat_cung_cap_huy_dich_vu_va_hoan_tien_Biteo_du_thao.docx' },
    { label: t('returnPolicyLink'), href: '/legal/return-policy', docUrl: '/docs/Chinh_sach_doi_tra_hang_va_hoan_tien_Biteo_du_thao.docx' },
    { label: t('deliveryPolicyLink'), href: '/legal/delivery-policy', docUrl: '/docs/Chinh_sach_giao_hang_va_kiem_hang_Biteo_du_thao.docx' },
    { label: t('paymentPolicyLink'), href: '/legal/payment-policy', docUrl: '/docs/Chinh_sach_thanh_toan_hoan_tien_va_diem_thuong_Biteo_du_thao.docx' },
    { label: t('displayPolicyLink'), href: '/legal/display-policy', docUrl: '/docs/Chinh_sach_uu_tien_han_che_va_xep_hang_hien_thi_Biteo_du_thao.docx' },
    { label: t('complaintHandlingLink'), href: '/legal/complaint-handling', docUrl: '/docs/Quy_trinh_tiep_nhan_va_giai_quyet_phan_anh_yeu_cau_khieu_nai_Biteo_du_thao.docx' },
    { label: t('operatingRegulationsLink'), href: '/legal/operating-regulations', docUrl: '/docs/Quy_che_hoat_dong_Biteo_du_thao.docx' },
    { label: t('livestreamRegulationsLink'), href: '/legal/livestream-regulations', docUrl: '/docs/Quy che hoat dong Livestream_final.docx' },
  ]

  const handleLegalClick = (doc: LegalDocument) => {
    if (doc.docUrl) {
      setDocumentViewer({
        isOpen: true,
        docUrl: doc.docUrl,
        title: doc.label,
      })
    }
  }

  const footerLinks = {
    biteo: [
      { label: t('aboutBiteo'), href: '#about' },
      { label: t('contact'), href: '/contact' },
    ],
    services: [
      { label: t('video'), href: '/#ecosystem' },
      { label: t('culinary'), href: '/#ecosystem' },
      { label: t('travel'), href: '/#ecosystem' },
      { label: t('shopping'), href: '/#ecosystem' },
      { label: t('groceryShopping'), href: '/#ecosystem' },
    ],
    partners: [
      { label: t('registerBusiness'), href: '/#business' },
      { label: t('collaborators'), href: '/dang-ky-nhan-vien-di-cho-ho' },
      { label: t('supportCenter'), href: '/contact' },
    ],
  }

  return (
    <>
      <footer className="bg-biteo-footer text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer */}
          <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-biteo-green">Biteo</span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {t('footerDesc')}
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-biteo-green transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Biteo Links */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t('biteo')}</h4>
              <ul className="space-y-3">
                {footerLinks.biteo.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t('services')}</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partners Links */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t('partners')}</h4>
              <ul className="space-y-3">
                {footerLinks.partners.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t('legal')}</h4>
              <ul className="space-y-3">
                {legalDocuments.map((doc) => (
                  <li key={doc.label}>
                    {doc.docUrl ? (
                      <button
                        onClick={() => handleLegalClick(doc)}
                        className="text-gray-400 hover:text-white transition-colors text-sm text-left"
                      >
                        {doc.label}
                      </button>
                    ) : (
                      <Link
                        href={doc.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {doc.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-6 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2026 Biteo. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Document Viewer Modal */}
      <DocumentViewer
        isOpen={documentViewer.isOpen}
        onClose={() => setDocumentViewer(prev => ({ ...prev, isOpen: false }))}
        documentUrl={documentViewer.docUrl}
        title={documentViewer.title}
      />
    </>
  )
}

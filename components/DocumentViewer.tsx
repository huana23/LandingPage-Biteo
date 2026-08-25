'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, FileText, ChevronLeft, ChevronRight, Download, Loader2 } from 'lucide-react'
import mammoth from 'mammoth'

interface DocumentViewerProps {
  isOpen: boolean
  onClose: () => void
  documentUrl: string
  title: string
}

export default function DocumentViewer({ isOpen, onClose, documentUrl, title }: DocumentViewerProps) {
  const [htmlContent, setHtmlContent] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchAndConvertDocx = useCallback(async () => {
    if (!documentUrl || !isOpen) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(documentUrl)
      const arrayBuffer = await response.arrayBuffer()
      const result = await mammoth.convertToHtml({ arrayBuffer })
      setHtmlContent(result.value)
    } catch (err) {
      console.error('Error converting document:', err)
      setError('Không thể tải tài liệu. Vui lòng thử lại.')
    } finally {
      setLoading(false)
    }
  }, [documentUrl, isOpen])

  useEffect(() => {
    fetchAndConvertDocx()
  }, [fetchAndConvertDocx])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleDownload = async () => {
    try {
      const link = document.createElement('a')
      link.href = documentUrl
      link.download = title
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (err) {
      console.error('Download error:', err)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-[95vw] h-[90vh] max-w-6xl bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">{title}</h2>
              <p className="text-sm text-gray-500">Tài liệu PDF/Word</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
            >
              <Download className="w-4 h-4" />
              Tải xuống
            </button>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden bg-gray-50">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <Loader2 className="w-8 h-8 text-green-600 animate-spin" />
              <p className="text-gray-600">Đang tải tài liệu...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <X className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-gray-600">{error}</p>
              <button
                onClick={fetchAndConvertDocx}
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-xl hover:bg-green-700 transition-colors"
              >
                Thử lại
              </button>
            </div>
          ) : (
            <div className="h-full overflow-y-auto">
              <div 
                className="p-8 max-w-4xl mx-auto prose prose-green prose-lg"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
                style={{
                  '--tw-prose-body': '#374151',
                  '--tw-prose-headings': '#111827',
                  '--tw-prose-links': '#16a34a',
                } as React.CSSProperties}
              />
            </div>
          )}
        </div>

        {/* Footer navigation */}
        {!loading && !error && (
          <div className="flex items-center justify-between px-6 py-3 border-t border-gray-200 bg-white">
            <span className="text-sm text-gray-500">
              Tài liệu gốc: DOCX
            </span>
          </div>
        )}
      </div>
    </div>
  )
}



'use client'

import { Eye, Menu, X } from 'lucide-react'

export function CabinetHeader({ onMenuToggle }: { onMenuToggle?: () => void }) {
  return (
    <header className="bg-white border-b border-[var(--gov-border)] sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-2 sm:px-4 flex items-center h-11 gap-0">
        {/* Mobile menu button */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden mr-2 p-1.5 hover:bg-[var(--gov-light)] rounded"
          aria-label="Меню"
        >
          <Menu size={18} className="text-[var(--gov-gray)]" />
        </button>

        {/* Logo with image */}
        <a href="/" className="shrink-0 mr-3 sm:mr-6">
          <img 
            src="https://my.egov.kz/images/e91c41a1.logo_2010@2x.png" 
            alt="Логотип"
            className="h-6 sm:h-7 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.src = '/logo-placeholder.png'
            }}
          />
        </a>

        {/* Tabs */}
        <nav className="hidden sm:flex items-center flex-1 h-full overflow-x-auto">
          {[
            { label: 'Досье', href: '/cabinet', active: true },
            { label: 'Цифровые документы', href: '#' },
            { label: 'Входящие', href: '#', badge: 156 },
            { label: 'Мои документы', href: '#' },
            { label: 'Настройки', href: '#' },
            { label: 'Еще', href: '#' },
          ].map((tab) => (
            <a
              key={tab.label}
              href={tab.href}
              className={`relative flex items-center gap-1 px-2 sm:px-3 h-full text-[12px] sm:text-[13px] whitespace-nowrap transition-colors ${
                tab.active
                  ? 'text-[var(--gov-green-dark)] border-b-2 border-[var(--gov-green-dark)] font-medium'
                  : 'text-[var(--gov-gray)] hover:text-[var(--gov-green-dark)]'
              }`}
            >
              {tab.label}
              {tab.badge && (
                <span className="bg-[#e53935] text-white text-[10px] font-bold rounded-full px-1.5 py-0 leading-4 min-w-[18px] text-center">
                  {tab.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3 ml-auto shrink-0">
          {/* <button className="w-8 h-8 flex items-center justify-center rounded border border-[var(--gov-border)] hover:bg-[var(--gov-light)]">
            <BookOpen size={15} className="text-[var(--gov-gray)]" />
          </button> */}
          <button className="w-8 h-8 flex items-center justify-center rounded  border-[var(--gov-border)] hover:bg-[var(--gov-light)]">
            <Eye size={15} className="text-[var(--gov-teal)]" />
          </button>
          <a href="#" className="text-[13px] text-[var(--gov-teal)] hover:underline">Қазақша</a>
          <a href="/" className="text-[13px] text-[var(--gov-teal)] hover:underline">Выйти</a>
        </div>
      </div>
    </header>
  )
}



'use client'
import { User } from 'lucide-react'
import { JSX } from 'react/jsx-runtime'

const sections = [
  { id: 'documents', label: 'Документы, удостоверяющие личность', icon: 'https://my.egov.kz/images/mgov-icons/30f6fca3.icn_identity_documents.png' },
  { id: 'address', label: 'Адреса', icon: 'https://my.egov.kz/images/mgov-icons/fd687231.icn_address.png' },
  { id: 'driver', label: 'Водительское удостоверение', icon: 'https://my.egov.kz/images/mgov-icons/a66d0f0c.icn_driver_license.png' },
  { id: 'marriage', label: 'Сведения о заключении брака', icon: 'https://my.egov.kz/images/mgov-icons/92c0c52c.icn_marital_status.png' },
  { id: 'social-status', label: 'Социальный статус', icon: 'https://my.egov.kz/images/mgov-icons/cc336691.icn_social_status.png' },
  { id: 'property', label: 'Имущество', icon: 'https://my.egov.kz/images/mgov-icons/427559c6.icn_property.png' },
  { id: 'legal', label: 'Участие в юридических лицах (учредители, граждане - инициаторы, участники)', icon: 'https://my.egov.kz/images/mgov-icons/cf549c96.icn_participant_legal_entities.png' },
  { id: 'auto', label: 'Авто', icon: 'https://my.egov.kz/images/mgov-icons/06aca0f2.icn_transport_information.png' },
  { id: 'licenses', label: 'Лицензии и разрешительные документы', icon: 'https://my.egov.kz/images/mgov-icons/b8e1f3ac.icn_license_information.png' },
  { id: 'debtors', label: 'Реестр должников', icon: 'https://my.egov.kz/images/mgov-icons/520d7838.kk_debt.png' },
  { id: 'medical', label: 'Медицинские записи', icon: 'https://my.egov.kz/images/mgov-icons/210995b2.kk_clinic.png' },
  { id: 'work', label: 'Трудовая деятельность', icon: 'https://my.egov.kz/images/mgov-icons/cc336691.icn_social_status.png' },
  { id: 'military', label: 'Воинская служба', icon: 'https://my.egov.kz/images/mgov-icons/801ba97b.icn_military_status.png' },
  { id: 'pension', label: 'Сведения о пенсионных отчислениях и начислениях ЕНПФ', icon: 'https://my.egov.kz/images/mgov-icons/cc336691.icn_social_status.png' },
  { id: 'ip', label: 'Статус индивидуального предпринимателя', icon: 'https://my.egov.kz/images/mgov-icons/44a49b80.ip.png' },
  { id: 'osms', label: 'Обязательное социальное медицинское страхование', icon: 'https://my.egov.kz/images/mgov-icons/e62e2308.visa.png' },
  { id: 'housing', label: 'Очередь на жилье', icon: 'https://my.egov.kz/images/mgov-icons/2caee618.accomodation_queue.png' },
  { id: 'fines', label: 'Административные штрафы', icon: 'https://my.egov.kz/images/mgov-icons/e62e2308.visa.png' },
  { id: 'gov-service', label: 'Государственная служба', icon: 'https://my.egov.kz/images/mgov-icons/ddf919e0.gov_employee.png' },
  { id: 'cards', label: 'Мои платежные карты', icon: 'https://my.egov.kz/images/mgov-icons/e62e2308.visa.png' },
  { id: 'gov-interaction', label: 'Взаимодействие с Правительством', icon: 'https://my.egov.kz/images/mgov-icons/2d13a15d.gov.png' },
]

function SectionIcon({ src, label }: { src: string; label: string }) {
  return (
    <span className="w-6 h-6 flex items-center justify-center shrink-0">
      <img 
        src={src} 
        alt={label}
        className="w-5 h-5 object-contain"
        onError={(e) => {
          e.currentTarget.src = '/placeholder-icon.png'
        }}
      />
    </span>
  )
}

export function CabinetSidebar({ open, onClose }: { open?: boolean; onClose?: () => void }) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className={`w-[260px] shrink-0 bg-[#f9f9f9] border-r border-[var(--gov-border)] min-h-screen hidden lg:block`}>
        {/* Profile */}
        <div className="flex flex-col items-center py-6 px-4 border-b border-[#1e8a62]">
          <div className="w-24 h-24 rounded-full border-2 border-[#1e8a62] overflow-hidden bg-[#d0d0d0] flex items-center justify-center mb-3">
            <img 
              src="https://my.egov.kz/images/b96a2042.male.png" 
              alt="Аватар"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = '/avatar-placeholder.png'
              }}
            />
          </div>
          <div className="text-[13px] font-bold text-[#1e8a62] text-center uppercase leading-snug">
            АСАНОВ БАУЫРЖАН<br />ИСЛАМОВИЧ
          </div>
          <a href="#" className="text-[12px] text-[#1e8a62] hover:underline mt-2">Отключить разделы</a>
        </div>

        {/* Sections list */}
        <nav className="py-2">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={onClose}
              className="flex items-start justify-between gap-2 px-3 py-2 hover:bg-[#1e8a62]/10 group"
            >
              <div className="flex items-start gap-2">
                <SectionIcon src={s.icon} label={s.label} />
                <span className="text-[12px] text-[var(--gov-text)] leading-snug group-hover:text-[#1e8a62]">
                  {s.label}
                </span>
              </div>
              <span className="text-[11px] text-[#1e8a62] shrink-0 hover:underline mt-0.5">Скрыть</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Mobile drawer */}
      <aside className={`fixed top-0 left-0 z-50 h-full w-[280px] bg-[#f9f9f9] border-r border-[var(--gov-border)] shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Close button */}
        <div className="flex justify-end p-2">
          <button onClick={onClose} className="p-1.5 hover:bg-[var(--gov-green-light)] rounded" aria-label="Закрыть">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center py-6 px-4 border-b border-[#1e8a62]">
          <div className="w-24 h-24 rounded-full border-2 border-[#1e8a62] overflow-hidden bg-[#d0d0d0] flex items-center justify-center mb-3">
            <img 
              src="https://my.egov.kz/images/b96a2042.male.png" 
              alt="Аватар"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = '/avatar-placeholder.png'
              }}
            />
          </div>
          <div className="text-[13px] font-bold text-[#1e8a62] text-center uppercase leading-snug">
            АСАНОВ БАУЫРЖАН<br />ИСЛАМОВИЧ
          </div>
          <a href="#" className="text-[12px] text-[#1e8a62] hover:underline mt-2">Отключить разделы</a>
        </div>

        {/* Sections list */}
        <nav className="py-2 overflow-y-auto max-h-[calc(100dvh-200px)]">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={onClose}
              className="flex items-start justify-between gap-2 px-3 py-2 hover:bg-[#1e8a62]/10 group"
            >
              <div className="flex items-start gap-2">
                <SectionIcon src={s.icon} label={s.label} />
                <span className="text-[12px] text-[var(--gov-text)] leading-snug group-hover:text-[#1e8a62]">
                  {s.label}
                </span>
              </div>
              <span className="text-[11px] text-[#1e8a62] shrink-0 hover:underline mt-0.5">Скрыть</span>
            </a>
          ))}
        </nav>
      </aside>
    </>
  )
}
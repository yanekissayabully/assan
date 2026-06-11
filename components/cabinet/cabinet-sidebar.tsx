// import { User } from 'lucide-react'

// const sections = [
//   { id: 'documents', label: 'Документы, удостоверяющие личность' },
//   { id: 'address', label: 'Адреса' },
//   { id: 'driver', label: 'Водительское удостоверение' },
//   { id: 'marriage', label: 'Сведения о заключении брака' },
//   { id: 'social-status', label: 'Социальный статус' },
//   { id: 'property', label: 'Имущество' },
//   { id: 'legal', label: 'Участие в юридических лицах (учредители, граждане - инициаторы, участники)' },
//   { id: 'auto', label: 'Авто' },
//   { id: 'licenses', label: 'Лицензии и разрешительные документы' },
//   { id: 'debtors', label: 'Реестр должников' },
//   { id: 'medical', label: 'Медицинские записи' },
//   { id: 'work', label: 'Трудовая деятельность' },
//   { id: 'military', label: 'Воинская служба' },
//   { id: 'pension', label: 'Сведения о пенсионных отчислениях и начислениях ЕНПФ' },
//   { id: 'ip', label: 'Статус индивидуального предпринимателя' },
//   { id: 'osms', label: 'Обязательное социальное медицинское страхование' },
//   { id: 'housing', label: 'Очередь на жилье' },
//   { id: 'fines', label: 'Административные штрафы' },
//   { id: 'gov-service', label: 'Государственная служба' },
//   { id: 'cards', label: 'Мои платежные карты' },
//   { id: 'gov-interaction', label: 'Взаимодействие с Правительством' },
// ]

// function SectionIcon() {
//   return (
//     <span className="w-6 h-6 rounded-full border border-[var(--gov-teal)] flex items-center justify-center shrink-0">
//       <span className="w-3 h-3 rounded-full bg-[var(--gov-teal)] opacity-60" />
//     </span>
//   )
// }

// export function CabinetSidebar() {
//   return (
//     <aside className="w-[260px] shrink-0 bg-[#f9f9f9] border-r border-[var(--gov-border)] min-h-screen">
//       {/* Profile */}
//       <div className="flex flex-col items-center py-6 px-4 border-b border-[var(--gov-border)]">
//         <div className="w-24 h-24 rounded-full border-2 border-[var(--gov-teal)] overflow-hidden bg-[#d0d0d0] flex items-center justify-center mb-3">
//           <User size={48} className="text-[#999]" />
//         </div>
//         <div className="text-[13px] font-bold text-[var(--gov-text)] text-center uppercase leading-snug">
//           АСАНОВ БАУЫРЖАН<br />ИСЛАМОВИЧ
//         </div>
//         <a href="#" className="text-[12px] text-[var(--gov-teal)] hover:underline mt-2">Отключить разделы</a>
//       </div>

//       {/* Vertical divider line */}
//       <div className="h-0.5 w-0.5 bg-[var(--gov-teal)] mx-auto mt-1 mb-1" />

//       {/* Sections list */}
//       <nav className="py-2">
//         {sections.map((s) => (
//           <a
//             key={s.id}
//             href={`#${s.id}`}
//             className="flex items-start justify-between gap-2 px-3 py-2 hover:bg-[var(--gov-teal-light)] group"
//           >
//             <div className="flex items-start gap-2">
//               <SectionIcon />
//               <span className="text-[12px] text-[var(--gov-text)] leading-snug group-hover:text-[var(--gov-teal)]">
//                 {s.label}
//               </span>
//             </div>
//             <span className="text-[11px] text-[var(--gov-teal)] shrink-0 hover:underline mt-0.5">Скрыть</span>
//           </a>
//         ))}
//       </nav>
//     </aside>
//   )
// }



// import { User } from 'lucide-react'
// import { JSX } from 'react/jsx-runtime'

// const sections = [
//   { id: 'documents', label: 'Документы, удостоверяющие личность', icon: 'id-card' },
//   { id: 'address', label: 'Адреса', icon: 'address' },
//   { id: 'driver', label: 'Водительское удостоверение', icon: 'driver' },
//   { id: 'marriage', label: 'Сведения о заключении брака', icon: 'marriage' },
//   { id: 'social-status', label: 'Социальный статус', icon: 'social' },
//   { id: 'property', label: 'Имущество', icon: 'property' },
//   { id: 'legal', label: 'Участие в юридических лицах (учредители, граждане - инициаторы, участники)', icon: 'legal' },
//   { id: 'auto', label: 'Авто', icon: 'auto' },
//   { id: 'licenses', label: 'Лицензии и разрешительные документы', icon: 'license' },
//   { id: 'debtors', label: 'Реестр должников', icon: 'debtors' },
//   { id: 'medical', label: 'Медицинские записи', icon: 'medical' },
//   { id: 'work', label: 'Трудовая деятельность', icon: 'work' },
//   { id: 'military', label: 'Воинская служба', icon: 'military' },
//   { id: 'pension', label: 'Сведения о пенсионных отчислениях и начислениях ЕНПФ', icon: 'pension' },
//   { id: 'ip', label: 'Статус индивидуального предпринимателя', icon: 'ip' },
//   { id: 'osms', label: 'Обязательное социальное медицинское страхование', icon: 'osms' },
//   { id: 'housing', label: 'Очередь на жилье', icon: 'housing' },
//   { id: 'fines', label: 'Административные штрафы', icon: 'fines' },
//   { id: 'gov-service', label: 'Государственная служба', icon: 'gov-service' },
//   { id: 'cards', label: 'Мои платежные карты', icon: 'cards' },
//   { id: 'gov-interaction', label: 'Взаимодействие с Правительством', icon: 'gov-interaction' },
// ]

// function SectionIcon({ type }: { type: string }) {
//   const c = 'var(--gov-teal)'
//   const icons: Record<string, JSX.Element> = {
//     'id-card': (
//       <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="2" y="5" width="20" height="14" rx="2"/>
//         <circle cx="8" cy="12" r="2.5"/>
//         <line x1="13" y1="10" x2="20" y2="10"/>
//         <line x1="13" y1="14" x2="18" y2="14"/>
//       </svg>
//     ),
//     'address': (
//       <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6z"/>
//         <circle cx="12" cy="8" r="2"/>
//       </svg>
//     ),
//     'driver': (
//       <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="2" y="6" width="20" height="13" rx="2"/>
//         <circle cx="8" cy="13" r="2"/>
//         <line x1="13" y1="11" x2="19" y2="11"/>
//         <line x1="13" y1="14" x2="17" y2="14"/>
//       </svg>
//     ),
//     'marriage': (
//       <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="9" cy="8" r="3"/>
//         <circle cx="15" cy="8" r="3"/>
//         <path d="M3 20c0-3.314 2.686-6 6-6h6c3.314 0 6 2.686 6 6"/>
//       </svg>
//     ),
//     'social': (
//       <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="12" cy="8" r="4"/>
//         <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7"/>
//         <polyline points="17 3 18.5 4.5 22 1"/>
//       </svg>
//     ),
//     'property': (
//       <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M3 10.5L12 3l9 7.5V21H3V10.5z"/>
//         <rect x="9" y="14" width="6" height="7"/>
//       </svg>
//     ),
//     'legal': (
//       <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="4" y="3" width="16" height="18" rx="1"/>
//         <line x1="8" y1="8" x2="16" y2="8"/>
//         <line x1="8" y1="12" x2="16" y2="12"/>
//         <line x1="8" y1="16" x2="12" y2="16"/>
//       </svg>
//     ),
//     'auto': (
//       <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M5 11l2-5h10l2 5"/>
//         <rect x="2" y="11" width="20" height="6" rx="1"/>
//         <circle cx="7" cy="18" r="2"/>
//         <circle cx="17" cy="18" r="2"/>
//       </svg>
//     ),
//     'license': (
//       <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <polyline points="9 11 12 14 22 4"/>
//         <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
//       </svg>
//     ),
//     'debtors': (
//       <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="12" cy="12" r="9"/>
//         <line x1="12" y1="8" x2="12" y2="12"/>
//         <circle cx="12" cy="16" r="0.5" fill={c}/>
//       </svg>
//     ),
//     'medical': (
//       <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
//         <polyline points="14 2 14 8 20 8"/>
//         <line x1="12" y1="18" x2="12" y2="12"/>
//         <line x1="9" y1="15" x2="15" y2="15"/>
//       </svg>
//     ),
//     'work': (
//       <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="2" y="7" width="20" height="14" rx="1"/>
//         <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
//         <line x1="12" y1="12" x2="12" y2="16"/>
//         <line x1="10" y1="14" x2="14" y2="14"/>
//       </svg>
//     ),
//     'military': (
//       <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
//       </svg>
//     ),
//     'pension': (
//       <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="12" cy="12" r="9"/>
//         <polyline points="12 7 12 12 15 15"/>
//       </svg>
//     ),
//     'ip': (
//       <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="12" cy="8" r="4"/>
//         <path d="M6 20v-1a6 6 0 0112 0v1"/>
//         <line x1="19" y1="5" x2="23" y2="5"/>
//         <line x1="21" y1="3" x2="21" y2="7"/>
//       </svg>
//     ),
//     'osms': (
//       <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
//         <line x1="12" y1="9" x2="12" y2="15"/>
//         <line x1="9" y1="12" x2="15" y2="12"/>
//       </svg>
//     ),
//     'housing': (
//       <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M3 11L12 4l9 7v10H3V11z"/>
//         <rect x="9" y="14" width="6" height="7"/>
//       </svg>
//     ),
//     'fines': (
//       <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="3" y="3" width="18" height="18" rx="1"/>
//         <line x1="12" y1="8" x2="12" y2="13"/>
//         <circle cx="12" cy="16" r="0.5" fill={c}/>
//       </svg>
//     ),
//     'gov-service': (
//       <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="2" y="14" width="20" height="7" rx="1"/>
//         <path d="M4 14V9a2 2 0 012-2h12a2 2 0 012 2v5"/>
//         <path d="M7 7V5a1 1 0 011-1h8a1 1 0 011 1v2"/>
//       </svg>
//     ),
//     'cards': (
//       <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="2" y="5" width="20" height="14" rx="2"/>
//         <line x1="2" y1="10" x2="22" y2="10"/>
//         <line x1="6" y1="15" x2="10" y2="15"/>
//       </svg>
//     ),
//     'gov-interaction': (
//       <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//         <circle cx="12" cy="12" r="9"/>
//         <line x1="2" y1="12" x2="22" y2="12"/>
//         <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
//       </svg>
//     ),
//   }

//   return (
//     <span className="w-6 h-6 flex items-center justify-center shrink-0">
//       {icons[type] ?? (
//         <span className="w-4 h-4 rounded-full border border-[var(--gov-teal)] flex items-center justify-center">
//           <span className="w-2 h-2 rounded-full bg-[var(--gov-teal)] opacity-60" />
//         </span>
//       )}
//     </span>
//   )
// }

// export function CabinetSidebar() {
//   return (
//     <aside className="w-[260px] shrink-0 bg-[#f9f9f9] border-r border-[var(--gov-border)] min-h-screen">

//       {/* Profile */}
//       <div className="flex flex-col items-center py-6 px-4 border-b border-[var(--gov-border)]">
//         <div className="w-24 h-24 rounded-full border-2 border-[var(--gov-teal)] overflow-hidden bg-[#d0d0d0] flex items-center justify-center mb-3">
//           <User size={48} className="text-[#999]" />
//         </div>
//         <div className="text-[13px] font-bold text-[var(--gov-text)] text-center uppercase leading-snug">
//           АСАНОВ БАУЫРЖАН<br />ИСЛАМОВИЧ
//         </div>
//         <a href="#" className="text-[12px] text-[var(--gov-teal)] hover:underline mt-2">Отключить разделы</a>
//       </div>

//       {/* Sections list */}
//       <nav className="py-2">
//         {sections.map((s) => (
//           <a
//             key={s.id}
//             href={`#${s.id}`}
//             className="flex items-start justify-between gap-2 px-3 py-2 hover:bg-[var(--gov-teal-light)] group"
//           >
//             <div className="flex items-start gap-2">
//               <SectionIcon type={s.icon} />
//               <span className="text-[12px] text-[var(--gov-text)] leading-snug group-hover:text-[var(--gov-teal)]">
//                 {s.label}
//               </span>
//             </div>
//             <span className="text-[11px] text-[var(--gov-teal)] shrink-0 hover:underline mt-0.5">Скрыть</span>
//           </a>
//         ))}
//       </nav>

//     </aside>
//   )
// }



// 'use client'
// import { User } from 'lucide-react'
// import { JSX } from 'react/jsx-runtime'

// const sections = [
//   { id: 'documents', label: 'Документы, удостоверяющие личность', icon: 'https://my.egov.kz/images/mgov-icons/30f6fca3.icn_identity_documents.png' },
//   { id: 'address', label: 'Адреса', icon: 'https://my.egov.kz/images/mgov-icons/fd687231.icn_address.png' },
//   { id: 'driver', label: 'Водительское удостоверение', icon: 'https://my.egov.kz/images/mgov-icons/a66d0f0c.icn_driver_license.png' },
//   { id: 'marriage', label: 'Сведения о заключении брака', icon: 'https://my.egov.kz/images/mgov-icons/92c0c52c.icn_marital_status.png' },
//   { id: 'social-status', label: 'Социальный статус', icon: 'https://my.egov.kz/images/mgov-icons/cc336691.icn_social_status.png' },
//   { id: 'property', label: 'Имущество', icon: 'https://my.egov.kz/images/mgov-icons/427559c6.icn_property.png' },
//   { id: 'legal', label: 'Участие в юридических лицах (учредители, граждане - инициаторы, участники)', icon: 'https://my.egov.kz/images/mgov-icons/cf549c96.icn_participant_legal_entities.png' },
//   { id: 'auto', label: 'Авто', icon: 'https://my.egov.kz/images/mgov-icons/06aca0f2.icn_transport_information.png' },
//   { id: 'licenses', label: 'Лицензии и разрешительные документы', icon: 'https://my.egov.kz/images/mgov-icons/b8e1f3ac.icn_license_information.png' },
//   { id: 'debtors', label: 'Реестр должников', icon: 'https://my.egov.kz/images/mgov-icons/520d7838.kk_debt.png' },
//   { id: 'medical', label: 'Медицинские записи', icon: 'https://my.egov.kz/images/mgov-icons/210995b2.kk_clinic.png' },
//   { id: 'work', label: 'Трудовая деятельность', icon: 'https://my.egov.kz/images/mgov-icons/cc336691.icn_social_status.png' },
//   { id: 'military', label: 'Воинская служба', icon: 'https://my.egov.kz/images/mgov-icons/801ba97b.icn_military_status.png' },
//   { id: 'pension', label: 'Сведения о пенсионных отчислениях и начислениях ЕНПФ', icon: 'https://my.egov.kz/images/mgov-icons/cc336691.icn_social_status.png' },
//   { id: 'ip', label: 'Статус индивидуального предпринимателя', icon: 'https://my.egov.kz/images/mgov-icons/44a49b80.ip.png' },
//   { id: 'osms', label: 'Обязательное социальное медицинское страхование', icon: 'https://my.egov.kz/images/mgov-icons/e62e2308.visa.png' },
//   { id: 'housing', label: 'Очередь на жилье', icon: 'https://my.egov.kz/images/mgov-icons/2caee618.accomodation_queue.png' },
//   { id: 'fines', label: 'Административные штрафы', icon: 'https://my.egov.kz/images/mgov-icons/e62e2308.visa.png' },
//   { id: 'gov-service', label: 'Государственная служба', icon: 'https://my.egov.kz/images/mgov-icons/ddf919e0.gov_employee.png' },
//   { id: 'cards', label: 'Мои платежные карты', icon: 'https://my.egov.kz/images/mgov-icons/e62e2308.visa.png' },
//   { id: 'gov-interaction', label: 'Взаимодействие с Правительством', icon: 'https://my.egov.kz/images/mgov-icons/2d13a15d.gov.png' },
// ]

// function SectionIcon({ src, label }: { src: string; label: string }) {
//   return (
//     <span className="w-6 h-6 flex items-center justify-center shrink-0">
//       <img 
//         src={src} 
//         alt={label}
//         className="w-5 h-5 object-contain"
//         onError={(e) => {
//           e.currentTarget.src = '/placeholder-icon.png'
//         }}
//       />
//     </span>
//   )
// }

// export function CabinetSidebar() {
//   return (
//     <aside className="w-[260px] shrink-0 bg-[#f9f9f9] border-r border-[var(--gov-border)] min-h-screen">

//       {/* Profile */}
//       <div className="flex flex-col items-center py-6 px-4 border-b border-[var(--gov-green)]">
//         <div className="w-24 h-24 rounded-full border-2 border-[var(--gov-teal)] overflow-hidden bg-[#d0d0d0] flex items-center justify-center mb-3">
//           <img 
//             src="https://my.egov.kz/images/b96a2042.male.png" 
//             alt="Аватар"
//             className="w-full h-full object-cover"
//             onError={(e) => {
//               e.currentTarget.src = '/avatar-placeholder.png'
//             }}
//           />
//         </div>
//         <div className="text-[13px] font-bold text-[var(--gov-text)] text-center uppercase leading-snug">
//           АСАНОВ БАУЫРЖАН<br />ИСЛАМОВИЧ
//         </div>
//         <a href="#" className="text-[12px] text-[var(--gov-teal)] hover:underline mt-2">Отключить разделы</a>
//       </div>

//       {/* Sections list */}
//       <nav className="py-2">
//         {sections.map((s) => (
//           <a
//             key={s.id}
//             href={`#${s.id}`}
//             className="flex items-start justify-between gap-2 px-3 py-2 hover:bg-[var(--gov-teal-light)] group"
//           >
//             <div className="flex items-start gap-2">
//               <SectionIcon src={s.icon} label={s.label} />
//               <span className="text-[12px] text-[var(--gov-text)] leading-snug group-hover:text-[var(--gov-teal)]">
//                 {s.label}
//               </span>
//             </div>
//             <span className="text-[11px] text-[var(--gov-teal)] shrink-0 hover:underline mt-0.5">Скрыть</span>
//           </a>
//         ))}
//       </nav>

//     </aside>
//   )
// }




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

export function CabinetSidebar() {
  return (
    <aside className="w-[260px] shrink-0 bg-[#f9f9f9] border-r border-[var(--gov-border)] min-h-screen">

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
  )
}
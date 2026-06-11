// 'use client'

// import { useState } from 'react'
// import { ChevronRight } from 'lucide-react'

// const tabs = ['ГРАЖДАНАМ', 'БИЗНЕСУ']

// const categories = [
//   { label: 'СЕМЬЯ', icon: '/placeholder.svg?height=40&width=40' },
//   { label: 'ЗДРАВООХРАНЕНИЕ', icon: '/placeholder.svg?height=40&width=40' },
//   { label: 'ОБРАЗОВАНИЕ', icon: '/placeholder.svg?height=40&width=40' },
//   { label: 'ТРУДОУСТРОЙСТВО И ЗАНЯТОСТЬ', icon: '/placeholder.svg?height=40&width=40' },
//   { label: 'СОЦИАЛЬНОЕ ОБЕСПЕЧЕНИЕ', icon: '/placeholder.svg?height=40&width=40' },
//   { label: 'ГРАЖДАНСТВО, МИГРАЦИЯ И ИММИГРАЦИЯ', icon: '/placeholder.svg?height=40&width=40' },
//   { label: 'НЕДВИЖИМОСТЬ', icon: '/placeholder.svg?height=40&width=40' },
//   { label: 'ТАМОЖНЯ И НАЛОГИ', icon: '/placeholder.svg?height=40&width=40' },
//   { label: 'ПРАВОВАЯ ПОМОЩЬ', icon: '/placeholder.svg?height=40&width=40' },
//   { label: 'ТРАНСПОРТ И КОММУНИКАЦИИ', icon: '/placeholder.svg?height=40&width=40' },
//   { label: 'КОНСУЛЬСКИЕ УСЛУГИ', icon: '/placeholder.svg?height=40&width=40' },
//   { label: 'ВОИНСКИЙ УЧЕТ И БЕЗОПАСНОСТЬ', icon: '/placeholder.svg?height=40&width=40' },
// ]

// // SVG icons matching egov.kz category icons
// const CategoryIcons: Record<string, React.ReactNode> = {
//   'СЕМЬЯ': (
//     <svg viewBox="0 0 48 48" className="w-10 h-10">
//       <circle cx="16" cy="14" r="7" fill="#4caf50" opacity="0.85"/>
//       <circle cx="32" cy="14" r="7" fill="#ff9800" opacity="0.85"/>
//       <path d="M4 38c0-8 6-12 12-12s12 4 12 12H4z" fill="#4caf50" opacity="0.85"/>
//       <path d="M20 38c0-8 6-12 12-12s12 4 12 12H20z" fill="#ff9800" opacity="0.85"/>
//     </svg>
//   ),
//   'ЗДРАВООХРАНЕНИЕ': (
//     <svg viewBox="0 0 48 48" className="w-10 h-10">
//       <circle cx="24" cy="24" r="20" fill="#f44336" opacity="0.15"/>
//       <circle cx="24" cy="24" r="18" fill="none" stroke="#f44336" strokeWidth="2"/>
//       <path d="M24 14v20M14 24h20" stroke="#f44336" strokeWidth="4" strokeLinecap="round"/>
//     </svg>
//   ),
//   'ОБРАЗОВАНИЕ': (
//     <svg viewBox="0 0 48 48" className="w-10 h-10">
//       <rect x="4" y="28" width="12" height="16" fill="#f44336"/>
//       <rect x="18" y="20" width="12" height="24" fill="#4caf50"/>
//       <rect x="32" y="12" width="12" height="32" fill="#2196f3"/>
//     </svg>
//   ),
//   'ТРУДОУСТРОЙСТВО И ЗАНЯТОСТЬ': (
//     <svg viewBox="0 0 48 48" className="w-10 h-10">
//       <circle cx="24" cy="16" r="10" fill="#4caf50" opacity="0.9"/>
//       <path d="M8 42c0-9 7-14 16-14s16 5 16 14H8z" fill="#4caf50" opacity="0.9"/>
//       <rect x="16" y="8" width="16" height="4" rx="2" fill="white" opacity="0.7"/>
//     </svg>
//   ),
//   'СОЦИАЛЬНОЕ ОБЕСПЕЧЕНИЕ': (
//     <svg viewBox="0 0 48 48" className="w-10 h-10">
//       <path d="M24 6l4 12h13l-10 8 4 12-11-8-11 8 4-12L7 18h13z" fill="#f44336" opacity="0.85"/>
//     </svg>
//   ),
//   'ГРАЖДАНСТВО, МИГРАЦИЯ И ИММИГРАЦИЯ': (
//     <svg viewBox="0 0 48 48" className="w-10 h-10">
//       <circle cx="24" cy="24" r="18" fill="none" stroke="#2196f3" strokeWidth="2.5"/>
//       <ellipse cx="24" cy="24" rx="10" ry="18" fill="none" stroke="#2196f3" strokeWidth="2"/>
//       <path d="M6 24h36M24 6c-4 6-6 12-6 18s2 12 6 18" fill="none" stroke="#2196f3" strokeWidth="1.5"/>
//     </svg>
//   ),
//   'НЕДВИЖИМОСТЬ': (
//     <svg viewBox="0 0 48 48" className="w-10 h-10">
//       <rect x="8" y="20" width="32" height="24" fill="#9e9e9e" opacity="0.4"/>
//       <rect x="12" y="24" width="8" height="20" fill="#9e9e9e" opacity="0.7"/>
//       <rect x="28" y="24" width="8" height="20" fill="#9e9e9e" opacity="0.7"/>
//       <polygon points="4,22 24,4 44,22" fill="#9e9e9e" opacity="0.9"/>
//       <rect x="20" y="32" width="8" height="12" fill="#616161"/>
//     </svg>
//   ),
//   'ТАМОЖНЯ И НАЛОГИ': (
//     <svg viewBox="0 0 48 48" className="w-10 h-10">
//       <rect x="6" y="10" width="36" height="28" rx="2" fill="none" stroke="#4caf50" strokeWidth="2.5"/>
//       <path d="M6 18h36" stroke="#4caf50" strokeWidth="2"/>
//       <rect x="12" y="24" width="8" height="8" rx="1" fill="#4caf50" opacity="0.7"/>
//       <rect x="28" y="24" width="8" height="8" rx="1" fill="#4caf50" opacity="0.7"/>
//     </svg>
//   ),
//   'ПРАВОВАЯ ПОМОЩЬ': (
//     <svg viewBox="0 0 48 48" className="w-10 h-10">
//       <path d="M24 4 L8 14 L8 22 C8 32 15 40 24 44 C33 40 40 32 40 22 L40 14 Z" fill="none" stroke="#9c27b0" strokeWidth="2.5"/>
//       <path d="M14 22 L20 28 L34 16" stroke="#9c27b0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//     </svg>
//   ),
//   'ТРАНСПОРТ И КОММУНИКАЦИИ': (
//     <svg viewBox="0 0 48 48" className="w-10 h-10">
//       <rect x="4" y="16" width="40" height="20" rx="3" fill="#4caf50" opacity="0.8"/>
//       <rect x="4" y="16" width="40" height="10" rx="3" fill="#2e7d32" opacity="0.8"/>
//       <circle cx="14" cy="38" r="5" fill="#333"/>
//       <circle cx="34" cy="38" r="5" fill="#333"/>
//       <path d="M24 16V8" stroke="#4caf50" strokeWidth="2.5"/>
//       <rect x="20" y="4" width="8" height="6" rx="1" fill="#4caf50" opacity="0.7"/>
//     </svg>
//   ),
//   'КОНСУЛЬСКИЕ УСЛУГИ': (
//     <svg viewBox="0 0 48 48" className="w-10 h-10">
//       <circle cx="24" cy="24" r="18" fill="none" stroke="#2196f3" strokeWidth="2.5"/>
//       <circle cx="24" cy="24" r="5" fill="#2196f3" opacity="0.5"/>
//       <path d="M6 24h36M24 6v36" stroke="#2196f3" strokeWidth="1.5" opacity="0.5"/>
//       <path d="M10 12c4 4 20 4 28 0M10 36c4-4 20-4 28 0" stroke="#2196f3" strokeWidth="1.5" fill="none"/>
//     </svg>
//   ),
//   'ВОИНСКИЙ УЧЕТ И БЕЗОПАСНОСТЬ': (
//     <svg viewBox="0 0 48 48" className="w-10 h-10">
//       <path d="M24 4 L8 12 L8 24 C8 34 15 42 24 46 C33 42 40 34 40 24 L40 12 Z" fill="#ff9800" opacity="0.8"/>
//       <circle cx="24" cy="24" r="6" fill="white" opacity="0.6"/>
//     </svg>
//   ),
// }

// export function ServicesNav() {
//   const [activeTab, setActiveTab] = useState(0)

//   return (
//     <div className="bg-white border-b border-[var(--gov-border)]">
//       <div className="max-w-[1200px] mx-auto px-3 py-4">
//         {/* Tab header row */}
//         <div className="flex items-center justify-between mb-3">
//           <div className="flex items-center gap-0">
//             {tabs.map((tab, i) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(i)}
//                 className={`text-[15px] font-bold uppercase px-0 pr-3 transition-colors ${
//                   i > 0 ? 'pl-3 border-l border-[var(--gov-border)]' : ''
//                 } ${
//                   activeTab === i
//                     ? 'text-[var(--gov-green-dark)]'
//                     : 'text-[var(--gov-gray)] hover:text-[var(--gov-green)]'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//           <div className="flex items-center gap-4">
//             <a href="#" className="text-[12px] font-bold text-[var(--gov-green)] hover:underline uppercase flex items-center gap-1">
//               ОНЛАЙН-УСЛУГИ ОДНИМ СПИСКОМ <ChevronRight size={12} />
//             </a>
//             <a href="#" className="text-[12px] font-bold text-[var(--gov-green)] hover:underline uppercase flex items-center gap-1">
//               УСЛУГИ ПО ГОСУДАРСТВЕННЫМ ОРГАНАМ <ChevronRight size={12} />
//             </a>
//           </div>
//         </div>

//         {/* Categories grid - 4 columns, 3 rows */}
//         <div className="grid grid-cols-4 border border-[var(--gov-border)]">
//           {categories.map((cat, i) => (
//             <a
//               key={cat.label}
//               href="#"
//               className={`flex items-center gap-3 px-3 py-4 hover:bg-[var(--gov-green-light)] transition-colors group border-[var(--gov-border)] ${
//                 i % 4 !== 3 ? 'border-r' : ''
//               } ${i < 8 ? 'border-b' : ''}`}
//             >
//               <div className="shrink-0 w-10 h-10 flex items-center justify-center">
//                 {CategoryIcons[cat.label] || (
//                   <div className="w-10 h-10 bg-[var(--gov-green-light)] rounded-full" />
//                 )}
//               </div>
//               <span className="text-[12px] font-medium text-[var(--gov-text)] group-hover:text-[var(--gov-green-dark)] leading-tight uppercase">
//                 {cat.label}
//               </span>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }



'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

const tabs = ['ГРАЖДАНАМ', 'БИЗНЕСУ']

const categories = [
  { label: 'СЕМЬЯ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/family_1.png' },
  { label: 'ЗДРАВООХРАНЕНИЕ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/health_1.png' },
  { label: 'ОБРАЗОВАНИЕ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/education_1.png' },
  { label: 'ТРУДОУСТРОЙСТВО И ЗАНЯТОСТЬ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/employment_1.png' },
  { label: 'СОЦИАЛЬНОЕ ОБЕСПЕЧЕНИЕ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/social_1.png' },
  { label: 'ГРАЖДАНСТВО, МИГРАЦИЯ И ИММИГРАЦИЯ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/migration_1.png' },
  { label: 'НЕДВИЖИМОСТЬ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/house_1.png' },
  { label: 'ТАМОЖНЯ И НАЛОГИ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/finance_1.png' },
  { label: 'ПРАВОВАЯ ПОМОЩЬ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/justice_1.png' },
  { label: 'ТРАНСПОРТ И КОММУНИКАЦИИ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/transports_1.png' },
  { label: 'КОНСУЛЬСКИЕ УСЛУГИ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/sport_1.png' },
  { label: 'ВОИНСКИЙ УЧЕТ И БЕЗОПАСНОСТЬ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/military_1.png' },
]

export function ServicesNav() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="bg-white border-b border-[var(--gov-border)]">
      <div className="max-w-[1200px] mx-auto px-3 py-4">
        {/* Tab header row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-0">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`text-[15px] font-bold uppercase px-0 pr-3 transition-colors ${
                  i > 0 ? 'pl-3 border-l border-[var(--gov-border)]' : ''
                } ${
                  activeTab === i
                    ? 'text-[var(--gov-green-dark)]'
                    : 'text-[var(--gov-gray)] hover:text-[var(--gov-green)]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[12px] font-bold text-[var(--gov-green)] hover:underline uppercase flex items-center gap-1">
              ОНЛАЙН-УСЛУГИ ОДНИМ СПИСКОМ <ChevronRight size={12} />
            </a>
            <a href="#" className="text-[12px] font-bold text-[var(--gov-green)] hover:underline uppercase flex items-center gap-1">
              УСЛУГИ ПО ГОСУДАРСТВЕННЫМ ОРГАНАМ <ChevronRight size={12} />
            </a>
          </div>
        </div>

        {/* Categories grid - 4 columns, 3 rows */}
        <div className="grid grid-cols-4 border border-[var(--gov-border)]">
          {categories.map((cat, i) => (
            <a
              key={cat.label}
              href="#"
              className={`flex items-center gap-3 px-3 py-4 hover:bg-[var(--gov-green-light)] transition-colors group border-[var(--gov-border)] ${
                i % 4 !== 3 ? 'border-r' : ''
              } ${i < 8 ? 'border-b' : ''}`}
            >
              <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                <img 
                  src={cat.icon} 
                  alt={cat.label}
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    // Если изображение не загрузилось, показываем заглушку
                    e.currentTarget.src = '/placeholder-icon.png'
                  }}
                />
              </div>
              <span className="text-[12px] font-medium text-[var(--gov-text)] group-hover:text-[var(--gov-green-dark)] leading-tight uppercase">
                {cat.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
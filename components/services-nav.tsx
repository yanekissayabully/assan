



// 'use client'

// import { useState } from 'react'
// import { ChevronRight } from 'lucide-react'

// const tabs = ['ГРАЖДАНАМ', 'БИЗНЕСУ']

// const categories = [
//   { label: 'СЕМЬЯ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/family_1.png' },
//   { label: 'ЗДРАВООХРАНЕНИЕ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/health_1.png' },
//   { label: 'ОБРАЗОВАНИЕ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/education_1.png' },
//   { label: 'ТРУДОУСТРОЙСТВО И ЗАНЯТОСТЬ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/employment_1.png' },
//   { label: 'СОЦИАЛЬНОЕ ОБЕСПЕЧЕНИЕ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/social_1.png' },
//   { label: 'ГРАЖДАНСТВО, МИГРАЦИЯ И ИММИГРАЦИЯ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/migration_1.png' },
//   { label: 'НЕДВИЖИМОСТЬ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/house_1.png' },
//   { label: 'ТАМОЖНЯ И НАЛОГИ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/finance_1.png' },
//   { label: 'ПРАВОВАЯ ПОМОЩЬ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/justice_1.png' },
//   { label: 'ТРАНСПОРТ И КОММУНИКАЦИИ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/transports_1.png' },
//   { label: 'КОНСУЛЬСКИЕ УСЛУГИ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/sport_1.png' },
//   { label: 'ВОИНСКИЙ УЧЕТ И БЕЗОПАСНОСТЬ', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/military_1.png' },
// ]

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
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4">
//             <a href="#" className="text-[12px] font-bold text-[var(--gov-green)] hover:underline uppercase flex items-center gap-1">
//               ОНЛАЙН-УСЛУГИ ОДНИМ СПИСКОМ <ChevronRight size={12} />
//             </a>
//             <a href="#" className="text-[12px] font-bold text-[var(--gov-green)] hover:underline uppercase flex items-center gap-1">
//               УСЛУГИ ПО ГОСУДАРСТВЕННЫМ ОРГАНАМ <ChevronRight size={12} />
//             </a>
//           </div>
//         </div>

//         {/* Categories grid - responsive columns */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border border-[var(--gov-border)] overflow-hidden">
//           {categories.map((cat, i) => (
//             <a
//               key={cat.label}
//               href="#"
//               className="flex items-center gap-3 px-3 py-4 hover:bg-[var(--gov-green-light)] transition-colors group border-b border-r border-[var(--gov-border)]"
//             >
//               <div className="shrink-0 w-10 h-10 flex items-center justify-center">
//                 <img 
//                   src={cat.icon} 
//                   alt={cat.label}
//                   className="w-10 h-10 object-contain"
//                   onError={(e) => {
//                     e.currentTarget.src = '/placeholder-icon.png'
//                   }}
//                 />
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
import Link from 'next/link'

const tabs = ['ГРАЖДАНАМ', 'БИЗНЕСУ']

const categories = [
  { label: 'СЕМЬЯ', href: 'https://egov.kz/cms/ru/categories/family', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/family_1.png' },
  { label: 'ЗДРАВООХРАНЕНИЕ', href: 'https://egov.kz/cms/ru/categories/public_health', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/health_1.png' },
  { label: 'ОБРАЗОВАНИЕ', href: 'https://egov.kz/cms/ru/categories/education', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/education_1.png' },
  { label: 'ТРУДОУСТРОЙСТВО И ЗАНЯТОСТЬ', href: 'https://egov.kz/cms/ru/categories/employment', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/employment_1.png' },
  { label: 'СОЦИАЛЬНОЕ ОБЕСПЕЧЕНИЕ', href: 'https://egov.kz/cms/ru/categories/social', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/social_1.png' },
  { label: 'ГРАЖДАНСТВО, МИГРАЦИЯ И ИММИГРАЦИЯ', href: 'https://egov.kz/cms/ru/categories/migration', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/migration_1.png' },
  { label: 'НЕДВИЖИМОСТЬ', href: 'https://egov.kz/cms/ru/categories/house', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/house_1.png' },
  { label: 'ТАМОЖНЯ И НАЛОГИ', href: 'https://egov.kz/cms/ru/categories/finance', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/finance_1.png' },
  { label: 'ПРАВОВАЯ ПОМОЩЬ', href: 'https://egov.kz/cms/ru/categories/justice', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/justice_1.png' },
  { label: 'ТРАНСПОРТ И КОММУНИКАЦИИ', href: 'https://egov.kz/cms/ru/categories/transports', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/transports_1.png' },
  { label: 'КОНСУЛЬСКИЕ УСЛУГИ', href: 'https://egov.kz/cms/ru/categories/sport', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/sport_1.png' },
  { label: 'ВОИНСКИЙ УЧЕТ И БЕЗОПАСНОСТЬ', href: 'https://egov.kz/cms/ru/categories/military', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/g/military_1.png' },
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4">
            <Link href="/services/online" className="text-[12px] font-bold text-[var(--gov-green)] hover:underline uppercase flex items-center gap-1">
              ОНЛАЙН-УСЛУГИ ОДНИМ СПИСКОМ <ChevronRight size={12} />
            </Link>
            <Link href="/services/by-organization" className="text-[12px] font-bold text-[var(--gov-green)] hover:underline uppercase flex items-center gap-1">
              УСЛУГИ ПО ГОСУДАРСТВЕННЫМ ОРГАНАМ <ChevronRight size={12} />
            </Link>
          </div>
        </div>

        {/* Categories grid - responsive columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border border-[var(--gov-border)] overflow-hidden">
          {categories.map((cat, i) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="flex items-center gap-3 px-3 py-4 hover:bg-[var(--gov-green-light)] transition-colors group border-b border-r border-[var(--gov-border)]"
            >
              <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                <img 
                  src={cat.icon} 
                  alt={cat.label}
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder-icon.png'
                  }}
                />
              </div>
              <span className="text-[12px] font-medium text-[var(--gov-text)] group-hover:text-[var(--gov-green-dark)] leading-tight uppercase">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
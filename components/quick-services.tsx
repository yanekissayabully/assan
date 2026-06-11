// const services = [
//   { label: 'Прием документов для зачисления в 1 класс', href: '#' },
//   { label: 'Регистрация абонентского номера в Базе Мобильных Граждан', href: '#' },
//   { label: 'Заказ государственного регистрационного номерного знака', href: '#' },
//   { label: 'Применение процедуры внесудебного банкротства', href: '#' },
//   { label: 'Сервисы корректировки сведений', href: '#' },
//   { label: 'Оценка качества оказания государственных услуг', href: '#' },
//   { label: 'Электронные обращения', href: '#' },
//   { label: 'Получение ЭЦП удаленно', href: '#' },
//   { label: 'Проверка услуг, полученных через egov.kz и ЦОН', href: '#' },
//   { label: 'Инновационные гранты для консорциумов', href: '#' },
// ]

// // Small icon representing a document/service — matches the egov.kz style icon
// function ServiceIcon() {
//   return (
//     <div className="w-10 h-10 shrink-0 flex items-center justify-center">
//       <svg viewBox="0 0 40 40" className="w-9 h-9">
//         <rect x="6" y="2" width="22" height="30" rx="2" fill="#e0e0e0"/>
//         <rect x="8" y="4" width="18" height="26" rx="1" fill="#f5f5f5"/>
//         <rect x="10" y="8" width="14" height="2" rx="1" fill="#bdbdbd"/>
//         <rect x="10" y="12" width="12" height="2" rx="1" fill="#bdbdbd"/>
//         <rect x="10" y="16" width="14" height="2" rx="1" fill="#bdbdbd"/>
//         <rect x="10" y="20" width="10" height="2" rx="1" fill="#bdbdbd"/>
//         <rect x="20" y="22" width="14" height="14" rx="2" fill="#4caf50" opacity="0.9"/>
//         <path d="M24 27 l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//       </svg>
//     </div>
//   )
// }

// export function QuickServices() {
//   return (
//     <div>
//       <h2 className="text-[14px] font-bold text-[var(--gov-green-dark)] uppercase mb-3 tracking-wide">СЕРВИСЫ</h2>
//       <div className="border border-[var(--gov-border)] bg-white">
//         {services.map((s, i) => (
//           <a
//             key={s.label}
//             href={s.href}
//             className={`flex items-center gap-3 px-3 py-2.5 hover:bg-[var(--gov-green-light)] transition-colors group ${
//               i < services.length - 1 ? 'border-b border-[var(--gov-border)]' : ''
//             }`}
//           >
//             <ServiceIcon />
//             <span className="text-[13px] text-[var(--gov-green)] group-hover:underline leading-snug">
//               {s.label}
//             </span>
//           </a>
//         ))}
//       </div>
//     </div>
//   )
// }



'use client'

const services = [
  { label: 'Прием документов для зачисления в 1 класс', href: '#', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
  { label: 'Регистрация абонентского номера в Базе Мобильных Граждан', href: '#', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
  { label: 'Заказ государственного регистрационного номерного знака', href: '#', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
  { label: 'Применение процедуры внесудебного банкротства', href: '#', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
  { label: 'Сервисы корректировки сведений', href: '#', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
  { label: 'Оценка качества оказания государственных услуг', href: '#', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
  { label: 'Электронные обращения', href: '#', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
  { label: 'Получение ЭЦП удаленно', href: '#', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
  { label: 'Проверка услуг, полученных через egov.kz и ЦОН', href: '#', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
  { label: 'Инновационные гранты для консорциумов', href: '#', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
]

export function QuickServices() {
  return (
    <div>
      <h2 className="text-[14px] font-bold text-[var(--gov-green-dark)] uppercase mb-3 tracking-wide">СЕРВИСЫ</h2>
      <div className="border border-[var(--gov-border)] bg-white">
        {services.map((s, i) => (
          <a
            key={s.label}
            href={s.href}
            className={`flex items-center gap-3 px-3 py-2.5 hover:bg-[var(--gov-green-light)] transition-colors group ${
              i < services.length - 1 ? 'border-b border-[var(--gov-border)]' : ''
            }`}
          >
            <div className="w-10 h-10 shrink-0 flex items-center justify-center">
              <img 
                src={s.icon} 
                alt={s.label}
                className="w-9 h-9 object-contain"
                onError={(e) => {
                  // Заглушка, если изображение не загрузилось
                  e.currentTarget.src = '/placeholder-service.png'
                }}
              />
            </div>
            <span className="text-[13px] text-[var(--gov-green)] group-hover:underline leading-snug">
              {s.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
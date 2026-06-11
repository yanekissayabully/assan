



// 'use client'

// const services = [
//   { label: 'Прием документов для зачисления в 1 класс', href: '#', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
//   { label: 'Регистрация абонентского номера в Базе Мобильных Граждан', href: '#', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
//   { label: 'Заказ государственного регистрационного номерного знака', href: '#', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
//   { label: 'Применение процедуры внесудебного банкротства', href: '#', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
//   { label: 'Сервисы корректировки сведений', href: '#', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
//   { label: 'Оценка качества оказания государственных услуг', href: '#', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
//   { label: 'Электронные обращения', href: '#', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
//   { label: 'Получение ЭЦП удаленно', href: '#', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
//   { label: 'Проверка услуг, полученных через egov.kz и ЦОН', href: '#', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
//   { label: 'Инновационные гранты для консорциумов', href: '#', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
// ]

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
//             <div className="w-10 h-10 shrink-0 flex items-center justify-center">
//               <img 
//                 src={s.icon} 
//                 alt={s.label}
//                 className="w-9 h-9 object-contain"
//                 onError={(e) => {
//                   // Заглушка, если изображение не загрузилось
//                   e.currentTarget.src = '/placeholder-service.png'
//                 }}
//               />
//             </div>
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

import Link from 'next/link'

const services = [
  { label: 'Прием документов для зачисления в 1 класс', href: 'https://egov.kz/cms/ru/services/secondary_school/pass_mp_203', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
  { label: 'Регистрация абонентского номера в Базе Мобильных Граждан', href: 'https://egov.kz/cms/ru/services/communications/pass1013_mcriap', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
  { label: 'Заказ государственного регистрационного номерного знака', href: 'https://egov.kz/cms/ru/services/vehicle/pass_vip_number', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
  { label: 'Применение процедуры внесудебного банкротства', href: 'https://egov.kz/cms/ru/services/economics/pass_P1_mf', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
  { label: 'Сервисы корректировки сведений', href: 'https://egov.kz/cms/ru/services/pass_adjustment_service', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
  { label: 'Оценка качества оказания государственных услуг', href: 'https://m.egov.kz/survey', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
  { label: 'Электронные обращения', href: 'https://egov.kz/cms/ru/services/citizen_and_the_government/e_app', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
  { label: 'Получение ЭЦП удаленно', href: 'https://egov.kz/cms/ru/services/reservation_for_busunesses/pass_onlineecp', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
  { label: 'Проверка услуг, полученных через egov.kz и ЦОН', href: 'https://egov.kz/services/SR.05/', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
  { label: 'Инновационные гранты для консорциумов', href: 'https://astanahub.com/ru/l/gup-grant-programs', icon: 'https://egov.kz/cms/sites/all/themes/egov_kz/html/images/s/1.png' },
]

export function QuickServices() {
  return (
    <div>
      <h2 className="text-[14px] font-bold text-[var(--gov-green-dark)] uppercase mb-3 tracking-wide">СЕРВИСЫ</h2>
      <div className="border border-[var(--gov-border)] bg-white">
        {services.map((s, i) => (
          <Link
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
          </Link>
        ))}
      </div>
    </div>
  )
}
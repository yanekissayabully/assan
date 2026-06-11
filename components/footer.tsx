// 'use client'

// import { ChevronLeft, ChevronRight } from 'lucide-react'

// const partners = [
//   { label: 'eGov mobile', bg: '#1565c0', text: 'white' },
//   { label: 'НАО «Фонд социального медицинского страхования»', bg: '#e8f5e9', text: '#333' },
//   { label: 'e-Salyq Azamat', bg: '#e3f2fd', text: '#333' },
//   { label: 'gov.kz Жизненные ситуации', bg: '#e8f5e9', text: '#333' },
//   { label: 'Электронная платформа закупок национального проекта', bg: '#fff3e0', text: '#333' },
// ]

// export function Footer() {
//   return (
//     <footer className="bg-white border-t border-[var(--gov-border)]">
//       {/* Partner logos carousel */}
//       <div className="border-b border-[var(--gov-border)] py-3">
//         <div className="max-w-[1200px] mx-auto px-3 flex items-center gap-3">
//           <button className="text-[var(--gov-gray)] hover:text-[var(--gov-green)] shrink-0" aria-label="Назад">
//             <ChevronLeft size={20} />
//           </button>
//           <div className="flex-1 grid grid-cols-5 gap-3">
//             {partners.map((p, i) => (
//               <div
//                 key={i}
//                 className="h-14 rounded border border-[var(--gov-border)] flex items-center justify-center px-2"
//                 style={{ backgroundColor: p.bg }}
//               >
//                 <span className="text-[10px] font-bold text-center leading-tight" style={{ color: p.text }}>
//                   {p.label}
//                 </span>
//               </div>
//             ))}
//           </div>
//           <button className="text-[var(--gov-gray)] hover:text-[var(--gov-green)] shrink-0" aria-label="Вперед">
//             <ChevronRight size={20} />
//           </button>
//         </div>
//       </div>

//       {/* Main footer content */}
//       <div className="max-w-[1200px] mx-auto px-3 py-5">
//         <div className="grid grid-cols-4 gap-6">
//           {/* Column 1: External resources */}
//           <div>
//             <h3 className="text-[13px] font-bold text-[var(--gov-green-dark)] mb-2 uppercase">Внешние ресурсы</h3>
//             <ul className="space-y-1">
//               {[
//                 'Электронное лицензирование',
//                 'Кабинет налогоплательщика',
//                 'Судебный кабинет',
//                 'Должник-взыскатель',
//                 'Календарь мероприятий',
//               ].map((link) => (
//                 <li key={link} className="flex items-start gap-1.5">
//                   <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gov-green)] shrink-0" />
//                   <a href="#" className="text-[12px] text-[var(--gov-text)] hover:text-[var(--gov-green)] hover:underline leading-snug">
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 2: RK */}
//           <div>
//             <div className="h-5 mb-2" /> {/* spacer to align with col 1 */}
//             <ul className="space-y-1">
//               {[
//                 'Конституция РК',
//                 'Государственные символы РК',
//                 'Послание Президента РК',
//                 'Государственные органы РК',
//                 'Меры антикоррупционной деятельности',
//               ].map((link) => (
//                 <li key={link} className="flex items-start gap-1.5">
//                   <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gov-green)] shrink-0" />
//                   <a href="#" className="text-[12px] text-[var(--gov-text)] hover:text-[var(--gov-green)] hover:underline leading-snug">
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//             <div className="mt-2 space-y-0.5">
//               <a href="#" className="block text-[12px] text-[var(--gov-gray)] hover:text-[var(--gov-green)] hover:underline">Законодательство</a>
//               <a href="#" className="block text-[12px] text-[var(--gov-gray)] hover:text-[var(--gov-green)] hover:underline">Политика конфиденциальности</a>
//               <a href="#" className="block text-[12px] text-[var(--gov-gray)] hover:text-[var(--gov-green)] hover:underline">Карта сайта</a>
//             </div>
//           </div>

//           {/* Column 3: Government for citizens */}
//           <div>
//             <h3 className="text-[13px] font-bold text-[var(--gov-green-dark)] mb-2 uppercase">Правительство для граждан</h3>
//             <ul className="space-y-1">
//               {['Контакты', 'Перечень услуг'].map((link) => (
//                 <li key={link} className="flex items-start gap-1.5">
//                   <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gov-green)] shrink-0" />
//                   <a href="#" className="text-[12px] text-[var(--gov-text)] hover:text-[var(--gov-green)] hover:underline leading-snug">
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 4: Social + app store */}
//           <div>
//             <h3 className="text-[13px] font-bold text-[var(--gov-green-dark)] mb-2 uppercase">Социальные сети</h3>
//             <div className="flex items-center gap-2 mb-3">
//               {/* Facebook */}
//               <a href="#" aria-label="Facebook" className="w-7 h-7 rounded-full bg-[#3b5998] flex items-center justify-center hover:opacity-80 transition-opacity">
//                 <span className="text-white text-[11px] font-bold">f</span>
//               </a>
//               {/* VK */}
//               <a href="#" aria-label="VK" className="w-7 h-7 rounded-full bg-[#4a76a8] flex items-center justify-center hover:opacity-80 transition-opacity">
//                 <span className="text-white text-[10px] font-bold">vk</span>
//               </a>
//               {/* YouTube */}
//               <a href="#" aria-label="YouTube" className="w-7 h-7 rounded-full bg-[#ff0000] flex items-center justify-center hover:opacity-80 transition-opacity">
//                 <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5">
//                   <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
//                 </svg>
//               </a>
//               {/* Instagram */}
//               <a href="#" aria-label="Instagram" className="w-7 h-7 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center hover:opacity-80 transition-opacity">
//                 <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
//                 </svg>
//               </a>
//             </div>

//             <div className="text-[12px] text-[var(--gov-text)] mb-1">
//               E-mail:{' '}
//               <a href="mailto:support@goscorp.kz" className="text-[var(--gov-green)] hover:underline">
//                 support@goscorp.kz
//               </a>
//             </div>

//             <div className="mb-3">
//               <span className="text-[12px] font-bold text-[var(--gov-green)] cursor-pointer hover:underline">Нашли ошибку?</span>
//               <p className="text-[11px] text-[var(--gov-gray)]">Выделите её и нажмите Ctrl+Enter</p>
//             </div>

//             {/* App store buttons */}
//             <div className="flex flex-col gap-2">
//               <a href="#" className="flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-md w-fit hover:bg-gray-800 transition-colors">
//                 <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
//                   <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.24 1.31-2.22 3.91.02 3.1 2.71 4.13 2.74 4.14l-.07.17zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
//                 </svg>
//                 <div>
//                   <div className="text-[8px] text-white/70">Загрузите в</div>
//                   <div className="text-[11px] font-semibold leading-none">App Store</div>
//                 </div>
//               </a>
//               <a href="#" className="flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-md w-fit hover:bg-gray-800 transition-colors">
//                 <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
//                   <path d="M3.18 23.76c.3.17.64.22.98.15l13.38-7.72-2.82-2.83-11.54 10.4zM.44 1.18C.17 1.51 0 2.01 0 2.67V21.33c0 .66.17 1.16.44 1.49l.08.07L12.37 12v-.28L.52 1.11l-.08.07zM20.67 10.62l-2.84-1.64-3.17 3.17 3.17 3.17 2.87-1.66c.82-.47.82-1.57-.03-2.04zM3.18.24L16.56 7.96l-2.82 2.82L2.26.45c.3-.17.62-.22.92-.21z"/>
//                 </svg>
//                 <div>
//                   <div className="text-[8px] text-white/70">ЗАГРУЗИТЕ НА</div>
//                   <div className="text-[11px] font-semibold leading-none">Google play</div>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="border-t border-[var(--gov-border)] py-3">
//         <div className="max-w-[1200px] mx-auto px-3 flex items-center justify-between">
//           <p className="text-[12px] text-[var(--gov-gray)]">
//             © Электронное правительство Республики Казахстан
//           </p>
//           <div className="flex items-center gap-4">
//             {/* Counter */}
//             <div className="flex items-center gap-2 text-[11px] text-[var(--gov-gray)]">
//               <div className="w-6 h-6 rounded-full border-2 border-[var(--gov-green)] flex items-center justify-center">
//                 <div className="w-2 h-2 rounded-full bg-[var(--gov-green)]" />
//               </div>
//               <div>
//                 <div>94961 <span className="text-red-400">♥</span></div>
//                 <div>17629 ▲</div>
//                 <div>424 ●</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }




'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

const partners = [
  { label: 'eGov mobile', img: 'https://egov.kz/cms/sites/default/files/styles/frontpage_banner/public/banners/frame_1egov_mobail_page-0001.jpg?itok=wfS83tYT' },
  { label: 'НАО «Фонд социального медицинского страхования»', img: 'https://egov.kz/cms/sites/default/files/styles/frontpage_banner/public/banners/photo_2025-10-13_14-45-06.jpg?itok=KT7uL_Eh' },
  { label: 'e-Salyq Azamat', img: 'https://egov.kz/cms/sites/default/files/styles/frontpage_banner/public/banners/banner_egov_-_kopiya_5.jpg?itok=AVKl8N51' },
  { label: 'gov.kz Жизненные ситуации', img: 'https://egov.kz/cms/sites/default/files/styles/frontpage_banner/public/banners/rus_banner_gov_kz.png?itok=6M5ia_jY' },
  { label: 'Электронная платформа закупок национального проекта', img: 'https://egov.kz/cms/sites/default/files/styles/frontpage_banner/public/banners/ss_ru_6.jpg?itok=gz_dGLrD' },
]

export function Footer() {
  return (
    <footer className="bg-white border-t border-[var(--gov-border)]">
      {/* Partner logos carousel */}
      <div className="border-b border-[var(--gov-border)] py-3">
        <div className="max-w-[1200px] mx-auto px-3 flex items-center gap-3">
          <button className="text-[var(--gov-gray)] hover:text-[var(--gov-green)] shrink-0" aria-label="Назад">
            <ChevronLeft size={20} />
          </button>
          <div className="flex-1 grid grid-cols-5 gap-3">
            {partners.map((p, i) => (
              <div
                key={i}
                className="h-14 rounded border border-[var(--gov-border)] flex items-center justify-center p-2 bg-white hover:shadow-md transition-shadow"
              >
                <img 
                  src={p.img} 
                  alt={p.label}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder-partner.png'
                  }}
                />
              </div>
            ))}
          </div>
          <button className="text-[var(--gov-gray)] hover:text-[var(--gov-green)] shrink-0" aria-label="Вперед">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-[1200px] mx-auto px-3 py-5">
        <div className="grid grid-cols-4 gap-6">
          {/* Column 1: External resources */}
          <div>
            <h3 className="text-[13px] font-bold text-[var(--gov-green-dark)] mb-2 uppercase">Внешние ресурсы</h3>
            <ul className="space-y-1">
              {[
                'Электронное лицензирование',
                'Кабинет налогоплательщика',
                'Судебный кабинет',
                'Должник-взыскатель',
                'Календарь мероприятий',
              ].map((link) => (
                <li key={link} className="flex items-start gap-1.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gov-green)] shrink-0" />
                  <a href="#" className="text-[12px] text-[var(--gov-text)] hover:text-[var(--gov-green)] hover:underline leading-snug">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: RK */}
          <div>
            <div className="h-5 mb-2" /> {/* spacer to align with col 1 */}
            <ul className="space-y-1">
              {[
                'Конституция РК',
                'Государственные символы РК',
                'Послание Президента РК',
                'Государственные органы РК',
                'Меры антикоррупционной деятельности',
              ].map((link) => (
                <li key={link} className="flex items-start gap-1.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gov-green)] shrink-0" />
                  <a href="#" className="text-[12px] text-[var(--gov-text)] hover:text-[var(--gov-green)] hover:underline leading-snug">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2 space-y-0.5">
              <a href="#" className="block text-[12px] text-[var(--gov-gray)] hover:text-[var(--gov-green)] hover:underline">Законодательство</a>
              <a href="#" className="block text-[12px] text-[var(--gov-gray)] hover:text-[var(--gov-green)] hover:underline">Политика конфиденциальности</a>
              <a href="#" className="block text-[12px] text-[var(--gov-gray)] hover:text-[var(--gov-green)] hover:underline">Карта сайта</a>
            </div>
          </div>

          {/* Column 3: Government for citizens */}
          <div>
            <h3 className="text-[13px] font-bold text-[var(--gov-green-dark)] mb-2 uppercase">Правительство для граждан</h3>
            <ul className="space-y-1">
              {['Контакты', 'Перечень услуг'].map((link) => (
                <li key={link} className="flex items-start gap-1.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--gov-green)] shrink-0" />
                  <a href="#" className="text-[12px] text-[var(--gov-text)] hover:text-[var(--gov-green)] hover:underline leading-snug">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social + app store */}
          <div>
            <h3 className="text-[13px] font-bold text-[var(--gov-green-dark)] mb-2 uppercase">Социальные сети</h3>
            <div className="flex items-center gap-2 mb-3">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-7 h-7 rounded-full bg-[#3b5998] flex items-center justify-center hover:opacity-80 transition-opacity">
                <span className="text-white text-[11px] font-bold">f</span>
              </a>
              {/* VK */}
              <a href="#" aria-label="VK" className="w-7 h-7 rounded-full bg-[#4a76a8] flex items-center justify-center hover:opacity-80 transition-opacity">
                <span className="text-white text-[10px] font-bold">vk</span>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="w-7 h-7 rounded-full bg-[#ff0000] flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-7 h-7 rounded-full bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>

            <div className="text-[12px] text-[var(--gov-text)] mb-1">
              E-mail:{' '}
              <a href="mailto:support@goscorp.kz" className="text-[var(--gov-green)] hover:underline">
                support@goscorp.kz
              </a>
            </div>

            <div className="mb-3">
              <span className="text-[12px] font-bold text-[var(--gov-green)] cursor-pointer hover:underline">Нашли ошибку?</span>
              <p className="text-[11px] text-[var(--gov-gray)]">Выделите её и нажмите Ctrl+Enter</p>
            </div>

            {/* App store buttons with images */}
            <div className="flex flex-col gap-2">
              <a href="#" className="flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-md w-fit hover:bg-gray-800 transition-colors">
                <img 
                  src="https://egov.kz/cms/sites/all/themes/mobile/html/images/logo-ios.png"
                  alt="App Store"
                  className="w-24 h-10 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/apple-icon.png'
                  }}
                />
    
              </a>
              <a href="#" className="flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-md w-fit hover:bg-gray-800 transition-colors">
                <img 
                  src="https://egov.kz/cms/sites/all/themes/mobile/html/images/logo-android.png"
                  alt="Google Play"
                  className="w-24 h-10 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/google-play-icon.png'
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--gov-border)] py-3">
        <div className="max-w-[1200px] mx-auto px-3 flex items-center justify-between">
          <p className="text-[12px] text-[var(--gov-gray)]">
            © Электронное правительство Республики Казахстан
          </p>
          <div className="flex items-center gap-4">
            {/* Counter */}
            {/* <div className="flex items-center gap-2 text-[11px] text-[var(--gov-gray)]">
              <div className="w-6 h-6 rounded-full border-2 border-[var(--gov-green)] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[var(--gov-green)]" />
              </div>
              <div>
                <div>94961 <span className="text-red-400">♥</span></div>
                <div>17629 ▲</div>
                <div>424 ●</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
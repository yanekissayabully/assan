





// 'use client'

// import { useState } from 'react'
// import { Search, ChevronDown, Menu, X } from 'lucide-react'

// export function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false)

//   const handleUserClick = () => {
//     window.location.href = '/cabinet'
//   }

//   return (
//     <header className="bg-white border-b border-[var(--gov-border)]">
//       {/* Top bar */}
//       <div className="border-b border-[var(--gov-border)]">
//         <div className="max-w-[1200px] mx-auto px-3 flex items-center justify-between h-8">
//           {/* Language switcher */}
//           <div className="flex items-center gap-0 text-[13px]">
//             <button className="px-1.5 py-1 text-[var(--gov-gray)] hover:text-[var(--gov-green)] font-normal">ҚАЗ</button>
//             <span className="text-[var(--gov-border)]">|</span>
//             <button className="px-1.5 py-1 text-[var(--gov-green)] font-bold underline">РУС</button>
//             <span className="text-[var(--gov-border)]">|</span>
//             <button className="px-1.5 py-1 text-[var(--gov-gray)] hover:text-[var(--gov-green)] font-normal">ENG</button>
//           </div>

//           {/* Right side */}
//           <div className="flex items-center gap-3">
//             <button className="text-[12px] text-[var(--gov-gray)] hover:text-[var(--gov-green)] transition-colors hidden sm:inline">
//               Перейти в режим для слабовидящих
//             </button>
//             {/* User button */}
//             <button 
//               onClick={handleUserClick}
//               className="flex items-center gap-1 bg-[var(--gov-green-dark)] text-white px-3 py-1.5 text-[12px] font-medium h-8 cursor-pointer"
//             >
//               <span className="w-4 h-4 rounded-full bg-white/30 flex items-center justify-center text-[10px]">
//                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
//               </span>
//               <span className="hidden sm:inline">АСАНОВ БАУЫРЖАН ИСЛАМОВИЧ</span>
//               <ChevronDown size={12} className="ml-1" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Logo + search + phone */}
//       <div className="border-b border-[var(--gov-border)]">
//         <div className="max-w-[1200px] mx-auto px-3 py-2 flex items-center gap-4">
//           {/* Logo link with image */}
//           <a href="https://ваш-сайт.кз" className="flex items-center gap-2 shrink-0">
//             <img 
//               src="https://egov.kz/cms/sites/all/themes/egov_kz/html/images/logo-beta.png" 
//               alt="Логотип"
//               className="h-10 w-auto object-contain"
//             />
//             <div className="leading-tight ml-1 border-l border-[var(--gov-border)] pl-3 hidden sm:block">
//               <div className="text-[12px] text-[var(--gov-gray)] leading-snug">Государственные услуги</div>
//               <div className="text-[12px] text-[var(--gov-gray)] leading-snug">и информация онлайн</div>
//             </div>
//           </a>

//           {/* Search */}
//           <div className="flex-1 max-w-lg">
//             <div className="flex border border-[var(--gov-border)] bg-white overflow-hidden">
//               <input
//                 type="text"
//                 placeholder="Поиск по порталу"
//                 className="flex-1 px-3 py-2 text-[13px] outline-none text-[var(--gov-text)] placeholder:text-[var(--gov-gray)]"
//               />
//               <button className="px-3 bg-white hover:bg-[var(--gov-green-light)] transition-colors border-l border-[var(--gov-border)]">
//                 <Search size={16} className="text-[var(--gov-green)]" />
//               </button>
//             </div>
//           </div>

//           {/* Phone/contact */}
//           <div className="hidden lg:flex items-start gap-3 ml-auto shrink-0">
//             <div className="text-right">
//               <div className="text-[42px] font-bold text-[var(--gov-green-dark)] leading-none">1414</div>
//               <div className="text-[24x] text-[var(--gov-green-dark)] mt-0.5">+7 7172 906 984</div>
//             </div>
//             <div className="text-[11px] text-[var(--gov-gray)] leading-relaxed pt-1">
//               <div>Единый контакт-центр</div>
//               <div>Звонок бесплатный</div>
//               <div>Звонок платный</div>
//               <div>для зарубежных звонков</div>
//               <div className="text-blue-500 hover:underline cursor-pointer">(бесплатно через интернет)</div>
//             </div>
//           </div>

//           <button
//             className="lg:hidden ml-auto"
//             onClick={() => setMobileOpen(!mobileOpen)}
//             aria-label="Меню"
//           >
//             {mobileOpen ? <X size={22} /> : <Menu size={22} />}
//           </button>
//         </div>
//       </div>

//       {/* Main nav - green bar */}
//       <nav className={`bg-[var(--gov-green)] ${mobileOpen ? 'block' : 'hidden'} lg:block`}>
//         <div className="max-w-[1200px] mx-auto px-3">
//           <ul className="flex flex-col lg:flex-row">
//             {[
//               { label: 'ОТКРЫТОЕ ПРАВИТЕЛЬСТВО', href: '#' },
//               { label: 'ЛИЧНЫЙ КАБИНЕТ', href: '/cabinet' },
//               { label: 'РЕЕСТР ГОСУДАРСТВЕННЫХ УСЛУГ', href: '#' },
//               { label: 'ПЛАТЕЖИ', href: '#' },
//               { label: 'О ПОРТАЛЕ', href: '#' },
//               { label: 'ПОМОЩЬ', href: '#' },
//             ].map((item) => (
//               <li key={item.label}>
//                 <a
//                   href={item.href}
//                   className="block px-3 py-2.5 text-white text-[12px] font-medium uppercase whitespace-nowrap hover:bg-[var(--gov-green-dark)] transition-colors"
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>
//     </header>
//   )
// }


'use client'

import { useState } from 'react'
import { Search, ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleUserClick = () => {
    window.location.href = '/cabinet'
  }

  return (
    <header className="bg-white border-b border-[var(--gov-border)]">
      {/* Top bar */}
      <div className="border-b border-[var(--gov-border)]">
        <div className="max-w-[1200px] mx-auto px-3 flex items-center justify-between h-8">
          {/* Language switcher */}
          <div className="flex items-center gap-0 text-[13px]">
            <button className="px-1.5 py-1 text-[var(--gov-gray)] hover:text-[var(--gov-green)] font-normal">ҚАЗ</button>
            <span className="text-[var(--gov-border)]">|</span>
            <button className="px-1.5 py-1 text-[var(--gov-green)] font-bold underline">РУС</button>
            <span className="text-[var(--gov-border)]">|</span>
            <button className="px-1.5 py-1 text-[var(--gov-gray)] hover:text-[var(--gov-green)] font-normal">ENG</button>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button className="text-[12px] text-[var(--gov-gray)] hover:text-[var(--gov-green)] transition-colors hidden sm:inline">
              Перейти в режим для слабовидящих
            </button>
            {/* User button */}
            <button 
              onClick={handleUserClick}
              className="flex items-center gap-1 bg-[var(--gov-green-dark)] text-white px-3 py-1.5 text-[12px] font-medium h-8 cursor-pointer"
            >
              <span className="w-4 h-4 rounded-full bg-white/30 flex items-center justify-center text-[10px]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
              </span>
              <span className="hidden sm:inline">АСАНОВ БАУЫРЖАН ИСЛАМОВИЧ</span>
              <ChevronDown size={12} className="ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Logo + search + phone */}
      <div className="border-b border-[var(--gov-border)]">
        <div className="max-w-[1200px] mx-auto px-3 py-2 flex items-center gap-4">
          {/* Logo link with image */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img 
              src="https://egov.kz/cms/sites/all/themes/egov_kz/html/images/logo-beta.png" 
              alt="Логотип"
              className="h-10 w-auto object-contain"
            />
            <div className="leading-tight ml-1 border-l border-[var(--gov-border)] pl-3 hidden sm:block">
              <div className="text-[12px] text-[var(--gov-gray)] leading-snug">Государственные услуги</div>
              <div className="text-[12px] text-[var(--gov-gray)] leading-snug">и информация онлайн</div>
            </div>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-lg">
            <div className="flex border border-[var(--gov-border)] bg-white overflow-hidden">
              <input
                type="text"
                placeholder="Поиск по порталу"
                className="flex-1 px-3 py-2 text-[13px] outline-none text-[var(--gov-text)] placeholder:text-[var(--gov-gray)]"
              />
              <button className="px-3 bg-white hover:bg-[var(--gov-green-light)] transition-colors border-l border-[var(--gov-border)]">
                <Search size={16} className="text-[var(--gov-green)]" />
              </button>
            </div>
          </div>

          {/* Phone/contact */}
          <div className="hidden lg:flex items-start gap-3 ml-auto shrink-0">
            <div className="text-right">
              <div className="text-[42px] font-bold text-[var(--gov-green-dark)] leading-none">1414</div>
              <div className="text-[24x] text-[var(--gov-green-dark)] mt-0.5">+7 7172 906 984</div>
            </div>
            <div className="text-[11px] text-[var(--gov-gray)] leading-relaxed pt-1">
              <div>Единый контакт-центр</div>
              <div>Звонок бесплатный</div>
              <div>Звонок платный</div>
              <div>для зарубежных звонков</div>
              <div className="text-blue-500 hover:underline cursor-pointer">(бесплатно через интернет)</div>
            </div>
          </div>

          <button
            className="lg:hidden ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Меню"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Main nav - green bar */}
      <nav className={`bg-[var(--gov-green)] ${mobileOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="max-w-[1200px] mx-auto px-3">
          <ul className="flex flex-col lg:flex-row">
            {[
              { label: 'ОТКРЫТОЕ ПРАВИТЕЛЬСТВО', href: 'https://open.egov.kz/' },
              { label: 'ЛИЧНЫЙ КАБИНЕТ', href: '/cabinet' },
              { label: 'РЕЕСТР ГОСУДАРСТВЕННЫХ УСЛУГ', href: 'https://egov.kz/cms/ru/articles/register_public_services' },
              { label: 'ПЛАТЕЖИ', href: 'https://egov.kz/cms/ru/online-services/for_citizen?filter=payments' },
              { label: 'О ПОРТАЛЕ', href: 'https://egov.kz/cms/information/about/help-elektronnoe-pravitelstvo' },
              { label: 'ПОМОЩЬ', href: 'https://egov.kz/cms/ru/information/help/instrukcii' },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block px-3 py-2.5 text-white text-[12px] font-medium uppercase whitespace-nowrap hover:bg-[var(--gov-green-dark)] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
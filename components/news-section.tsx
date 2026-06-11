// 'use client'

// import { ChevronLeft, ChevronRight } from 'lucide-react'

// const news = [
//   {
//     date: '8 июня 2026',
//     title: 'Заказать госномер автомобиля для юрлиц можно через портал eGov.kz',
//     excerpt: 'На портале электронного правительства eGov.kz автоматизирована услуга на получение государственных регистрационных номерных знаков для юридических лиц. ...',
//     img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82-11-06-2026%2016_59_02-dSmg4HjQTIEojlEQAWfzYzFLJGLAo4.jpg',
//     imgBg: '#1b5e20',
//     label: 'Заказать госномер автомобиля для юрлиц можно через портал eGov.kz',
//   },
//   {
//     date: '8 июня 2026',
//     title: 'Через elicense.kz теперь можно получить разрешения на грузоперевозки в Азербайджан, Турцию и Кыргызстан в электронном формате',
//     excerpt: 'Казахстанские грузоперевозчики теперь могут онлайн оформить электронное разрешение на въезд в Азербайджан, Турцию и Кыргызстан ...',
//     img: null,
//     imgBg: '#1b5e20',
//     label: 'Через elicense.kz можно получить разрешения на грузоперевозки в Азербайджан, Турцию и Кыргызстан в электронном формате',
//   },
//   {
//     date: '28 мая 2026',
//     title: 'С 1 июня техпаспорта на недвижимость и кадастровые паспорта будут оформляться только онлайн',
//     excerpt: 'На портале eGov.kz обновлены государственные услуги по выдаче технического паспорта на объекты недвижимости, а также дубликата кадастрового паспорта ...',
//     img: null,
//     imgBg: '#2e7d32',
//     label: 'С 1 июня техпаспорта на недвижимость и кадастровые паспорта будут оформляться только онлайн',
//   },
//   {
//     date: '26 мая 2026',
//     title: 'ИНФОРМАЦИОННОЕ СООБЩЕНИЕ',
//     excerpt: 'В 2026 году прием заявлений в 1 класс переходит на Национальную образовательную платформу OQU – oqu.edu.kz. ...',
//     img: null,
//     imgBg: '#388e3c',
//     label: 'ИНФОРМАЦИОННОЕ СООБЩЕНИЕ',
//     isInfo: true,
//   },
// ]

// function NewsCard({ item }: { item: typeof news[0] }) {
//   return (
//     <div className="flex flex-col">
//       {/* Image */}
//       <div
//         className="w-full h-[140px] flex items-end relative overflow-hidden"
//         style={{ backgroundColor: item.imgBg }}
//       >
//         {/* egov watermark text */}
//         <div className="absolute inset-0 flex flex-col justify-start p-3">
//           <div className="text-white/60 text-[10px] font-medium mb-1">e<span className="text-[#4caf50]">.</span>gov</div>
//           {item.isInfo ? (
//             <div className="text-white font-bold leading-tight">
//               <div className="text-[11px] text-white/70 mb-1">АҚПАРАТТЫҚ<br/>ХАБАРЛАМА</div>
//               <div className="text-[13px]">ИНФОРМАЦИОННОЕ<br/>СООБЩЕНИЕ</div>
//               <div className="text-[11px] text-white/70 mt-1">INFORMATION<br/>STATEMENT</div>
//             </div>
//           ) : (
//             <div className="text-white text-[12px] font-medium leading-snug line-clamp-4">
//               {item.label}
//             </div>
//           )}
//         </div>
//       </div>
//       {/* Text */}
//       <div className="pt-2 pb-3 flex-1">
//         <div className="text-[11px] text-[var(--gov-gray)] mb-1">{item.date}</div>
//         <a href="#" className="text-[13px] text-[var(--gov-green)] hover:underline font-medium leading-snug block mb-1">
//           {item.title}
//         </a>
//         <p className="text-[12px] text-[var(--gov-gray)] leading-relaxed line-clamp-3">{item.excerpt}</p>
//       </div>
//     </div>
//   )
// }

// export function NewsSection() {
//   return (
//     <section className="bg-[var(--gov-light)] border-b border-[var(--gov-border)]">
//       <div className="max-w-[1200px] mx-auto px-3 py-5">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-1">
//           <h2 className="text-[14px] font-bold text-[var(--gov-green-dark)] uppercase tracking-wide">НОВОСТИ ПОРТАЛА</h2>
//           <div className="flex items-center gap-2">
//             <button className="text-[var(--gov-gray)] hover:text-[var(--gov-green)]" aria-label="Назад">
//               <ChevronLeft size={18} />
//             </button>
//             <span className="w-1.5 h-1.5 rounded-full bg-[var(--gov-green)]" />
//             <span className="w-1.5 h-1.5 rounded-full bg-[var(--gov-border)]" />
//             <span className="w-1.5 h-1.5 rounded-full bg-[var(--gov-border)]" />
//             <button className="text-[var(--gov-gray)] hover:text-[var(--gov-green)]" aria-label="Вперед">
//               <ChevronRight size={18} />
//             </button>
//           </div>
//         </div>
//         <div className="mb-3">
//           <a href="#" className="text-[12px] text-[var(--gov-gray)] hover:text-[var(--gov-green)] hover:underline">Архив новостей</a>
//         </div>

//         {/* News grid - 4 columns */}
//         <div className="grid grid-cols-4 gap-4">
//           {news.map((item, i) => (
//             <NewsCard key={i} item={item} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

const news = [
  {
    date: '8 июня 2026',
    title: 'Заказать госномер автомобиля для юрлиц можно через портал eGov.kz',
    excerpt: 'На портале электронного правительства eGov.kz автоматизирована услуга на получение государственных регистрационных номерных знаков для юридических лиц. ...',
    img: 'https://egov.kz/cms/sites/default/files/frontpage_news/rus_12.jpg',
    label: 'Заказать госномер автомобиля для юрлиц можно через портал eGov.kz',
  },
  {
    date: '8 июня 2026',
    title: 'Через elicense.kz теперь можно получить разрешения на грузоперевозки в Азербайджан, Турцию и Кыргызстан в электронном формате',
    excerpt: 'Казахстанские грузоперевозчики теперь могут онлайн оформить электронное разрешение на въезд в Азербайджан, Турцию и Кыргызстан ...',
    img: 'https://egov.kz/cms/sites/default/files/frontpage_news/rus_11.jpg',
    label: 'Через elicense.kz можно получить разрешения на грузоперевозки в Азербайджан, Турцию и Кыргызстан в электронном формате',
  },
  {
    date: '28 мая 2026',
    title: 'С 1 июня техпаспорта на недвижимость и кадастровые паспорта будут оформляться только онлайн',
    excerpt: 'На портале eGov.kz обновлены государственные услуги по выдаче технического паспорта на объекты недвижимости, а также дубликата кадастрового паспорта ...',
    img: 'https://egov.kz/cms/sites/default/files/frontpage_news/1_mausymnan_bastap_zhylzhymaytyn_mulikke_arnalgan_tehnikalykpasporttar_men_kadastrlyk_pasporttardyn_telnuskalary_tek_onlayn_rsimdel1.jpg',
    label: 'С 1 июня техпаспорта на недвижимость и кадастровые паспорта будут оформляться только онлайн',
  },
  {
    date: '26 мая 2026',
    title: 'ИНФОРМАЦИОННОЕ СООБЩЕНИЕ',
    excerpt: 'В 2026 году прием заявлений в 1 класс переходит на Национальную образовательную платформу OQU – oqu.edu.kz. ...',
    img: 'https://egov.kz/cms/sites/default/files/frontpage_news/handled_egov_kz_informacionnoe_soobshchenie_oqu_1_1080_1920_80.jpg',
    label: 'ИНФОРМАЦИОННОЕ СООБЩЕНИЕ',
    isInfo: true,
  },
]

function NewsCard({ item }: { item: typeof news[0] }) {
  return (
    <div className="flex flex-col">
      {/* Image */}
      <div className="w-full h-[140px] relative overflow-hidden bg-[#f0f0f0]">
        {item.img ? (
          <img 
            src={item.img} 
            alt={item.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Заглушка, если изображение не загрузилось
              e.currentTarget.src = '/placeholder-news.jpg'
            }}
          />
        ) : (
          <div className="w-full h-full bg-[var(--gov-green-dark)] flex items-center justify-center">
            <span className="text-white/40 text-xs">Нет фото</span>
          </div>
        )}
        
      </div>
      
      {/* Text */}
      <div className="pt-2 pb-3 flex-1">
        <div className="text-[11px] text-[var(--gov-gray)] mb-1">{item.date}</div>
        <a href="#" className="text-[13px] text-[var(--gov-green)] hover:underline font-medium leading-snug block mb-1">
          {item.title}
        </a>
        <p className="text-[12px] text-[var(--gov-gray)] leading-relaxed line-clamp-3">{item.excerpt}</p>
      </div>
    </div>
  )
}

export function NewsSection() {
  return (
    <section className="bg-[var(--gov-light)] border-b border-[var(--gov-border)]">
      <div className="max-w-[1200px] mx-auto px-3 py-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-[14px] font-bold text-[var(--gov-green-dark)] uppercase tracking-wide">НОВОСТИ ПОРТАЛА</h2>
          <div className="flex items-center gap-2">
            <button className="text-[var(--gov-gray)] hover:text-[var(--gov-green)]" aria-label="Назад">
              <ChevronLeft size={18} />
            </button>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gov-green)]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gov-border)]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gov-border)]" />
            <button className="text-[var(--gov-gray)] hover:text-[var(--gov-green)]" aria-label="Вперед">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div className="mb-3">
          <a href="#" className="text-[12px] text-[var(--gov-gray)] hover:text-[var(--gov-green)] hover:underline">Архив новостей</a>
        </div>

        {/* News grid - 4 columns */}
        <div className="grid grid-cols-4 gap-4">
          {news.map((item, i) => (
            <NewsCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
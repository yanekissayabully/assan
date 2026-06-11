



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
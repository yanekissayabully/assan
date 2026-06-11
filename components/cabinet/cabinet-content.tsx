


'use client'

import { RefreshCw, ChevronDown, Pencil, X } from 'lucide-react'

/* ── helpers ─────────────────────────────────────────── */

function SectionHeader({
  title,
  hasServices,
  updated = '11.06.26',
  hasDropdown,
  extra,
}: {
  title: string
  hasServices?: boolean
  updated?: string
  hasDropdown?: boolean
  extra?: React.ReactNode
}) {
  return (
    <div className="mb-1">
      <div className="flex items-center gap-2 flex-wrap">
        <h2 className="text-[15px] font-normal text-[#1e8a62]">
          {title}
          {hasServices && <span className="text-[#1e8a62]"> | Услуги</span>}
        </h2>
        {hasDropdown && <ChevronDown size={14} className="text-[#1e8a62] cursor-pointer" />}
        {extra}
        <RefreshCw size={12} className="text-[var(--gov-gray)] cursor-pointer hover:text-[#1e8a62]" />
        {updated && <span className="text-[11px] text-[var(--gov-gray)]">Обновлено: {updated}</span>}
      </div>
    </div>
  )
}

function Card({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="border border-[var(--gov-border)] bg-white mb-2">
      {title && (
        <div className="px-3 py-2 border-b border-[var(--gov-border)] bg-[#fafafa]">
          <span className="text-[13px] font-medium text-[var(--gov-text)]">{title}</span>
        </div>
      )}
      <div className="px-3 py-2.5">{children}</div>
    </div>
  )
}

function Field({ label, value, teal }: { label: string; value?: string; teal?: boolean }) {
  return (
    <div className="text-[13px] leading-relaxed">
      <span className="font-medium text-[#003365]">{label}:</span>{' '}
      {value && <span className={teal ? 'text-[#003365]' : 'text-[#003365]'}>{value}</span>}
    </div>
  )
}

function WrongDataNote() {
  return (
    <div className="text-[12px] text-[var(--gov-gray)] mt-2 ml-1">
      При обнаружении неверных данных нажмите{' '}
      <a href="#" className="text-[#1e8a62] underline">сюда</a>
    </div>
  )
}

function Separator() {
  return <div className="text-[#1e8a62]/30 text-[11px] my-4 ml-1 tracking-widest">◇ ◇ ◇</div>
}

function ExpiryBar({
  start,
  end,
  years,
  position = 40,
}: {
  start: string
  end: string
  years: string
  position?: number
}) {
  return (
    <div className="mt-2 mb-1">
      <div className="flex justify-between text-[11px] mb-1">
        <span className="text-[var(--gov-gray)]">{start}</span>
        <span className="text-[var(--gov-gray)]">{years}</span>
        <span className="text-[#e53935]">{end}</span>
      </div>
      <div
        className="relative h-2 rounded-full overflow-hidden"
        style={{ background: 'linear-gradient(to right, #4caf50, #ffb300, #e53935)' }}
      >
        <div
          className="absolute top-0 w-2 h-2 rounded-full bg-white border-2 border-[#1e8a62]"
          style={{ left: `calc(${position}% - 4px)` }}
        />
      </div>
      <div
        className="text-[11px] text-[var(--gov-gray)] mt-1"
        style={{ marginLeft: `${position}%` }}
      >
        Сегодня
      </div>
    </div>
  )
}

/* ── main component ──────────────────────────────────── */

export function CabinetContent() {
  return (
    <div className="flex-1 px-3 sm:px-6 py-4 max-w-full lg:max-w-[900px]">

      {/* Personal header */}
      <div className="flex items-center gap-2 text-[12px] text-[var(--gov-gray)] mb-3">
        <RefreshCw size={12} />
        <span>6 минут назад</span>
      </div>

      <h1 className="text-[18px]  font-normal text-[#1e8a62] mb-3 uppercase tracking-wide">
        АСАНОВ БАУЫРЖАН ИСЛАМОВИЧ
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 mb-2">
        <div>
          <Field label="ИИН" value="9705100300400" />
          <Field label="Дата рождения" value="10 мая 1997" />
          <Field label="Гражданство" value="Казахстан" />
          <Field label="Национальность" value="Казах" />
          <Field label="Пол" value="Мужской" />
        </div>
        <div>
          <div className="flex items-center gap-2 text-[13px]">
            <span className="font-medium text-[#003365]">E-mail:</span>
            <span className="text-[#003365]">mr.baur001@gmail.com</span>
            <button className="text-[var(--gov-gray)] hover:text-[#003365]">
              <Pencil size={12} />
            </button>
          </div>
          <div className="flex items-center gap-2 text-[13px] mt-1">
            <span className="font-medium text-[#003365]">Телефон:</span>
            <span className="text-[#003365]">+7 (705) 807-44-57</span>
            <button className="text-[var(--gov-gray)] hover:text-[#003365]">
              <Pencil size={12} />
            </button>
            <button className="text-[#e53935]">
              <X size={12} />
            </button>
          </div>
          <div className="text-[11px] text-[var(--gov-gray)] mt-1 leading-snug max-w-full sm:max-w-[280px]">
            На указанный номер Вы будете получать уведомления от egov.kz и сведения о наложенных административных штрафах
          </div>
        </div>
      </div>

      <Separator />

      {/* 1. Документы */}
      <div id="documents">
        <SectionHeader title="Документы, удостоверяющие личность" />
        <Card title="УДОСТОВЕРЕНИЕ РК № 063003209">
          <Field label="Орган выдачи" value="Министерство Внутренних Дел РК" teal />
          <ExpiryBar start="2 июня 2026" end="1 июня 2036" years="10 лет до истечения" position={2} />
        </Card>
        <Card title="ПАСПОРТ РК N13970041">
          <Field label="Орган выдачи" value="Министерство Внутренних Дел РК" teal />
          <ExpiryBar start="17 ноября 2021" end="16 ноября 2031" years="5 лет до истечения" position={45} />
        </Card>
        <WrongDataNote />
        <Separator />
      </div>

      {/* 2. Адреса */}
      <div id="address">
        <div className="mb-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-[15px] font-normal text-[#1e8a62]">Адреса</h2>
            <RefreshCw size={12} className="text-[var(--gov-gray)] cursor-pointer hover:text-[#1e8a62]" />
            <a href="#" className="text-[13px] text-[var(--gov-gray)] hover:text-[#1e8a62] hover:underline">
              Моё местоположение
            </a>
            <span className="text-[11px] text-[var(--gov-gray)]">Обновлено: 11.06.26</span>
          </div>
        </div>
        <Card>
          <Field label="Место рождения" value="КАЗАХСТАН , ОБЛАСТЬ ЖЕТІСУ область , ТАЛДЫКОРГАН" />
        </Card>
        <Card>
          <div className="text-[13px] font-medium text-[#1e8a62] mb-1">Адрес прописки:</div>
          <div className="text-[13px] text-[#003365] leading-relaxed">
            Республика Казахстан, город Алматы, район Бостандыкский, улица Сатпаева дом №133/3, Квартира №18 ( РКА 1202100129625350 )
          </div>
          <Field label="Дата регистрации" value="10 июня 2021" />
        </Card>
        <WrongDataNote />
        <Separator />
      </div>

      {/* 3. Водительское */}
      <div id="driver">
        <SectionHeader title="Водительское удостоверение" hasServices hasDropdown updated="11.06.26" />
        <Card>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[14px] font-medium text-[var(--gov-text)]">AN №924494</span>
            <span className="text-[13px] text-[#f9a825]">★ ★ В В1 ★ ★ ★ ★ ★ ★ ★ ★ ★ ★</span>
          </div>
          <Field label="Орган выдачи" value="Министерство Внутренних дел Республики Казахстан" teal />
          <ExpiryBar start="9 июля 2024" end="8 июля 2034" years="8 лет до истечения" position={15} />
        </Card>
        <WrongDataNote />
        <Separator />
      </div>

      {/* 4. Брак */}
      <div id="marriage">
        <SectionHeader title="Сведения о заключении брака" hasServices hasDropdown />
        <p className="text-[13px] text-[var(--gov-gray)] ml-1">Вы не состоите в браке, либо сведения о регистрации брака отсутствуют в информационной системе «ЗАГС» (в случае, если брак зарегистрирован до 1 июня 2008 года).</p>
        <WrongDataNote />
        <Separator />
      </div>

      {/* 5. Социальный статус */}
      <div id="social-status">
        <SectionHeader title="Социальный статус" />
        <p className="text-[13px] text-[var(--gov-gray)] ml-1">Вам не присвоен социальный статус.</p>
        <Separator />
      </div>

      {/* 6. Имущество */}
      <div id="property">
        <SectionHeader title="Имущество" hasServices hasDropdown />
        <p className="text-[13px] text-[var(--gov-gray)] ml-1">Вы не владеете имуществом.</p>
        <WrongDataNote />
        <div className="mt-3 flex items-center gap-2">
          <span className="text-[14px] text-[#1e8a62]">Земельные участки</span>
          <RefreshCw size={12} className="text-[var(--gov-gray)]" />
          <span className="text-[11px] text-[var(--gov-gray)]">Обновлено: 11.06.26</span>
        </div>
        <Separator />
      </div>

      {/* 7. Участие в юридических лицах */}
      <div id="legal">
        <div className="mb-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-[15px] font-normal text-[#1e8a62]">
              Участие в юридических лицах (учредители, граждане - инициаторы, участники)
            </h2>
            <RefreshCw size={12} className="text-[var(--gov-gray)] cursor-pointer" />
          </div>
          <div className="text-[11px] text-[var(--gov-gray)]">Обновлено: 11.06.26</div>
        </div>
        <p className="text-[13px] text-[var(--gov-gray)] ml-1">Вы не являетесь участником Юридического лица.</p>
        <Separator />
      </div>

      {/* 8. Авто */}
      <div id="auto">
        <SectionHeader title="Авто" hasServices hasDropdown />
        <Card title="HYUNDAI TUCSON · 397BSI02">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0.5">
            <Field label="Год выпуска" value="2025" />
            <Field label="VIN код" value="MXHJC81EDSK022944" teal />
            <Field label="Технический паспорт" value="AJ99092410" />
            <Field label="Номер кузова" value="MXHJC81EDSK022944" />
            <Field label="Модель" value="HYUNDAI TUCSON" />
            <Field label="Цвет" value="БЕЛЫЙ" />
            <Field label="Объем двигателя" value="2497" />
          </div>
        </Card>
        <WrongDataNote />
        <Separator />
      </div>

      {/* 9. Лицензии */}
      <div id="licenses">
        <SectionHeader title="Лицензии и разрешительные документы" />
        <p className="text-[13px] text-[var(--gov-gray)] ml-1">У вас отсутствуют лицензии.</p>
        <Separator />
      </div>

      {/* 10. Реестр должников */}
      <div id="debtors">
        <SectionHeader title="Реестр должников" />
        <p className="text-[13px] text-[var(--gov-gray)] ml-1">Вы отсутствуете в реестре должников</p>
        <Separator />
      </div>

      {/* 11. Медицинские записи */}
      <div id="medical">
        <SectionHeader title="Медицинские записи" hasServices hasDropdown />
        <Card title="Общая информация">
          <Field label="ФИО" value="АСАНОВ БАУЫРЖАН ИСЛАМОВИЧ" />
          <Field label="Наименование медицинской организации" value='ТОО "МЦ «Даримет»"' teal />
          <Field label="Участковый врач" value="АБИТОВ ЕРКИН БАХЫТБЕКОВИЧ" />
          <Field label="Номер участка" value="6 общей практики" />
          <Field label="Дата рождения" value="10.05.1992" />
          <Field label="Пол" value="М" />
          <Field label="Дата прикрепления" value="11.09.25" />
          <Field label="Причина прикрепления" value="Переезд" />
        </Card>
        <Card title="Диспансерный учет">
          <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="text-left border-b border-[var(--gov-border)]">
                <th className="pb-1 font-medium text-[var(--gov-text)] w-32">Дата взятия</th>
                <th className="pb-1 font-medium text-[var(--gov-text)]">Диагноз</th>
              </tr>
            </thead>
            <tbody>
              {[
                'Не состоит на диспансерном учете в наркологической организации',
                'Не состоит на диспансерном учете в психоневрологической организации',
                'Не состоит на диспансерном учете в противотуберкулезной организации',
              ].map((diag, i) => (
                <tr key={i} className="border-b border-[var(--gov-border)] last:border-0">
                  <td className="py-1.5 text-[var(--gov-gray)]" />
                  <td className="py-1.5 text-[#1e8a62]">{diag}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </Card>
        <WrongDataNote />
        <Separator />
      </div>

      {/* 12. Трудовая деятельность */}
      <div id="work">
        <SectionHeader title="Трудовая деятельность" />
        <Card title="Трудовой договор № 13">
          <div className="text-[13px] font-medium text-[#1e8a62]">Наименование работодателя:</div>
          <div className="text-[13px] text-[#1e8a62] mb-1">
            Товарищество с ограниченной ответственностью "MultiBRAND COMPANY"
          </div>
          <Field label="БИН работодателя" value="120140017418" />
          <Field label="Срок трудового договора" value="На определенный срок не менее одного года" />
          <Field label="Должность" value="РУКОВОДИТЕЛЬ СЛУЖБЫ МАРКЕТИНГА" />
          <Field label="Штатная должность" value="Директор по маркетингу" />
          <Field label="Место выполнения работ" value="пр. Назарбаева 223" />
          <Field label="Рабочее время" value="Нормальный" />
        </Card>
        <WrongDataNote />
        <Separator />
      </div>

      {/* 13. Воинская служба */}
      <div id="military">
        <SectionHeader title="Воинская служба" />
        <Card title="Сведения об отношении к воинской службе">
          <Field label="Статус" value="Военнообязанный" />
          <Field label="Наименование МОВУ" value="Управление по делам обороны Бостандыкского района города Алматы" teal />
        </Card>
        <Card title="Сведения об отсрочке от воинского призыва">
          <Field label="Наименование МОВУ" value="Управление по делам обороны Бостандыкского района города Алматы" teal />
          <Field label="Статус" value="Военнообязанный" />
        </Card>
        <Card>
          <p className="text-[13px] font-medium text-[#1e8a62] leading-relaxed mb-3">
            Для получения сведений о воинском учете (о месте состояния на воинском учете, отношении и степени годности к воинской службе, периодах прохождения воинской службы, предоставлении отсрочек (освобождении) от призыва на воинскую службу) нажмите на кнопку
            {' '}
            <button className="bg-[#1e8a62] text-white text-[12px] px-4 py-1.5 ml-2 hover:bg-[#166d4f] transition-colors align-middle">
              Скачать справку
            </button>
          </p>
        </Card>
        <Card title="Примечание">
          <p className="text-[13px] text-[#003365]">
            В случае отсутствия Ваших сведений, просим обратиться за государственной услугой Актуализация (корректировка) сведений о воинской службе
          </p>
        </Card>
        <WrongDataNote />
        <Separator />
      </div>

      {/* 14. Пенсия */}
      <div id="pension">
        <SectionHeader title="Сведения о пенсионных отчислениях и начислениях ЕНПФ" hasServices hasDropdown />
        <Card title="Информация о пенсионных накоплениях на 11.06.2026">
          <Field label="Сумма ОПВР" value="98,511.78" />
          <Field label="Сумма пенсионных накоплений за счет ОПВ" value="6,779,909.28" />
          <Field label="Порог минимальной достаточности, соответствующий возрасту вкладчика (получателя)" value="11,130,000.00" />
          <div className="text-[13px] font-medium text-[#1e8a62] leading-snug mt-0.5">
            Пенсионные накопления за счет ОПВ, находящиеся в доверительном управлении НБ РК, доступные для осуществления ЕПВ в целях улучшения жилищных условий и (или) оплаты лечения:
          </div>
          <div className="text-[13px] text-[#003365] mb-0.5">0.00</div>
          <div className="text-[13px] font-medium text-[#1e8a62] leading-snug">
            Пенсионные накопления, находящиеся в доверительном управлении НБ РК, доступные для передачи в доверительное управление УИП:
          </div>
          <Field label="за счет ОПВ" value="3,389,954.64" />
          <p className="text-[13px] text-[#003365] mt-2">
            Для получения подробной информации о состоянии пенсионных накоплений рекомендуем обратиться на сайт либо мобильное приложение ЕНПФ.
          </p>
        </Card>
        <Separator />
      </div>

      {/* 15. ИП */}
      <div id="ip">
        <SectionHeader title="Статус индивидуального предпринимателя" hasServices hasDropdown />
        <p className="text-[13px] text-[var(--gov-gray)] ml-1">Вы не являетесь индивидуальным предпринимателем.</p>
        <Separator />
      </div>

      {/* 16. ОСМС */}
      <div id="osms">
        <SectionHeader title="Обязательное социальное медицинское страхование" />
        <Card>
          <div className="text-[13px] leading-relaxed">
            <span className="font-medium text-[#1e8a62]">Статус:</span>{' '}
            <span className="text-[#003365]">Незастрахован</span>
          </div>
          <Field label="Вид последнего платежа" value="Взнос на обязательное социальное медицинское страхование (КНП = 122)" />
          <Field label="Плательщик взноса" value="ТОО Galamat Media" teal />
          <Field label="Наименование организации" value="ТОО Galamat Media" teal />
          <Field label="БИН/ИИН организации" value="170340019926" />
          <Field label="Дата направления последнего платежа" value="20 мая 2026" />
          <Field label="Сумма последнего платежа" value="34000.00" />
          <Field label="Дата поступления" value="21 мая 2026" />
          <Field label="Период платежа" value="042026" />
          <Field label="Период, за..." value="07.2025, 08.2025, 10.2025, 06.2025, 09.2025" />
        </Card>
        <Separator />
      </div>

      {/* 17. Очередь на жилье */}
      <div id="housing">
        <SectionHeader title="Очередь на жилье" hasDropdown />
        <a href="#" className="text-[13px] text-[#1e8a62] underline ml-1">
          Проверить номер очереди по ИИН
        </a>
        <Separator />
      </div>

      {/* 18. Административные штрафы */}
      <div id="fines">
        <SectionHeader title="Административные штрафы" />
        <p className="text-[13px] text-[var(--gov-gray)] ml-1">
          На момент проверки сведения об административных штрафах отсутствуют
        </p>
        <Separator />
      </div>

      {/* 19. Государственная служба */}
      <div id="gov-service">
        <SectionHeader title="Государственная служба" hasServices hasDropdown />
        <p className="text-[13px] text-[var(--gov-gray)] ml-1">{'Сведения по Вам отсутствуют в ИС «Е-кызмет»'}</p>
        <Separator />
      </div>

      {/* 20. Платежные карты */}
      <div id="cards">
        <SectionHeader title="Мои платежные карты" />
        <div className="border border-[var(--gov-border)] bg-white px-3 py-2 mb-2">
          <a href="#" className="text-[13px] text-[var(--gov-gray)] hover:underline">Регистрация карт</a>
          <div className="mt-2 h-[1px] w-full bg-[var(--gov-border)]" />
        </div>
        <Separator />
      </div>

      {/* 21. Взаимодействие с Правительством */}
      <div id="gov-interaction">
        <h2 className="text-[15px] font-normal text-[#1e8a62] mb-2">Взаимодействие с Правительством</h2>
        <ul className="space-y-1 ml-2">
          {[
            'Законодательство',
            'Электронное лицензирование',
            'Кабинет налогоплательщика',
            'Открытое правительство',
            'Официальная блог-платформа руководителей государственных органов',
            'Обращение граждан',
            'Бронирование очереди в НАО ГК «Правительство для граждан»',
          ].map((link) => (
            <li key={link} className="flex items-start gap-1.5">
              <span className="text-[#1e8a62] text-[13px] mt-0.5">○</span>
              <a href="#" className="text-[13px] text-[#1e8a62] hover:underline">{link}</a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}
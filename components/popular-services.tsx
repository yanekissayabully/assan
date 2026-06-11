const col1 = [
  'Справка о несудимости',
  'Предоставление сведений об отсутствии (наличии) недвижимого имущества для юридических лиц',
  'Информация о начислениях ЕНПФ',
  'Предоставление сведений о зарегистрированном юридическом лице, филиале или представительстве',
  'Предоставление сведений о наличии филиалов и представительств юридического лица',
  'Предоставление сведений об участии юридического лица в других юридических лицах',
]

const col2 = [
  'Получение справки о признании юридического лица бездействующим юридическим лицом или причастности его участников к бездействующим юридическим лицам',
  'Предоставление сведений о всех регистрационных действиях юридического лица',
  'Предоставление сведений о зарегистрированном юридическом лице на заданную дату',
  'Предоставление сведений о последних внесенных изменениях в учредительные документы',
  'Предоставление сведений о наложенных обременениях (арест) на долю юридического лица',
]

const col3 = [
  'Справка Ф-6 (о наличии недвижимости)',
  'Получение свидетельства о рождении ребенка',
  'Выплаты на рождение ребенка',
  'Получение справки о пенсионных отчислениях',
  'Справка об уточнении (присвоении/упразднении) адреса недвижимости',
  'Сервис получения справок третьими лицами',
  'Выдача справки по назначению АСП',
  'Выдача справки о регистрации юридического лица',
]

function BulletItem({ label, color = 'green' }: { label: string; color?: string }) {
  return (
    <li className="flex items-start gap-2 py-1.5 border-b border-[var(--gov-border)] last:border-b-0">
      <span
        className="mt-1.5 w-2 h-2 rounded-full shrink-0"
        style={{ backgroundColor: color === 'green' ? 'var(--gov-green)' : color === 'dark' ? 'var(--gov-green-dark)' : 'var(--gov-green)' }}
      />
      <a href="#" className="text-[13px] text-[var(--gov-text)] hover:text-[var(--gov-green)] leading-snug">
        {label}
      </a>
    </li>
  )
}

export function PopularServices() {
  return (
    <div>
      <h2 className="text-[13px] font-bold text-[var(--gov-green-dark)] uppercase mb-2.5 tracking-wide">
        ПОПУЛЯРНЫЕ УСЛУГИ
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:border-l border-dashed border-[#b0c8a0]">
        <div className="md:border-r border-dashed border-[#b0c8a0] md:px-3 py-0">
          <ul>{col1.map((item, i) => <BulletItem key={i} label={item} />)}</ul>
        </div>
        <div className="md:border-r border-dashed border-[#b0c8a0] md:px-3 py-0">
          <ul>{col2.map((item, i) => <BulletItem key={i} label={item} />)}</ul>
        </div>
        <div className="md:px-3 py-0">
          <ul>{col3.map((item, i) => <BulletItem key={i} label={item} />)}</ul>
        </div>
      </div>
    </div>
  )
}


// import { CabinetHeader } from '@/components/cabinet/cabinet-header'
// import { CabinetSidebar } from '@/components/cabinet/cabinet-sidebar'
// import { CabinetContent } from '@/components/cabinet/cabinet-content'

// export const metadata = {
//   title: 'Личный кабинет — eGov.kz',
//   description: 'Личный кабинет гражданина на портале eGov.kz',
// }

// export default function CabinetPage() {
//   return (
//     <div className="min-h-screen bg-[var(--cab-bg)] flex flex-col">
//       <CabinetHeader />
//       <div className="flex flex-1">
//         <CabinetSidebar />
//         <main className="flex-1 overflow-auto">
//           <CabinetContent />
//         </main>
//       </div>
//     </div>
//   )
// }



import { CabinetHeader } from '@/components/cabinet/cabinet-header'
import { CabinetSidebar } from '@/components/cabinet/cabinet-sidebar'
import { CabinetContent } from '@/components/cabinet/cabinet-content'

export const metadata = {
  title: 'Личный кабинет — eGov.kz',
  description: 'Личный кабинет гражданина на портале eGov.kz',
}

export default function CabinetPage() {
  return (
    <div className="min-h-screen bg-[var(--cab-bg)] flex flex-col ">
      <CabinetHeader />
      <div className="flex flex-1 px-8 md:px-8 lg:px-10">
        <CabinetSidebar />
        <main className="flex-1 overflow-auto">
          <CabinetContent />
        </main>
      </div>
    </div>
  )
}
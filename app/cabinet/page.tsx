'use client'

import { useState } from 'react'
import { CabinetHeader } from '@/components/cabinet/cabinet-header'
import { CabinetSidebar } from '@/components/cabinet/cabinet-sidebar'
import { CabinetContent } from '@/components/cabinet/cabinet-content'
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'

export default function CabinetPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[var(--cab-bg)] flex flex-col">
      <CabinetHeader onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1 px-3 sm:px-6 lg:px-10 relative">
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <CabinetSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 min-w-0 overflow-auto">
          <CabinetContent />
        </main>
      </div>
    </div>
  )
}
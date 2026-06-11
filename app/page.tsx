import { Header } from '@/components/header'
import { ServicesNav } from '@/components/services-nav'
import { QuickServices } from '@/components/quick-services'
import { PopularServices } from '@/components/popular-services'
import { NewsSection } from '@/components/news-section'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--gov-light)]">
      <Header />
      <ServicesNav />

      <main className="flex-1">
        {/* СЕРВИСЫ + ПОПУЛЯРНЫЕ УСЛУГИ side by side */}
        <div className="max-w-[1200px] mx-auto px-3 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-start">
            {/* Left: Quick Services — fixed narrow width matching screenshot */}
            <div className="w-full md:w-[280px] shrink-0">
              <QuickServices />
            </div>
            {/* Right: Popular Services — takes remaining width */}
            <div className="flex-1 min-w-0">
              <PopularServices />
            </div>
          </div>
        </div>

        {/* News Section full width */}
        <NewsSection />
      </main>

      <Footer />
    </div>
  )
}

import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Vision from './components/Vision'
import LivePortfolio from './components/LivePortfolio'
import CoreModules from './components/CoreModules'
import BTCStrategy from './components/BTCStrategy'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Vision />
      
      {/* 实时投资组合展示 - 移到更靠前的位置 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-3">
              实时投资表现
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              透明展示我们的 ADA 持仓情况和投资收益，实时更新，数据可验证
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <LivePortfolio />
          </div>
        </div>
      </section>
      
      <CoreModules />
      <BTCStrategy />
      <Footer />
    </main>
  )
}

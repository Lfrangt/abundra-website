import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Vision from './components/Vision'
import CoreModules from './components/CoreModules'
import BTCStrategy from './components/BTCStrategy'
import LivePortfolio from './components/LivePortfolio'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Vision />
      <CoreModules />
      
      {/* 实时投资组合展示 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              实时投资表现
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              透明展示我们的 ADA 持仓情况和投资收益，实时更新，数据可验证
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <LivePortfolio />
          </div>
        </div>
      </section>
      
      <BTCStrategy />
      <Footer />
    </main>
  )
}

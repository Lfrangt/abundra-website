import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Vision from './components/Vision'
import CoreModules from './components/CoreModules'
import BTCStrategy from './components/BTCStrategy'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Vision />
      <CoreModules />
      <BTCStrategy />
      <Footer />
    </main>
  )
}

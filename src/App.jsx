import { lazy, Suspense } from 'react'
import Scene3D from './components/Scene3D'
import HeroSection from './components/HeroSection'

const FeaturesSection = lazy(() => import('./components/FeaturesSection'))
const ContactSection = lazy(() => import('./components/ContactSection'))

export default function App() {
  return (
    <div className="relative">
      <Scene3D />
      <main className="relative z-10">
        <HeroSection />
        <Suspense fallback={<div className="min-h-screen" />}>
          <FeaturesSection />
          <ContactSection />
        </Suspense>
      </main>
    </div>
  )
}

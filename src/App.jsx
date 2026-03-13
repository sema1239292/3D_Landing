import { lazy, Suspense, useState, useCallback } from 'react'
import Scene3D from './components/Scene3D'
import HeroSection from './components/HeroSection'
import ContactModal from './components/ContactModal'
import TelegramFloatingButton from './components/TelegramFloatingButton'

const FeaturesSection = lazy(() => import('./components/FeaturesSection'))
const ContactSection = lazy(() => import('./components/ContactSection'))

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  return (
    <div className="relative">
      <Scene3D />
      <main className="relative z-10">
        <HeroSection onOpenModal={openModal} />
        <Suspense fallback={<div className="min-h-screen" />}>
          <FeaturesSection />
          <ContactSection />
        </Suspense>
      </main>
      <ContactModal isOpen={modalOpen} onClose={closeModal} />
      <TelegramFloatingButton />
    </div>
  )
}

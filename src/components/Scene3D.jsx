import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import FloatingLogo from './FloatingLogo'
import useMousePosition from '../hooks/useMousePosition'

export default function Scene3D() {
  const mouse = useMousePosition()

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        <Suspense fallback={null}>
          <FloatingLogo mouse={mouse} />
          <Environment preset="city" />
        </Suspense>

        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.4}
          blur={2}
          scale={10}
        />
      </Canvas>
    </div>
  )
}

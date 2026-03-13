import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import FloatingLogo from './FloatingLogo'
import Particles from './Particles'
import CameraRig from './CameraRig'
import useMousePosition from '../hooks/useMousePosition'

export default function Scene3D() {
  const mouse = useMousePosition()

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#050510']} />
        <fog attach="fog" args={['#050510', 5, 15]} />

        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-3, 2, 4]} intensity={0.6} color="#7c3aed" />
        <pointLight position={[3, -2, -4]} intensity={0.4} color="#4f46e5" />

        <Suspense fallback={null}>
          <CameraRig mouse={mouse} />
          <FloatingLogo mouse={mouse} />
          <Particles />
          <Environment preset="night" />
        </Suspense>

        <EffectComposer>
          <Bloom
            intensity={1.2}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

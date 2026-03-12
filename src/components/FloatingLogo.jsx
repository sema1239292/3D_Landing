import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

export default function FloatingLogo({ mouse }) {
  const mainRef = useRef()
  const orb1Ref = useRef()
  const orb2Ref = useRef()
  const scrollRef = useRef(0)
  const isMobile = useMemo(() => window.innerWidth < 768, [])

  useFrame((state, delta) => {
    const scrollY = window.scrollY || 0
    const maxScroll = document.body.scrollHeight - window.innerHeight
    scrollRef.current = maxScroll > 0 ? scrollY / maxScroll : 0

    if (mainRef.current) {
      const targetX = mouse?.current?.y * 0.5 || 0
      const targetY = mouse?.current?.x * 0.5 || 0
      mainRef.current.rotation.x = THREE.MathUtils.lerp(
        mainRef.current.rotation.x, targetX, 0.05
      )
      mainRef.current.rotation.y = THREE.MathUtils.lerp(
        mainRef.current.rotation.y, targetY, 0.05
      )
      mainRef.current.rotation.z += delta * 0.1

      const scale = THREE.MathUtils.lerp(1, 0.6, scrollRef.current)
      mainRef.current.scale.setScalar(scale)
    }
    if (orb1Ref.current) {
      const t = state.clock.elapsedTime
      orb1Ref.current.position.x = Math.sin(t * 0.8) * 2
      orb1Ref.current.position.y = Math.cos(t * 0.6) * 1.5
      orb1Ref.current.position.z = Math.sin(t * 0.4) * 0.5
    }
    if (orb2Ref.current) {
      const t = state.clock.elapsedTime
      orb2Ref.current.position.x = Math.cos(t * 0.7) * 1.8
      orb2Ref.current.position.y = Math.sin(t * 0.5) * 1.2
      orb2Ref.current.position.z = Math.cos(t * 0.3) * 0.8
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group>
        {/* Main torus knot */}
        <mesh ref={mainRef} scale={isMobile ? 0.7 : 1}>
          <torusKnotGeometry args={isMobile ? [1, 0.3, 64, 16] : [1, 0.3, 128, 32]} />
          <MeshDistortMaterial
            color="#4f46e5"
            metalness={0.8}
            roughness={0.2}
            distort={isMobile ? 0.15 : 0.3}
            speed={2}
          />
        </mesh>

        {/* Orbiting sphere 1 */}
        <mesh ref={orb1Ref} scale={0.15}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#818cf8"
            metalness={0.9}
            roughness={0.1}
            emissive="#4f46e5"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Orbiting sphere 2 */}
        <mesh ref={orb2Ref} scale={0.1}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#c7d2fe"
            metalness={0.9}
            roughness={0.1}
            emissive="#6366f1"
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>
    </Float>
  )
}

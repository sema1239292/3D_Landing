import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

export default function FloatingLogo({ mouse }) {
  const mainRef = useRef()
  const orb1Ref = useRef()
  const orb2Ref = useRef()
  const orb3Ref = useRef()
  const scrollRef = useRef(0)
  const isMobile = useMemo(() => window.innerWidth < 768, [])

  useFrame((state, delta) => {
    const scrollY = window.scrollY || 0
    const maxScroll = document.body.scrollHeight - window.innerHeight
    scrollRef.current = maxScroll > 0 ? scrollY / maxScroll : 0

    if (mainRef.current) {
      const targetX = (mouse?.current?.y || 0) * 0.5
      const targetY = (mouse?.current?.x || 0) * 0.5
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

    const t = state.clock.elapsedTime
    if (orb1Ref.current) {
      orb1Ref.current.position.set(
        Math.sin(t * 0.8) * 2,
        Math.cos(t * 0.6) * 1.5,
        Math.sin(t * 0.4) * 0.5
      )
    }
    if (orb2Ref.current) {
      orb2Ref.current.position.set(
        Math.cos(t * 0.7) * 1.8,
        Math.sin(t * 0.5) * 1.2,
        Math.cos(t * 0.3) * 0.8
      )
    }
    if (orb3Ref.current) {
      orb3Ref.current.position.set(
        Math.sin(t * 0.6) * 2.2,
        Math.cos(t * 0.9) * 0.8,
        Math.sin(t * 0.7) * 1.0
      )
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group>
        <mesh ref={mainRef} scale={isMobile ? 0.7 : 1}>
          <torusKnotGeometry args={isMobile ? [1, 0.3, 64, 16] : [1, 0.3, 128, 32]} />
          <MeshDistortMaterial
            color="#7c3aed"
            emissive="#7c3aed"
            emissiveIntensity={0.8}
            metalness={0.9}
            roughness={0.1}
            distort={isMobile ? 0.15 : 0.3}
            speed={2}
          />
        </mesh>

        <mesh ref={orb1Ref} scale={0.15}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#a78bfa"
            emissive="#a78bfa"
            emissiveIntensity={1.5}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        <mesh ref={orb2Ref} scale={0.1}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#c4b5fd"
            emissive="#8b5cf6"
            emissiveIntensity={2}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        <mesh ref={orb3Ref} scale={0.08}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial
            color="#e9d5ff"
            emissive="#a78bfa"
            emissiveIntensity={2.5}
            metalness={1}
            roughness={0}
          />
        </mesh>
      </group>
    </Float>
  )
}

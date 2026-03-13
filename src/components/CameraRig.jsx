import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function CameraRig({ mouse }) {
  const groupRef = useRef()

  useFrame(() => {
    if (!groupRef.current) return
    const targetX = (mouse?.current?.x || 0) * 0.3
    const targetY = (mouse?.current?.y || 0) * 0.2

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetX * 0.15,
      0.05
    )
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -targetY * 0.1,
      0.05
    )
  })

  return <group ref={groupRef} />
}

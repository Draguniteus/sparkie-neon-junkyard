'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Fog() {
  return (
    <fog attach="fog" args={['#0a0a1a', 5, 60]} />
  )
}

// Volumetric light cone
export function VolumetricLight({
  position,
  color,
  angle = 0.4,
  distance = 15,
  intensity = 2,
}: {
  position: [number, number, number]
  color: string
  angle?: number
  distance?: number
  intensity?: number
}) {
  const coneRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!coneRef.current) return
    const t = state.clock.elapsedTime
    // Subtle flicker
    ;(coneRef.current.material as THREE.MeshBasicMaterial).opacity = 0.15 + Math.sin(t * 7) * 0.03
  })

  return (
    <mesh ref={coneRef} position={position} rotation={[0, 0, 0]}>
      <coneGeometry args={[angle, distance, 16, 1, true]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.15}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  )
}
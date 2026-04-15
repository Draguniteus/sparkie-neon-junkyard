'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface NeonProps {
  position: [number, number, number]
  text: string
  color: string
  size?: number
}

export function NeonSign({ position, text, color, size = 1 }: NeonProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime
    // Subtle flicker
    const flicker = Math.sin(t * 8) * 0.05 + 0.95
    ;(meshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = flicker * 1.5
  })

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <planeGeometry args={[text.length * size * 0.6, size * 1.2]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.5}
          toneMapped={false}
        />
      </mesh>
      {/* Glow strip */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[text.length * size * 0.65, size * 1.3]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}

// 3D neon tube text approximation using boxes
interface NeonTubeTextProps {
  text: string
  color: string
  position: [number, number, number]
}

export function NeonTubeText({ text, color, position }: NeonTubeTextProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    // Flicker
    const flicker = Math.sin(t * 10) * 0.03 + Math.sin(t * 23) * 0.02 + 0.95
    groupRef.current.children.forEach((child) => {
      if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
        child.material.emissiveIntensity = flicker * 2
      }
    })
  })

  const letters = text.split('')
  const spacing = 0.8
  const startX = -((letters.length - 1) * spacing) / 2

  return (
    <group ref={groupRef} position={position}>
      {letters.map((letter, i) => (
        <mesh key={i} position={[startX + i * spacing, 0, 0]}>
          <boxGeometry args={[0.5, 1.5, 0.15]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  )
}
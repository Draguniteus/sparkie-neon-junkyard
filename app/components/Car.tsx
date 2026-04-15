'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface CarProps {
  position: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
  accentColor: string
}

export function SalvageCar({ position, rotation = [0, 0, 0], scale = 1, accentColor }: CarProps) {
  const groupRef = useRef<THREE.Group>(null)

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      {/* Main body */}
      <mesh castShadow>
        <boxGeometry args={[3, 1.2, 6]} />
        <meshStandardMaterial color="#2a2a3a" metalness={0.9} roughness={0.3} />
      </mesh>
      {/* Cabin */}
      <mesh position={[0, 1, -0.5]} castShadow>
        <boxGeometry args={[2.5, 0.9, 3]} />
        <meshStandardMaterial color="#1a1a2a" metalness={0.8} roughness={0.4} />
      </mesh>
      {/* Neon accents - hood */}
      <mesh position={[0, 0.6, 2]}>
        <boxGeometry args={[2.8, 0.05, 0.3]} />
        <meshStandardMaterial
          color={accentColor}
          emissive={accentColor}
          emissiveIntensity={3}
          toneMapped={false}
        />
      </mesh>
      {/* Neon strip - side */}
      <mesh position={[1.5, 0.3, 0]}>
        <boxGeometry args={[0.05, 0.1, 5.5]} />
        <meshStandardMaterial
          color={accentColor}
          emissive={accentColor}
          emissiveIntensity={3}
          toneMapped={false}
        />
      </mesh>
      <mesh position={[-1.5, 0.3, 0]}>
        <boxGeometry args={[0.05, 0.1, 5.5]} />
        <meshStandardMaterial
          color={accentColor}
          emissive={accentColor}
          emissiveIntensity={3}
          toneMapped={false}
        />
      </mesh>
      {/* Wheels (damaged) */}
      {[
        [1.2, -0.5, 2],
        [-1.2, -0.5, 2],
        [1.2, -0.5, -2],
        [-1.2, -0.5, -2],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.5, 0.5, 0.3, 8]} />
          <meshStandardMaterial color="#111" metalness={0.5} roughness={0.8} />
        </mesh>
      ))}
      {/* Broken windshield */}
      <mesh position={[0, 1.1, -1.8]}>
        <planeGeometry args={[2, 0.6]} />
        <meshStandardMaterial
          color="#334"
          transparent
          opacity={0.4}
          metalness={1}
          roughness={0.1}
        />
      </mesh>
      {/* Neon underglow */}
      <mesh position={[0, -0.55, 0]}>
        <boxGeometry args={[2.5, 0.05, 5.5]} />
        <meshStandardMaterial
          color={accentColor}
          emissive={accentColor}
          emissiveIntensity={1}
          transparent
          opacity={0.6}
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}
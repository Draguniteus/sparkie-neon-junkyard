'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function WorkerDroid({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    // Subtle idle animation - slight sway
    groupRef.current.rotation.z = Math.sin(t * 0.5) * 0.05
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Legs */}
      <mesh position={[-0.4, -1.5, 0]}>
        <capsuleGeometry args={[0.15, 1.5, 8, 16]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.4} />
      </mesh>
      <mesh position={[0.4, -1.5, 0]}>
        <capsuleGeometry args={[0.15, 1.5, 8, 16]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.4} />
      </mesh>
      {/* Knee joints - glowing */}
      <mesh position={[-0.4, -0.8, 0]}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>
      <mesh position={[0.4, -0.8, 0]}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>
      {/* Torso */}
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.5, 1.5, 8, 16]} />
        <meshStandardMaterial color="#1a1a2a" metalness={0.9} roughness={0.3} />
      </mesh>
      {/* Chest plate */}
      <mesh position={[0, 0.2, 0.3]}>
        <boxGeometry args={[0.8, 0.6, 0.1]} />
        <meshStandardMaterial color="#2a2a3a" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Chest glow */}
      <mesh position={[0, 0.2, 0.35]}>
        <boxGeometry args={[0.6, 0.3, 0.05]} />
        <meshStandardMaterial
          color="#ff00ff"
          emissive="#ff00ff"
          emissiveIntensity={3}
          toneMapped={false}
        />
      </mesh>
      {/* Neck */}
      <mesh position={[0, 1.1, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.4, 8]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.4} />
      </mesh>
      {/* Visor */}
      <mesh position={[0, 1.4, 0.4]}>
        <boxGeometry args={[0.7, 0.25, 0.1]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={5}
          toneMapped={false}
        />
      </mesh>
      {/* Visor glow halo */}
      <mesh position={[0, 1.4, 0.42]}>
        <boxGeometry args={[0.8, 0.35, 0.05]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={1}
          transparent
          opacity={0.3}
          toneMapped={false}
        />
      </mesh>
      {/* Shoulders */}
      <mesh position={[-0.8, 0.8, 0]}>
        <capsuleGeometry args={[0.2, 0.6, 8, 16]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.4} />
      </mesh>
      <mesh position={[0.8, 0.8, 0]}>
        <capsuleGeometry args={[0.2, 0.6, 8, 16]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.4} />
      </mesh>
      {/* Shoulder joints - glowing */}
      <mesh position={[-0.8, 0.6, 0]}>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial
          color="#ff00ff"
          emissive="#ff00ff"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>
      <mesh position={[0.8, 0.6, 0]}>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial
          color="#ff00ff"
          emissive="#ff00ff"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>
      {/* Arms */}
      <mesh position={[-0.8, -0.3, 0]}>
        <capsuleGeometry args={[0.12, 1.5, 8, 16]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.4} />
      </mesh>
      <mesh position={[0.8, -0.3, 0]}>
        <capsuleGeometry args={[0.12, 1.5, 8, 16]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.4} />
      </mesh>
      {/* Wrist joints - glowing */}
      <mesh position={[-0.8, -1.1, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color="#ffaa00"
          emissive="#ffaa00"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>
      <mesh position={[0.8, -1.1, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color="#ffaa00"
          emissive="#ffaa00"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}
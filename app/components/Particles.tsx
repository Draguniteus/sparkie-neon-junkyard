'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function RainParticles({ count = 3000 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)
  const velocitiesRef = useRef<Float32Array>(new Float32Array(count))

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const vel = velocitiesRef.current
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80
      pos[i * 3 + 1] = Math.random() * 40
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80
      vel[i] = 0.3 + Math.random() * 0.5
    }
    return pos
  }, [count])

  useFrame((_, delta) => {
    if (!ref.current) return
    const pos = ref.current.geometry.attributes.position.array as Float32Array
    const vel = velocitiesRef.current
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] -= vel[i] * delta * 20
      if (pos[i * 3 + 1] < -1) {
        pos[i * 3 + 1] = 35 + Math.random() * 5
        pos[i * 3] = (Math.random() - 0.5) * 80
        pos[i * 3 + 2] = (Math.random() - 0.5) * 80
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#88ccff"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export function EmberParticles({ count = 500 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60
      pos[i * 3 + 1] = Math.random() * 15
      pos[i * 3 + 2] = (Math.random() - 0.5) * 60
    }
    return pos
  }, [count])

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.rotation.y = t * 0.02
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#ff6600"
        transparent
        opacity={0.7}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}
'use client'

import { useMemo } from 'react'
import * as THREE from 'three'

interface ScrapPileProps {
  position: [number, number, number]
  scale?: number
}

export function ScrapPile({ position, scale = 1 }: ScrapPileProps) {
  const pieces = useMemo(() => {
    const items: {
      pos: [number, number, number]
      rot: [number, number, number]
      size: [number, number, number]
      color: string
    }[] = []
    // Generate random scrap metal pieces
    for (let i = 0; i < 25; i++) {
      const w = 0.3 + Math.random() * 1.5
      const h = 0.1 + Math.random() * 0.8
      const d = 0.3 + Math.random() * 1.5
      const colors = ['#3a3a4a', '#4a4a5a', '#2a2a3a', '#444455', '#333344']
      items.push({
        pos: [
          (Math.random() - 0.5) * 6,
          h / 2,
          (Math.random() - 0.5) * 6,
        ],
        rot: [
          Math.random() * 0.5,
          Math.random() * Math.PI,
          Math.random() * 0.5,
        ],
        size: [w, h, d],
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }
    return items
  }, [])

  return (
    <group position={position} scale={scale}>
      {pieces.map((piece, i) => (
        <mesh key={i} position={piece.pos} rotation={piece.rot} castShadow receiveShadow>
          <boxGeometry args={piece.size} />
          <meshStandardMaterial
            color={piece.color}
            metalness={0.7}
            roughness={0.5}
          />
        </mesh>
      ))}
    </group>
  )
}
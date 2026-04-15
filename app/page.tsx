'use client'

import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { CyberpunkGround } from './components/Ground'
import { SalvageCar } from './components/Car'
import { WorkerDroid } from './components/Droid'
import { NeonTubeText } from './components/NeonSign'
import { VolumetricLight, Fog } from './components/Fog'
import { ScrapPile } from './components/ScrapPile'
import { RainParticles, EmberParticles } from './components/Particles'

function Scene() {
  return (
    <>
      {/* Sky */}
      <color attach="background" args={['#020510']} />
      <Fog />
      <Stars radius={100} depth={50} count={3000} factor={4} fade />

      {/* Ambient */}
      <ambientLight intensity={0.15} color="#1a1a4a" />

      {/* Main neon light sources */}
      <pointLight position={[0, 12, 0]} color="#00ffff" intensity={50} distance={40} decay={2} />
      <pointLight position={[-15, 10, 5]} color="#ff00ff" intensity={40} distance={35} decay={2} />
      <pointLight position={[15, 8, -10]} color="#ff6600" intensity={35} distance={30} decay={2} />

      {/* Volumetric lights from neon signs */}
      <VolumetricLight position={[0, 10, 0]} color="#00ffff" angle={3} distance={20} />
      <VolumetricLight position={[-12, 8, 0]} color="#ff00ff" angle={2.5} distance={18} />
      <VolumetricLight position={[10, 8, 0]} color="#ffaa00" angle={2} distance={15} />

      {/* Ground */}
      <CyberpunkGround />

      {/* 3 stacked salvage cars */}
      <SalvageCar position={[0, 0, 0]} rotation={[0, 0.3, 0]} scale={1} accentColor="#00ffff" />
      <SalvageCar position={[2, 1.3, -1]} rotation={[0.1, -0.5, 0.15]} scale={0.9} accentColor="#ff00ff" />
      <SalvageCar position={[-1, 2.6, 1]} rotation={[-0.05, 0.8, -0.1]} scale={0.85} accentColor="#ff6600" />

      {/* Worker droid */}
      <WorkerDroid position={[-6, 0.5, 3]} />

      {/* Neon signs */}
      <NeonTubeText text="SALVAGE" color="#00ffff" position={[-12, 8, 0]} />
      <NeonTubeText text="PARTS" color="#ff00ff" position={[10, 8, -5]} />

      {/* Scrap piles */}
      <ScrapPile position={[-8, 0, -5]} scale={1.2} />
      <ScrapPile position={[8, 0, 5]} scale={1} />
      <ScrapPile position={[5, 0, -8]} scale={0.8} />
      <ScrapPile position={[-5, 0, 8]} scale={0.9} />

      {/* Particles */}
      <RainParticles count={3000} />
      <EmberParticles count={500} />
    </>
  )
}

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#020510]">
      <Canvas
        camera={{ position: [0, 8, 25], fov: 55 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
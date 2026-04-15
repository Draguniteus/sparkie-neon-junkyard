import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  outputFileTracingRoot: 'C:/Users/user/Desktop/project-assets/Visual Wisdom/sparkie-neon-junkyard',
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['three', '@react-three/fiber', '@react-three/drei'],
  },
}

export default nextConfig
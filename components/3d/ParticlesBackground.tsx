'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const mousePosition = useRef({ x: 0, y: 0 })

  // Generate random particles
  const particles = useMemo(() => {
    const count = 5000
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    
    return positions
  }, [])

  // Mouse move handler
  const handleMouseMove = (event: MouseEvent) => {
    mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1
    mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1
  }

  // Add mouse move listener
  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', handleMouseMove)
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.1
      ref.current.rotation.y += delta * 0.05
      
      // React to mouse position
      ref.current.rotation.x += mousePosition.current.y * 0.01
      ref.current.rotation.y += mousePosition.current.x * 0.01
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#0070f3"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <ParticleField />
      </Canvas>
    </div>
  )
}
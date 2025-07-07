'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, Sphere, Torus } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedShapes() {
  const groupRef = useRef<THREE.Group>(null!)
  const boxRef = useRef<THREE.Mesh>(null!)
  const sphereRef = useRef<THREE.Mesh>(null!)
  const torusRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    // Group rotation
    groupRef.current.rotation.y = time * 0.2
    
    // Individual shape animations
    boxRef.current.rotation.x = time * 0.5
    boxRef.current.rotation.y = time * 0.3
    boxRef.current.position.y = Math.sin(time) * 0.3
    
    sphereRef.current.position.y = Math.sin(time * 1.5) * 0.3
    sphereRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.1)
    
    torusRef.current.rotation.x = time * 0.3
    torusRef.current.rotation.z = time * 0.5
  })

  return (
    <group ref={groupRef}>
      {/* Main Box */}
      <Box ref={boxRef} args={[1.5, 1.5, 1.5]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#0070f3"
          emissive="#0070f3"
          emissiveIntensity={0.2}
          roughness={0.3}
          metalness={0.8}
        />
      </Box>
      
      {/* Orbiting Sphere */}
      <Sphere ref={sphereRef} args={[0.5, 32, 32]} position={[2.5, 0, 0]}>
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.9}
        />
      </Sphere>
      
      {/* Orbiting Torus */}
      <Torus ref={torusRef} args={[0.8, 0.2, 16, 32]} position={[-2.5, 0, 0]}>
        <meshStandardMaterial
          color="#ff0080"
          emissive="#ff0080"
          emissiveIntensity={0.3}
          roughness={0.3}
          metalness={0.7}
        />
      </Torus>
    </group>
  )
}

export default function FloatingCube() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0070f3" />
      <AnimatedShapes />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}
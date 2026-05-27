"use client"

import { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Environment, MeshTransmissionMaterial } from "@react-three/drei"
import * as THREE from "three"

function Building() {
  const meshRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={meshRef} scale={1.2}>
        {/* Main Building Tower */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 4, 2]} />
          <MeshTransmissionMaterial
            backside
            samples={16}
            resolution={256}
            transmission={0.95}
            roughness={0.1}
            thickness={0.5}
            ior={1.5}
            chromaticAberration={0.06}
            anisotropy={0.1}
            distortion={0.0}
            distortionScale={0.3}
            temporalDistortion={0.5}
            clearcoat={1}
            attenuationDistance={0.5}
            attenuationColor="#d4a845"
            color="#1a1a2e"
          />
        </mesh>
        
        {/* Building Windows - Gold Accents */}
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh key={i} position={[0.7, -1.5 + i * 0.5, 1.01]}>
            <boxGeometry args={[0.3, 0.35, 0.02]} />
            <meshStandardMaterial 
              color="#d4a845" 
              emissive="#d4a845"
              emissiveIntensity={0.3}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        ))}
        
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh key={`left-${i}`} position={[-0.7, -1.5 + i * 0.5, 1.01]}>
            <boxGeometry args={[0.3, 0.35, 0.02]} />
            <meshStandardMaterial 
              color="#d4a845"
              emissive="#d4a845"
              emissiveIntensity={0.3}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        ))}

        {/* Side Tower */}
        <mesh position={[2, -0.5, 0]}>
          <boxGeometry args={[1.2, 3, 1.2]} />
          <MeshTransmissionMaterial
            backside
            samples={16}
            resolution={256}
            transmission={0.9}
            roughness={0.15}
            thickness={0.3}
            ior={1.5}
            chromaticAberration={0.04}
            clearcoat={1}
            attenuationDistance={0.5}
            attenuationColor="#d4a845"
            color="#0f0f1a"
          />
        </mesh>

        {/* Rooftop */}
        <mesh position={[0, 2.2, 0]}>
          <boxGeometry args={[2.2, 0.2, 2.2]} />
          <meshStandardMaterial 
            color="#d4a845" 
            metalness={0.9} 
            roughness={0.2}
            emissive="#d4a845"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Base Platform */}
        <mesh position={[0.5, -2.3, 0]}>
          <boxGeometry args={[4, 0.3, 3]} />
          <meshStandardMaterial 
            color="#1a1a1a" 
            metalness={0.5} 
            roughness={0.3}
          />
        </mesh>
      </group>
    </Float>
  )
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 100
  
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 15
    positions[i * 3 + 1] = (Math.random() - 0.5) * 15
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#d4a845"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#fff8e7" />
      <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#d4a845" />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#d4a845" />
      <Building />
      <Particles />
      <Environment preset="night" />
    </>
  )
}

export function Building3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Suspense fallback={<div className="w-full h-full bg-background" />}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  )
}

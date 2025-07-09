
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGeometry: React.FC<{ position: [number, number, number]; delay: number }> = ({ position, delay }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime + delay) * 0.2;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime + delay) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={[0.8, 0.8, 0.8]}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#00FFFF"
          transparent
          opacity={0.6}
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const MainSphere: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
    if (materialRef.current) {
      materialRef.current.distort = 0.4 + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={[3, 3, 3]}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          ref={materialRef}
          color="#0099FF"
          transparent
          opacity={0.8}
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.9}
          emissive="#001133"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

const ParticleField: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    const colors = new Float32Array(200 * 3);
    
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      colors[i * 3] = Math.random();
      colors[i * 3 + 1] = 0.8;
      colors[i * 3 + 2] = 1;
    }
    
    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={200}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        transparent
        opacity={0.6}
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const ThreeDHero: React.FC = () => {
  const floatingPositions: [number, number, number][] = useMemo(() => [
    [-4, 2, -2],
    [4, -1, -3],
    [-2, -3, 2],
    [3, 3, 1],
    [-5, 0, 3],
    [2, -2, -4],
  ], []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ 
          preserveDrawingBuffer: true,
          antialias: true,
          alpha: true
        }}
      >
        {/* Advanced Lighting Setup */}
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00FFFF" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#0099FF" />
        <spotLight 
          position={[0, 10, 0]} 
          angle={0.3} 
          penumbra={1} 
          intensity={0.5}
          color="#FF00FF"
        />
        
        {/* Main Central Sphere */}
        <MainSphere />
        
        {/* Floating Geometric Shapes */}
        {floatingPositions.map((position, index) => (
          <FloatingGeometry 
            key={index} 
            position={position} 
            delay={index * 0.5}
          />
        ))}
        
        {/* Particle Field */}
        <ParticleField />
        
        {/* Interactive Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

export default ThreeDHero;

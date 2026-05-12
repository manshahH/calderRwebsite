import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Icosahedron = ({ isMobile }) => {
  const meshRef = useRef(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      targetRotation.current.x = y * 0.3;
      targetRotation.current.y = x * 0.3;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.0008;
      meshRef.current.rotation.y += 0.0012;

      meshRef.current.rotation.x += (targetRotation.current.x - meshRef.current.rotation.x) * 0.02;
      meshRef.current.rotation.y += (targetRotation.current.y - meshRef.current.rotation.y) * 0.02;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[2.8, 1]} />
      <meshBasicMaterial 
        wireframe={true} 
        color="#3BAFD4" 
        opacity={isMobile ? 0.08 : 0.12} 
        transparent={true} 
      />
    </mesh>
  );
};

const Particles = ({ isMobile }) => {
  const pointsRef = useRef(null);
  const count = isMobile ? 60 : 120;

  const { positions, phases } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const phases = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const r = 8 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      phases[i * 3] = Math.random() * Math.PI * 2;
      phases[i * 3 + 1] = Math.random() * Math.PI * 2;
      phases[i * 3 + 2] = Math.random() * Math.PI * 2;
    }
    return { positions, phases };
  }, [count]);

  const initialPositions = useRef(positions.slice());

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      const t = clock.elapsedTime;
      const positionsAttr = pointsRef.current.geometry.attributes.position;
      const array = positionsAttr.array;

      for (let i = 0; i < count; i++) {
        array[i * 3] = initialPositions.current[i * 3] + Math.sin(t * 0.5 + phases[i * 3]) * 0.2;
        array[i * 3 + 1] = initialPositions.current[i * 3 + 1] + Math.sin(t * 0.3 + phases[i * 3 + 1]) * 0.2;
        array[i * 3 + 2] = initialPositions.current[i * 3 + 2] + Math.sin(t * 0.4 + phases[i * 3 + 2]) * 0.2;
      }
      positionsAttr.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.025} 
        color="#3BAFD4" 
        opacity={0.35} 
        transparent={true} 
      />
    </points>
  );
};

export default function ThreeBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ background: 'transparent' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1}
        gl={{ antialias: true, toneMapping: THREE.NoToneMapping, alpha: true }}
        frameloop="always"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <Icosahedron isMobile={isMobile} />
          <Particles isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
}

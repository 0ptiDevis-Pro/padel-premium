"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three";



const CourtModel = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Sol / Gazon */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[10, 0.2, 20]} />
        <meshStandardMaterial color="#00552E" roughness={0.8} />
      </mesh>

      {/* Lignes blanches */}
      <mesh position={[0, 0.11, 0]}>
        <planeGeometry args={[9.8, 0.1]} />
        <meshBasicMaterial color="#FFFFFF" />
      </mesh>

      {/* Vitres Panoramiques avec effet verre */}
      <mesh position={[0, 1.6, -10]}>
        <boxGeometry args={[10, 3, 0.1]} />
        <meshPhysicalMaterial
          transparent
          opacity={0.3}
          roughness={0.1}
          metalness={0.1}
          transmission={0.9}
          ior={1.5}
          color="#A5F3FC"
        />
      </mesh>

      <mesh position={[0, 1.6, 10]}>
        <boxGeometry args={[10, 3, 0.1]} />
        <meshPhysicalMaterial
          transparent
          opacity={0.3}
          roughness={0.1}
          metalness={0.1}
          transmission={0.9}
          ior={1.5}
          color="#A5F3FC"
        />
      </mesh>

      {/* Structure / Poteaux */}
      {[-5, 5].map((x, i) =>
        [-10, 0, 10].map((z, j) => (
          <mesh key={`${i}-${j}`} position={[x, 2, z]}>
            <boxGeometry args={[0.2, 4, 0.2]} />
            <meshStandardMaterial color="#111111" metalness={0.8} roughness={0.2} />
          </mesh>
        ))
      )}

      {/* Filet */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[10, 0.8, 0.05]} />
        <meshStandardMaterial color="#222222" transparent opacity={0.6} />
      </mesh>
    </group>
  );
};

export const PadelCourt3D: React.FC = () => {
  return (
    <div className="w-full h-[600px] md:h-[700px] rounded-premium overflow-hidden bg-gradient-to-b from-surface/50 to-background border border-white/5 relative">
      <Canvas camera={{ position: [15, 12, 20], fov: 45 }} shadows>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 20, 15]} intensity={1.5} castShadow />
        <pointLight position={[-10, 10, -10]} intensity={0.5} color="#3B82F6" />
        
        <CourtModel />
        
        {/* Sol réfléchissant sous le terrain */}
        <mesh position={[0, -0.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={1024}
            mirror={0.5}
            mixBlur={1}
            mixStrength={1.5}
            roughness={0.6}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#0D1117"
          />
        </mesh>

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 - 0.05}
          minDistance={10}
          maxDistance={35}
        />
      </Canvas>
      <div className="absolute bottom-6 left-6 pointer-events-none text-secondary text-sm">
        Interagissez avec le modèle 3D (Clic & Drag pour tourner, Scroll pour zoomer)
      </div>
    </div>
  );
};

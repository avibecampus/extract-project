import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, TorusKnot, Sparkles } from "@react-three/drei";
import type { Mesh } from "three";

function SpinningKnot() {
  const ref = useRef<Mesh>(null!);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.x += dt * 0.15;
    ref.current.rotation.y += dt * 0.25;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <TorusKnot ref={ref} args={[1, 0.32, 180, 32]} scale={1}>
        <MeshDistortMaterial color="#8b5cf6" emissive="#4f46e5" emissiveIntensity={0.4} roughness={0.15} metalness={0.85} distort={0.35} speed={1.6} />
      </TorusKnot>
    </Float>
  );
}

function OrbitBall({ radius, speed, offset, color }: { radius: number; speed: number; offset: number; color: string }) {
  const ref = useRef<Mesh>(null!);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed + offset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t * 1.3) * 0.4;
  });
  return (
    <Icosahedron ref={ref} args={[0.22, 1]}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.7} roughness={0.2} metalness={0.6} />
    </Icosahedron>
  );
}

export function Hero3D() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <div aria-hidden className="h-full w-full animate-glow-pulse">
        <div className="mx-auto mt-16 h-56 w-56 rounded-full opacity-70"
          style={{ background: "conic-gradient(from 90deg, oklch(0.85 0.15 200), oklch(0.70 0.20 300), oklch(0.72 0.24 335), oklch(0.85 0.15 200))" }} />
      </div>
    );
  }
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4.2], fov: 45 }} className="h-full w-full">
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={2.4} color="#a78bfa" />
      <pointLight position={[-4, -2, 2]} intensity={2} color="#22d3ee" />
      <pointLight position={[0, -3, 3]} intensity={1.2} color="#f472b6" />
      <SpinningKnot />
      <OrbitBall radius={2.1} speed={0.9} offset={0} color="#22d3ee" />
      <OrbitBall radius={2.1} speed={0.9} offset={Math.PI * 0.66} color="#a78bfa" />
      <OrbitBall radius={2.1} speed={0.9} offset={Math.PI * 1.33} color="#f472b6" />
      <Sparkles count={60} scale={6} size={2} speed={0.4} color="#e0e7ff" />
    </Canvas>
  );
}

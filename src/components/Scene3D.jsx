
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Float } from "@react-three/drei";
import { useRef } from "react";

function Fan({ position }) {
  const fan = useRef();

  useFrame((_, delta) => {
    if (fan.current) fan.current.rotation.z += delta * 3;
  });

  return (
    <group position={position}>
      <mesh>
        <torusGeometry args={[0.42, 0.045, 12, 48]} />
        <meshStandardMaterial color="#5f8195" metalness={0.8} roughness={0.25} />
      </mesh>

      <group ref={fan}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <mesh key={i} rotation={[0, 0, (i * Math.PI) / 3]}>
            <boxGeometry args={[0.18, 0.65, 0.025]} />
            <meshStandardMaterial
              color="#9bb5c5"
              metalness={0.8}
              roughness={0.3}
            />
          </mesh>
        ))}
        <mesh position={[0, 0, 0.035]}>
          <cylinderGeometry args={[0.12, 0.12, 0.08, 24]} />
          <meshStandardMaterial color="#253b52" metalness={0.8} roughness={0.25} />
        </mesh>
      </group>
    </group>
  );
}

function HVACModel({ theme }) {
  const isDark = theme === "dark";

  return (
    <Float speed={1.5} rotationIntensity={0.12} floatIntensity={0.35}>
      <group rotation={[0.12, -0.35, 0]}>
        <mesh>
          <boxGeometry args={[3.8, 1.65, 1.2]} />
          <meshStandardMaterial
            color={isDark ? "#4e687b" : "#a7bbc9"}
            metalness={0.75}
            roughness={0.28}
          />
        </mesh>

        <mesh position={[0, 0, 0.615]}>
          <boxGeometry args={[3.55, 1.4, 0.035]} />
          <meshStandardMaterial color={isDark ? "#142536" : "#d9e5ed"} />
        </mesh>

        <Fan position={[-1.15, 0, 0.67]} />
        <Fan position={[0, 0, 0.67]} />
        <Fan position={[1.15, 0, 0.67]} />

        <mesh position={[0, -0.87, 0]}>
          <boxGeometry args={[3.9, 0.12, 1.3]} />
          <meshStandardMaterial color="#243c50" metalness={0.7} />
        </mesh>
      </group>
    </Float>
  );
}

export default function Scene3D({ theme }) {
  const isDark = theme === "dark";

  return (
    <Canvas
      camera={{ position: [0, 1.8, 7], fov: 42 }}
      dpr={[1, 1.7]}
      gl={{ alpha: true, antialias: true }}
      fallback={<div>3D unavailable</div>}
    >
      <ambientLight intensity={isDark ? 1.2 : 1.8} />
      <directionalLight position={[5, 6, 5]} intensity={3} />
      <pointLight position={[-4, 2, 3]} intensity={2} color="#38bdf8" />

      <HVACModel theme={theme} />

      <ContactShadows
        position={[0, -1.6, 0]}
        opacity={0.25}
        scale={8}
        blur={2.5}
        far={4}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(Math.PI * 2) / 3}
      />
    </Canvas>
  );
}

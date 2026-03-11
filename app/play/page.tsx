"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function Avatar() {
  const skin = "#f4d4b4";

  return (
    <group position={[0, -0.1, 0]}>
      {/* head */}
      <mesh position={[0, 1.45, 0]}>
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* neck */}
      <mesh position={[0, 1.1, 0]}>
        <cylinderGeometry args={[0.08, 0.09, 0.16, 24]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* upper torso / chest */}
      <mesh position={[0, 0.72, 0]}>
        <sphereGeometry args={[0.42, 32, 32]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* waist */}
      <mesh position={[0, 0.32, 0]} scale={[0.75, 1, 0.55]}>
        <sphereGeometry args={[0.32, 32, 32]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* hips */}
      <mesh position={[0, -0.05, 0]} scale={[1.15, 0.9, 0.7]}>
        <sphereGeometry args={[0.42, 32, 32]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* left arm */}
      <mesh position={[-0.52, 0.58, 0]} rotation={[0, 0, -0.18]}>
        <capsuleGeometry args={[0.09, 0.78, 8, 16]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* right arm */}
      <mesh position={[0.52, 0.58, 0]} rotation={[0, 0, 0.18]}>
        <capsuleGeometry args={[0.09, 0.78, 8, 16]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* left thigh */}
      <mesh position={[-0.16, -0.72, 0]} rotation={[0, 0, 0.03]}>
        <capsuleGeometry args={[0.11, 0.82, 8, 16]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* right thigh */}
      <mesh position={[0.16, -0.72, 0]} rotation={[0, 0, -0.03]}>
        <capsuleGeometry args={[0.11, 0.82, 8, 16]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* left calf */}
      <mesh position={[-0.16, -1.42, 0]}>
        <capsuleGeometry args={[0.09, 0.72, 8, 16]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* right calf */}
      <mesh position={[0.16, -1.42, 0]}>
        <capsuleGeometry args={[0.09, 0.72, 8, 16]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* left foot */}
      <mesh position={[-0.16, -1.92, 0.08]} rotation={[0.15, 0, 0]}>
        <sphereGeometry args={[0.1, 24, 24]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* right foot */}
      <mesh position={[0.16, -1.92, 0.08]} rotation={[0.15, 0, 0]}>
        <sphereGeometry args={[0.1, 24, 24]} />
        <meshStandardMaterial color={skin} />
      </mesh>
    </group>
  );
}
export default function PlayPage() {
  return (
    <main
      style={{
        height: "100vh",
        background: "radial-gradient(circle at center, #0f1b2e, #02050b)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: 700, height: 700 }}>
        <Canvas camera={{ position: [0, 0.1, 5.2],fov:35 }}>
          <ambientLight intensity={1.1} />
          <directionalLight position={[3, 4, 4]} intensity={1.8} />
          <directionalLight position={[-2, 2, 3]} intensity={0.8} />

          <Avatar />

          <OrbitControls />
        </Canvas>
      </div>
    </main>
  )
}
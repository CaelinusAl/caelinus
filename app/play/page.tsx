"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function Avatar() {
  const skin = "#f3d4b5";

  return (
    <group position={[0, -0.1, 0]}>
      {/* head */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.24, 32, 32]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* neck */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.06, 0.07, 0.14, 24]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* chest */}
      <mesh position={[0, 0.82, 0]} scale={[1, 1.15, 0.72]}>
        <sphereGeometry args={[0.33, 32, 32]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* waist */}
      <mesh position={[0, 0.42, 0]} scale={[0.72, 1, 0.5]}>
        <sphereGeometry args={[0.24, 32, 32]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* hips */}
      <mesh position={[0, 0.02, 0]} scale={[1.15, 0.95, 0.7]}>
        <sphereGeometry args={[0.34, 32, 32]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* left arm upper */}
      <mesh position={[-0.4, 0.82, 0]} rotation={[0, 0, -0.22]}>
        <capsuleGeometry args={[0.07, 0.42, 8, 16]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* right arm upper */}
      <mesh position={[0.4, 0.82, 0]} rotation={[0, 0, 0.22]}>
        <capsuleGeometry args={[0.07, 0.42, 8, 16]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* left arm lower */}
      <mesh position={[-0.48, 0.42, 0]} rotation={[0, 0, -0.12]}>
        <capsuleGeometry args={[0.06, 0.34, 8, 16]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* right arm lower */}
      <mesh position={[0.48, 0.42, 0]} rotation={[0, 0, 0.12]}>
        <capsuleGeometry args={[0.06, 0.34, 8, 16]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* left thigh */}
      <mesh position={[-0.14, -0.48, 0]} rotation={[0, 0, 0.03]}>
        <capsuleGeometry args={[0.09, 0.55, 8, 16]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* right thigh */}
      <mesh position={[0.14, -0.48, 0]} rotation={[0, 0, -0.03]}>
        <capsuleGeometry args={[0.09, 0.55, 8, 16]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* left calf */}
      <mesh position={[-0.14, -0.98, 0]} rotation={[0, 0, 0.01]}>
        <capsuleGeometry args={[0.075, 0.48, 8, 16]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* right calf */}
      <mesh position={[0.14, -0.98, 0]} rotation={[0, 0, -0.01]}>
        <capsuleGeometry args={[0.075, 0.48, 8, 16]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* left foot */}
      <mesh position={[-0.14, -1.38, 0.07]} scale={[1.3, 0.7, 2]}>
        <sphereGeometry args={[0.07, 24, 24]} />
        <meshStandardMaterial color={skin} />
      </mesh>

      {/* right foot */}
      <mesh position={[0.14, -1.38, 0.07]} scale={[1.3, 0.7, 2]}>
        <sphereGeometry args={[0.07, 24, 24]} />
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
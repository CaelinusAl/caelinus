"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function Avatar() {
  return (
    <mesh position={[0, 0, 0]}>
      <capsuleGeometry args={[0.5, 1.2, 4, 8]} />
      <meshStandardMaterial color="#f5d7b2" />
    </mesh>
  )
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
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[3, 3, 3]} />

          <Avatar />

          <OrbitControls />
        </Canvas>
      </div>
    </main>
  )
}
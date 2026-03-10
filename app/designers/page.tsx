import Link from "next/link";

export default function DesignersPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at center, #24314d 0%, #070b16 55%, #04050a 100%)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        padding: "32px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <Link href="/" style={{ opacity: 0.75 }}>
          ← UNIVERSE
        </Link>
        <h1 style={{ fontSize: "54px", letterSpacing: "8px", marginTop: "24px", marginBottom: 0 }}>
          CAELINUS DESIGNERS
        </h1>
        <p style={{ marginTop: "16px", opacity: 0.82 }}>
          Global conscious creators
        </p>
      </div>
    </main>
  );
}
export default function CosmosPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at center, #1b2852 0%, #070b16 55%, #04050a 100%)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            margin: 0,
            fontSize: "54px",
            letterSpacing: "8px",
            fontWeight: 700,
          }}
        >
          CAELINUS COSMOS
        </h1>
        <p
          style={{
            marginTop: "16px",
            fontSize: "18px",
            opacity: 0.82,
          }}
        >
          Symbol, orbit and philosophy
        </p>
      </div>
    </main>
  );
}
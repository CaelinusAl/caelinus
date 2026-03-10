export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at center, #18264a 0%, #070b16 55%, #04050a 100%)",
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
            fontSize: "56px",
            letterSpacing: "8px",
            fontWeight: 700,
          }}
        >
          CAELINUS
        </h1>
        <p
          style={{
            marginTop: "16px",
            fontSize: "18px",
            opacity: 0.8,
          }}
        >
          Welcome to the Caelinus Universe
        </p>
      </div>
    </main>
  );
}
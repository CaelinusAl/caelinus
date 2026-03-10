export default function ArchivePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at center, #2a1d36 0%, #070b16 55%, #04050a 100%)",
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
          CAELINUS ARCHIVE
        </h1>
        <p
          style={{
            marginTop: "16px",
            fontSize: "18px",
            opacity: 0.82,
          }}
        >
          Archive objects and memory pieces
        </p>
      </div>
    </main>
  );
}
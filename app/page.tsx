import Link from "next/link";

const links = [
  { href: "/play", label: "PLAY" },
  { href: "/ai", label: "AI" },
  { href: "/cosmos", label: "COSMOS" },
  { href: "/archive", label: "ARCHIVE" },
  { href: "/designers", label: "DESIGNERS" },
];

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at center, #17305f 0%, #0a1022 45%, #04050a 100%)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "130px",
            height: "130px",
            margin: "0 auto 22px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.18)",
            boxShadow: "0 0 60px rgba(96, 147, 255, 0.26)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "radial-gradient(circle at 50% 35%, #79c0ff 0%, #2e4c89 45%, #111a31 100%)",
            fontSize: "44px",
          }}
        >
          ∞
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: "64px",
            letterSpacing: "10px",
            fontWeight: 700,
          }}
        >
          CAELINUS
        </h1>

        <p
          style={{
            marginTop: "16px",
            fontSize: "18px",
            opacity: 0.84,
          }}
        >
          Welcome to the Caelinus Universe
        </p>

        <div
          style={{
            marginTop: "34px",
            display: "grid",
            gridTemplateColumns: "repeat(5, minmax(120px, 1fr))",
            gap: "14px",
          }}
        >
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                border: "1px solid rgba(255,255,255,0.16)",
                borderRadius: "18px",
                padding: "18px 14px",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(10px)",
                letterSpacing: "2px",
                fontSize: "14px",
                textTransform: "uppercase",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
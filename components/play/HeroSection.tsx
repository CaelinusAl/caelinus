import Link from "next/link";
import { Scene } from "../../types/play";

type Props = {
  activeScene: Scene;
};

export default function HeroSection({ activeScene }: Props) {
  return (
    <section style={styles.wrap}>
      <div style={styles.topbar}>
        <Link href="/" style={styles.backLink}>
          ← UNIVERSE
        </Link>
        <div style={styles.meta}>CAELINUS PLAY</div>
      </div>

      <div style={styles.heroVisual}>
        <div style={styles.visualWrap}>
  <img
    src={activeScene.image}
    alt={activeScene.label}
    style={styles.animatedImage}
  />

  <div style={styles.heroOverlay} />
  <div style={styles.portalOuter} />
  <div style={styles.portalInner} />
</div>
</div>

      <h1 style={styles.title}>CAELINUS PLAY</h1>
      <p style={styles.subtitle}>Dress the Archetype</p>

      <button style={styles.cta}>ENTER THE PLAYGROUND</button>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    marginBottom: 40,
    textAlign: "center",
  },
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  backLink: {
    color: "white",
    textDecoration: "none",
    fontSize: 14,
    letterSpacing: 1.2,
    opacity: 0.82,
  },
  meta: {
    fontSize: 12,
    letterSpacing: 3,
    opacity: 0.72,
  },
  heroVisual: {
  position: "relative",
  width: "100%",
  maxWidth: 1120,
  height: 340,
  margin: "0 auto 26px",
  borderRadius: 34,
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.16)",
  boxShadow:
    "0 30px 120px rgba(0,0,0,0.38), inset 0 0 0 1px rgba(255,255,255,0.04)",
  background: "rgba(255,255,255,0.04)",
},
visualWrap: {
  position: "absolute",
  inset: 0,
  overflow: "hidden",
},

animatedImage: {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  animation: "caelinusFloat 14s ease-in-out infinite",
  transform: "scale(1.04)",
  willChange: "transform",
},


heroOverlay: {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(180deg, rgba(8,10,18,0.10) 0%, rgba(8,10,18,0.28) 44%, rgba(8,10,18,0.62) 100%)",
},

portalOuter: {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 260,
  height: 260,
  borderRadius: "50%",
  border: "1px solid rgba(255,255,255,0.24)",
  boxShadow: "0 0 80px rgba(129,175,255,0.34)",
  animation: "portalPulse 7s ease-in-out infinite",
},

portalInner: {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 180,
  height: 180,
  borderRadius: "50%",
  border: "1px solid rgba(255,255,255,0.16)",
  animation: "portalPulse 7s ease-in-out infinite",
},

heroCore: {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 92,
  height: 92,
  transform: "translate(-50%, -50%)",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background:
    "radial-gradient(circle at 50% 35%, #8fe1ff 0%, #4e78df 45%, #10172b 100%)",
  fontSize: 34,
  boxShadow: "0 0 60px rgba(123,177,255,0.42)",
},
  title: {
    margin: 0,
    fontSize: 56,
    letterSpacing: 8,
    fontWeight: 700,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 18,
    opacity: 0.86,
  },
  cta: {
    marginTop: 20,
    border: "1px solid rgba(255,255,255,0.20)",
    background: "rgba(255,255,255,0.06)",
    color: "white",
    borderRadius: 999,
    padding: "16px 34px",
    fontSize: 15,
    letterSpacing: 1.4,
    cursor: "pointer",
    boxShadow: "0 0 24px rgba(121,150,255,0.14)",
  },
  
};
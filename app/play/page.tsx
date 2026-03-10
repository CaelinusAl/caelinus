"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type BikiniId =
  | "aquarius"
  | "aries"
  | "cancer"
  | "capricorn"
  | "gemini"
  | "leo"
  | "libra"
  | "pisces"
  | "sagittarius"
  | "scorpio"
  | "taurus"
  | "virgo";

const bikinis: { id: BikiniId; label: string }[] = [
  { id: "aquarius", label: "Aquarius" },
  { id: "aries", label: "Aries" },
  { id: "cancer", label: "Cancer" },
  { id: "capricorn", label: "Capricorn" },
  { id: "gemini", label: "Gemini" },
  { id: "leo", label: "Leo" },
  { id: "libra", label: "Libra" },
  { id: "pisces", label: "Pisces" },
  { id: "sagittarius", label: "Sagittarius" },
  { id: "scorpio", label: "Scorpio" },
  { id: "taurus", label: "Taurus" },
  { id: "virgo", label: "Virgo" },
];

const scenes = [
  { id: "beach", label: "Beach" },
  { id: "coffee", label: "Coffee" },
  { id: "night", label: "Night" },
  { id: "resort", label: "Resort" },
] as const;

type SceneId = (typeof scenes)[number]["id"];

const sceneNotes: Record<SceneId, string> = {
  beach: "Solar, open, luminous, effortless.",
  coffee: "Soft daytime styling, city ease, sensual calm.",
  night: "Magnetic silhouette, darker aura, after-dark frequency.",
  resort: "Luxurious escape, fluid beauty, goddess leisure.",
};

export default function PlayPage() {
  const [selectedBikini, setSelectedBikini] = useState<BikiniId>("leo");
  const [selectedScene, setSelectedScene] = useState<SceneId>("night");

  const selectedImage = useMemo(
    () => `/play/bikinis/${selectedBikini}.png`,
    [selectedBikini]
  );

  return (
    <main style={styles.page}>
      <div style={styles.bgOrbOne} />
      <div style={styles.bgOrbTwo} />
      <div style={styles.bgOrbThree} />

      <div style={styles.container}>
        <div style={styles.topbar}>
          <Link href="/" style={styles.backLink}>
            ← UNIVERSE
          </Link>
          <div style={styles.topbarRight}>CAELINUS PLAY</div>
        </div>

        <header style={styles.hero}>
          <div style={styles.heroPortal}>
            <div style={styles.heroPortalRingOne} />
            <div style={styles.heroPortalRingTwo} />
            <div style={styles.heroPortalCore}>∞</div>
          </div>

          <h1 style={styles.title}>CAELINUS PLAY</h1>
          <p style={styles.subtitle}>Dress the Archetype</p>
        </header>

        <section style={styles.grid}>
          <aside style={styles.card}>
            <div style={styles.cardLabel}>Bikini Archive</div>

            <div style={styles.choiceGrid}>
              {bikinis.map((item) => {
                const active = item.id === selectedBikini;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedBikini(item.id)}
                    style={{
                      ...styles.choiceButton,
                      ...(active ? styles.choiceButtonActive : {}),
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </aside>

          <section style={{ ...styles.card, ...styles.stageCard }}>
            <div style={styles.stageHeader}>
              <span style={styles.cardLabel}>Avatar Stage</span>
              <span style={styles.versionText}>Caelinus v2</span>
            </div>

            <div style={styles.stageArea}>
              <div style={styles.mainPortalGlow} />
              <div style={styles.mainPortalRing} />

              <div style={styles.avatarWrap}>
                <div style={styles.avatarAura} />

                <div style={styles.avatar}>
                  <div style={styles.head} />
                  <div style={styles.neck} />
                  <div style={styles.torso} />
                  <div style={styles.hips} />
                  <div style={styles.legLeft} />
                  <div style={styles.legRight} />
                  <div style={styles.armLeft} />
                  <div style={styles.armRight} />
                </div>

                <img
                  src={selectedImage}
                  alt={selectedBikini}
                  style={styles.bikiniImage}
                />
              </div>
            </div>

            <div style={styles.footerBar}>
              <div>
                <div style={styles.lookTitle}>
                  {selectedBikini.toUpperCase()} LOOK
                </div>
                <div style={styles.lookMeta}>
                  Scene: {selectedScene.toUpperCase()}
                </div>
              </div>

              <div style={styles.actionRow}>
                <button style={styles.actionButton}>Buy</button>
                <button style={styles.actionButton}>Save</button>
                <button style={styles.actionButton}>Share</button>
              </div>
            </div>
          </section>

          <aside style={styles.card}>
            <div style={styles.cardLabel}>Scene Builder</div>

            <div style={styles.choiceGrid}>
              {scenes.map((scene) => {
                const active = scene.id === selectedScene;
                return (
                  <button
                    key={scene.id}
                    onClick={() => setSelectedScene(scene.id)}
                    style={{
                      ...styles.choiceButton,
                      ...(active ? styles.sceneButtonActive : {}),
                    }}
                  >
                    {scene.label}
                  </button>
                );
              })}
            </div>

            <div style={styles.noteBox}>
              <div style={styles.noteTitle}>AI Scene Note</div>
              <p style={styles.noteText}>{sceneNotes[selectedScene]}</p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, #1a2f61 0%, #0a1021 42%, #04050a 100%)",
    color: "white",
    position: "relative",
    overflow: "hidden",
    fontFamily: "Arial, sans-serif",
  },
  bgOrbOne: {
    position: "absolute",
    width: 520,
    height: 520,
    borderRadius: "50%",
    background: "rgba(82, 132, 255, 0.14)",
    filter: "blur(90px)",
    top: -120,
    left: "50%",
    transform: "translateX(-50%)",
    pointerEvents: "none",
  },
  bgOrbTwo: {
    position: "absolute",
    width: 420,
    height: 420,
    borderRadius: "50%",
    background: "rgba(198, 122, 255, 0.08)",
    filter: "blur(95px)",
    bottom: -120,
    right: -80,
    pointerEvents: "none",
  },
  bgOrbThree: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: "50%",
    background: "rgba(126, 190, 255, 0.08)",
    filter: "blur(70px)",
    bottom: 120,
    left: -60,
    pointerEvents: "none",
  },
  container: {
    maxWidth: 1380,
    margin: "0 auto",
    padding: "24px 24px 40px",
    position: "relative",
    zIndex: 2,
  },
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  backLink: {
    fontSize: 14,
    letterSpacing: 1.5,
    opacity: 0.82,
    textDecoration: "none",
  },
  topbarRight: {
    fontSize: 14,
    letterSpacing: 3,
    opacity: 0.7,
  },
  hero: {
    textAlign: "center",
    marginBottom: 28,
  },
  heroPortal: {
    position: "relative",
    width: 136,
    height: 136,
    margin: "0 auto 20px",
  },
  heroPortalRingOne: {
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.22)",
    boxShadow: "0 0 40px rgba(111, 163, 255, 0.24)",
  },
  heroPortalRingTwo: {
    position: "absolute",
    inset: 10,
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.14)",
  },
  heroPortalCore: {
    position: "absolute",
    inset: 24,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "radial-gradient(circle at 50% 32%, #8bd0ff 0%, #345493 42%, #10182d 100%)",
    fontSize: 42,
    boxShadow: "0 0 60px rgba(113, 166, 255, 0.34)",
  },
  title: {
    margin: 0,
    fontSize: 58,
    letterSpacing: 8,
    fontWeight: 700,
  },
  subtitle: {
    marginTop: 12,
    fontSize: 18,
    opacity: 0.82,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "280px 1fr 280px",
    gap: 22,
    alignItems: "stretch",
  },
  card: {
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 28,
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(12px)",
    padding: 20,
  },
  stageCard: {
    minHeight: 760,
    display: "flex",
    flexDirection: "column",
  },
  cardLabel: {
    fontSize: 12,
    letterSpacing: 3,
    textTransform: "uppercase",
    opacity: 0.72,
    marginBottom: 16,
  },
  stageHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  versionText: {
    fontSize: 11,
    letterSpacing: 2,
    textTransform: "uppercase",
    opacity: 0.5,
  },
  choiceGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
  },
  choiceButton: {
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 16,
    background: "rgba(255,255,255,0.04)",
    color: "white",
    padding: "14px 10px",
    cursor: "pointer",
    fontSize: 12,
    letterSpacing: 1.3,
    textTransform: "uppercase",
  },
  choiceButtonActive: {
    background: "rgba(116, 170, 255, 0.16)",
    border: "1px solid rgba(173, 209, 255, 0.38)",
    boxShadow: "0 0 20px rgba(109, 159, 255, 0.18)",
  },
  sceneButtonActive: {
    background: "rgba(185, 127, 255, 0.16)",
    border: "1px solid rgba(229, 191, 255, 0.36)",
    boxShadow: "0 0 20px rgba(193, 122, 255, 0.16)",
  },
  stageArea: {
    flex: 1,
    minHeight: 590,
    borderRadius: 28,
    border: "1px solid rgba(255,255,255,0.10)",
    background:
      "radial-gradient(circle at center, rgba(105,145,255,0.22) 0%, rgba(255,255,255,0.04) 35%, rgba(0,0,0,0.16) 100%)",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mainPortalGlow: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: "50%",
    background: "rgba(124, 171, 255, 0.10)",
    filter: "blur(35px)",
  },
  mainPortalRing: {
    position: "absolute",
    width: 320,
    height: 320,
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.16)",
    boxShadow: "0 0 70px rgba(113, 156, 255, 0.18)",
  },
  avatarWrap: {
    position: "relative",
    width: 330,
    height: 560,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarAura: {
    position: "absolute",
    bottom: 70,
    width: 180,
    height: 180,
    borderRadius: "50%",
    background: "rgba(167, 205, 255, 0.14)",
    filter: "blur(32px)",
  },
  avatar: {
    position: "relative",
    width: 220,
    height: 500,
  },
  head: {
    position: "absolute",
    top: 18,
    left: "50%",
    transform: "translateX(-50%)",
    width: 70,
    height: 78,
    borderRadius: "50%",
    background: "#f2d0b0",
  },
  neck: {
    position: "absolute",
    top: 86,
    left: "50%",
    transform: "translateX(-50%)",
    width: 18,
    height: 22,
    borderRadius: 8,
    background: "#f2d0b0",
  },
  torso: {
    position: "absolute",
    top: 102,
    left: "50%",
    transform: "translateX(-50%)",
    width: 110,
    height: 210,
    borderRadius: "60px 60px 50px 50px",
    background: "#f2d0b0",
  },
  hips: {
    position: "absolute",
    top: 274,
    left: "50%",
    transform: "translateX(-50%)",
    width: 154,
    height: 84,
    borderRadius: 60,
    background: "#f2d0b0",
  },
  legLeft: {
    position: "absolute",
    top: 340,
    left: 75,
    width: 28,
    height: 152,
    borderRadius: 20,
    background: "#f2d0b0",
  },
  legRight: {
    position: "absolute",
    top: 340,
    right: 75,
    width: 28,
    height: 152,
    borderRadius: 20,
    background: "#f2d0b0",
  },
  armLeft: {
    position: "absolute",
    top: 138,
    left: 40,
    width: 22,
    height: 160,
    borderRadius: 18,
    background: "#f2d0b0",
    transform: "rotate(8deg)",
  },
  armRight: {
    position: "absolute",
    top: 138,
    right: 40,
    width: 22,
    height: 160,
    borderRadius: 18,
    background: "#f2d0b0",
    transform: "rotate(-8deg)",
  },
  bikiniImage: {
    position: "absolute",
    top: 96,
    left: "50%",
    transform: "translateX(-50%)",
    width: 190,
    maxHeight: 320,
    objectFit: "contain",
    filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.28))",
    pointerEvents: "none",
  },
  footerBar: {
    marginTop: 18,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },
  lookTitle: {
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: 700,
  },
  lookMeta: {
    marginTop: 6,
    opacity: 0.72,
    fontSize: 13,
  },
  actionRow: {
    display: "flex",
    gap: 10,
  },
  actionButton: {
    border: "1px solid rgba(255,255,255,0.16)",
    background: "rgba(255,255,255,0.06)",
    color: "white",
    borderRadius: 999,
    padding: "12px 18px",
    cursor: "pointer",
    fontSize: 13,
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  noteBox: {
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 20,
    background: "rgba(255,255,255,0.04)",
    padding: 18,
    marginTop: 18,
  },
  noteTitle: {
    fontSize: 12,
    letterSpacing: 2,
    textTransform: "uppercase",
    opacity: 0.65,
    marginBottom: 10,
  },
  noteText: {
    margin: 0,
    lineHeight: 1.7,
    opacity: 0.84,
    fontSize: 14,
  },
};
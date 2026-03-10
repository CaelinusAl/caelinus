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
      <div style={styles.bgGlowOne} />
      <div style={styles.bgGlowTwo} />
      <div style={styles.bgGlowThree} />

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
              <span style={styles.versionText}>Caelinus v3</span>
            </div>

            <div style={styles.stageArea}>
              <div style={styles.mainPortalGlow} />
              <div style={styles.mainPortalRing} />

              <div style={styles.avatarWrap}>
                <div style={styles.avatarAura} />

                <svg
                  viewBox="0 0 360 760"
                  style={styles.avatarSvg}
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="skinGlow" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#f7dcc0" />
                      <stop offset="100%" stopColor="#f0cfb0" />
                    </linearGradient>
                    <filter id="softGlow">
                      <feGaussianBlur stdDeviation="10" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* head */}
                  <ellipse
                    cx="180"
                    cy="88"
                    rx="42"
                    ry="50"
                    fill="url(#skinGlow)"
                  />

                  {/* neck */}
                  <rect
                    x="166"
                    y="128"
                    width="28"
                    height="26"
                    rx="12"
                    fill="url(#skinGlow)"
                  />

                  {/* torso feminine */}
                  <path
                    d="M128 165
                       C136 146, 151 140, 180 140
                       C209 140, 224 146, 232 165
                       C243 190, 248 222, 246 262
                       C244 306, 235 352, 225 391
                       C216 425, 204 447, 180 447
                       C156 447, 144 425, 135 391
                       C125 352, 116 306, 114 262
                       C112 222, 117 190, 128 165Z"
                    fill="url(#skinGlow)"
                  />

                  {/* hips */}
                  <path
                    d="M116 392
                       C124 372, 145 360, 180 360
                       C215 360, 236 372, 244 392
                       C252 414, 250 446, 238 470
                       C226 494, 209 506, 180 506
                       C151 506, 134 494, 122 470
                       C110 446, 108 414, 116 392Z"
                    fill="url(#skinGlow)"
                  />

                  {/* left arm */}
                  <path
                    d="M112 182
                       C96 210, 86 245, 83 292
                       C81 325, 85 355, 95 379
                       C102 396, 117 398, 126 386
                       C133 375, 132 360, 126 344
                       C120 327, 118 307, 120 281
                       C123 245, 131 215, 145 186
                       C149 177, 146 168, 137 164
                       C128 160, 118 168, 112 182Z"
                    fill="url(#skinGlow)"
                  />

                  {/* right arm */}
                  <path
                    d="M248 182
                       C264 210, 274 245, 277 292
                       C279 325, 275 355, 265 379
                       C258 396, 243 398, 234 386
                       C227 375, 228 360, 234 344
                       C240 327, 242 307, 240 281
                       C237 245, 229 215, 215 186
                       C211 177, 214 168, 223 164
                       C232 160, 242 168, 248 182Z"
                    fill="url(#skinGlow)"
                  />

                  {/* left leg */}
                  <path
                    d="M151 492
                       C145 520, 141 562, 140 622
                       C140 669, 148 712, 161 732
                       C171 747, 191 746, 198 730
                       C204 717, 203 700, 198 678
                       C191 650, 189 606, 193 545
                       C194 521, 190 500, 180 489
                       C171 479, 156 481, 151 492Z"
                    fill="url(#skinGlow)"
                  />

                  {/* right leg */}
                  <path
                    d="M209 492
                       C215 520, 219 562, 220 622
                       C220 669, 212 712, 199 732
                       C189 747, 169 746, 162 730
                       C156 717, 157 700, 162 678
                       C169 650, 171 606, 167 545
                       C166 521, 170 500, 180 489
                       C189 479, 204 481, 209 492Z"
                    fill="url(#skinGlow)"
                    opacity={0.98}
                  />
                </svg>

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
  bgGlowOne: {
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
  bgGlowTwo: {
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
  bgGlowThree: {
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
    width: 340,
    height: 610,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarAura: {
    position: "absolute",
    bottom: 90,
    width: 200,
    height: 200,
    borderRadius: "50%",
    background: "rgba(167, 205, 255, 0.14)",
    filter: "blur(34px)",
  },
  avatarSvg: {
    width: 260,
    height: 550,
    display: "block",
    filter: "drop-shadow(0 10px 22px rgba(0,0,0,0.18))",
  },
  bikiniImage: {
    position: "absolute",
    top: 135,
    left: "50%",
    transform: "translateX(-50%)",
    width: 170,
    maxHeight: 280,
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
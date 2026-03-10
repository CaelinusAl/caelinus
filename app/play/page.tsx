"use client";

import { useMemo, useState } from "react";

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

export default function PlayPage() {
  const [selectedBikini, setSelectedBikini] = useState<BikiniId>("leo");
  const [selectedScene, setSelectedScene] = useState<
    "beach" | "coffee" | "night" | "resort"
  >("night");

  const selectedImage = useMemo(
    () => `/play/bikinis/${selectedBikini}.png`,
    [selectedBikini]
  );

  const sceneText = useMemo(() => {
    switch (selectedScene) {
      case "beach":
        return "Solar, open, luminous, effortless.";
      case "coffee":
        return "Soft daytime styling, city ease, sensual calm.";
      case "night":
        return "Magnetic silhouette, darker aura, after-dark frequency.";
      case "resort":
        return "Luxurious escape, fluid beauty, goddess leisure.";
      default:
        return "";
    }
  }, [selectedScene]);

  return (
    <main style={styles.page}>
      <div style={styles.backgroundGlowTop} />
      <div style={styles.backgroundGlowBottom} />

      <div style={styles.container}>
        <header style={styles.hero}>
          <div style={styles.portalWrap}>
            <div style={styles.portalOuter} />
            <div style={styles.portalInner} />
            <div style={styles.portalCore}>∞</div>
          </div>

          <h1 style={styles.title}>CAELINUS PLAY</h1>
          <p style={styles.subtitle}>Dress the Archetype</p>
        </header>

        <section style={styles.mainGrid}>
          <aside style={styles.sidebarCard}>
            <div style={styles.cardLabel}>Bikini Archive</div>

            <div style={styles.bikiniGrid}>
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

          <section style={styles.stageCard}>
            <div style={styles.stageHeader}>
              <span style={styles.cardLabel}>Avatar Stage</span>
              <span style={styles.versionTag}>Caelinus v1</span>
            </div>

            <div style={styles.stageArea}>
              <div style={styles.stagePortal} />

              <div style={styles.avatarColumn}>
                <div style={styles.avatarGlow} />
                <div style={styles.avatarBody}>
                  <div style={styles.avatarHead} />
                  <div style={styles.avatarTorso} />
                  <div style={styles.avatarHip} />
                  <div style={styles.avatarLegLeft} />
                  <div style={styles.avatarLegRight} />
                </div>

                <img
                  src={selectedImage}
                  alt={selectedBikini}
                  style={styles.bikiniImage}
                />
              </div>
            </div>

            <div style={styles.stageFooter}>
              <div>
                <div style={styles.lookTitle}>
                  {selectedBikini.toUpperCase()} LOOK
                </div>
                <div style={styles.lookSub}>
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

          <aside style={styles.sceneCard}>
            <div style={styles.cardLabel}>Scene Builder</div>

            <div style={styles.sceneButtons}>
              {scenes.map((scene) => {
                const active = scene.id === selectedScene;
                return (
                  <button
                    key={scene.id}
                    onClick={() => setSelectedScene(scene.id)}
                    style={{
                      ...styles.sceneButton,
                      ...(active ? styles.sceneButtonActive : {}),
                    }}
                  >
                    {scene.label}
                  </button>
                );
              })}
            </div>

            <div style={styles.sceneNoteBox}>
              <div style={styles.sceneNoteTitle}>AI Scene Note</div>
              <p style={styles.sceneNoteText}>{sceneText}</p>
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
      "radial-gradient(circle at 50% 0%, #1f3266 0%, #0a1022 40%, #04050b 100%)",
    color: "white",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  backgroundGlowTop: {
    position: "absolute",
    top: -120,
    left: "50%",
    transform: "translateX(-50%)",
    width: 700,
    height: 700,
    borderRadius: "50%",
    background: "rgba(96, 136, 255, 0.12)",
    filter: "blur(80px)",
    pointerEvents: "none",
  },
  backgroundGlowBottom: {
    position: "absolute",
    bottom: -180,
    right: -120,
    width: 520,
    height: 520,
    borderRadius: "50%",
    background: "rgba(195, 128, 255, 0.10)",
    filter: "blur(90px)",
    pointerEvents: "none",
  },
  container: {
    maxWidth: 1380,
    margin: "0 auto",
    padding: "36px 24px 48px",
    position: "relative",
    zIndex: 2,
  },
  hero: {
    textAlign: "center",
    marginBottom: 28,
  },
  portalWrap: {
    position: "relative",
    width: 130,
    height: 130,
    margin: "0 auto 18px",
  },
  portalOuter: {
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.20)",
    boxShadow: "0 0 40px rgba(108, 160, 255, 0.20)",
  },
  portalInner: {
    position: "absolute",
    inset: 10,
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.14)",
  },
  portalCore: {
    position: "absolute",
    inset: 22,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "radial-gradient(circle at 50% 35%, #7cc0ff 0%, #31518f 45%, #10182e 100%)",
    fontSize: 42,
    boxShadow: "0 0 50px rgba(110, 165, 255, 0.35)",
  },
  title: {
    margin: 0,
    fontSize: 56,
    letterSpacing: 8,
    fontWeight: 700,
  },
  subtitle: {
    marginTop: 14,
    fontSize: 18,
    opacity: 0.82,
    letterSpacing: 1.5,
  },
  mainGrid: {
    display: "grid",
    gridTemplateColumns: "300px 1fr 300px",
    gap: 24,
    alignItems: "stretch",
  },
  sidebarCard: {
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 28,
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(12px)",
    padding: 22,
  },
  stageCard: {
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 32,
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(12px)",
    padding: 24,
    minHeight: 760,
    display: "flex",
    flexDirection: "column",
  },
  sceneCard: {
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 28,
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(12px)",
    padding: 22,
  },
  cardLabel: {
    fontSize: 12,
    letterSpacing: 3,
    textTransform: "uppercase",
    opacity: 0.72,
    marginBottom: 16,
  },
  bikiniGrid: {
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
    letterSpacing: 1.4,
    textTransform: "uppercase",
  },
  choiceButtonActive: {
    background: "rgba(125, 171, 255, 0.16)",
    border: "1px solid rgba(171, 205, 255, 0.40)",
    boxShadow: "0 0 20px rgba(107, 158, 255, 0.18)",
  },
  stageHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  versionTag: {
    fontSize: 11,
    letterSpacing: 2,
    textTransform: "uppercase",
    opacity: 0.5,
  },
  stageArea: {
    flex: 1,
    minHeight: 580,
    borderRadius: 28,
    border: "1px solid rgba(255,255,255,0.10)",
    background:
      "radial-gradient(circle at center, rgba(104,145,255,0.24) 0%, rgba(255,255,255,0.04) 35%, rgba(0,0,0,0.14) 100%)",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  stagePortal: {
    position: "absolute",
    width: 320,
    height: 320,
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.18)",
    boxShadow: "0 0 80px rgba(113, 157, 255, 0.22)",
  },
  avatarColumn: {
    position: "relative",
    width: 320,
    height: 560,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarGlow: {
    position: "absolute",
    bottom: 60,
    width: 180,
    height: 180,
    borderRadius: "50%",
    background: "rgba(153, 192, 255, 0.18)",
    filter: "blur(35px)",
  },
  avatarBody: {
    position: "relative",
    width: 210,
    height: 500,
  },
  avatarHead: {
    position: "absolute",
    top: 26,
    left: "50%",
    transform: "translateX(-50%)",
    width: 74,
    height: 74,
    borderRadius: "50%",
    background: "#f2d1b2",
  },
  avatarTorso: {
    position: "absolute",
    top: 98,
    left: "50%",
    transform: "translateX(-50%)",
    width: 118,
    height: 210,
    borderRadius: 60,
    background: "#f2d1b2",
  },
  avatarHip: {
    position: "absolute",
    top: 262,
    left: "50%",
    transform: "translateX(-50%)",
    width: 156,
    height: 78,
    borderRadius: 60,
    background: "#f2d1b2",
  },
  avatarLegLeft: {
    position: "absolute",
    top: 324,
    left: 72,
    width: 30,
    height: 158,
    borderRadius: 20,
    background: "#f2d1b2",
  },
  avatarLegRight: {
    position: "absolute",
    top: 324,
    right: 72,
    width: 30,
    height: 158,
    borderRadius: 20,
    background: "#f2d1b2",
  },
  bikiniImage: {
    position: "absolute",
    top: 90,
    left: "50%",
    transform: "translateX(-50%)",
    width: 180,
    maxHeight: 310,
    objectFit: "contain",
    filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.25))",
    pointerEvents: "none",
  },
  stageFooter: {
    marginTop: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  lookTitle: {
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: 700,
  },
  lookSub: {
    marginTop: 6,
    opacity: 0.7,
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
  sceneButtons: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
    marginBottom: 18,
  },
  sceneButton: {
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 16,
    background: "rgba(255,255,255,0.04)",
    color: "white",
    padding: "16px 12px",
    cursor: "pointer",
    fontSize: 13,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  sceneButtonActive: {
    background: "rgba(193, 122, 255, 0.14)",
    border: "1px solid rgba(233, 189, 255, 0.38)",
    boxShadow: "0 0 20px rgba(193, 122, 255, 0.16)",
  },
  sceneNoteBox: {
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 20,
    background: "rgba(255,255,255,0.04)",
    padding: 18,
  },
  sceneNoteTitle: {
    fontSize: 12,
    letterSpacing: 2,
    textTransform: "uppercase",
    opacity: 0.65,
    marginBottom: 10,
  },
  sceneNoteText: {
    margin: 0,
    lineHeight: 1.7,
    opacity: 0.84,
    fontSize: 14,
  },
};
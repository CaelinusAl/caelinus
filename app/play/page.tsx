"use client";

import Link from "next/link";
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

type PareoId =
  | "none"
  | "blue_pareo"
  | "bordo_pareo"
  | "green_pareo"
  | "orange_pareo"
  | "golden_pareo"
  | "black_pareo"
  | "silver_pareo"
  | "white_pareo"
  | "pink_pareo";

type SceneId = "beach" | "coffee" | "night" | "resort";

type ArchetypeId =
  | "light"
  | "golden"
  | "dark"
  | "cosmic"
  | "minimal"
  | "athletic"
  | "curvy";

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

const pareos: { id: PareoId; label: string }[] = [
  { id: "none", label: "No Pareo" },
  { id: "blue_pareo", label: "Blue Pareo" },
  { id: "bordo_pareo", label: "Bordo Pareo" },
  { id: "green_pareo", label: "Green Pareo" },
  { id: "orange_pareo", label: "Orange Pareo" },
  { id: "golden_pareo", label: "Golden Pareo" },
  { id: "black_pareo", label: "Black Pareo" },
  { id: "silver_pareo", label: "Silver Pareo" },
  { id: "white_pareo", label: "White Pareo" },
  { id: "pink_pareo", label: "Pink Pareo" },
];

const scenes: { id: SceneId; label: string; sub: string }[] = [
  { id: "beach", label: "Beach", sub: "Solar" },
  { id: "coffee", label: "Coffee", sub: "Daylight" },
  { id: "night", label: "Night", sub: "Magnetic" },
  { id: "resort", label: "Resort", sub: "Luxury" },
];

const archetypes: {
  id: ArchetypeId;
  label: string;
  skin: string;
  glow: string;
}[] = [
  { id: "light", label: "Light", skin: "#f3d7bc", glow: "rgba(165,210,255,0.22)" },
  { id: "golden", label: "Golden", skin: "#d7a57a", glow: "rgba(255,208,122,0.22)" },
  { id: "dark", label: "Dark", skin: "#6d4637", glow: "rgba(190,130,255,0.18)" },
  { id: "cosmic", label: "Cosmic", skin: "#d9d8ff", glow: "rgba(140,160,255,0.22)" },
  { id: "minimal", label: "Minimal", skin: "#ead4c2", glow: "rgba(210,220,255,0.16)" },
  { id: "athletic", label: "Athletic", skin: "#c98f68", glow: "rgba(100,210,255,0.18)" },
  { id: "curvy", label: "Curvy", skin: "#a66d53", glow: "rgba(255,160,210,0.18)" },
];

const sceneNotes: Record<SceneId, string> = {
  beach: "Soft solar glow, sea breeze, luminous feminine ease.",
  coffee: "Daylight elegance, city softness, elevated casual magnetism.",
  night: "Dark glamour, magnetic silhouette, after-dark archetype energy.",
  resort: "Luxury escape, fluid sensuality, goddess leisure atmosphere.",
};

export default function PlayPage() {
  const [selectedArchetype, setSelectedArchetype] =
    useState<ArchetypeId>("cosmic");
  const [selectedBikini, setSelectedBikini] = useState<BikiniId>("scorpio");
  const [selectedPareo, setSelectedPareo] = useState<PareoId>("none");
  const [selectedScene, setSelectedScene] = useState<SceneId>("night");

  const currentArchetype = useMemo(
    () => archetypes.find((item) => item.id === selectedArchetype) ?? archetypes[0],
    [selectedArchetype]
  );

  const bikiniSrc = `/play/bikinis/${selectedBikini}.png`;
  const pareoSrc =
    selectedPareo === "none" ? "" : `/play/pareos/${selectedPareo}.png`;
  const sceneSrc = `/play/scenes/${selectedScene}.jpg`;

  const stageGlow = useMemo(() => {
    switch (selectedScene) {
      case "beach":
        return "radial-gradient(circle at center, rgba(88,194,255,0.24) 0%, rgba(255,255,255,0.03) 42%, rgba(0,0,0,0.22) 100%)";
      case "coffee":
        return "radial-gradient(circle at center, rgba(211,159,100,0.20) 0%, rgba(255,255,255,0.03) 42%, rgba(0,0,0,0.22) 100%)";
      case "night":
        return "radial-gradient(circle at center, rgba(117,139,255,0.24) 0%, rgba(255,255,255,0.03) 42%, rgba(0,0,0,0.24) 100%)";
      case "resort":
        return "radial-gradient(circle at center, rgba(220,129,255,0.18) 0%, rgba(255,255,255,0.03) 42%, rgba(0,0,0,0.22) 100%)";
    }
  }, [selectedScene]);

  return (
    <main style={styles.page}>
      <div style={styles.bgA} />
      <div style={styles.bgB} />
      <div style={styles.bgC} />

      <div style={styles.container}>
        <div style={styles.topbar}>
          <Link href="/" style={styles.backLink}>
            ← UNIVERSE
          </Link>
          <div style={styles.topbarRight}>CAELINUS PLAY V3.2</div>
        </div>

        <section style={styles.hero}>
          <div style={styles.heroPortal}>
            <div style={styles.heroRingOne} />
            <div style={styles.heroRingTwo} />
            <div style={styles.heroCore}>∞</div>
          </div>

          <h1 style={styles.title}>CAELINUS PLAY</h1>
          <p style={styles.subtitle}>Dress the Archetype</p>

          <button style={styles.enterButton}>ENTER THE PLAYGROUND</button>
        </section>

        <section style={styles.selectBlock}>
          <div style={styles.selectTitle}>SELECT YOUR ARCHETYPE</div>

          <div style={styles.archetypeRow}>
            {archetypes.map((item) => {
              const active = item.id === selectedArchetype;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedArchetype(item.id)}
                  style={{
                    ...styles.archetypeCard,
                    ...(active ? styles.archetypeCardActive : {}),
                  }}
                >
                  <div style={{ ...styles.archGlow, background: item.glow }} />
                  <div
                    style={{
                      ...styles.archetypeSilhouette,
                      background: item.skin,
                    }}
                  />
                  <div style={styles.archetypeLabel}>{item.label}</div>
                </button>
              );
            })}
          </div>
        </section>

        <section style={styles.mainGrid}>
          <div style={styles.leftPanel}>
            <div style={styles.panelTitle}>SELECT YOUR AVATAR</div>

            <div style={styles.controlSection}>
              <div style={styles.controlLabel}>Bikini</div>
              <div style={styles.controlGrid}>
                {bikinis.map((item) => {
                  const active = item.id === selectedBikini;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedBikini(item.id)}
                      style={{
                        ...styles.controlButton,
                        ...(active ? styles.activeBlue : {}),
                      }}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={styles.controlSection}>
              <div style={styles.controlLabel}>Pareo</div>
              <div style={styles.controlGrid}>
                {pareos.map((item) => {
                  const active = item.id === selectedPareo;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedPareo(item.id)}
                      style={{
                        ...styles.controlButton,
                        ...(active ? styles.activePurple : {}),
                      }}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={styles.avatarStageMini}>
              <img
                src={sceneSrc}
                alt={selectedScene}
                style={styles.stageSceneImage}
              />
              <div style={styles.stageSceneOverlay} />
              <div style={styles.avatarPortalMini} />
              <div style={styles.avatarMiniWrap}>
                <FashionAvatar
                  skinTone={currentArchetype.skin}
                  bikiniSrc={bikiniSrc}
                  pareoSrc={pareoSrc}
                  compact
                />
              </div>
            </div>

            <button style={styles.nextButton}>NEXT</button>
          </div>

          <div style={styles.rightPanel}>
            <div style={styles.panelTitle}>WHERE TO?</div>

            <div style={styles.sceneGrid}>
              {scenes.map((scene) => {
                const active = scene.id === selectedScene;
                return (
                  <button
                    key={scene.id}
                    onClick={() => setSelectedScene(scene.id)}
                    style={{
                      ...styles.sceneCard,
                      ...(active ? styles.sceneCardActive : {}),
                    }}
                  >
                    <img
                      src={`/play/scenes/${scene.id}.jpg`}
                      alt={scene.label}
                      style={styles.sceneCardImage}
                    />
                    <div style={styles.sceneImageOverlay} />
                    <div style={styles.sceneTextWrap}>
                      <div style={styles.sceneLabel}>{scene.label}</div>
                      <div style={styles.sceneSub}>{scene.sub}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div style={styles.previewPanel}>
              <div style={styles.previewTitle}>
                {selectedBikini.toUpperCase()} ARCHETYPE AI SCENE
              </div>

              <div style={styles.previewStage}>
                <img
                  src={sceneSrc}
                  alt={selectedScene}
                  style={styles.previewSceneImage}
                />
                <div style={styles.previewDarkOverlay} />
                <div
                  style={{
                    ...styles.previewGlowOverlay,
                    background: stageGlow,
                  }}
                />
                <div style={styles.previewPortal} />
                <div style={styles.previewAvatarWrap}>
                  <FashionAvatar
                    skinTone={currentArchetype.skin}
                    bikiniSrc={bikiniSrc}
                    pareoSrc={pareoSrc}
                    withHair
                  />
                </div>
              </div>

              <p style={styles.previewText}>{sceneNotes[selectedScene]}</p>

              <div style={styles.ctaRow}>
                <button style={styles.ctaButton}>BUY THIS LOOK</button>
                <button style={styles.ctaButton}>SAVE LOOK</button>
                <button style={styles.ctaButton}>SHARE LOOK</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function FashionAvatar({
  skinTone,
  bikiniSrc,
  pareoSrc,
  compact = false,
  withHair = false,
}: {
  skinTone: string;
  bikiniSrc: string;
  pareoSrc?: string;
  compact?: boolean;
  withHair?: boolean;
}) {
  const scale = compact ? 0.82 : 1;

  return (
    <div
      style={{
        ...styles.avatarBody,
        transform: `scale(${scale})`,
      }}
    >
      <div style={styles.avatarAura} />

      {withHair ? <div style={styles.avatarHair} /> : null}

      <div style={{ ...styles.avatarHead, background: skinTone }} />
      <div style={{ ...styles.avatarNeck, background: skinTone }} />
      <div style={{ ...styles.avatarChest, background: skinTone }} />
      <div style={{ ...styles.avatarWaist, background: skinTone }} />
      <div style={{ ...styles.avatarHips, background: skinTone }} />

      <div style={{ ...styles.armLeftUpper, background: skinTone }} />
      <div style={{ ...styles.armLeftLower, background: skinTone }} />
      <div style={{ ...styles.armRightUpper, background: skinTone }} />
      <div style={{ ...styles.armRightLower, background: skinTone }} />

      <div style={{ ...styles.legLeftUpper, background: skinTone }} />
      <div style={{ ...styles.legRightUpper, background: skinTone }} />
      <div style={{ ...styles.legLeftLower, background: skinTone }} />
      <div style={{ ...styles.legRightLower, background: skinTone }} />
      <div style={{ ...styles.footLeft, background: skinTone }} />
      <div style={{ ...styles.footRight, background: skinTone }} />

      <img src={bikiniSrc} alt="Bikini layer" style={styles.bikiniLayer} />
      {pareoSrc ? (
        <img src={pareoSrc} alt="Pareo layer" style={styles.pareoLayer} />
      ) : null}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, #201a3a 0%, #0d1124 35%, #05060b 100%)",
    color: "white",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  bgA: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 50% 0%, rgba(111,167,255,0.18) 0%, transparent 35%)",
    pointerEvents: "none",
  },
  bgB: {
    position: "absolute",
    top: -120,
    left: "50%",
    transform: "translateX(-50%)",
    width: 800,
    height: 800,
    borderRadius: "50%",
    background: "rgba(131,111,255,0.10)",
    filter: "blur(90px)",
    pointerEvents: "none",
  },
  bgC: {
    position: "absolute",
    bottom: -160,
    right: -80,
    width: 420,
    height: 420,
    borderRadius: "50%",
    background: "rgba(236,132,255,0.10)",
    filter: "blur(80px)",
    pointerEvents: "none",
  },
  container: {
    maxWidth: 1460,
    margin: "0 auto",
    padding: "20px 24px 42px",
    position: "relative",
    zIndex: 2,
  },
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  backLink: {
    color: "white",
    textDecoration: "none",
    opacity: 0.82,
    letterSpacing: 1.5,
    fontSize: 14,
  },
  topbarRight: {
    opacity: 0.7,
    letterSpacing: 3,
    fontSize: 13,
  },
  hero: {
    textAlign: "center",
    marginBottom: 34,
  },
  heroPortal: {
    position: "relative",
    width: 158,
    height: 158,
    margin: "0 auto 18px",
  },
  heroRingOne: {
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.28)",
    boxShadow: "0 0 45px rgba(126,173,255,0.25)",
  },
  heroRingTwo: {
    position: "absolute",
    inset: 12,
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.16)",
  },
  heroCore: {
    position: "absolute",
    inset: 28,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "radial-gradient(circle at 50% 35%, #8ed3ff 0%, #425ea7 45%, #11192d 100%)",
    fontSize: 46,
    boxShadow: "0 0 60px rgba(110,166,255,0.36)",
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
    opacity: 0.84,
  },
  enterButton: {
    marginTop: 22,
    border: "1px solid rgba(255,255,255,0.20)",
    background: "rgba(255,255,255,0.06)",
    color: "white",
    borderRadius: 999,
    padding: "16px 34px",
    fontSize: 15,
    letterSpacing: 1.4,
    cursor: "pointer",
    boxShadow: "0 0 24px rgba(121,150,255,0.16)",
  },
  selectBlock: {
    marginBottom: 28,
  },
  selectTitle: {
    textAlign: "center",
    fontSize: 30,
    letterSpacing: 4,
    marginBottom: 18,
  },
  archetypeRow: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: 14,
  },
  archetypeCard: {
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: 24,
    background: "rgba(255,255,255,0.05)",
    padding: "16px 12px",
    cursor: "pointer",
    color: "white",
    position: "relative",
    overflow: "hidden",
  },
  archetypeCardActive: {
    boxShadow: "0 0 24px rgba(144,164,255,0.22)",
    background: "rgba(124,153,255,0.12)",
  },
  archGlow: {
    position: "absolute",
    inset: "auto 20px 28px 20px",
    height: 24,
    borderRadius: "50%",
    filter: "blur(14px)",
  },
  archetypeSilhouette: {
    width: 54,
    height: 118,
    margin: "0 auto 12px",
    borderRadius: 999,
    boxShadow: "0 10px 18px rgba(0,0,0,0.14)",
    position: "relative",
    zIndex: 1,
  },
  archetypeLabel: {
    textAlign: "center",
    fontSize: 14,
    letterSpacing: 1.2,
    position: "relative",
    zIndex: 1,
  },
  mainGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 22,
  },
  leftPanel: {
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 28,
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(12px)",
    padding: 20,
  },
  rightPanel: {
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 28,
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(12px)",
    padding: 20,
  },
  panelTitle: {
    fontSize: 26,
    letterSpacing: 3,
    marginBottom: 18,
  },
  controlSection: {
    marginBottom: 18,
  },
  controlLabel: {
    fontSize: 12,
    letterSpacing: 2,
    textTransform: "uppercase",
    opacity: 0.64,
    marginBottom: 10,
  },
  controlGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
  },
  controlButton: {
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.05)",
    color: "white",
    borderRadius: 16,
    padding: "12px 10px",
    cursor: "pointer",
    fontSize: 12,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  activeBlue: {
    background: "rgba(120,164,255,0.16)",
    border: "1px solid rgba(176,210,255,0.36)",
    boxShadow: "0 0 20px rgba(112,162,255,0.16)",
  },
  activePurple: {
    background: "rgba(192,126,255,0.15)",
    border: "1px solid rgba(232,191,255,0.34)",
    boxShadow: "0 0 20px rgba(193,122,255,0.16)",
  },
  avatarStageMini: {
    marginTop: 18,
    height: 520,
    borderRadius: 26,
    border: "1px solid rgba(255,255,255,0.12)",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  stageSceneImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  stageSceneOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(8,10,18,0.18) 0%, rgba(8,10,18,0.34) 45%, rgba(8,10,18,0.64) 100%)",
  },
  avatarPortalMini: {
    position: "absolute",
    width: 260,
    height: 260,
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.14)",
    boxShadow: "0 0 50px rgba(118,156,255,0.18)",
  },
  avatarMiniWrap: {
    position: "relative",
    width: 260,
    height: 460,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  nextButton: {
    marginTop: 18,
    width: "100%",
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(255,255,255,0.06)",
    color: "white",
    borderRadius: 999,
    padding: "16px 22px",
    fontSize: 15,
    letterSpacing: 1.4,
    cursor: "pointer",
  },
  sceneGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 14,
  },
  sceneCard: {
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: 20,
    background: "rgba(255,255,255,0.05)",
    color: "white",
    padding: 0,
    cursor: "pointer",
    textAlign: "left",
    overflow: "hidden",
    position: "relative",
    minHeight: 160,
  },
  sceneCardActive: {
    boxShadow: "0 0 24px rgba(193,122,255,0.16)",
    transform: "translateY(-1px)",
  },
  sceneCardImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  sceneImageOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(10,12,20,0.10) 0%, rgba(10,12,20,0.34) 50%, rgba(10,12,20,0.78) 100%)",
  },
  sceneTextWrap: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 14,
    zIndex: 2,
  },
  sceneLabel: {
    fontSize: 22,
    letterSpacing: 1.5,
  },
  sceneSub: {
    marginTop: 4,
    fontSize: 12,
    letterSpacing: 1.4,
    opacity: 0.8,
    textTransform: "uppercase",
  },
  previewPanel: {
    marginTop: 18,
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 24,
    padding: 16,
    background: "rgba(255,255,255,0.04)",
  },
  previewTitle: {
    fontSize: 24,
    letterSpacing: 2,
    marginBottom: 14,
  },
  previewStage: {
    height: 520,
    borderRadius: 22,
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  previewSceneImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  previewDarkOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(8,10,18,0.12) 0%, rgba(8,10,18,0.30) 45%, rgba(8,10,18,0.76) 100%)",
  },
  previewGlowOverlay: {
    position: "absolute",
    inset: 0,
  },
  previewPortal: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.16)",
    boxShadow: "0 0 60px rgba(118,156,255,0.18)",
  },
  previewAvatarWrap: {
    position: "relative",
    width: 320,
    height: 500,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  previewText: {
    margin: 0,
    fontSize: 14,
    lineHeight: 1.7,
    opacity: 0.84,
  },
  ctaRow: {
    display: "flex",
    gap: 10,
    marginTop: 16,
    flexWrap: "wrap",
  },
  ctaButton: {
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(255,255,255,0.06)",
    color: "white",
    borderRadius: 999,
    padding: "12px 16px",
    cursor: "pointer",
    fontSize: 12,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  avatarBody: {
    position: "relative",
    width: 220,
    height: 560,
    transformOrigin: "center center",
  },
  avatarAura: {
    position: "absolute",
    inset: "120px 20px 140px 20px",
    borderRadius: "50%",
    background: "rgba(140,166,255,0.10)",
    filter: "blur(22px)",
  },
  avatarHair: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: 92,
    height: 132,
    borderRadius: "44px 44px 30px 30px",
    background: "linear-gradient(180deg, #251d2d 0%, #0f0d13 100%)",
    boxShadow: "0 14px 24px rgba(0,0,0,0.22)",
    zIndex: 1,
  },
  avatarHead: {
    position: "absolute",
    top: 26,
    left: "50%",
    transform: "translateX(-50%)",
    width: 66,
    height: 80,
    borderRadius: "46% 46% 42% 42%",
    boxShadow: "0 10px 18px rgba(0,0,0,0.08)",
    zIndex: 2,
  },
  avatarNeck: {
    position: "absolute",
    top: 102,
    left: "50%",
    transform: "translateX(-50%)",
    width: 16,
    height: 22,
    borderRadius: 10,
    zIndex: 2,
  },
  avatarChest: {
    position: "absolute",
    top: 118,
    left: "50%",
    transform: "translateX(-50%)",
    width: 104,
    height: 150,
    borderRadius: "48% 48% 42% 42%",
    boxShadow: "0 10px 18px rgba(0,0,0,0.08)",
    zIndex: 2,
  },
  avatarWaist: {
    position: "absolute",
    top: 236,
    left: "50%",
    transform: "translateX(-50%)",
    width: 62,
    height: 52,
    borderRadius: "44%",
    zIndex: 2,
  },
  avatarHips: {
    position: "absolute",
    top: 272,
    left: "50%",
    transform: "translateX(-50%)",
    width: 130,
    height: 102,
    borderRadius: "46% 46% 42% 42%",
    boxShadow: "0 10px 18px rgba(0,0,0,0.08)",
    zIndex: 2,
  },
  armLeftUpper: {
    position: "absolute",
    top: 132,
    left: 34,
    width: 22,
    height: 100,
    borderRadius: 20,
    transform: "rotate(12deg)",
    zIndex: 2,
  },
  armLeftLower: {
    position: "absolute",
    top: 222,
    left: 40,
    width: 18,
    height: 86,
    borderRadius: 20,
    transform: "rotate(4deg)",
    zIndex: 2,
  },
  armRightUpper: {
    position: "absolute",
    top: 132,
    right: 34,
    width: 22,
    height: 100,
    borderRadius: 20,
    transform: "rotate(-12deg)",
    zIndex: 2,
  },
  armRightLower: {
    position: "absolute",
    top: 222,
    right: 40,
    width: 18,
    height: 86,
    borderRadius: 20,
    transform: "rotate(-4deg)",
    zIndex: 2,
  },
  legLeftUpper: {
    position: "absolute",
    top: 360,
    left: 82,
    width: 24,
    height: 102,
    borderRadius: 18,
    zIndex: 2,
  },
  legRightUpper: {
    position: "absolute",
    top: 360,
    right: 82,
    width: 24,
    height: 102,
    borderRadius: 18,
    zIndex: 2,
  },
  legLeftLower: {
    position: "absolute",
    top: 456,
    left: 85,
    width: 20,
    height: 94,
    borderRadius: 18,
    zIndex: 2,
  },
  legRightLower: {
    position: "absolute",
    top: 456,
    right: 85,
    width: 20,
    height: 94,
    borderRadius: 18,
    zIndex: 2,
  },
  footLeft: {
    position: "absolute",
    top: 540,
    left: 78,
    width: 30,
    height: 12,
    borderRadius: 12,
    zIndex: 2,
  },
  footRight: {
    position: "absolute",
    top: 540,
    right: 78,
    width: 30,
    height: 12,
    borderRadius: 12,
    zIndex: 2,
  },
  bikiniLayer: {
    position: "absolute",
    top: 144,
    left: "50%",
    transform: "translateX(-50%)",
    width: 136,
    maxHeight: 220,
    objectFit: "contain",
    pointerEvents: "none",
    filter: "drop-shadow(0 12px 20px rgba(0,0,0,0.22))",
    zIndex: 3,
  },
  pareoLayer: {
    position: "absolute",
    top: 268,
    left: "50%",
    transform: "translateX(-50%)",
    width: 176,
    maxHeight: 232,
    objectFit: "contain",
    pointerEvents: "none",
    filter: "drop-shadow(0 12px 20px rgba(0,0,0,0.18))",
    zIndex: 4,
  },
};
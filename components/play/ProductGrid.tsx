import { Scene } from "../../types/play";

type Props = {
  activeScene: Scene;
};

export default function ProductGrid({ activeScene }: Props) {
  return (
    <section style={styles.wrap}>
      <div style={styles.grid}>
        <div style={styles.leftCard}>
          <img src={activeScene.image} alt={activeScene.label} style={styles.leftImage} />
          <div style={styles.leftOverlay} />
          <div style={styles.leftPortalOuter} />
          <div style={styles.leftPortalInner} />

          <div style={styles.leftContent}>
            <div style={styles.eyebrow}>CAELINUS PRESENCE</div>
            <div style={styles.headline}>Foundation first. Form later.</div>
            <p style={styles.text}>
              We are building the atmosphere, color language and luxury space of the
              Play experience before placing the avatar inside it.
            </p>
          </div>
        </div>

        <div style={styles.rightCard}>
          <div style={styles.rightTitle}>
            {activeScene.label.toUpperCase()} ARCHETYPE AI SCENE
          </div>

          <div style={styles.previewStage}>
            <img src={activeScene.image} alt={activeScene.label} style={styles.previewImage} />
            <div style={styles.previewOverlay} />
            <div style={styles.previewPortalOuter} />
            <div style={styles.previewPortalInner} />

            <div style={styles.previewMoodCard}>
              <div style={styles.previewMoodLabel}>SELECTED DESTINATION</div>
              <div style={styles.previewMoodValue}>{activeScene.label}</div>
            </div>
          </div>

          <p style={styles.previewText}>{activeScene.description}</p>

          <div style={styles.actions}>
            <button style={styles.button}>BUILD THIS MOOD</button>
            <button style={styles.button}>SAVE DIRECTION</button>
            <button style={styles.button}>SHARE VISION</button>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
    marginBottom: 20,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 22,
  },

  leftCard: {
    position: "relative",
    minHeight: 560,
    borderRadius: 30,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow:
      "0 24px 80px rgba(0,0,0,0.24), inset 0 0 0 1px rgba(255,255,255,0.03)",
    background: "rgba(255,255,255,0.04)",
  },

  leftImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center top",
    animation: "caelinusFloat 20s ease-in-out infinite",
    transform: "scale(1.05)",
  },

  leftOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(8,10,18,0.10) 0%, rgba(8,10,18,0.24) 36%, rgba(8,10,18,0.72) 100%)",
  },

  leftPortalOuter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 360,
    height: 470,
    transform: "translate(-50%, -50%)",
    borderRadius: "200px / 260px",
    border: "1px solid rgba(255,255,255,0.14)",
    boxShadow: "0 0 100px rgba(132,164,255,0.18)",
  },

  leftPortalInner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 270,
    height: 380,
    transform: "translate(-50%, -50%)",
    borderRadius: "150px / 210px",
    border: "1px solid rgba(255,255,255,0.10)",
  },

  leftContent: {
    position: "absolute",
    left: 28,
    right: 28,
    bottom: 26,
    zIndex: 2,
  },

  eyebrow: {
    fontSize: 11,
    letterSpacing: 2,
    opacity: 0.76,
    textTransform: "uppercase",
    marginBottom: 10,
  },

  headline: {
    fontSize: 34,
    lineHeight: 1.04,
    fontWeight: 700,
    maxWidth: 460,
    marginBottom: 12,
  },

  text: {
    margin: 0,
    maxWidth: 470,
    fontSize: 14,
    lineHeight: 1.7,
    opacity: 0.86,
  },

  railCard: {
  position: "relative",
  minHeight: 420,
  borderRadius: 20,
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.03)",
  transition: "all 0.35s ease",
  cursor: "pointer"
},


railCardHover: {
  transform: "translateY(-10px) scale(1.03)",
  boxShadow: "0 30px 90px rgba(0,0,0,0.45)",
  border: "1px solid rgba(120,170,255,0.35)"
},
railImage:{
 position:"absolute",
 inset:0,
 width:"100%",
 height:"100%",
 objectFit:"cover",
 transition:"transform 8s ease",
 transform:"scale(1.05)"
},
railImageHover:{
 transform:"scale(1.15)"
},
railOverlay:{
 position:"absolute",
 inset:0,
 background:
 "linear-gradient(180deg, rgba(10,12,22,0.05) 0%, rgba(10,12,22,0.55) 100%)"
},
  rightTitle: {
    fontSize: 28,
    lineHeight: 1.1,
    letterSpacing: 2,
    fontWeight: 700,
    marginBottom: 16,
  },

  previewStage: {
    height: 460,
    borderRadius: 24,
    position: "relative",
    overflow: "hidden",
    marginBottom: 14,
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
  },

  previewImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center top",
    animation: "caelinusFloat 18s ease-in-out infinite",
    transform: "scale(1.06)",
  },

  previewOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(8,10,18,0.06) 0%, rgba(8,10,18,0.18) 36%, rgba(8,10,18,0.66) 100%)",
  },

  previewPortalOuter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 320,
    height: 430,
    transform: "translate(-50%, -50%)",
    borderRadius: "180px / 240px",
    border: "1px solid rgba(255,255,255,0.16)",
    boxShadow: "0 0 100px rgba(132,164,255,0.20)",
  },

  previewPortalInner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 250,
    height: 360,
    transform: "translate(-50%, -50%)",
    borderRadius: "150px / 210px",
    border: "1px solid rgba(255,255,255,0.12)",
  },

  previewMoodCard: {
    position: "absolute",
    left: "50%",
    bottom: 34,
    transform: "translateX(-50%)",
    minWidth: 220,
    borderRadius: 22,
    padding: "18px 22px",
    textAlign: "center",
    background: "rgba(7,10,18,0.46)",
    border: "1px solid rgba(255,255,255,0.14)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.22)",
    backdropFilter: "blur(10px)",
  },

  previewMoodLabel: {
    fontSize: 11,
    letterSpacing: 2,
    opacity: 0.72,
    textTransform: "uppercase",
    marginBottom: 8,
  },

  previewMoodValue: {
    fontSize: 30,
    letterSpacing: 2,
    fontWeight: 700,
  },

  previewText: {
    margin: 0,
    fontSize: 14,
    lineHeight: 1.7,
    opacity: 0.86,
  },

  actions: {
    display: "flex",
    gap: 10,
    marginTop: 16,
    flexWrap: "wrap",
  },

  button: {
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
};

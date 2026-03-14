import { Scene, SceneId } from "../../types/play";

type Props = {
  scenes: Scene[];
  selectedScene: SceneId;
  onSelect: (id: SceneId) => void;
};

export default function SceneSelector({ scenes, selectedScene, onSelect }: Props) {
  return (
    <section style={styles.wrap}>
      <div style={styles.panelTitle}>WHERE TO?</div>

      <div style={styles.grid}>
        {scenes.map((scene) => {
          const active = selectedScene === scene.id;

          return (
            <button
              key={scene.id}
              onClick={() => onSelect(scene.id)}
              style={{
                ...styles.card,
                ...(active ? styles.cardActive : {}),
              }}
            >
              <img src={scene.image} alt={scene.label} style={styles.image} />
              <div style={styles.overlay} />
              <div style={styles.textWrap}>
                <div style={styles.label}>{scene.label}</div>
                <div style={styles.sub}>{scene.sub}</div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
  marginBottom: 24,
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: 28,
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(16px)",
  padding: 20,
},

panelTitle: {
  fontSize: 28,
  letterSpacing: 3,
  marginBottom: 16,
},

grid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: 14,
},

card: {
  position: "relative",
  minHeight: 170,
  borderRadius: 22,
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.05)",
  cursor: "pointer",
  padding: 0,
  textAlign: "left",
  boxShadow: "0 14px 40px rgba(0,0,0,0.18)",
},

cardActive: {
  boxShadow: "0 0 26px rgba(193,122,255,0.20)",
  transform: "translateY(-2px)",
},

image: {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  animation: "caelinusFloat 18s ease-in-out infinite",
  transform: "scale(1.05)",
},
  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(10,12,20,0.10) 0%, rgba(10,12,20,0.34) 50%, rgba(10,12,20,0.78) 100%)",
  },
  textWrap: {
    position: "absolute",
    left: 18,
    right: 18,
    bottom: 16,
    zIndex: 2,
  },
  label: {
    fontSize: 26,
    letterSpacing: 1.2,
  },
  sub: {
    marginTop: 5,
    fontSize: 12,
    letterSpacing: 1.4,
    opacity: 0.84,
    textTransform: "uppercase",
  },
};
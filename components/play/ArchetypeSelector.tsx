import { Archetype, ArchetypeId } from "../../types/play";

type Props = {
  archetypes: Archetype[];
  selectedArchetype: ArchetypeId;
  onSelect: (id: ArchetypeId) => void;
};

export default function ArchetypeSelector({
  archetypes,
  selectedArchetype,
  onSelect,
}: Props) {
  return (
    <section style={styles.wrap}>
      <div style={styles.title}>SELECT YOUR ARCHETYPE</div>

      <div style={styles.grid}>
        {archetypes.map((item) => {
          const active = selectedArchetype === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              style={{
                ...styles.card,
                ...(active ? styles.cardActive : {}),
              }}
            >
              <div style={{ ...styles.glow, background: item.glow }} />
              <div style={styles.figureWrap}>
                <div style={{ ...styles.figure, background: item.tone }} />
              </div>
              <div style={styles.label}>{item.label}</div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrap: {
  marginBottom: 34,
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: 30,
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(16px)",
  padding: 26,
  boxShadow: "0 24px 80px rgba(0,0,0,0.24)",
},

title: {
  textAlign: "center",
  fontSize: 28,
  letterSpacing: 4,
  marginBottom: 22,
  opacity: 0.96,
},

grid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
  gap: 16,
},

card: {
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 26,
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
  padding: "18px 12px 16px",
  cursor: "pointer",
  color: "white",
  position: "relative",
  overflow: "hidden",
  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.02)",
},

cardActive: {
  boxShadow:
    "0 0 28px rgba(144,164,255,0.26), inset 0 0 0 1px rgba(255,255,255,0.06)",
  background:
    "linear-gradient(180deg, rgba(131,156,255,0.14) 0%, rgba(255,255,255,0.05) 100%)",
  transform: "translateY(-2px)",
},

figure: {
  width: 62,
  height: 138,
  borderRadius: 999,
  boxShadow: "0 18px 28px rgba(0,0,0,0.22)",
},
  label: {
    textAlign: "center",
    fontSize: 14,
    letterSpacing: 1.2,
    position: "relative",
    zIndex: 1,
    marginTop: 12,
  },
};
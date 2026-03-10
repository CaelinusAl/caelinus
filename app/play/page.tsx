export default function PlayPage() {
  const bikinis = [
    "Aquarius",
    "Aries",
    "Cancer",
    "Capricorn",
    "Gemini",
    "Leo",
    "Libra",
    "Pisces",
    "Sagittarius",
    "Scorpio",
    "Taurus",
    "Virgo",
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1a2d5a 0%, #0b1124 45%, #05070f 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "56px",
              letterSpacing: "8px",
              fontWeight: 700,
            }}
          >
            CAELINUS PLAY
          </h1>

          <p
            style={{
              marginTop: "16px",
              fontSize: "18px",
              opacity: 0.82,
            }}
          >
            Dress the Archetype
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "320px 1fr",
            gap: "24px",
          }}
        >
          <aside
            style={{
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: "28px",
              padding: "24px",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                opacity: 0.7,
                marginBottom: "18px",
              }}
            >
              Bikini Archive
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
              {bikinis.map((item) => (
                <div
                  key={item}
                  style={{
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "18px",
                    padding: "14px 10px",
                    textAlign: "center",
                    background: "rgba(255,255,255,0.04)",
                    fontSize: "13px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>

          <section
            style={{
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: "32px",
              padding: "28px",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  opacity: 0.7,
                }}
              >
                Avatar Stage
              </div>

              <div
                style={{
                  fontSize: "12px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  opacity: 0.5,
                }}
              >
                Caelinus v1
              </div>
            </div>

            <div
              style={{
                minHeight: "620px",
                borderRadius: "28px",
                border: "1px solid rgba(255,255,255,0.1)",
                background:
                  "radial-gradient(circle at center, rgba(111,151,255,0.22) 0%, rgba(255,255,255,0.04) 30%, rgba(0,0,0,0.18) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "260px",
                  height: "260px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.18)",
                  boxShadow: "0 0 60px rgba(109,156,255,0.35)",
                }}
              />

              <div
                style={{
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "24px",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  Avatar Engine Ready
                </div>

                <div
                  style={{
                    fontSize: "15px",
                    opacity: 0.78,
                  }}
                >
                  Next step: bikini layers, pareo, accessories and scene system
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
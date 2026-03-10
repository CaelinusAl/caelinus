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

export default function PlayPage() {
  const [selectedBikini, setSelectedBikini] = useState<BikiniId>("leo");
  const [selectedScene, setSelectedScene] = useState<
    "beach" | "coffee" | "night" | "resort"
  >("night");

  const selectedImage = useMemo(
    () => `/play/bikinis/${selectedBikini}.png`,
    [selectedBikini]
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1f3266 0%, #0a1022 40%, #04050b 100%)",
        color: "white",
        padding: "28px",
      }}
    >
      <div style={{ maxWidth: "1380px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "28px",
          }}
        >
          <Link href="/" style={{ opacity: 0.8 }}>
            ← UNIVERSE
          </Link>
          <div style={{ letterSpacing: "4px", fontSize: "14px", opacity: 0.7 }}>
            CAELINUS PLAY
          </div>
        </div>

        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "56px",
              letterSpacing: "8px",
            }}
          >
            CAELINUS PLAY
          </h1>
          <p style={{ marginTop: "12px", opacity: 0.82 }}>
            Dress the Archetype
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "300px 1fr 300px",
            gap: "24px",
          }}
        >
          <aside
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "28px",
              background: "rgba(255,255,255,0.05)",
              padding: "22px",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                opacity: 0.72,
                marginBottom: "16px",
              }}
            >
              Bikini Archive
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              {bikinis.map((item) => {
                const active = item.id === selectedBikini;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedBikini(item.id)}
                    style={{
                      border: active
                        ? "1px solid rgba(171, 205, 255, 0.40)"
                        : "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "16px",
                      background: active
                        ? "rgba(125, 171, 255, 0.16)"
                        : "rgba(255,255,255,0.04)",
                      color: "white",
                      padding: "14px 10px",
                      cursor: "pointer",
                      fontSize: "12px",
                      letterSpacing: "1.4px",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </aside>

          <section
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "32px",
              background: "rgba(255,255,255,0.05)",
              padding: "24px",
              minHeight: "760px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "18px",
              }}
            >
              <span style={{ fontSize: "12px", letterSpacing: "3px", opacity: 0.72 }}>
                AVATAR STAGE
              </span>
              <span style={{ fontSize: "11px", letterSpacing: "2px", opacity: 0.5 }}>
                Caelinus v1
              </span>
            </div>

            <div
              style={{
                flex: 1,
                minHeight: "580px",
                borderRadius: "28px",
                border: "1px solid rgba(255,255,255,0.10)",
                background:
                  "radial-gradient(circle at center, rgba(104,145,255,0.24) 0%, rgba(255,255,255,0.04) 35%, rgba(0,0,0,0.14) 100%)",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "320px",
                  height: "320px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.18)",
                  boxShadow: "0 0 80px rgba(113, 157, 255, 0.22)",
                }}
              />

              <div
                style={{
                  position: "relative",
                  width: "320px",
                  height: "560px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "210px",
                    height: "500px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "26px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "74px",
                      height: "74px",
                      borderRadius: "50%",
                      background: "#f2d1b2",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "98px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "118px",
                      height: "210px",
                      borderRadius: "60px",
                      background: "#f2d1b2",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "262px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "156px",
                      height: "78px",
                      borderRadius: "60px",
                      background: "#f2d1b2",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "324px",
                      left: "72px",
                      width: "30px",
                      height: "158px",
                      borderRadius: "20px",
                      background: "#f2d1b2",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "324px",
                      right: "72px",
                      width: "30px",
                      height: "158px",
                      borderRadius: "20px",
                      background: "#f2d1b2",
                    }}
                  />
                </div>

                <img
                  src={selectedImage}
                  alt={selectedBikini}
                  style={{
                    position: "absolute",
                    top: "90px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "180px",
                    maxHeight: "310px",
                    objectFit: "contain",
                    filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.25))",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                marginTop: "18px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontSize: "18px", letterSpacing: "2px", fontWeight: 700 }}>
                  {selectedBikini.toUpperCase()} LOOK
                </div>
                <div style={{ marginTop: "6px", opacity: 0.7, fontSize: "13px" }}>
                  Scene: {selectedScene.toUpperCase()}
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <button style={pillButton}>Buy</button>
                <button style={pillButton}>Save</button>
                <button style={pillButton}>Share</button>
              </div>
            </div>
          </section>

          <aside
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "28px",
              background: "rgba(255,255,255,0.05)",
              padding: "22px",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                opacity: 0.72,
                marginBottom: "16px",
              }}
            >
              Scene Builder
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
                marginBottom: "18px",
              }}
            >
              {scenes.map((scene) => {
                const active = scene.id === selectedScene;
                return (
                  <button
                    key={scene.id}
                    onClick={() => setSelectedScene(scene.id)}
                    style={{
                      border: active
                        ? "1px solid rgba(233, 189, 255, 0.38)"
                        : "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "16px",
                      background: active
                        ? "rgba(193, 122, 255, 0.14)"
                        : "rgba(255,255,255,0.04)",
                      color: "white",
                      padding: "16px 12px",
                      cursor: "pointer",
                      fontSize: "13px",
                      letterSpacing: "1.2px",
                      textTransform: "uppercase",
                    }}
                  >
                    {scene.label}
                  </button>
                );
              })}
            </div>

            <div
              style={{
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.04)",
                padding: "18px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  opacity: 0.65,
                  marginBottom: "10px",
                }}
              >
                AI Scene Note
              </div>
              <p style={{ margin: 0, lineHeight: 1.7, opacity: 0.84, fontSize: "14px" }}>
                {selectedScene === "beach" && "Solar, open, luminous, effortless."}
                {selectedScene === "coffee" && "Soft daytime styling, city ease, sensual calm."}
                {selectedScene === "night" && "Magnetic silhouette, darker aura, after-dark frequency."}
                {selectedScene === "resort" && "Luxurious escape, fluid beauty, goddess leisure."}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

const pillButton: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.16)",
  background: "rgba(255,255,255,0.06)",
  color: "white",
  borderRadius: "999px",
  padding: "12px 18px",
  cursor: "pointer",
  fontSize: "13px",
  letterSpacing: "1px",
  textTransform: "uppercase",
};
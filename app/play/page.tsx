"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";

const looks = [
  { id: "aries", title: "Aries — Fire Muse", image: "/play/shop/aries-look.jpg" },
  { id: "taurus", title: "Taurus — Earth Veil", image: "/play/shop/taurus-look.jpg" },
  { id: "gemini", title: "Gemini — Twin Light", image: "/play/shop/gemini-look.jpg" },
  { id: "cancer", title: "Cancer — Moon Veil", image: "/play/shop/cancer-look.jpg" },
  { id: "leo", title: "Leo — Solar Queen", image: "/play/shop/leo-look.jpg" },
  { id: "virgo", title: "Virgo — Pearl Code", image: "/play/shop/virgo-look.jpg" },
  { id: "libra", title: "Libra — Venus Balance", image: "/play/shop/libra-look.jpg" },
  { id: "scorpio", title: "Scorpio — Night Oracle", image: "/play/shop/scorpio-look.jpg" },
  { id: "sagittarius", title: "Sagittarius — Golden Arrow", image: "/play/shop/sagittarius-look.jpg" },
  { id: "capricorn", title: "Capricorn — Stone Siren", image: "/play/shop/capricorn-look.jpg" },
  { id: "aquarius", title: "Aquarius — Star Current", image: "/play/shop/aquarius-look.jpg" },
  { id: "pisces", title: "Pisces — Dream Tide", image: "/play/shop/pisces-look.jpg" },
];

export default function HomePage() {
  const [selectedLookId, setSelectedLookId] = useState("scorpio");

  const selectedLook = useMemo(
    () => looks.find((item) => item.id === selectedLookId) ?? looks[0],
    [selectedLookId]
  );

  const leftLooks = looks.slice(0, 6);
  const rightLooks = looks.slice(6, 12);

  return (
    <main style={styles.page}>
      <div className="stars-parallax stars-small" />
      <div className="stars-parallax stars-medium" />
      <div className="stars-parallax stars-large" />

      <div style={styles.bgGlowA} />
      <div style={styles.bgGlowB} />
      <div style={styles.bgGlowC} />

      <section style={styles.shell}>
        <div style={styles.header}>
          <div style={styles.eyebrow}>MOON TEMPLE EDITION</div>
          <h1 style={styles.title}>CAELINUS ZODIAC PORTAL</h1>
          <p style={styles.subtitle}>12 goddesses. One moon gate.</p>
        </div>

        <div style={styles.stage}>
          <div style={styles.sideColumn}>
            <div style={styles.sideGlow} />
            {leftLooks.map((look, index) => {
              const active = selectedLook.id === look.id;

              return (
                <button
                  key={look.id}
                  onClick={() => setSelectedLookId(look.id)}
                  style={{
                    ...styles.sideCard,
                    ...(active ? styles.sideCardActive : {}),
                    animationDelay: `${index * 120}ms`,
                  }}
                  className="caelinus-side-drop"
                >
                  <img src={look.image} alt={look.title} style={styles.sideCardImage} />
                  <div style={styles.sideCardOverlay} />
                  <div style={styles.sideCardLabel}>{look.title}</div>
                </button>
              );
            })}
          </div>

          <div style={styles.portalCenter}>
            <div style={styles.portalAuraOuter} />
            <div style={styles.portalAuraInner} />
            <div style={styles.portalFog} />

            <div className="caelinus-poster-tilt" style={styles.portalWrap}>
              <img
                key={selectedLook.image}
                src={selectedLook.image}
                alt={selectedLook.title}
                style={styles.portalImage}
                className="caelinus-portal-image"
              />
              <div style={styles.portalRing} />
              <div style={styles.portalShine} />
            </div>

            <div style={styles.portalMeta}>
              <div style={styles.portalTag}>SELECTED LOOK</div>
              <div style={styles.portalName}>{selectedLook.title}</div>
            </div>

            <div style={styles.ctaRow}>
              <Link href="/shop" style={styles.primaryBtn}>
                ENTER THE PORTAL
              </Link>
              <Link href="/play" style={styles.secondaryBtn}>
                GO TO CAELINUS PLAY
              </Link>
            </div>
          </div>

          <div style={styles.sideColumn}>
            {rightLooks.map((look, index) => {
              const active = selectedLook.id === look.id;

              return (
                <button
                  key={look.id}
                  onClick={() => setSelectedLookId(look.id)}
                  style={{
                    ...styles.sideCard,
                    ...(active ? styles.sideCardActive : {}),
                    animationDelay: `${index * 120}ms`,
                  }}
                  className="caelinus-side-drop"
                >
                  <img src={look.image} alt={look.title} style={styles.sideCardImage} />
                  <div style={styles.sideCardOverlay} />
                  <div style={styles.sideCardLabel}>{look.title}</div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    background:
      "radial-gradient(circle at top, rgba(28,43,82,0.96) 0%, rgba(7,10,21,1) 52%, rgba(4,6,14,1) 100%)",
    color: "white",
    padding: "28px 16px 60px",
  },

  shell: {
    position: "relative",
    zIndex: 2,
    maxWidth: 1480,
    margin: "0 auto",
  },

  header: {
    textAlign: "center",
    marginBottom: 24,
  },

  eyebrow: {
    fontSize: 11,
    letterSpacing: 3.2,
    textTransform: "uppercase",
    opacity: 0.72,
    marginBottom: 10,
  },

  title: {
    margin: 0,
    fontSize: "clamp(34px, 6vw, 88px)",
    lineHeight: 0.95,
    letterSpacing: 2,
    fontWeight: 700,
    textTransform: "uppercase",
  },

  subtitle: {
    marginTop: 14,
    marginBottom: 0,
    fontSize: 16,
    opacity: 0.82,
  },

  stage: {
    display: "grid",
    gridTemplateColumns: "420px minmax(720px, 760px) 190px",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop:10,
  },

  sideColumn: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    paddingTop: 80,
    paddingBottom: 80,
    position: "relative",
  },

  sideCard: {
    position: "relative",
    height: 110,
    borderRadius: 22,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.05)",
    cursor: "pointer",
    padding: 0,
    boxShadow: "0 10px 30px rgba(255,255,255,0.03)",
    opacity: 0,
    transform: "translateY(-30px)",
  },

  sideCardActive: {
    border: "1px solid rgba(170,195,255,0.24)",
    boxShadow:
      "0 0 30px rgba(140,176,255,0.18), 0 0 50px rgba(170,120,255,0.10)",
      transform: "scale(1.02)",
  },

  sideCardImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center 18%",
    filter: "saturate(1.02)",
  },

  sideCardOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(10,12,20,0.18) 0%, rgba(10,12,20,0.26) 55%, rgba(10,12,20,0.88) 100%)",
  },

  sideCardLabel: {
  position: "absolute",
  left: 10,
  right: 10,
  bottom: 10,
  fontSize: 12,
  lineHeight: 1.25,
  fontWeight: 600,
  textAlign: "left",
  textShadow: "0 2px 12px rgba(0,0,0,0.35)",
},

  portalCenter: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: 980,
  },

  portalWrap: {
    position: "relative",
    width: "100%",
    maxWidth: 760,
  },

  portalImage: {
    width: "100%",
    display: "block",
    borderRadius: "340px / 520px",
    position: "relative",
    zIndex: 2,
    animation: "caelinusLivingPoster 9s ease-in-out infinite",
    boxShadow:
      "0 30px 120px rgba(0,0,0,0.44), 0 0 60px rgba(130,170,255,0.14)",
  },

  portalRing: {
    position: "absolute",
    inset: -18,
    borderRadius: "360px / 540px",
    border: "1px solid rgba(255,255,255,0.10)",
    boxShadow:
      "0 0 40px rgba(140,176,255,0.18), 0 0 90px rgba(175,120,255,0.12)",
    zIndex: 1,
  },

  portalShine: {
    position: "absolute",
    inset: 0,
    borderRadius: "340px / 520px",
    background:
      "linear-gradient(115deg, rgba(255,255,255,0.00) 18%, rgba(255,255,255,0.14) 34%, rgba(255,255,255,0.00) 52%)",
    mixBlendMode: "screen",
    opacity: 0.5,
    zIndex: 3,
    animation: "caelinusShineSweep 6s ease-in-out infinite",
  },

  portalAuraOuter: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 860,
    height: 860,
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.05)",
    boxShadow:
      "0 0 90px rgba(132,166,255,0.18), 0 0 180px rgba(170,120,255,0.10)",
    zIndex: 0,
  },

  portalAuraInner: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 620,
    height: 620,
    borderRadius: "50%",
    background: "rgba(170,205,255,0.12)",
    filter: "blur(70px)",
    animation: "softGlow 8s ease-in-out infinite",
    zIndex: 0,
  },

  portalFog: {
    position: "absolute",
    left: "50%",
    bottom: 120,
    transform: "translateX(-50%)",
    width: 660,
    height: 150,
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(176,196,255,0.14) 0%, rgba(170,120,255,0.10) 42%, transparent 74%)",
    filter: "blur(38px)",
    zIndex: 0,
  },

  portalMeta: {
    textAlign: "center",
    marginTop: 18,
    marginBottom: 18,
  },

  portalTag: {
    fontSize: 11,
    letterSpacing: 2.2,
    opacity: 0.72,
    textTransform: "uppercase",
    marginBottom: 8,
  },

  portalName: {
    fontSize: 28,
    fontWeight: 700,
  },

  ctaRow: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    justifyContent: "center",
  },

  primaryBtn: {
    border: "1px solid rgba(255,255,255,0.20)",
    background: "rgba(255,255,255,0.08)",
    color: "white",
    borderRadius: 999,
    padding: "16px 28px",
    textDecoration: "none",
    fontSize: 13,
    letterSpacing: 2,
    textTransform: "uppercase",
    boxShadow: "0 0 22px rgba(132,166,255,0.16)",
  },

  secondaryBtn: {
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.04)",
    color: "white",
    borderRadius: 999,
    padding: "16px 24px",
    textDecoration: "none",
    fontSize: 12,
    letterSpacing: 1.8,
    textTransform: "uppercase",
  },
  sideGlow: {
  position: "absolute",
  top: "18%",
  bottom: "18%",
  left: 0,
  right: 0,
  borderRadius: 28,
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(120,160,255,0.06) 50%, rgba(255,255,255,0.04) 100%)",
  filter: "blur(8px)",
  pointerEvents: "none",
  zIndex: 0,
},

  bgGlowA: {
    position: "absolute",
    top: "8%",
    left: "10%",
    width: 320,
    height: 320,
    borderRadius: "50%",
    background: "rgba(120,160,255,0.16)",
    filter: "blur(80px)",
    zIndex: 0,
  },

  bgGlowB: {
    position: "absolute",
    right: "10%",
    top: "16%",
    width: 300,
    height: 300,
    borderRadius: "50%",
    background: "rgba(180,120,255,0.14)",
    filter: "blur(80px)",
    zIndex: 0,
  },

  bgGlowC: {
    position: "absolute",
    bottom: "12%",
    left: "50%",
    transform: "translateX(-50%)",
    width: 500,
    height: 180,
    borderRadius: "50%",
    background: "rgba(150,190,255,0.10)",
    filter: "blur(70px)",
    zIndex: 0,
  },
};
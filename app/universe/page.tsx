"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";

type Star = {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
};

const portalItems = [
  { title: "GAIA'S GARDEN", href: "/gaia", color: "#c79cff", symbol: "✿" },
  { title: "CAELINUS SHOP", href: "/shop", color: "#d7a8ff", symbol: "☾" },
  { title: "CAELINUS PLAY", href: "/play", color: "#b88cff", symbol: "∞" },
  { title: "ARCHIVE / ART", href: "/archive", color: "#e4b7ff", symbol: "△" },
  { title: "DESIGNERS", href: "/designers", color: "#caa2ff", symbol: "⬡" },
  { title: "COSMOS", href: "/cosmos", color: "#b98dff", symbol: "◌" },
];

export default function UniversePage() {
  const router = useRouter();

  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        left: ((i * 37) % 96) + 2,
        top: ((i * 61) % 92) + 2,
        size: (i % 3) + 1,
        delay: (i % 9) * 0.35,
      })),
    []
  );

  return (
    <main className="universe-scene">
      <img
        src="/universe/caelinus-universe.jpg"
        alt="Caelinus Universe"
        className="universe-bg"
      />

      <div className="universe-overlay" />
      <div className="universe-vignette" />
      <div className="universe-edge-smoke" />

      <div className="universe-stars">
        {stars.map((star) => (
          <span
            key={star.id}
            className="universe-star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      <section className="universe-ui">
        <div className="universe-header">
          <div className="universe-kicker">✦ CAELINUS UNIVERSE ✦</div>
          <h1 className="universe-title">Choose Your Dimension</h1>
          <p className="universe-subtitle">
            Enter the portal world you want to explore.
          </p>
        </div>

        <div className="symbol-only-grid">
          {portalItems.map((item) => (
            <button
              key={item.title}
              className="symbol-portal"
              style={{ ["--portal-color" as any]: item.color } as React.CSSProperties}
              onClick={() => router.push(item.href)}
            >
              <span className="symbol-rings" />
              <span className="symbol-core">{item.symbol}</span>
              <span className="symbol-name">{item.title}</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

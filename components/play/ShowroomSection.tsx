"use client";

import { Product, ShopCategory } from "../../types/play";

type Props = {
  products: Product[];
  shopQuery: string;
  onShopQueryChange: (value: string) => void;
  shopCategory: ShopCategory;
  onShopCategoryChange: (value: ShopCategory) => void;
  selectedProductId: string;
  onSelectProduct: (id: string) => void;
};

export default function ShowroomSection({
  products,
  shopQuery,
  onShopQueryChange,
  shopCategory,
  onShopCategoryChange,
  selectedProductId,
  onSelectProduct,
}: Props) {
  return (
    <section style={styles.shell}>
      <div style={styles.topGlow} />
      <div style={styles.sectionHudLeft} />
      <div style={styles.sectionHudRight} />

      <div style={styles.header}>
        <div style={styles.eyebrow}>CAELINUS ZODIAC COLLECTION</div>
       <h2 style={styles.title}>
CAELINUS ZODIAC PORTAL
</h2>

<p style={styles.subtitle}>
 12 GODDESSES • ONE MOON GATE
</p>
      </div>

      <div style={styles.posterWrap}>
        <div
          style={styles.posterCard}
          className="caelinus-poster-tilt"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateY = ((x - centerX) / centerX) * 5;
            const rotateX = ((centerY - y) / centerY) * 5;

            e.currentTarget.style.transform =
              `perspective(1400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              "perspective(1400px) rotateX(0deg) rotateY(0deg) scale(1)";
          }}
        >
          <div style={styles.posterAuraLeft} />
          <div style={styles.posterAuraRight} />
          <div style={styles.posterOuterAura} />
          <div style={styles.posterMoonGlow} />
          <div style={styles.posterStarDust} />

          <img
            src="/play/posters/12-burc-monokini.jpg"
            alt="ENTER THE PORTAL"
            style={styles.posterImage}
          />

          <div style={styles.posterOverlay} />
          <div style={styles.posterInnerRing} />
          <div style={styles.posterShine} />

          <div style={styles.posterHudTL} />
          <div style={styles.posterHudTR} />
          <div style={styles.posterHudBL} />
          <div style={styles.posterHudBR} />

          <div style={styles.posterBadge}>THE ZODİAC GATE</div>
        </div>
      </div>

      <div style={styles.toolbar}>
        <input
          value={shopQuery}
          onChange={(e) => onShopQueryChange(e.target.value)}
          placeholder="Search brand, designer or look..."
          style={styles.search}
        />

        <div style={styles.filterRow}>
          {(["all", "bikini", "pareo", "bag", "heels", "jewelry"] as ShopCategory[]).map((item) => {
            const active = shopCategory === item;

            return (
              <button
                key={item}
                onClick={() => onShopCategoryChange(item)}
                style={{
                  ...styles.filterBtn,
                  ...(active ? styles.filterBtnActive : {}),
                }}
              >
                {item.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>

      <div style={styles.productGrid}>
        {products.map((product) => {
          const isActive = product.id === selectedProductId;

          return (
            <button
              key={product.id}
              onClick={() => onSelectProduct(product.id)}
              className="caelinus-tilt-card"
              style={{
                ...styles.productCard,
                ...(isActive ? styles.productCardActive : {}),
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateY = ((x - centerX) / centerX) * 6;
                const rotateX = ((centerY - y) / centerY) * 6;

                e.currentTarget.style.transform =
                  `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = isActive
                  ? "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(-6px)"
                  : "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px)";
              }}
            >
              <div className="caelinus-card-glow" />

              <img src={product.image} alt={product.name} style={styles.productImage} />
              <div style={styles.productOverlay} />
              <div style={styles.productGlow} />
              <div style={styles.productHudTL} />
              <div style={styles.productHudTR} />
              <div style={styles.productHudBL} />
              <div style={styles.productHudBR} />

              <div style={styles.productInfo}>
                <div style={styles.productCategory}>{product.category.toUpperCase()}</div>
                <div style={styles.productName}>{product.name}</div>
                <div style={styles.productMeta}>
                  {product.brand} • {product.designer}
                </div>

                <div style={styles.productBottom}>
                  <div style={styles.productPrice}>{product.price}</div>
                  <div style={styles.productBtn}>VIEW PRODUCT</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

const hudLine = "rgba(255,255,255,0.16)";
const panelBg =
  "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)";

const styles: Record<string, React.CSSProperties> = {
  shell: {
    position: "relative",
    marginTop: 42,
    marginBottom: 46,
    borderRadius: 34,
    padding: 28,
    border: "1px solid rgba(255,255,255,0.10)",
    background: panelBg,
    backdropFilter: "blur(18px)",
    boxShadow:
      "0 32px 120px rgba(0,0,0,0.34), inset 0 0 0 1px rgba(255,255,255,0.03)",
    overflow: "hidden",
  },

  topGlow: {
    position: "absolute",
    top: -80,
    left: "50%",
    transform: "translateX(-50%)",
    width: 520,
    height: 180,
    background: "rgba(121,157,255,0.12)",
    filter: "blur(60px)",
    pointerEvents: "none",
  },

  sectionHudLeft: {
    position: "absolute",
    top: 16,
    left: 16,
    width: 42,
    height: 42,
    borderTop: `1px solid ${hudLine}`,
    borderLeft: `1px solid ${hudLine}`,
    opacity: 0.8,
  },

  sectionHudRight: {
    position: "absolute",
    top: 16,
    right: 16,
    width: 42,
    height: 42,
    borderTop: `1px solid ${hudLine}`,
    borderRight: `1px solid ${hudLine}`,
    opacity: 0.8,
  },

  header: {
    position: "relative",
    zIndex: 2,
    marginBottom: 22,
  },

  eyebrow: {
    fontSize: 11,
    letterSpacing: 3.2,
    textTransform: "uppercase",
    opacity: 0.68,
    marginBottom: 10,
  },

  title: {
    margin: 0,
    fontSize: 54,
    lineHeight: 0.95,
    letterSpacing: 1.8,
    fontWeight: "uppercase",
  },

  subtitle: {
    marginTop: 14,
    marginBottom: 0,
    fontSize: 16,
    maxWidth: 520,
    opacity: 1.7,
    lineHeight: 0.4,
  },

  posterWrap: {
    marginTop: 28,
    marginBottom: 38,
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },

  posterCard: {
    position: "relative",
    width: "100%",
    maxWidth: 680,
    margin: "0 auto",
    borderRadius: "340px / 520px",
    overflow: "visible",
    border: "1px solid rgba(255,255,255,0.10)",
    background: "transparent",
    boxShadow: "0 30px 120px rgba(0,0,0,0.36)",
    backdropFilter: "blur(10px)",
    transition: "transform 220ms ease",
    transformStyle: "preserve-3d",
    willChange: "transform",
  },

  posterAuraLeft: {
    position: "absolute",
    top: "50%",
    left: -40,
    transform: "translateY(-50%)",
    width: 180,
    height: 520,
    background: "rgba(172,120,255,0.18)",
    filter: "blur(55px)",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 0,
  },

  posterAuraRight: {
    position: "absolute",
    top: "50%",
    right: -40,
    transform: "translateY(-50%)",
    width: 180,
    height: 520,
    background: "rgba(110,170,255,0.16)",
    filter: "blur(55px)",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 0,
  },

  posterOuterAura: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 760,
    height: 760,
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.05)",
    boxShadow: "0 0 120px rgba(120,160,255,0.12)",
    pointerEvents: "none",
    opacity: 0.75,
    zIndex: 0,
  },

  posterMoonGlow: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 460,
    height: 460,
    borderRadius: "50%",
    background: "rgba(170,205,255,0.18)",
    filter: "blur(80px)",
    pointerEvents: "none",
    animation: "softGlow 8s ease-in-out infinite",
    zIndex: 0,
  },

  posterStarDust: {
    position: "absolute",
    inset: 0,
    borderRadius: "340px / 520px",
    background:
      "radial-gradient(2px 2px at 18% 24%, rgba(255,255,255,0.75), transparent 60%), radial-gradient(2px 2px at 82% 30%, rgba(180,220,255,0.7), transparent 60%), radial-gradient(1.8px 1.8px at 70% 70%, rgba(255,255,255,0.6), transparent 60%), radial-gradient(1.8px 1.8px at 28% 76%, rgba(220,180,255,0.55), transparent 60%)",
    opacity: 0.8,
    pointerEvents: "none",
    zIndex: 1,
  },

  posterImage: {
  display: "block",
  width: "100%",
  height: "auto",
  objectFit: "contain",
  filter: "saturate(1.06) contrast(1.03)",
  animation: "caelinusLivingPoster 9s ease-in-out infinite",
  borderRadius: "340px / 520px",
  position: "relative",
  zIndex: 2,
  willChange: "transform",
},

  posterOverlay: {
    position: "absolute",
    inset: 0,
    borderRadius: "340px / 520px",
    background:
      "radial-gradient(circle at center, rgba(255,255,255,0.04) 0%, rgba(120,160,255,0.06) 36%, rgba(10,12,20,0.18) 100%)",
    pointerEvents: "none",
    zIndex: 3,
  },

  posterInnerRing: {
    position: "absolute",
    inset: 18,
    borderRadius: "320px / 500px",
    border: "1px solid rgba(255,255,255,0.10)",
    pointerEvents: "none",
    zIndex: 4,
  },


  posterShine: {
  position: "absolute",
  inset: 0,
  borderRadius: "340px / 520px",
  background:
    "linear-gradient(115deg, rgba(255,255,255,0.00) 18%, rgba(255,255,255,0.14) 34%, rgba(255,255,255,0.00) 52%)",
  mixBlendMode: "screen",
  opacity: 0.5,
  pointerEvents: "none",
  zIndex: 5,
  animation: "caelinusShineSweep 6s ease-in-out infinite",
},

  posterHudTR: {
    position: "absolute",
    top: 16,
    right: 16,
    width: 36,
    height: 36,
    borderTop: `1px solid ${hudLine}`,
    borderRight: `1px solid ${hudLine}`,
    zIndex: 6,
  },

  posterHudBL: {
    position: "absolute",
    bottom: 16,
    left: 16,
    width: 36,
    height: 36,
    borderBottom: `1px solid ${hudLine}`,
    borderLeft: `1px solid ${hudLine}`,
    zIndex: 6,
  },

  posterHudBR: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 36,
    height: 36,
    borderBottom: `1px solid ${hudLine}`,
    borderRight: `1px solid ${hudLine}`,
    zIndex: 6,
  },

  posterBadge: {
    position: "absolute",
    left: 20,
    bottom: 20,
    display: "inline-block",
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(7,10,18,0.36)",
    borderRadius: 999,
    padding: "8px 14px",
    fontSize: 11,
    letterSpacing: 1.8,
    backdropFilter: "blur(10px)",
    zIndex: 7,
  },

  toolbar: {
    display: "flex",
    gap: 14,
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: 18,
  },

  search: {
    flex: 1,
    minWidth: 280,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
    color: "white",
    borderRadius: 18,
    padding: "14px 16px",
    outline: "none",
    fontSize: 14,
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.02)",
  },

  filterRow: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
  },

  filterBtn: {
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.05)",
    color: "white",
    borderRadius: 999,
    padding: "12px 14px",
    cursor: "pointer",
    fontSize: 11,
    letterSpacing: 1.2,
  },

  filterBtnActive: {
    background: "rgba(143,169,255,0.16)",
    boxShadow: "0 0 18px rgba(130,163,255,0.16)",
  },

  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 18,
  },

  productCard: {
    position: "relative",
    minHeight: 520,
    borderRadius: 24,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.05)",
    boxShadow:
      "0 20px 60px rgba(0,0,0,0.22), inset 0 0 0 1px rgba(255,255,255,0.03)",
    transition:
      "transform 220ms ease, box-shadow 220ms ease, border 220ms ease, filter 220ms ease",
    cursor: "pointer",
    padding: 0,
    textAlign: "left",
    transformStyle: "preserve-3d",
    willChange: "transform",
  },

  productCardActive: {
    transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(-6px)",
    boxShadow:
      "0 30px 90px rgba(0,0,0,0.40), 0 0 30px rgba(134,166,255,0.18)",
    border: "1px solid rgba(160,186,255,0.22)",
  },

  productImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center top",
    animation: "caelinusFloat 18s ease-in-out infinite",
    transform: "scale(1.05)",
  },

  productOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(10,12,20,0.06) 0%, rgba(10,12,20,0.40) 52%, rgba(10,12,20,0.88) 100%)",
  },

  productGlow: {
    position: "absolute",
    bottom: -20,
    left: "50%",
    transform: "translateX(-50%)",
    width: 240,
    height: 110,
    background: "rgba(121,157,255,0.12)",
    filter: "blur(34px)",
    animation: "softGlow 6s ease-in-out infinite",
  },

  productHudTL: {
    position: "absolute",
    top: 12,
    left: 12,
    width: 24,
    height: 24,
    borderTop: `1px solid ${hudLine}`,
    borderLeft: `1px solid ${hudLine}`,
    opacity: 0.72,
  },

  productHudTR: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 24,
    height: 24,
    borderTop: `1px solid ${hudLine}`,
    borderRight: `1px solid ${hudLine}`,
    opacity: 0.72,
  },

  productHudBL: {
    position: "absolute",
    bottom: 12,
    left: 12,
    width: 24,
    height: 24,
    borderBottom: `1px solid ${hudLine}`,
    borderLeft: `1px solid ${hudLine}`,
    opacity: 0.72,
  },

  productHudBR: {
    position: "absolute",
    bottom: 12,
    right: 12,
    width: 24,
    height: 24,
    borderBottom: `1px solid ${hudLine}`,
    borderRight: `1px solid ${hudLine}`,
    opacity: 0.72,
  },

  productInfo: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 16,
    zIndex: 2,
  },

  productCategory: {
    fontSize: 11,
    letterSpacing: 1.5,
    opacity: 0.74,
    textTransform: "uppercase",
    marginBottom: 8,
  },

  productName: {
    fontSize: 24,
    lineHeight: 1.1,
    fontWeight: 700,
  },

  productMeta: {
    marginTop: 8,
    fontSize: 13,
    opacity: 0.78,
    lineHeight: 1.5,
  },

  productBottom: {
    marginTop: 14,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },

  productPrice: {
    fontSize: 22,
    fontWeight: 700,
  },

  productBtn: {
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
    color: "white",
    borderRadius: 999,
    padding: "10px 14px",
    fontSize: 11,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
};
"use client";

import Link from "next/link";
import { useMemo, useState, useEffect } from "react";

type ShopCategory = "all" | "look" | "bikini" | "pareo" | "bag" | "heels" | "jewelry";

type ShowroomLook = {
  id: string;
  title: string;
  brand: string;
  designer: string;
  price: string;
  image: string;
  mood: string;
};

type ProductCard = {
  id: string;
  name: string;
  brand: string;
  designer: string;
  category: Exclude<ShopCategory, "all" | "look">;
  price: string;
  image: string;
};

const weeklyLooks: ShowroomLook[] = [
  {
    id: "1",
    title: "Scorpio Night Look",
    brand: "Caelinus",
    designer: "Celine River",
    price: "$690",
    image: "/play/showroom/look-1.png",
    mood: "After-dark magnetic glamour",
  },
  {
    id: "2",
    title: "Solar Beach Muse",
    brand: "Caelinus",
    designer: "Celine River",
    price: "$540",
    image: "/play/showroom/look-2.png",
    mood: "Golden softness and sea light",
  },
  {
    id: "3",
    title: "Cosmic Coffee Set",
    brand: "Caelinus",
    designer: "Celine River",
    price: "$620",
    image: "/play/showroom/look-3.png",
    mood: "City goddess with cosmic calm",
  },
  {
    id: "4",
    title: "Resort Goddess Edition",
    brand: "Caelinus",
    designer: "Celine River",
    price: "$760",
    image: "/play/showroom/look-4.png",
    mood: "Luxury leisure and feminine power",
  },
];

const showroomProducts: ProductCard[] = [
  {
    id: "p1",
    name: "Scorpio Bikini",
    brand: "Caelinus",
    designer: "Celine River",
    category: "bikini",
    price: "$220",
    image: "/play/shop/scorpio-bikini.jpg",
  },
  {
    id: "p2",
    name: "Black Pareo",
    brand: "Caelinus",
    designer: "Celine River",
    category: "pareo",
    price: "$140",
    image: "/play/shop/black-pareo.jpg",
  },
  {
    id: "p3",
    name: "Eclipse Bag",
    brand: "Caelinus",
    designer: "Celine River",
    category: "bag",
    price: "$310",
    image: "/play/shop/eclipse-bag.jpg",
  },
  {
    id: "p4",
    name: "Night Heels",
    brand: "Caelinus",
    designer: "Celine River",
    category: "heels",
    price: "$280",
    image: "/play/shop/night-heels.jpg",
  },
  {
    id: "p5",
    name: "Moonline Necklace",
    brand: "Caelinus",
    designer: "Celine River",
    category: "jewelry",
    price: "$190",
    image: "/play/shop/moonline-necklace.jpg",
  },
  {
    id: "p6",
    name: "Golden Ritual Pareo",
    brand: "Caelinus",
    designer: "Celine River",
    category: "pareo",
    price: "$155",
    image: "/play/shop/golden-pareo.jpg",
  },
];

type SceneId = "beach" | "coffee" | "night" | "resort";
type ArchetypeId =
  | "light"
  | "golden"
  | "dark"
  | "cosmic"
  | "minimal"
  | "athletic"
  | "curvy";

const scenes: { id: SceneId; label: string; sub: string }[] = [
  { id: "beach", label: "Beach", sub: "Solar" },
  { id: "coffee", label: "Coffee", sub: "Daylight" },
  { id: "night", label: "Night", sub: "Magnetic" },
  { id: "resort", label: "Resort", sub: "Luxury" },
];

const archetypes: {
  id: ArchetypeId;
  label: string;
  tone: string;
  glow: string;
}[] = [
  { id: "light", label: "Light", tone: "#f2d7c0", glow: "rgba(186,225,255,0.28)" },
  { id: "golden", label: "Golden", tone: "#d9a879", glow: "rgba(255,210,125,0.24)" },
  { id: "dark", label: "Dark", tone: "#6d4838", glow: "rgba(168,133,255,0.20)" },
  { id: "cosmic", label: "Cosmic", tone: "#eaded1", glow: "rgba(150,162,255,0.24)" },
  { id: "minimal", label: "Minimal", tone: "#efe6c7", glow: "rgba(228,236,255,0.18)" },
  { id: "athletic", label: "Athletic", tone: "#d39562", glow: "rgba(106,209,255,0.18)" },
  { id: "curvy", label: "Curvy", tone: "#b2774f", glow: "rgba(255,163,209,0.18)" },
];

const sceneDescriptions: Record<SceneId, string> = {
  beach: "Sunlit horizon, sea shimmer, warm skin glow, fluid feminine movement.",
  coffee: "Elegant daylight, café reflections, soft luxury, city goddess energy.",
  night: "After-dark magnetism, neon atmosphere, shadow and allure in balance.",
  resort: "Palm silhouettes, velvet sunset, luxury leisure and divine softness.",
};

export default function PlayPage() {
    const [shopQuery, setShopQuery] = useState("");
const [shopCategory, setShopCategory] = useState<ShopCategory>("all");
const [featuredLookIndex, setFeaturedLookIndex] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setFeaturedLookIndex((prev) => (prev + 1) % weeklyLooks.length);
  }, 4000);

  return () => clearInterval(timer);
}, []);

const featuredLook = weeklyLooks[featuredLookIndex];

const filteredProducts = showroomProducts.filter((product) => {
  const q = shopQuery.trim().toLowerCase();

  const matchesQuery =
    q === "" ||
    product.name.toLowerCase().includes(q) ||
    product.brand.toLowerCase().includes(q) ||
    product.designer.toLowerCase().includes(q);

  const matchesCategory =
    shopCategory === "all" ? true : product.category === shopCategory;

  return matchesQuery && matchesCategory;
});

    useEffect(() => {
  const canvas = document.getElementById("stars") as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext("2d")!;
  const stars = Array.from({ length: 120 }).map(() => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 1.5,
    d: Math.random() * 0.5
  }));

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    stars.forEach(s => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();

      s.y += s.d;

      if (s.y > window.innerHeight) {
        s.y = 0;
        s.x = Math.random() * window.innerWidth;
      }
    });

    requestAnimationFrame(draw);
  };

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  draw();
}, []);
  const [selectedArchetype, setSelectedArchetype] =
    useState<ArchetypeId>("cosmic");
  const [selectedScene, setSelectedScene] = useState<SceneId>("night");

  const currentArchetype = useMemo(
    () => archetypes.find((item) => item.id === selectedArchetype) ?? archetypes[0],
    [selectedArchetype]
  );

  const sceneSrc = `/play/scenes/${selectedScene}.jpg`;

  const ambientGlow = useMemo(() => {
    switch (selectedScene) {
      case "beach":
        return "radial-gradient(circle at center, rgba(106,204,255,0.26) 0%, rgba(255,255,255,0.04) 42%, rgba(0,0,0,0.16) 100%)";
      case "coffee":
        return "radial-gradient(circle at center, rgba(234,173,112,0.22) 0%, rgba(255,255,255,0.04) 42%, rgba(0,0,0,0.18) 100%)";
      case "night":
        return "radial-gradient(circle at center, rgba(132,143,255,0.24) 0%, rgba(255,255,255,0.04) 42%, rgba(0,0,0,0.20) 100%)";
      case "resort":
        return "radial-gradient(circle at center, rgba(221,134,255,0.18) 0%, rgba(255,255,255,0.04) 42%, rgba(0,0,0,0.18) 100%)";
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
          <div style={styles.topbarRight}>CAELINUS PLAY FOUNDATION</div>
        </div>

        <section style={styles.hero}>
          <div style={styles.heroVisual}>
            <img src={sceneSrc} alt={selectedScene} style={styles.heroSceneImage} />
            <div style={styles.heroSceneOverlay} />
            <div style={styles.heroPortalOuter} />
            <div style={styles.heroPortalInner} />
            <div style={styles.heroCore}>∞</div>
          </div>

          <h1 style={styles.title}>CAELINUS PLAY</h1>
          <p style={styles.subtitle}>Dress the Archetype</p>
          <button style={styles.enterButton}>ENTER THE PLAYGROUND</button>
        </section>

        <section style={styles.selectBlock}>
          <div style={styles.selectTitle}>SELECT YOUR ARCHETYPE</div>

          <section style={styles.showroomSection}>
  <div style={styles.showroomHeader}>
    <div>
      <div style={styles.showroomEyebrow}>CAELINUS SHOWROOM</div>
      <h2 style={styles.showroomTitle}>Shop the Universe</h2>
      <p style={styles.showroomSubtitle}>
        Search by brand, designer or look. Discover weekly signature combinations
        in a living glass boutique.
      </p>
    </div>
  </div>

  <div style={styles.featuredLookCard}>
    <img src={featuredLook.image} alt={featuredLook.title} style={styles.featuredLookImage} />
    <div style={styles.featuredLookOverlay} />
    <div style={styles.featuredLookGlow} />

    <div style={styles.featuredLookContent}>
      <div style={styles.featuredBadge}>WEEK’S SIGNATURE LOOK</div>
      <div style={styles.featuredTitle}>{featuredLook.title}</div>
      <div style={styles.featuredMeta}>
        <span>{featuredLook.brand}</span>
        <span>•</span>
        <span>{featuredLook.designer}</span>
      </div>
      <p style={styles.featuredMood}>{featuredLook.mood}</p>
      <div style={styles.featuredPrice}>{featuredLook.price}</div>

      <div style={styles.featuredButtons}>
        <button style={styles.showroomButton}>SHOP LOOK</button>
        <button style={styles.showroomButtonSecondary}>VIEW DESIGNER</button>
        <button style={styles.showroomButtonSecondary}>SAVE MOOD</button>
      </div>
    </div>
  </div>

  <div style={styles.comboRail}>
    {weeklyLooks.map((look, index) => {
      const active = index === featuredLookIndex;

      return (
        <button
          key={look.id}
          onClick={() => setFeaturedLookIndex(index)}
          style={{
            ...styles.comboCard,
            ...(active ? styles.comboCardActive : {}),
          }}
        >
          <img src={look.image} alt={look.title} style={styles.comboCardImage} />
          <div style={styles.comboCardOverlay} />
          <div style={styles.comboCardText}>
            <div style={styles.comboCardTitle}>{look.title}</div>
            <div style={styles.comboCardMeta}>{look.brand}</div>
          </div>
        </button>
      );
    })}
  </div>

  <div style={styles.shopToolbar}>
    <input
      value={shopQuery}
      onChange={(e) => setShopQuery(e.target.value)}
      placeholder="Search brand, designer or look..."
      style={styles.shopSearch}
    />

    <div style={styles.shopFilters}>
      {(["all", "bikini", "pareo", "bag", "heels", "jewelry"] as ShopCategory[]).map((item) => {
        const active = shopCategory === item;
        return (
          <button
            key={item}
            onClick={() => setShopCategory(item)}
            style={{
              ...styles.shopFilterButton,
              ...(active ? styles.shopFilterButtonActive : {}),
            }}
          >
            {item.toUpperCase()}
          </button>
        );
      })}
    </div>
  </div>

  <div style={styles.productGrid}>
    {filteredProducts.map((product) => (
      <div key={product.id} style={styles.productCard}>
        <img src={product.image} alt={product.name} style={styles.productImage} />
        <div style={styles.productOverlay} />

        <div style={styles.productInfo}>
          <div style={styles.productCategory}>{product.category.toUpperCase()}</div>
          <div style={styles.productName}>{product.name}</div>
          <div style={styles.productMeta}>
            {product.brand} • {product.designer}
          </div>
          <div style={styles.productBottomRow}>
            <div style={styles.productPrice}>{product.price}</div>
            <button style={styles.productButton}>VIEW PRODUCT</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

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
                  <div style={styles.archFigureWrap}>
                    <div
                      style={{
                        ...styles.archFigure,
                        background: item.tone,
                      }}
                    />
                  </div>
                  <div style={styles.archetypeLabel}>{item.label}</div>
                </button>
              );
            })}
          </div>

          <button style={styles.centerNextButton}>NEXT</button>
        </section>

        <section style={styles.mainGrid}>
          <div style={styles.leftPanel}>
            <div style={styles.panelTitle}>SELECT YOUR AVATAR</div>
             <div className="relative w-[380px] h-[760px] mx-auto overflow-hidden rounded-[28px]">
  <img
    src="/play/avatars/avatar_base.png"
    alt="Avatar Base"
    className="absolute inset-0 w-full h-full object-contain z-10"
  />

  <img
    src="/play/outfits/lilith_dress.png"
    alt="Lilith Dress"
    className="absolute left-1/2 top-[22px] -translate-x-1/2 w-[82%] h-auto object-contain z-20 opacity-95"
  />
</div>
            
            <div style={styles.leftAmbientCard}>
              <img src={sceneSrc} alt={selectedScene} style={styles.leftAmbientImage} />
              <div style={styles.leftAmbientOverlay} />
              <div style={styles.leftPortalOuter} />
              <div style={styles.leftPortalInner} />

              <div style={styles.leftAmbientContent}>
                <div style={styles.leftAmbientLabel}>CAELINUS PRESENCE</div>
                <div style={styles.leftAmbientHeadline}>
                  Foundation first. Form later.
                </div>
                <p style={styles.leftAmbientText}>
                  We are building the atmosphere, color language and luxury space
                  of the Play experience before placing the avatar inside it.
                </p>
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
                {selectedScene.toUpperCase()} ARCHETYPE AI SCENE
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
                    background: ambientGlow,
                  }}
                />
                <div style={styles.previewPortalOuter} />
                <div style={styles.previewPortalInner} />

                <div style={styles.previewMoodCard}>
                  <div style={styles.previewMoodLabel}>SELECTED ARCHETYPE</div>
                  <div style={styles.previewMoodValue}>{currentArchetype.label}</div>
                </div>
              </div>

              <p style={styles.previewText}>{sceneDescriptions[selectedScene]}</p>

              <div style={styles.ctaRow}>
                <button style={styles.ctaButton}>BUILD THIS MOOD</button>
                <button style={styles.ctaButton}>SAVE DIRECTION</button>
                <button style={styles.ctaButton}>SHARE VISION</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, #211938 0%, #0b1020 36%, #05060a 100%)",
    color: "white",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  bgA: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 50% 0%, rgba(123,173,255,0.16) 0%, transparent 34%)",
    pointerEvents: "none",
  },
  bgB: {
    position: "absolute",
    top: -140,
    left: "50%",
    transform: "translateX(-50%)",
    width: 880,
    height: 880,
    borderRadius: "50%",
    background: "rgba(128,111,255,0.10)",
    filter: "blur(100px)",
    pointerEvents: "none",
  },
  bgC: {
    position: "absolute",
    bottom: -180,
    right: -90,
    width: 460,
    height: 460,
    borderRadius: "50%",
    background: "rgba(245,144,255,0.10)",
    filter: "blur(90px)",
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
    opacity: 0.84,
    letterSpacing: 1.5,
    fontSize: 14,
  },
  topbarRight: {
    opacity: 0.72,
    letterSpacing: 3,
    fontSize: 13,
  },
  hero: {
    textAlign: "center",
    marginBottom: 34,
  },
  heroVisual: {
    position: "relative",
    width: "100%",
    maxWidth: 980,
    height: 280,
    margin: "0 auto 20px",
    borderRadius: 34,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.14)",
    boxShadow: "0 20px 80px rgba(0,0,0,0.22)",
  },
  heroSceneImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  heroSceneOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(8,10,18,0.12) 0%, rgba(8,10,18,0.36) 50%, rgba(8,10,18,0.58) 100%)",
  },
  heroPortalOuter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 240,
    height: 240,
    transform: "translate(-50%, -50%)",
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.20)",
    boxShadow: "0 0 70px rgba(132,164,255,0.25)",
  },
  heroPortalInner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 170,
    height: 170,
    transform: "translate(-50%, -50%)",
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.14)",
  },
  heroCore: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 88,
    height: 88,
    transform: "translate(-50%, -50%)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "radial-gradient(circle at 50% 35%, #95d6ff 0%, #4f67b8 46%, #10172c 100%)",
    fontSize: 34,
    boxShadow: "0 0 50px rgba(129,175,255,0.34)",
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
    opacity: 0.86,
  },
  enterButton: {
    marginTop: 20,
    border: "1px solid rgba(255,255,255,0.20)",
    background: "rgba(255,255,255,0.06)",
    color: "white",
    borderRadius: 999,
    padding: "16px 34px",
    fontSize: 15,
    letterSpacing: 1.4,
    cursor: "pointer",
    boxShadow: "0 0 24px rgba(121,150,255,0.14)",
  },
  selectBlock: {
    marginBottom: 30,
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
    padding: "18px 12px",
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
    inset: "auto 18px 24px 18px",
    height: 28,
    borderRadius: "50%",
    filter: "blur(14px)",
  },
  archFigureWrap: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    zIndex: 1,
  },
  archFigure: {
    width: 58,
    height: 122,
    borderRadius: 999,
    boxShadow: "0 12px 24px rgba(0,0,0,0.16)",
  },
  archetypeLabel: {
    textAlign: "center",
    fontSize: 14,
    letterSpacing: 1.2,
    position: "relative",
    zIndex: 1,
    marginTop: 12,
  },
  centerNextButton: {
    display: "block",
    margin: "18px auto 0",
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(255,255,255,0.06)",
    color: "white",
    borderRadius: 999,
    padding: "14px 32px",
    fontSize: 15,
    letterSpacing: 1.4,
    cursor: "pointer",
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
  leftAmbientCard: {
    position: "relative",
    height: 620,
    borderRadius: 28,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.02)",
  },
  leftAmbientImage: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  leftAmbientOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(7,10,18,0.16) 0%, rgba(7,10,18,0.34) 50%, rgba(7,10,18,0.72) 100%)",
  },
  leftPortalOuter: {
    position: "absolute",
    top: "49%",
    left: "50%",
    width: 280,
    height: 420,
    transform: "translate(-50%, -50%)",
    borderRadius: "160px / 220px",
    border: "1px solid rgba(255,255,255,0.16)",
    boxShadow: "0 0 80px rgba(137,170,255,0.18)",
  },
  leftPortalInner: {
    position: "absolute",
    top: "49%",
    left: "50%",
    width: 220,
    height: 350,
    transform: "translate(-50%, -50%)",
    borderRadius: "130px / 180px",
    border: "1px solid rgba(255,255,255,0.10)",
  },
  leftAmbientContent: {
    position: "absolute",
    left: 28,
    right: 28,
    bottom: 28,
    zIndex: 2,
  },
  leftAmbientLabel: {
    fontSize: 12,
    letterSpacing: 2,
    opacity: 0.75,
    textTransform: "uppercase",
    marginBottom: 10,
  },
  leftAmbientHeadline: {
    fontSize: 34,
    lineHeight: 1.1,
    fontWeight: 700,
    marginBottom: 12,
    letterSpacing: 1,
  },
  leftAmbientText: {
    margin: 0,
    fontSize: 15,
    lineHeight: 1.7,
    maxWidth: 520,
    opacity: 0.88,
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
    borderRadius: 22,
    background: "rgba(255,255,255,0.05)",
    color: "white",
    padding: 0,
    cursor: "pointer",
    textAlign: "left",
    overflow: "hidden",
    position: "relative",
    minHeight: 190,
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
    left: 18,
    right: 18,
    bottom: 16,
    zIndex: 2,
  },
  sceneLabel: {
    fontSize: 28,
    letterSpacing: 1.3,
  },
  sceneSub: {
    marginTop: 5,
    fontSize: 12,
    letterSpacing: 1.4,
    opacity: 0.84,
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
      "linear-gradient(180deg, rgba(8,10,18,0.12) 0%, rgba(8,10,18,0.32) 45%, rgba(8,10,18,0.76) 100%)",
  },
  previewGlowOverlay: {
    position: "absolute",
    inset: 0,
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
  showroomSection: {
  marginTop: 34,
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: 30,
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(16px)",
  padding: 24,
},
showroomHeader: {
  marginBottom: 18,
},
showroomEyebrow: {
  fontSize: 12,
  letterSpacing: 2.2,
  opacity: 0.72,
  textTransform: "uppercase",
  marginBottom: 8,
},
showroomTitle: {
  margin: 0,
  fontSize: 38,
  letterSpacing: 2,
},
showroomSubtitle: {
  marginTop: 10,
  marginBottom: 0,
  maxWidth: 760,
  opacity: 0.84,
  lineHeight: 1.7,
  fontSize: 15,
},
featuredLookCard: {
  position: "relative",
  minHeight: 360,
  borderRadius: 28,
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.12)",
  marginTop: 18,
  marginBottom: 18,
  background: "rgba(255,255,255,0.05)",
  boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
},

featuredLookImage: {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center 18%",
  filter: "saturate(1.05) contrast(1.02)",
},

featuredLookOverlay: {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(90deg, rgba(7,10,18,0.82) 0%, rgba(7,10,18,0.52) 35%, rgba(7,10,18,0.14) 100%)",
},
featuredLookGlow: {
  position: "absolute",
  left: 60,
  top: "50%",
  transform: "translateY(-50%)",
  width: 380,
  height: 380,
  borderRadius: "50%",
  background: "rgba(139,173,255,0.16)",
  filter: "blur(70px)",
},
featuredLookContent: {
  position: "relative",
  zIndex: 2,
  padding: "42px 38px",
  maxWidth: 540,
},
featuredBadge: {
  display: "inline-block",
  border: "1px solid rgba(255,255,255,0.18)",
  background: "rgba(255,255,255,0.07)",
  borderRadius: 999,
  padding: "8px 14px",
  fontSize: 11,
  letterSpacing: 1.8,
  marginBottom: 16,
},
featuredTitle: {
  fontSize: 42,
  lineHeight: 1.05,
  fontWeight: 700,
  letterSpacing: 1.4,
},
featuredMeta: {
  display: "flex",
  gap: 10,
  alignItems: "center",
  marginTop: 14,
  fontSize: 14,
  opacity: 0.8,
  letterSpacing: 0.8,
},
featuredMood: {
  marginTop: 14,
  marginBottom: 0,
  fontSize: 15,
  lineHeight: 1.7,
  opacity: 0.88,
  maxWidth: 420,
},
featuredPrice: {
  marginTop: 18,
  fontSize: 28,
  fontWeight: 700,
  letterSpacing: 1,
},
featuredButtons: {
  display: "flex",
  gap: 10,
  flexWrap: "wrap",
  marginTop: 18,
},
showroomButton: {
  border: "1px solid rgba(255,255,255,0.18)",
  background: "rgba(255,255,255,0.10)",
  color: "white",
  borderRadius: 999,
  padding: "14px 18px",
  cursor: "pointer",
  fontSize: 12,
  letterSpacing: 1.3,
  textTransform: "uppercase",
},
showroomButtonSecondary: {
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.05)",
  color: "white",
  borderRadius: 999,
  padding: "14px 18px",
  cursor: "pointer",
  fontSize: 12,
  letterSpacing: 1.3,
  textTransform: "uppercase",
},
comboRail: {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: 12,
  marginBottom: 20,
},
comboCard: {
  position: "relative",
  minHeight: 150,
  borderRadius: 10,
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(255,255,255,0.05)",
  cursor: "pointer",
  padding: 0,
  textAlign: "left",
},
comboCardActive: {
  boxShadow: "0 0 22px rgba(134,166,255,0.22)",
  transform: "translateY(-1px)",
},
comboCardImage: {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center 20%"
},
comboCardOverlay: {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(180deg, rgba(10,12,20,0.08) 0%, rgba(10,12,20,0.44) 54%, rgba(10,12,20,0.82) 100%)",
},
comboCardText: {
  position: "absolute",
  left: 14,
  right: 14,
  bottom: 14,
  zIndex: 2,
},
comboCardTitle: {
  fontSize: 16,
  lineHeight: 1.1,
  fontWeight: 700,
},
comboCardMeta: {
  marginTop: 4,
  fontSize: 12,
  opacity: 0.76,
  textTransform: "uppercase",
  letterSpacing: 1.1,
},
shopToolbar: {
  display: "flex",
  gap: 14,
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  marginBottom: 18,
},
shopSearch: {
  flex: 1,
  minWidth: 280,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.06)",
  color: "white",
  borderRadius: 18,
  padding: "14px 16px",
  outline: "none",
  fontSize: 14,
},
shopFilters: {
  display: "flex",
  gap: 10,
  flexWrap: "wrap",
},
shopFilterButton: {
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.05)",
  color: "white",
  borderRadius: 999,
  padding: "12px 14px",
  cursor: "pointer",
  fontSize: 11,
  letterSpacing: 1.2,
},
shopFilterButtonActive: {
  background: "rgba(143,169,255,0.16)",
  boxShadow: "0 0 18px rgba(130,163,255,0.16)",
},
productGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 16,
},
productCard: {
  position: "relative",
  minHeight: 420,
  borderRadius: 22,
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(255,255,255,0.05)",
},
productImage: {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center 18%"
},
productOverlay: {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(180deg, rgba(10,12,20,0.06) 0%, rgba(10,12,20,0.40) 52%, rgba(10,12,20,0.86) 100%)",
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
productBottomRow: {
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
productButton: {
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.06)",
  color: "white",
  borderRadius: 999,
  padding: "10px 14px",
  cursor: "pointer",
  fontSize: 11,
  letterSpacing: 1.2,
  textTransform: "uppercase",
},
};
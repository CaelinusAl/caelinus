export type SceneId = "beach" | "coffee" | "night" | "resort";

export type ArchetypeId =
  | "light"
  | "golden"
  | "dark"
  | "cosmic"
  | "minimal"
  | "athletic"
  | "curvy";

export type ShopCategory =
  | "all"
  | "bikini"
  | "pareo"
  | "bag"
  | "heels"
  | "jewelry";

export type Scene = {
  id: SceneId;
  label: string;
  sub: string;
  image: string;
  description: string;
};

export type Archetype = {
  id: ArchetypeId;
  label: string;
  tone: string;
  glow: string;
};

export type ShowroomLook = {
  id: string;
  title: string;
  brand: string;
  designer: string;
  price: string;
  image: string;
  mood: string;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  designer: string;
  category: Exclude<ShopCategory, "all">;
  price: string;
  image: string;
};
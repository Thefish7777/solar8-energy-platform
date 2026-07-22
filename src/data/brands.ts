// ============================================================================
// Solar8 Trusted Brands
// Centralised list of manufacturers displayed throughout the website.
// ============================================================================

export interface Brand {
  name: string;
  category: "Inverter" | "Battery" | "Solar Panel";
  featured?: boolean;
}

export const brands: Brand[] = [
  {
    name: "Sunsynk",
    category: "Inverter",
    featured: true,
  },
  {
    name: "Deye",
    category: "Inverter",
    featured: true,
  },
  {
    name: "Victron",
    category: "Inverter",
    featured: true,
  },
  {
    name: "Huawei",
    category: "Inverter",
    featured: true,
  },
  {
    name: "Blue Mountain",
    category: "Battery",
    featured: true,
  },
  {
    name: "Megarevo",
    category: "Battery",
    featured: true,
  },
  {
    name: "Canadian Solar",
    category: "Solar Panel",
  },
  {
    name: "JA Solar",
    category: "Solar Panel",
  },
  {
    name: "LONGi",
    category: "Solar Panel",
  },
  {
    name: "Jinko Solar",
    category: "Solar Panel",
  },
];

export default brands;
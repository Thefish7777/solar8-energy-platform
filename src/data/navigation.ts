// ============================================================================
// Solar8 Navigation Configuration
// Central navigation used throughout the site.
// ============================================================================

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
  cta?: boolean;
}

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "About",
    href: "/about",
  },

  {
    label: "Residential",
    href: "/residential",
  },

  {
    label: "Commercial",
    href: "/commercial",
  },

  {
    label: "Solar Systems",
    href: "/systems",
  },

  {
    label: "Knowledge Centre",
    href: "/knowledge-centre",
  },

  {
    label: "Contact",
    href: "/contact",
  },
];

export default navigation;
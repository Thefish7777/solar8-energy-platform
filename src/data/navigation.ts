// ============================================================================
// Solar8 Navigation Configuration
// Central navigation used throughout the website.
// Edit this file to update menus across the site.
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
    label: "Assessment",
    href: "/assessment",
  },

  {
    label: "Knowledge Centre",
    href: "/knowledge",
  },

  {
    label: "Contact",
    href: "/contact",
    cta: true,
  },
];

export default navigation;
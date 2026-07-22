import type {
  CustomerGoal,
  PropertyType,
} from "../../lib/recommendationTypes";

export const propertyOptions = [
  {
    value: "home" as PropertyType,
    icon: "🏠",
    title: "Home",
    description: "Houses, estates and townhouses",
  },
  {
    value: "business" as PropertyType,
    icon: "🏢",
    title: "Business",
    description: "Offices, retail and commercial buildings",
  },
  {
    value: "farm" as PropertyType,
    icon: "🚜",
    title: "Farm",
    description: "Agriculture and rural properties",
  },
];

export const goalOptions = [
  {
    value: "backup" as CustomerGoal,
    icon: "🔋",
    title: "Backup Power",
    description: "Keep the lights on during load shedding",
  },
  {
    value: "save" as CustomerGoal,
    icon: "💰",
    title: "Save Money",
    description: "Reduce my electricity bill",
  },
  {
    value: "independence" as CustomerGoal,
    icon: "☀️",
    title: "Energy Independence",
    description: "Generate as much of my own power as possible",
  },
  {
    value: "unsure" as CustomerGoal,
    icon: "🤔",
    title: "I'm Not Sure",
    description: "Help me choose",
  },
];

export const backupOptions = [
  {
    value: "2",
    icon: "🕑",
    title: "2 Hours",
    description: "Essential appliances",
  },
  {
    value: "4",
    icon: "🕓",
    title: "4 Hours",
    description: "Typical load shedding",
  },
  {
    value: "8",
    icon: "🕗",
    title: "8 Hours",
    description: "Extended backup",
  },
  {
    value: "24",
    icon: "⚡",
    title: "All Day",
    description: "Maximum independence",
  },
];
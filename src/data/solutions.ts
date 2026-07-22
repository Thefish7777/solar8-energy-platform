// ============================================================================
// Solar8 Solutions
// Customer-facing solution definitions.
// ============================================================================

export interface SolarSolution {

  id: string;

  name: string;

  tagline: string;

  shortDescription: string;

  longDescription: string;

  idealFor: string[];

  benefits: string[];

  configuration: {

    inverter: string;

    battery: string;

    panels: string;

  };

  cta: string;

  featured?: boolean;

}

export const solutions: SolarSolution[] = [

  {

    id: "backup",

    name: "Solar8 Backup",

    tagline: "Reliable Power When You Need It Most.",

    shortDescription:
      "Reliable backup power for essential appliances during load shedding.",

    longDescription:
      "Solar8 Backup is designed for homeowners who want dependable backup power without committing to a full solar installation. It keeps your essential appliances running during outages while providing a pathway to future expansion.",

    idealFor: [
      "Apartments",
      "Townhouses",
      "Small Homes",
      "Essential Backup"
    ],

    benefits: [
      "Backup During Load Shedding",
      "Protect Essential Appliances",
      "Expandable In Future",
      "Professional Installation"
    ],

    configuration: {

      inverter: "5kW Hybrid Inverter",

      battery: "5kWh Lithium Battery",

      panels: "Optional / Future Upgrade"

    },

    cta: "Book My FREE Solar Assessment"

  },

  {

    id: "smart",

    name: "Solar8 Smart",

    tagline: "Smarter Energy. Lower Bills.",

    shortDescription:
      "Our most popular solution for reducing electricity costs.",

    longDescription:
      "Solar8 Smart combines solar generation with battery storage to reduce monthly electricity costs while keeping your home powered during load shedding. Designed for modern South African households.",

    idealFor: [
      "Family Homes",
      "Home Offices",
      "Air Conditioning",
      "Pool Pumps"
    ],

    benefits: [
      "Lower Electricity Bills",
      "Battery Backup",
      "Smart Monitoring",
      "Future Expansion"
    ],

    configuration: {

      inverter: "8kW Hybrid Inverter",

      battery: "10kWh Lithium Battery",

      panels: "10–14 High-Efficiency Solar Panels"

    },

    cta: "Book My FREE Solar Assessment",

    featured: true

  },

  {

    id: "independence",

    name: "Solar8 Independence",

    tagline: "Take Control of Your Energy Future.",

    shortDescription:
      "Maximum savings with greater energy independence.",

    longDescription:
      "Designed for larger households and customers looking for maximum long-term savings and reduced reliance on the electricity grid.",

    idealFor: [
      "Large Homes",
      "High Electricity Usage",
      "Future EV Charging",
      "Energy Independence"
    ],

    benefits: [
      "Maximum Savings",
      "Large Battery Capacity",
      "Premium Monitoring",
      "Future Ready"
    ],

    configuration: {

      inverter: "12kW Hybrid Inverter",

      battery: "15–20kWh Lithium Battery",

      panels: "18–24 High-Efficiency Solar Panels"

    },

    cta: "Book My FREE Solar Assessment"

  },

  {

    id: "custom",

    name: "Solar8 Custom",

    tagline: "Designed Around Your Property.",

    shortDescription:
      "Tailor-made solutions for unique homes and businesses.",

    longDescription:
      "Every property is different. Solar8 Custom is designed after a detailed site assessment to deliver the best balance of performance, savings and future flexibility.",

    idealFor: [
      "Businesses",
      "Farms",
      "Commercial Buildings",
      "Complex Installations"
    ],

    benefits: [
      "Fully Tailored Design",
      "Professional Consultation",
      "Scalable Systems",
      "Expert Installation"
    ],

    configuration: {

      inverter: "Custom Design",

      battery: "Custom Design",

      panels: "Determined During Assessment"

    },

    cta: "Speak To A Solar Consultant"

  }

];

export default solutions;
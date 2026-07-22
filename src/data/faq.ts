// ============================================================================
// Solar8 Frequently Asked Questions
// Centralised FAQ data used by the FAQ section.
// ============================================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "How much can I save with solar?",
    answer:
      "Every property is different. Savings depend on your electricity usage, system size and how much energy you consume during the day. Our free assessment helps determine the most suitable solution for your needs.",
  },

  {
    question: "Which brands do you install?",
    answer:
      "We install premium brands including Sunsynk, Deye, Victron, Huawei, Blue Mountain, Megarevo and leading solar panel manufacturers such as JA Solar, LONGi, Jinko Solar and Canadian Solar.",
  },

  {
    question: "Do you install throughout Gauteng?",
    answer:
      "Yes. We provide residential and commercial solar installations throughout Gauteng, including Pretoria, Centurion, Midrand and Johannesburg.",
  },

  {
    question: "What warranties are included?",
    answer:
      "Solar panels include manufacturer warranties of up to 25 years, batteries up to 10 years and inverters up to 5 years. Every Solar8 installation also includes our 5-Year Workmanship Warranty.",
  },

  {
    question: "What after-sales support do you provide?",
    answer:
      "We offer remote diagnostics where possible and provide local Gauteng support. Should an on-site visit be required, we'll arrange a technician to assist you.",
  },

  {
    question: "Can I expand my system later?",
    answer:
      "Yes. Wherever practical, we design systems that allow future expansion of battery storage and solar generation as your energy requirements grow.",
  },
];

export default faqs;
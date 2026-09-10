// Solar8 Frequently Asked Questions
// Centralised FAQ content used by the main FAQ page.

export interface FAQItem {
  question: string;
  answer: string;
  category: "Solar & Savings" | "Systems" | "Installation" | "Batteries" | "Support";
}

export const faqs: FAQItem[] = [
  {
    category: "Solar & Savings",
    question: "How much can I save with solar?",
    answer: "Savings depend on your electricity usage, tariff, system size and how much energy you use during the day. A Solar8 assessment helps determine a system sized around your actual requirements rather than a generic package.",
  },
  {
    category: "Solar & Savings",
    question: "Is solar worth it if I am connected to the grid?",
    answer: "Yes. A grid-connected solar system can reduce the amount of electricity you need to buy from the grid while a battery can provide backup during outages. The right combination depends on your usage pattern and priorities.",
  },
  {
    category: "Solar & Savings",
    question: "Do I need batteries with solar panels?",
    answer: "Not always. Solar panels generate electricity during the day, while batteries store energy for later use and backup. If backup power or evening energy use is important, batteries can make a significant difference.",
  },
  {
    category: "Systems",
    question: "Which solar brands do you work with?",
    answer: "Solar8 works with established inverter and battery brands including Sunsynk, Deye, Victron, Huawei, Blue Mountain and Megarevo, together with leading solar panel manufacturers. The recommended equipment depends on the property and system requirements.",
  },
  {
    category: "Systems",
    question: "What size solar system do I need?",
    answer: "There is no single size that suits every property. We consider your electricity usage, important appliances, backup requirements, available roof or installation space and future needs before recommending a system.",
  },
  {
    category: "Systems",
    question: "Can I expand my solar system later?",
    answer: "Often, yes. Where practical, Solar8 designs systems with future expansion in mind, allowing additional battery storage or solar generation to be considered as your energy requirements change.",
  },
  {
    category: "Installation",
    question: "Do you install throughout Gauteng?",
    answer: "Yes. Solar8 provides residential and commercial solar solutions across Gauteng, including Pretoria, Centurion, Midrand and Johannesburg. Installation requirements are assessed for each property.",
  },
  {
    category: "Installation",
    question: "What happens during a solar assessment?",
    answer: "We look at your electricity usage, property, appliances, backup requirements and available installation space. The goal is to recommend a practical system that matches how you actually use electricity.",
  },
  {
    category: "Installation",
    question: "How long does a solar installation take?",
    answer: "Installation time varies with system size, property layout, equipment and electrical requirements. Your Solar8 team can confirm the expected installation schedule once the site requirements have been assessed.",
  },
  {
    category: "Batteries",
    question: "How long will a solar battery last during a power outage?",
    answer: "It depends on battery capacity and the appliances you run. Running only essential loads can extend backup time considerably. Our assessment uses your selected appliances and backup requirements to help size the system appropriately.",
  },
  {
    category: "Batteries",
    question: "Can a battery power my whole house?",
    answer: "Some systems can support a large portion of a home, while others are designed around selected essential circuits. The inverter, battery capacity and total load determine what can be powered safely and for how long.",
  },
  {
    category: "Support",
    question: "What warranties are included?",
    answer: "Solar8 installations include a 5-Year Workmanship Warranty. Equipment is also covered by manufacturer warranties, with solar panels available with warranties of up to 25 years, batteries up to 10 years and inverters up to 5 years, depending on the selected products.",
  },
  {
    category: "Support",
    question: "What after-sales support do you provide?",
    answer: "We provide local Gauteng support and remote diagnostics where possible. If an on-site visit is required, the Solar8 team can arrange the appropriate technical assistance.",
  },
  {
    category: "Support",
    question: "Can I monitor my solar system?",
    answer: "Many modern inverter systems provide monitoring through a mobile or web application. The exact monitoring features depend on the equipment selected for your installation.",
  },
];

export default faqs;

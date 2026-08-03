// ============================================================================
// Solar8 Appliance Database
// Single source of truth for all appliance calculations.
// ============================================================================

export type ApplianceCategory =
    | "Kitchen"
    | "Climate"
    | "Laundry"
    | "Entertainment"
    | "Office"
    | "Pumps"
    | "Security"
    | "Heating";

export interface ApplianceDefinition {

    id: string;

    name: string;

    category: ApplianceCategory;

    displayOrder: number;

    runningWatts: number;

    surgeWatts: number;

    critical: boolean;

    maxQuantity: number;

}

export const appliances: ApplianceDefinition[] = [

    // ============================================================
    // Kitchen
    // ============================================================

    {
        id: "fridge",
        name: "Refrigerator",
        category: "Kitchen",
        displayOrder: 1,
        runningWatts: 180,
        surgeWatts: 600,
        critical: true,
        maxQuantity: 4
    },

    {
        id: "freezer",
        name: "Chest Freezer",
        category: "Kitchen",
        displayOrder: 2,
        runningWatts: 220,
        surgeWatts: 700,
        critical: true,
        maxQuantity: 3
    },

    {
        id: "uprightFreezer",
        name: "Upright Freezer",
        category: "Kitchen",
        displayOrder: 3,
        runningWatts: 220,
        surgeWatts: 700,
        critical: true,
        maxQuantity: 2
    },

    {
        id: "kettle",
        name: "Electric Kettle",
        category: "Kitchen",
        displayOrder: 4,
        runningWatts: 2200,
        surgeWatts: 2200,
        critical: false,
        maxQuantity: 2
    },

    {
        id: "microwave",
        name: "Microwave Oven",
        category: "Kitchen",
        displayOrder: 5,
        runningWatts: 1200,
        surgeWatts: 1200,
        critical: false,
        maxQuantity: 2
    },

    {
        id: "airFryer",
        name: "Air Fryer",
        category: "Kitchen",
        displayOrder: 6,
        runningWatts: 1800,
        surgeWatts: 1800,
        critical: false,
        maxQuantity: 2
    },

    {
        id: "dishwasher",
        name: "Dishwasher",
        category: "Kitchen",
        displayOrder: 7,
        runningWatts: 1800,
        surgeWatts: 1800,
        critical: false,
        maxQuantity: 1
    },

    {
        id: "coffeeMachine",
        name: "Coffee Machine",
        category: "Kitchen",
        displayOrder: 8,
        runningWatts: 1200,
        surgeWatts: 1200,
        critical: false,
        maxQuantity: 2
    },

    {
        id: "toaster",
        name: "Toaster",
        category: "Kitchen",
        displayOrder: 9,
        runningWatts: 1200,
        surgeWatts: 1200,
        critical: false,
        maxQuantity: 2
    },

    // ============================================================
    // Climate
    // ============================================================

    {
        id: "aircon9000",
        name: "Air Conditioner (9000 BTU)",
        category: "Climate",
        displayOrder: 10,
        runningWatts: 900,
        surgeWatts: 1800,
        critical: false,
        maxQuantity: 4
    },

    {
        id: "aircon18000",
        name: "Air Conditioner (18000 BTU)",
        category: "Climate",
        displayOrder: 11,
        runningWatts: 1800,
        surgeWatts: 3500,
        critical: false,
        maxQuantity: 3
    },

    {
        id: "ceilingFan",
        name: "Ceiling Fan",
        category: "Climate",
        displayOrder: 12,
        runningWatts: 75,
        surgeWatts: 100,
        critical: false,
        maxQuantity: 8
    },

    // ============================================================
    // Laundry
    // ============================================================

    {
        id: "washingMachine",
        name: "Washing Machine",
        category: "Laundry",
        displayOrder: 13,
        runningWatts: 1200,
        surgeWatts: 2000,
        critical: false,
        maxQuantity: 2
    },

    {
        id: "iron",
        name: "Iron",
        category: "Laundry",
        displayOrder: 14,
        runningWatts: 2000,
        surgeWatts: 2000,
        critical: false,
        maxQuantity: 2
    },

    // ============================================================
    // Entertainment
    // ============================================================

    {
        id: "television",
        name: "Television (LED)",
        category: "Entertainment",
        displayOrder: 15,
        runningWatts: 120,
        surgeWatts: 120,
        critical: true,
        maxQuantity: 6
    },

    {
        id: "decoder",
        name: "Decoder / Streaming Box",
        category: "Entertainment",
        displayOrder: 16,
        runningWatts: 40,
        surgeWatts: 40,
        critical: true,
        maxQuantity: 4
    },

    {
        id: "soundSystem",
        name: "Sound System",
        category: "Entertainment",
        displayOrder: 17,
        runningWatts: 150,
        surgeWatts: 250,
        critical: false,
        maxQuantity: 2
    },

    // ============================================================
    // Office
    // ============================================================

    {
        id: "desktop",
        name: "Desktop Computer",
        category: "Office",
        displayOrder: 18,
        runningWatts: 250,
        surgeWatts: 350,
        critical: true,
        maxQuantity: 6
    },

    {
        id: "laptop",
        name: "Laptop",
        category: "Office",
        displayOrder: 19,
        runningWatts: 90,
        surgeWatts: 120,
        critical: true,
        maxQuantity: 6
    },

    {
        id: "monitor",
        name: "Monitor",
        category: "Office",
        displayOrder: 20,
        runningWatts: 40,
        surgeWatts: 40,
        critical: true,
        maxQuantity: 6
    },

    {
        id: "printer",
        name: "Printer",
        category: "Office",
        displayOrder: 21,
        runningWatts: 100,
        surgeWatts: 250,
        critical: false,
        maxQuantity: 2
    },

    {
        id: "router",
        name: "WiFi Router",
        category: "Office",
        displayOrder: 22,
        runningWatts: 20,
        surgeWatts: 20,
        critical: true,
        maxQuantity: 3
    },

    // ============================================================
    // Pumps
    // ============================================================

    {
        id: "poolPump",
        name: "Pool Pump",
        category: "Pumps",
        displayOrder: 23,
        runningWatts: 1100,
        surgeWatts: 2500,
        critical: false,
        maxQuantity: 2
    },

    {
        id: "borehole",
        name: "Borehole Pump",
        category: "Pumps",
        displayOrder: 24,
        runningWatts: 1500,
        surgeWatts: 4000,
        critical: true,
        maxQuantity: 2
    },

    // ============================================================
    // Security
    // ============================================================

    {
        id: "security",
        name: "Security System",
        category: "Security",
        displayOrder: 25,
        runningWatts: 60,
        surgeWatts: 60,
        critical: true,
        maxQuantity: 2
    },

    {
        id: "electricFence",
        name: "Electric Fence",
        category: "Security",
        displayOrder: 26,
        runningWatts: 40,
        surgeWatts: 40,
        critical: true,
        maxQuantity: 2
    },

    {
        id: "gateMotor",
        name: "Gate Motor",
        category: "Security",
        displayOrder: 27,
        runningWatts: 350,
        surgeWatts: 800,
        critical: false,
        maxQuantity: 2
    },

    {
        id: "garageDoor",
        name: "Garage Door Motor",
        category: "Security",
        displayOrder: 28,
        runningWatts: 350,
        surgeWatts: 800,
        critical: false,
        maxQuantity: 2
    },

    {
        id: "cctv",
        name: "CCTV System",
        category: "Security",
        displayOrder: 29,
        runningWatts: 80,
        surgeWatts: 80,
        critical: true,
        maxQuantity: 2
    },

    // ============================================================
    // Heating
    // ============================================================

    {
        id: "geyser",
        name: "Electric Geyser",
        category: "Heating",
        displayOrder: 30,
        runningWatts: 3000,
        surgeWatts: 3000,
        critical: false,
        maxQuantity: 2
    },

    {
        id: "heatPump",
        name: "Heat Pump",
        category: "Heating",
        displayOrder: 31,
        runningWatts: 1200,
        surgeWatts: 2000,
        critical: false,
        maxQuantity: 2
    }

];

export default appliances;
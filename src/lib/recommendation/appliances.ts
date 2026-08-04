// ============================================================================
// Solar8 Appliance Database
// ============================================================================

export interface ApplianceDefinition {
    id: string;
    name: string;

    category:
        | "Kitchen"
        | "Entertainment"
        | "Office"
        | "Climate"
        | "Water"
        | "Security"
        | "Laundry"
        | "Heating"
        | "Other";

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
        surgeWatts: 800,
        critical: true,
        maxQuantity: 4
    },

    {
        id: "chestFreezer",
        name: "Chest Freezer",
        category: "Kitchen",
        displayOrder: 2,
        runningWatts: 220,
        surgeWatts: 900,
        critical: true,
        maxQuantity: 3
    },

    {
        id: "uprightFreezer",
        name: "Upright Freezer",
        category: "Kitchen",
        displayOrder: 3,
        runningWatts: 220,
        surgeWatts: 900,
        critical: true,
        maxQuantity: 3
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
        surgeWatts: 1500,
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
        surgeWatts: 2200,
        critical: false,
        maxQuantity: 2
    },

    // ============================================================
    // Entertainment
    // ============================================================

    {
        id: "television",
        name: "LED Television",
        category: "Entertainment",
        displayOrder: 8,
        runningWatts: 120,
        surgeWatts: 150,
        critical: true,
        maxQuantity: 6
    },

    // ============================================================
    // Office
    // ============================================================

    {
        id: "desktop",
        name: "Desktop Computer",
        category: "Office",
        displayOrder: 9,
        runningWatts: 250,
        surgeWatts: 350,
        critical: true,
        maxQuantity: 4
    },

    {
        id: "laptop",
        name: "Laptop",
        category: "Office",
        displayOrder: 10,
        runningWatts: 90,
        surgeWatts: 120,
        critical: true,
        maxQuantity: 6
    },

    {
        id: "wifi",
        name: "WiFi Router",
        category: "Office",
        displayOrder: 11,
        runningWatts: 20,
        surgeWatts: 20,
        critical: true,
        maxQuantity: 4
    },

    // ============================================================
    // Water
    // ============================================================

    {
        id: "boreholePump",
        name: "Borehole Pump",
        category: "Water",
        displayOrder: 12,
        runningWatts: 1500,
        surgeWatts: 3000,
        critical: true,
        maxQuantity: 2
    },

    {
        id: "poolPump",
        name: "Pool Pump",
        category: "Water",
        displayOrder: 13,
        runningWatts: 1100,
        surgeWatts: 2500,
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
        displayOrder: 14,
        runningWatts: 900,
        surgeWatts: 1800,
        critical: false,
        maxQuantity: 6
    },

    {
        id: "aircon18000",
        name: "Air Conditioner (18000 BTU)",
        category: "Climate",
        displayOrder: 15,
        runningWatts: 1800,
        surgeWatts: 3200,
        critical: false,
        maxQuantity: 6
    },

    // ============================================================
    // Laundry
    // ============================================================

    {
        id: "washingMachine",
        name: "Washing Machine",
        category: "Laundry",
        displayOrder: 16,
        runningWatts: 1200,
        surgeWatts: 2200,
        critical: false,
        maxQuantity: 2
    },

    {
        id: "iron",
        name: "Iron",
        category: "Laundry",
        displayOrder: 17,
        runningWatts: 2000,
        surgeWatts: 2000,
        critical: false,
        maxQuantity: 2
    },

    {
        id: "vacuum",
        name: "Vacuum Cleaner",
        category: "Laundry",
        displayOrder: 18,
        runningWatts: 1200,
        surgeWatts: 1800,
        critical: false,
        maxQuantity: 2
    },

    // ============================================================
    // Security
    // ============================================================

    {
        id: "securitySystem",
        name: "Security System",
        category: "Security",
        displayOrder: 19,
        runningWatts: 60,
        surgeWatts: 80,
        critical: true,
        maxQuantity: 2
    },

    {
        id: "electricFence",
        name: "Electric Fence",
        category: "Security",
        displayOrder: 20,
        runningWatts: 40,
        surgeWatts: 60,
        critical: true,
        maxQuantity: 2
    },

    {
        id: "gateMotor",
        name: "Gate Motor",
        category: "Security",
        displayOrder: 21,
        runningWatts: 350,
        surgeWatts: 800,
        critical: false,
        maxQuantity: 2
    },

    {
        id: "garageDoor",
        name: "Garage Door Motor",
        category: "Security",
        displayOrder: 22,
        runningWatts: 350,
        surgeWatts: 800,
        critical: false,
        maxQuantity: 4
    },

    // ============================================================
    // Heating
    // ============================================================

    {
        id: "geyser",
        name: "Electric Geyser",
        category: "Heating",
        displayOrder: 23,
        runningWatts: 3000,
        surgeWatts: 3000,
        critical: false,
        maxQuantity: 3
    },

    {
        id: "heatPump",
        name: "Heat Pump",
        category: "Heating",
        displayOrder: 24,
        runningWatts: 1200,
        surgeWatts: 2000,
        critical: false,
        maxQuantity: 2
    }

];

export default appliances;
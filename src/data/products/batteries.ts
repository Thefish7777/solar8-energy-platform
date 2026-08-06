// ============================================================================
// Solar8 Battery Catalogue
// ============================================================================

export interface Battery {

    id: string;

    brand: string;

    model: string;

    capacity: number;      // kWh

    voltage: number;

    chemistry: "LiFePO4";

    cycles: number;

    warranty: number;      // Years

    price: number;

    recommended: boolean;

}

const batteries: Battery[] = [

    // ==========================================================
    // Dyness
    // ==========================================================

    {
        id: "dyness-bx51100",
        brand: "Dyness",
        model: "BX51100",

        capacity: 5.12,

        voltage: 51.2,

        chemistry: "LiFePO4",

        cycles: 6000,

        warranty: 10,

        price: 24995,

        recommended: true

    },

    // ==========================================================
    // Hubble
    // ==========================================================

    {
        id: "hubble-am2",

        brand: "Hubble",

        model: "AM-2",

        capacity: 5.5,

        voltage: 51.2,

        chemistry: "LiFePO4",

        cycles: 7000,

        warranty: 10,

        price: 25995,

        recommended: true

    },

    {
        id: "hubble-am5",

        brand: "Hubble",

        model: "AM-5",

        capacity: 5.5,

        voltage: 51.2,

        chemistry: "LiFePO4",

        cycles: 8000,

        warranty: 10,

        price: 28995,

        recommended: true

    },

    // ==========================================================
    // Huawei
    // ==========================================================

    {
        id: "huawei-luna5",

        brand: "Huawei",

        model: "LUNA2000 5kWh",

        capacity: 5,

        voltage: 360,

        chemistry: "LiFePO4",

        cycles: 6000,

        warranty: 10,

        price: 32995,

        recommended: true

    },

    // ==========================================================
    // Blue Mountain
    // ==========================================================

    {
        id: "bluemountain-5",

        brand: "Blue Mountain",

        model: "5.12kWh Lithium",

        capacity: 5.12,

        voltage: 51.2,

        chemistry: "LiFePO4",

        cycles: 6000,

        warranty: 10,

        price: 21995,

        recommended: true

    }

];

export default batteries;
// ============================================================================
// Solar8 Equipment Database
// ============================================================================

export interface Inverter {

    id: string;

    brand: string;

    model: string;

    size: string;

    phases: number;

    maxPV: string;

    warranty: string;

    price: number;

}

export interface Battery {

    id: string;

    brand: string;

    model: string;

    capacity: number;

    chemistry: string;

    cycles: number;

    warranty: string;

    price: number;

}

export interface Panel {

    id: string;

    brand: string;

    model: string;

    watts: number;

    efficiency: string;

    warranty: string;

    price: number;

}

export const inverters: Inverter[] = [

{
    id: "sunsynk-5",

    brand: "Sunsynk",

    model: "5kW Hybrid",

    size: "5kW",

    phases: 1,

    maxPV: "6500W",

    warranty: "10 Years",

    price: 29995,
},

{
    id: "sunsynk-8",

    brand: "Sunsynk",

    model: "8kW Hybrid",

    size: "8kW",

    phases: 1,

    maxPV: "10400W",

    warranty: "10 Years",

    price: 38995,
},

{
    id: "deye-5",

    brand: "Deye",

    model: "5kW Hybrid",

    size: "5kW",

    phases: 1,

    maxPV: "6500W",

    warranty: "10 Years",

    price: 27995,
},

{
    id: "victron-easysolar",

    brand: "Victron",

    model: "EasySolar II",

    size: "5kVA",

    phases: 1,

    maxPV: "6000W",

    warranty: "5 Years",

    price: 41995,
},

];

export const batteries: Battery[] = [

{
    id: "hinen-5",

    brand: "Hinen",

    model: "5.12kWh",

    capacity: 5.12,

    chemistry: "LiFePO4",

    cycles: 6000,

    warranty: "10 Years",

    price: 23995,
},

{
    id: "hinen-10",

    brand: "Hinen",

    model: "10.24kWh",

    capacity: 10.24,

    chemistry: "LiFePO4",

    cycles: 6000,

    warranty: "10 Years",

    price: 45995,
},

{
    id: "dyness-bx",

    brand: "Dyness",

    model: "BX51100",

    capacity: 5.12,

    chemistry: "LiFePO4",

    cycles: 6000,

    warranty: "10 Years",

    price: 24995,
},

];

export const panels: Panel[] = [

{
    id: "ja550",

    brand: "JA Solar",

    model: "550W Mono",

    watts: 550,

    efficiency: "21.3%",

    warranty: "25 Years",

    price: 1695,
},

{
    id: "longi555",

    brand: "Longi",

    model: "555W Hi-MO",

    watts: 555,

    efficiency: "21.5%",

    warranty: "25 Years",

    price: 1745,
},

{
    id: "canadian555",

    brand: "Canadian Solar",

    model: "555W Mono",

    watts: 555,

    efficiency: "21.4%",

    warranty: "25 Years",

    price: 1725,
},

];
// ============================================================================
// Solar8 Package Definitions
// ============================================================================

export interface SolarPackage {

    id: string;

    name: string;

    inverterId: string;

    batteryId: string;

    batteryQuantity: number;

    panelId: string;

    panelQuantity: number;

}

const packages: SolarPackage[] = [

    {

        id: "backup-3",

        name: "Solar8 Backup",

        inverterId: "sunsynk-3",

        batteryId: "dyness-bx51100",

        batteryQuantity: 1,

        panelId: "ja550",

        panelQuantity: 6

    },

    {

        id: "smart-5",

        name: "Solar8 Smart",

        inverterId: "sunsynk-5",

        batteryId: "dyness-bx51100",

        batteryQuantity: 2,

        panelId: "ja550",

        panelQuantity: 8

    },

    {

        id: "independence-8",

        name: "Solar8 Independence",

        inverterId: "sunsynk-8",

        batteryId: "dyness-bx51100",

        batteryQuantity: 3,

        panelId: "ja550",

        panelQuantity: 12

    }

];

export default packages;
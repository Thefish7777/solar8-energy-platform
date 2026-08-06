// ============================================================================
// Solar8 Panel Catalogue
// ============================================================================

export interface SolarPanel {

    id: string;

    brand: string;

    model: string;

    watts: number;

    efficiency: number;

    warranty: number;

    price: number;

}

const panels: SolarPanel[] = [

    {

        id: "ja550",

        brand: "JA Solar",

        model: "550W Mono",

        watts: 550,

        efficiency: 21.3,

        warranty: 25,

        price: 1795

    },

    {

        id: "canadian550",

        brand: "Canadian Solar",

        model: "550W HiKu",

        watts: 550,

        efficiency: 21.5,

        warranty: 25,

        price: 1845

    },

    {

        id: "jinko550",

        brand: "Jinko",

        model: "Tiger Neo 550W",

        watts: 550,

        efficiency: 21.6,

        warranty: 25,

        price: 1825

    }

];

export default panels;
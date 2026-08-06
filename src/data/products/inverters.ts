// ============================================================================
// Solar8 Inverter Catalogue
// ============================================================================

export interface Inverter {

    id: string;

    name: string;

    brand: string;

    size: number;

    phases: 1 | 3;

    hybrid: boolean;

    price: number;

    image: string;

    url: string;

    featured: boolean;

}

const inverters: Inverter[] = [

    // ==========================================================
    // SUNSYNK
    // ==========================================================

    {
        id: "sunsynk-3kw",
        name: "Sunsynk 3kW Hybrid Inverter",
        brand: "Sunsynk",
        size: 3,
        phases: 1,
        hybrid: true,
        price: 22995,
        image: "/images/products/sunsynk-3kw.webp",
        url: "/products/sunsynk-3kw",
        featured: true
    },

    {
        id: "sunsynk-5kw",
        name: "Sunsynk 5kW Hybrid Inverter",
        brand: "Sunsynk",
        size: 5,
        phases: 1,
        hybrid: true,
        price: 32995,
        image: "/images/products/sunsynk-5kw.webp",
        url: "/products/sunsynk-5kw",
        featured: true
    },

    {
        id: "sunsynk-8kw",
        name: "Sunsynk 8kW Hybrid Inverter",
        brand: "Sunsynk",
        size: 8,
        phases: 1,
        hybrid: true,
        price: 42995,
        image: "/images/products/sunsynk-8kw.webp",
        url: "/products/sunsynk-8kw",
        featured: true
    },

    {
        id: "sunsynk-12kw",
        name: "Sunsynk 12kW Hybrid Inverter",
        brand: "Sunsynk",
        size: 12,
        phases: 3,
        hybrid: true,
        price: 58995,
        image: "/images/products/sunsynk-12kw.webp",
        url: "/products/sunsynk-12kw",
        featured: false
    },

    {
        id: "sunsynk-16kw",
        name: "Sunsynk 16kW Hybrid Inverter",
        brand: "Sunsynk",
        size: 16,
        phases: 3,
        hybrid: true,
        price: 73995,
        image: "/images/products/sunsynk-16kw.webp",
        url: "/products/sunsynk-16kw",
        featured: false
    },

    // ==========================================================
    // DEYE
    // ==========================================================

    {
        id: "deye-5kw",
        name: "Deye 5kW Hybrid Inverter",
        brand: "Deye",
        size: 5,
        phases: 1,
        hybrid: true,
        price: 30995,
        image: "/images/products/deye-5kw.webp",
        url: "/products/deye-5kw",
        featured: false
    },

    {
        id: "deye-8kw",
        name: "Deye 8kW Hybrid Inverter",
        brand: "Deye",
        size: 8,
        phases: 1,
        hybrid: true,
        price: 40995,
        image: "/images/products/deye-8kw.webp",
        url: "/products/deye-8kw",
        featured: false
    },

    {
        id: "deye-12kw",
        name: "Deye 12kW Hybrid Inverter",
        brand: "Deye",
        size: 12,
        phases: 3,
        hybrid: true,
        price: 55995,
        image: "/images/products/deye-12kw.webp",
        url: "/products/deye-12kw",
        featured: false
    },

    // ==========================================================
    // HUAWEI
    // ==========================================================

    {
        id: "huawei-3kw",
        name: "Huawei SUN2000 3kW",
        brand: "Huawei",
        size: 3,
        phases: 1,
        hybrid: true,
        price: 23995,
        image: "/images/products/huawei-3kw.webp",
        url: "/products/huawei-3kw",
        featured: false
    },

    {
        id: "huawei-5kw",
        name: "Huawei SUN2000 5kW",
        brand: "Huawei",
        size: 5,
        phases: 1,
        hybrid: true,
        price: 32995,
        image: "/images/products/huawei-5kw.webp",
        url: "/products/huawei-5kw",
        featured: true
    },

    {
        id: "huawei-10kw",
        name: "Huawei SUN2000 10kW",
        brand: "Huawei",
        size: 10,
        phases: 3,
        hybrid: true,
        price: 52995,
        image: "/images/products/huawei-10kw.webp",
        url: "/products/huawei-10kw",
        featured: false
    },

    // ==========================================================
    // SOLIS
    // ==========================================================

    {
        id: "solis-5kw",
        name: "Solis 5kW Hybrid",
        brand: "Solis",
        size: 5,
        phases: 1,
        hybrid: true,
        price: 29995,
        image: "/images/products/solis-5kw.webp",
        url: "/products/solis-5kw",
        featured: false
    },

    {
        id: "solis-8kw",
        name: "Solis 8kW Hybrid",
        brand: "Solis",
        size: 8,
        phases: 1,
        hybrid: true,
        price: 38995,
        image: "/images/products/solis-8kw.webp",
        url: "/products/solis-8kw",
        featured: false
    },

    // ==========================================================
    // VICTRON
    // ==========================================================

    {
        id: "victron-easysolar-5",
        name: "Victron EasySolar-II 5kVA",
        brand: "Victron",
        size: 5,
        phases: 1,
        hybrid: true,
        price: 46995,
        image: "/images/products/victron-5.webp",
        url: "/products/victron-5",
        featured: false
    },

    {
        id: "victron-quattro-10",
        name: "Victron Quattro 10kVA",
        brand: "Victron",
        size: 10,
        phases: 1,
        hybrid: true,
        price: 76995,
        image: "/images/products/victron-10.webp",
        url: "/products/victron-10",
        featured: false
    },

    // ==========================================================
    // MEGAREVO
    // ==========================================================

    {
        id: "megarevo-10",
        name: "Megarevo 10kW Hybrid",
        brand: "Megarevo",
        size: 10,
        phases: 3,
        hybrid: true,
        price: 64995,
        image: "/images/products/megarevo-10.webp",
        url: "/products/megarevo-10",
        featured: false
    },

    {
        id: "megarevo-15",
        name: "Megarevo 15kW Hybrid",
        brand: "Megarevo",
        size: 15,
        phases: 3,
        hybrid: true,
        price: 82995,
        image: "/images/products/megarevo-15.webp",
        url: "/products/megarevo-15",
        featured: false
    },

    // ==========================================================
    // BLUE MOUNTAIN
    // ==========================================================

    {
        id: "bluemountain-5",
        name: "Blue Mountain 5kW Hybrid",
        brand: "Blue Mountain",
        size: 5,
        phases: 1,
        hybrid: true,
        price: 27995,
        image: "/images/products/bluemountain-5.webp",
        url: "/products/bluemountain-5",
        featured: false
    }

];

export default inverters;
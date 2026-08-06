// ============================================================================
// Solar8 Product Selectors
// ============================================================================

import inverters from "../../data/products/inverters";
import batteries from "../../data/products/batteries";
import panels from "../../data/products/panels";

import type { Inverter } from "../../data/products/inverters";
import type { Battery } from "../../data/products/batteries";
import type { SolarPanel } from "../../data/products/panels";

// ============================================================================
// Select Inverter
// ============================================================================

export function selectInverterProduct(
    requiredPeakLoad: number
): Inverter {

    const sorted = [...inverters].sort(
        (a, b) => a.size - b.size
    );

    return (

        sorted.find(

            inverter => inverter.size >= requiredPeakLoad

        ) ??

        sorted[sorted.length - 1]

    );

}

// ============================================================================
// Select Battery
// Returns the most economical battery option.
// ============================================================================

export function selectBatteryProduct(): Battery {

    const sorted = [...batteries].sort(
        (a, b) => a.capacity - b.capacity
    );

    // Default to the smallest battery.
    // Quantity is calculated separately.

    return sorted[0];

}

// ============================================================================
// Calculate Battery Quantity
// ============================================================================

export function calculateBatteryQuantity(

    requiredCapacity: number,

    battery: Battery

): number {

    return Math.max(

        1,

        Math.ceil(

            requiredCapacity /

            battery.capacity

        )

    );

}

// ============================================================================
// Select Solar Panel
// ============================================================================

export function selectPanelProduct(): SolarPanel {

    const sorted = [...panels].sort(

        (a, b) => b.watts - a.watts

    );

    return sorted[0];

}

// ============================================================================
// Calculate Panel Quantity
// Oversize PV array to approximately 120%
// ============================================================================

export function calculatePanelQuantity(

    inverterSize: number,

    panel: SolarPanel

): number {

    const targetWatts = inverterSize * 1200;

    return Math.max(

        1,

        Math.ceil(

            targetWatts /

            panel.watts

        )

    );

}
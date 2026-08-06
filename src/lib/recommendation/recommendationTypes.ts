// ============================================================================
// Solar8 Recommendation Types
// ============================================================================

import type { Inverter } from "../../data/products/inverters";
import type { Battery } from "../../data/products/batteries";
import type { SolarPanel } from "../../data/products/panels";

// ============================================================================
// Property Types
// ============================================================================

export type PropertyType =
    | "home"
    | "business"
    | "farm";

// ============================================================================
// Customer Goals
// ============================================================================

export type CustomerGoal =
    | "backup"
    | "save"
    | "independence";

// ============================================================================
// Appliance Selection
// ============================================================================

export interface ApplianceSelection {

    applianceId: string;

    quantity: number;

}

// ============================================================================
// Assessment Answers
// ============================================================================

export interface AssessmentAnswers {

    propertyType: PropertyType;

    monthlyBill: number;

    occupants: number;

    goal: CustomerGoal;

    backupHours: number;

    appliances: ApplianceSelection[];

}

// ============================================================================
// Solar Solution Names
// ============================================================================

export type SolarSolutionName =
    | "Solar8 Backup"
    | "Solar8 Smart"
    | "Solar8 Independence"
    | "Solar8 Custom";

// ============================================================================
// Customer Profile
// ============================================================================

export interface CustomerProfile {

    customerName: string;

    propertyType: PropertyType;

    occupants: number;

    monthlyBill: number;

    goal: CustomerGoal;

    backupHours?: number;

    applianceCount: number;

}

// ============================================================================
// Savings
// ============================================================================

export interface SavingsEstimate {

    monthly: number;

    annual: number;

    percentage: number;

}

// ============================================================================
// Selected Products
// ============================================================================

export interface SelectedProducts {

    inverter: Inverter;

    battery: Battery;

    panel: SolarPanel;

    batteryQuantity: number;

    panelQuantity: number;

}

// ============================================================================
// Recommendation Result
// ============================================================================

export interface RecommendationResult {

    customer: CustomerProfile;

    system: any;

    solution: SolarSolutionName;

    configuration: {

    inverter: Inverter;

    battery: Battery;

    batteryQuantity: number;

    panel: SolarPanel;

    panelQuantity: number;

}

    selectedProducts: SelectedProducts;

    equipmentValue: number;

    savings: SavingsEstimate;

    confidence: number;

    reasons: string[];

}
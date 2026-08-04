// ============================================================================
// Solar8 Recommendation Engine Types
// ============================================================================

import type { SolarSolution } from "../../data/solutions";

/**
 * Customer Goals
 */
export type CustomerGoal =
  | "backup"
  | "save"
  | "independence"
  | "unsure";

/**
 * Property Types
 */
export type PropertyType =
  | "home"
  | "business"
  | "farm";

/**
 * Assessment Answers
 */
export interface ApplianceSelection {

    applianceId: string;

    quantity: number;

}
export interface AssessmentAnswers {

    propertyType: PropertyType;

    monthlyBill: number;

    occupants: number;

    goal: CustomerGoal;

    backupHours: number;

    appliances: ApplianceSelection[];

}

/**
 * Solar8 Solution Names
 */
export type SolarSolutionName =
  | "Solar8 Backup"
  | "Solar8 Smart"
  | "Solar8 Independence"
  | "Solar8 Custom";

/**
 * System Configuration
 */
export interface SystemConfiguration {

    inverter: string;

    battery: string;

    panels: string;

}

/**
 * Savings Estimate
 */
export interface SavingsEstimate {

    monthly: number;

    annual: number;

    percentage: number;

}

/**
 * Customer Profile
 */
export interface CustomerProfile {

    customerName: string;

    propertyType: PropertyType;

    occupants: number;

    monthlyBill: number;

    goal: CustomerGoal;

    backupHours: number;

    applianceCount: number;

}

/**
 * Recommendation Result
 */
export interface RecommendationResult {

    customer: CustomerProfile;

    system: SolarSolution;

    solution: SolarSolutionName;

    configuration: SystemConfiguration;

    equipmentValue: number;

    savings: SavingsEstimate;

    confidence: number;

    reasons: string[];

}

/**
 * Complete Energy Plan
 */
export interface EnergyPlan {

    customer: CustomerProfile;

    recommendation: RecommendationResult;

}
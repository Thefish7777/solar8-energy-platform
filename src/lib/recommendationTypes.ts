// ============================================================================
// Solar8 Recommendation Engine Types
// ============================================================================

import type { SolarSolution } from "../data/solutions";

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
 * Appliance Selection
 */
export interface Appliances {

  airConditioning: boolean;

  poolPump: boolean;

  borehole: boolean;

  electricGeyser: boolean;

  homeOffice: boolean;

  electricVehicle: boolean;

}

/**
 * Assessment Answers
 */
export interface AssessmentAnswers {

  propertyType: PropertyType;

  monthlyBill: number;

  occupants: number;

  goal: CustomerGoal;

  appliances: Appliances;

}

/**
 * Solar8 Solution
 */
export type SolarSolutionName =

  | "Solar8 Backup"

  | "Solar8 Smart"

  | "Solar8 Independence"

  | "Solar8 Custom";

/**
 * Typical Configuration
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
 * Recommendation Result
 */
export interface RecommendationResult {

  // The selected solution object
  system: SolarSolution;

  // The solution name
  solution: SolarSolutionName;

  configuration: SystemConfiguration;

  savings: SavingsEstimate;

  confidence: number;

  reasons: string[];

}

/**
 * Complete Energy Plan
 */
export interface EnergyPlan {

    customer: {

        propertyType: PropertyType;

        occupants: number;

        monthlyBill: number;

        goal: CustomerGoal;

        backupHours: string;

        applianceCount: number;

    };

    recommendation: RecommendationResult;

}
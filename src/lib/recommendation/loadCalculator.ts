// ============================================================================
// Solar8 Load Calculator
// ============================================================================

import type { AssessmentAnswers } from "../recommendationTypes";

export interface LoadCalculation {
  dailyConsumption: number;
  dayConsumption: number;
  nightConsumption: number;
  peakLoad: number;
  criticalLoad: number;
}

/**
 * Calculates estimated energy usage and required inverter load
 * based on customer assessment answers.
 */
export function calculateLoad(
  assessment: AssessmentAnswers
): LoadCalculation {

  // Estimate daily usage from monthly electricity bill.
  // This is temporary and will later be replaced with a more accurate
  // consumption model.
  const dailyConsumption = assessment.monthlyBill / 30;

  // Assume 70% daytime usage, 30% nighttime usage.
  const dayConsumption = dailyConsumption * 0.70;
  const nightConsumption = dailyConsumption * 0.30;

  let peakLoad = 0;
  let criticalLoad = 0;

  // -----------------------------------------------------------------------
  // Estimated appliance loads (kW)
  // -----------------------------------------------------------------------

  if (assessment.appliances.airConditioning) {
    peakLoad += 2.5;
  }

  if (assessment.appliances.poolPump) {
    peakLoad += 1.1;
  }

  if (assessment.appliances.borehole) {
    peakLoad += 1.5;
    criticalLoad += 1.5;
  }

  if (assessment.appliances.electricGeyser) {
    peakLoad += 3.0;
  }

  if (assessment.appliances.homeOffice) {
    peakLoad += 0.5;
    criticalLoad += 0.5;
  }

  if (assessment.appliances.electricVehicle) {
    peakLoad += 7.0;
  }

  // -----------------------------------------------------------------------
  // Return calculations
  // -----------------------------------------------------------------------

  return {
    dailyConsumption,
    dayConsumption,
    nightConsumption,
    peakLoad,
    criticalLoad,
  };
}
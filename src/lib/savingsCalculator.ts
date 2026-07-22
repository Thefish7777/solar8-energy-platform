// ============================================================================
// Solar8 Savings Calculator
// ============================================================================

import type { SolarSolutionName } from "./recommendationTypes";

/**
 * Calculates estimated monthly and annual savings.
 */
export function calculateSavings(
  monthlyBill: number,
  solution: SolarSolutionName
) {

  let percentage = 0;

  switch (solution) {

    case "Solar8 Backup":
      percentage = 15;
      break;

    case "Solar8 Smart":
      percentage = 45;
      break;

    case "Solar8 Independence":
      percentage = 75;
      break;

    case "Solar8 Custom":
      percentage = 60;
      break;

  }

  const monthly = Math.round(monthlyBill * (percentage / 100));

  return {

    monthly,

    annual: monthly * 12,

    percentage

  };

}
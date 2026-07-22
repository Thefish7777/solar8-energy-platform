// ============================================================================
// Solar8 Recommendation Rules
// ============================================================================

import type {
  AssessmentAnswers,
  SolarSolutionName,
} from "./recommendationTypes";

export function chooseSolution(
  answers: AssessmentAnswers
): SolarSolutionName {

  // Businesses and farms always receive a custom recommendation.
  if (
    answers.propertyType === "business" ||
    answers.propertyType === "farm"
  ) {
    return "Solar8 Custom";
  }

  // Customer specifically wants backup.
  if (answers.goal === "backup") {
    return "Solar8 Backup";
  }

  // Very high electricity usage.
  if (answers.monthlyBill >= 4000) {
    return "Solar8 Independence";
  }

  // Medium usage.
  if (answers.monthlyBill >= 1800) {
    return "Solar8 Smart";
  }

  // Default recommendation.
  return "Solar8 Backup";
}
// ============================================================================
// Solar8 Recommendation Reasons
// ============================================================================

import type { AssessmentAnswers } from "./recommendationTypes";

export function getRecommendationReasons(
  answers: AssessmentAnswers
): string[] {

  const reasons: string[] = [];

  if (answers.monthlyBill >= 4000) {
    reasons.push(
      "Your electricity usage is well suited to a solar solution."
    );
  }

  if (answers.goal === "backup") {
    reasons.push(
      "You indicated reliable backup power is your priority."
    );
  }

  if (answers.goal === "save") {
    reasons.push(
      "Reducing your electricity bill is your primary objective."
    );
  }

  if (answers.goal === "independence") {
    reasons.push(
      "You want greater energy independence."
    );
  }

  if (answers.appliances.airConditioning) {
    reasons.push(
      "Your air conditioning can make excellent use of solar energy."
    );
  }

  if (answers.appliances.poolPump) {
    reasons.push(
      "Your pool pump is ideal for daytime solar generation."
    );
  }

  if (reasons.length === 0) {
    reasons.push(
      "Based on your answers, this solution offers the best balance of savings and reliability."
    );
  }

  return reasons;
}
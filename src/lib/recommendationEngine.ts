// ============================================================================
// Solar8 Recommendation Engine
// ============================================================================

import solutions from "../data/solutions";

import { chooseSolution } from "./recommendationRules";

import { calculateSavings } from "./savingsCalculator";

import { getRecommendationReasons } from "./recommendationReasons";

import type {
  AssessmentAnswers,
  RecommendationResult,
} from "./recommendationTypes";

export function generateRecommendation(
  answers: AssessmentAnswers
): RecommendationResult {

  const solutionName = chooseSolution(answers);

  const system = solutions.find(
    s => s.name === solutionName
  );

  if (!system) {
    throw new Error(`Unknown solution: ${solutionName}`);
  }

  return {

    solution: solutionName,

    system,

    configuration: system.configuration,

    savings: calculateSavings(
      answers.monthlyBill,
      solutionName
    ),

    confidence: 95,

reasons: getRecommendationReasons(
    answers
)

  };

}
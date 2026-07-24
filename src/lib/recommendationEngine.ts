// ============================================================================
// Solar8 Recommendation Engine
// ============================================================================

import solutions from "../data/solutions";
import { chooseSolution } from "./recommendationRules";
import { calculateSavings } from "./savingsCalculator";
import { getRecommendationReasons } from "./recommendationReasons";
import { selectEquipment } from "./equipmentSelector";

import type {
  AssessmentAnswers,
  RecommendationResult,
} from "./recommendationTypes";

export function generateRecommendation(
  input: AssessmentAnswers
): RecommendationResult {

  // Choose the correct system
  const solution = chooseSolution(input);

  const system = solutions.find(
    (s) => s.name === solution
  );

  if (!system) {
    throw new Error(`Unknown solution: ${solution}`);
  }

  // Calculate estimated savings
  const savings = calculateSavings(
    input.monthlyBill,
    solution
  );

  // Why this recommendation?
  const reasons = getRecommendationReasons(
    input
  );

  // Recommendation confidence
  const confidence = 95;

  // Configuration
  // (Replace these with real values later if your solutions.ts doesn't contain them)
const equipment = selectEquipment(solution);

const equipmentValue =

    equipment.inverter.price +

    equipment.battery.price +

    equipment.panels.reduce(

        (sum, panel) => sum + panel.price,

        0

    );

const configuration = {
  inverter:
    `${equipment.inverter.brand} ${equipment.inverter.model}`,

  battery:
    `${equipment.battery.brand} ${equipment.battery.model}`,

  panels:
    `${equipment.panels.length} × ${equipment.panels[0].brand} ${equipment.panels[0].model}`,
};

return {

    customer: {

        customerName: "Valued Customer",

        propertyType: input.propertyType,

        occupants: input.occupants,

        monthlyBill: input.monthlyBill,

        goal: input.goal,

        backupHours: "8 Hours",

        applianceCount:
            Object.values(input.appliances).filter(Boolean).length,

    },

    system,

    solution,

    configuration,

    savings,

    confidence,

    reasons,

    equipmentValue,

};

}
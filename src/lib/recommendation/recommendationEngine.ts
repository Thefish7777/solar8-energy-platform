// ============================================================================
// Solar8 Recommendation Engine
// ============================================================================

import type {
    AssessmentAnswers,
    RecommendationResult,
    SolarSolutionName,
    SavingsEstimate,
    CustomerProfile
} from "./recommendationTypes";

import { calculateLoad } from "./loadCalculator";
import { calculateBattery } from "./batteryCalculator";
import { selectInverter } from "./inverterSelector";

import solutions, { type SolarSolution } from "../../data/solutions";

// ============================================================================

export function generateRecommendation(
    assessment: AssessmentAnswers
): RecommendationResult {

    // ----------------------------------------------------------
    // Calculate electrical requirements
    // ----------------------------------------------------------

    const load = calculateLoad(assessment);

    const backupHours =
        assessment.goal === "backup"
            ? 4
            : assessment.goal === "save"
            ? 6
            : 8;

    const battery = calculateBattery(
        load.criticalLoad,
        backupHours
    );

    const inverter = selectInverter(
        load.peakLoad
    );

    // ----------------------------------------------------------
    // Determine solution
    // ----------------------------------------------------------

    let solutionName: SolarSolutionName;

    if (
        assessment.goal === "backup" &&
        assessment.monthlyBill < 2500
    ) {
        solutionName = "Solar8 Backup";
    }
    else if (
        assessment.goal === "save" &&
        assessment.monthlyBill < 5000
    ) {
        solutionName = "Solar8 Smart";
    }
    else if (
        assessment.goal === "independence"
    ) {
        solutionName = "Solar8 Independence";
    }
    else {
        solutionName = "Solar8 Custom";
    }

    // ----------------------------------------------------------
    // Find matching solution
    // ----------------------------------------------------------

    const system: SolarSolution =
        solutions.find(
            (solution: SolarSolution) =>
                solution.name === solutionName
        ) ?? solutions[0];

    // ----------------------------------------------------------
    // Equipment estimate
    // ----------------------------------------------------------

    const equipmentValue =
        inverter.size * 9000 +
        battery.batteryCount * 25000;

    // ----------------------------------------------------------
    // Estimated savings
    // ----------------------------------------------------------

    const savings: SavingsEstimate = {

        monthly:
            Math.round(
                assessment.monthlyBill * 0.65
            ),

        annual:
            Math.round(
                assessment.monthlyBill *
                0.65 *
                12
            ),

        percentage: 65

    };

    // ----------------------------------------------------------
    // Customer profile
    // ----------------------------------------------------------

    const customer: CustomerProfile = {

        customerName: "",

        propertyType:
            assessment.propertyType,

        occupants:
            assessment.occupants,

        monthlyBill:
            assessment.monthlyBill,

        goal:
            assessment.goal,

        backupHours: 8,

        applianceCount:
            Object.values(
                assessment.appliances
            ).filter(Boolean).length

    };

    // ----------------------------------------------------------
    // Return result
    // ----------------------------------------------------------

    return {

        customer,

        system,

        solution: solutionName,

        configuration: {

            inverter:
                inverter.model,

            battery:
                `${battery.batteryCount} × 5kWh Lithium Battery`,

            panels:
                system.configuration.panels

        },

        equipmentValue,

        savings,

        confidence: 92,

        reasons: [

            `Designed for ${assessment.propertyType}`,

            `Supports approximately ${backupHours} hours of backup`,

            `Peak Load: ${load.peakLoad.toFixed(1)} kW`,

            `Critical Load: ${load.criticalLoad.toFixed(1)} kW`,

            `Estimated Monthly Saving: R${savings.monthly.toLocaleString()}`

        ]

    };

}
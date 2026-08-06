// ============================================================================
// Solar8 Recommendation Engine
// ============================================================================

import type {
    AssessmentAnswers,
    RecommendationResult,
    SolarSolutionName,
    SavingsEstimate,
    CustomerProfile,
    SelectedProducts
} from "./recommendationTypes";

import { calculateLoad } from "./loadCalculator";
import { calculateBattery } from "./batteryCalculator";
import { selectInverter } from "./inverterSelector";

import {
    selectInverterProduct,
    selectBatteryProduct,
    calculateBatteryQuantity,
    selectPanelProduct,
    calculatePanelQuantity
} from "./productSelectors";

import solutions, {
    type SolarSolution
} from "../../data/solutions";

// ============================================================================

export function generateRecommendation(

    assessment: AssessmentAnswers

): RecommendationResult {

    // ==========================================================
    // Calculate Load
    // ==========================================================

    const load = calculateLoad(

        assessment

    );

    // ==========================================================
    // Backup Hours
    // ==========================================================

    const backupHours =

        assessment.goal === "backup"

            ? 4

            : assessment.goal === "save"

                ? 6

                : 8;

    // ==========================================================
    // Battery Requirement
    // ==========================================================

    const batteryRequirement =

        calculateBattery(

            load.criticalLoad,

            backupHours

        );

    // ==========================================================
    // Inverter Requirement
    // ==========================================================

    const inverterRequirement =

        selectInverter(

            load.peakLoad

        );

    // ==========================================================
    // Select Actual Products
    // ==========================================================

    const inverter =

        selectInverterProduct(

            inverterRequirement.size

        );

    const battery =

        selectBatteryProduct();

    const batteryQuantity =

        calculateBatteryQuantity(

            batteryRequirement.requiredCapacity,

            battery

        );

    const panel =

        selectPanelProduct();

    const panelQuantity =

        calculatePanelQuantity(

            inverter.size,

            panel

        );

    // ==========================================================
    // Selected Products Object
    // ==========================================================

    const selectedProducts: SelectedProducts = {

        inverter,

        battery,

        panel,

        batteryQuantity,

        panelQuantity

    };

    // ==========================================================
    // Determine Solar8 Package
    // ==========================================================

    let solutionName: SolarSolutionName;

    if (

        assessment.goal === "backup"

        &&

        assessment.monthlyBill < 2500

    ) {

        solutionName = "Solar8 Backup";

    }

    else if (

        assessment.goal === "save"

        &&

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

    // ==========================================================
    // Matching Package
    // ==========================================================

    const system: SolarSolution =

        solutions.find(

            solution =>

                solution.name === solutionName

        )

        ??

        solutions[0];

            // ==========================================================
    // Equipment Value
    // ==========================================================

    const equipmentValue =

        inverter.price +

        (battery.price * batteryQuantity) +

        (panel.price * panelQuantity);

    // ==========================================================
    // Estimated Savings
    // ==========================================================

    const savings: SavingsEstimate = {

        monthly: Math.round(

            assessment.monthlyBill * 0.65

        ),

        annual: Math.round(

            assessment.monthlyBill *

            0.65 *

            12

        ),

        percentage: 65

    };

    // ==========================================================
    // Confidence Score
    // ==========================================================

    const confidence =

        assessment.appliances.length >= 8

            ? 98

            : assessment.appliances.length >= 5

                ? 94

                : 88;

    // ==========================================================
    // Customer Profile
    // ==========================================================

    const customer: CustomerProfile = {

        customerName: "",

        propertyType: assessment.propertyType,

        occupants: assessment.occupants,

        monthlyBill: assessment.monthlyBill,

        goal: assessment.goal,

        backupHours,

        applianceCount:

            assessment.appliances.reduce(

                (sum, appliance) =>

                    sum + appliance.quantity,

                0

            )

    };

    // ==========================================================
    // Return Recommendation
    // ==========================================================

    return {

        customer,

        system,

        solution: solutionName,

        configuration: {

    inverter,

    battery,

    batteryQuantity,

    panel,

    panelQuantity

},

        selectedProducts,

        equipmentValue,

        savings,

        confidence,

        reasons: [

            `Designed for a ${assessment.propertyType}`,

            `Suitable for ${assessment.occupants} occupants`,

            `Supports approximately ${backupHours} hours of backup`,

            `Peak Load: ${load.peakLoad.toFixed(1)} kW`,

            `Critical Load: ${load.criticalLoad.toFixed(1)} kW`,

            `Estimated Monthly Saving: R${savings.monthly.toLocaleString()}`

        ]

    };

}
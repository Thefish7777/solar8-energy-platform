import appliances from "./appliances";
import type { AssessmentAnswers } from "./recommendationTypes";

export interface LoadCalculation {
    runningLoad: number;
    peakLoad: number;
    criticalLoad: number;
}

export function calculateLoad(
    assessment: AssessmentAnswers
): LoadCalculation {

    let runningLoad = 0;
    let peakLoad = 0;
    let criticalLoad = 0;

    for (const selected of assessment.appliances) {

        const appliance = appliances.find(
            a => a.id === selected.applianceId
        );

        if (!appliance) continue;

        const watts =
            appliance.runningWatts * selected.quantity;

        runningLoad += watts;

        peakLoad +=
            appliance.surgeWatts * selected.quantity;

        if (appliance.critical) {

            criticalLoad += watts;

        }

    }

    return {

        runningLoad: runningLoad / 1000,

        peakLoad: peakLoad / 1000,

        criticalLoad: criticalLoad / 1000

    };

}
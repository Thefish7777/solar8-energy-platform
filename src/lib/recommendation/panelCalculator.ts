// ============================================================================
// Solar8 Panel Calculator
// ============================================================================

export interface PanelResult {

    panelCount: number;

    systemSize: number;

}

export function calculatePanels(

    dailyConsumption: number,

    panelSize = 550,

    sunHours = 5.5,

    performanceRatio = 0.80

): PanelResult {

    const requiredKW =
        dailyConsumption /
        (sunHours * performanceRatio);

    const panelCount =
        Math.ceil(
            (requiredKW * 1000) /
            panelSize
        );

    return {

        panelCount,

        systemSize:
            Number(
                (panelCount * panelSize / 1000)
                    .toFixed(1)
            )

    };

}
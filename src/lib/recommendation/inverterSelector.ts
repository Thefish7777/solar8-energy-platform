export interface InverterResult {
    size: number;
    model: string;
}

export function selectInverter(
    peakLoad: number
): InverterResult {

    if (peakLoad <= 3)
        return { size: 3, model: "3kW Hybrid" };

    if (peakLoad <= 5)
        return { size: 5, model: "5kW Hybrid" };

    if (peakLoad <= 8)
        return { size: 8, model: "8kW Hybrid" };

    if (peakLoad <= 10)
        return { size: 10, model: "10kW Hybrid" };

    if (peakLoad <= 12)
        return { size: 12, model: "12kW Hybrid" };

    return { size: 16, model: "16kW Hybrid" };
}
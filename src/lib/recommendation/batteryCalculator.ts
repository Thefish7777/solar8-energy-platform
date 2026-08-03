export interface BatteryResult {
    requiredCapacity: number;
    usableCapacity: number;
    batteryCount: number;
}

export function calculateBattery(
    criticalLoad: number,
    backupHours: number,
    batterySize = 5,
    dod = 0.9,
    efficiency = 0.95
): BatteryResult {

    const usableCapacity =
        criticalLoad *
        backupHours;

    const requiredCapacity =
        usableCapacity /
        (dod * efficiency);

    const batteryCount =
        Math.ceil(requiredCapacity / batterySize);

    return {
        requiredCapacity,
        usableCapacity,
        batteryCount
    };
}
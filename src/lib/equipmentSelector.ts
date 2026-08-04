// ============================================================================
// Solar8 Equipment Selector
// ============================================================================

import {
  inverters,
  batteries,
  panels,
} from "../data/equipment";

import type { SolarSolutionName } from "./recommendation/recommendationTypes";

export function selectEquipment(
  solution: SolarSolutionName
) {
  switch (solution) {

    case "Solar8 Backup":
      return {
        inverter: inverters.find(i => i.id === "deye-5")!,
        battery: batteries.find(b => b.id === "hinen-5")!,
        panels: Array(6).fill(
          panels.find(p => p.id === "ja550")!
        ),
      };

    case "Solar8 Smart":
      return {
        inverter: inverters.find(i => i.id === "sunsynk-5")!,
        battery: batteries.find(b => b.id === "hinen-5")!,
        panels: Array(10).fill(
          panels.find(p => p.id === "ja550")!
        ),
      };

    case "Solar8 Independence":
      return {
        inverter: inverters.find(i => i.id === "sunsynk-8")!,
        battery: batteries.find(b => b.id === "hinen-10")!,
        panels: Array(16).fill(
          panels.find(p => p.id === "longi555")!
        ),
      };

    default:
      return {
        inverter: inverters.find(i => i.id === "victron-easysolar")!,
        battery: batteries.find(b => b.id === "dyness-bx")!,
        panels: Array(12).fill(
          panels.find(p => p.id === "canadian555")!
        ),
      };
  }
}
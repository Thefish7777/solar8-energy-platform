import { useMemo, useState } from "react";
import {
    ChefHat,
    DoorOpen,
    Droplets,
    Fan,
    Heater,
    Laptop,
    Microwave,
    Monitor,
    Refrigerator,
    ShieldCheck,
    Shirt,
    Tv,
    UtensilsCrossed,
    WashingMachine,
    Waves,
    Wind,
    Wifi,
    Zap,
} from "lucide-react";
import appliances from "../../lib/recommendation/appliances";
import type { ApplianceSelection } from "../../lib/recommendation/recommendationTypes";

interface Props {
    value?: ApplianceSelection[];
    onChange?: (selection: ApplianceSelection[]) => void;
}

type IconComponent = typeof ChefHat;

const applianceIcons: Record<string, IconComponent> = {
    fridge: Refrigerator,
    chestFreezer: Refrigerator,
    uprightFreezer: Refrigerator,
    kettle: ChefHat,
    microwave: Microwave,
    airFryer: ChefHat,
    dishwasher: UtensilsCrossed,
    television: Tv,
    desktop: Monitor,
    laptop: Laptop,
    wifi: Wifi,
    boreholePump: Droplets,
    poolPump: Waves,
    aircon9000: Wind,
    aircon18000: Wind,
    washingMachine: WashingMachine,
    iron: Shirt,
    vacuum: Fan,
    securitySystem: ShieldCheck,
    electricFence: ShieldCheck,
    gateMotor: DoorOpen,
    garageDoor: DoorOpen,
    geyser: Heater,
    heatPump: Fan,
};

const categoryIcons: Record<string, IconComponent> = {
    Kitchen: ChefHat,
    Entertainment: Tv,
    Office: Monitor,
    Climate: Wind,
    Water: Droplets,
    Security: ShieldCheck,
    Laundry: WashingMachine,
    Heating: Heater,
    Other: Zap,
};

const categoryOrder = [
    "Kitchen",
    "Entertainment",
    "Office",
    "Water",
    "Climate",
    "Laundry",
    "Security",
    "Heating",
    "Other",
];

export default function ApplianceSelector({ value = [], onChange }: Props) {
    const initialSelected: Record<string, number> = Object.fromEntries(
        value.map((selection) => [selection.applianceId, selection.quantity])
    );

    const [selected, setSelected] = useState<Record<string, number>>(initialSelected);

    function updateQuantity(id: string, quantity: number) {
        const appliance = appliances.find((item) => item.id === id);
        if (!appliance) return;

        const nextQuantity = Math.max(0, Math.min(quantity, appliance.maxQuantity));
        const updated = { ...selected, [id]: nextQuantity };
        setSelected(updated);

        const applianceSelection: ApplianceSelection[] = Object.entries(updated)
            .filter(([, qty]) => qty > 0)
            .map(([applianceId, qty]) => ({ applianceId, quantity: qty }));

        onChange?.(applianceSelection);
    }

    const totals = useMemo(() => {
        return appliances.reduce(
            (result, appliance) => {
                const qty = selected[appliance.id] ?? 0;
                result.running += qty * appliance.runningWatts;
                result.peak += qty * appliance.surgeWatts;
                if (appliance.critical) result.critical += qty * appliance.runningWatts;
                result.count += qty;
                return result;
            },
            { running: 0, critical: 0, peak: 0, count: 0 }
        );
    }, [selected]);

    const categories = useMemo(() => {
        return categoryOrder
            .map((category) => ({
                category,
                items: appliances
                    .filter((appliance) => appliance.category === category)
                    .sort((a, b) => a.displayOrder - b.displayOrder),
            }))
            .filter(({ items }) => items.length > 0);
    }, []);

    return (
        <div className="appliance-selector">
            <div className="appliance-intro">
                <div>
                    <span className="appliance-kicker">YOUR LOAD PROFILE</span>
                    <h3>Which appliances do you want to power?</h3>
                    <p className="assessment-question">
                        Choose the appliances your Solar8 system should support. Add the quantity for each one.
                    </p>
                </div>
                <div className="appliance-selection-count" aria-live="polite">
                    <strong>{totals.count}</strong>
                    <span>appliances</span>
                </div>
            </div>

            <div className="appliance-tip">
                <span className="appliance-tip-icon"><Zap size={18} strokeWidth={2.2} /></span>
                <span><strong>Tip:</strong> Start with the appliances you need during a power outage. You can add more later.</span>
            </div>

            <div className="appliance-categories">
                {categories.map(({ category, items }) => {
                    const CategoryIcon = categoryIcons[category] ?? Zap;
                    const selectedInCategory = items.reduce(
                        (sum, appliance) => sum + (selected[appliance.id] ?? 0),
                        0
                    );

                    return (
                        <section key={category} className="appliance-category">
                            <div className="appliance-category-heading">
                                <div className="appliance-category-title">
                                    <span className="appliance-category-icon">
                                        <CategoryIcon size={20} strokeWidth={2} />
                                    </span>
                                    <div>
                                        <h4>{category}</h4>
                                        <span>{items.length} options</span>
                                    </div>
                                </div>
                                {selectedInCategory > 0 && (
                                    <span className="category-selected-badge">
                                        {selectedInCategory} selected
                                    </span>
                                )}
                            </div>

                            <div className="appliance-grid">
                                {items.map((appliance) => {
                                    const qty = selected[appliance.id] ?? 0;
                                    const ApplianceIcon = applianceIcons[appliance.id] ?? Zap;

                                    return (
                                        <article
                                            key={appliance.id}
                                            className={`appliance-card ${qty > 0 ? "selected" : ""}`}
                                        >
                                            <div className="appliance-card-top">
                                                <span className="appliance-icon">
                                                    <ApplianceIcon size={24} strokeWidth={1.9} />
                                                </span>
                                                {qty > 0 && <span className="appliance-check">✓</span>}
                                            </div>

                                            <div className="appliance-card-body">
                                                <strong>{appliance.name}</strong>
                                                <div className="appliance-meta">
                                                    <span>{appliance.runningWatts.toLocaleString()} W</span>
                                                    <span className={appliance.critical ? "essential" : "optional"}>
                                                        {appliance.critical ? "Essential" : "Optional"}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="appliance-quantity" aria-label={`Quantity of ${appliance.name}`}>
                                                <button
                                                    type="button"
                                                    className="quantity-button"
                                                    aria-label={`Remove one ${appliance.name}`}
                                                    onClick={() => updateQuantity(appliance.id, qty - 1)}
                                                    disabled={qty === 0}
                                                >
                                                    −
                                                </button>
                                                <span className="quantity-value" aria-live="polite">{qty}</span>
                                                <button
                                                    type="button"
                                                    className="quantity-button add"
                                                    aria-label={`Add one ${appliance.name}`}
                                                    onClick={() => updateQuantity(appliance.id, qty + 1)}
                                                    disabled={qty >= appliance.maxQuantity}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        </section>
                    );
                })}
            </div>

            <div className="appliance-summary">
                <div className="appliance-summary-heading">
                    <div>
                        <span className="appliance-kicker">LIVE LOAD</span>
                        <h4>Your current selection</h4>
                    </div>
                    <span className="summary-status">Updates automatically</span>
                </div>

                <div className="summary-grid">
                    <div className="summary-metric">
                        <span>Running load</span>
                        <strong>{(totals.running / 1000).toFixed(2)} <small>kW</small></strong>
                    </div>
                    <div className="summary-metric critical-metric">
                        <span>Critical load</span>
                        <strong>{(totals.critical / 1000).toFixed(2)} <small>kW</small></strong>
                    </div>
                    <div className="summary-metric">
                        <span>Peak load</span>
                        <strong>{(totals.peak / 1000).toFixed(2)} <small>kW</small></strong>
                    </div>
                    <div className="summary-metric">
                        <span>Selected</span>
                        <strong>{totals.count} <small>items</small></strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

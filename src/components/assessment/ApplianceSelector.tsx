import { useState } from "react";
import appliances from "../../lib/recommendation/appliances";
import type { ApplianceSelection } from "../../lib/recommendation/recommendationTypes";

interface Props {
    onChange?: (selection: ApplianceSelection[]) => void;
}

export default function ApplianceSelector({ onChange }: Props) {

    const [selected, setSelected] = useState<Record<string, number>>({});

    function updateQuantity(id: string, quantity: number) {

        const appliance = appliances.find(a => a.id === id);

        if (!appliance) return;

        const value = Math.max(
            0,
            Math.min(quantity, appliance.maxQuantity)
        );

        const updated = {
            ...selected,
            [id]: value
        };

        setSelected(updated);

        // Convert Record<string, number> into ApplianceSelection[]
        const applianceSelection: ApplianceSelection[] = Object.entries(updated)
            .filter(([, qty]) => qty > 0)
            .map(([applianceId, quantity]) => ({
                applianceId,
                quantity
            }));

        onChange?.(applianceSelection);

    }

    const totalRunningWatts = appliances.reduce(

        (sum, appliance) => {

            const qty = selected[appliance.id] ?? 0;

            return sum + qty * appliance.runningWatts;

        },

        0

    );

    const totalCriticalWatts = appliances.reduce(

        (sum, appliance) => {

            const qty = selected[appliance.id] ?? 0;

            if (!appliance.critical) return sum;

            return sum + qty * appliance.runningWatts;

        },

        0

    );

    const categories = [
        ...new Set(appliances.map(a => a.category))
    ];

    return (

        <div className="appliance-selector">

            <h2>Select Your Appliances</h2>

            <p>

                Select how many of each appliance you would like powered.

            </p>

            {categories.map(category => {

                const categoryItems = appliances
                    .filter(appliance => appliance.category === category)
                    .sort((a, b) => a.displayOrder - b.displayOrder);

                if (categoryItems.length === 0)
                    return null;

                return (

                    <section
                        key={category}
                        className="appliance-category"
                    >

                        <h3>{category}</h3>

                        {categoryItems.map(appliance => {

                            const qty =
                                selected[appliance.id] ?? 0;

                            return (

                                <div
                                    key={appliance.id}
                                    className="appliance-row"
                                >

                                    <div>

                                        <strong>

                                            {appliance.name}

                                        </strong>

                                        <br />

                                        <small>

                                            {appliance.runningWatts} W

                                        </small>

                                    </div>

                                    <div className="quantity-controls">

                                        <button
                                            type="button"
                                            onClick={() =>
                                                updateQuantity(
                                                    appliance.id,
                                                    qty - 1
                                                )
                                            }
                                        >
                                            −
                                        </button>

                                        <span>

                                            {qty}

                                        </span>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                updateQuantity(
                                                    appliance.id,
                                                    qty + 1
                                                )
                                            }
                                        >
                                            +
                                        </button>

                                    </div>

                                </div>

                            );

                        })}

                    </section>

                );

            })}

            <hr />

            <div className="summary">

                <h3>Live Load Summary</h3>

                <p>

                    <span>Running Load</span>

                    <strong>

                        {(totalRunningWatts / 1000).toFixed(2)} kW

                    </strong>

                </p>

                <p>

                    <span>Critical Load</span>

                    <strong>

                        {(totalCriticalWatts / 1000).toFixed(2)} kW

                    </strong>

                </p>

                <p>

                    <span>Total Appliances</span>

                    <strong>

                        {Object.values(selected).reduce((a, b) => a + b, 0)}

                    </strong>

                </p>

            </div>

        </div>

    );

}
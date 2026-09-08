import { useState } from "react";
import appliances from "../../lib/recommendation/appliances";
import type { ApplianceSelection } from "../../lib/recommendation/recommendationTypes";

interface Props {
    value?: ApplianceSelection[];
    onChange?: (selection: ApplianceSelection[]) => void;
}

export default function ApplianceSelector({ value = [], onChange }: Props) {

    /*
     * Convert the parent's ApplianceSelection[] into the
     * internal quantity map used by the controls.
     *
     * This means selections are restored when the user
     * returns to Step 5.
     */
    const initialSelected: Record<string, number> = Object.fromEntries(
        value.map(selection => [
            selection.applianceId,
            selection.quantity
        ])
    );

    const [selected, setSelected] =
        useState<Record<string, number>>(initialSelected);

    function updateQuantity(id: string, quantity: number) {

        const appliance = appliances.find(
            appliance => appliance.id === id
        );

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

        const applianceSelection: ApplianceSelection[] =
            Object.entries(updated)
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

            return sum +
                qty * appliance.runningWatts;

        },
        0
    );

    const totalCriticalWatts = appliances.reduce(
        (sum, appliance) => {

            const qty = selected[appliance.id] ?? 0;

            if (!appliance.critical) {
                return sum;
            }

            return sum +
                qty * appliance.runningWatts;

        },
        0
    );

    const totalPeakWatts = appliances.reduce(
        (sum, appliance) => {

            const qty = selected[appliance.id] ?? 0;

            return sum +
                qty * appliance.surgeWatts;

        },
        0
    );

    const totalAppliances =
        Object.values(selected).reduce(
            (sum, quantity) => sum + quantity,
            0
        );

    const categories = [
        ...new Set(
            appliances.map(
                appliance => appliance.category
            )
        )
    ];

    return (

        <div className="appliance-selector">

            <h3>
                Which appliances do you want to power?
            </h3>

            <p className="assessment-question">
                Select how many of each appliance you would
                like your Solar8 system to support.
            </p>

            {categories.map(category => {

                const categoryItems = appliances
                    .filter(
                        appliance =>
                            appliance.category === category
                    )
                    .sort(
                        (a, b) =>
                            a.displayOrder -
                            b.displayOrder
                    );

                if (categoryItems.length === 0) {
                    return null;
                }

                return (

                    <section
                        key={category}
                        className="appliance-category"
                    >

                        <h4>
                            {category}
                        </h4>

                        <div className="appliance-list">

                            {categoryItems.map(appliance => {

                                const qty =
                                    selected[appliance.id] ?? 0;

                                return (

                                    <div
                                        key={appliance.id}
                                        className={`appliance-row ${
                                            qty > 0
                                                ? "selected"
                                                : ""
                                        }`}
                                    >

                                        <div className="appliance-info">

                                            <strong>
                                                {appliance.name}
                                            </strong>

                                            <span>
                                                {appliance.runningWatts} W
                                                {" · "}
                                                {appliance.critical
                                                    ? "Essential"
                                                    : "Optional"}
                                            </span>

                                        </div>

                                        <div className="quantity-controls">

                                            <button
                                                type="button"
                                                aria-label={`Remove one ${appliance.name}`}
                                                onClick={() =>
                                                    updateQuantity(
                                                        appliance.id,
                                                        qty - 1
                                                    )
                                                }
                                                disabled={qty === 0}
                                            >
                                                −
                                            </button>

                                            <span>
                                                {qty}
                                            </span>

                                            <button
                                                type="button"
                                                aria-label={`Add one ${appliance.name}`}
                                                onClick={() =>
                                                    updateQuantity(
                                                        appliance.id,
                                                        qty + 1
                                                    )
                                                }
                                                disabled={
                                                    qty >=
                                                    appliance.maxQuantity
                                                }
                                            >
                                                +
                                            </button>

                                        </div>

                                    </div>

                                );

                            })}

                        </div>

                    </section>

                );

            })}

            <div className="summary">

                <h4>
                    Live Load Summary
                </h4>

                <div className="summary-grid">

                    <div>
                        <span>
                            Running Load
                        </span>

                        <strong>
                            {(totalRunningWatts / 1000).toFixed(2)} kW
                        </strong>
                    </div>

                    <div>
                        <span>
                            Critical Load
                        </span>

                        <strong>
                            {(totalCriticalWatts / 1000).toFixed(2)} kW
                        </strong>
                    </div>

                    <div>
                        <span>
                            Peak Load
                        </span>

                        <strong>
                            {(totalPeakWatts / 1000).toFixed(2)} kW
                        </strong>
                    </div>

                    <div>
                        <span>
                            Appliances Selected
                        </span>

                        <strong>
                            {totalAppliances}
                        </strong>
                    </div>

                </div>

            </div>

        </div>

    );
}
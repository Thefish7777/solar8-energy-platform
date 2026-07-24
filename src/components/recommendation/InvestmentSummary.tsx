interface Props {

    equipmentValue: number;

    monthlySaving: number;

    annualSaving: number;

}

export default function InvestmentSummary({

    equipmentValue,

    monthlySaving,

    annualSaving,

}: Props) {

    const installation = Math.round(equipmentValue * 0.18);

    const electrical = Math.round(equipmentValue * 0.08);

    const engineering = Math.round(equipmentValue * 0.04);

    const subtotal =
        equipmentValue +
        installation +
        electrical +
        engineering;

    const vat = Math.round(subtotal * 0.15);

    const total = subtotal + vat;

    const payback =
        total / annualSaving;

    return (

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8">

            <h2 className="text-3xl font-bold">

                Investment Summary

            </h2>

            <div className="mt-8 space-y-4">

                <Row
                    label="Equipment"
                    value={equipmentValue}
                />

                <Row
                    label="Installation"
                    value={installation}
                />

                <Row
                    label="Electrical Materials"
                    value={electrical}
                />

                <Row
                    label="Engineering & Commissioning"
                    value={engineering}
                />

                <hr />

                <Row
                    label="Subtotal"
                    value={subtotal}
                />

                <Row
                    label="VAT (15%)"
                    value={vat}
                />

                <Row
                    label="Total Investment"
                    value={total}
                    bold
                />

            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">

                <Metric

                    title="Monthly Saving"

                    value={`R${monthlySaving.toLocaleString()}`}

                />

                <Metric

                    title="Annual Saving"

                    value={`R${annualSaving.toLocaleString()}`}

                />

                <Metric

                    title="Estimated Payback"

                    value={`${payback.toFixed(1)} Years`}

                />

            </div>

        </div>

    );

}

function Row({

    label,

    value,

    bold,

}: {

    label: string;

    value: number;

    bold?: boolean;

}) {

    return (

        <div className="flex justify-between">

            <span className={bold ? "font-bold" : ""}>

                {label}

            </span>

            <span className={bold ? "font-bold" : ""}>

                R{value.toLocaleString()}

            </span>

        </div>

    );

}

function Metric({

    title,

    value,

}: {

    title: string;

    value: string;

}) {

    return (

        <div className="rounded-2xl bg-orange-50 p-6 text-center">

            <div className="text-sm uppercase text-slate-500">

                {title}

            </div>

            <div className="mt-3 text-3xl font-bold text-orange-600">

                {value}

            </div>

        </div>

    );

}
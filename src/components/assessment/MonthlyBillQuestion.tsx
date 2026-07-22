interface Props {
  value: number;
  onChange: (value: number) => void;
}

export default function MonthlyBillQuestion({
  value,
  onChange,
}: Props) {
  return (
    <div className="max-w-3xl mx-auto">

      <h2 className="text-4xl font-extrabold text-center text-slate-900">
        What is your average monthly electricity bill?
      </h2>

      <p className="mt-4 text-center text-lg text-slate-600">
        This helps us size the correct solar system.
      </p>

      <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-sm">

        <div className="text-center">

          <p className="text-slate-500">
            Monthly Electricity Bill
          </p>

          <h3 className="mt-3 text-6xl font-extrabold text-orange-500">
            R {value.toLocaleString()}
          </h3>

        </div>

        <div className="mt-12">

          <input
            type="range"
            min={500}
            max={10000}
            step={100}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full accent-orange-500"
          />

          <div className="mt-4 flex justify-between text-sm text-slate-500">

            <span>R500</span>

            <span>R10 000+</span>

          </div>

        </div>

      </div>

    </div>
  );
}
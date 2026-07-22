interface Props {
  value: number;
  onChange: (value: number) => void;
}

export default function OccupantsQuestion({
  value,
  onChange,
}: Props) {
  return (
    <div className="max-w-3xl mx-auto">

      <h2 className="text-4xl font-extrabold text-center text-slate-900">
        How many people live on the property?
      </h2>

      <p className="mt-4 text-center text-lg text-slate-600">
        More occupants usually means higher electricity usage.
      </p>

      <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-5">

        {[1, 2, 3, 4, 5].map((count) => (

          <button
            key={count}
            onClick={() => onChange(count)}
            className={`rounded-3xl border p-8 transition-all duration-300

            ${
              value === count
                ? "border-orange-500 bg-orange-50 shadow-xl scale-105"
                : "border-slate-200 hover:border-orange-300 hover:shadow-lg"
            }`}
          >

            <div className="text-5xl">
              👨‍👩‍👧
            </div>

            <div className="mt-4 text-2xl font-bold">
              {count}
            </div>

            <div className="mt-2 text-slate-500">
              {count === 1 ? "Person" : "People"}
            </div>

          </button>

        ))}

      </div>

    </div>
  );
}
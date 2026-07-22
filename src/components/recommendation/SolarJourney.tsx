export default function SolarJourney() {

  const steps = [
    "Free Site Visit",
    "Final System Design",
    "Quotation Approval",
    "Professional Installation",
    "Commissioning",
    "Enjoy Solar Savings",
  ];

  return (

    <section className="mt-14 rounded-3xl bg-slate-50 p-10">

      <h2 className="text-center text-3xl font-extrabold text-slate-900">

        Your Solar Journey

      </h2>

      <p className="mt-3 text-center text-slate-600">

        Here's what happens after your Energy Plan.

      </p>

      <div className="mt-10 space-y-6">

        {steps.map((step, index) => (

          <div
            key={step}
            className="flex items-center gap-6 rounded-2xl bg-white p-6 shadow"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white">

              {index + 1}

            </div>

            <div className="text-lg font-medium text-slate-700">

              {step}

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}
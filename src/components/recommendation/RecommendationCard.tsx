import PropertySummaryCard from "./PropertySummaryCard";
import SystemCard from "./SystemCard";
import type { RecommendationResult } from "../../lib/recommendationTypes";

interface Props {
  recommendation: RecommendationResult;
}

export default function RecommendationCard({
  recommendation,
}: Props) {

  const system = recommendation.system;

  return (

    <div className="mx-auto max-w-4xl rounded-3xl bg-white shadow-2xl overflow-hidden">

{/* Hero */}

<div className="bg-gradient-to-br from-orange-500 via-orange-500 to-orange-600 px-10 py-16 text-center text-white">

  <div className="text-6xl">
    ☀️
  </div>

  <h1 className="mt-6 text-5xl font-extrabold">
    Solar8 Energy Plan
  </h1>

  <p className="mt-4 text-xl text-orange-100">
    Prepared especially for you
  </p>

  <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white/10 p-8 backdrop-blur-sm">

    <p className="text-lg leading-8 text-orange-50">

      Based on the information you've provided,
      we've designed an energy solution that
      balances affordability, backup power and
      future expansion.

    </p>

  </div>

</div>

<PropertySummaryCard
  propertyType="Home"
  occupants={4}
  monthlyBill={2500}
  goal="Save on Electricity"
  backupHours="8 Hours"
  applianceCount={7}
/>

      {/* Solution */}

      <div className="p-10">

        <div className="text-center">

          <h3 className="text-5xl font-extrabold text-slate-900">

            {system.name}

          </h3>

          <p className="mt-4 text-2xl text-orange-600 font-semibold">

            {system.tagline}

          </p>

          <p className="mt-8 text-lg leading-8 text-slate-600">

            {system.longDescription}

          </p>

        </div>

<SystemCard
    inverter={recommendation.configuration.inverter}
    battery={recommendation.configuration.battery}
    panels={recommendation.configuration.panels}
/>



        {/* Savings */}

        <div className="mt-12 rounded-3xl bg-orange-50 p-8">

          <h3 className="text-3xl font-bold text-center">

            Estimated Savings

          </h3>

          <div className="mt-8 grid md:grid-cols-3 gap-8 text-center">

            <div>

              <div className="text-4xl font-extrabold text-orange-600">

                R{recommendation.savings.monthly.toLocaleString()}

              </div>

              <div className="mt-2 text-slate-600">

                Monthly

              </div>

            </div>

            <div>

              <div className="text-4xl font-extrabold text-orange-600">

                R{recommendation.savings.annual.toLocaleString()}

              </div>

              <div className="mt-2 text-slate-600">

                Annual

              </div>

            </div>

            <div>

              <div className="text-4xl font-extrabold text-orange-600">

                {recommendation.savings.percentage}%

              </div>

              <div className="mt-2 text-slate-600">

                Bill Reduction

              </div>

            </div>

          </div>

        </div>

        {/* Reasons */}

        <div className="mt-12">

          <h3 className="text-3xl font-bold">

            Why we chose this solution

          </h3>

          <ul className="mt-6 space-y-4">

            {recommendation.reasons.map((reason) => (

              <li
                key={reason}
                className="flex items-start gap-4 rounded-xl bg-slate-50 p-5"
              >

                <span className="text-green-600 text-2xl">

                  ✓

                </span>

                <span className="text-lg text-slate-700">

                  {reason}

                </span>

              </li>

            ))}

          </ul>

        </div>

import SolarJourney from "./SolarJourney";

        {/* CTA */}

        <div className="mt-14 text-center">

          <a

            href="/contact"

            className="inline-flex rounded-2xl bg-orange-500 px-10 py-5 text-xl font-bold text-white transition hover:bg-orange-600"

          >

            Book My FREE Solar Assessment

          </a>

        </div>

      </div>

    </div>

  );

}
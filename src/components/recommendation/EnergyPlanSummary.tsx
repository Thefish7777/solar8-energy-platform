import type { RecommendationResult } from "../../lib/recommendation/recommendationTypes";

interface Props {
    recommendation: RecommendationResult;
}

export default function EnergyPlanSummary({
    recommendation,
}: Props) {

    return (

        <section className="bg-slate-50 border-y border-slate-200 px-10 py-10">

            <div className="text-center">

                <h2 className="text-3xl font-bold text-slate-900">

                    Your Energy Plan at a Glance

                </h2>

                <p className="mt-3 text-slate-600">

                    A quick overview of your recommended Solar8 system.

                </p>

            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">

                <div className="rounded-2xl bg-white p-6 shadow">

                    <div className="text-orange-500 text-2xl">⚡</div>

                    <h3 className="mt-3 font-bold">

                        Hybrid Inverter

                    </h3>

                    <p className="mt-2 text-slate-600">

                        {recommendation.configuration.inverter}

                    </p>

                </div>

                <div className="rounded-2xl bg-white p-6 shadow">

                    <div className="text-orange-500 text-2xl">🔋</div>

                    <h3 className="mt-3 font-bold">

                        Battery Storage

                    </h3>

                    <p className="mt-2 text-slate-600">

                        {recommendation.configuration.battery}

                    </p>

                </div>

                <div className="rounded-2xl bg-white p-6 shadow">

                    <div className="text-orange-500 text-2xl">☀️</div>

                    <h3 className="mt-3 font-bold">

                        Solar Panels

                    </h3>

                    <p className="mt-2 text-slate-600">

                        {recommendation.configuration.panels}

                    </p>

                </div>

                <div className="rounded-2xl bg-white p-6 shadow">

                    <div className="text-orange-500 text-2xl">💰</div>

                    <h3 className="mt-3 font-bold">

                        Estimated Savings

                    </h3>

                    <p className="mt-2 text-slate-600">

                        R {recommendation.savings.monthly.toLocaleString()} per month

                    </p>

                </div>

            </div>

        </section>

    );

}
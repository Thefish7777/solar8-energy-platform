import type { RecommendationResult } from "../../lib/recommendation/recommendationTypes";

interface Props {
    recommendation: RecommendationResult;
}

export default function ExecutiveSummary({
    recommendation,
}: Props) {

    return (

        <section className="border-b border-slate-200 bg-white px-10 py-10">

            <div className="mb-8">

                <h2 className="text-3xl font-bold text-slate-900">
                    Executive Summary
                </h2>

                <div className="mt-2 h-1 w-20 rounded bg-orange-500"></div>

            </div>

            <p className="text-lg leading-8 text-slate-700">

                Based on the information supplied during your Solar8
                assessment, we recommend the

                <span className="font-bold text-orange-600">
                    {" "}{recommendation.system.name}
                </span>

                .

            </p>

            <p className="mt-6 leading-8 text-slate-700">

                This solution has been selected to provide an excellent
                balance between energy independence, load shedding
                protection and long-term electricity savings while
                allowing future expansion of your solar installation.

            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">

                <div className="rounded-2xl bg-orange-50 p-6">

                    <div className="text-sm uppercase tracking-wide text-orange-600">
                        Monthly Savings
                    </div>

                    <div className="mt-2 text-3xl font-bold text-slate-900">
                        R {recommendation.savings.monthly.toLocaleString()}
                    </div>

                </div>

                <div className="rounded-2xl bg-orange-50 p-6">

                    <div className="text-sm uppercase tracking-wide text-orange-600">
                        Annual Savings
                    </div>

                    <div className="mt-2 text-3xl font-bold text-slate-900">
                        R {recommendation.savings.annual.toLocaleString()}
                    </div>

                </div>

                <div className="rounded-2xl bg-orange-50 p-6">

                    <div className="text-sm uppercase tracking-wide text-orange-600">
                        Recommendation Confidence
                    </div>

                    <div className="mt-2 text-3xl font-bold text-slate-900">
                        {recommendation.confidence}%
                    </div>

                </div>

            </div>

            <div className="mt-10">

                <h3 className="text-xl font-bold text-slate-900">

                    Why this system was selected

                </h3>

                <ul className="mt-5 space-y-4">

                    {recommendation.reasons.map((reason) => (

                        <li
                            key={reason}
                            className="flex items-start gap-3"
                        >

                            <span className="mt-1 text-xl text-orange-500">

                                ✔

                            </span>

                            <span className="text-slate-700">

                                {reason}

                            </span>

                        </li>

                    ))}

                </ul>

            </div>

        </section>

    );

}
import type { RecommendationResult } from "../../lib/recommendation/recommendationTypes";

interface Props {

    recommendation: RecommendationResult;

}

export default function ProposalReasons({

    recommendation

}: Props) {

    return (

        <section className="proposal-section">

            <h2>

                Why We Recommend This System

            </h2>

            <ul>

                {recommendation.reasons.map((reason) => (

                    <li key={reason}>

                        {reason}

                    </li>

                ))}

            </ul>

        </section>

    );

}
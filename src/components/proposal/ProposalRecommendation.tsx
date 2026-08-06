import type { RecommendationResult } from "../../lib/recommendation/recommendationTypes";

interface Props{

    recommendation: RecommendationResult;

}

export default function ProposalRecommendation({

    recommendation

}:Props){

    return(

        <section className="recommendation-banner">

            <h2>

                Recommended Solution

            </h2>

            <p>

                Based on your assessment, Solar8 recommends the

                <strong>

                    {" "}{recommendation.solution}{" "}

                </strong>

                package, designed to reduce your electricity costs while providing reliable backup power.

            </p>

        </section>

    );

}
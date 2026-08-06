import type { RecommendationResult } from "../../lib/recommendation/recommendationTypes";

interface Props {
    recommendation: RecommendationResult;
}

export default function ProposalSavings({

    recommendation

}: Props) {

    return (

        <section className="proposal-section">

            <h2>

                Estimated Financial Benefit

            </h2>

            <div className="savings-grid">

                <div className="saving-card">

                    <span>💰</span>

                    <label>Monthly Saving</label>

                    <strong>

                        R{recommendation.savings.monthly.toLocaleString()}

                    </strong>

                </div>

                <div className="saving-card">

                    <span>📈</span>

                    <label>Annual Saving</label>

                    <strong>

                        R{recommendation.savings.annual.toLocaleString()}

                    </strong>

                </div>

                <div className="saving-card">

                    <span>💵</span>

                    <label>Equipment Value</label>

                    <strong>

                        R{recommendation.equipmentValue.toLocaleString()}

                    </strong>

                </div>

                <div className="saving-card">

                    <span>⭐</span>

                    <label>Recommendation Match</label>

                    <strong>

                        {recommendation.confidence}%

                    </strong>

                </div>

            </div>

        </section>

    );

}
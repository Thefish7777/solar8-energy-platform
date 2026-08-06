import type { RecommendationResult } from "../../lib/recommendation/recommendationTypes";

interface Props {
    recommendation: RecommendationResult;
}

export default function ProposalCustomer({

    recommendation

}: Props) {

    const customer = recommendation.customer;

    return (

        <section className="proposal-section">

            <h2>

                Customer Summary

            </h2>

            <div className="proposal-grid">

                <div>

                    <label>

                        Property

                    </label>

                    <strong>

                        {customer.propertyType}

                    </strong>

                </div>

                <div>

                    <label>

                        Occupants

                    </label>

                    <strong>

                        {customer.occupants}

                    </strong>

                </div>

                <div>

                    <label>

                        Monthly Bill

                    </label>

                    <strong>

                        R{customer.monthlyBill.toLocaleString()}

                    </strong>

                </div>

                <div>

                    <label>

                        Goal

                    </label>

                    <strong>

                        {customer.goal}

                    </strong>

                </div>

                <div>

                    <label>

                        Backup Time

                    </label>

                    <strong>

                        {customer.backupHours} Hours

                    </strong>

                </div>

                <div>

                    <label>

                        Confidence

                    </label>

                    <strong>

                        {recommendation.confidence}%

                    </strong>

                </div>

            </div>

        </section>

    );

}
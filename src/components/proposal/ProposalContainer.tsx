import "./Proposal.css";

import ProposalHeader from "./ProposalHeader";
import ProposalCustomer from "./ProposalCustomer";
import ProposalEquipment from "./ProposalEquipment";
import ProposalSavings from "./ProposalSavings";
import ProposalReasons from "./ProposalReasons";
import ProposalFooter from "./ProposalFooter";
import ProposalRecommendation from "./ProposalRecommendation";
import ProposalOverview from "./ProposalOverview";

import type { RecommendationResult } from "../../lib/recommendation/recommendationTypes";

interface Props {

    recommendation: RecommendationResult;

}

export default function ProposalContainer({

    recommendation

}: Props) {

    return (

        <div className="proposal">

            <ProposalHeader/>

<ProposalRecommendation
    recommendation={recommendation}
/>

<ProposalOverview
    recommendation={recommendation}
/>

<ProposalCustomer
    recommendation={recommendation}
/>

            <ProposalEquipment
                recommendation={recommendation}
            />

            <ProposalSavings
                recommendation={recommendation}
            />

            <ProposalReasons
                recommendation={recommendation}
            />

            <ProposalFooter />

        </div>

    );

}
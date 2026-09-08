import "./Proposal.css";

import solar8Logo from "../../assets/logos/solar8-logo-light.svg?url";

interface Props {
    customerName?: string;
    consultantName?: string;
    reportReference?: string;
}

export default function ProposalHeader({
    customerName = "Residential Customer",
    consultantName = "Solar8 Energy",
    reportReference
}: Props) {

    const today = new Date();

    const formattedDate = today.toLocaleDateString("en-ZA", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    const reference =
        reportReference ??
        `S8-${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, "0")}${String(today.getDate()).padStart(2, "0")}`;

    return (

        <header className="proposal-cover">

            <div className="proposal-cover-brand">

                <img
                    src={solar8Logo}
                    alt="Solar8 Energy"
                    className="proposal-logo-image"
                />

                <div className="proposal-cover-divider" />

                <p className="proposal-document-label">
                    RESIDENTIAL ENERGY REPORT
                </p>

                <h1>
                    Your Solar Energy Assessment
                </h1>

                <p className="proposal-cover-description">
                    A personalised assessment of your home's energy
                    requirements, backup needs and recommended solar solution.
                </p>

            </div>

            <div className="proposal-cover-details">

                <div className="proposal-cover-details-heading">
                    SOLAR8 ENERGY
                </div>

                <div className="proposal-cover-detail">

                    <span>
                        Prepared For
                    </span>

                    <strong>
                        {customerName}
                    </strong>

                </div>

                <div className="proposal-cover-detail">

                    <span>
                        Report Reference
                    </span>

                    <strong>
                        {reference}
                    </strong>

                </div>

                <div className="proposal-cover-detail">

                    <span>
                        Prepared By
                    </span>

                    <strong>
                        {consultantName}
                    </strong>

                </div>

                <div className="proposal-cover-detail">

                    <span>
                        Date
                    </span>

                    <strong>
                        {formattedDate}
                    </strong>

                </div>

                <div className="proposal-cover-confidential">

                    CONFIDENTIAL

                    <small>
                        Prepared exclusively for the recipient
                    </small>

                </div>

            </div>

        </header>

    );

}
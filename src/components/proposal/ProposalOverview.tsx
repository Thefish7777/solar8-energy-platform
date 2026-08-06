import type { RecommendationResult } from "../../lib/recommendation/recommendationTypes";

interface Props{

    recommendation: RecommendationResult;

}

export default function ProposalOverview({

    recommendation

}:Props){

    const config = recommendation.configuration;

    const batteryTotal =
        config.battery.capacity *
        config.batteryQuantity;

    const pvTotal =
        (config.panel.watts *
        config.panelQuantity)/1000;

    return(

        <section className="proposal-section">

            <h2>

                System Overview

            </h2>

            <div className="overview-grid">

                <OverviewCard
                    icon="⚡"
                    title="Inverter"
                    value={`${config.inverter.size} kW`}
                />

                <OverviewCard
                    icon="🔋"
                    title="Battery"
                    value={`${batteryTotal.toFixed(2)} kWh`}
                />

                <OverviewCard
                    icon="☀"
                    title="Solar Array"
                    value={`${pvTotal.toFixed(2)} kWp`}
                />

                <OverviewCard
                    icon="⏱"
                    title="Backup"
                    value={`${recommendation.customer.backupHours} Hours`}
                />

                <OverviewCard
                    icon="👨"
                    title="Occupants"
                    value={`${recommendation.customer.occupants}`}
                />

                <OverviewCard
                    icon="💰"
                    title="Saving"
                    value={`R${recommendation.savings.monthly.toLocaleString()}/month`}
                />

            </div>

        </section>

    );

}

function OverviewCard({

    icon,

    title,

    value

}:{

    icon:string;

    title:string;

    value:string;

}){

    return(

        <div className="overview-card">

            <div className="overview-icon">

                {icon}

            </div>

            <label>

                {title}

            </label>

            <strong>

                {value}

            </strong>

        </div>

    );

}
import type { RecommendationResult } from "../../lib/recommendation/recommendationTypes";

interface Props {

    recommendation: RecommendationResult;

}

export default function ProposalEquipment({

    recommendation

}: Props) {

    const config = recommendation.configuration;

    return (

        <section className="proposal-section">

            <h2>

                Recommended Equipment

            </h2>

            <div className="equipment-grid">

                <EquipmentCard

    title="Hybrid Inverter"

    image={config.inverter.image}

    brand={config.inverter.brand}

    model={config.inverter.name}

    details={[

        `${config.inverter.size} kW`,

        config.inverter.hybrid ? "Hybrid" : "Grid-Tied",

        `${config.inverter.phases} Phase`

    ]}

/>

<EquipmentCard

    title="Battery Storage"

    brand={config.battery.brand}

    model={`${config.batteryQuantity} × ${config.battery.model}`}

    details={[

        `${config.battery.capacity} kWh each`,

        "LiFePO₄",

        `${config.battery.warranty} Year Warranty`

    ]}

/>

<EquipmentCard

    title="Solar Panels"

    brand={config.panel.brand}

    model={`${config.panelQuantity} × ${config.panel.model}`}

    details={[

        `${config.panel.watts} W each`,

        `${(config.panelQuantity * config.panel.watts / 1000).toFixed(2)} kWp Total`,

        `${config.panel.warranty} Year Warranty`

    ]}
/>

            </div>

        </section>

    );

}

function EquipmentCard({

    title,

    image,

    brand,

    model,

    details

}:{

    title:string;

    image?:string;

    brand:string;

    model:string;

    details?:string[];

}){

    return(

        <div className="equipment-card">

            {image && (

                <img

                    src={image}

                    alt={model}

                />

            )}

            <h3>

                {title}

            </h3>

            <strong>

                {brand}

            </strong>

            <p>

                {model}

            </p>

            {details && (

                <ul className="equipment-details">

                    {details.map(detail => (

                        <li key={detail}>

                            {detail}

                        </li>

                    ))}

                </ul>

            )}

        </div>

    );

}
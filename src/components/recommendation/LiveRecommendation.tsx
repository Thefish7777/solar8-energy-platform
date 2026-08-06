import "./LiveRecommendation.css";

interface Props {
    solution: string;

    inverter: string;
    battery: string;
    panels: string;

    runningLoad: number;
    criticalLoad: number;
    peakLoad: number;

    backupHours: number;

    monthlySaving: number;
    annualSaving: number;

    equipmentValue: number;

    confidence: number;

    reasons: string[];
}

export default function LiveRecommendation({

    solution,

    inverter,
    battery,
    panels,

    runningLoad,
    criticalLoad,
    peakLoad,

    backupHours,

    monthlySaving,
    annualSaving,

    equipmentValue,

    confidence,

    reasons

}: Props) {

    return (

        <section className="recommendation-card">

            <header className="recommendation-header">

                <h2>Your Solar8 Recommendation</h2>

                <div className="confidence">

                    ⭐ {confidence}% Match

                </div>

            </header>

            <div className="package">

                <h3>{solution}</h3>

            </div>

            <div className="recommendation-grid">

                <div>

                    <h4>Running Load</h4>

                    <strong>{runningLoad.toFixed(2)} kW</strong>

                </div>

                <div>

                    <h4>Critical Load</h4>

                    <strong>{criticalLoad.toFixed(2)} kW</strong>

                </div>

                <div>

                    <h4>Peak Load</h4>

                    <strong>{peakLoad.toFixed(2)} kW</strong>

                </div>

                <div>

                    <h4>Backup Time</h4>

                    <strong>{backupHours} Hours</strong>

                </div>

                <div>

                    <h4>Monthly Saving</h4>

                    <strong>

                        R{monthlySaving.toLocaleString()}

                    </strong>

                </div>

                <div>

                    <h4>Annual Saving</h4>

                    <strong>

                        R{annualSaving.toLocaleString()}

                    </strong>

                </div>

                <div>

                    <h4>Estimated Equipment</h4>

                    <strong>

                        R{equipmentValue.toLocaleString()}

                    </strong>

                </div>

            </div>

            <hr />

            <section className="equipment">

                <h3>Recommended Equipment</h3>

                <ul>

                    <li>✔ {inverter}</li>

                    <li>✔ {battery}</li>

                    <li>✔ {panels}</li>

                </ul>

            </section>

            <hr />

            <section className="recommendation-reasons">

                <h3>Why this system?</h3>

                <ul>

                    {reasons.map((reason, index) => (

                        <li key={index}>

                            {reason}

                        </li>

                    ))}

                </ul>

            </section>

            <button

                className="assessment-button"

                type="button"

            >

                Book FREE Solar Assessment

            </button>

        </section>

    );

}
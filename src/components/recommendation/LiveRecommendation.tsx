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
    showAction?: boolean;
}

export default function LiveRecommendation({ solution, inverter, battery, panels, runningLoad, criticalLoad, peakLoad, backupHours, monthlySaving, annualSaving, equipmentValue, confidence, reasons, showAction = true }: Props) {
    return (
        <section className="recommendation-card" aria-labelledby="recommendation-title">
            <header className="recommendation-header">
                <div>
                    <span className="recommendation-eyebrow">YOUR INITIAL MATCH</span>
                    <h2 id="recommendation-title">Your Solar8 Recommendation</h2>
                </div>
                <div className="confidence">{confidence}% Match</div>
            </header>

            <div className="package"><span>Recommended solution</span><h3>{solution}</h3></div>

            <div className="recommendation-grid">
                <div className="recommendation-item"><span>Running Load</span><strong>{runningLoad.toFixed(2)} kW</strong></div>
                <div className="recommendation-item"><span>Critical Load</span><strong>{criticalLoad.toFixed(2)} kW</strong></div>
                <div className="recommendation-item"><span>Peak Load</span><strong>{peakLoad.toFixed(2)} kW</strong></div>
                <div className="recommendation-item"><span>Backup Time</span><strong>{backupHours} hrs</strong></div>
                <div className="recommendation-item"><span>Monthly Saving</span><strong>R{monthlySaving.toLocaleString("en-ZA")}</strong></div>
                <div className="recommendation-item"><span>Annual Saving</span><strong>R{annualSaving.toLocaleString("en-ZA")}</strong></div>
                <div className="recommendation-item"><span>Estimated Equipment</span><strong>R{equipmentValue.toLocaleString("en-ZA")}</strong></div>
            </div>

            <div className="recommendation-section">
                <h3>Recommended Equipment</h3>
                <ul><li>{inverter}</li><li>{battery}</li><li>{panels}</li></ul>
            </div>

            <div className="recommendation-section">
                <h3>Why this system?</h3>
                <ul className="reasons-list">{reasons.map((reason, index) => <li key={index}>{reason}</li>)}</ul>
            </div>

            {showAction && <a className="assessment-button" href="/assessment/">Continue with FREE Assessment</a>}
        </section>
    );
}

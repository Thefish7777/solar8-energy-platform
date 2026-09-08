import { useState } from "react";
import "./AssessmentWizard.css";

import ApplianceSelector from "./ApplianceSelector";
import LiveRecommendation from "../recommendation/LiveRecommendation";
import { generateRecommendation } from "../../lib/recommendation/recommendationEngine";

import { calculateLoad } from "../../lib/recommendation/loadCalculator";

import type {
    AssessmentAnswers,
} from "../../lib/recommendation/recommendationTypes";

export default function AssessmentWizard() {

    const [step, setStep] = useState(1);

    const [answers, setAnswers] = useState<AssessmentAnswers>({

        propertyType: "home",

        monthlyBill: 3500,

        occupants: 4,

        goal: "backup",

        backupHours: 8,

        appliances: []

    });

    const recommendation = generateRecommendation(answers);

    const load = calculateLoad(answers);

    return (

        <section className="assessment">

            <div className="assessment-card">

                <h2>FREE Solar Assessment</h2>

                <p className="assessment-step">
    Step {step} of 7
</p>

<div className="progress-bar">
    <div
        className="progress-fill"
        style={{ width: `${(step / 7) * 100}%` }}
    />
</div>

                {/* =======================================================
                    STEP 1
                ======================================================== */}

                {step === 1 && (

    <>

        <h3>
            What type of property do you have?
        </h3>

        <div className="assessment-options">

            <div
                className={`assessment-option ${answers.propertyType==="home"?"active":""}`}
                onClick={() => setAnswers({...answers,propertyType:"home"})}
            >
                <div className="assessment-option-icon">🏠</div>
                <div className="assessment-option-title">Home</div>
                <div className="assessment-option-description">
                    Residential property
                </div>
            </div>

            <div
                className={`assessment-option ${answers.propertyType==="business"?"active":""}`}
                onClick={() => setAnswers({...answers,propertyType:"business"})}
            >
                <div className="assessment-option-icon">🏢</div>
                <div className="assessment-option-title">Business</div>
                <div className="assessment-option-description">
                    Commercial premises
                </div>
            </div>

            <div
                className={`assessment-option ${answers.propertyType==="farm"?"active":""}`}
                onClick={() => setAnswers({...answers,propertyType:"farm"})}
            >
                <div className="assessment-option-icon">🌾</div>
                <div className="assessment-option-title">Farm</div>
                <div className="assessment-option-description">
                    Agricultural property
                </div>
            </div>

        </div>

    </>

)}

                {/* =======================================================
                    STEP 2
                ======================================================== */}

                {/* =======================================================
    STEP 2
======================================================= */}

{step === 2 && (

    <>

        <h3>
            What is your average monthly electricity bill?
        </h3>

        <p className="assessment-question">
            This helps Solar8 estimate your home's energy consumption.
        </p>

        <div className="bill-control">

            <div className="bill-value">
                R{answers.monthlyBill.toLocaleString("en-ZA")}
            </div>

            <input
                className="slider"
                type="range"
                min="500"
                max="10000"
                step="100"
                value={answers.monthlyBill}
                onChange={(e) =>
                    setAnswers({
                        ...answers,
                        monthlyBill: Number(e.target.value)
                    })
                }
            />

            <div className="slider-labels">
                <span>R500</span>
                <span>R10,000+</span>
            </div>

        </div>

        <p className="assessment-help">
            Move the slider to your approximate monthly electricity spend.
        </p>

    </>

)}

                {/* =======================================================
    STEP 3
======================================================= */}

{step === 3 && (

    <>

        <h3>
            How many people live or work at the property?
        </h3>

        <p className="assessment-question">
            This helps us estimate your typical electricity demand.
        </p>

        <div className="occupants-control">

            <label htmlFor="occupants">
                Number of occupants
            </label>

            <input
                id="occupants"
                className="number-input"
                type="number"
                min="1"
                max="20"
                value={answers.occupants}
                onChange={(e) =>
                    setAnswers({
                        ...answers,
                        occupants: Math.max(
                            1,
                            Math.min(20, Number(e.target.value))
                        )
                    })
                }
            />

            <p className="assessment-help">
                Enter a number between 1 and 20.
            </p>

        </div>

    </>

)}

                {/* =======================================================
    STEP 4
======================================================= */}

{step === 4 && (

    <>

        <h3>
            What is your main solar goal?
        </h3>

        <p className="assessment-question">
            Choose the option that best describes what you want
            your Solar8 system to achieve.
        </p>

        <div className="assessment-options">

            <div
                className={`assessment-option ${
                    answers.goal === "backup" ? "active" : ""
                }`}
                onClick={() =>
                    setAnswers({
                        ...answers,
                        goal: "backup"
                    })
                }
            >
                <div className="assessment-option-icon">
                    🔋
                </div>

                <div className="assessment-option-title">
                    Backup Power
                </div>

                <div className="assessment-option-description">
                    Keep your essential appliances running
                    during power outages.
                </div>
            </div>

            <div
                className={`assessment-option ${
                    answers.goal === "save" ? "active" : ""
                }`}
                onClick={() =>
                    setAnswers({
                        ...answers,
                        goal: "save"
                    })
                }
            >
                <div className="assessment-option-icon">
                    💰
                </div>

                <div className="assessment-option-title">
                    Reduce My Bill
                </div>

                <div className="assessment-option-description">
                    Reduce your monthly electricity costs
                    through solar generation.
                </div>
            </div>

            <div
                className={`assessment-option ${
                    answers.goal === "independence" ? "active" : ""
                }`}
                onClick={() =>
                    setAnswers({
                        ...answers,
                        goal: "independence"
                    })
                }
            >
                <div className="assessment-option-icon">
                    ☀️
                </div>

                <div className="assessment-option-title">
                    Energy Independence
                </div>

                <div className="assessment-option-description">
                    Generate more of your own electricity
                    and rely less on the grid.
                </div>
            </div>

        </div>

    </>

)}

                {/* =======================================================
                    STEP 5
                ======================================================== */}

                {step === 5 && (

                    <ApplianceSelector
    value={answers.appliances}
    onChange={(applianceArray) =>
        setAnswers({
            ...answers,
            appliances: applianceArray
        })
    }
/>

                )}

                {/* =======================================================
                    STEP 6
                ======================================================== */}

                {step === 6 && (

                    <LiveRecommendation

    solution={recommendation.solution}

    inverter={recommendation.configuration.inverter.name}

    battery={`${recommendation.configuration.batteryQuantity} × ${recommendation.configuration.battery.model}`}

    panels={`${recommendation.configuration.panelQuantity} × ${recommendation.configuration.panel.model}`}

    runningLoad={load.runningLoad}
    criticalLoad={load.criticalLoad}
    peakLoad={load.peakLoad}

    backupHours={recommendation.customer.backupHours ?? 8}

    monthlySaving={recommendation.savings.monthly}
    annualSaving={recommendation.savings.annual}

    equipmentValue={recommendation.equipmentValue}

    confidence={recommendation.confidence}

    reasons={recommendation.reasons}
/>

                )}

                {/* =======================================================
                    STEP 7
                ======================================================== */}

                {step === 7 && (

                    <>

                        <h3>

                            Your FREE Solar Assessment is Ready

                        </h3>

                        <p>

                            The next step is to book a FREE Solar8 site assessment.

                        </p>

                        <button>

                            Book FREE Assessment

                        </button>

                    </>

                )}

                <div className="assessment-buttons">

                    {step > 1 && (

                        <button
    className="assessment-btn assessment-btn-secondary"
    onClick={() => setStep(step - 1)}


                        >

                            Previous

                        </button>

                    )}

                    {step < 7 && (

                        <button
    className="assessment-btn assessment-btn-primary"
    onClick={() => setStep(step + 1)}
>

                            Next

                        </button>

                    )}

                </div>

            </div>

        </section>

    );

}
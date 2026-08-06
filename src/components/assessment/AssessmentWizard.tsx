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

                <p>

                    Step {step} of 7

                </p>

                {/* =======================================================
                    STEP 1
                ======================================================== */}

                {step === 1 && (

                    <>

                        <h3>

                            What type of property do you have?

                        </h3>

                        <button
                            onClick={() =>
                                setAnswers({
                                    ...answers,
                                    propertyType: "home"
                                })
                            }
                        >
                            Home
                        </button>

                        <button
                            onClick={() =>
                                setAnswers({
                                    ...answers,
                                    propertyType: "business"
                                })
                            }
                        >
                            Business
                        </button>

                        <button
                            onClick={() =>
                                setAnswers({
                                    ...answers,
                                    propertyType: "farm"
                                })
                            }
                        >
                            Farm
                        </button>

                    </>

                )}

                {/* =======================================================
                    STEP 2
                ======================================================== */}

                {step === 2 && (

                    <>

                        <h3>

                            Monthly Electricity Bill

                        </h3>

                        <input

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

                        <p>

                            R{answers.monthlyBill.toLocaleString()}

                        </p>

                    </>

                )}

                {/* =======================================================
                    STEP 3
                ======================================================== */}

                {step === 3 && (

                    <>

                        <h3>

                            Number of Occupants

                        </h3>

                        <input

                            type="number"

                            min="1"

                            max="20"

                            value={answers.occupants}

                            onChange={(e) =>
                                setAnswers({
                                    ...answers,
                                    occupants: Number(e.target.value)
                                })
                            }

                        />

                    </>

                )}

                {/* =======================================================
                    STEP 4
                ======================================================== */}

                {step === 4 && (

                    <>

                        <h3>

                            What is your main goal?

                        </h3>

                        <button
                            onClick={() =>
                                setAnswers({
                                    ...answers,
                                    goal: "backup"
                                })
                            }
                        >
                            Backup Power
                        </button>

                        <button
                            onClick={() =>
                                setAnswers({
                                    ...answers,
                                    goal: "save"
                                })
                            }
                        >
                            Reduce My Bill
                        </button>

                        <button
                            onClick={() =>
                                setAnswers({
                                    ...answers,
                                    goal: "independence"
                                })
                            }
                        >
                            Energy Independence
                        </button>

                    </>

                )}

                {/* =======================================================
                    STEP 5
                ======================================================== */}

                {step === 5 && (

                    <ApplianceSelector
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

                <div style={{ marginTop: "2rem" }}>

                    {step > 1 && (

                        <button

                            onClick={() => setStep(step - 1)}

                        >

                            Previous

                        </button>

                    )}

                    {step < 7 && (

                        <button

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
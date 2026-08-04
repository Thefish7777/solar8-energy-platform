import { useState } from "react";
import "./AssessmentWizard.css";

export default function AssessmentWizard() {

    const [step, setStep] = useState(1);

    return (

        <section className="assessment">

            <div className="assessment-card">

                <h2>FREE Solar Assessment</h2>

                <p>

                    Step {step} of 7

                </p>

                {step === 1 && (

                    <>

                        <h3>What type of property do you have?</h3>

                        <button>Home</button>

                        <button>Business</button>

                        <button>Farm</button>

                    </>

                )}

                <div style={{marginTop:"2rem"}}>

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
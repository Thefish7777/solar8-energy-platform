import { useState } from "react";

import StepProperty from "./StepProperty";
import StepUsage from "./StepUsage";
import StepGoals from "./StepGoals";
import StepRoof from "./StepRoof";
import StepBattery from "./StepBattery";
import StepContact from "./StepContact";
import Success from "./Success";

export default function AssessmentForm() {

    const [step, setStep] = useState(1);

    const next = () => setStep(step + 1);

    const back = () => setStep(step - 1);

    const [formData, setFormData] = useState({
        property: "",
        usage: "",
        goal: "",
        roof: "",
        battery: "",
        name: "",
        email: "",
        phone: "",
        city: "",
        notes: ""
    });

    const update = (field, value) => {

        setFormData({
            ...formData,
            [field]: value
        });

    };

    return (

        <section className="assessment-form">

            <div className="container">

                <div className="assessment-card">

                    {step === 1 && (
                        <StepProperty
                            next={next}
                            update={update}
                            formData={formData}
                        />
                    )}

                    {step === 2 && (
                        <StepUsage
                            next={next}
                            back={back}
                            update={update}
                            formData={formData}
                        />
                    )}

                    {step === 3 && (
                        <StepGoals
                            next={next}
                            back={back}
                            update={update}
                            formData={formData}
                        />
                    )}

                    {step === 4 && (
                        <StepRoof
                            next={next}
                            back={back}
                            update={update}
                            formData={formData}
                        />
                    )}

                    {step === 5 && (
                        <StepBattery
                            next={next}
                            back={back}
                            update={update}
                            formData={formData}
                        />
                    )}

                    {step === 6 && (
                        <StepContact
                            next={next}
                            back={back}
                            update={update}
                            formData={formData}
                        />
                    )}

                    {step === 7 && (
                        <Success />
                    )}

                </div>

            </div>

        </section>

    );

}
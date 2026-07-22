import { useState } from "react";

import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import MonthlyBillQuestion from "./MonthlyBillQuestion";
import OccupantsQuestion from "./OccupantsQuestion";
import GoalQuestion from "./GoalQuestion";
import BackupQuestion from "./BackupQuestion";
import ApplianceSelector from "./ApplianceSelector";
import RecommendationCard from "../recommendation/RecommendationCard";

import { generateRecommendation } from "../../lib/recommendationEngine";

import type {
    RecommendationResult,
    CustomerGoal,
    PropertyType,
} from "../../lib/recommendationTypes";

import {
  propertyOptions,
} from "./questions";


export default function AssessmentWizard() {

  const totalSteps = 7;

  const [step, setStep] = useState(1);

  const [propertyType, setPropertyType] =
    useState<PropertyType>("home");

  const [monthlyBill, setMonthlyBill] =
    useState(2500);

  const [occupants, setOccupants] =
    useState(4);

  const [goal, setGoal] =
    useState<CustomerGoal>("save");

    const [backupHours, setBackupHours] = useState("");

const [appliances, setAppliances] = useState<string[]>([]);

const [recommendation, setRecommendation] =
    useState<RecommendationResult | null>(null);

  function nextStep() {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  }

  function previousStep() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  function finishAssessment() {

    const result = generateRecommendation({

        propertyType,

        monthlyBill,

        occupants,

        goal,

        appliances: {

            airConditioning: appliances.includes("Air Conditioning"),

            poolPump: appliances.includes("Pool Pump"),

            borehole: appliances.includes("Borehole Pump"),

            electricGeyser: appliances.includes("Electric Geyser"),

            homeOffice: appliances.includes("Home Office"),

            electricVehicle: appliances.includes("Electric Vehicle"),

        },

    });

setRecommendation(result);

}

if (recommendation) {

    return (

        <RecommendationCard
            recommendation={recommendation}
        />

    );

}
  return (

    <div className="rounded-3xl bg-white shadow-2xl">

      <div className="p-10">

        <ProgressBar
          currentStep={step}
          totalSteps={totalSteps}
        />

        <div className="mt-12">

          {step === 1 && (

            <QuestionCard

              title="Tell us about your property"

              subtitle="We'll recommend the perfect Solar8 system."

              options={propertyOptions.map(option => ({
                value: option.value,
                icon: option.icon,
                description: option.description,
              }))}

              selected={propertyType}

              onSelect={(value) =>
                setPropertyType(value as PropertyType)
              }

            />

          )}

          {step === 2 && (

            <MonthlyBillQuestion

              value={monthlyBill}

              onChange={setMonthlyBill}

            />

          )}

          {step === 3 && (

            <OccupantsQuestion

              value={occupants}

              onChange={setOccupants}

            />

          )}

          {step === 4 && (

            <GoalQuestion

              value={goal}

              onChange={setGoal}

            />

          )}

{step === 5 && (

  <BackupQuestion

    value={backupHours}

    onChange={setBackupHours}

  />

)}

{step === 6 && (

  <ApplianceSelector

    selected={appliances}

    onChange={setAppliances}

  />

)}

{step === 7 && (

  <div className="py-24 text-center">

    <div className="text-6xl mb-8">

      ☀️

    </div>

    <h2 className="text-4xl font-bold">

      Ready to Generate Your Solar8 Recommendation

    </h2>

    <p className="mt-6 text-slate-600">

      Click Finish to generate your personalised solar recommendation.

    </p>

  </div>

)}
        </div>

        <div className="mt-12 flex justify-between">

          <button

            onClick={previousStep}

            disabled={step === 1}

            className="rounded-xl bg-slate-200 px-6 py-3"

          >

            Previous

          </button>

          <button

            onClick={() => {

    if (step === totalSteps) {

        finishAssessment();

    } else {

        nextStep();

    }

}}

            className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"

          >

            {step === totalSteps
              ? "Finish"
              : "Next"}

          </button>

        </div>

      </div>

    </div>

  );

}
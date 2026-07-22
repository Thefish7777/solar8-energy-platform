interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({
  currentStep,
  totalSteps,
}: ProgressBarProps) {
  return (
    <div className="mb-10">

      <div className="mb-3 flex justify-between text-sm text-slate-500">

        <span>
          Step {currentStep} of {totalSteps}
        </span>

        <span>
          {Math.round((currentStep / totalSteps) * 100)}%
        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-200">

        <div
          className="h-full rounded-full bg-orange-500 transition-all duration-500"
          style={{
            width: `${(currentStep / totalSteps) * 100}%`,
          }}
        />

      </div>

    </div>
  );
}
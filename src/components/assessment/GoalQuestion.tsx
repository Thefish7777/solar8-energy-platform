import { goalOptions } from "./questions";

import type { CustomerGoal } from "../../lib/recommendationTypes";

interface Props {
  value: CustomerGoal;
  onChange: (value: CustomerGoal) => void;
}

export default function GoalQuestion({
  value,
  onChange,
}: Props) {
  return (
    <div className="max-w-5xl mx-auto">

      <h2 className="text-4xl font-extrabold text-center text-slate-900">
        What is your main goal?
      </h2>

      <p className="mt-4 text-center text-lg text-slate-600">
        We'll recommend a system based on what matters most to you.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">

        {goalOptions.map((goal) => (

          <button
            key={goal.value}
            onClick={() => onChange(goal.value)}
            className={`rounded-3xl border bg-white p-8 text-left transition-all duration-300

            ${
              value === goal.value
                ? "border-orange-500 bg-orange-50 shadow-xl scale-105"
                : "border-slate-200 hover:border-orange-300 hover:shadow-xl"
            }`}
          >

            <div className="text-5xl">

              {goal.icon}

            </div>

            <h3 className="mt-5 text-2xl font-bold">

              {goal.title}

            </h3>

            <p className="mt-3 leading-relaxed text-slate-500">

              {goal.description}

            </p>

          </button>

        ))}

      </div>

    </div>
  );
}
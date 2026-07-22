import { backupOptions } from "./questions";


interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function BackupQuestion({
  value,
  onChange,
}: Props) {
  return (
    <div className="max-w-5xl mx-auto">

      <h2 className="text-4xl font-extrabold text-center text-slate-900">
        How long should your backup power last?
      </h2>

      <p className="mt-4 text-center text-lg text-slate-600">
        Choose the option that best matches your needs.
      </p>

      <div className="mt-14 grid gap-6 md:grid-cols-2">

        {backupOptions.map((option) => (

          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`rounded-3xl border bg-white p-8 text-left transition-all duration-300

            ${
              value === option.value
                ? "border-orange-500 bg-orange-50 shadow-xl scale-105"
                : "border-slate-200 hover:border-orange-300 hover:shadow-xl"
            }`}
          >

            <div className="text-5xl">

              {option.icon}

            </div>

            <h3 className="mt-5 text-2xl font-bold">

              {option.title}

            </h3>

            <p className="mt-3 text-slate-500 leading-relaxed">

              {option.description}

            </p>

          </button>

        ))}

      </div>

    </div>
  );
}
interface Option {
  value: string;
  icon?: string;
  description?: string;
}

interface QuestionCardProps {
  title: string;
  subtitle?: string;
  options: Option[];
  selected?: string;
  onSelect: (value: string) => void;
}

export default function QuestionCard({
  title,
  subtitle,
  options,
  selected,
  onSelect,
}: QuestionCardProps) {
  return (
    <div>

      <div className="max-w-3xl mx-auto">

        <h2 className="text-4xl font-extrabold text-slate-900 text-center">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-4 text-center text-lg text-slate-600">
            {subtitle}
          </p>
        )}

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {options.map((option) => (

            <button
              key={option.value}
              onClick={() => onSelect(option.value)}
              className={`group rounded-3xl border bg-white p-8 text-center transition-all duration-300

              ${
                selected === option.value
                  ? "border-orange-500 ring-2 ring-orange-400 shadow-xl scale-105"
                  : "border-slate-200 hover:border-orange-300 hover:shadow-xl hover:-translate-y-1"
              }`}
            >

              <div className="text-6xl">
                {option.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {option.value}
              </h3>

              {option.description && (
                <p className="mt-3 text-slate-500 leading-relaxed">
                  {option.description}
                </p>
              )}

            </button>

          ))}

        </div>

      </div>

    </div>
  );
}
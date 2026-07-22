interface Props {
  propertyType: string;
  occupants: number;
  monthlyBill: number;
  goal: string;
  backupHours: string;
  applianceCount: number;
}

export default function PropertySummaryCard({
  propertyType,
  occupants,
  monthlyBill,
  goal,
  backupHours,
  applianceCount,
}: Props) {
  return (
    <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-10">

      <h2 className="text-3xl font-extrabold text-slate-900 text-center">
        Your Property Summary
      </h2>

      <p className="mt-3 text-center text-slate-600">
        Your recommendation is based on the information below.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        <SummaryItem
          icon="🏠"
          title="Property"
          value={propertyType}
        />

        <SummaryItem
          icon="👨‍👩‍👧‍👦"
          title="Occupants"
          value={`${occupants} People`}
        />

        <SummaryItem
          icon="💰"
          title="Monthly Bill"
          value={`R${monthlyBill.toLocaleString()}`}
        />

        <SummaryItem
          icon="🎯"
          title="Goal"
          value={goal}
        />

        <SummaryItem
          icon="⚡"
          title="Backup"
          value={backupHours}
        />

        <SummaryItem
          icon="🔌"
          title="Appliances"
          value={`${applianceCount} Selected`}
        />

      </div>

    </section>
  );
}

interface SummaryProps {
  icon: string;
  title: string;
  value: string;
}

function SummaryItem({
  icon,
  title,
  value,
}: SummaryProps) {
  return (
    <div className="rounded-2xl bg-white p-6 text-center shadow">

      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="mt-4 font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-lg text-orange-600 font-semibold">
        {value}
      </p>

    </div>
  );
}
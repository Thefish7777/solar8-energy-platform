interface Props {
  inverter: string;
  battery: string;
  panels: string;
}

export default function SystemCard({
  inverter,
  battery,
  panels,
}: Props) {
  return (
    <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">

      <div className="text-center">

        <div className="text-5xl">
          ⭐
        </div>

        <h2 className="mt-4 text-3xl font-extrabold text-slate-900">
          Your Recommended Energy System
        </h2>

        <p className="mt-3 text-lg text-slate-600">
          Professionally selected for your home and electricity usage.
        </p>

      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl bg-slate-50 p-6">

          <h3 className="text-xl font-bold text-slate-900">
            Your System Includes
          </h3>

          <ul className="mt-6 space-y-4 text-lg">

            <li>🔋 {inverter}</li>

            <li>⚡ {battery}</li>

            <li>☀️ {panels}</li>

            <li>📱 Smart Monitoring</li>

            <li>🛡 Professional Installation</li>

            <li>📈 Expansion Ready</li>

          </ul>

        </div>

        <div className="rounded-2xl bg-orange-50 p-8">

          <h3 className="text-2xl font-bold text-orange-600">
            Why this system?
          </h3>

          <p className="mt-6 leading-8 text-slate-700">

            This energy system has been selected to provide
            excellent backup power while reducing your monthly
            electricity costs. It also allows future expansion
            as your energy needs grow.

          </p>

        </div>

      </div>

    </section>
  );
}
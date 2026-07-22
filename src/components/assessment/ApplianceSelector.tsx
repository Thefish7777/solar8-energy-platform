// No import needed

export interface Appliance {

  id: string;

  icon: string;

  title: string;

  description: string;

}

interface ApplianceSelectorProps {

  selected: string[];

  onChange: (items: string[]) => void;

}

const appliances: Appliance[] = [

  {
    id: "lights",
    icon: "💡",
    title: "Lights",
    description: "Essential lighting"
  },

  {
    id: "fridge",
    icon: "❄️",
    title: "Fridge",
    description: "Kitchen refrigeration"
  },

  {
    id: "tv",
    icon: "📺",
    title: "TV",
    description: "Entertainment"
  },

  {
    id: "office",
    icon: "💻",
    title: "Home Office",
    description: "Computers & WiFi"
  },

  {
    id: "aircon",
    icon: "❄️",
    title: "Air Conditioner",
    description: "Cooling"
  },

  {
    id: "geyser",
    icon: "🚿",
    title: "Electric Geyser",
    description: "Hot water"
  },

  {
    id: "pool",
    icon: "🏊",
    title: "Pool Pump",
    description: "Swimming pool"
  },

  {
    id: "borehole",
    icon: "🚜",
    title: "Borehole",
    description: "Water pump"
  },

  {
    id: "ev",
    icon: "🚗",
    title: "EV Charger",
    description: "Electric vehicle"
  }

];

export default function ApplianceSelector({

  selected,

  onChange

}: ApplianceSelectorProps) {

  function toggle(id: string) {

    if (selected.includes(id)) {

      onChange(selected.filter(item => item !== id));

    } else {

      onChange([...selected, id]);

    }

  }

  return (

    <div className="max-w-6xl mx-auto">

      <h2 className="text-4xl font-extrabold text-center text-slate-900">

        Which appliances would you like to power?

      </h2>

      <p className="mt-4 text-center text-lg text-slate-600">

        Select every appliance you want your Solar8 system to support.

      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">

        {appliances.map(appliance => (

          <button

            key={appliance.id}

            onClick={() => toggle(appliance.id)}

            className={`
              rounded-3xl border bg-white p-8 text-center transition-all duration-300

              ${
                selected.includes(appliance.id)

                ? "border-orange-500 bg-orange-50 ring-2 ring-orange-400 shadow-xl scale-105"

                : "border-slate-200 hover:border-orange-300 hover:-translate-y-1 hover:shadow-xl"

              }
            `}

          >

            <div className="text-6xl">

              {appliance.icon}

            </div>

            <h3 className="mt-6 text-2xl font-bold">

              {appliance.title}

            </h3>

            <p className="mt-3 text-slate-500">

              {appliance.description}

            </p>

          </button>

        ))}

      </div>

    </div>

  );

}
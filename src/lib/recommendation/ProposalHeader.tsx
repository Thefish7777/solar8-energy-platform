interface Props {
  customerName?: string;
  consultant?: string;
}

export default function ProposalHeader({
  customerName = "Valued Customer",
  consultant = "Solar8 Energy Consultant",
}: Props) {

  const today = new Date().toLocaleDateString("en-ZA", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const proposalNumber =
    "S8-" + Date.now().toString().slice(-6);

  return (

    <div className="rounded-t-3xl bg-gradient-to-r from-orange-500 to-orange-600 p-10 text-white">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-extrabold">

            Solar8 Energy Proposal

          </h1>

          <p className="mt-2 text-orange-100">

            Personalised Solar Recommendation

          </p>

        </div>

        <div className="text-right">

          <div className="text-sm uppercase tracking-wider">

            Proposal Number

          </div>

          <div className="text-xl font-bold">

            {proposalNumber}

          </div>

        </div>

      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">

        <div>

          <div className="text-sm uppercase text-orange-100">

            Customer

          </div>

          <div className="text-xl font-semibold">

            {customerName}

          </div>

        </div>

        <div>

          <div className="text-sm uppercase text-orange-100">

            Consultant

          </div>

          <div className="text-xl font-semibold">

            {consultant}

          </div>

        </div>

        <div>

          <div className="text-sm uppercase text-orange-100">

            Date

          </div>

          <div className="text-xl font-semibold">

            {today}

          </div>

        </div>

      </div>

    </div>

  );

}
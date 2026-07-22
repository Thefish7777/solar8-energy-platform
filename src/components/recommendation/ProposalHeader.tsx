import logo from "../../assets/images/solar8-logo-light.svg";

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
    <div className="rounded-t-3xl bg-gradient-to-r from-orange-500 to-orange-600 px-10 py-14 text-white">

      {/* Solar8 Logo */}
      <div className="flex justify-center">
        <img
          src={logo.src}
          alt="Solar8"
          className="h-20"
        />
      </div>

      {/* Proposal Title */}
      <h1 className="mt-8 text-center text-5xl font-extrabold tracking-tight">
        PERSONALISED
        <br />
        SOLAR ENERGY
        <br />
        PROPOSAL
      </h1>

      {/* Customer */}
      <p className="mt-6 text-center text-xl text-orange-100">
        Prepared exclusively for
      </p>

      <h2 className="mt-2 text-center text-3xl font-bold">
        {customerName}
      </h2>

      {/* Information Panel */}
      <div className="mt-12 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">

        <div className="grid gap-6 md:grid-cols-3">

          <div>
            <div className="text-sm uppercase tracking-wide text-orange-100">
              Proposal Number
            </div>

            <div className="mt-1 text-xl font-bold">
              {proposalNumber}
            </div>
          </div>

          <div>
            <div className="text-sm uppercase tracking-wide text-orange-100">
              Consultant
            </div>

            <div className="mt-1 text-xl font-semibold">
              {consultant}
            </div>
          </div>

          <div>
            <div className="text-sm uppercase tracking-wide text-orange-100">
              Date
            </div>

            <div className="mt-1 text-xl font-semibold">
              {today}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
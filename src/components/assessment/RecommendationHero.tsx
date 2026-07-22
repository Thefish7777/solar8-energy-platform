interface RecommendationHeroProps {
  propertyType: string;
}

export default function RecommendationHero({
  propertyType,
}: RecommendationHeroProps) {
  return (
    <section className="rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 px-10 py-16 text-center text-white shadow-xl">

      <div className="text-6xl">
        ☀️
      </div>

      <h1 className="mt-6 text-5xl font-extrabold">
        Solar8 Energy Plan
      </h1>

      <p className="mt-4 text-xl text-orange-100">
        Prepared for your {propertyType}
      </p>

      <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white/10 p-8 backdrop-blur-sm">

        <p className="text-lg leading-8 text-orange-50">

          Based on the information you've provided, we've designed
          an energy solution that balances affordability,
          backup power and future expansion.

        </p>

      </div>

    </section>
  );
}
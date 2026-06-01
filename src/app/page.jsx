import BloodCard from "@/components/Card/BloodCard";
import FilterSearch from "@/components/Home/FilterSearch";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/blood-cards`, {
    cache: "no-store",
  });
  const cardsData = await res.json();
  return (
    <div className="container mx-auto px-3 pt-6 sm:pt-10 pb-12 sm:pb-16">
      <FilterSearch cardsData={cardsData} />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {cardsData.map((data) => (
          <BloodCard key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
}

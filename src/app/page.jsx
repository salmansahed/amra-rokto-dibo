import BloodCard from "@/components/Card/BloodCard";
import FilterSearch from "@/components/Home/FilterSearch";
import { FiSearch } from "react-icons/fi";

export default async function Home({ searchParams }) {
  const getSearchParams = await searchParams;
  const search = getSearchParams?.search || "";
  const bloodGroup = getSearchParams?.bloodGroup || "";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/blood-cards?search=${search}&bloodGroup=${encodeURIComponent(bloodGroup)}`,
    {
      cache: "no-store",
    },
  );
  const cardsData = await res.json();
  return (
    <div className="container mx-auto px-3 pt-6 sm:pt-10 pb-12 sm:pb-16">
      <FilterSearch cardsData={cardsData} />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {cardsData.length > 0 ? (
          cardsData.map((data) => <BloodCard key={data._id} data={data} />)
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-12 px-6 bg-white dark:bg-zinc-900/70 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-3xl shadow-xs max-w-md mx-auto text-center mt-6">
            <div className="p-2 bg-rose-50 dark:bg-rose-950/40 rounded-full text-rose-500 mb-4 ring-8 ring-rose-100/50 dark:ring-rose-950/20">
              <FiSearch className="text-4xl" />
            </div>

            <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 tracking-tight">
              No Donors Found
            </h3>

            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-xs leading-relaxed">
              We couldn&apos;t find any donors matching your current search name
              or blood group filter. Try adjusting your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

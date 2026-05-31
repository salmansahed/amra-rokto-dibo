import BloodCard from "@/components/Card/BloodCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-3 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <BloodCard />
        <BloodCard />
        <BloodCard />
        <BloodCard />
        <BloodCard />
        <BloodCard />
        <BloodCard />
      </div>
    </div>
  );
}

import { Button, Card } from "@heroui/react";
import { FiPhone, FiMapPin, FiUser } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const BloodCard = async ({ data }) => {
  const {
    userName,
    userimage,
    bloodGroup,
    number,
    alternativeNumber,
    address,
  } = data;
  return (
    <div className="w-full  p-0.5 rounded-3xl bg-linear-to-br from-rose-500/20 via-transparent to-indigo-500/10 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-rose-500/10 dark:shadow-black/40">
      <Card className="p-5 md:p-6 rounded-3xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-100/80 dark:border-zinc-800/50 flex flex-col gap-5">
        {/* Card Header */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* User Profile Image */}
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-rose-500/20 bg-zinc-100 dark:bg-zinc-800 shrink-0">
              <Image
                src={userimage}
                alt={`${userName}'s Profile`}
                fill
                className="object-cover"
              />
            </div>

            {/* Name and Role */}
            <div className="space-y-0.5">
              <h3 className="font-bold text-zinc-800 dark:text-zinc-100 text-base md:text-lg tracking-tight line-clamp-1">
                {userName}
              </h3>
              <p className="text-xs font-medium text-rose-500 flex items-center gap-1 bg-rose-50 dark:bg-rose-950/30 px-2 py-0.5 rounded-full w-max">
                <FiUser className="size-3" /> Blood Donor
              </p>
            </div>
          </div>

          {/* Blood Group */}
          <div className="flex flex-col items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-rose-500 to-red-600 text-white shadow-md shadow-rose-500/30 font-black text-xl tracking-tighter shrink-0 animate-pulse-slow">
            {bloodGroup}
          </div>
        </div>

        <hr className="border-zinc-100 dark:border-zinc-800/80" />

        {/* Contact Information */}
        <div className="space-y-3">
          {/* Phone */}
          <div className="flex items-center gap-2 w-full min-w-0">
            <FiPhone className="border rounded-xl text-gray-600 text-3xl p-1.5 shrink-0" />
            <div className="flex-1 overflow-x-auto scrollbar-none">
              <Link href={`tel:${number}`}>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 whitespace-nowrap hover:text-red-500 transition-all duration-200">
                  {number}
                </p>
              </Link>
            </div>
          </div>
          {/* Alternative Phone */}
          <div className="flex items-center gap-2 w-full min-w-0">
            <FiPhone className="border rounded-xl text-gray-600 text-3xl p-1.5 shrink-0" />
            <div className="flex-1 overflow-x-auto scrollbar-none">
              <Link href={`tel:${alternativeNumber}`}>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 whitespace-nowrap hover:text-red-500 transition-all duration-200">
                  {alternativeNumber}
                </p>
              </Link>
            </div>
            <p className="text-xs font-medium text-rose-500 bg-rose-50 dark:bg-rose-950/30 px-2 py-0.5 rounded-full shrink-0">
              Alternative
            </p>
          </div>
          {/* Location */}
          <div className="flex items-center gap-2">
            <FiMapPin className="border rounded-xl text-gray-600 text-3xl p-1.5" />
            <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800">
              <p className="text-sm text-zinc-700 dark:text-zinc-300 whitespace-nowrap pb-1">
                {address}
              </p>
            </div>
          </div>
        </div>

        {/* Call Button */}
        <div className="pt-1">
          <Link href={`tel:${number}`}>
            <Button className="w-full h-11 font-bold bg-linear-to-r from-pink-600 to-red-600 shadow-md shadow-red-600/10 rounded-xl">
              <FiPhone />
              Call Donor
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default BloodCard;

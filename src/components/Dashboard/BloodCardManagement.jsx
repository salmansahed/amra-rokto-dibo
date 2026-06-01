import { Button, Card } from "@heroui/react";
import { FiEdit3, FiPlusCircle } from "react-icons/fi";
import AddBloodCardForm from "./AddBloodCardForm";
import BloodCard from "../Card/BloodCard";
import EditBloodCardModal from "./EditBloodCardModal";
import DeleteBloodCardModal from "./DeleteBloodCardModal";

const BloodCardManagement = async ({ user }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/blood-cards/${user.id}`,
    {
      cache: "no-store",
    },
  );
  const myBloodCard = await res.json();

  return (
    <div>
      <div className="space-y-4">
        <h3 className="text-lg font-extrabold text-zinc-800 dark:text-zinc-200 tracking-tight">
          Your Blood Donor Card
        </h3>

        {myBloodCard && myBloodCard._id ? (
          <div className="flex flex-col md:flex-row items-start gap-6 bg-zinc-50/50 dark:bg-zinc-950/30 p-6 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50">
            <div className="w-full md:w-auto">
              <BloodCard data={myBloodCard} />
            </div>
            <div className="flex-1 space-y-3">
              <h4 className="text-base font-bold text-zinc-800 dark:text-zinc-200">
                আপনার কার্ডটি লাইভ আছে
              </h4>
              <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                আপনার রক্তদানের তথ্য এখন পাবলিক ডিরেক্টরিতে দেখা যাচ্ছে। কোনো
                তথ্য পরিবর্তন বা আপডেট করতে চাইলে নিচের বাটনে ক্লিক করুন।
              </p>
              <EditBloodCardModal myBloodCard={myBloodCard} />
              <DeleteBloodCardModal user={user} />
            </div>
          </div>
        ) : (
          <Card className="p-8 md:p-12 rounded-3xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 bg-transparent flex flex-col items-center justify-center text-center gap-4">
            <div className="flex items-center justify-center size-14 rounded-2xl bg-rose-50 dark:bg-rose-950/30 text-rose-500">
              <FiPlusCircle className="size-8" />
            </div>
            <div className="max-w-sm space-y-1">
              <h4 className="text-base font-bold text-zinc-800 dark:text-zinc-200">
                কোনো ব্লাড কার্ড খুঁজে পাওয়া যায়নি
              </h4>
              <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400">
                নিচের বাটনে ক্লিক করে আপনার রক্তের গ্রুপ এবং ঠিকানা যোগ করুন যেন
                বিপদের সময় মানুষ আপনাকে খুঁজে পায়।
              </p>
            </div>
            <AddBloodCardForm user={user} />
          </Card>
        )}
      </div>
    </div>
  );
};

export default BloodCardManagement;

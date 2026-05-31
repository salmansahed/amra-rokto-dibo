import { auth } from "@/lib/auth";
import { Button, Card } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import { FiEdit3, FiMail } from "react-icons/fi";

const Profile = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  return (
    <div>
      <div className="relative overflow-hidden w-full rounded-3xl p-0.5 bg-linear-to-r from-pink-500/20 via-transparent to-indigo-500/20 shadow-xl mb-10">
        <Card className="p-6 md:p-8 rounded-3xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-100/50 dark:border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            {/* Profile Picture */}
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-indigo-500/20 shadow-md">
              <Image
                src={user.image}
                alt={user.name}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            {/* User Info */}
            <div className="space-y-1">
              <h2 className="text-xl md:text-2xl font-black text-zinc-800 dark:text-zinc-100 tracking-tight flex items-center gap-2 justify-center sm:justify-start">
                {user.name}
              </h2>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 justify-center sm:justify-start">
                <FiMail className="shrink-0" /> {user.email}
              </p>
            </div>
          </div>

          {/* Profile Edit Button */}
          <Button className="h-11 px-5 font-bold rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 shadow-xs transition-all active:scale-98">
            <FiEdit3 className="size-4 text-indigo-500" />
            Edit Profile
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Profile;

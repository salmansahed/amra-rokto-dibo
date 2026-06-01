import BloodCardManagement from "@/components/Dashboard/BloodCardManagement";
import Profile from "@/components/Dashboard/Profile";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  return (
    <div className="container mx-auto max-w-4xl pt-24 sm:pt-28 pb-14 px-4 min-h-[70vh]">
      <Profile user={user} />
      <BloodCardManagement user={user} />
    </div>
  );
};

export default DashboardPage;

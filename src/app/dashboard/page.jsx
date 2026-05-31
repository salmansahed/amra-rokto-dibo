import BloodCardManagement from "@/components/Dashboard/BloodCardManagement";
import Profile from "@/components/Dashboard/Profile";

const DashboardPage = () => {
  return (
    <div className="container mx-auto max-w-4xl py-10 px-4 min-h-[70vh]">
      <Profile />
      <BloodCardManagement />
    </div>
  );
};

export default DashboardPage;

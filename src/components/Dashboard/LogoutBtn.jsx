"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
import { toast } from "react-toastify";

const LogoutBtn = () => {
  const router = useRouter();

  const handleLogoutBtn = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully!", {
      position: "top-center",
    });
    router.refresh();
    router.push("/");
  };
  return (
    <div>
      <Button
        onClick={handleLogoutBtn}
        variant="danger"
        className="h-11 px-5 font-bold rounded-xl shadow-xs active:scale-98"
      >
        Logout
        <MdLogout />
      </Button>
    </div>
  );
};

export default LogoutBtn;

"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { LuUserRoundPlus } from "react-icons/lu";
import { RiDashboardFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const pathname = usePathname();
  return (
    <div className="py-2 sm:py-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-3 sm:px-0">
        <div>
          <Link href="/">
            <h1 className="text-xl font-semibold bg-linear-to-r to-red-700 from-pink-600 bg-clip-text text-transparent flex items-start gap-2">
              Amra Rokto Dibo{" "}
              <BiSolidDonateBlood className="text-red-500 text-2xl" />
            </h1>
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/"
            className={`${pathname === "/" ? "underline underline-offset-4 decoration-red-500" : "text-gray-700"} hover:text-red-500 transition-colors duration-300`}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`${pathname === "/about-us" ? "underline underline-offset-4 decoration-red-500" : "text-gray-700"} hover:text-red-500 transition-colors duration-300`}
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className={`${pathname === "/contact-us" ? "underline underline-offset-4 decoration-red-500" : "text-gray-700"} hover:text-red-500 transition-colors duration-300`}
          >
            Contact Us
          </Link>
        </div>
        <div className="lg:flex items-center gap-4 hidden">
          {isPending ? (
            <>
              <div className="h-4 w-24 bg-red-200 rounded animate-pulse" />
              <div className="h-9 w-26 bg-red-200 rounded-lg animate-pulse" />
            </>
          ) : user ? (
            <>
              <h2 className="text-xl font-semibold">
                {user?.name.split(" ").slice(0, 2).join(" ")}
              </h2>
              <Link href="/dashboard">
                <Button className="bg-linear-to-r from-pink-600 to-red-600 rounded-lg">
                  <RiDashboardFill />
                  Dashboard
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/registration">
                <Button variant="outline" className="group rounded-lg">
                  <LuUserRoundPlus className="group-hover:scale-125 transition-all duration-300" />
                  Registration
                </Button>
              </Link>
              <Link href="/login">
                <Button className="bg-red-500 rounded-lg transition-all duration-300 group">
                  <FaArrowRightToBracket className="group-hover:translate-x-2 transition-all duration-300" />
                  Login
                </Button>
              </Link>
            </>
          )}
        </div>
        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <Hamburger
            size={25}
            toggled={isOpen}
            toggle={setOpen}
            className="relative"
          />
          {isOpen && (
            <>
              <div
                onClick={() => setOpen(false)}
                className="fixed top-17 inset-0 transition-all duration-300 cursor-pointer"
              />
              <div className="absolute border-2 bg-white border-red-300 rounded-lg px-4 py-4 shadow-2xl left-2 right-2 top-17 flex flex-col gap-3 z-50">
                <div className="flex flex-col items-center gap-3 border-b-2 pb-4 border-red-300">
                  <Link
                    href="/"
                    className={`${pathname === "/" ? "underline underline-offset-4 decoration-red-500" : "text-gray-700"} hover:text-red-500 transition-colors duration-300 block`}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about-us"
                    className={`${pathname === "/about-us" ? "underline underline-offset-4 decoration-red-500" : "text-gray-700"} hover:text-red-500 transition-colors duration-300 block`}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact-us"
                    className={`${pathname === "/contact-us" ? "underline underline-offset-4 decoration-red-500" : "text-gray-700"} hover:text-red-500 transition-colors duration-300 block`}
                  >
                    Contact Us
                  </Link>
                </div>

                {isPending ? (
                  <>
                    <div className="h-6 w-28 bg-gray-200 rounded animate-pulse mx-auto" />
                    <div className="h-9 w-full bg-gray-200 rounded-lg animate-pulse" />
                  </>
                ) : user ? (
                  <>
                    <h2 className="text-xl text-center font-semibold">
                      {user?.name.split(" ").slice(0, 2).join(" ")}
                    </h2>
                    <Link href={"/dashboard"}>
                      <Button className="bg-linear-to-r from-pink-600 to-red-600 rounded-lg w-full">
                        <RiDashboardFill />
                        Dashboard
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href={"/registration"}>
                      <Button variant="ghost" className="w-full rounded-lg">
                        Registration
                      </Button>
                    </Link>
                    <Link href="/login">
                      <Button className="bg-red-600 text-white w-full hover:bg-red-700 transition-all duration-300 px-6 rounded-lg">
                        Login
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

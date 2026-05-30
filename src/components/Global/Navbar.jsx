import { Button } from "@heroui/react";
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { LuUserRoundPlus } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="py-4 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-3 sm:px-0">
        <div>
          <h1 className="text-xl font-semibold bg-linear-to-r to-red-700 from-pink-600 bg-clip-text text-transparent flex items-start gap-2">
            Amra Rokto Dibo <BiSolidDonateBlood className="text-red-500 text-2xl" />
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="group">
            <LuUserRoundPlus className="group-hover:scale-125 transition-all duration-300" />
            Registration
          </Button>
          <Button className="bg-green-700 text-white hover:bg-green-800 transition-all duration-300 group">
            <FaArrowRightToBracket className="group-hover:translate-x-2 transition-all duration-300" />
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

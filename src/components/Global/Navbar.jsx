import { Button } from "@heroui/react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { LuUserRoundPlus } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="py-4 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold bg-linear-to-r to-purple-700 from-pink-700 bg-clip-text text-transparent">
            Amra Rokto Dibo
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

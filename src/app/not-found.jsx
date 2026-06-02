import { Button } from "@heroui/react";
import Link from "next/link";
import { BiSolidDonateBlood as BloodIcon } from "react-icons/bi";
import { FaHome } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] sm:min-h-screen flex items-center justify-center bg-radial from-red-50 to-white px-4 relative overflow-hidden">
      {/* Background Glowing Blur Circles */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-40" />

      {/* Main Glassmorphic Card Container */}
      <div className="max-w-md w-full bg-white/60 backdrop-blur-xl border border-white/40 p-8 rounded-2xl shadow-2xl text-center z-10 relative">
        {/* Bouncing Blood Drop Icon Container */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full text-red-500 mb-6 animate-bounce">
          <BloodIcon className="text-5xl" />
        </div>

        {/* 404 Gradient Text */}
        <h1 className="text-8xl font-black bg-linear-to-r from-pink-600 to-red-700 bg-clip-text text-transparent tracking-tight mb-2">
          404
        </h1>

        {/* Message Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Page Not Found!
        </h2>
        <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
          Oops! The page you are looking for doesn&apos;t exist. It might have
          been removed, or the URL was mistyped.
        </p>

        {/* Return Home Button */}
        <Link href="/">
          <Button className="bg-linear-to-r from-pink-600 to-red-600 text-white font-medium px-8 py-6 rounded-xl shadow-lg shadow-red-500/20 hover:shadow-red-500/40 hover:scale-102 transition-all duration-300 w-full">
            <FaHome className="text-lg" />
            Back to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

import Link from "next/link";
import React from "react";
import { BiSolidDonateBlood } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaHeart,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Main Container */}
      <div className="container mx-auto px-3 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 xl:gap-28">
        {/* Website Branding & Description */}
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold bg-linear-to-r to-red-500 from-pink-500 bg-clip-text text-transparent flex items-start gap-2">
            Amra Rokto Dibo{" "}
            <BiSolidDonateBlood className="text-red-500 text-2xl" />
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            আপনার এক ব্যাগ রক্ত বাঁচাতে পারে একটি মূল্যবান জীবন। রক্তদানে এগিয়ে
            আসুন, মানবতার সেবায় অংশ নিন।
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 pt-2">
            <Link
              href="https://www.facebook.com/salmansahedbd"
              className="p-2 bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white rounded-full transition-colors duration-300"
            >
              <FaFacebook size={18} />
            </Link>
            <Link
              href="https://github.com/salmansahed"
              className="p-2 bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white rounded-full transition-colors duration-300"
            >
              <FaGithub size={18} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4 relative before:absolute before:bottom-0 before:left-0 before:w-8 before:h-0.5 before:bg-pink-600 pb-2">
            প্রয়োজনীয় লিংক
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link
                href="#"
                className="hover:text-pink-500 transition-colors duration-200 block"
              >
                রক্তের অনুরোধ করুন
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-pink-500 transition-colors duration-200 block"
              >
                রক্তদাতা খুঁজুন
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-pink-500 transition-colors duration-200 block"
              >
                আমাদের সম্পর্কে
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-pink-500 transition-colors duration-200 block"
              >
                যোগাযোগ করুন
              </Link>
            </li>
          </ul>
        </div>

        {/* Blood Groups */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4 relative before:absolute before:bottom-0 before:left-0 before:w-8 before:h-0.5 before:bg-pink-600 pb-2">
            রক্তের গ্রুপসমূহ
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <Link
              href="#"
              className="hover:text-red-500 bg-slate-800/50 px-3 py-1.5 rounded text-center border border-slate-800 hover:border-red-500/30 transition-all"
            >
              A+ (পজিটিভ)
            </Link>
            <Link
              href="#"
              className="hover:text-red-500 bg-slate-800/50 px-3 py-1.5 rounded text-center border border-slate-800 hover:border-red-500/30 transition-all"
            >
              O+ (পজিটিভ)
            </Link>
            <Link
              href="#"
              className="hover:text-red-500 bg-slate-800/50 px-3 py-1.5 rounded text-center border border-slate-800 hover:border-red-500/30 transition-all"
            >
              AB+ (পজিটিভ)
            </Link>
            <Link
              href="#"
              className="hover:text-red-500 bg-slate-800/50 px-3 py-1.5 rounded text-center border border-slate-800 hover:border-red-500/30 transition-all"
            >
              B+ (পজিটিভ)
            </Link>
          </div>
        </div>

        {/* Emergency Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4 relative before:absolute before:bottom-0 before:left-0 before:w-8 before:h-0.5 before:bg-pink-600 pb-2">
            জরুরি যোগাযোগ
          </h3>
          <div className="space-y-3 text-sm text-slate-400">
            <Link href={`tel:+8801614869602`} className="flex items-center space-x-3">
              <FaPhoneAlt className="text-pink-600 shrink-0" />
              <span>+8801614-869602</span>
            </Link>
            <Link href={`mailto:amraroktodibo@gmail.com`} className="flex items-center space-x-3">
              <FaEnvelope className="text-pink-600 shrink-0" />
              <span className="break-all">amraroktodibo@gmail.com</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-slate-800/80 bg-slate-950/50 py-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>
            © {new Date().getFullYear()} Amra Rokto Dibo. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="flex items-center gap-1">
            Made with <FaHeart className="text-red-500 animate-pulse" /> by
            Salman Sahed
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

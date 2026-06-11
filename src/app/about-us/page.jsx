export const metadata = {
  title: "About Us",
  description:
    "Official web application of Amra Rokto Dibo (ARD). Learn about our mission, vision, and how we are building Bangladesh's most trusted voluntary blood donor network to save lives.",

  keywords: [
    "About Amra Rokto Dibo",
    "Amra Rokto Dibo About",
    "Amra Rokto Dibo About Page",
    "Amra Rokto Dibo About-Us Page",
    "ARD Mission and Vision",
    "Blood Donation Volunteers Bangladesh",
    "Salman Sahed",
    "Blood Platform Creators",
    "Voluntary Healthcare Initiative",
  ],

  alternates: {
    canonical: "/about-us",
  },

  openGraph: {
    title: "About Us | Amra Rokto Dibo",
    description:
      "Discover the story behind Amra Rokto Dibo (ARD) — our mission to eliminate blood scarcity in Bangladesh and how we connect donors with families in need.",
    url: "/about-us",
    siteName: "Amra Rokto Dibo",
    images: [
      {
        url: "/og-image.png",
        width: 1230,
        height: 630,
        alt: "About Amra Rokto Dibo - Voluntary Blood Donation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us | Amra Rokto Dibo",
    description:
      "Discover the story behind Amra Rokto Dibo (ARD) — our mission to eliminate blood scarcity in Bangladesh.",
    images: ["/og-image.png"],
  },
};

import { Button } from "@heroui/react";
import Link from "next/link";
import {
  FiHeart,
  FiUsers,
  FiShield,
  FiTarget,
  FiDroplet,
} from "react-icons/fi";

const AboutUs = () => {
  const values = [
    {
      icon: <FiHeart className="h-6 w-6" />,
      title: "Save Lives",
      description:
        "Every blood donation has the potential to save multiple lives and bring hope to families in need.",
    },
    {
      icon: <FiUsers className="h-6 w-6" />,
      title: "Strong Community",
      description:
        "We connect donors, recipients, and volunteers to build a caring and supportive community.",
    },
    {
      icon: <FiShield className="h-6 w-6" />,
      title: "Trusted Platform",
      description:
        "Our goal is to provide a safe, reliable, and transparent blood donation experience.",
    },
  ];

  return (
    <main className="bg-zinc-50/50 dark:bg-zinc-950/50 min-h-screen pb-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-red-500/25 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-red-50/60 via-white to-transparent pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full bg-red-200 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-600 border border-red-100/50 shadow-xs">
              About Our Mission
            </span>

            <h1 className="mt-6 text-4xl font-black text-zinc-900 md:text-6xl tracking-tight leading-tight">
              Connecting Donors,
              <span className="block mt-2 bg-linear-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                Saving Lives
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-zinc-600 font-medium leading-relaxed">
              We believe that finding blood during emergencies should never be
              difficult. Our platform bridges the gap between donors and
              recipients, helping save lives through timely blood donations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500">
              Our Story
            </span>
            <h2 className="text-3xl font-black text-zinc-900 md:text-4xl tracking-tight">
              Why We Started
            </h2>
            <div className="space-y-4 text-zinc-500 font-medium leading-relaxed text-sm sm:text-base">
              <p>
                Blood shortages remain a major challenge in many communities.
                During emergencies, families often struggle to find compatible
                blood donors quickly.
              </p>
              <p>
                Our platform was created to simplify the process by connecting
                willing donors with people in urgent need. Through technology
                and community support, we aim to make blood donation faster,
                easier, and more accessible.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-6 rounded-[32px] bg-red-50 p-6 sm:p-8 border border-red-100 backdrop-blur-md">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { count: "100+", label: "Registered Donors" },
                { count: "50+", label: "Successful Donations" },
                { count: "24/7", label: "Emergency Support" },
                { count: "100%", label: "Community Driven" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-zinc-200/40 bg-white p-6 shadow-xs backdrop-blur-xs transition-all duration-300 hover:border-red-500 hover:shadow-[0_10px_30px_rgba(239,68,68,0.06)] hover:-translate-y-1"
                >
                  <h3 className="text-3xl font-black bg-linear-to-r from-red-600 to-rose-600 bg-clip-text text-transparent tracking-tight">
                    {stat.count}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm font-semibold text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-zinc-100/50 py-16 border-y border-zinc-200/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-black text-zinc-900 tracking-tight">
              Mission & Vision
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-500 font-medium">
              Building a future where no life is lost due to the unavailability
              of blood.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Mission Card */}
            <div className="rounded-3xl border border-zinc-200/50 bg-white p-8 shadow-xs transition-all duration-300 hover:border-red-500 hover:shadow-[0_10px_30px_rgba(239,68,68,0.06)] hover:-translate-y-1">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 shadow-xs border border-red-100/50">
                <FiTarget className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                Our Mission
              </h3>
              <p className="mt-3 text-sm sm:text-base text-zinc-500 font-medium leading-relaxed">
                To create a reliable platform that connects blood donors with
                recipients quickly and efficiently, ensuring timely access to
                life-saving blood.
              </p>
            </div>

            {/* Vision Card */}
            <div className="rounded-3xl border border-zinc-200/50 bg-white p-8 shadow-xs transition-all duration-300 hover:border-red-500 hover:shadow-[0_10px_30px_rgba(239,68,68,0.06)] hover:-translate-y-1">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 shadow-xs border border-red-100/50">
                <FiDroplet className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
                Our Vision
              </h3>
              <p className="mt-3 text-sm sm:text-base text-zinc-500 font-medium leading-relaxed">
                To establish a world where every patient can find blood when
                needed and every willing donor can contribute effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-zinc-900 tracking-tight">
            Our Core Values
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-500 font-medium">
            The principles that guide everything we do.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="rounded-3xl border border-zinc-200/40 bg-white p-8 shadow-xs transition-all duration-300 hover:border-red-500 hover:shadow-[0_15px_35px_rgba(239,68,68,0.08)] hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100/30">
                {value.icon}
              </div>
              <h3 className="text-lg font-bold text-zinc-900 tracking-tight">
                {value.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-zinc-500 font-medium leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 mt-8 max-w-6xl">
        <div className="bg-linear-to-br from-red-600 to-rose-700 py-12 px-6 sm:p-16 rounded-4xl text-center shadow-xl shadow-red-600/10 relative overflow-hidden">
          <h2 className="text-3xl font-black text-white md:text-5xl tracking-tight">
            Become a Hero Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-red-100 font-medium leading-relaxed">
            Your blood donation can save lives. Join our growing community of
            donors and make a real difference.
          </p>

          <Link href="/">
            <Button className="mt-6 sm:mt-8 h-12 sm:h-13 font-bold text-sm sm:text-base rounded-xl text-red-600 bg-white px-7 sm:px-8">
              Find Donors
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;

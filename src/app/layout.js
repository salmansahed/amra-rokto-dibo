import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import { ToastContainer } from "react-toastify";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin_sans",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Amra Rokto Dibo | Voluntary Blood Donation Platform Bangladesh",
    template: "%s | Amra Rokto Dibo",
  },

  description:
    "Official web application of Amra Rokto Dibo (ARD), a voluntary blood donation platform in Bangladesh. Find verified blood donors, post emergency blood requests, and help save lives.",

  keywords: [
    "Amra Rokto Dibo",
    "Blood Donation Bangladesh",
    "Find Blood Donor",
    "Emergency Blood Request",
    "ARD Blood Bank",
    "Voluntary Blood Donor Network",
    "Donate Blood Dhaka",
    "Mymensingh Blood Donor",
    "Blood Group Finder",
    "Safe Blood Transfusion",
    "Blood Donor Bangladesh",
    "Online Blood Donation Platform",
    "Verified Blood Donor Network",
    "Amra Rokto Dibo Website",
    "Blood Donation Platform",
    "Emergency Blood Finder Bangladesh",
    "Blood Donation App",
    "Red Cross Volunteer Bangladesh",
    "Free Blood Donation Network",
  ],

  authors: [{ name: "Salman Sahed", url: "https://github.com/salmansahed" }],
  creator: "Salman Sahed",
  publisher: "Amra Rokto Dibo",

  metadataBase: new URL("https://amra-rokto-dibo.vercel.app"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Amra Rokto Dibo | Voluntary Blood Donation Platform Bangladesh",
    description:
      "Explore Amra Rokto Dibo (ARD) — find verified blood donors, post emergency blood requests, and help save lives through Bangladesh's growing voluntary blood donor network.",
    url: "https://amra-rokto-dibo.vercel.app",
    siteName: "Amra Rokto Dibo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amra Rokto Dibo - Blood Donation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amra Rokto Dibo | Voluntary Blood Donation Platform Bangladesh",
    description:
      "Explore Amra Rokto Dibo (ARD) — find verified blood donors, post emergency blood requests, and help save lives through Bangladesh's growing voluntary blood donor network.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },

  category: "Health",

  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: "OroClGEF2K52Ro89_WCqBpmB_fPYCuuWpvpdQUbrtsQ",
  },
  applicationName: "Amra Rokto Dibo",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${josefinSans.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ToastContainer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

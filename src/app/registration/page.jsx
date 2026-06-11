export const metadata = {
  title: "Register as a Donor",
  description:
    "Join Amra Rokto Dibo (ARD) today. Create an account, become a verified blood donor, and start saving lives in Bangladesh.",
  alternates: { canonical: "/register" },
  openGraph: {
    title: "Register as a Blood Donor | Amra Rokto Dibo",
    description:
      "Sign up today to become part of Bangladesh's trusted voluntary blood donor network. Your one registration can save multiple lives.",
    url: "/register",
    images: [{ url: "/og-image.png", width: 1230, height: 630 }],
  },
};

import RegistrationForm from "@/components/Auth/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div className="pb-12 pt-24 sm:pb-14 sm:pt-28 px-3 bg-gray-100">
      <div className="container mx-auto flex items-center justify-center">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;

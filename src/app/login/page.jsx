export const metadata = {
  title: "Login",
  description:
    "Log in to your Amra Rokto Dibo account to manage your donor profile or post an emergency blood request.",
  alternates: { canonical: "/login" },
  openGraph: {
    title: "Login | Amra Rokto Dibo",
    description:
      "Access your dashboard to update blood availability or manage emergency donation requests.",
    url: "/login",
    images: [{ url: "/og-image.png", width: 1230, height: 630 }],
  },
};

import LoginForm from "@/components/Auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="pb-12 pt-24 sm:pb-14 sm:pt-28 px-3 bg-gray-100">
      <div className="container mx-auto flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

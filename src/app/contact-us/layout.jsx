export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Amra Rokto Dibo (ARD). Reach out to us for any queries, support, feedback, or emergency blood donation assistance in Bangladesh. We are here to help save lives.",

  keywords: [
    "Contact Amra Rokto Dibo",
    "Amra Rokto Dibo Contact Page Bangladesh",
    "ARD Support Helpline",
    "Blood Donation Help Bangladesh",
    "Emergency Blood Assistance",
    "Amra Rokto Dibo Contact Number",
    "Blood Platform Feedback",
    "Amra Rokto Dibo Email",
    "Contact ARD Team",
    "Amra Rokto Dibo Customer Support",
    "Amra Rokto Dibo Contact Information",
    "Amra Rokto Dibo Contact Details",
    "Amra Rokto Dibo Contact Form",
    "Salman Sahed",
    "Amra Rokto Dibo Support",
  ],

  alternates: {
    canonical: "/contact-us",
  },

  openGraph: {
    title: "Contact Us | Amra Rokto Dibo",
    description:
      "Have questions or need emergency assistance? Contact Amra Rokto Dibo (ARD) today. Let's work together to make Bangladesh's blood donor network stronger.",
    url: "/contact-us",
    siteName: "Amra Rokto Dibo",
    images: [
      {
        url: "/og-image.png",
        width: 1230,
        height: 630,
        alt: "Contact Amra Rokto Dibo - Voluntary Blood Donation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Amra Rokto Dibo",
    description:
      "Have questions or need emergency assistance? Contact Amra Rokto Dibo (ARD) today.",
    images: ["/og-image.png"],
  },
};

const ContactUsLayoutPage = ({ children }) => {
  return <div>{children}</div>;
};

export default ContactUsLayoutPage;

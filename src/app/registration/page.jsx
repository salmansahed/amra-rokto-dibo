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

import RegistrationForm from "@/components/Auth/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div className="py-12 sm:py-14 px-3 bg-gray-100">
      <div className="container mx-auto flex items-center justify-center">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;

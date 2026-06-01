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

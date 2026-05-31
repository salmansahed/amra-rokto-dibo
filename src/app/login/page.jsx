import LoginForm from "@/components/Auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="py-12 sm:py-14 px-3 bg-gray-100">
      <div className="container mx-auto flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

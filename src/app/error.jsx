"use client";

const ErrorPage = ({ reset }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-red-600 mb-2">
        Something went wrong!
      </h1>
      <p className="text-gray-600 mb-6">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;

"use client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  InputGroup,
} from "@heroui/react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import Link from "next/link";
import { useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { IoPersonAddOutline } from "react-icons/io5";
import Image from "next/image";

const RegistrationForm = () => {
  const router = useRouter();
  // Photo Field
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!selectedImage) {
      setImageError("Profile image is required");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    try {
      setIsUploading(true);
      let imageUrlForDatabase = undefined;
      if (selectedImage) {
        const imageFormData = new FormData();
        imageFormData.append("image", selectedImage);
        const imagebbApiKey = process.env.NEXT_PUBLIC_IMAGEBB_API_KEY;
        const imagebbRes = await fetch(
          `https://api.imgbb.com/1/upload?key=${imagebbApiKey}`,
          {
            method: "POST",
            body: imageFormData,
          },
        );
        const imagebbData = await imagebbRes.json();

        if (!imagebbData.success) {
          toast.error("Image upload failed: " + imagebbData.error.message);
          setIsUploading(false);
          return;
        }
        imageUrlForDatabase = imagebbData.data.url;
      }

      const { data, error } = await authClient.signUp.email({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        image: imageUrlForDatabase,
        callbackURL: "/",
      });
      setIsUploading(false);
      if (error) {
        toast.error("Registration failed: " + error.message);
      } else {
        toast.success("Registration successful! Redirecting to login...");
        router.push("/login");
      }
    } catch (error) {
      setIsUploading(false);
      toast.error("Registration failed: " + error.message);
    }
  };

  // Handle Google Login
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleBtnPress = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      setImageError("");
    }
  };

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return (
      <div className="w-full max-w-md p-6 md:p-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-3xl border border-zinc-200/60 dark:border-zinc-800/80 shadow-2xl shadow-indigo-600/10">
        <div className="h-6 w-28 bg-gray-200 rounded animate-pulse mx-auto mb-6" />
        <div className="h-8 w-full bg-gray-200 rounded-lg animate-pulse mb-4" />
        <div className="h-8 w-full bg-gray-200 rounded-lg animate-pulse mb-4" />
        <div className="h-12 w-full bg-gray-200 rounded-lg animate-pulse mb-4" />
        <div className="h-12 w-full bg-gray-200 rounded-lg animate-pulse mb-4" />
        <div className="h-12 w-full bg-gray-200 rounded-lg animate-pulse" />
      </div>
    );
  }
  if (user) {
    router.push("/");
  }

  return (
    <Form
      onSubmit={onSubmit}
      className="flex w-full max-w-md flex-col gap-5 shadow-2xl shadow-indigo-600/10 dark:shadow-black/40 rounded-3xl border border-zinc-200/60 dark:border-zinc-800/80 p-6 md:p-8 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl"
    >
      <div className="space-y-1 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-linear-to-r from-pink-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
          Create an Account
        </h2>
        <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400">
          Start your journey in Amra Rokto Dibo
        </p>
      </div>

      {/* Name Field */}
      <TextField
        isRequired
        name="name"
        type="text"
        className="w-full flex flex-col gap-1.5"
        validate={(value) => {
          if (value.length < 2) {
            return "Name must be at least 2 characters";
          }
          return null;
        }}
      >
        <Label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
          Name
        </Label>
        <Input
          placeholder="Enter your name"
          className="h-12 text-sm rounded-xl border-zinc-200 dark:border-zinc-800 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 bg-zinc-50/50 dark:bg-zinc-950/50 transition-all duration-200"
        />
        <FieldError className="text-xs font-medium text-rose-500 mt-0.5" />
      </TextField>

      {/* Email Field */}
      <TextField
        isRequired
        name="email"
        type="email"
        className="w-full flex flex-col gap-1.5"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
          Email
        </Label>
        <Input
          placeholder="Enter your email address"
          className="h-12 text-sm rounded-xl border-zinc-200 dark:border-zinc-800 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 bg-zinc-50/50 dark:bg-zinc-950/50 transition-all duration-200"
        />
        <FieldError className="text-xs font-medium text-rose-500 mt-0.5" />
      </TextField>

      {/* Photo Field */}
      <TextField isRequired className="w-full flex flex-col gap-1.5">
        <Label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
          Profile Image (required)
        </Label>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />

        <div className="flex items-center gap-3 w-full p-2 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-950/50">
          <Button
            variant="outline"
            className="bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 rounded-lg text-xs font-medium py-1.5 px-3 h-9"
            onPress={handleBtnPress}
          >
            {selectedImage ? "Change Photo" : "Choose File"}
          </Button>

          <span className="text-xs text-zinc-400 dark:text-zinc-500 truncate max-w-55">
            {selectedImage ? selectedImage.name : "No file chosen"}
          </span>
        </div>

        {/* Image Preview */}
        {imagePreview && (
          <div className="mt-2 relative w-20 h-20 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center">
            <Image
              src={imagePreview}
              alt="Preview"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {imageError && (
          <p className="text-xs font-medium text-rose-500 mt-0.5">
            {imageError}
          </p>
        )}
      </TextField>

      {/* Password Field */}
      <TextField
        className="w-full flex flex-col gap-1.5"
        name="password"
        isRequired
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
          Password
        </Label>
        <InputGroup className="h-12 border rounded-xl border-zinc-200 dark:border-zinc-800 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 bg-zinc-50/50 dark:bg-zinc-950/50 overflow-hidden transition-all duration-200">
          <InputGroup.Input
            className="w-full h-full text-sm pl-3 border-none bg-transparent focus:ring-0 focus:outline-hidden"
            type={isVisible ? "text" : "password"}
            placeholder="Enter your password"
          />
          <InputGroup.Suffix className="pr-3 flex items-center bg-transparent">
            <Button
              isIconOnly
              aria-label={isVisible ? "Hide password" : "Show password"}
              size="sm"
              variant="light"
              className="hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg text-zinc-500"
              onPress={() => setIsVisible(!isVisible)}
            >
              {isVisible ? (
                <Eye className="size-4.5" />
              ) : (
                <EyeSlash className="size-4.5" />
              )}
            </Button>
          </InputGroup.Suffix>
        </InputGroup>

        <Description className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">
          Must be at least 8 characters with 1 uppercase and 1 number
        </Description>

        <FieldError className="text-xs font-medium text-rose-500 mt-0.5" />
      </TextField>

      {/* Create Account Button */}
      <div className="flex gap-2 pt-2">
        <Button
          type="submit"
          isDisabled={isUploading}
          className="w-full h-12 shadow-md rounded-xl transition-all duration-300 active:scale-98 group bg-linear-to-r from-pink-600 to-red-600"
        >
          {isUploading ? (
            <div className="flex items-center justify-center gap-2">
              <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              <span>Creating Account...</span>
            </div>
          ) : (
            <>
              <IoPersonAddOutline className="group-hover:scale-125 transition-all duration-300" />
              Create Account
            </>
          )}
        </Button>
      </div>

      <div className="relative flex py-1 items-center">
        <div className="grow border-t border-zinc-200 dark:border-zinc-800"></div>
        <span className="shrink mx-4 text-xs font-medium text-zinc-400 dark:text-zinc-500">
          OR
        </span>
        <div className="grow border-t border-zinc-200 dark:border-zinc-800"></div>
      </div>

      {/* Social Login Button */}
      <div className="flex flex-col gap-3 items-center justify-center">
        <Button
          onClick={handleGoogleLogin}
          variant="secondary"
          className="h-12 w-full font-medium rounded-xl text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 shadow-xs transition-all duration-200 active:scale-98"
        >
          <FcGoogle className="size-5 mr-1" />
          Continue with Google
        </Button>
      </div>

      <div className="flex items-center justify-center pt-1">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </Form>
  );
};

export default RegistrationForm;

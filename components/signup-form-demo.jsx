"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { toast } from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { useSignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function SignupFormDemo() {
  const { isLoaded, signUp } = useSignUp();
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (!isLoaded) return;

    setIsLoading(true);
    try {
      await signUp.create({
        firstName: formData.firstName,
        lastName: formData.lastName,
        emailAddress: formData.email,
        password: formData.password
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      
      toast.success("Account created successfully! Please verify your email.");
      router.push("/verify-email");
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error(error.errors?.[0]?.message || "An error occurred during signup");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignUp = async (strategy) => {
    if (!isLoaded) return;

    try {
      await signUp.authenticateWithRedirect({
        strategy,
        redirectUrl: "/",
        redirectUrlComplete: "/"
      });
    } catch (error) {
      console.error("OAuth error:", error);
      toast.error("Could not connect to " + strategy);
    }
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Lumeo
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Create your account to get started
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="first_name">First name</Label>
            <Input 
              id="firstName" 
              placeholder="Tyler" 
              type="text" 
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="last_name">Last name</Label>
            <Input 
              id="lastName" 
              placeholder="Durden" 
              type="text" 
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input 
            id="email" 
            placeholder="you@example.com" 
            type="email" 
            value={formData.email}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input 
              id="password" 
              placeholder="••••••••" 
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <div className="relative">
            <Input 
              id="confirmPassword" 
              placeholder="••••••••" 
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          type="submit"
          disabled={isLoading}>
          {isLoading ? "Creating account..." : "Sign up →"}
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            type="button"
            onClick={() => handleSocialSignUp("oauth_github")}
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Continue with GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            type="button"
            onClick={() => handleSocialSignUp("oauth_google")}
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Continue with Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

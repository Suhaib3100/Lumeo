"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { toast } from "react-hot-toast";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { useSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const { isLoaded, signIn } = useSignIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoaded) return;

    setIsLoading(true);
    try {
      const form = e.currentTarget;
      const email = form.email.value;
      const password = form.password.value;

      await signIn.create({
        identifier: email,
        password
      });

      toast.success("Logged in successfully!");
      router.push("/");
    } catch (error) {
      console.error("Error during signin:", error);
      toast.error(error.errors?.[0]?.message || "Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignIn = async (strategy) => {
    if (!isLoaded) return;

    try {
      await signIn.authenticateWithRedirect({
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
    <div className="min-h-screen w-full flex bg-gray-50 dark:bg-gray-900">
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 to-indigo-900 p-12 items-center justify-center">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-white mb-6">Welcome to Lumeo</h1>
          <p className="text-lg text-blue-100 mb-8">Transform your content creation with AI-powered tools and streamline your workflow.</p>
          <div className="flex items-center space-x-4 text-blue-100">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>Smart AI Editing</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>Instant Results</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8">
        <div className="max-w-md w-full rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Welcome Back
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Sign in to your account to continue
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" placeholder="you@example.com" type="email" required />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" placeholder="••••••••" type="password" required />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] disabled:cursor-not-allowed disabled:opacity-50"
              type="submit"
              disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in →"}
              <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <div className="flex flex-col space-y-4">
              <button
                type="button"
                onClick={() => handleSocialSignIn("oauth_github")}
                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
                <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Continue with GitHub
                </span>
                <BottomGradient />
              </button>
              <button
                type="button"
                onClick={() => handleSocialSignIn("oauth_google")}
                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
                <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Continue with Google
                </span>
                <BottomGradient />
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => router.push("/auth/signup")}
                  className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  Sign up
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
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
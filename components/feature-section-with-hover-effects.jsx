"use client";
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "AI-Powered Shorts",
      description: "Generate ready-to-go Shorts with captions for YouTube, Instagram, or TikTok.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Next.js Efficiency",
      description: "Dynamic, blazing-fast content built on Next.js for seamless performance.",
      icon: <IconEaseInOut />,
    },
    {
      title: "User-Friendly Interface",
      description: "Simple, intuitive tools help you create and publish Shorts with minimal effort.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Professional Templates",
      description: "Choose from curated templates designed to elevate your Shorts instantly.",
      icon: <IconCloud />,
    },
    {
      title: "Versatile Integrations",
      description: "Easily connect your favorite platforms and streamline your Shorts workflow.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 AI Support",
      description: "Our virtual assistants are always on standby to help with any questions.",
      icon: <IconHelp />,
    },
    {
      title: "Instant Deployment",
      description: "Rapidly launch new Shorts or full campaigns in a matter of seconds.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Scalable & Secure",
      description: "Designed to grow with your needs without compromising on security.",
      icon: <IconHeart />,
    },
  ];
  return (
    (<div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>)
  );
}

export const Feature = ({
  title,
  description,
  icon,
  index
}) => {
  return (
    (<div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}>
      {index < 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>)
  );
};

import React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const mockupVariants = cva(
  "flex relative z-10 overflow-hidden shadow-2xl border border-border/5 border-t-border/15",
  {
    variants: {
      type: {
        mobile: "rounded-[48px] max-w-[350px]",
        responsive: "rounded-md",
      },
    },
    defaultVariants: {
      type: "responsive",
    },
  }
);

const Mockup = React.forwardRef(({ className, type, ...props }, ref) => (
  <div ref={ref} className={cn(mockupVariants({ type, className }))} {...props} />
));
Mockup.displayName = "Mockup";

const frameVariants = cva("bg-accent/5 flex relative z-10 overflow-hidden rounded-2xl", {
  variants: {
    size: {
      small: "p-2",
      large: "p-4",
    },
  },
  defaultVariants: {
    size: "small",
  },
});

const MockupFrame = React.forwardRef(({ className, size, ...props }, ref) => (
  <div ref={ref} className={cn(frameVariants({ size, className }))} {...props} />
));
MockupFrame.displayName = "MockupFrame";

export { Mockup, MockupFrame };
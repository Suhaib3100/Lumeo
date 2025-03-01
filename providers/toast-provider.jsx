"use client";

import { Toaster } from "@/components/ui/sonner";

export const ToastProvider = () => {
  return (
    <Toaster 
      position="top-center"
      expand={false}
      richColors
      closeButton
    />
  );
};
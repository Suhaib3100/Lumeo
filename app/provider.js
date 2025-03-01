'use client';
import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { Toaster } from "@/components/ui/sonner"
import { ClerkProvider } from "@clerk/nextjs"

export default function Provider({children}) {
  return (
    <ClerkProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster />
      </NextThemesProvider>
    </ClerkProvider>
  )
}

"use client";
import { useEffect } from 'react';
import { Clerk } from '@clerk/nextjs';

export function ClerkCaptcha() {
  useEffect(() => {
    const initCaptcha = async () => {
      try {
        const clerk = window.Clerk;
        if (clerk) {
          await clerk.load({
            appearance: {
              elements: {
                footer: 'hidden',
                dividerText: 'hidden',
              },
            },
          });
        }
      } catch (error) {
        console.error('Error initializing Clerk CAPTCHA:', error);
      }
    };

    initCaptcha();
  }, []);

  return <div id="clerk-captcha" />;
}
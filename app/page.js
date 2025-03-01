import { HeroSection } from "@/components/hero-section";
import { Header1 } from "@/components/ui/header";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons
import { ContainerScrollAnimation } from "@/components/ui/container-scroll-animation";
import { FeaturesSectionWithHoverEffects } from "@/components/feature-section-with-hover-effects";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Pricing } from "@/components/pricing";
import { Faq3 } from "@/components/faq3";
import { Footerdemo } from "@/components/ui/footer-section";
export default function Home() {
  const demoData = {
    heading: "Frequently Asked Questions",
    description:
      "Everything you need to know about Lumeo. Can't find the answer you're looking for? Feel free to contact our support team.",
    items: [
      {
        id: "faq-1",
        question: "What is Lumeo?",
        answer:
          "Lumeo is an AI-powered tool that helps you generate short-form videos with auto-generated captions, ready to upload on YouTube, Instagram, and TikTok.",
      },
      {
        id: "faq-2",
        question: "How does Lumeo work?",
        answer:
          "Simply upload your video or paste a link, and our AI will automatically generate captions, apply dynamic styles, and optimize the video for social media.",
      },
      {
        id: "faq-3",
        question: "Is there a free plan available?",
        answer:
          "Yes! Lumeo offers a free plan where you can generate a limited number of Shorts per month. Upgrade for unlimited access and premium features.",
      },
      {
        id: "faq-4",
        question: "Can I customize the captions and styles?",
        answer:
          "Absolutely! You can edit captions, choose different fonts, colors, and animations to match your brand or personal style.",
      },
      {
        id: "faq-5",
        question: "Which platforms does Lumeo support?",
        answer:
          "Lumeo supports export formats optimized for YouTube Shorts, Instagram Reels, and TikTok, ensuring the best quality for each platform.",
      },
      {
        id: "faq-6",
        question: "Do I need video editing skills to use Lumeo?",
        answer:
          "No! Lumeo is designed for both beginners and professionals. Our AI automates the editing process, so you can create stunning Shorts in seconds.",
      },
    ],
    supportHeading: "Still have questions?",
    supportDescription:
      "Can't find the answer you're looking for? Our support team is here to help with any technical questions or concerns.",
    supportButtonText: "Contact Support",
    supportButtonUrl: "/contact",
  };
  
  const demoPlans = [
    {
      name: "BASIC",
      price: "29",
      yearlyPrice: "19",
      period: "per month",
      features: [
        "Generate up to 20 Shorts/month",
        "Auto-generated captions",
        "1080p exports",
        "Basic templates",
        "Community support",
      ],
      description: "Great for casual creators and beginners",
      buttonText: "Start Free Trial",
      href: "/sign-up",
      isPopular: false,
    },
    {
      name: "PRO",
      price: "69",
      yearlyPrice: "49",
      period: "per month",
      features: [
        "Unlimited Shorts generation",
        "AI-powered captions",
        "4K exports",
        "Premium templates",
        "Brand watermark removal",
        "Priority support",
        "Batch processing",
      ],
      description: "Perfect for content creators & businesses",
      buttonText: "Get Started",
      href: "/sign-up",
      isPopular: true,
    },
    {
      name: "BUSINESS",
      price: "199",
      yearlyPrice: "159",
      period: "per month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom branding",
        "API access for automation",
        "Dedicated account manager",
        "Custom workflow automation",
        "24/7 priority support",
      ],
      description: "For agencies & businesses scaling content",
      buttonText: "Contact Sales",
      href: "/contact",
      isPopular: false,
    },
  ];
  const heroProps = {
    badge: {
      text: "Revolutionizing Shorts Creation",
      action: {
        text: "Learn more",
        href: "/docs"
      }
    },
    title: "Create, Caption & Upload Shorts in Seconds",
    description: "Premium UI components built with React and Tailwind CSS. Save time and ship your next project faster with our ready-to-use components.",
    actions: [
      {
        text: "Get Started",
        href: "/docs/getting-started",
        variant: "default"
      },
      {
        text: "GitHub",
        href: "https://github.com/your-repo",
        variant: "glow",
        icon: <FaGithub className="h-5 w-5" />
      }
    ],
    image: {
      light: "/images/lumeo-dark.png",
      dark: "/images/lumeo-dark.png",
      alt: "Lumeo Platform Preview"
    }
  };

  const testimonials = [
    {
      quote: "Lumeo has completely transformed how we create and manage our social media content. The AI-powered features are game-changing!",
      name: "Sarah Johnson",
      designation: "Content Creator",
      src: "/images/image.webp"
    },
    {
      quote: "The speed and efficiency of Lumeo's platform have helped us scale our content production by 300%. It's an essential tool for modern creators.",
      name: "Michael Chen",
      designation: "Digital Marketing Director",
      src: "/images/image2.webp"
    },
    {
      quote: "As a solo Founder, Suhaib is a Founder of multiple startups and a tech enthisiast who likes this.",
      name: "Suhaib SZ",
      designation: "Founder",
      src: "/images/suhaib.jpg"
    }
  ];

  return (
    <div>
      <Header1 />
      <HeroSection {...heroProps} />
      <ContainerScrollAnimation />
      <FeaturesSectionWithHoverEffects />
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      <Pricing 
        plans={demoPlans}
        title="Simple, Transparent Pricing"
        description="Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support."
      />
      <Faq3 {...demoData} />;
      <Footerdemo />
    </div>
    
  );
}

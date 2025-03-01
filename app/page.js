import { HeroSection } from "@/components/hero-section";
import { Header1 } from "@/components/ui/header";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons
import { ContainerScrollAnimation } from "@/components/ui/container-scroll-animation";
import { FeaturesSectionWithHoverEffects } from "@/components/feature-section-with-hover-effects";
import { WorldMap } from "@/components/ui/world-map";

export default function Home() {
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

  return (
    <div>
      <Header1 />
      <HeroSection {...heroProps} />
      <ContainerScrollAnimation />
      <FeaturesSectionWithHoverEffects />
      <WorldMap
        dots={[
          {
            start: { lat: 40, lng: -74 },
            end: { lat: 51, lng: 0 },
          },
        ]}
      />
    </div>
  );
}

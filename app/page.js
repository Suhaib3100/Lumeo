import { Header1 } from "@/components/ui/header";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { FeaturesSectionWithHoverEffects } from "@/components/feature-section-with-hover-effects";

export default function Home() {
  return (
    <div>
      <Header1 />
      <ContainerScroll
        titleComponent={
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black dark:text-white mb-4 mt-8">
            Build faster with <span className="text-blue-500">beautiful components</span>
          </h1>
        }
      >
        <div className="flex items-center justify-center h-full mt-12">
          <img 
            src="/images/lumeo-dark.png" 
            alt="Lumeo Dashboard" 
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
        </div>
      </ContainerScroll>

      <FeaturesSectionWithHoverEffects />
      <div className=" py-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Remote{" "}
      
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Break free from traditional boundaries. Work from anywhere, at the
          comfort of your own studio apartment. Perfect for Nomads and
          Travellers.
        </p>
      </div>
    </div>
      </div>
  );
}

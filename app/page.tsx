
import Hero from "@/components/hero";
import Initiative from "@/components/initiative";
import Policymakers from "@/components/policymakers";
import YouthResources from "@/components/resources";
import YouthVoices from "@/components/youth-voices";
import ScrollToNextSection from "@/components/scroll-to-next";



export default function Home() {
  return (
    <main>
      <Hero />
      <Initiative />
      <YouthVoices />
      <Policymakers />
      <YouthResources />
      
      {/* Add ScrollToNextSection component at the page level */}
      <ScrollToNextSection />
    </main>
  );
}

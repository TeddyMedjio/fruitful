import HeroSection from "@/components/(acceuil)/hero-section";
import Professionals from "@/components/(acceuil)/Professionals";
import SectionControl from "@/components/(acceuil)/section-control";
import SectionGuide from "@/components/(acceuil)/section_guide";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <SectionControl />
        <SectionGuide />
        <Professionals />
      </main>
    </>
  );
}

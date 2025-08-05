import HeroSection from "@/components/(acceuil)/hero-section";
import Money from "@/components/(acceuil)/money";
import Professionals from "@/components/(acceuil)/Professionals";
import Quality from "@/components/(acceuil)/quality";
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
        {/* <Money /> */}
        <Quality />
      </main>
    </>
  );
}

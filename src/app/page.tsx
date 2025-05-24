import Image from "next/image";
import { ppnuemontrealbold } from "./font";
import HeroSection from "@/components/(acceuil)/hero-section";
import SectionControl from "@/components/(acceuil)/section-control";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <SectionControl />
      </main>
    </>
  );
}

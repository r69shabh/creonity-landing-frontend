import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { EditorialStatement } from "@/components/sections/EditorialStatement";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ForCreatorsAndBrands } from "@/components/sections/ForCreatorsAndBrands";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <EditorialStatement />
        <HowItWorks />
        <ForCreatorsAndBrands />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

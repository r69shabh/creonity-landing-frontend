import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyCreonity } from "@/components/sections/WhyCreonity";
import { ProductPreview } from "@/components/sections/ProductPreview";
import { ForCreatorsAndBrands } from "@/components/sections/ForCreatorsAndBrands";
import { TrustMetrics } from "@/components/sections/TrustMetrics";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <WhyCreonity />
        <ProductPreview />
        <section id="for-creators-and-brands">
          <ForCreatorsAndBrands />
        </section>
        <TrustMetrics />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

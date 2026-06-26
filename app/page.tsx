import { BrandStory } from "@/components/BrandStory";
import { Destinations } from "@/components/Destinations";
import { FirstCircle } from "@/components/FirstCircle";
import { FlightExperience } from "@/components/FlightExperience";
import { FlightSearch } from "@/components/FlightSearch";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WaitlistCTA } from "@/components/WaitlistCTA";
import { WhyNovin } from "@/components/WhyNovin";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FlightSearch />
        <WhyNovin />
        <Destinations />
        <FlightExperience />
        <FirstCircle />
        <BrandStory />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}

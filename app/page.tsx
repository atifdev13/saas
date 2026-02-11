import AISolution from "@/components/home/ai-solution";
import Apart from "@/components/home/apert";
import Calling from "@/components/home/calling";
import ScalingCompanies from "@/components/home/carousel-top-section";
import Collab from "@/components/home/collab";
import Deliver from "@/components/home/deliver";
import Effort from "@/components/home/effort";
import FAQ from "@/components/home/faq";
import Feedback from "@/components/home/feedback";
import GetInTouch from "@/components/home/get-in-touch";
import HeroSection from "@/components/home/hero-section";
import Pricing from "@/components/home/pricing";
import Services from "@/components/home/services";
import SleekAndEffort from "@/components/home/sleek-and-effort";
import Footer from "@/components/shared/footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ScalingCompanies />
      <Services />
      <Effort />
      <Collab />
      <Apart />
      <Deliver />
      <SleekAndEffort />
      <AISolution />
      <Calling />
      <Pricing />
      <Feedback />
      <FAQ />
      <GetInTouch />
      <Footer />
    </div>
  );
}

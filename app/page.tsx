import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OrchardSection from "@/components/OrchardSection";
import LaplaceSection from "@/components/LaplaceSection";
import FocusAreasSection from "@/components/FocusAreasSection";
import ThesisSection from "@/components/ThesisSection";
import TerminalFooter from "@/components/TerminalFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      {/* <OrchardSection /> */}
      <LaplaceSection />
      <FocusAreasSection />
      <ThesisSection />
      <TerminalFooter />
    </div>
  );
}

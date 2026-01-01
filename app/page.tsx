import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OrchardSection from "@/components/OrchardSection";
import FocusAreasSection from "@/components/FocusAreasSection";
import ThesisSection from "@/components/ThesisSection";
import TerminalFooter from "@/components/TerminalFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <OrchardSection />
      <FocusAreasSection />
      <ThesisSection />
      <TerminalFooter />
    </div>
  );
}

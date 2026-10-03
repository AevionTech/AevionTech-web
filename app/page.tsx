import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MosySection from "@/components/MosySection";
import FocusAreasSection from "@/components/FocusAreasSection";
import ThesisSection from "@/components/ThesisSection";
import TerminalFooter from "@/components/TerminalFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MosySection />
      <FocusAreasSection />
      <ThesisSection />
      <TerminalFooter />
    </div>
  );
}

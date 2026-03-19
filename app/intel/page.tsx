import Link from "next/link";
import Navbar from "@/components/Navbar";
import TerminalFooter from "@/components/TerminalFooter";
import { intelEntries } from "./_data";

export const metadata = {
  title: "Intel | Aevion Technology Inc.",
  description:
    "Research notes, technical postmortems, and strategic analysis from the Aevion network.",
};

export default function IntelPage() {
  return (
    <div className="min-h-screen bg-[#000000]">
      <Navbar />

      <main className="pt-32 pb-32">
        <div className="container mx-auto px-6">
          <div className="border-b border-[#666666]/30 pb-8 mb-0">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[10px] text-[#666666] uppercase tracking-[0.2em]">
                SYSTEM // INTEL FEED
              </span>
            </div>
            <h1 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Intel
            </h1>
            <p className="font-mono text-sm text-[#666666] mt-4 max-w-xl leading-relaxed">
              Research notes, technical postmortems, and strategic analysis from
              the Aevion network.
            </p>
          </div>

          <div className="grid grid-cols-[100px_1fr_140px_80px] md:grid-cols-[120px_1fr_160px_100px] border-b border-[#666666]/20 py-3">
            <span className="font-mono text-[9px] text-[#666666] uppercase tracking-[0.15em]">
              Date
            </span>
            <span className="font-mono text-[9px] text-[#666666] uppercase tracking-[0.15em]">
              Entry
            </span>
            <span className="font-mono text-[9px] text-[#666666] uppercase tracking-[0.15em] text-right">
              Sector
            </span>
            <span className="font-mono text-[9px] text-[#666666] uppercase tracking-[0.15em] text-right">
              Read
            </span>
          </div>

          <div>
            {intelEntries.map((entry) => (
              <Link
                key={entry.id}
                href={`/intel/${entry.id}`}
                className="group grid grid-cols-[100px_1fr_140px_80px] md:grid-cols-[120px_1fr_160px_100px] border-b border-[#666666]/10 py-5 transition-all duration-200 hover:bg-[#080808] hover:border-l-2 hover:border-l-foreground hover:pl-4"
              >
                <span className="font-mono text-xs text-[#666666] tabular-nums self-start pt-0.5">
                  {entry.date}
                </span>
                <span className="font-sans text-sm md:text-base text-foreground leading-snug pr-6 group-hover:text-foreground transition-colors">
                  {entry.title}
                </span>
                <span className="font-mono text-[10px] text-[#666666] self-start pt-1 text-right tracking-wider">
                  [{entry.category}]
                </span>
                <span className="font-mono text-[10px] text-[#666666] self-start pt-1 text-right">
                  {entry.readTime}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-[#666666]/20 pt-6">
            <span className="font-mono text-[10px] text-[#666666]">
              {intelEntries.length} ENTRIES // ALL SECTORS
            </span>
            <span className="font-mono text-[10px] text-[#666666]">
              LAST UPDATED: 2025.03.14
            </span>
          </div>
        </div>
      </main>

      <TerminalFooter />
    </div>
  );
}


import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import TerminalFooter from "@/components/TerminalFooter";
import { intelArticles } from "../_data";

export const dynamicParams = true;

export default function IntelArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = intelArticles[params.slug];

  if (!article) notFound();

  return (
    <div className="min-h-screen bg-[#000000]">
      <Navbar />

      <main className="pt-32 pb-32">
        <article className="max-w-[700px] mx-auto px-6">
          <div className="flex items-center justify-between border border-[#666666]/20 px-4 py-2.5 mb-12">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[9px] text-[#666666] uppercase tracking-[0.2em]">
                System Status: Reading
              </span>
            </div>
            <span className="font-mono text-[9px] text-[#666666] uppercase tracking-[0.15em]">
              {article.readTime}
            </span>
          </div>

          <Link
            href="/intel"
            className="inline-flex items-center gap-2 font-mono text-[10px] text-[#666666] hover:text-foreground transition-colors mb-10 uppercase tracking-[0.15em]"
          >
            <ArrowLeft size={12} />
            INTEL FEED
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-xs text-[#666666] tabular-nums">
              {article.date}
            </span>
            <span className="font-mono text-[10px] text-[#666666] tracking-wider">
              [{article.category}]
            </span>
          </div>

          <h1 className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground tracking-tight leading-tight mb-12">
            {article.title}
          </h1>

          <div className="w-full h-px bg-[#666666]/20 mb-12" />

          <div className="space-y-6">
            {article.content.map((paragraph, i) => (
              <p
                key={i}
                className="font-sans text-[15px] text-[#cccccc] leading-[1.75]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {article.codeSnippet && (
            <div className="mt-12 mb-12">
              <div className="flex items-center gap-2 border border-[#666666]/20 border-b-0 px-4 py-2">
                <span className="font-mono text-[9px] text-[#666666] uppercase tracking-[0.15em]">
                  {article.codeSnippet.lang}
                </span>
                <span className="font-mono text-[9px] text-[#666666]">//</span>
                <span className="font-mono text-[9px] text-[#666666] uppercase tracking-[0.15em]">
                  SNIPPET
                </span>
              </div>
              <pre className="border border-[#666666]/20 bg-[#060606] p-5 overflow-x-auto">
                <code className="font-mono text-xs text-[#999999] leading-relaxed whitespace-pre">
                  {article.codeSnippet.code}
                </code>
              </pre>
            </div>
          )}

          <div className="mt-16 pt-8 border-t border-[#666666]/20 flex items-center justify-between">
            <span className="font-mono text-[9px] text-[#666666] uppercase tracking-[0.15em]">
              END OF ENTRY
            </span>
            <Link
              href="/intel"
              className="font-mono text-[10px] text-[#666666] hover:text-foreground transition-colors uppercase tracking-[0.15em]"
            >
              ← BACK TO FEED
            </Link>
          </div>
        </article>
      </main>

      <TerminalFooter />
    </div>
  );
}


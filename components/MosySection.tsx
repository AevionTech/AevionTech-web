import WaitlistForm from "@/components/WaitlistForm";

export default function MosySection() {
  return (
    <section id="mosy" className="relative bg-secondary py-24 lg:py-32 scroll-mt-24">
      <div className="container mx-auto px-6">
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-12">
          [ CURRENT FLAGSHIP ]
        </p>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          <div className="space-y-6">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Mosy<span className="text-accent">.</span>
            </h2>
            <p className="font-mono text-xs text-accent uppercase tracking-widest">
              In development / Coming soon
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg">
              The next chapter from Aevion Technology. Be among the first to
              experience Mosy.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
              Join the waitlist for early access news and launch updates.
              We’ll let you know when Mosy is ready for you.
            </p>
          </div>
          <div id="waitlist" className="border border-border bg-background p-6 sm:p-8 scroll-mt-32">
            <h3 className="text-2xl font-semibold mb-3">Get early access</h3>
            <p className="text-muted-foreground text-sm mb-8">
              Leave your email to join the Mosy waitlist.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}

import { marqueePartners } from "../../data/siteContent";

export default function BannerMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-border-muted bg-elevate/35 py-4 md:py-5">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[10%] bg-gradient-to-r from-canvas to-transparent sm:w-[12%]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[10%] bg-gradient-to-l from-canvas to-transparent sm:w-[12%]"
        aria-hidden
      />
      <div className="animate-marquee flex w-max min-w-full gap-12 hover:[animation-play-state:paused] md:gap-16">
        {[0, 1].map((dup) =>
          marqueePartners.map((name, index) => (
            <div
              key={`${dup}-${name}-${index}`}
              className="flex items-center gap-3 whitespace-nowrap text-[0.8125rem] font-extrabold uppercase tracking-[0.14em] text-fg-muted"
            >
              {name}
              <span className="text-accent/90" aria-hidden>
                ◆
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

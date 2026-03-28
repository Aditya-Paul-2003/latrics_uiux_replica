import { Layout, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { industryCopy, industryTabs } from "../../data/siteContent";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import Tag from "../common/Tag";

export default function Industries({ activeTab, setActiveTab, industryImages }) {
  return (
    <Section id="industries" variant="default">
      <Container>
        <SectionHeading
          align="center"
          className="mx-auto mb-10 max-w-2xl md:mb-12"
          eyebrow={
            <div className="flex justify-center">
              <Tag icon={Layout}>Industries</Tag>
            </div>
          }
          title="Solutions tailored for every frontier"
          description="At Latrics, we build precision-driven LiDAR and aerospace solutions that help industries operate smarter."
        />

        <div
          className="mx-auto mb-8 flex max-w-full flex-wrap justify-center gap-2 rounded-full border border-border bg-elevate/60 p-1.5 sm:mb-10 sm:gap-2 sm:p-2"
          role="tablist"
          aria-label="Industry sectors"
        >
          {industryTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-2.5 text-sm font-extrabold transition-all duration-200 sm:px-5 sm:py-3 ${
                activeTab === tab
                  ? "bg-gradient-to-br from-brand-softer to-accent-glow text-fg shadow-[inset_0_1px_0_rgb(255_255_255_/_0.06)]"
                  : "text-fg-secondary hover:bg-surface/50 hover:text-fg"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative aspect-[16/11] min-h-[360px] overflow-hidden rounded-[var(--radius-card-lg)] border border-border shadow-card sm:min-h-[440px] lg:aspect-auto lg:h-[600px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeTab}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              src={industryImages[activeTab]}
              alt={activeTab}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 flex flex-col justify-end gap-5 bg-gradient-to-t from-canvas-deep/94 via-canvas-deep/42 to-transparent p-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6 sm:p-8 md:p-10">
            <div className="max-w-xl text-left">
              <Tag className="mb-2 border-border-strong bg-canvas-deep/50 text-fg">Active sector</Tag>
              <h3 className="font-display mt-3 text-title-2 text-fg">{industryCopy[activeTab].title}</h3>
              <p className="mt-3 text-body-lg text-fg-secondary">{industryCopy[activeTab].description}</p>
              <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                {["Precision", "Autonomy", "Scale"].map((t) => (
                  <span
                    key={t}
                    className="inline-flex rounded-full border border-border-strong bg-canvas-deep/40 px-2.5 py-1 text-[0.625rem] font-extrabold uppercase tracking-[0.12em] text-fg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex shrink-0 justify-end">
              <div className="grid size-14 place-items-center rounded-full border border-border-strong bg-fg/[0.1] text-fg transition-colors hover:bg-fg/[0.14] sm:size-16">
                <ArrowRight className="size-6 -rotate-45" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

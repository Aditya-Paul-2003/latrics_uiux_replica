import React, { memo } from "react";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Card from "../common/Card";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionHeading from "../common/SectionHeading";
import Tag from "../common/Tag";

const MilestoneCard = memo(({ stat, variants }) => (
  <motion.div variants={variants} whileHover={{ y: -2 }} className="h-full min-h-0">
    <Card
      variant="telemetry"
      className="relative flex h-full min-h-[148px] flex-col items-center justify-center px-5 py-8 text-center transition-[border-color,box-shadow] duration-200 hover:border-border-strong sm:min-h-[156px] sm:px-6 sm:py-9"
    >
      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="font-display text-[clamp(2rem,4.2vw,3rem)] font-extrabold tracking-[0.02em] text-fg"
      >
        {stat.value}
      </motion.div>
      <div className="mt-2.5 max-w-[12rem] text-[0.6875rem] font-semibold uppercase leading-snug tracking-[0.14em] text-fg-muted sm:max-w-none sm:text-[0.75rem]">
        {stat.label}
      </div>
    </Card>
  </motion.div>
));

export default function Milestones({ live, staggerContainer, staggerItem }) {
  const stats = (live.metrics || []).map((metric) => ({
    id: metric.id,
    label: metric.label,
    value: `${metric.value}${metric.unit}`
  }));

  return (
    <Section variant="default" className="bg-canvas">
      <Container>
        <SectionHeading
          eyebrow={<Tag icon={ShieldCheck}>Milestones</Tag>}
          title="Our global impact in numbers"
          description="Live operational telemetry gives teams a quick read on platform health, throughput, and response performance."
        />

        {live.error ? (
          <p className="mt-2 rounded-2xl border border-brand/20 bg-brand-softer px-4 py-3.5 text-center text-sm text-danger-fg">
            Live data temporarily unavailable.
          </p>
        ) : null}

        {stats.length > 0 ? (
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-4"
          >
            {stats.map((stat) => (
              <MilestoneCard key={stat.id} stat={stat} variants={staggerItem} />
            ))}
          </motion.div>
        ) : !live.error ? (
          <p className="mt-2 rounded-2xl border border-border-muted bg-elevate/50 px-4 py-3.5 text-center text-sm text-fg-muted">
            Loading live metrics…
          </p>
        ) : null}
      </Container>
    </Section>
  );
}

import { Grid, ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { caseStudies } from "../../data/siteContent";
import Button from "../common/Button";
import Container from "../common/Container";
import Section from "../common/Section";
import Tag from "../common/Tag";

export default function CaseStudies({ staggerContainer, staggerItem }) {
  return (
    <Section variant="subtle">
      <Container>
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:mb-12 sm:flex-row sm:items-end">
          <div className="max-w-2xl space-y-4">
            <Tag icon={Grid}>Case studies</Tag>
            <h2 className="text-title-1 text-fg">Real-world impact of Latrics solutions</h2>
          </div>
          <Button as="a" href="#industries" variant="secondary" className="shrink-0">
            Resource hub <ArrowRight className="size-4" aria-hidden />
          </Button>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-70px" }}
          className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4"
        >
          {caseStudies.map((item) => (
            <motion.article
              key={item.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="group relative min-h-[360px] overflow-hidden rounded-[var(--radius-card-lg)] border border-border shadow-card transition-[border-color,box-shadow] duration-200 hover:border-border-strong hover:shadow-[0_28px_64px_rgb(0_0_0_/_0.42)] sm:min-h-[400px] lg:min-h-[420px]"
            >
              <img src={item.img} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-canvas-deep/96 via-canvas-deep/45 to-fg/[0.04]" />
              <div className="absolute inset-x-4 bottom-4 flex flex-col sm:inset-x-5 sm:bottom-5">
                <span className="mb-1.5 inline-block text-[0.6875rem] font-extrabold uppercase tracking-[0.1em] text-fg/65">
                  {item.meta}
                </span>
                <h3 className="font-display text-lg font-bold text-fg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg/78">{item.desc}</p>
                <div className="ml-auto mt-3 grid size-10 place-items-center rounded-full border border-border-strong bg-fg/[0.12] text-fg transition-colors group-hover:bg-fg/[0.2]">
                  <ChevronRight className="size-[18px]" aria-hidden />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

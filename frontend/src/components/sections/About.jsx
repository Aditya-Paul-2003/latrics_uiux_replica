import { Grid, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { aboutFeatures } from "../../data/siteContent";
import Button from "../common/Button";
import Card from "../common/Card";
import Container from "../common/Container";
import Section from "../common/Section";
import Tag from "../common/Tag";

export default function About({ fadeInUp }) {
  return (
    <Section id="about" variant="default">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...fadeInUp} className="flex flex-col gap-6 md:gap-8">
            <Tag icon={Grid}>About Latrics</Tag>
            <h2 className="text-title-1 text-fg">The intelligence layer for industrial operations</h2>
            <p className="max-w-xl text-body-lg text-fg-secondary">
              We fuse advanced drone hardware with proprietary AI analytics to give manufacturer and facility operators real-time visibility, safer inspections, and data-driven decision-making at scale.
            </p>

            <ul className="grid gap-4">
              {aboutFeatures.map((text) => (
                <li key={text} className="flex gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-lg bg-gradient-to-b from-brand to-brand-deep shadow-brand">
                    <Check className="size-3.5 text-white" strokeWidth={2.5} aria-hidden />
                  </span>
                  <p className="text-[0.9375rem] leading-relaxed text-fg">{text}</p>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 pt-2 min-[480px]:flex-row min-[480px]:flex-wrap">
              <Button as="a" href="#simulation" variant="primary">
                Our technology <ArrowRight className="size-4" aria-hidden />
              </Button>
              <Button as="a" href="#contact" variant="secondary">
                Safety standards <ArrowRight className="size-4" aria-hidden />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card variant="elevated" className="relative min-h-[300px] overflow-hidden p-4 sm:min-h-[380px] lg:min-h-[420px] lg:p-5">
              <div
                className="pointer-events-none absolute -bottom-1/4 -right-1/5 h-56 w-56 rounded-full bg-brand-softer blur-3xl"
                aria-hidden
              />
              <img
                src="/drone_sensor.png"
                alt="Industrial sensor detail"
                className="relative z-[1] h-full min-h-[260px] w-full rounded-[var(--radius-card)] object-cover opacity-[0.92] sm:min-h-[340px]"
              />
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}

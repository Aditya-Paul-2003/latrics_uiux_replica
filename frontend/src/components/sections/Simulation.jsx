import { useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { simulationStats } from "../../data/siteContent";
import Card from "../common/Card";
import Container from "../common/Container";
import Section from "../common/Section";
import Tag from "../common/Tag";

export default function Simulation() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="simulation" variant="band">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(300px,1.12fr)] lg:gap-14">
          <div className="flex flex-col gap-6 md:gap-8">
            <Tag icon={Play}>3D simulation</Tag>
            <h2 className="text-title-1 max-w-xl text-fg">Advanced aerospace modeling and verification</h2>
            <p className="max-w-xl text-body-lg text-fg-secondary">
              Our simulation stack turns raw inspection data into navigable digital twins, helping teams validate routes, rehearse maintenance windows, and prevent expensive blind spots before field deployment.
            </p>
            <ul className="grid gap-3">
              {simulationStats.map((stat) => (
                <li key={stat.label}>
                  <Card variant="flat" className="flex items-center justify-between gap-4 px-4 py-3.5 sm:px-5 sm:py-4">
                    <span className="text-sm font-medium text-fg-secondary">{stat.label}</span>
                    <strong className="font-display text-lg font-bold text-fg sm:text-xl">{stat.value}</strong>
                  </Card>
                </li>
              ))}
            </ul>
          </div>

          <Card
            variant="elevated"
            className="relative flex min-h-[380px] items-center justify-center overflow-hidden p-6 sm:min-h-[460px] sm:p-8 lg:min-h-[500px]"
          >
            <div
              className="pointer-events-none absolute inset-4 rounded-2xl border border-border-muted sm:inset-5"
              aria-hidden
            />
            <motion.img
              animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              src="/drone_simulation.png"
              className="relative z-[1] max-w-[min(100%,520px)] drop-shadow-[0_12px_32px_rgb(224_50_40_/_0.12)]"
              alt="3D simulation: logistics drone in an automated warehouse environment"
            />
          </Card>
        </div>
      </Container>
    </Section>
  );
}

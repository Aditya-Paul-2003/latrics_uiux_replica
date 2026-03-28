import { useReducedMotion } from "framer-motion";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";
import { heroBadges, heroMetrics } from "../../data/siteContent";
import Button from "../common/Button";
import Card from "../common/Card";
import Container from "../common/Container";
import Tag from "../common/Tag";

export default function Hero({ staggerContainer, staggerItem }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100dvh] min-h-[640px] flex-col justify-center overflow-hidden pb-16 pt-28 sm:pt-32 md:pb-20 md:pt-36 lg:pt-40">
      <div className="hero-backdrop pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute bottom-[8%] left-[55%] -z-0 h-72 w-72 rounded-full bg-brand-glow blur-3xl sm:h-80 sm:w-80"
        aria-hidden
      />

      <Container className="relative z-[1]">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex max-w-[38rem] flex-col gap-6 md:gap-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.45 }}
            >
              <Tag icon={Zap}>Leading industrial innovation</Tag>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.55 }}
              className="text-display text-fg"
            >
              Autonomy built for the world beyond the lab
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.5 }}
              className="max-w-xl text-body-lg text-fg-secondary"
            >
              Latrics blends drone hardware, LiDAR mapping, and AI analytics into one operational layer for aerospace, energy, and digital infrastructure teams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.45 }}
              className="flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap sm:gap-4"
            >
              <Button as="a" href="#contact" variant="primary" className="w-full min-w-[10rem] sm:w-auto">
                Book a live demo
              </Button>
              <Button as="a" href="#industries" variant="secondary" className="w-full min-w-[10rem] sm:w-auto">
                Explore platform
              </Button>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 sm:gap-3"
            >
              {heroBadges.map((text) => (
                <motion.div
                  key={text}
                  variants={staggerItem}
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  className="inline-flex cursor-default items-center gap-2 rounded-full border border-border bg-elevate/70 px-3.5 py-2.5 text-sm font-semibold text-fg-secondary transition-colors duration-200 hover:border-border-strong hover:bg-elevate/90"
                >
                  <span
                    className="size-2 shrink-0 rounded-full bg-gradient-to-b from-brand to-accent shadow-[0_0_14px_rgb(224_50_40_/_0.32)]"
                    aria-hidden
                  />
                  {text}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.55 }}
              className="grid gap-3 sm:grid-cols-3 sm:gap-4"
            >
              {heroMetrics.map((metric) => (
                <Card
                  key={metric.label}
                  variant="glass"
                  className="border-t-accent/30 p-4 sm:p-5"
                >
                  <strong className="font-display mb-1 block text-2xl font-bold tracking-tight text-fg">{metric.value}</strong>
                  <span className="text-sm leading-snug text-fg-secondary">{metric.label}</span>
                </Card>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 28 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex min-h-[380px] flex-col items-center justify-center md:min-h-[480px] lg:min-h-[520px]"
          >
            <motion.div
              className="relative w-full max-w-[min(100%,520px)]"
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Card variant="elevated" className="relative border-border-strong p-6 sm:p-8 md:p-9">
                <div
                  className="pointer-events-none absolute inset-5 rounded-2xl border border-border sm:inset-4"
                  aria-hidden
                />
                <img
                  src="/drone_hero.png"
                  className="relative z-[1] w-full drop-shadow-[0_16px_40px_rgb(224_50_40_/_0.15)]"
                  alt="Latrics industrial drone"
                />
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute right-0 top-[6%] z-[2] hidden w-[min(100%,220px)] min-[1100px]:block min-[1100px]:-right-[2%]"
            >
              <Card variant="inset" className="p-4">
                <strong className="font-display text-base font-bold text-fg">Live flight grid</strong>
                <span className="mt-1 block text-xs leading-relaxed text-fg-secondary">12 active sectors monitored</span>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.78, duration: 0.5 }}
              className="absolute bottom-[6%] left-0 z-[2] hidden w-[min(100%,220px)] min-[1100px]:block min-[1100px]:-left-[2%]"
            >
              <Card variant="inset" className="p-4">
                <strong className="font-display text-base font-bold text-fg">LiDAR mesh</strong>
                <span className="mt-1 block text-xs leading-relaxed text-fg-secondary">Sub-centimeter terrain fidelity</span>
              </Card>
            </motion.div>

            <div className="mt-6 grid w-full max-w-[520px] gap-3 min-[1100px]:hidden">
              <Card variant="inset" className="p-4">
                <strong className="font-display text-sm font-bold text-fg">Live flight grid</strong>
                <span className="mt-1 block text-xs text-fg-secondary">12 active sectors monitored</span>
              </Card>
              <Card variant="inset" className="p-4">
                <strong className="font-display text-sm font-bold text-fg">LiDAR mesh</strong>
                <span className="mt-1 block text-xs text-fg-secondary">Sub-centimeter terrain fidelity</span>
              </Card>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

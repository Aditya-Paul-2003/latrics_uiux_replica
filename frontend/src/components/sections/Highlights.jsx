import { Zap } from "lucide-react";
import { motion } from "framer-motion";
import { highlightItems } from "../../data/siteContent";
import Container from "../common/Container";
import Section from "../common/Section";
import Tag from "../common/Tag";

export default function Highlights({ staggerContainer, staggerItem }) {
  return (
    <Section id="highlights" variant="default">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.55 }}
      >
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(300px,1.12fr)] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex max-w-lg flex-col gap-5 md:gap-6"
            >
              <Tag icon={Zap}>Highlights</Tag>
              <h2 className="text-title-1 text-fg">Latest breakthroughs in aerospace and LiDAR</h2>
              <p className="text-body-lg text-fg-secondary">
                Follow the newest deployments, partnerships, and platform wins shaping how industrial teams inspect, map, and monitor critical assets.
              </p>
              <p className="inline-flex w-fit rounded-full border border-border bg-elevate/70 px-3 py-2 text-xs font-semibold text-fg-secondary">
                Updated across aerospace, energy, and infrastructure programs
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-40px" }}
              className="grid gap-4 md:gap-5"
            >
              {highlightItems.map((item, index) => (
                <motion.article
                  key={index}
                  variants={staggerItem}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 420, damping: 28 }}
                  className={`grid gap-4 rounded-[var(--radius-card-lg)] border p-4 transition-shadow duration-200 sm:grid-cols-[minmax(120px,168px)_1fr] sm:gap-5 sm:p-5 ${
                    item.featured
                      ? "border-card-light-border bg-gradient-to-br from-card-light-from to-card-light-to text-card-light-fg shadow-soft"
                      : "border-border bg-gradient-to-b from-fg/[0.04] to-fg/[0.01] text-fg shadow-card hover:shadow-[0_24px_64px_rgb(0_0_0_/_0.38)]"
                  }`}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="h-32 w-full rounded-xl object-cover sm:h-[132px]"
                  />
                  <div className="flex flex-col justify-center gap-1">
                    <span
                      className={`text-[0.6875rem] font-extrabold uppercase tracking-[0.08em] ${
                        item.featured ? "text-card-light-muted" : "text-fg-muted"
                      }`}
                    >
                      {item.date}
                    </span>
                    <h3 className="font-display text-lg font-bold text-current sm:text-xl">{item.title}</h3>
                    <p
                      className={`text-sm leading-relaxed sm:text-[0.9375rem] ${
                        item.featured ? "text-card-light-body" : "text-fg-secondary"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </Container>
      </motion.div>
    </Section>
  );
}

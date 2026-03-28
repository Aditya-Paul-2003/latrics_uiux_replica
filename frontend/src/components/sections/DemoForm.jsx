import { useReducedMotion } from "framer-motion";
import { Cloud } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../common/Button";
import Card from "../common/Card";
import Container from "../common/Container";
import Section from "../common/Section";
import Tag from "../common/Tag";
import TextField from "../common/TextField";

export default function DemoForm({
  formData,
  setFormData,
  handleFormSubmit,
  isSubmitting,
  submitState
}) {
  const reduceMotion = useReducedMotion();
  const nameFieldId = "demo-name";
  const emailFieldId = "demo-email";
  const phoneFieldId = "demo-phone";

  const handleFieldChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  return (
    <Section id="contact" variant="default" spacing="sm" className="pb-16 md:pb-24">
      <Container>
        <Card variant="elevated" className="grid gap-10 p-6 md:gap-12 md:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,1.1fr)] lg:p-12">
          <div className="flex flex-col gap-5 md:gap-6">
            <Tag icon={Cloud}>Request a demo</Tag>
            <h2 className="font-display text-title-1 text-fg">We&apos;d love to show you around.</h2>
            <p className="max-w-lg text-body-lg text-fg-secondary">
              Book a walkthrough to see how Latrics can fit into your inspection, mapping, or monitoring workflow with a tailored operational demo.
            </p>
            <div className="relative mt-auto">
              <motion.img
                animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                src="/drone_inspection.png"
                className="relative z-[1] w-full rounded-2xl border border-border"
                alt="Drone inspection"
              />
              <div
                className="pointer-events-none absolute -bottom-[8%] left-[8%] right-[8%] -z-0 hidden h-24 rounded-full bg-brand-softer blur-2xl md:block"
                aria-hidden
              />
            </div>
          </div>

          <Card variant="inset" className="p-6 sm:p-8 md:p-9">
            <h3 className="font-display mb-8 text-title-2 text-fg">Get started</h3>
            <form onSubmit={handleFormSubmit} className="grid gap-5">
              <TextField
                id={nameFieldId}
                label="Name"
                placeholder="E.g. John Doe"
                value={formData.name}
                onChange={handleFieldChange("name")}
                autoComplete="name"
                required
              />
              <TextField
                id={emailFieldId}
                label="Email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleFieldChange("email")}
                autoComplete="email"
                required
              />
              <TextField
                id={phoneFieldId}
                label="Phone no."
                type="tel"
                placeholder="+91 00000 00000"
                value={formData.phone}
                onChange={handleFieldChange("phone")}
                autoComplete="tel"
                required
              />
              <Button type="submit" variant="primary" className="mt-1 w-full min-h-[52px] text-base" disabled={isSubmitting}>
                {isSubmitting ? "Processing…" : "Book demo"}
              </Button>
              {submitState.message ? (
                <p className={`text-sm ${submitState.type === "error" ? "text-danger-fg" : "text-success-fg"}`}>
                  {submitState.message}
                </p>
              ) : null}
            </form>
          </Card>
        </Card>
      </Container>
    </Section>
  );
}

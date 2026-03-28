import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Button from "../common/Button";
import Container from "../common/Container";
import { cn } from "../../lib/cn";

const links = [
  { href: "#top", label: "Home" },
  { href: "#simulation", label: "Simulation" },
  { href: "#highlights", label: "Highlights" },
  { href: "#industries", label: "Industries" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar({ isScrolled }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[padding,background-color,border-color,backdrop-filter] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isScrolled
          ? "border-b border-border-muted bg-canvas/82 py-3 backdrop-blur-xl backdrop-saturate-150"
          : "py-4 md:py-5"
      )}
    >
      <Container>
        <div
          className={cn(
            "flex min-h-[52px] items-center justify-between gap-3 rounded-full border px-3 py-2.5 transition-all duration-300 sm:gap-4 sm:px-4 sm:py-3 md:px-5",
            isScrolled
              ? "border-border bg-surface/45 backdrop-blur-md"
              : "border-transparent bg-canvas/40 backdrop-blur-sm"
          )}
        >
          <a href="#top" className="flex min-w-0 shrink-0 items-center gap-3 rounded-lg no-underline outline-none ring-canvas focus-visible:ring-2 focus-visible:ring-brand/40">
            <img
              src="/favicon.png"
              alt=""
              width={40}
              height={40}
              className="size-10 rounded-xl border border-border-strong object-cover shadow-soft"
            />
            <div className="flex min-w-0 flex-col gap-0.5 leading-none">
              <span className="font-display text-[0.95rem] font-bold tracking-[0.14em] text-fg sm:text-[1.05rem]">
                LATRICS
              </span>
              <span className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-fg-muted sm:text-[0.65rem]">
                Industrial Intelligence
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex lg:gap-2" aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group rounded-lg px-3 py-2 text-sm font-semibold text-fg-secondary no-underline transition-colors hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/35"
              >
                <span className="relative inline-block">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-brand to-accent transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                </span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-border bg-elevate/75 px-3 py-2 text-[0.6875rem] font-extrabold uppercase tracking-[0.07em] text-fg-secondary sm:flex">
              <span
                className="size-2 shrink-0 rounded-full bg-gradient-to-b from-brand to-accent shadow-[0_0_12px_rgb(224_50_40_/_0.35)]"
                aria-hidden
              />
              Live Ops
            </div>
            <Button
              as="a"
              href="#contact"
              variant="primary"
              className="hidden min-h-11 px-4 text-xs sm:inline-flex sm:px-5 sm:text-sm"
            >
              Contact <ArrowRight className="size-4 shrink-0 max-sm:hidden" aria-hidden />
            </Button>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border-strong bg-surface/55 text-fg transition-colors hover:bg-surface-hover/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" strokeWidth={2} /> : <Menu className="size-5" strokeWidth={2} />}
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-border-muted bg-canvas/96 backdrop-blur-xl backdrop-saturate-150 md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-4 py-3.5 text-base font-semibold text-fg-secondary no-underline transition-colors hover:bg-elevate/80 hover:text-fg"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <Button
                as="a"
                href="#contact"
                variant="primary"
                className="mt-2 w-full"
                onClick={() => setOpen(false)}
              >
                Contact us <ArrowRight className="size-4" aria-hidden />
              </Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

import { cn } from "../../lib/cn";

const shells = {
  default: "",
  elevate: "bg-elevate/50",
  band: "border-y border-border-muted bg-gradient-to-b from-elevate/35 via-elevate/20 to-transparent",
  subtle: "bg-gradient-to-b from-fg/[0.02] to-transparent"
};

const paddings = {
  default: "section-y",
  sm: "section-y-sm"
};

/**
 * Consistent section vertical padding + optional background variant.
 */
export default function Section({
  as: Comp = "section",
  variant = "default",
  spacing = "default",
  className,
  children,
  ...props
}) {
  return (
    <Comp
      className={cn(
        "scroll-mt-20 md:scroll-mt-24",
        paddings[spacing] ?? paddings.default,
        shells[variant] ?? shells.default,
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

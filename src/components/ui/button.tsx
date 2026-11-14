import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-transparent text-sm font-semibold tracking-tight whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "border-ink bg-coral text-white hover:bg-[#d63c1b]",
        ink: "border-transparent bg-ink text-white hover:bg-[#141b24]",
        sun: "border-transparent bg-sun text-ink hover:bg-[#f0b01a]",
        lagoon: "border-ink bg-transparent text-ink hover:bg-ink/5",
        outline: "border-ink bg-transparent text-ink hover:bg-ink/5",
        ghost:
          "border-transparent text-ink hover:bg-ink/5 aria-expanded:bg-ink/5",
        link: "h-auto rounded-none border-transparent px-0 text-lagoon-deep underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 gap-2 px-6 text-base",
        sm: "h-10 gap-1.5 px-4 text-sm",
        lg: "h-14 gap-2 px-7 text-lg",
        icon: "size-12",
        "icon-sm": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

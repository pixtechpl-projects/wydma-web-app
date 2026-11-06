import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-transparent bg-clip-padding text-sm font-semibold tracking-tight whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-ink bg-coral text-white shadow-[4px_4px_0_0_var(--ink)] hover:-translate-y-0.5 hover:bg-[#ff6840] hover:shadow-[6px_6px_0_0_var(--ink)]",
        sun: "border-ink bg-sun text-ink shadow-[4px_4px_0_0_var(--coral)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--coral)]",
        lagoon:
          "border-ink bg-lagoon-deep text-white shadow-[4px_4px_0_0_var(--sun)] hover:-translate-y-0.5 hover:bg-lagoon hover:shadow-[6px_6px_0_0_var(--sun)]",
        outline:
          "border-ink bg-paper text-ink shadow-[4px_4px_0_0_var(--sun)] hover:-translate-y-0.5 hover:bg-sun",
        ghost:
          "border-transparent text-ink hover:bg-blush aria-expanded:bg-blush",
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
  }
)

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
  )
}

export { Button, buttonVariants }

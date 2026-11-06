import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-13 w-full min-w-0 rounded-2xl border-2 border-ink/15 bg-white px-4 text-base text-ink shadow-[4px_4px_0_0_var(--sun)] transition-shadow outline-none placeholder:text-muted-foreground focus-visible:border-lagoon focus-visible:shadow-[4px_4px_0_0_var(--lagoon)] focus-visible:ring-3 focus-visible:ring-lagoon/25 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:shadow-[4px_4px_0_0_#f3b4ae] aria-invalid:ring-3 aria-invalid:ring-destructive/20",
        className
      )}
      {...props}
    />
  )
}

export { Input }

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "cn"

function NativeSelect({
  className,
  children,
  ...props
}: React.ComponentProps<"select">) {
  return (
    <div className="relative">
      <select
        data-slot="native-select"
        className={cn(
          "h-13 w-full appearance-none rounded-2xl border-2 border-ink/15 bg-white px-4 pr-11 text-base text-ink shadow-[4px_4px_0_0_var(--sun)] transition-shadow outline-none focus-visible:border-lagoon focus-visible:shadow-[4px_4px_0_0_var(--lagoon)] focus-visible:ring-3 focus-visible:ring-lagoon/25 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:shadow-[4px_4px_0_0_#f3b4ae]",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-ink"
      />
    </div>
  )
}

export { NativeSelect }

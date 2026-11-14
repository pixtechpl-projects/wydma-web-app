import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "cn";

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
          "h-13 w-full appearance-none rounded-2xl border border-ink/15 bg-white px-4 pr-11 text-base text-ink outline-none focus-visible:border-ink focus-visible:ring-3 focus-visible:ring-ink/15 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
          className,
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
  );
}

export { NativeSelect };

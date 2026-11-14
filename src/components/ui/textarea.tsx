import * as React from "react";
import { cn } from "cn";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-36 w-full rounded-2xl border border-ink/15 bg-white px-4 py-3 text-base leading-7 text-ink outline-none placeholder:text-muted-foreground focus-visible:border-ink focus-visible:ring-3 focus-visible:ring-ink/15 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };

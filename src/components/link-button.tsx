import type { VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "cn";

import { buttonVariants } from "@/components/ui/button";

export function LinkButton({
  href,
  children,
  className,
  variant,
  size,
}: {
  href: string;
  children: ReactNode;
  className?: string;
} & VariantProps<typeof buttonVariants>) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {children}
    </Link>
  );
}

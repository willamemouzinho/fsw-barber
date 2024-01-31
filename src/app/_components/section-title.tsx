import { ComponentProps } from "react";

export function SectionTitle({ children, ...props }: ComponentProps<"h2">) {
  return (
    <h2 className="text-third text-xs font-bold uppercase" {...props}>
      {children}
    </h2>
  );
}

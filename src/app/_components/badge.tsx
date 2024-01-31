import { ComponentProps } from "react";

export function Badge({ children, ...props }: ComponentProps<"div">) {
  const { variant } = props;

  if (variant === "avaliation") {
    return (
      <div
        className="bg-primary-dark/70 flex items-center justify-center gap-x-1 rounded-full px-2 py-[2px] text-xs font-bold backdrop-blur-sm"
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className="bg-primary-dark flex items-center justify-center gap-x-1 rounded-full px-2 py-[2px] text-xs font-bold text-primary"
      {...props}
    >
      {children}
    </div>
  );
}

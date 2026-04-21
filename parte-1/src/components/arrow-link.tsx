import ArrowIcon from "@/assets/icons/Arrow.svg";
import { cn } from "@/utils/cn";

type ArrowLinkProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
  variant?: "dark" | "inline" | "light";
};

const circleToneClasses = {
  dark: "bg-foreground text-primary",
  light: "bg-white text-foreground",
};

export const ArrowLink = ({
  children,
  className,
  href,
  variant = "dark",
}: ArrowLinkProps) => {
  if (variant === "inline") {
    return (
      <a
        href={href}
        className={cn(
          "inline-flex items-center gap-3 text-xl leading-none",
          className,
        )}
      >
        <span>{children}</span>
        <ArrowIcon className="size-6" />
      </a>
    );
  }

  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center gap-[15px] text-xl leading-none",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex size-[41px] items-center justify-center rounded-full",
          circleToneClasses[variant],
        )}
      >
        <ArrowIcon className={cn("size-5", circleToneClasses[variant])} />
      </span>

      <span>{children}</span>
    </a>
  );
};

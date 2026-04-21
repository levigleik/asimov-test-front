import { cn } from "@/utils/cn";

type SectionHeaderProps = {
  className?: string;
  description: string;
  title: string;
};

export const SectionHeader = ({
  className,
  description,
  title,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10",
        className,
      )}
    >
      <h2 className="w-fit rounded-[7px] bg-primary px-[7px] py-0.5 text-4xl leading-none font-medium lg:text-[40px]">
        {title}
      </h2>

      <p className="max-w-145 text-base leading-[1.5] lg:text-lg lg:leading-[1.28]">
        {description}
      </p>
    </div>
  );
};

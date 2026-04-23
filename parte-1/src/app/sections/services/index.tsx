import Image from "next/image";
import { ArrowLink } from "@/components/arrow-link";
import { Reveal } from "@/components/reveal";
import { SectionHeader } from "@/components/section-header";
import { serviceItems } from "@/data/landing-page";
import { cn } from "@/utils/cn";

const cardToneClasses = {
  dark: "bg-tertiary text-white",
  light: "bg-secondary text-foreground",
  primary: "bg-primary text-foreground",
};

const titleToneClasses = {
  primary: "bg-primary text-foreground",
  white: "bg-white text-foreground",
};

const defaultTitleToneByCardTone = {
  dark: "white",
  light: "primary",
  primary: "white",
} as const;

export const SectionServices = () => {
  return (
    <section
      id="services"
      className="flex min-h-screen w-full flex-col gap-10 lg:gap-17.5"
    >
      <Reveal>
        <SectionHeader
          title="Services"
          description="At our digital marketing agency, we offer a range of services to help
        businesses grow and succeed online. These services include:"
        />
      </Reveal>

      <div className="mt-10 grid gap-10 lg:mt-20 lg:grid-cols-2">
        {serviceItems.map((item, index) => {
          const titleTone =
            item.titleTone ?? defaultTitleToneByCardTone[item.cardTone];

          return (
            <Reveal key={item.title.join("-")} delay={index * 0.06}>
              <article
                className={cn(
                  "rounded-4xl border border-foreground px-8 py-8 shadow-[0_5px_0_0_var(--color-foreground)] lg:min-h-77.5 lg:rounded-[45px] lg:px-12.5 lg:py-12.5",
                  cardToneClasses[item.cardTone],
                )}
              >
                <div className="flex h-full flex-col items-center gap-8 lg:flex-row lg:justify-between">
                  <div className="contents lg:flex lg:max-w-55.25 lg:min-h-52.5 lg:flex-col lg:justify-between">
                    <h3 className="order-1 flex flex-col items-start text-[26px] leading-none font-medium lg:order-none lg:text-[30px]">
                      {item.title.map((line) => (
                        <span
                          key={line}
                          className={cn(
                            "rounded-[7px] px-1.75 py-0.5",
                            titleToneClasses[titleTone],
                          )}
                        >
                          {line}
                        </span>
                      ))}
                    </h3>

                    <ArrowLink
                      href="#case-studies"
                      variant={item.accent}
                      className={cn(
                        "order-3 lg:order-none",
                        item.accent === "light"
                          ? "text-white"
                          : "text-foreground",
                      )}
                    >
                      Learn more
                    </ArrowLink>
                  </div>

                  <div className="order-2 flex items-center lg:order-none">
                    <div className="w-full max-w-52.5">
                      <Image
                        src={item.image}
                        alt=""
                        aria-hidden="true"
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

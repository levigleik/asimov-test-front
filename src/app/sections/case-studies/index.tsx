import { ArrowLink } from "@/components/arrow-link";
import { SectionHeader } from "@/components/section-header";
import { caseStudyItems } from "@/data/landing-page";

export const SectionCaseStudies = () => {
  return (
    <section id="case-studies" className="page-shell mt-20 lg:mt-[140px]">
      <SectionHeader
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      <div className="overflow-hidden rounded-[32px] bg-tertiary lg:mt-20 lg:rounded-[45px]">
        <div className="flex flex-col lg:flex-row">
          {caseStudyItems.map((item, index) => (
            <div key={item.href} className="contents">
              <article className="flex gap-5 bg-tertiary px-8 py-10 text-white lg:flex-1 lg:px-[60px] lg:py-[70px]">
                <div className="flex flex-col gap-5">
                  <p className="max-w-[286px] text-lg leading-[1.4] lg:text-lg">
                    {item.description}
                  </p>

                  <ArrowLink
                    href={item.href}
                    variant="inline"
                    className="text-primary"
                  >
                    Learn more
                  </ArrowLink>
                </div>
              </article>

              {index < caseStudyItems.length - 1 ? (
                <div
                  aria-hidden="true"
                  className="hidden h-[186px] w-px shrink-0 self-center bg-white lg:block"
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

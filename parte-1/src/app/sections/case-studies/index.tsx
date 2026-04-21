import { ArrowLink } from "@/components/arrow-link";
import { SectionHeader } from "@/components/section-header";
import { caseStudyItems } from "@/data/landing-page";

export const SectionCaseStudies = () => {
  return (
    <section id="case-studies" className="page-shell mt-20 lg:mt-35">
      <SectionHeader
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      <div className="mt-10 overflow-hidden rounded-4xl bg-tertiary lg:mt-20 lg:rounded-[45px]">
        <div className="flex flex-col lg:flex-row">
          {caseStudyItems.map((item, index) => (
            <div key={item.href} className="contents">
              <article className="flex gap-5 bg-tertiary px-8 py-10 text-white lg:flex-1 lg:px-15 lg:py-17.5">
                <div className="flex flex-col gap-5">
                  <p className="max-w-71.5 text-lg leading-[1.4] lg:text-lg">
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
                  className="hidden h-46.5 w-px shrink-0 self-center bg-white lg:block"
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

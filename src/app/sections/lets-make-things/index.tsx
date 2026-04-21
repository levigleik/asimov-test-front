import Image from "next/image";

import ctaIllustration from "@/assets/images/cta-illustration.png";

const ctaButtonClasses =
  "mt-6 inline-flex items-center justify-center rounded-[14px] bg-foreground px-6 py-4 text-base text-white transition-transform duration-200 hover:-translate-y-0.5 lg:mt-[26px] lg:px-8.75 lg:py-5 lg:text-xl";

export const SectionLetsMakeThings = () => {
  return (
    <section id="cta" className="page-shell mt-20 lg:mt-[100px] lg:pb-8">
      <div className="relative gap-6.5 overflow-hidden rounded-[32px] bg-secondary px-8 py-10 lg:min-h-[347px] lg:overflow-visible lg:rounded-[45px] lg:p-[60px]">
        <div className="relative z-10 max-w-[500px]">
          <h3>Let&apos;s make things happen</h3>

          <p className="max-w-[500px] text-base leading-[1.5] lg:mt-[26px] lg:text-lg lg:leading-[1.28]">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>

          <a className={ctaButtonClasses} href="#hero">
            Get your free proposal
          </a>
        </div>

        <div className="pointer-events-none flex justify-end lg:absolute lg:top-1/2 lg:right-[60px] lg:z-0 lg:mt-0 lg:-translate-y-1/2">
          <Image
            src={ctaIllustration}
            alt=""
            aria-hidden="true"
            className="h-auto w-[240px] lg:w-[494px]"
          />
        </div>
      </div>
    </section>
  );
};

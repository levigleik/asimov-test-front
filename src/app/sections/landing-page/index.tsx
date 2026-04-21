import Image from "next/image";
import companyAmazon from "@/assets/images/Company-amazon.png";
import companyDribbble from "@/assets/images/Company-dribbble.png";
import companyHubSpot from "@/assets/images/Company-hub-spot.png";
import companyNetflix from "@/assets/images/Company-netflix.png";
import companyNotion from "@/assets/images/Company-notion.png";
import companyZoom from "@/assets/images/Company-zoom.png";
import illustration from "@/assets/images/Illustration-landing.png";
import { Navbar } from "@/components/navbar";

export const SectionLandingPage = () => {
  return (
    <section className="flex min-h-screen w-full flex-col gap-10 lg:gap-17.5">
      <Navbar />
      <div className="flex flex-1 flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-8 lg:gap-12">
        <div className="flex max-w-[531px] flex-col gap-6 lg:gap-8.75">
          <h1 className="text-balance leading-tight">
            Navigating the digital landscape for success
          </h1>
          <p className="max-w-[498px] text-xl leading-7">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button
            className="w-full cursor-pointer rounded-[14px] bg-tertiary px-6 py-4 text-white sm:w-fit lg:px-8.75 lg:py-5"
            type="button"
          >
            Book a consultation
          </button>
        </div>
        <Image
          src={illustration}
          alt="Illustration"
          priority
          className="h-auto w-full max-w-[340px] self-start md:max-w-[400px] md:shrink md:self-end lg:max-w-[600px]"
          sizes="(min-width: 1024px) 600px, (min-width: 768px) 40vw, (min-width: 640px) 340px, 78vw"
        />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 grayscale-100 sm:justify-between">
        <Image
          src={companyAmazon}
          alt="Amazon"
          className="h-8 w-auto sm:h-10 lg:h-12"
          sizes="120px"
        />
        <Image
          src={companyDribbble}
          alt="Dribbble"
          className="h-8 w-auto sm:h-10 lg:h-12"
          sizes="120px"
        />
        <Image
          src={companyNotion}
          alt="Notion"
          className="h-8 w-auto sm:h-10 lg:h-12"
          sizes="120px"
        />
        <Image
          src={companyHubSpot}
          alt="HubSpot"
          className="h-8 w-auto sm:h-10 lg:h-12"
          sizes="120px"
        />
        <Image
          src={companyNetflix}
          alt="Netflix"
          className="h-8 w-auto sm:h-10 lg:h-12"
          sizes="120px"
        />
        <Image
          src={companyZoom}
          alt="Zoom"
          className="h-8 w-auto sm:h-10 lg:h-12"
          sizes="120px"
        />
      </div>
    </section>
  );
};

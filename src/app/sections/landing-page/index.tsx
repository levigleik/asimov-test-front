import { Navbar } from "@/components/navbar";
import illustration from "@/assets/images/Illustration-landing.png";
import companyAmazon from "@/assets/images/Company-amazon.png";
import companyDribbble from "@/assets/images/Company-dribbble.png";
import companyNotion from "@/assets/images/Company-notion.png";
import companyHubSpot from "@/assets/images/Company-hub-spot.png";
import companyNetflix from "@/assets/images/Company-netflix.png";
import companyZoom from "@/assets/images/Company-zoom.png";

export const SectionLandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-360 gap-17.5">
      <Navbar />
      {/* Header */}
      <div className="flex flex-1 items-center justify-between">
        <div className="flex flex-col gap-8.75 max-w-132.5">
          <h1 className="text-6xl font-medium leading-[100%]">
            Navigating the digital landscape for success
          </h1>
          <p className="text-xl">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button
            className="py-5 px-8.75 rounded-[14px] gap-10 bg-tertiary text-white cursor-pointer w-fit"
            type="button"
          >
            Book a consultation
          </button>
        </div>
        <img src={illustration.src} alt="Illustration" className="h-150" />
      </div>
      {/* Logotypes */}
      <div className="flex justify-between grayscale-100">
        <img src={companyAmazon.src} alt="Amazon" className="h-12" />
        <img src={companyDribbble.src} alt="Dribbble" className="h-12" />
        <img src={companyNotion.src} alt="Notion" className="h-12" />
        <img src={companyHubSpot.src} alt="HubSpot" className="h-12" />
        <img src={companyNetflix.src} alt="Netflix" className="h-12" />
        <img src={companyZoom.src} alt="Zoom" className="h-12" />
      </div>
    </div>
  );
};

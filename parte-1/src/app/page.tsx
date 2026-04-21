import { SectionCaseStudies } from "./sections/case-studies";
import { SectionLandingPage } from "./sections/landing-page";
import { SectionLetsMakeThings } from "./sections/lets-make-things";
import { SectionServices } from "./sections/services";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-360 flex-col gap-18 px-4 py-6 sm:px-6 sm:py-8 lg:gap-24 lg:px-25 lg:py-10">
      <SectionLandingPage />
      <SectionServices />
      <SectionLetsMakeThings />
      <SectionCaseStudies />
    </main>
  );
}

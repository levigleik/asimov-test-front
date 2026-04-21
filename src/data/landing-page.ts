import type { StaticImageData } from "next/image";

import serviceBrowserWindow from "@/assets/images/service-browser-window-with-emoticon-likes-and-stars-around.png";
import serviceMagnifier from "@/assets/images/service-magnifier-web-search-with-elements.png";
import serviceManyBrowsers from "@/assets/images/service-many-browser-windows-with-different-information.png";
import serviceSelectingValue from "@/assets/images/service-selecting-a-value-in-the-browser-window.png";
import serviceMessages from "@/assets/images/service-sending-messages-from-one-place-to-another.png";
import serviceAnalytics from "@/assets/images/service-volumetric-analytics-of-different-types-in-web-browsers.png";

export type NavigationItem = {
  href: string;
  label: string;
};

export type ServiceItem = {
  accent: "dark" | "light";
  cardTone: "dark" | "light" | "primary";
  image: StaticImageData;
  title: [string, string];
  titleTone?: "primary" | "white";
};

export type CaseStudyItem = {
  description: string;
  href: string;
};

export const navigationItems: NavigationItem[] = [
  { href: "#hero", label: "About us" },
  { href: "#services", label: "Services" },
  { href: "#case-studies", label: "Use Cases" },
  { href: "#cta", label: "Pricing" },
  { href: "#case-studies", label: "Blog" },
];

export const serviceItems: ServiceItem[] = [
  {
    accent: "dark",
    cardTone: "light",
    image: serviceMagnifier,
    title: ["Search engine", "optimization"],
  },
  {
    accent: "dark",
    cardTone: "primary",
    image: serviceSelectingValue,
    title: ["Pay-per-click", "advertising"],
  },
  {
    accent: "light",
    cardTone: "dark",
    image: serviceBrowserWindow,
    title: ["Social Media", "Marketing"],
  },
  {
    accent: "dark",
    cardTone: "light",
    image: serviceMessages,
    title: ["Email", "Marketing"],
  },
  {
    accent: "dark",
    cardTone: "primary",
    image: serviceManyBrowsers,
    title: ["Content", "Creation"],
  },
  {
    accent: "light",
    cardTone: "dark",
    image: serviceAnalytics,
    title: ["Analytics and", "Tracking"],
    titleTone: "primary",
  },
];

export const caseStudyItems: CaseStudyItem[] = [
  {
    description:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    href: "#case-study-1",
  },
  {
    description:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    href: "#case-study-2",
  },
  {
    description:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    href: "#case-study-3",
  },
];

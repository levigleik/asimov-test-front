import Image from "next/image";
import logo from "@/assets/images/Logo.png";
import { navigationItems } from "@/data/landing-page";

export const Navbar = () => {
  return (
    <nav className="mt-4 flex w-full flex-col gap-6 lg:mt-15 lg:flex-row lg:items-center lg:justify-between">
      <Image
        src={logo}
        alt="Logo"
        priority
        className="h-auto w-[168px] sm:w-[190px] lg:w-[220px]"
        sizes="(min-width: 1024px) 220px, (min-width: 640px) 190px, 168px"
      />
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-base sm:text-lg lg:justify-end lg:gap-x-10 lg:text-xl">
        {navigationItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="transition-opacity duration-200 hover:opacity-70"
          >
            {item.label}
          </a>
        ))}
        <a
          href="#request-a-quote"
          className="w-full rounded-[14px] border px-6 py-4 leading-7 sm:w-auto lg:px-8.75 lg:py-5"
        >
          Request a quote
        </a>
      </div>
    </nav>
  );
};

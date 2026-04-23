"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useId, useState } from "react";
import logo from "@/assets/images/Logo.png";
import { navigationItems } from "@/data/landing-page";

const mobileMenuTransition = {
  duration: 0.24,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  return (
    <nav className="mt-4 w-full lg:mt-15">
      <div className="flex items-center justify-between gap-4">
        <Image
          src={logo}
          alt="Logo"
          priority
          className="h-auto w-42 sm:w-47.5 lg:w-55"
          sizes="(min-width: 1024px) 220px, (min-width: 640px) 190px, 168px"
        />

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-1.5 rounded-[14px] border lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
        >
          <motion.span
            animate={isOpen ? { y: 8, rotate: 45 } : { y: 0, rotate: 0 }}
            transition={mobileMenuTransition}
            className="h-0.5 w-5 rounded-full bg-current"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={mobileMenuTransition}
            className="h-0.5 w-5 rounded-full bg-current"
          />
          <motion.span
            animate={isOpen ? { y: -8, rotate: -45 } : { y: 0, rotate: 0 }}
            transition={mobileMenuTransition}
            className="h-0.5 w-5 rounded-full bg-current"
          />
        </button>

        <div className="hidden lg:flex lg:flex-wrap lg:items-center lg:justify-end lg:gap-x-10 lg:gap-y-4 lg:text-xl">
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
            href="#cta"
            className="w-auto rounded-[14px] border px-6 py-4 leading-7 lg:px-8.75 lg:py-5"
          >
            Request a quote
          </a>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={menuId}
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -12, height: 0 }}
            transition={mobileMenuTransition}
            className="mt-6 overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-4 rounded-[20px] border p-5 text-base sm:text-lg">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition-opacity duration-200 hover:opacity-70"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                className="w-full rounded-[14px] border px-6 py-4 text-center leading-7"
                onClick={() => {
                  setIsOpen(false);
                  window.location.hash = "#cta";
                }}
              >
                Request a quote
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
};

"use client";

import Lenis from "lenis";
import { useEffect } from "react";

type LenisProviderProps = {
  children: React.ReactNode;
};

export const LenisProvider = ({ children }: LenisProviderProps) => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
};

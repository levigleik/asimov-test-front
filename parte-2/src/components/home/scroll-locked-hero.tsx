"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const bulletPoints = [
  "+40 horas de conteúdo direto ao ponto",
  "Projetos com Python + IA desde o módulo 1",
  "Suporte da comunidade com +20.000 alunos",
  "Certificado reconhecido pelo mercado",
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export function ScrollLockedHero() {
  const containerRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const durationRef = useRef(0);
  const metadataReadyRef = useRef(false);
  const [scrollSpan, setScrollSpan] = useState("250svh");
  const [isVideoReady, setIsVideoReady] = useState(false);

  const updateScrollSpan = useMemo(
    () => () => {
      if (typeof window === "undefined") return;

      const duration = durationRef.current;
      const extraScroll = duration
        ? Math.max(window.innerHeight * 0.55, duration * 320)
        : window.innerHeight * 0.55;

      setScrollSpan(`${window.innerHeight + extraScroll}px`);
    },
    [],
  );

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    const syncVideoToScroll = () => {
      animationFrameRef.current = null;

      if (
        !metadataReadyRef.current ||
        durationRef.current <= 0 ||
        video.seekable.length === 0
      ) {
        return;
      }

      const rect = container.getBoundingClientRect();
      const scrollableDistance = Math.max(
        container.offsetHeight - window.innerHeight,
        1,
      );
      const progress = clamp(-rect.top / scrollableDistance, 0, 1);
      const targetTime = clamp(
        progress * durationRef.current,
        0,
        Math.max(durationRef.current - 0.001, 0),
      );

      if (!video.seeking && Math.abs(video.currentTime - targetTime) > 0.033) {
        video.currentTime = targetTime;
      }
    };

    const requestSync = () => {
      if (animationFrameRef.current !== null) return;
      animationFrameRef.current =
        window.requestAnimationFrame(syncVideoToScroll);
    };

    const handleLoadedMetadata = () => {
      durationRef.current = video.duration;
      metadataReadyRef.current = true;
      video.currentTime = 0;
      video.pause();
      updateScrollSpan();
      requestSync();
    };

    const handleCanPlay = () => {
      setIsVideoReady(true);
    };

    video.pause();
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("canplay", handleCanPlay);
    window.addEventListener("scroll", requestSync, { passive: true });
    window.addEventListener("resize", updateScrollSpan);
    video.load();
    updateScrollSpan();
    requestSync();

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("canplay", handleCanPlay);
      window.removeEventListener("scroll", requestSync);
      window.removeEventListener("resize", updateScrollSpan);

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateScrollSpan]);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: scrollSpan }}
    >
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden bg-background px-4 pt-24 pb-16 text-tertiary sm:px-6 lg:px-8 lg:pt-28 lg:pb-20">
        <div className="relative z-10 mx-auto w-full max-w-360">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="flex flex-col gap-8 lg:col-span-7 lg:max-w-4xl">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-secondary px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_rgba(185,255,102,0.8)]" />
                <span className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
                  Nova turma aberta
                </span>
              </div>

              <div className="flex flex-col gap-6">
                <h1 className="max-w-4xl text-balance leading-none text-tertiary lg:text-[64px] lg:leading-[0.95]">
                  Aprenda <span className="text-primary">Python</span> do zero e
                  construa projetos reais com{" "}
                  <span className="text-primary">IA</span>
                </h1>
                <p className="max-w-[600px] text-pretty text-tertiary/72 lg:text-[1.2rem] lg:leading-8">
                  O curso mais prático do Brasil para quem quer entrar em
                  tecnologia sem enrolação.
                </p>
              </div>

              <ul className="flex flex-col gap-4">
                {bulletPoints.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 text-tertiary"
                  >
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-black/10 bg-secondary text-sm font-semibold text-primary">
                      ✓
                    </span>
                    <span className="text-base leading-7 text-tertiary/88 lg:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="#conteudo"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium tracking-[0.14em] text-white uppercase transition-colors duration-200 hover:bg-primary/80"
                >
                  Quero começar agora
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#conteudo"
                  className="inline-flex items-center justify-center rounded-full border border-black/12 bg-white px-8 py-4 text-sm font-medium tracking-[0.14em] text-tertiary uppercase transition-colors duration-200 hover:border-primary hover:text-primary"
                >
                  Ver o que vou aprender
                </a>
              </div>
            </div>

            <section
              className="relative lg:col-span-5"
              id="comecar"
              aria-label="Demonstração em vídeo do curso"
            >
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle,_rgba(185,255,102,0.14),_transparent_65%)] blur-3xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] bg-white">
                {!isVideoReady ? (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80">
                    <div className="h-12 w-12 rounded-full border-2 border-black/10 border-t-primary animate-spin" />
                  </div>
                ) : null}

                <video
                  ref={videoRef}
                  className="aspect-[4/5] h-full w-full object-cover"
                  src="/python-cloud.mp4"
                  muted
                  playsInline
                  preload="auto"
                  controls={false}
                  disablePictureInPicture
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

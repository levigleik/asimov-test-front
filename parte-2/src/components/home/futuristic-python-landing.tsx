"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import type { ComponentProps, ReactNode, RefObject } from "react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Trilha", href: "#trilha" },
  { label: "Projetos", href: "#projetos" },
  { label: "Mentoria", href: "#mentoria" },
  { label: "Planos", href: "#planos" },
];

const stats = [
  { value: "+40h", label: "de aulas práticas" },
  { value: "12", label: "projetos guiados" },
  { value: "+20k", label: "alunos na comunidade" },
  { value: "7d", label: "de garantia" },
];

const path = [
  {
    step: "01",
    title: "Base Python sem atrito",
    text: "Sintaxe, funções, estruturas, arquivos e APIs com desafios curtos que destravam raciocínio de programador.",
    tag: "Fundamentos",
  },
  {
    step: "02",
    title: "Automações que economizam horas",
    text: "Planilhas, PDFs, e-mails, web scraping e rotinas reais para transformar tarefas repetitivas em scripts confiáveis.",
    tag: "Produtividade",
  },
  {
    step: "03",
    title: "Dados, dashboards e decisões",
    text: "Pandas, visualizações e análises para sair de tabelas confusas para insights que qualquer equipe entende.",
    tag: "Data",
  },
  {
    step: "04",
    title: "IA aplicada em produtos",
    text: "Construa chatbots, agentes, RAGs e apps com Python para resolver problemas reais, não apenas demos bonitas.",
    tag: "IA",
  },
];

const projects = [
  "Agente que responde documentos da empresa",
  "Robô para organizar notas fiscais e PDFs",
  "Dashboard financeiro com alertas inteligentes",
  "Automação que coleta dados e envia relatórios",
  "API Python com login, banco e deploy",
  "Portfolio publico com estudos de caso",
];

const modules = [
  "Python Core",
  "Automação",
  "Pandas",
  "APIs",
  "IA Generativa",
  "Deploy",
  "Portfolio",
];

const faqs = [
  {
    question: "Nunca programei. Consigo acompanhar?",
    answer:
      "Sim. A trilha começa do zero, com prática orientada, revisões e projetos pequenos antes dos desafios maiores.",
  },
  {
    question: "O curso é focado em mercado?",
    answer:
      "Sim. O foco é construir repertório com automações, dados, APIs, IA e projetos que podem virar portfólio.",
  },
  {
    question: "Tenho suporte durante os estudos?",
    answer:
      "Você estuda com acesso à comunidade, professores e materiais para tirar dúvidas enquanto constrói os projetos.",
  },
];

const terminalLines = [
  "from asimov import carreira",
  "aluno = carreira.iniciar('python + ia')",
  "aluno.criar('agente_de_documentos')",
];

const typingCommands = [
  "portfolio.deploy(destino='mercado')",
  "agente.treinar(com='documentos')",
  "automacao.rodar(planilhas=True)",
  "dashboard.publicar(status='online')",
];

type MotionDivProps = ComponentProps<typeof motion.div>;
type FloatingPanelId = "terminal" | "flight";
type FloatingPanelPosition = {
  left: number;
  top: number;
};
type FloatingPanelState = Record<FloatingPanelId, FloatingPanelPosition | null>;

const DRAG_ACTIVATION_DISTANCE = 8;
const VIEWPORT_SAFE_INSET = 12;

function getDragDistance(offset: { x: number; y: number }) {
  return Math.hypot(offset.x, offset.y);
}

function clampPanelPosition(rect: DOMRect) {
  return {
    left:
      Math.min(
        Math.max(rect.left, VIEWPORT_SAFE_INSET),
        window.innerWidth - rect.width - VIEWPORT_SAFE_INSET,
      ) - VIEWPORT_SAFE_INSET,
    top:
      Math.min(
        Math.max(rect.top, VIEWPORT_SAFE_INSET),
        window.innerHeight - rect.height - VIEWPORT_SAFE_INSET,
      ) - VIEWPORT_SAFE_INSET,
  };
}

function clampDraggedPanelPosition(
  rect: DOMRect,
  offset: { x: number; y: number },
) {
  const finalRect = {
    left: rect.left + offset.x,
    top: rect.top + offset.y,
    width: rect.width,
    height: rect.height,
  } as DOMRect;

  return clampPanelPosition(finalRect);
}

function Reveal({
  children,
  delay = 0,
  className,
  ...props
}: MotionDivProps & { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: ReactNode;
  text: string;
}) {
  return (
    <Reveal className="mx-auto mb-12 flex max-w-3xl flex-col items-center gap-4 text-center md:mb-16">
      <span className="border-neon inline-flex items-center gap-2 rounded-md px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_18px_rgba(133,251,69,0.9)]" />
        {eyebrow}
      </span>
      <h2 className="text-balance text-3xl font-semibold leading-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="max-w-2xl text-pretty text-base leading-7 text-white/62 md:text-lg md:leading-8">
        {text}
      </p>
    </Reveal>
  );
}

function WindowDots({ onClose }: { onClose?: () => void }) {
  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onClose?.();
        }}
        aria-label="Voltar card para o local inicial"
        className="h-[11.5px] w-[11.5px] rounded-full bg-[#ff5f57] transition hover:scale-125 hover:shadow-[0_0_14px_rgba(255,95,87,0.9)]"
        style={{ cursor: onClose ? "pointer" : "grab" }}
      />
      <span className="h-[11.5px] w-[11.5px] rounded-full bg-[#ffbd2e]" />
      <span className="h-[11.5px] w-[11.5px] rounded-full bg-primary" />
    </div>
  );
}

function BootTerminal({
  onClose,
  skipIntro = false,
}: {
  onClose?: () => void;
  skipIntro?: boolean;
}) {
  const [commandIndex, setCommandIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const currentCommand = typingCommands[commandIndex];

  useEffect(() => {
    const atFullCommand = visibleChars === currentCommand.length;
    const atEmptyCommand = visibleChars === 0;
    const delay = isDeleting ? 21 : atFullCommand ? 770 : 38;

    const timeout = window.setTimeout(() => {
      if (atFullCommand && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (atEmptyCommand && isDeleting) {
        setIsDeleting(false);
        setCommandIndex((index) => (index + 1) % typingCommands.length);
        return;
      }

      setVisibleChars((chars) => chars + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [currentCommand.length, isDeleting, visibleChars]);

  return (
    <div className="border-neon bg-panel relative overflow-hidden rounded-lg">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <WindowDots onClose={onClose} />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/42">
          python-lab.py
        </span>
      </div>
      <div className="space-y-3 p-4 font-mono text-sm leading-6 text-white/80 md:p-5">
        {terminalLines.map((line, index) => (
          <motion.div
            key={line}
            initial={skipIntro ? false : { opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={
              skipIntro
                ? { duration: 0 }
                : { delay: 0.55 + index * 0.18, duration: 0.45 }
            }
            className="flex gap-3"
          >
            <span className="text-primary">&gt;</span>
            <span>
              <span className="text-cyan-300">{line.split("(")[0]}</span>
              {line.includes("(")
                ? `(${line.split("(").slice(1).join("(")}`
                : ""}
            </span>
          </motion.div>
        ))}
        <div className="flex items-start min-h-6 gap-3">
          <span className="text-primary">&gt;</span>
          <span className="break-all flex items-start">
            <span className="text-fuchsia-300">
              {currentCommand.slice(0, visibleChars).split("(")[0]}
            </span>
            {currentCommand.slice(0, visibleChars).includes("(")
              ? `(${currentCommand.slice(0, visibleChars).split("(").slice(1).join("(")}`
              : ""}
            <motion.span
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 0.75, repeat: Infinity }}
              className="ml-1 inline-block h-5 w-2 translate-y-1 bg-primary"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

function FlightPlan({
  onClose,
  skipIntro = false,
}: {
  onClose?: () => void;
  skipIntro?: boolean;
}) {
  return (
    <div className="border-neon bg-panel overflow-hidden rounded-lg">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 md:px-5">
        <div className="flex items-center gap-3">
          <WindowDots onClose={onClose} />
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">
            plano de voo
          </span>
        </div>
        <span className="rounded-md bg-primary px-2 py-1 font-mono text-xs font-bold text-black">
          84%
        </span>
      </div>
      <div className="space-y-3 p-4 md:p-5">
        {modules.map((module, index) => (
          <div
            key={module}
            className="grid grid-cols-[104px_1fr] items-center gap-3"
          >
            <span className="truncate font-mono text-xs text-white/62">
              {module}
            </span>
            <span className="h-2 overflow-hidden rounded-full bg-white/10">
              <motion.span
                className="block h-full rounded-full bg-[linear-gradient(90deg,var(--primary),#22d3ee,#f472b6)]"
                initial={skipIntro ? false : { width: 0 }}
                animate={
                  skipIntro ? { width: `${58 + index * 6}%` } : undefined
                }
                whileInView={
                  skipIntro ? undefined : { width: `${58 + index * 6}%` }
                }
                viewport={skipIntro ? undefined : { once: true }}
                transition={
                  skipIntro
                    ? { duration: 0 }
                    : { duration: 0.9, delay: 0.25 + index * 0.08 }
                }
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PanelFloat({
  children,
  isDragging,
  floatY,
  floatRotate,
}: {
  children: ReactNode;
  isDragging: boolean;
  floatY: number;
  floatRotate: number;
}) {
  return (
    <motion.div
      animate={
        isDragging
          ? { y: 0, rotate: 0 }
          : { y: [0, floatY, 0], rotate: [0, floatRotate, 0] }
      }
      transition={
        isDragging
          ? { duration: 0.18 }
          : { duration: 6.5, repeat: Infinity, ease: "easeInOut" }
      }
    >
      {children}
    </motion.div>
  );
}

function FollowMouseTooltip({
  position,
  children,
}: {
  position: { x: number; y: number };
  children: ReactNode;
}) {
  return (
    <div
      className="pointer-events-none absolute z-20 rounded-md border border-primary/30 bg-black/78 px-3 py-2 font-mono text-[11px] leading-4 text-white/78 shadow-[0_0_24px_rgba(133,251,69,0.16)] backdrop-blur"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      {children}
    </div>
  );
}

function FixedDraggablePanel({
  id,
  children,
  className,
  floatY,
  floatRotate,
  constraintsRef,
  position,
  onReset,
}: {
  id: FloatingPanelId;
  children: ReactNode;
  className: string;
  floatY: number;
  floatRotate: number;
  constraintsRef: RefObject<HTMLDivElement | null>;
  position: FloatingPanelPosition;
  onReset: (id: FloatingPanelId) => void;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 18, y: 18 });

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={0}
      dragMomentum
      dragTransition={{
        bounceStiffness: 720,
        bounceDamping: 18,
        power: 0.78,
        timeConstant: 430,
        restDelta: 0.4,
      }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      onContextMenu={(event) => {
        event.preventDefault();
        onReset(id);
      }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setTooltipPosition({
          x: event.clientX - rect.left + 14,
          y: event.clientY - rect.top + 14,
        });
      }}
      style={{ left: position.left, top: position.top }}
      whileDrag={{
        scale: 1.045,
        rotate: 0,
        boxShadow: "0 36px 110px rgba(34, 211, 238, 0.22)",
      }}
      className={`${className} absolute pointer-events-auto z-[1001] touch-none select-none cursor-grab active:cursor-grabbing`}
    >
      <FollowMouseTooltip position={tooltipPosition}>
        Clique direito ou bolinha vermelha para voltar
      </FollowMouseTooltip>
      <PanelFloat
        isDragging={isDragging}
        floatY={floatY}
        floatRotate={floatRotate}
      >
        {children}
      </PanelFloat>
    </motion.div>
  );
}

function DockedDraggablePanel({
  id,
  children,
  className,
  floatY,
  floatRotate,
  onActivate,
}: {
  id: FloatingPanelId;
  children: ReactNode;
  className: string;
  floatY: number;
  floatRotate: number;
  onActivate: (id: FloatingPanelId, position: FloatingPanelPosition) => void;
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const dragStartRectRef = useRef<DOMRect | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 18, y: 18 });

  return (
    <motion.div
      ref={panelRef}
      drag
      dragElastic={0}
      dragMomentum={false}
      dragSnapToOrigin
      onPointerEnter={() => setIsHovering(true)}
      onPointerLeave={() => setIsHovering(false)}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setTooltipPosition({
          x: event.clientX - rect.left + 14,
          y: event.clientY - rect.top + 14,
        });
      }}
      onDragStart={() => {
        setIsDragging(true);
        dragStartRectRef.current =
          panelRef.current?.getBoundingClientRect() ?? null;
      }}
      onDragEnd={(_, info) => {
        setIsDragging(false);

        if (
          getDragDistance(info.offset) <= DRAG_ACTIVATION_DISTANCE ||
          !dragStartRectRef.current
        ) {
          return;
        }

        onActivate(
          id,
          clampDraggedPanelPosition(dragStartRectRef.current, info.offset),
        );
      }}
      whileDrag={{
        scale: 1.045,
        rotate: 0,
        boxShadow: "0 36px 110px rgba(34, 211, 238, 0.22)",
      }}
      className={`${className} z-[30] touch-none select-none cursor-grab active:cursor-grabbing`}
    >
      {isHovering ? (
        <FollowMouseTooltip position={tooltipPosition}>
          pode me arrastar ;)
        </FollowMouseTooltip>
      ) : null}
      <PanelFloat
        isDragging={isDragging}
        floatY={floatY}
        floatRotate={floatRotate}
      >
        {children}
      </PanelFloat>
    </motion.div>
  );
}

function FloatingLearningPanels({
  panels,
  onReset,
}: {
  panels: FloatingPanelState;
  onReset: (id: FloatingPanelId) => void;
}) {
  const constraintsRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={constraintsRef}
      className="pointer-events-none fixed inset-3 z-[1000]"
    >
      {panels.terminal ? (
        <FixedDraggablePanel
          id="terminal"
          className="w-[min(430px,calc(100vw-1.5rem))]"
          floatY={-16}
          floatRotate={1.5}
          constraintsRef={constraintsRef}
          position={panels.terminal}
          onReset={onReset}
        >
          <BootTerminal onClose={() => onReset("terminal")} skipIntro />
        </FixedDraggablePanel>
      ) : null}

      {panels.flight ? (
        <FixedDraggablePanel
          id="flight"
          className="w-[min(460px,calc(100vw-1.5rem))]"
          floatY={14}
          floatRotate={-1.2}
          constraintsRef={constraintsRef}
          position={panels.flight}
          onReset={onReset}
        >
          <FlightPlan onClose={() => onReset("flight")} skipIntro />
        </FixedDraggablePanel>
      ) : null}
    </div>
  );
}

function HeroVisual({
  floatingPanels,
  onActivateFloating,
}: {
  floatingPanels: FloatingPanelState;
  onActivateFloating: (
    id: FloatingPanelId,
    position: FloatingPanelPosition,
  ) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, rotateX: 12 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-[560px] perspective-dramatic lg:min-h-[640px]"
    >
      <div className="absolute inset-x-4 top-0 h-[380px] overflow-hidden rounded-lg border border-primary/25 bg-black/60 shadow-[0_0_70px_rgba(40,255,180,0.12)] md:inset-x-12">
        <video
          className="h-full w-full object-cover opacity-80 mix-blend-screen"
          src="/python-cloud.mp4"
          muted
          playsInline
          autoPlay
          loop
          preload="metadata"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(5,8,12,0.85)_100%)]" />
        <div className="absolute inset-0 scanline opacity-40" />
      </div>

      {floatingPanels.terminal ? null : (
        <DockedDraggablePanel
          id="terminal"
          className="absolute left-0 top-24 w-[68%] max-w-[430px] md:left-4"
          floatY={-16}
          floatRotate={1.5}
          onActivate={onActivateFloating}
        >
          <BootTerminal />
        </DockedDraggablePanel>
      )}

      {floatingPanels.flight ? null : (
        <DockedDraggablePanel
          id="flight"
          className="absolute right-0 bottom-12 w-[78%] max-w-[460px]"
          floatY={14}
          floatRotate={-1.2}
          onActivate={onActivateFloating}
        >
          <FlightPlan />
        </DockedDraggablePanel>
      )}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute right-[8%] top-[33%] hidden h-40 w-40 rounded-full border border-dashed border-cyan-300/40 md:block"
      >
        <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_24px_rgba(103,232,249,0.8)]" />
      </motion.div>
    </motion.div>
  );
}

export function FuturisticPythonLanding() {
  const [openFaq, setOpenFaq] = useState(0);
  const [floatingPanels, setFloatingPanels] = useState<FloatingPanelState>({
    terminal: null,
    flight: null,
  });
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const activateFloatingPanel = (
    id: FloatingPanelId,
    position: FloatingPanelPosition,
  ) => {
    setFloatingPanels((panels) => ({ ...panels, [id]: position }));
  };

  const resetFloatingPanel = (id: FloatingPanelId) => {
    setFloatingPanels((panels) => ({ ...panels, [id]: null }));
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-white">
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-[linear-gradient(90deg,var(--primary),#22d3ee,#f472b6)]"
        style={{ scaleX: smoothProgress }}
      />
      <FloatingLearningPanels
        panels={floatingPanels}
        onReset={resetFloatingPanel}
      />

      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.16),transparent_34%),linear-gradient(180deg,#05070a_0%,#070b0f_45%,#030405_100%)]" />
      <div className="tech-grid fixed inset-0 -z-10 opacity-55" />
      <div className="noise-layer fixed inset-0 -z-10 opacity-[0.07]" />

      <motion.nav
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/55 px-4 py-3 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4">
          <a href="#topo" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-primary/40 bg-primary/12 font-mono text-sm font-black text-primary shadow-[0_0_24px_rgba(133,251,69,0.2)]">
              py
            </span>
            <span className="hidden font-mono text-sm font-semibold uppercase tracking-[0.24em] text-white/80 sm:block">
              Asimov Lab
            </span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-xs uppercase tracking-[0.18em] text-white/52 transition hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#planos"
            className="rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-black transition hover:bg-cyan-300"
          >
            Começar
          </a>
        </div>
      </motion.nav>

      <section
        id="topo"
        className="relative min-h-screen px-4 pt-28 pb-20 md:px-6 lg:px-8"
      >
        <motion.div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-[1180px] items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-7 inline-flex items-center gap-2 rounded-md border border-primary/25 bg-primary/10 px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary"
            >
              <span className="h-2 w-2 rounded-full bg-primary" />
              Nova turma em embarque
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.85,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-4xl text-balance text-5xl font-semibold leading-[0.96] text-white md:text-7xl lg:text-[88px]"
            >
              Aprenda Python como quem pilota uma missão de IA.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34 }}
              className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-white/68 md:text-xl md:leading-9"
            >
              Uma landing para um curso direto ao ponto: código, automação,
              dados, IA generativa e projetos reais para você construir
              repertório de tecnologia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.46 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#trilha"
                className="group inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-6 py-4 font-semibold text-black shadow-[0_0_30px_rgba(133,251,69,0.22)] transition hover:bg-cyan-300"
              >
                Explorar a trilha
                <span className="transition group-hover:translate-x-1">
                  -&gt;
                </span>
              </a>
              <a
                href="#projetos"
                className="inline-flex items-center justify-center rounded-lg border border-white/14 bg-white/5 px-6 py-4 font-semibold text-white transition hover:border-cyan-300/70 hover:bg-cyan-300/10"
              >
                Ver projetos
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.62 },
                },
              }}
              className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {stats.map((item) => (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="border-neon bg-panel rounded-lg p-4"
                >
                  <strong className="block font-mono text-2xl text-primary">
                    {item.value}
                  </strong>
                  <span className="mt-1 block text-sm leading-5 text-white/58">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <HeroVisual
            floatingPanels={floatingPanels}
            onActivateFloating={activateFloatingPanel}
          />
        </motion.div>
      </section>

      <section id="trilha" className="relative px-4 py-24 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="Trilha guiada"
            title={
              <>
                Do primeiro print ao seu primeiro produto com{" "}
                <span className="text-gradient">Python + IA</span>
              </>
            }
            text="Cada etapa aparece como uma missão: curta, visual, aplicada e conectada ao próximo projeto."
          />

          <div className="grid gap-4 lg:grid-cols-4">
            {path.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.08}>
                <article className="group border-neon bg-panel h-full rounded-lg p-5 transition duration-300 hover:-translate-y-2 hover:border-primary/50">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-mono text-sm text-white/42">
                      {item.step}
                    </span>
                    <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs text-cyan-300">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold leading-tight text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/58">{item.text}</p>
                  <div className="mt-8 h-px w-full overflow-hidden bg-white/10">
                    <span className="block h-full w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="relative px-4 py-24 md:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Projetos reais"
            title={
              <>
                O curso vira um{" "}
                <span className="text-gradient">hangar de portfólio</span>
              </>
            }
            text="Em vez de decorar sintaxe, você entrega artefatos que mostram autonomia: scripts, dashboards, APIs e agentes."
          />

          <Reveal className="grid gap-3 sm:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="border-neon bg-panel rounded-lg p-5"
              >
                <span className="mb-5 block font-mono text-xs text-primary">
                  build_{String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold leading-tight text-white">
                  {project}
                </h3>
              </motion.article>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="mentoria" className="px-4 py-24 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <Reveal className="relative overflow-hidden rounded-lg border border-primary/25 bg-[linear-gradient(135deg,rgba(133,251,69,0.13),rgba(34,211,238,0.08)_42%,rgba(244,114,182,0.1))] p-6 md:p-10">
            <div className="absolute inset-0 scanline opacity-30" />
            <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  cockpit de estudo
                </span>
                <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-white md:text-5xl">
                  Feedback, comunidade e ritmo para não estudar no escuro.
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {["Revisões", "Comunidade", "Certificado"].map(
                  (item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.12, duration: 0.55 }}
                      className="rounded-lg border border-white/12 bg-black/30 p-5 backdrop-blur"
                    >
                      <span className="font-mono text-3xl text-cyan-300">
                        0{index + 1}
                      </span>
                      <p className="mt-5 text-sm font-semibold text-white/78">
                        {item}
                      </p>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="planos" className="px-4 py-24 md:px-6 lg:px-8">
        <div className="mx-auto max-w-[1180px]">
          <SectionHeader
            eyebrow="Matricula"
            title={
              <>
                Entre agora e desbloqueie o{" "}
                <span className="text-gradient">modo construtor</span>
              </>
            }
            text="Uma proposta direta para quem quer aprender Python colocando a mão no código desde a primeira aula."
          />

          <div className="grid gap-4 lg:grid-cols-[1fr_0.78fr]">
            <Reveal>
              <article className="border-neon bg-panel relative overflow-hidden rounded-lg p-6 md:p-8">
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--primary),#22d3ee,#f472b6)]" />
                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
                  <div>
                    <span className="rounded-md bg-primary px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-black">
                      turma recomendada
                    </span>
                    <h3 className="mt-6 text-3xl font-semibold text-white md:text-4xl">
                      Python + IA completo
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-7 text-white/62">
                      Acesso a trilha, projetos, comunidade, certificado e
                      atualizações de conteúdo durante o período de acesso.
                    </p>
                  </div>
                  <div className="md:text-right">
                    <span className="block text-sm text-white/48">12x de</span>
                    <strong className="font-mono text-5xl text-white">
                      R$179
                    </strong>
                    <span className="block text-sm text-white/48">
                      ou à vista com desconto
                    </span>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#topo"
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-4 font-bold text-black transition hover:bg-cyan-300"
                  >
                    Garantir minha vaga
                  </a>
                  <a
                    href="#faq"
                    className="inline-flex items-center justify-center rounded-lg border border-white/14 px-6 py-4 font-bold text-white transition hover:border-primary/60"
                  >
                    Tirar dúvidas
                  </a>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.08}>
              <article className="border-neon bg-panel h-full rounded-lg p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-white">
                  O que está incluso
                </h3>
                <ul className="mt-6 space-y-4 text-sm leading-6 text-white/68">
                  {[
                    "Aulas passo a passo com desafios práticos",
                    "Projetos para publicar no portfólio",
                    "Comunidade e suporte com professores",
                    "Certificado e materiais complementares",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="faq" className="px-4 py-24 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="FAQ"
            title="Perguntas antes da decolagem"
            text="Respostas curtas para decidir se a trilha encaixa no seu momento."
          />
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.06}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="border-neon bg-panel w-full rounded-lg p-5 text-left"
                >
                  <span className="flex items-center justify-between gap-5">
                    <span className="font-semibold text-white">
                      {faq.question}
                    </span>
                    <span className="font-mono text-primary">
                      {openFaq === index ? "-" : "+"}
                    </span>
                  </span>
                  <motion.span
                    initial={false}
                    animate={{
                      height: openFaq === index ? "auto" : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="block overflow-hidden"
                  >
                    <span className="block pt-4 text-sm leading-7 text-white/62">
                      {faq.answer}
                    </span>
                  </motion.span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import { ScrollLockedHero } from "@/components/home/scroll-locked-hero";

const learningTopics = [
  {
    title: "Fundamentos de Python",
    description:
      "Aprenda sintaxe, variáveis, estruturas de repetição, funções e lógica de programação com prática desde o início.",
  },
  {
    title: "Automação no dia a dia",
    description:
      "Crie scripts úteis para economizar tempo, organizar tarefas e resolver problemas reais com código.",
  },
  {
    title: "Projetos com IA",
    description:
      "Entenda como integrar Python com ferramentas de IA para construir aplicações modernas e inteligentes.",
  },
  {
    title: "Projetos reais do mercado",
    description:
      "Desenvolva projetos completos para sair do curso com portfólio e mais segurança para buscar oportunidades.",
  },
  {
    title: "Organização e boas práticas",
    description:
      "Aprenda a estruturar melhor seu código, manter clareza e evoluir seus projetos com consistência.",
  },
  {
    title: "Entrada em tecnologia",
    description:
      "Ganhe base técnica e visão prática para começar sua jornada na área de tecnologia sem enrolação.",
  },
];

export default function Home() {
  return (
    <main>
      <ScrollLockedHero />

      <section
        id="conteudo"
        className="bg-tertiary px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto flex w-full max-w-360 flex-col gap-12">
          <div className="flex max-w-3xl flex-col gap-5">
            <span className="w-fit rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium text-primary">
              O que você vai aprender
            </span>
            <div className="flex flex-col gap-4">
              <h2 className="text-balance text-white">
                Tudo que você precisa para sair do zero e construir projetos com
                Python e IA
              </h2>
              <p className="max-w-2xl text-pretty text-white/72 lg:leading-8">
                Uma trilha prática para aprender os fundamentos, criar
                automações, desenvolver projetos reais e ganhar repertório para
                entrar em tecnologia com confiança.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {learningTopics.map((topic, index) => (
              <article
                key={topic.title}
                className="flex h-full flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/6 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-lg font-semibold text-tertiary">
                  {index + 1}
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-white">{topic.title}</h3>
                  <p className="text-white/72 lg:leading-7">
                    {topic.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

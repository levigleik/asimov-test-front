# Parte 1

Landing page desenvolvida com `Next.js 16`, `React 19`, `TypeScript` e `Tailwind CSS 4`.


[https://asimov-test-parte-1.vercel.app](https://asimov-test-parte-1.vercel.app/)

## Visão Geral

O projeto consiste em uma landing page composta pelas seguintes seções:

- Hero / apresentação principal
- Services
- Let's Make Things Happen
- Case Studies

## Processo de Design e Implementação

O design desta aplicação foi desenvolvido a partir de um arquivo no Figma, seguindo a proposta visual definida no layout original.

Durante a implementação, também foi utilizado apoio de IA em partes do processo:

- Geração de algumas sections: `Codex` com `gpt-5.4` em modo `high`
- Correções e refatorações: `gpt-5.4-mini`

## Stack

- `Next.js 16.2.4`
- `React 19.2.4`
- `TypeScript`
- `Tailwind CSS 4`
- `Biome`

## Como Rodar o Projeto

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

O projeto ficará disponível em:

```bash
http://localhost:3000
```

## Scripts

- `npm run dev`: inicia o servidor de desenvolvimento
- `npm run build`: gera a build de produção
- `npm run start`: inicia a aplicação em produção
- `npm run lint`: executa a verificação com Biome
- `npm run format`: formata os arquivos com Biome

## Estrutura

Os principais arquivos e pastas do projeto estão organizados assim:

- `src/app/page.tsx`: composição da página principal
- `src/app/sections/`: seções da landing page
- `src/components/`: componentes reutilizáveis
- `src/data/landing-page.ts`: dados usados nas seções
- `src/assets/`: imagens e ícones do projeto

## Observação

Este repositório representa a primeira parte do desafio, com foco na construção da interface e na fidelidade ao layout proposto.

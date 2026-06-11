# Infraestrutura inicial do currículo

## Objetivo

Preparar a infraestrutura de um currículo estático em Astro sem desenvolver o
conteúdo final e sem alterar o `README.md`.

## Stack

- Astro com TypeScript em modo estrito.
- Node.js em imagem Alpine para desenvolvimento e build.
- ESLint para análise estática.
- GitHub Actions para lint, build e publicação no GitHub Pages.

O TypeScript será processado durante o build. O artefato publicado continuará
sendo um site estático, sem servidor de aplicação em produção.

## Aplicação mínima

O projeto terá apenas a estrutura e a página mínima necessárias para validar o
servidor de desenvolvimento e o build. O conteúdo do currículo ficará fora
desta etapa.

## Ambiente Docker

O `Dockerfile` instalará as dependências do projeto e executará o servidor de
desenvolvimento do Astro. O `docker-compose.yml` usará bind mount do código,
preservará `node_modules` em volume e publicará o serviço em
`http://localhost:8080`, com hot reload.

## Integração contínua

O workflow `.github/workflows/main.yml` será executado em pull requests para a
`main` e em pushes na `main`.

Os jobs obrigatórios serão:

- `lint`: instala dependências e executa o ESLint.
- `build`: instala dependências e executa o build do Astro.

Os nomes dos jobs serão únicos para que possam ser selecionados como status
checks obrigatórios na proteção da `main`.

## Deploy

Após um push na `main`, um job separado publicará o diretório `dist` no GitHub
Pages usando as actions oficiais do GitHub. O deploy dependerá do sucesso de
`lint` e `build` e não será executado em pull requests.

## Governança Git

- Alterações serão feitas em `feat/infraestrutura-inicial`.
- A integração ocorrerá por pull request.
- Commits seguirão Conventional Commits.
- Os commits usarão exclusivamente a identidade Git de BrunoBrug, sem trailers
  de coautoria.

## Configuração manual posterior

No GitHub será necessário:

1. Definir a origem do Pages como GitHub Actions.
2. Proteger a `main` com pull request obrigatório.
3. Exigir os checks `lint` e `build` depois da primeira execução do workflow.
4. Bloquear exclusão e force push da `main`.
5. Impedir bypass das regras, inclusive pelo administrador, quando disponível.

Essas instruções serão entregues na conversa, pois o `README.md` deve permanecer
inalterado nesta etapa.

## Verificação

A implementação será considerada válida quando:

- a instalação reproduzível com lockfile funcionar;
- lint e build passarem;
- a configuração do Docker Compose for válida;
- o servidor Astro estiver configurado para aceitar conexões do contêiner na
  porta 8080;
- o workflow tiver sintaxe e dependências coerentes com o GitHub Pages.

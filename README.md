# Currículo Online — Bruno Brugnerotto de Lara

Currículo profissional desenvolvido como projeto individual da disciplina
DS881. A aplicação é um site estático construído com Astro e TypeScript,
conteinerizado com Docker e publicado automaticamente no GitHub Pages.

## Aplicação

- **Produção:** [brunobrug.github.io/ds881-curriculo-GRR20230933](https://brunobrug.github.io/ds881-curriculo-GRR20230933/)
- **Repositório:** [github.com/BrunoBrug/ds881-curriculo-GRR20230933](https://github.com/BrunoBrug/ds881-curriculo-GRR20230933)

## Tecnologias

- Astro
- TypeScript
- HTML e CSS
- ESLint
- Docker e Docker Compose
- GitHub Actions
- GitHub Pages

## Execução local com Docker

### Pré-requisitos

- Docker Desktop ou Docker Engine
- Docker Compose

### Iniciar o ambiente

Na raiz do projeto, execute:

```bash
docker compose up --build
```

O currículo estará disponível em:

```text
http://localhost:8080
```

O diretório do projeto é montado dentro do contêiner. Alterações nos arquivos
em `src/` são refletidas automaticamente no navegador por meio do hot reload.

Para encerrar:

```bash
docker compose down
```

## Comandos de qualidade

Os comandos abaixo também podem ser executados localmente quando Node.js 22
estiver instalado:

```bash
npm ci
npm test
npm run lint
npm run check
npm run build
```

## CI/CD

O workflow [`.github/workflows/main.yml`](.github/workflows/main.yml) executa:

1. **Testes:** valida o conteúdo essencial do currículo.
2. **Lint:** verifica os padrões do código.
3. **Astro Check:** valida arquivos Astro e TypeScript.
4. **Build:** gera o site estático no diretório `dist`.
5. **Deploy:** publica o artefato no GitHub Pages após alterações na `main`.

Pull Requests direcionados à `main` executam testes, lint e build. O deploy
ocorre somente após o merge.

## Fluxo Git

O projeto utiliza branches de trabalho e Pull Requests:

```bash
git switch -c feat/nome-da-feature
git add .
git commit -m "feat: descreve a alteração"
git push -u origin feat/nome-da-feature
```

As mensagens seguem o padrão Conventional Commits, como `feat:`, `fix:`,
`docs:`, `build:` e `ci:`.

## Proteção da branch `main`

A `main` deve permanecer protegida com as seguintes regras:

- exigir Pull Request antes do merge;
- exigir aprovação dos checks `lint` e `build`;
- exigir que a branch esteja atualizada antes do merge;
- bloquear exclusão da branch;
- bloquear force push;
- impedir bypass das regras, quando a opção estiver disponível.

Os checks devem ser selecionados com origem no **GitHub Actions**, após a
primeira execução do workflow. Pushes diretos para a `main` não fazem parte do
fluxo adotado pelo projeto.

## GitHub Pages

Em **Settings → Pages → Build and deployment**, a origem da publicação deve
estar configurada como **GitHub Actions**. O endereço público será atualizado
automaticamente após cada merge bem-sucedido na `main`.

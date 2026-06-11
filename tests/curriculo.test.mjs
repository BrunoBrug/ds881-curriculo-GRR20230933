import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { URL } from "node:url";

const page = await readFile(
  new URL("../src/pages/index.astro", import.meta.url),
  "utf8",
);

test("exibe a identidade e os contatos profissionais", () => {
  assert.match(page, /Bruno Brugnerotto de Lara/);
  assert.match(page, /Desenvolvedor Full Stack/);
  assert.match(page, /mailto:brunobrugnerottodelara@gmail\.com/);
  assert.match(page, /https:\/\/github\.com\/brunobrug/);
});

test("organiza o currículo nas seções principais", () => {
  for (const section of [
    "Sobre",
    "Experiência",
    "Projetos",
    "Formação",
    "Conhecimentos",
  ]) {
    assert.match(page, new RegExp(section));
  }
});

test("inclui a experiência e os projetos informados no currículo", () => {
  assert.match(page, /ECOMP/);
  assert.match(page, /Maintenance App/);
  assert.match(page, /Empresa Aérea/);
});

test("inclui o estágio de análise de dados no Banco do Brasil", () => {
  assert.match(page, /Banco do Brasil/);
  assert.match(page, /Estagiário de Análise de Dados/);
  assert.match(page, /Set\. 2025 — atualmente/);
  assert.match(page, /relatórios gerenciais/);
  assert.match(page, /tomadas de decisão/);
});

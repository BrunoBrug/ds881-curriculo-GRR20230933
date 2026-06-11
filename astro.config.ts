import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://brunobrug.github.io",
  base: process.env.BASE_PATH ?? "/",
});

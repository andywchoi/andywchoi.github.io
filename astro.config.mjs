import { defineConfig } from "astro/config";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserSite = repoName?.endsWith(".github.io");

export default defineConfig({
  site: process.env.GITHUB_PAGES
    ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
    : "http://localhost:4321",
  base: process.env.GITHUB_PAGES && !isUserSite && repoName ? `/${repoName}` : "/",
});

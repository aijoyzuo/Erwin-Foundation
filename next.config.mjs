/** @type {import('next').NextConfig} */
const repoName = "Erwin-Foundation";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;

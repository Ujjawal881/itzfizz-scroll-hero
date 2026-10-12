import type { NextConfig } from 'next';

// GitHub Pages hosts project sites under /<repository-name>.
const repoName = 'itzfizz-scroll-hero';
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  ...(isGitHubActions
    ? { basePath: `/${repoName}`, assetPrefix: `/${repoName}/` }
    : {}),
};

export default nextConfig;

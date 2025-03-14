/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/github-pages',
  assetPrefix: '/github-pages/',
  output: 'export',
  images: {
    domains: ["tyn1t.github.io"],
    unoptimized: true,
  },
};

export default nextConfig;

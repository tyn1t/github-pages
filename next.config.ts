/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/github-pages',
  assetPrefix: '/github-pages',
  output: 'export',
  images: {
    unoptimized: true,
    domains: ["tyn1t.github.io"] 
  },
};

export default nextConfig;

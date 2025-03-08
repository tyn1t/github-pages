/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/pets-landing-page',
  assetPrefix: '/pets-landing-page',
  output: 'export',
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;

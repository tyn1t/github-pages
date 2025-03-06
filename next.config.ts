import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Exporta como site estático
  images: {
    unoptimized: true, // Evita problemas com imagens no GitHub Pages
  },
  basePath: "/tyn1t",
  assetPrefix: "/Pets-landing-page/",
};


export default nextConfig;

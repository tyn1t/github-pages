import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // ⚠️ Exportação estática correta
  images: {
    unoptimized: true, // ⚠️ Evita erro de otimização no GitHub Pages
  },
  basePath: process.env.NODE_ENV == "production" ? "/Pets-landing-page" : "/Pets-landing-page" ,
  experimental: { optimizeCss: true }, // ⚠️ Força exportação do CSS
}


export default nextConfig;

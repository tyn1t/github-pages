/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pets-landing-page', // Nome do repositório
  images: {
    unoptimized: true, // Necessário para imagens no GitHub Pages
  },
};

export default nextConfig;
  // images: {
  //   unoptimized: true,
  // },
  // basePath: process.env.NODE_ENV == "production" ? "/Pets-landing-page" : "/Pets-landing-page" ,
  // experimental: { optimizeCss: true }, 
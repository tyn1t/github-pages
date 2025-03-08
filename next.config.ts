import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Pets-landing-page',
  images: {
    unoptimized: true, 
  },
  // images: {
  //   unoptimized: true,
  // },
  // basePath: process.env.NODE_ENV == "production" ? "/Pets-landing-page" : "/Pets-landing-page" ,
  // experimental: { optimizeCss: true }, 
  
}


export default nextConfig;

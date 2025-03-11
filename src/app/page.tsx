import { Hero } from "./../_components/hero";
import {  About } from "@/_components/about";
import { Services } from "@/_components/services";
import { Testimonials } from "@/_components/Testimonials";
import { Fooder } from "@/_components/fooder";
// import Avisor from "@/_components/avisor";

import type { Metadata } from 'next'
import Avisor from "@/components/avisor";

export const metadata: Metadata = {
  title: "Pets",
  description: "Encontre os melhores produtos e serviços para o seu pet com qualidade e confiança.",
  icons: {
    icon: "/paw_icon.png",
  },
};

export default function Home() {
  return (
    <main>
        <Hero/>
        <Avisor/>
        <About/>
        <Services/>
        <Testimonials/>
        <Fooder/>
    </main>
  )
}

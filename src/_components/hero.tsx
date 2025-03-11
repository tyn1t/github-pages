import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

import Image from 'next/image'

export function Hero() {
    return (
        <section className="bg-[#2148ca]  text-white relative overflow-hidden">
            <div>
            <Image
                src={"/github-pages/bg-hero.png"}
                alt='imagem de dogc eroo'
                className='object-cover opacity-60 lg:hidden'
                fill
                priority
                sizes=""
            />
            <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
            </div>
            <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative" >
                <article className=' grid grid-cols-1 lg:grid-cols-2 gap-8'>
    
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
                            Amor, cuidado e atenção especial para o seu pet!
                        </h1>
                        <p className="lg:text-lg">
                            Oferecemos os melhores serviços para garantir o bem-estar e a 
                            felicidade do seu amigo de quatro patas.
                        </p>
                        <div>
                            <a
                                href="tel:92992192528"
                                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center 
                                justify-center w-fit gap-2"
                            >
                                <WhatsappLogo className='w-5 h-5'/>Contato via whatsApp
                            </a>
                        </div>

                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> 
                                de desconto na primeira compra.
                            </p>
                                <div className='flex mt-4'>
                                    <div className='w-32 hidden lg:block'>
                                        <Image 
                                            src="/github-pages/cat-hero.png"
                                            alt='image do cat'
                                            quality={100}
                                            className='object-fill'
                                        />
                                    </div>
                                </div>
                        </div>
                    </div>

                    
                    <div className="hidden md:block h-full relative">
                        <Image
                            src={"/github-pages/foto-hero.webp"}
                            alt='imagem de dog'
                            className='object-contain'
                            fill
                            sizes="(max-width: 768px) 0vw 50vw"
                            />
                    </div>
                </article>
            </div>
        </section>
    )
}
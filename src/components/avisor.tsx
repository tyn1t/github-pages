"use client"
import { useState } from "react";

export default function Aviso() {
    const [fecha, setFecha] = useState(false);

    const fechatela = () => {
        setFecha(true); 
    };

    return (
        <>
        {!fecha && (
            <div className="fixed top-52 left-0 w-full z-50 ">

                <section className="flex mx-auto z-50 shadow-xl shadow-red-500 border p-4 bg-white rounded-lg w-96">
                    <div className="relative left-80">
                        <button 
                            onClick={fechatela} 
                            className="relative -top-2 text-red-500 font-bold"
                        >
                            ✖
                        </button>
                    </div>

                    <div className="text-center">
                        <h1 className="text-red-500 text-2xl font-bold">⚠️ Atenção</h1>
                        <p className="mt-2 text-gray-700">
                            Este projeto é um exemplo da minha habilidade para criar uma landing page.
                        <span className="font-bold">Lembre-se: Nada nesta página é real.</span>
                        </p>
                        <p className="mt-2 text-gray-600">
                            Demonstrando nossas habilidades em desenvolvimento web
                        </p>
                        <p className="mt-4 font-semibold">Se estiver interessado em nossos serviços, entre em contato! </p>
                    </div>
                </section>
            </div>
        )}
        </>
    );
    }


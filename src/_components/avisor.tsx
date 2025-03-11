import { useState } from "react";

function Aviso() {
    const [fecha, setFecha] = useState(false);

    const fechatela = () => {
        setFecha(true); // Fecha o aviso corretamente
    };

    return (
        <>
        {!fecha && ( // Exibe o aviso apenas se `fecha` for falso
            <section className="relative z-50 shadow-xl shadow-red-500 border p-4 bg-white rounded-lg w-96">
            <button 
                onClick={fechatela} 
                className="absolute top-2 right-2 text-red-500 font-bold"
            >
                ✖
            </button>
            <div className="text-center">
                <h1 className="text-red-500 text-2xl font-bold">⚠️ Atenção</h1>
                <p className="mt-2 text-gray-700">
                Esta página foi criada para exibir nossos trabalhos na criação de páginas, 
                <span className="font-bold"> não para apresentar pets.</span>
                </p>
                <p className="mt-2 text-gray-600">
                Aqui, você encontrará exemplos de projetos desenvolvidos, demonstrando nossas habilidades em desenvolvimento web.
                </p>
                <p className="mt-4 font-semibold">Se estiver interessado em nossos serviços, entre em contato!</p>
            </div>
            </section>
        )}
        </>
    );
    }

export default Aviso;

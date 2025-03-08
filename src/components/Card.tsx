'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import calculadoraImage from '../assets/images/calculadora.png';
import calendarioImage from '../assets/images/calendario.png';
import atendenteImage from '../assets/images/atendente.png';

const cards = [
  {
    href: "/calculadora",
    image: calculadoraImage,
    title: "Calculadora de Aula",
    description: "Realize os cálculos de aula com nossa calculadora.",
  },
  {
    href: "/calendario",
    image: calendarioImage,
    title: "Calendário Escolar",
    description: "Não perca nenhum momento escolar integrando nossos calendários.",
  },
  {
    href: "/tutordematematica",
    image: atendenteImage,
    title: "Não fique com dúvidas",
    description: "Realize suas perguntas e tire suas dificuldades com nosso tutor online.",
  },
];

const Card: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {cards.map((card, index) => (
          <Link key={index} href={card.href} className="w-full">
            <div className="relative bg-white border-4 border-yellow-400 rounded-xl shadow-xl overflow-hidden transform transition-transform hover:scale-105 h-full flex flex-col">
              {/* Brilho na borda */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-20"></div>

              {/* Imagem */}
              <div className="relative w-full h-40 bg-gray-300 flex-shrink-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  className="object-contain"
                  layout="fill"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-4 text-center flex-grow">
                <h5 className="text-lg font-bold text-gray-900">{card.title}</h5>
                <p className="text-sm text-gray-700 mt-2">{card.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
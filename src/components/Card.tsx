'use client';
import React from 'react';
import Link from 'next/link';
import IMAGE from 'next/image';
import calculadoraImage from '../assets/images/calculadora.png';
import calendarioImage from '../assets/images/calendario.png';
import atendenteImage from '../assets/images/atendente.png';

const Card: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex justify-center items-center space-x-4">
        <Link href="/calculadora">
          <div className="relative w-48 h-68 bg-white border-4 border-yellow-400 rounded-xl shadow-xl overflow-hidden transform transition-transform hover:scale-105">
            {/* Brilho na borda */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-20"></div>
            
            {/* Imagem no topo */}
            <div className="w-full h-auto bg-gray-300">
              <IMAGE
                src={calculadoraImage}
                alt="Figurinha" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Conteúdo da figurinha */}
            <div className="p-2 text-center">
              <h5 className="text-md font-bold text-gray-900">Calculadora de Aula</h5>
              <p className="text-sm text-gray-700">Realize os cálculos de aula com nossa calculadora.</p>
            </div>
          </div>
        </Link>

        <Link href="/calendario">
          <div className="relative w-48 h-68 bg-white border-4 border-yellow-400 rounded-xl shadow-xl overflow-hidden transform transition-transform hover:scale-105">
            {/* Brilho na borda */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-20"></div>
            
            {/* Imagem no topo */}
            <div className="w-full h-auto bg-gray-300">
              <IMAGE
                src={calendarioImage}
                alt="Figurinha" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Conteúdo da figurinha */}
            <div className="p-2 text-center">
              <h5 className="text-md font-bold text-gray-900">Calendário Escolar</h5>
              <p className="text-sm text-gray-700">Não perca nenhum momento escolar integrando nossos calendários</p>
            </div>
          </div>
        </Link>

        <Link href="/tutordematematica">
          <div className="relative w-48 h-68 bg-white border-4 border-yellow-400 rounded-xl shadow-xl overflow-hidden transform transition-transform hover:scale-105">
            {/* Brilho na borda */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-20"></div>
            
            {/* Imagem no topo */}
            <div className="w-full h-auto bg-gray-300">
              <IMAGE
                src={atendenteImage}
                alt="Figurinha" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Conteúdo da figurinha */}
            <div className="p-2 text-center">
              <h5 className="text-md font-bold text-gray-900">Não fique com dúvidas</h5>
              <p className="text-sm text-gray-700">Realize suas perguntas e tire suas dificuldades com nosso tutor online</p>
            </div>
          </div>
        </Link>


      </div>
    </div>
  );
};

export default Card;

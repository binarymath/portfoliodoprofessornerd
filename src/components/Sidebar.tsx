'use client';
import { FC } from 'react';
import Image from 'next/image';
import homeIcon from '../assets/icons/casa.png';
import calculadoraIcon from '../assets/icons/calculadora.ico';

interface SidebarProps {
  isOpen: boolean; // Estado para saber se o sidebar está aberto ou fechado
  toggleSidebar: () => void; // Função para alternar o estado do sidebar
}

const Sidebar: FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full transition-all duration-300 ease-in-out ${
          isOpen ? 'w-56' : 'w-16' // Ajusta a largura do sidebar com base no estado
        } bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full' // Controla o slide do sidebar
        }`}
      >
        <div className="flex justify-between items-center p-4">
          {/* Título do Sidebar */}
          <h2 className={`text-xl font-semibold ${isOpen ? 'block' : 'hidden'}`}>Navegação</h2>
        </div>
        {/* Itens do Sidebar */}
        <ul className="space-y-4 p-4">
            <li className="flex items-center">
              <Image src={homeIcon} alt="Home" className="w-6 h-6 mr-2 filter invert" />
              <a href="/" className="block text-lg">Home</a>
            </li>
           
            <li className="flex items-center">
            <Image src={calculadoraIcon} alt="Calculator" className="w-6 h-6 mr-2 filter invert" />
            <a href="/calculadora" className="block text-lg">Calculadora</a>
          
            </li>
          <li><a href="#" className="block text-lg">Item 3</a></li>
          <li><a href="#" className="block text-lg">Item 4</a></li>
        </ul>

        {/* Seta dentro do sidebar, posicionada no canto superior direito */}
        <button
          onClick={toggleSidebar}
          className={`absolute top-4 right-4 transform bg-gray-900 text-white p-3 rounded-full`}
          style={{ width: '40px', height: '40px' }} // Tamanho quadrado do botão
        >
          {/* Seta */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`h-6 w-6 transform text-white ${isOpen ? 'rotate-270' : ''}`} // Aplica rotação quando sidebar estiver aberto
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7" // Setas para a esquerda e direita
            />
          </svg>
        </button>
      </div>

      {/* Botão para abrir e fechar o sidebar, posicionado fora do sidebar quando fechado */}
      {!isOpen && (
     <button
     onClick={toggleSidebar}
     className={`absolute top-4 right-4 transform bg-gray-900 text-white p-2 rounded-full flex justify-center items-center`} // Menor tamanho do botão
     style={{ width: '30px', height: '30px' }} // Botão menor
   >
     {/* Seta */}
     <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       stroke="currentColor"
       className={`h-3 w-3 transform text-white ${isOpen ? 'rotate-270' : ''}`} // Seta menor
     >
       <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="5"
         d="M9 5l7 7-7 7" // Setas para a esquerda e direita
       />
     </svg>
   </button>
   
     
      )}
    </>
  );
};

export default Sidebar;

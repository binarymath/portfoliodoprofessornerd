'use client';
import { FC } from 'react';
import Image from 'next/image';
import homeIcon from '../assets/icons/casa.png';
import calculadoraIcon from '../assets/icons/calculadora.ico';
import SetaIcon from '../assets/icons/seta.svg';

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
            <li className="flex items-center hover:bg-gray-700 p-2 rounded">
            <Image src={homeIcon} alt="Home" className="w-6 h-6 mr-2 filter invert" />
            <a href="/" className="block text-sm">Home</a>
            </li>
          <li className="flex items-center hover:bg-gray-700 p-2 rounded">
            <Image src={calculadoraIcon} alt="Calculator" className="w-6 h-6 mr-2 filter invert" />
            <a href="/calculadora" className={`block text-sm ${isOpen ? 'block' : 'hidden'}`}>Calculadora de aulas</a>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded"><a href="#" className="block text-lg">Item 3</a></li>
          <li className="hover:bg-gray-700 p-2 rounded"><a href="#" className="block text-lg">Item 4</a></li>
        </ul>

        {/* Seta dentro do sidebar, posicionada no canto superior direito */}
        <button
          onClick={toggleSidebar}
          className={`absolute top-4 right-4 transform bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300`}
          style={{ width: '40px', height: '40px' }} // Tamanho quadrado do botão
        >
            <Image
            src={SetaIcon}
            alt="Toggle Sidebar"
            className={`h-24 w-24 transform ${isOpen ? 'rotate-270' : ''} filter invert`} // Aumenta a altura e largura da seta para 24px e inverte a cor para branco
            />
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
          <Image
            src={SetaIcon}
            alt="Toggle Sidebar"
            className={`h-24 w-24 transform ${isOpen ? 'rotate-180' : ''} filter invert`} // Aumenta a altura e largura da seta para 24px e inverte a cor para branco
            />
        </button>
      )}
    </>
  );
};

export default Sidebar;

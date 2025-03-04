'use client';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
        className={`fixed top-0 left-0 h-full transition-all duration-300 ease-in-out ${isOpen ? 'w-56' : 'w-16'} bg-gray-800 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4">
          {/* Título do Sidebar */}
          <h2 className={`text-xl font-semibold ${isOpen ? 'block' : 'hidden'}`}>Navegação</h2>
        </div>
        {/* Itens do Sidebar */}
        <ul className="space-y-4 p-4">
          <li className="flex items-center hover:bg-gray-700 p-2 rounded">
            <Image src={homeIcon} alt="Home" className="w-6 h-6 mr-2 filter invert" />
            <Link href="/" className="block text-sm">Home</Link>
          </li>
          <li className="flex items-center hover:bg-gray-700 p-2 rounded">
            <Image src={calculadoraIcon} alt="Calculator" className="w-6 h-6 mr-2 filter invert" />
            <Link href="/calculadora" className={`block text-sm ${isOpen ? 'block' : 'hidden'}`}>Calculadora de aulas</Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded"><Link href="#" className="block text-lg">Item 3</Link></li>
          <li className="hover:bg-gray-700 p-2 rounded"><Link href="#" className="block text-lg">Item 4</Link></li>
        </ul>

        {/* Seta dentro do sidebar, posicionada no canto superior direito */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 transform bg-gray-900 text-white p-3 rounded-full"
          style={{ width: '40px', height: '40px' }} // Tamanho quadrado do botão
        >
          <Image
            src={SetaIcon}
            alt="Toggle Sidebar"
            className={`h-6 w-6 transform ${isOpen ? 'rotate-270' : ''} filter invert`} // Ajuste no tamanho da seta
          />
        </button>
      </div>

      {/* Botão para abrir e fechar o sidebar, posicionado fora do sidebar quando fechado */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 transform bg-gray-900 text-white p-2 rounded-full flex justify-center items-center"
          style={{ width: '30px', height: '30px' }} // Botão menor
        >
          <Image
            src={SetaIcon}
            alt="Toggle Sidebar"
            className={`h-6 w-6 transform ${isOpen ? 'rotate-180' : ''} filter invert`} // Ajuste no tamanho da seta
          />
        </button>
      )}
    </>
  );
};

export default Sidebar;

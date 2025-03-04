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
          className={`absolute top-4 right-4 transform text-white p-3 rounded-full`}
          style={{ width: '50px', height: '50px' }}
        >
          <Image
            src={SetaIcon}
            alt="Toggle Sidebar"
            className={`h-8 w-8 transform ${isOpen ? 'rotate-270' : ''} filter invert`}
          />
        </button>
      </div>

      {/* Botão para abrir e fechar o sidebar, posicionado fora do sidebar quando fechado */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className={`fixed bottom-10 right-10 transform text-white p-2 rounded-full flex justify-center items-center bg-blue-900 bg-opacity-50`}
          style={{ width: '40px', height: '40px' }}
        >
          <Image
            src={SetaIcon}
            alt="Toggle Sidebar"
            className={`h-8 w-8 transform transition-transform duration-300 ${isOpen ? 'rotate-270' : 'rotate-180'} filter invert`}
          />
        </button>
      )}
    </>
  );
};

export default Sidebar;

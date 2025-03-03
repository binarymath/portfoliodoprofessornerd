'use client';
import { useState } from 'react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full ${
          isOpen ? 'w-56' : 'w-16'  // Ajustando a largura do sidebar
        } bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className={`text-xl font-semibold ${isOpen ? 'block' : 'hidden'}`}>Sidebar</h2>
          <button onClick={toggleSidebar} className="text-white">
            {/* Arrow icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`h-6 w-6 transform ${isOpen ? 'rotate-180' : ''}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <ul className="space-y-4 p-4">
          <li><a href="#" className="block text-lg">Item 1</a></li>
          <li><a href="#" className="block text-lg">Item 2</a></li>
          <li><a href="#" className="block text-lg">Item 3</a></li>
          <li><a href="#" className="block text-lg">Item 4</a></li>
        </ul>
      </div>

      {/* Button to Open Sidebar (Arrow on the side) */}
<button
  onClick={toggleSidebar}
  className={`fixed top-1/2 ${isOpen ? 'left-56' : 'left-0'} transform -translate-y-1/2 p-3 bg-gray-900 text-white`}  // Alterei para bg-gray-900
  style={{ width: '40px', height: '40px' }} // Tamanho quadrado do botão
>
  {/* Side arrow */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    stroke="currentColor"
    className="h-3 w-3 transform text-white"  // Seta branca
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="5"
      d="M9 5l7 7-7 7"
    />
  </svg>
</button>

    </>
  );
};

export default Sidebar;

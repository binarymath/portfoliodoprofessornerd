'use client'
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';

const Page: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      
      {/* Conteúdo */}
      <div className={`flex-1 p-4 transition-all duration-300 ease-in-out ${isOpen ? 'ml-56' : 'ml-16'}`}>
        <h1 className="text-2xl font-semibold mb-6">Portfólio do Professor Nerd</h1>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6 p-6">
          <Card title="Usuários Ativos" value="1,200" valueColor="text-blue-600" />
          <Card title="Vendas" value="$45,000" valueColor="text-green-600" />
          <Card title="Tickets" value="5" valueColor="text-yellow-600" />
          <Card title="Cadastros" value="150" valueColor="text-pink-600" />
          <Card title="Lucro" value="$8,500" valueColor="text-teal-600" />
          <Card title="Meta" value="90%" valueColor="text-purple-600" />
        </div>
      </div>
    </div>
  );
};

export default Page;

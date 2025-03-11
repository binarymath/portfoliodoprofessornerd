'use client'
import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Controle de espaçamento para telas pequenas e grandes */}
      <div className="flex-grow flex flex-col items-center">
        <div className="w-full max-w-screen-xl px-4 grid grid-cols-1 gap-4">
          <Card />
          {/* Adicione mais <Card /> conforme necessário */}
        </div>
      </div>
    </div>
  );
};

export default Page;

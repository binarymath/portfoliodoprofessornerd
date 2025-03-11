'use client'
import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Controle de espaçamento para telas pequenas e grandes */}
      <div className="sm:mt-14 md:mt-4 lg:mt-16 flex-grow flex flex-col items-center">
        <div className="w-full max-w-screen-xl px-4">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Page;

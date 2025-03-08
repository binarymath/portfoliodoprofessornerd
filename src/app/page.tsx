'use client'
import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Controle de espaçamento para telas pequenas e grandes */}
      <div className="mt-20 sm:mt-16 md:mt-10 lg:mt-18 flex-grow flex flex-col items-center">
        <Card />
      </div>
    </div>
  );
};

export default Page;

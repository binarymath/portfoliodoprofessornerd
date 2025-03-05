'use client'
import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 mt-6 p-4 flex justify-center"> {/* Ajuste a margem superior conforme necessário */}
        <Card />
      </div>
    </div>
  );
};

export default Page;
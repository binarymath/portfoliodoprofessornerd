'use client'
import React from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      <div className="flex-1 p-2 flex justify-center mt-12 md:mt-6 lg:mt-0 max-w-screen-lg w-full">
        <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-2 justify-center"> 
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Page;

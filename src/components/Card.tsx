'use client'
import React from 'react';

interface CardProps {
  title: string;
  value: string;
  valueColor: string;
}

const Card: React.FC<CardProps> = ({ title, value, valueColor }) => {
  return (
    <div className="w-40 h-56 bg-white rounded2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:scale-105 border border-gray-200 flex flex-col justify-center items-center text-center p-3">
      <h3 className="text-lg font-extrabold uppercase text-gray-700 mb-2">{title}</h3>
      <p className={`text-3xl font-bold ${valueColor}`}>{value}</p>
    </div>
  );
};

export default Card;

'use client';
import { useState, useEffect, useCallback } from "react";
import Sidebar from '../../components/Sidebar';
import React from 'react';

// Interfaces para definir os tipos de dados usados no estado
interface Multipliers {
  [key: number]: number;
}

interface Counts {
  [key: number]: number;
}

const AulaCalculator: React.FC = () => {
  // Estados para armazenar as datas de início e término, multiplicadores, mensagens de erro, total de aulas e contagem de dias
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [multipliers, setMultipliers] = useState<Multipliers>({});
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [counts, setCounts] = useState<Counts>({});
  const [saturdayMultiplier, setSaturdayMultiplier] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [nonTeachingDays, setNonTeachingDays] = useState<number>(0);
  const weekDays: string[] = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

  // Função para atualizar os multiplicadores
  const handleMultiplierChange = (day: number, value: number) => {
    setMultipliers((prev: Multipliers) => ({ ...prev, [day]: value }));
  };

  // Função para atualizar o multiplicador do sábado
  const handleSaturdayMultiplierChange = (value: number) => {
    setSaturdayMultiplier(value);
  };

  const handleNonTeachingDaysChange = (value: number) => {
    setNonTeachingDays(value);
  };

  // Função para calcular os dias de aula
  const calculateDays = useCallback(() => {
    if (!startDate || !endDate) return { total: 0, counts: {} };

    if (new Date(startDate) > new Date(endDate)) {
      setErrorMessage("A data de início não pode ser posterior à data de término.");
      return { total: 0, counts: {} };
    } else {
      setErrorMessage("");
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    const counts: Counts = {};
    let total = 0;

    // Conta os dias de cada dia da semana entre as datas de início e término
    for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
      const day = d.getDay();
      if (day === 6) continue; // Ignora os sábados
      counts[day] = (counts[day] || 0) + 1;
    }

    // Calcula o total de aulas
    total = Object.keys(counts).reduce((sum, key) => {
      const day = Number(key);
      const multiplier = multipliers[day] || 0;
      const dayCount = counts[day] || 0;
      return sum + dayCount * multiplier;
    }, 0);

    // Adiciona o multiplicador do sábado ao total
    total += saturdayMultiplier;

    // Subtrai os dias não letivos do total
    total -= nonTeachingDays;

    return { total, counts };
  }, [startDate, endDate, multipliers, saturdayMultiplier, nonTeachingDays]);

  // Atualiza o total de aulas e a contagem de dias sempre que as dependências mudam
  useEffect(() => {
    const { total, counts } = calculateDays();
    setTotal(total);
    setCounts(counts);
  }, [startDate, endDate, multipliers, saturdayMultiplier, nonTeachingDays, calculateDays]);

  // Função para alternar a visibilidade da sidebar
  const toggleSidebar = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 p-6 max-w-4xl mx-auto mt-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-md transition-all duration-300 ease-in-out ${isOpen ? 'ml-56' : 'ml-16'}`}>
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Calculadora de Aulas</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="startDate" className="block mb-2 text-sm font-medium text-white">Data de Início</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="endDate" className="block mb-2 text-sm font-medium text-white">Data de Término</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {errorMessage && <p className="text-red-500 text-center col-span-2">{errorMessage}</p>}

          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-4 text-white">Aulas na semana</h3>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
              {weekDays.map((day, index) => (
                <div key={index} className="flex flex-col items-center border border-gray-300 p-3 rounded-md bg-white bg-opacity-20">
                  <span className="text-sm font-medium text-white">{day}</span>
                  <span className="text-sm text-gray-200">{counts[index] || 0} dias</span>
                  <select
                    onChange={(e) => handleMultiplierChange(index, Number(e.target.value))}
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {[...Array(11).keys()].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>

        <div className="col-span-2 flex flex-col items-center mt-4 md:flex-row md:justify-around w-full">
          <div className="col-span-2 flex flex-col items-center mt-6 w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-4 text-white">Sábado Letivo</h3>
            <div className="flex flex-col items-center border border-gray-300 p-4 rounded-md bg-white bg-opacity-20 w-full">
              <span className="text-sm font-medium text-white mb-2">Sábado</span>
              <select
                onChange={(e) => handleSaturdayMultiplierChange(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {[...Array(11).keys()].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="col-span-2 flex flex-col items-center mt-6 w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-4 text-white">Quantidade de aulas não letivas</h3>
            <div className="flex flex-col items-center border border-gray-300 p-4 rounded-md bg-white bg-opacity-20 w-full">
              <span className="text-sm font-medium text-white mb-2">Aulas não letivas</span>
              <select
                onChange={(e) => handleNonTeachingDaysChange(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {[...Array(11).keys()].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

          <div className="col-span-2 text-lg font-semibold text-center mt-6 text-white">
            <span>Total de Aulas: </span><span className="text-yellow-300">{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AulaCalculator;

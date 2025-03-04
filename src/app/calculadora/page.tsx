'use client';
import { useState, useEffect, useCallback } from "react";
import Sidebar from '../../components/Sidebar';

export default function AulaCalculator() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [multipliers, setMultipliers] = useState<{ [key: number]: number }>({});
  const [errorMessage, setErrorMessage] = useState("");
  const [total, setTotal] = useState(0);
  const [counts, setCounts] = useState<{ [key: number]: number }>({});
  const [nonTeachingDays, setNonTeachingDays] = useState<{ [key: number]: number }>({
    0: 0, // Domingo
    6: 0, // Sábado
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const weekDays = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

  const handleMultiplierChange = (day: number, value: number) => {
    setMultipliers((prev) => ({ ...prev, [day]: value }));
  };

  const handleNonTeachingDayChange = (day: number, value: number) => {
    setNonTeachingDays((prev) => ({
      ...prev,
      [day]: value,
    }));
  };

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
    const counts: { [key: number]: number } = {};
    let total = 0;

    for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
      const day = d.getDay();
      // Ignora domingos de acordo com a configuração dos dias não letivos
      if (day === 0 && nonTeachingDays[0] > 0) continue; // Ignora domingo se marcado como não letivo
      counts[day] = (counts[day] || 0) + 1;
    }

    total = Object.keys(counts).reduce((sum, key) => {
      const day = Number(key);
      const multiplier = multipliers[day] || 0;
      const dayCount = day === 6 ? (counts[day] > 0 ? 1 : 0) : (counts[day] || 0); // Garante que sábado tenha apenas 0 ou 1 dia
      return sum + dayCount * multiplier;
    }, 0);

    // Subtrai os dias não letivos do total
    total -= nonTeachingDays[0] + nonTeachingDays[6];

    return { total, counts };
  }, [startDate, endDate, multipliers, nonTeachingDays]);

  useEffect(() => {
    const { total, counts } = calculateDays();
    setTotal(total);
    setCounts(counts);
  }, [startDate, endDate, multipliers, nonTeachingDays, calculateDays]);

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
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
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

          <div className="col-span-2 mt-6">
            <h3 className="text-lg font-semibold mb-4 text-white">Dias Não Letivos</h3>
            <div className="flex gap-6 justify-center">
              <div className="flex flex-col items-center">
                <label className="text-sm font-medium text-white mb-2">Insira a quantidade de dias não letivos durante a semana</label>
                <input
                  type="number"
                  value={nonTeachingDays[6]}
                  onChange={(e) => handleNonTeachingDayChange(6, Number(e.target.value))}
                  className="w-16 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  min={0}
                />
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
}

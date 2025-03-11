'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

type Grid = string[][];

const generateEmptyGrid = (size: number): Grid => {
  return Array(size)
    .fill(null)
    .map(() => Array(size).fill(''));
};

const placeWord = (grid: Grid, word: string): Grid => {
  const size = grid.length;
  const directions = ['horizontal', 'vertical', 'diagonal'];
  const direction = directions[Math.floor(Math.random() * directions.length)];
  const wordLength = word.length;
  let row, col;

  const reverseWord = Math.random() < 0.5;
  const finalWord = reverseWord ? word.split('').reverse().join('') : word;

  if (direction === 'horizontal') {
    row = Math.floor(Math.random() * size);
    col = Math.floor(Math.random() * (size - wordLength));
  } else if (direction === 'vertical') {
    row = Math.floor(Math.random() * (size - wordLength));
    col = Math.floor(Math.random() * size);
  } else {
    row = Math.floor(Math.random() * (size - wordLength));
    col = Math.floor(Math.random() * (size - wordLength));
  }

  for (let i = 0; i < wordLength; i++) {
    if (direction === 'horizontal') {
      grid[row][col + i] = finalWord[i];
    } else if (direction === 'vertical') {
      grid[row + i][col] = finalWord[i];
    } else {
      grid[row + i][col + i] = finalWord[i];
    }
  }

  return grid;
};

const WordSearch: React.FC = () => {
  const [size, setSize] = useState<number>(10);
  const [grid, setGrid] = useState<Grid>(generateEmptyGrid(10));
  const [words, setWords] = useState<string[]>([]);
  const [inputWord, setInputWord] = useState<string>('');
  const [customText, setCustomText] = useState<string>('');

  const addWord = () => {
    if (inputWord.trim() !== '' && inputWord.trim().length <= 17) {
      const newWords = [...words, inputWord.trim().toUpperCase()];
      setWords(newWords);
      setInputWord('');

      const maxLength = Math.max(...newWords.map(word => word.length));
      if (size < maxLength) {
        setSize(Math.min(maxLength, 18));
      }
    } else {
      alert('A palavra não pode ultrapassar 17 caracteres.');
    }
  };

  const handleCustomTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 100) {
      setCustomText(e.target.value);
    } else {
      alert('O texto personalizado não pode ultrapassar 100 caracteres.');
    }
  };

  const printWordSearch = () => {
    window.print();
  };

  useEffect(() => {
    let newGrid = generateEmptyGrid(size);

    words.forEach(word => {
      newGrid = placeWord(newGrid, word);
    });

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (newGrid[i][j] === '') {
          newGrid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        }
      }
    }

    setGrid(newGrid);
  }, [words, size]);

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <div className='mb-36'><Navbar /></div>
    
      <div className="p-6 max-w-xl mx-auto bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-black dark:text-white">Caça-Palavras</h1>
        <p className="text-center mb-4 text-gray-600 dark:text-gray-400 print:hidden">Adicione palavras para criar seu caça-palavras personalizado. Você também pode adicionar um texto personalizado que aparecerá na impressão.</p>
        
        <div className="mb-4 print:hidden">
          <label className="block mb-2 font-semibold text-black dark:text-white">Texto:</label>
          <textarea
            value={customText}
            onChange={handleCustomTextChange}
            placeholder="Digite um texto que aparecerá na impressão (máximo 100 caracteres)"
            className="border dark:border-gray-700 p-2 w-full resize-none h-24 bg-white dark:bg-gray-800 text-black dark:text-white"
          />
        </div>
        
        <div className="mb-4 print:hidden">
          <label className="block mb-2 font-semibold text-black dark:text-white">Adicionar Palavra:</label>
          <div className="flex items-center">
            <input
              type="text"
              value={inputWord}
              onChange={(e) => setInputWord(e.target.value)}
              placeholder="Digite uma palavra para adicionar ao caça-palavras (máximo 17 caracteres)"
              className="border dark:border-gray-700 p-2 mr-2 flex-1 bg-white dark:bg-gray-800 text-black dark:text-white"
            />
            <button onClick={addWord} className="bg-blue-500 text-white p-2 rounded">
              Adicionar Palavra
            </button>
          </div>
        </div>
        
        <div className="mb-4 flex items-center print:hidden">
          <label className="mr-2 text-black dark:text-white">Tamanho da Grade:</label>
          <input
            type="number"
            value={size}
            onChange={(e) => setSize(Math.min(Math.max(Number(e.target.value), Math.max(...words.map(word => word.length))), 18))}
            className="border dark:border-gray-700 p-2 bg-white dark:bg-gray-800 text-black dark:text-white"
          />
        </div>
        
        <div className="mb-4">
          <h2 className="font-semibold text-black dark:text-white">Texto:</h2>
          <p className="break-words">{customText}</p>
        </div>
        
        <div className="mb-4">
          <h2 className="font-semibold text-black dark:text-white">Palavras a procurar:</h2>
          <div className="flex flex-wrap gap-4">
            {words.map((word, index) => (
              <span key={index} className="font-bold">{word}</span>
            ))}
          </div>
        </div>
        
        <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}>
          {grid.map((row, rowIndex) => (
            row.map((letter, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="w-12 h-12 flex items-center justify-center border bg-gray-100 dark:bg-gray-700"
              >
                <span className="font-medium text-lg text-black dark:text-white">{letter}</span>
              </div>
            ))
          ))}
        </div>
        
        <div className="mt-4 flex justify-end print:hidden">
          <button onClick={printWordSearch} className="bg-green-500 text-white p-2 rounded">
            Imprimir
          </button>
        </div>
      </div>
    </div>
  );
};

export default WordSearch;

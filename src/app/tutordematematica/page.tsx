'use client'
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
import { marked } from 'marked';
dotenv.config();

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
if (!apiKey) {
  throw new Error("API_KEY is not defined in the environment variables");
}
const genAI = new GoogleGenerativeAI(apiKey);

const App: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const run = async () => {
    setLoading(true);
    setError('');
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();
      setResponse(text);
    } catch (err) {
      setError('Erro ao obter resposta da GenAI.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    run();
  };

  const formatResponse = (text: string) => {
    return { __html: marked(text) };
  };

  return (
    <>
    <div className = "mb-12"> <Navbar /></div>
     
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Faça a sua pergunta.</h1>
        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-4">
          <form onSubmit={handleSubmit} className="w-full">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Digite seu prompt aqui"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded"
              disabled={loading}
            >
              {loading ? 'Carregando...' : 'Enviar'}
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </form>
          <div className="mt-4 lg:mt-0 p-4 bg-white rounded shadow w-full">
            <h2 className="text-xl font-semibold mb-2">Resposta:</h2>
            {response ? (
              <div
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={formatResponse(response)}
              />
            ) : (
              <p className="text-gray-500">A resposta aparecerá aqui.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
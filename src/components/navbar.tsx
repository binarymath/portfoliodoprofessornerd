'use client';
import React, { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="text-xl font-bold">Portfólio do professor nerd</div>

                    {/* Links (Desktop) */}
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="hover:text-gray-300">Home</a>
                        <a href="#" className="hover:text-gray-300">Sobre</a>
                        <a href="#" className="hover:text-gray-300">Projetos</a>
                        <a href="#" className="hover:text-gray-300">Contato</a>
                    </div>

                    {/* Botão Hamburguer (Mobile) */}
                    <button className="md:hidden" onClick={toggleMenu}>
                        {isOpen ? (
                            <span className="text-2xl">&times;</span> // ícone "X"
                        ) : (
                            <span className="text-2xl">&#9776;</span> // ícone do Menu (Hamburguer)
                        )}
                    </button>
                </div>
            </div>

            {/* Menu Mobile */}
            {isOpen && (
                <div className="md:hidden bg-blue-800">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        <a href="#" className="hover:text-gray-300">Home</a>
                        <a href="#" className="hover:text-gray-300">Sobre</a>
                        <a href="#" className="hover:text-gray-300">Projetos</a>
                        <a href="#" className="hover:text-gray-300">Contato</a>
                    </div>
                </div>
            )}
        </nav>
    );
}

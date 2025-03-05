'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import casaIcons from '../assets/icons/casa.png'; 
import calculadoraIcons from '../assets/icons/calculadora.ico';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (isOpen && !(event.target as HTMLElement).closest('.navbar')) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="navbar fixed top-0 w-full bg-gray-800 z-50">
            <div className="flex justify-between items-center p-4">
                <div className="text-white text-lg">Portfólio do Professor Nerd</div>
                <button className="text-white text-2xl" onClick={toggleMenu}>
                    &#9776;
                </button>
            </div>
            <div className={`flex flex-col items-center bg-gray-800 w-full ${isOpen ? 'block' : 'hidden'}`}>
                <div className="flex items-center py-2">
                    <Image src={casaIcons} alt="Home Icon" className="h-6 w-6 mr-2" style={{ filter: 'invert(1)' }} />
                    <a href="/" className="text-white hover:bg-blue-500 py-2 px-4 rounded">Home</a>
                </div>
                <div className="flex items-center py-2">
                    <Image src={calculadoraIcons} alt="calculadora Icon" className="h-6 w-6 mr-2" style={{ filter: 'invert(1)' }} />
                    <a href="/calculadora" className="text-white hover:bg-blue-500 py-2 px-4 rounded">Calculadora de Aula</a>
                </div>
                <a href="#projects" className="text-white hover:bg-blue-500 py-2 px-4 rounded">Projects</a>
                <a href="#contact" className="text-white hover:bg-blue-500 py-2 px-4 rounded">Contact</a>
            </div>
        </div>
    );
};

export default Navbar;

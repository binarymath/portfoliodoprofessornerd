'use client'

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import casaIcons from '../assets/icons/casa.png'; 
import calculadoraIcons from '../assets/icons/calculadora.ico';
import calendarioIcons from '../assets/icons/calendario.png'; 
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (isOpen && !(event.target as HTMLElement).closest('.navbar')) {
            setIsOpen(false);
        }
    }, [isOpen]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <div className="navbar fixed top-0 w-full bg-gray-800 z-50">
            <div className="flex justify-between items-center p-4">
                <div className="text-white text-lg">Portfólio do Professor Nerd</div>
                <button className="navbar text-white text-2xl" onClick={toggleMenu}>
                    &#9776;
                </button>
            </div>
            <div className={`flex flex-col items-center bg-gray-800 w-full ${isOpen ? 'block' : 'hidden'}`}>
                <div className="flex items-center py-2">
                    <Image src={casaIcons} alt="Home Icon" width={24} height={24} className="mr-2" style={{ filter: 'invert(1)' }} />
                    <Link href="/" className="text-white hover:bg-blue-500 py-2 px-4 rounded">Home</Link>
                </div>

                <div className="flex items-center py-2">
                    <Image src={calendarioIcons} alt="Calculadora Icon" width={24} height={24} className="mr-2" style={{ filter: 'invert(1)' }} />
                    <Link href="/calendario" className="text-white hover:bg-blue-500 py-2 px-4 rounded">Calendário</Link>
                </div>

                <div className="flex items-center py-2">
                    <Image src={calculadoraIcons} alt="Calculadora Icon" width={24} height={24} className="mr-2" style={{ filter: 'invert(1)' }} />
                    <Link href="/calculadora" className="text-white hover:bg-blue-500 py-2 px-4 rounded">Calculadora de Aula</Link>
                </div>
               
               
                <Link href="#projects" className="text-white hover:bg-blue-500 py-2 px-4 rounded">Projects</Link>
               
               
                <Link href="#contact" className="text-white hover:bg-blue-500 py-2 px-4 rounded">Contact</Link>
            
            
            </div>
        </div>
    );
};

export default Navbar;

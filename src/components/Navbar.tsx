'use client'
import React, { useState, useEffect } from 'react';

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
                <a href="#home" className="text-white py-2">Home</a>
                <a href="#about" className="text-white py-2">About</a>
                <a href="#projects" className="text-white py-2">Projects</a>
                <a href="#contact" className="text-white py-2">Contact</a>
            </div>
        </div>
    );
};

export default Navbar;

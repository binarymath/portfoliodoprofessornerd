'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import casaIcon from '../assets/icons/casa.png';
import calculadoraIcon from '../assets/icons/calculadora.ico';
import calendarioIcon from '../assets/icons/calendario.png';

const menuItems = [
  { href: '/', label: 'Home', icon: casaIcon },
  { href: '/calendario', label: 'Calendário', icon: calendarioIcon },
  { href: '/calculadora', label: 'Calculadora de Aula', icon: calculadoraIcon },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: PointerEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handleClickOutside);
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-20">
      <nav className="fixed top-0 w-full bg-gray-800 z-50 shadow-md">
        <div className="flex justify-between items-center p-4">
          <Link href="/" className="text-white text-lg font-bold">
            Portfólio do Professor Nerd
          </Link>
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-white text-2xl md:hidden"
          >
            &#9776;
          </button>
        </div>

        {/* Menu para telas grandes */}
        <div className="hidden md:flex justify-center bg-gray-800">
          {menuItems.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center text-white hover:bg-blue-500 py-2 px-4 rounded transition mb-6"
            >
              {icon && (
                <Image
                  src={icon}
                  alt={`${label} Icon`}
                  width={24}
                  height={24}
                  className="mr-2 filter invert"
                />
              )}
              {label}
            </Link>
          ))}
        </div>

        {/* Menu para telas pequenas */}
        <div
          ref={menuRef}
          className={`absolute top-full left-0 w-full bg-gray-800 transition-all duration-300 ease-in-out md:hidden ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          {menuItems.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center text-white hover:bg-blue-500 py-2 px-4 rounded transition mb-6"
              onClick={() => setIsOpen(false)}
            >
              {icon && (
                <Image
                  src={icon}
                  alt={`${label} Icon`}
                  width={24}
                  height={24}
                  className="mr-2 filter invert"
                />
              )}
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

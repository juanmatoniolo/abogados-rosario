'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Áreas del Derecho', href: '/areas' },
  { name: 'Diligencias Judiciales en Rosario', href: '/diligencias' },
  { name: 'Gestoría Extrajudicial en Rosario', href: '/gestoria' },
  { name: 'Técnico Informático Firma Digital con Token', href: '/firmadigitaltoken' },
  { name: 'Contacto', href: '/contacto' },
];

export default function NavbarAbogado() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-gradient-to-r from-blue-950 via-blue-900 to-black text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Menú de navegación principal">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-semibold tracking-wide hover:text-blue-400 transition-colors" title="Ir al inicio">
            Estudio Jurídico Digital
          </Link>

          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-blue-400 focus:outline-none"
            aria-label="Abrir menú"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-blue-400 transition-colors duration-200"
                  title={item.name}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {menuOpen && (
          <ul className="md:hidden flex flex-col space-y-4 py-4 text-base font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block hover:text-blue-400 transition-colors duration-200"
                  title={item.name}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

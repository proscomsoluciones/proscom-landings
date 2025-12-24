'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

type ColorScheme = 'organizaciones' | 'deporte' | 'educacion' | 'agricultura' | 'ganaderia' | 'mineria';

const colorSchemes = {
    organizaciones: {
        bg: 'bg-blue-600',
        text: 'text-blue-600',
        hoverBg: 'hover:bg-blue-50',
        activeBg: 'bg-blue-50',
        border: 'border-blue-600'
    },
    deporte: {
        bg: 'bg-orange-600',
        text: 'text-orange-600',
        hoverBg: 'hover:bg-orange-50',
        activeBg: 'bg-orange-50',
        border: 'border-orange-600'
    },
    educacion: {
        bg: 'bg-violet-600',
        text: 'text-violet-600',
        hoverBg: 'hover:bg-violet-50',
        activeBg: 'bg-violet-50',
        border: 'border-violet-600'
    },
    agricultura: {
        bg: 'bg-green-600',
        text: 'text-green-600',
        hoverBg: 'hover:bg-green-50',
        activeBg: 'bg-green-50',
        border: 'border-green-600'
    },
    ganaderia: {
        bg: 'bg-amber-700',
        text: 'text-amber-700',
        hoverBg: 'hover:bg-amber-50',
        activeBg: 'bg-amber-50',
        border: 'border-amber-700'
    },
    mineria: {
        bg: 'bg-zinc-700',
        text: 'text-zinc-700',
        hoverBg: 'hover:bg-zinc-50',
        activeBg: 'bg-zinc-50',
        border: 'border-zinc-700'
    }
};

interface NavbarProps {
    colorScheme: ColorScheme;
    sectorName: string;
}

export default function Navbar({ colorScheme, sectorName }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const colors = colorSchemes[colorScheme];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#inicio', label: 'Inicio' },
        { href: '#problema', label: 'Problema' },
        { href: '#solucion', label: 'Solución' },
        { href: '#funcionalidades', label: 'Funcionalidades' },
        { href: '#beneficios', label: 'Beneficios' },
        { href: '#contacto', label: 'Contacto' }
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
        }`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Brand */}
                    <Link href="/" className="flex items-center space-x-2">
                        <span className={`text-xl font-bold ${colors.text}`}>Proscom</span>
                        <span className="hidden sm:inline text-slate-600">|</span>
                        <span className="hidden sm:inline text-slate-700 font-medium">{sectorName}</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`px-3 py-2 rounded-lg text-sm font-medium text-slate-700 ${colors.hoverBg} transition-colors`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contacto"
                            className={`ml-4 px-6 py-2 rounded-lg text-sm font-semibold text-white ${colors.bg} hover:opacity-90 transition-opacity shadow-md`}
                        >
                            Solicitar Demo
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-slate-200">
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium text-slate-700 ${colors.hoverBg} transition-colors`}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#contacto"
                                onClick={handleLinkClick}
                                className={`mx-4 mt-2 px-6 py-3 rounded-lg text-sm font-semibold text-white ${colors.bg} hover:opacity-90 transition-opacity text-center shadow-md`}
                            >
                                Solicitar Demo
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

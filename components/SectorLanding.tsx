"use client";

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Navbar from './Navbar';
import { useDemoModal } from './DemoModalContext';


// Color scheme type
type ColorScheme = 'organizaciones' | 'deporte' | 'educacion' | 'agricultura' | 'ganaderia' | 'mineria';

// Color configurations
const colorSchemes = {
    organizaciones: {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white',
        primaryText: 'text-blue-600',
        primaryBorder: 'border-blue-600',
        secondary: 'bg-blue-50',
        accent: 'from-blue-400 to-indigo-400',
        shadow: 'shadow-blue-500/30',
        blob1: 'bg-blue-400',
        blob2: 'bg-indigo-400',
        cardHover: 'hover:border-blue-200 hover:shadow-blue-100/50',
        badge: 'bg-white text-blue-900 border-blue-100',
        darkBg: 'bg-blue-950',
        darkAccent: 'text-blue-400'
    },
    deporte: {
        primary: 'bg-orange-600 hover:bg-orange-700 text-white',
        primaryText: 'text-orange-600',
        primaryBorder: 'border-orange-600',
        secondary: 'bg-orange-50',
        accent: 'from-orange-400 to-red-400',
        shadow: 'shadow-orange-500/30',
        blob1: 'bg-orange-400',
        blob2: 'bg-red-400',
        cardHover: 'hover:border-orange-200 hover:shadow-orange-100/50',
        badge: 'bg-white text-orange-900 border-orange-100',
        darkBg: 'bg-orange-950',
        darkAccent: 'text-orange-400'
    },
    educacion: {
        primary: 'bg-violet-600 hover:bg-violet-700 text-white',
        primaryText: 'text-violet-600',
        primaryBorder: 'border-violet-600',
        secondary: 'bg-violet-50',
        accent: 'from-violet-400 to-purple-400',
        shadow: 'shadow-violet-500/30',
        blob1: 'bg-violet-400',
        blob2: 'bg-purple-400',
        cardHover: 'hover:border-violet-200 hover:shadow-violet-100/50',
        badge: 'bg-white text-violet-900 border-violet-100',
        darkBg: 'bg-violet-950',
        darkAccent: 'text-violet-400'
    },
    agricultura: {
        primary: 'bg-green-600 hover:bg-green-700 text-white',
        primaryText: 'text-green-600',
        primaryBorder: 'border-green-600',
        secondary: 'bg-green-50',
        accent: 'from-green-400 to-emerald-400',
        shadow: 'shadow-green-500/30',
        blob1: 'bg-green-400',
        blob2: 'bg-emerald-400',
        cardHover: 'hover:border-green-200 hover:shadow-green-100/50',
        badge: 'bg-white text-green-900 border-green-100',
        darkBg: 'bg-green-950',
        darkAccent: 'text-green-400'
    },
    ganaderia: {
        primary: 'bg-amber-700 hover:bg-amber-800 text-white',
        primaryText: 'text-amber-700',
        primaryBorder: 'border-amber-700',
        secondary: 'bg-amber-50',
        accent: 'from-amber-600 to-orange-600',
        shadow: 'shadow-amber-600/30',
        blob1: 'bg-amber-500',
        blob2: 'bg-orange-500',
        cardHover: 'hover:border-amber-200 hover:shadow-amber-100/50',
        badge: 'bg-white text-amber-900 border-amber-100',
        darkBg: 'bg-amber-950',
        darkAccent: 'text-amber-400'
    },
    mineria: {
        primary: 'bg-zinc-700 hover:bg-zinc-800 text-white',
        primaryText: 'text-zinc-700',
        primaryBorder: 'border-zinc-700',
        secondary: 'bg-zinc-50',
        accent: 'from-zinc-600 to-slate-600',
        shadow: 'shadow-zinc-600/30',
        blob1: 'bg-zinc-500',
        blob2: 'bg-slate-500',
        cardHover: 'hover:border-zinc-200 hover:shadow-zinc-100/50',
        badge: 'bg-white text-zinc-900 border-zinc-100',
        darkBg: 'bg-zinc-900',
        darkAccent: 'text-zinc-400'
    }
};

// Simple SVG Icons
const CheckIcon = ({ colorScheme }: { colorScheme: ColorScheme }) => {
    const colors = colorSchemes[colorScheme];
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-5 h-5 flex-shrink-0 ${colors.primaryText}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    );
};

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);

interface Feature {
    title: string;
    description: string;
}

interface Benefit {
    title: string;
    description: string;
}

interface WorkflowStep {
    step: number;
    title: string;
    description: string;
}

interface Props {
    colorScheme: ColorScheme;
    sectorName: string;
    title: string;
    subtitle: string;
    heroImage?: string;
    ctaText?: string;
    ctaLink?: string;
    
    problemTitle: string;
    problemDescription: string;
    
    solutionTitle: string;
    solutionDescription: string;
    
    features: Feature[];
    benefits: Benefit[];
    
    targetAudienceTitle: string;
    targetAudience: string[];
    
    workflowTitle: string;
    workflow: WorkflowStep[];
    
    finalCtaTitle: string;
    finalCtaText: string;
}

export default function SectorLanding({
    colorScheme,
    sectorName,
    title,
    subtitle,
    heroImage,
    ctaText = "Solicitar Demo",
    ctaLink = "#contact",
    problemTitle,
    problemDescription,
    solutionTitle,
    solutionDescription,
    features,
    benefits,
    targetAudienceTitle,
    targetAudience,
    workflowTitle,
    workflow,
    finalCtaTitle,
    finalCtaText
}: Props) {
    const colors = colorSchemes[colorScheme];
    const { openModal } = useDemoModal();
    
    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-800 font-sans">
            <Navbar colorScheme={colorScheme} sectorName={sectorName} />
            {/* 1. Hero */}
            <section id="inicio" className={`relative pt-28 pb-24 lg:pt-40 lg:pb-32 overflow-hidden ${colors.secondary} border-b border-slate-200/50`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                                {title}
                            </h1>
                            <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
                                {subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                                <button 
                                    onClick={() => openModal(colorScheme)}
                                    className={`inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl transition-all transform hover:scale-105 ${colors.primary} ${colors.shadow} shadow-xl`}
                                >
                                    {ctaText}
                                    <ArrowRightIcon />
                                </button>
                                <Link 
                                    href="https://www.proscom.cl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-xl hover:bg-white hover:border-slate-300 transition-all shadow-lg"
                                >
                                    Conocer más
                                </Link>
                            </div>
                        </div>
                        {heroImage && (
                            <div className="relative">
                                <div className={`absolute inset-0 bg-gradient-to-br ${colors.accent} opacity-20 rounded-3xl blur-2xl`}></div>
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur">
                                    <Image 
                                        src={heroImage} 
                                        alt={title}
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {/* Decorative background blobs */}
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none overflow-hidden">
                    <div className={`absolute -top-24 -left-24 w-96 h-96 ${colors.blob1} rounded-full mix-blend-multiply filter blur-3xl animate-blob`}></div>
                    <div className={`absolute -top-24 -right-24 w-96 h-96 ${colors.blob2} rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000`}></div>
                    <div className={`absolute -bottom-24 left-1/2 w-96 h-96 ${colors.blob1} rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000`}></div>
                </div>
            </section>

            {/* 2. Problema Real */}
            <section id="problema" className="py-16 lg:py-24 bg-white relative">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-transparent"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">{problemTitle}</h2>
                        <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
                            {problemDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Solución Proscom */}
            <section id="solucion" className={`py-16 lg:py-24 ${colors.secondary} relative overflow-hidden`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        <div className="flex-1 text-center lg:text-left">
                            <div className={`inline-block px-4 py-2 rounded-full ${colors.primary} text-sm font-bold mb-4 shadow-lg`}>
                                Solución Proscom
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{solutionTitle}</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {solutionDescription}
                            </p>
                            <ul className="space-y-4 text-left inline-block">
                                {features.slice(0, 3).map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckIcon colorScheme={colorScheme} />
                                        <span className="text-slate-700 font-medium">{feature.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Visual representation with glassmorphism */}
                        <div className="flex-1 w-full max-w-lg lg:max-w-none">
                            <div className={`relative bg-gradient-to-br ${colors.accent} rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm`}>
                                <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-xl"></div>
                                <div className="relative space-y-4">
                                    <div className="h-4 bg-white/70 rounded-full w-3/4 shadow-sm"></div>
                                    <div className="h-4 bg-white/70 rounded-full w-1/2 shadow-sm"></div>
                                    <div className="grid grid-cols-2 gap-4 pt-4">
                                        <div className="h-32 bg-white/80 rounded-2xl shadow-xl backdrop-blur-sm border border-white/50"></div>
                                        <div className="h-32 bg-white/80 rounded-2xl shadow-xl backdrop-blur-sm border border-white/50"></div>
                                    </div>
                                    <div className="h-24 bg-white/60 rounded-2xl shadow-lg backdrop-blur-sm border border-white/40"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Funcionalidades */}
            <section id="funcionalidades" className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Funcionalidades Clave</h2>
                        <p className="text-lg text-slate-600">Herramientas diseñadas para el control total</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className={`group p-8 rounded-2xl border-2 border-slate-100 bg-gradient-to-br from-white to-slate-50/50 hover:shadow-2xl transition-all duration-300 ${colors.cardHover}`}>
                                <div className={`w-12 h-12 rounded-xl ${colors.primary} ${colors.shadow} shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <span className="text-xl font-bold">{idx + 1}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Beneficios */}
            <section id="beneficios" className={`py-16 lg:py-24 ${colors.darkBg} text-white relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Impacto en tu Negocio</h2>
                        <p className="text-lg text-slate-300">Resultados tangibles desde el primer mes</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl">
                                <div className={`${colors.darkAccent} font-bold text-2xl mb-4`}>0{idx + 1}</div>
                                <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                                <p className="text-slate-300 text-sm leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Para quién es */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`max-w-4xl mx-auto ${colors.secondary} rounded-3xl p-8 lg:p-12 text-center shadow-2xl border-2 border-white/50`}>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">{targetAudienceTitle}</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {targetAudience.map((target, idx) => (
                                <span key={idx} className={`inline-flex items-center px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 ${colors.badge}`}>
                                    {target}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Cómo trabajamos */}
            <section className={`py-16 lg:py-24 ${colors.secondary} overflow-hidden`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">{workflowTitle}</h2>
                    </div>
                    <div className="relative">
                        {/* Connecting line */}
                        <div className={`hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r ${colors.accent} opacity-20 -translate-y-1/2 z-0 rounded-full`}></div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
                            {workflow.map((step, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                                    <div className={`w-20 h-20 rounded-2xl ${colors.primary} flex items-center justify-center text-3xl font-bold mb-6 ${colors.shadow} shadow-2xl transform hover:rotate-6 transition-transform`}>
                                        {step.step}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. CTA Final */}
            <section id="contacto" className={`py-20 lg:py-28 ${colors.primary} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
                    <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        {finalCtaTitle}
                    </h2>
                    <p className="text-white/90 text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                        Únete a las organizaciones que ya han optimizado su gestión con Proscom.
                    </p>
                    <button 
                        onClick={() => openModal(colorScheme)}
                        className={`inline-flex items-center justify-center px-10 py-5 text-lg font-bold bg-white rounded-xl hover:bg-slate-50 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 ${colors.primaryText}`}
                    >
                        {finalCtaText}
                        <ArrowRightIcon />
                    </button>
                </div>
            </section>
        </div>
    );
}

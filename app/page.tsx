import Link from 'next/link';

export default function Home() {
  const sectors = [
    { 
      name: 'Organizaciones', 
      href: '/organizaciones', 
      color: 'text-blue-600',
      iconColor: 'bg-blue-100 text-blue-600',
      borderColor: 'hover:border-blue-200',
      icon: '🏢',
      description: 'Gestión integral para juntas de vecinos y organizaciones sociales.'
    },
    { 
      name: 'Deporte', 
      href: '/deporte', 
      color: 'text-orange-600',
      iconColor: 'bg-orange-100 text-orange-600',
      borderColor: 'hover:border-orange-200',
      icon: '⚽',
      description: 'Administración completa para asociaciones deportivas y clubes.'
    },
    { 
      name: 'Educación', 
      href: '/educacion', 
      color: 'text-violet-600',
      iconColor: 'bg-violet-100 text-violet-600',
      borderColor: 'hover:border-violet-200',
      icon: '📚',
      description: 'Soluciones digitales para colegios e instituciones educativas.'
    },
    { 
      name: 'Agricultura', 
      href: '/agricultura', 
      color: 'text-green-600',
      iconColor: 'bg-green-100 text-green-600',
      borderColor: 'hover:border-green-200',
      icon: '🌾',
      description: 'Control y gestión agrícola para optimizar tu producción.'
    },
    { 
      name: 'Ganadería', 
      href: '/ganaderia', 
      color: 'text-amber-700',
      iconColor: 'bg-amber-100 text-amber-700',
      borderColor: 'hover:border-amber-200',
      icon: '🐄',
      description: 'Gestión ganadera y control animal profesional.'
    },
    { 
      name: 'Minería', 
      href: '/mineria', 
      color: 'text-zinc-700',
      iconColor: 'bg-zinc-100 text-zinc-700',
      borderColor: 'hover:border-zinc-200',
      icon: '⛏️',
      description: 'Gestión especializada para pequeña y mediana minería.'
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-4">
             <span className="inline-block py-1 px-3 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-6">
                Soluciones Digitales
             </span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              Proscom
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Soluciones tecnológicas especializadas para transformar la gestión y administración de tu sector con eficiencia y transparencia.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nuestros Sectores</h2>
            <p className="text-lg text-slate-600">Selecciona tu industria para conocer nuestras soluciones</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {sectors.map((sector, index) => (
              <Link 
                key={sector.name} 
                href={sector.href}
                className={`group p-8 bg-white rounded-2xl border-2 border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${sector.borderColor}`}
              >
                <div className="flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-xl ${sector.iconColor} flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {sector.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-slate-800 transition-colors">
                    {sector.name}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                    {sector.description}
                  </p>
                  
                  <div className={`flex items-center text-sm font-bold ${sector.color} opacity-90 group-hover:opacity-100 transition-opacity`}>
                    Ver soluciones
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-20 px-4 bg-white border-t border-slate-200">
        <div className="container mx-auto max-w-4xl text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              ¿No encuentras tu sector?
            </h3>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
              Contáctanos y descubre cómo podemos adaptar nuestras herramientas tecnológicas a tus necesidades específicas.
            </p>
            <a 
              href="https://www.proscom.cl" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Visitar Proscom.cl
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
        </div>
      </section>
    </div>
  );
}

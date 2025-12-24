import Link from 'next/link';

export default function Home() {
  const sectors = [
    { 
      name: 'Organizaciones', 
      href: '/organizaciones', 
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-600',
      icon: '🏢',
      description: 'Gestión integral para juntas de vecinos y organizaciones sociales.'
    },
    { 
      name: 'Deporte', 
      href: '/deporte', 
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-600',
      icon: '⚽',
      description: 'Administración completa para asociaciones deportivas y clubes.'
    },
    { 
      name: 'Educación', 
      href: '/educacion', 
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-600',
      icon: '📚',
      description: 'Soluciones digitales para colegios e instituciones educativas.'
    },
    { 
      name: 'Agricultura', 
      href: '/agricultura', 
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-600',
      icon: '🌾',
      description: 'Control y gestión agrícola para optimizar tu producción.'
    },
    { 
      name: 'Ganadería', 
      href: '/ganaderia', 
      color: 'from-amber-600 to-orange-600',
      bgColor: 'bg-amber-700',
      icon: '🐄',
      description: 'Gestión ganadera y control animal profesional.'
    },
    { 
      name: 'Minería', 
      href: '/mineria', 
      color: 'from-zinc-600 to-slate-600',
      bgColor: 'bg-zinc-700',
      icon: '⛏️',
      description: 'Gestión especializada para pequeña y mediana minería.'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 font-sans text-slate-900 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              Proscom
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Soluciones digitales especializadas para transformar la gestión de tu sector
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="relative pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <Link 
                key={sector.name} 
                href={sector.href}
                className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient top bar */}
                <div className={`h-2 bg-gradient-to-r ${sector.color} w-full`}></div>
                
                {/* Card content */}
                <div className="p-8 relative">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${sector.color} flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {sector.icon}
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-slate-900 transition-colors">
                    {sector.name}
                  </h2>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {sector.description}
                  </p>
                  
                  {/* Animated arrow */}
                  <div className={`inline-flex items-center text-sm font-bold uppercase tracking-wider bg-gradient-to-r ${sector.color} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                    Explorar solución
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-slate-200">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              ¿No encuentras tu sector?
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              Contáctanos y descubre cómo Proscom puede adaptarse a tus necesidades específicas
            </p>
            <a 
              href="https://www.proscom.cl" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl hover:from-blue-700 hover:to-violet-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Visitar Proscom.cl
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

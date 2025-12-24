import type { Metadata } from 'next';
import SectorLanding from '@/components/SectorLanding';

export const metadata: Metadata = {
  title: 'Control Administrativo para Pequeña Minería - Proscom',
  description: 'Plataforma de gestión para pequeña minería. Ordena gastos, documentos y la gestión básica de tu faena.',
  keywords: ['gestión minera', 'pequeña minería', 'control de faenas', 'administración minera'],
};

export default function MineriaPage() {
  return (
    <SectorLanding
      colorScheme="mineria"
      sectorName="Minería"
      heroImage="/hero-mineria.png"
      title="Control administrativo para pequeña minería"
      subtitle="Ordena gastos, documentos y la gestión básica de tu faena."
      ctaText="Solicitar Demo"
      ctaLink="#contact"
      problemTitle="El desafío de la pequeña minería"
      problemDescription="La pequeña minería suele operar sin sistemas de control administrativo claros."
      solutionTitle="Plataforma simple para gestión de faenas mineras"
      solutionDescription="Proscom ofrece una solución para ordenar la gestión básica de faenas mineras."
      features={[
        { 
          title: "Registro de faenas", 
          description: "Control básico de faenas activas y sus características." 
        },
        { 
          title: "Control de gastos", 
          description: "Registro de gastos operativos con fecha y concepto." 
        },
        { 
          title: "Gestión documental", 
          description: "Repositorio digital para permisos, contratos y documentos." 
        },
        { 
          title: "Resumen mensual", 
          description: "Reporte simple de gastos y actividades por período." 
        },
        { 
          title: "Control de proveedores", 
          description: "Registro básico de proveedores y servicios contratados." 
        },
        { 
          title: "Observaciones", 
          description: "Notas y comentarios sobre faenas y actividades." 
        }
      ]}
      benefits={[
        { 
          title: "Mejor control", 
          description: "Visibilidad clara de gastos y documentación." 
        },
        { 
          title: "Orden administrativo", 
          description: "Información centralizada y disponible." 
        },
        { 
          title: "Respaldo documental", 
          description: "Documentos ordenados y accesibles cuando se necesitan." 
        },
        { 
          title: "Simplicidad", 
          description: "Fácil de usar sin conocimientos técnicos." 
        }
      ]}
      targetAudienceTitle="¿Para quién es esta solución?"
      targetAudience={[
        "Pequeña minería",
        "Productores mineros",
        "Asociaciones mineras",
        "Pirquineros"
      ]}
      workflowTitle="Cómo trabajamos en Proscom"
      workflow={[
        { 
          step: 1, 
          title: "Diagnóstico breve", 
          description: "Conocemos tu faena y sus necesidades específicas." 
        },
        { 
          step: 2, 
          title: "Implementación rápida", 
          description: "Configuramos la plataforma y capacitamos a tu equipo de forma simple." 
        },
        { 
          step: 3, 
          title: "Acompañamiento continuo", 
          description: "Proscom no solo entrega tecnología, acompaña la gestión." 
        }
      ]}
      finalCtaTitle="Ordena tu gestión minera con Proscom"
      finalCtaText="Solicitar Demo"
    />
  );
}

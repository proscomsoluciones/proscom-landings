import type { Metadata } from 'next';
import SectorLanding from '@/components/SectorLanding';

export const metadata: Metadata = {
  title: 'Gestión Agrícola Simple - Proscom',
  description: 'Plataforma de gestión para actividades agrícolas. Planifica y controla aplicaciones agrícolas con un calendario digital claro.',
  keywords: ['gestión agrícola', 'calendario de aplicaciones', 'planificación agrícola', 'control de cultivos'],
};

export default function AgriculturaPage() {
  return (
    <SectorLanding
      colorScheme="agricultura"
      sectorName="Agricultura"
      heroImage="/hero-agricultura.png"
      title="Gestión simple para actividades agrícolas"
      subtitle="Planifica y controla aplicaciones agrícolas con un calendario digital claro."
      ctaText="Solicitar Demo"
      ctaLink="#contact"
      problemTitle="El desafío de la planificación agrícola"
      problemDescription="Las actividades agrícolas suelen llevarse sin planificación centralizada ni respaldo histórico."
      solutionTitle="Calendario digital de aplicaciones agrícolas"
      solutionDescription="Proscom digitaliza la planificación agrícola mediante un calendario de aplicaciones fácil de usar."
      features={[
        { 
          title: "Calendario de aplicaciones", 
          description: "Planificación de fertilizaciones, fumigaciones y tratamientos por lote." 
        },
        { 
          title: "Registro de actividades", 
          description: "Historial completo de todas las aplicaciones realizadas." 
        },
        { 
          title: "Observaciones y respaldo", 
          description: "Notas y comentarios sobre cada aplicación para referencia futura." 
        },
        { 
          title: "Historial por temporada", 
          description: "Consulta de actividades de temporadas anteriores para planificación." 
        },
        { 
          title: "Control de insumos", 
          description: "Registro de productos utilizados en cada aplicación." 
        },
        { 
          title: "Alertas y recordatorios", 
          description: "Notificaciones de aplicaciones programadas próximas." 
        }
      ]}
      benefits={[
        { 
          title: "Mejor planificación", 
          description: "Visión clara de todas las aplicaciones programadas." 
        },
        { 
          title: "Historial completo", 
          description: "Respaldo de todas las actividades por temporada." 
        },
        { 
          title: "Menos olvidos", 
          description: "Alertas automáticas de aplicaciones pendientes." 
        },
        { 
          title: "Trazabilidad", 
          description: "Registro completo para certificaciones y auditorías." 
        }
      ]}
      targetAudienceTitle="¿Para quién es esta solución?"
      targetAudience={[
        "Agricultores",
        "Productores agrícolas",
        "Cooperativas agrícolas",
        "Administradores de predios"
      ]}
      workflowTitle="Cómo trabajamos en Proscom"
      workflow={[
        { 
          step: 1, 
          title: "Diagnóstico breve", 
          description: "Conocemos tu operación y sus necesidades específicas." 
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
      finalCtaTitle="Ordena tu gestión agrícola con Proscom"
      finalCtaText="Solicitar Demo"
    />
  );
}

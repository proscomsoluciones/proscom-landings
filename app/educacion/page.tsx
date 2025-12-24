import type { Metadata } from 'next';
import SectorLanding from '@/components/SectorLanding';

export const metadata: Metadata = {
  title: 'Gestión Educativa para Establecimientos - Proscom',
  description: 'Plataforma de gestión para establecimientos educacionales. Planifica actividades y ordena la gestión institucional con una solución simple.',
  keywords: ['gestión educativa', 'planificación escolar', 'calendario educacional', 'administración colegios'],
};

export default function EducacionPage() {
  return (
    <SectorLanding
      colorScheme="educacion"
      sectorName="Educación"
      heroImage="/hero-educacion.png"
      title="Orden y gestión para establecimientos educacionales"
      subtitle="Planifica actividades y ordena la gestión institucional con una solución simple."
      ctaText="Solicitar Demo"
      ctaLink="#contact"
      problemTitle="El desafío de la planificación educativa"
      problemDescription="La planificación anual y la gestión documental se realizan sin un sistema centralizado, generando improvisación y pérdida de información."
      solutionTitle="Plataforma de gestión educativa administrativa"
      solutionDescription="Proscom ofrece una solución enfocada en orden, planificación y respaldo institucional para establecimientos educacionales."
      features={[
        { 
          title: "Calendario anual de actividades", 
          description: "Planificación completa del año escolar con todas las actividades institucionales." 
        },
        { 
          title: "Registro de actividades realizadas", 
          description: "Historial de eventos, ceremonias y actividades ejecutadas." 
        },
        { 
          title: "Gestión documental", 
          description: "Repositorio digital para actas, resoluciones y documentos institucionales." 
        },
        { 
          title: "Reportes institucionales", 
          description: "Informes de gestión para la dirección y sostenedor." 
        },
        { 
          title: "Control de compromisos", 
          description: "Seguimiento de tareas y responsabilidades del equipo directivo." 
        },
        { 
          title: "Comunicación interna", 
          description: "Notificaciones y recordatorios para el equipo educativo." 
        }
      ]}
      benefits={[
        { 
          title: "Mejor planificación", 
          description: "Visión clara del año escolar completo y sus actividades." 
        },
        { 
          title: "Menos improvisación", 
          description: "Reduce eventos no planificados con calendario centralizado." 
        },
        { 
          title: "Orden institucional", 
          description: "Toda la documentación respaldada y accesible." 
        },
        { 
          title: "Ahorro de tiempo", 
          description: "Reduce tiempo en búsqueda de información y coordinación." 
        }
      ]}
      targetAudienceTitle="¿Para quién es esta solución?"
      targetAudience={[
        "Colegios",
        "Jardines infantiles",
        "Corporaciones educacionales",
        "Fundaciones educacionales"
      ]}
      workflowTitle="Cómo trabajamos en Proscom"
      workflow={[
        { 
          step: 1, 
          title: "Diagnóstico breve", 
          description: "Conocemos tu establecimiento y sus necesidades específicas." 
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
      finalCtaTitle="Ordena tu gestión educativa con Proscom"
      finalCtaText="Solicitar Demo"
    />
  );
}

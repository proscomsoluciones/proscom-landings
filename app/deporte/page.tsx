import type { Metadata } from 'next';
import SectorLanding from '@/components/SectorLanding';

export const metadata: Metadata = {
  title: 'Gestión Deportiva para Asociaciones - Proscom',
  description: 'Plataforma de gestión administrativa para asociaciones deportivas. Controla finanzas, sanciones y documentación del fútbol amateur.',
  keywords: ['gestión deportiva', 'asociaciones de fútbol amateur', 'control de sanciones deportivas', 'administración clubes deportivos'],
};

export default function DeportePage() {
  return (
    <SectorLanding
      colorScheme="deporte"
      sectorName="Deporte"
      heroImage="/hero-deporte.png"
      title="Gestión administrativa para asociaciones deportivas"
      subtitle="Ordena finanzas, sanciones y documentación del fútbol amateur en una sola plataforma."
      ctaText="Solicitar Demo"
      ctaLink="#contact"
      problemTitle="El desafío de la gestión deportiva"
      problemDescription="Las asociaciones deportivas manejan información crítica sin control claro, generando conflictos, desorden y poca transparencia."
      solutionTitle="Digitalización de la gestión deportiva amateur"
      solutionDescription="Proscom digitaliza la gestión administrativa del deporte amateur, enfocándose en control interno y respaldo de información."
      features={[
        { 
          title: "Control financiero", 
          description: "Registro de ingresos y egresos con control por fecha y concepto." 
        },
        { 
          title: "Registro de clubes y jugadores", 
          description: "Base de datos centralizada de clubes afiliados y jugadores registrados." 
        },
        { 
          title: "Gestión de sanciones", 
          description: "Control de sanciones disciplinarias con historial y seguimiento." 
        },
        { 
          title: "Gestión documental", 
          description: "Repositorio digital para actas, resoluciones y documentos oficiales." 
        },
        { 
          title: "Reportes claros", 
          description: "Informes financieros y administrativos para la directiva." 
        },
        { 
          title: "Calendario de actividades", 
          description: "Planificación de torneos, partidos y eventos deportivos." 
        }
      ]}
      benefits={[
        { 
          title: "Mayor transparencia", 
          description: "Información clara y accesible para todos los clubes afiliados." 
        },
        { 
          title: "Menos conflictos", 
          description: "Reduce disputas con información respaldada y verificable." 
        },
        { 
          title: "Mejor control", 
          description: "Visibilidad completa de finanzas y sanciones disciplinarias." 
        },
        { 
          title: "Orden administrativo", 
          description: "Toda la documentación centralizada y disponible." 
        }
      ]}
      targetAudienceTitle="¿Para quién es esta solución?"
      targetAudience={[
        "Asociaciones de fútbol amateur",
        "Ligas comunales",
        "Clubes deportivos",
        "Federaciones deportivas"
      ]}
      workflowTitle="Cómo trabajamos en Proscom"
      workflow={[
        { 
          step: 1, 
          title: "Diagnóstico breve", 
          description: "Conocemos tu asociación y sus necesidades específicas." 
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
      finalCtaTitle="Ordena tu gestión deportiva con Proscom"
      finalCtaText="Solicitar Demo"
    />
  );
}

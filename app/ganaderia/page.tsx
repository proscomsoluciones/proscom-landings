import type { Metadata } from 'next';
import SectorLanding from '@/components/SectorLanding';

export const metadata: Metadata = {
  title: 'Control Ganadero Básico - Proscom',
  description: 'Plataforma de control para operaciones ganaderas. Lleva un control simple de animales, ingresos y gastos.',
  keywords: ['gestión ganadera', 'control de ganado', 'registro de animales', 'administración ganadera'],
};

export default function GanaderiaPage() {
  return (
    <SectorLanding
      colorScheme="ganaderia"
      sectorName="Ganadería"
      heroImage="/hero-ganaderia.png"
      title="Control básico para operaciones ganaderas"
      subtitle="Lleva un control simple de animales, ingresos y gastos."
      ctaText="Solicitar Demo"
      ctaLink="#contact"
      problemTitle="El desafío del control ganadero"
      problemDescription="La gestión ganadera se realiza de forma manual, sin control claro de información clave."
      solutionTitle="Plataforma básica de gestión ganadera"
      solutionDescription="Proscom entrega una solución enfocada en orden y control para operaciones ganaderas."
      features={[
        { 
          title: "Registro de animales", 
          description: "Base de datos de animales con identificación y características básicas." 
        },
        { 
          title: "Control de gastos", 
          description: "Registro de gastos operativos con fecha y concepto." 
        },
        { 
          title: "Registro de ingresos", 
          description: "Control de ventas y otros ingresos de la operación." 
        },
        { 
          title: "Resumen mensual", 
          description: "Reporte simple de ingresos vs gastos por período." 
        },
        { 
          title: "Observaciones", 
          description: "Notas y comentarios sobre animales y actividades." 
        },
        { 
          title: "Historial básico", 
          description: "Consulta de movimientos y actividades anteriores." 
        }
      ]}
      benefits={[
        { 
          title: "Mejor control", 
          description: "Visibilidad clara de animales, gastos e ingresos." 
        },
        { 
          title: "Orden financiero", 
          description: "Control básico pero efectivo de finanzas." 
        },
        { 
          title: "Información respaldada", 
          description: "Datos ordenados y disponibles cuando se necesitan." 
        },
        { 
          title: "Simplicidad", 
          description: "Fácil de usar sin conocimientos técnicos." 
        }
      ]}
      targetAudienceTitle="¿Para quién es esta solución?"
      targetAudience={[
        "Pequeños ganaderos",
        "Medianos ganaderos",
        "Asociaciones ganaderas",
        "Productores pecuarios"
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
      finalCtaTitle="Ordena tu gestión ganadera con Proscom"
      finalCtaText="Solicitar Demo"
    />
  );
}

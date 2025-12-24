import type { Metadata } from 'next';
import SectorLanding from '@/components/SectorLanding';

export const metadata: Metadata = {
  title: 'Gestión para Organizaciones Sociales - Proscom',
  description: 'Plataforma digital para la gestión de organizaciones sociales. Controla socios, ingresos, egresos, cuotas y certificados de forma simple y transparente.',
  keywords: ['gestión para organizaciones sociales', 'sistema de gestión para juntas de vecinos', 'control de ingresos y egresos organizaciones', 'software para organizaciones comunitarias'],
};

export default function OrganizacionesPage() {
  return (
    <SectorLanding
      colorScheme="organizaciones"
      sectorName="Organizaciones"
      heroImage="/hero-organizaciones.png"
      title="Gestión simple y transparente para organizaciones"
      subtitle="Ordena socios, controla ingresos y egresos, cobra cuotas y emite certificados desde una sola plataforma. Proscom entrega una solución digital pensada para organizaciones reales, que necesitan orden administrativo sin sistemas complejos."
      ctaText="Solicitar Demo"
      ctaLink="#contact"
      problemTitle="El problema de la gestión manual"
      problemDescription="Muchas organizaciones sociales, juntas de vecinos y clubes funcionan con registros manuales, cuadernos, planillas sueltas o archivos desordenados. Esto genera falta de control financiero, conflictos internos, pérdida de información y poca transparencia hacia los socios. La gestión se vuelve lenta, confusa y poco confiable."
      solutionTitle="Una plataforma digital de gestión administrativa"
      solutionDescription="Proscom ofrece una solución diseñada específicamente para organizaciones que necesitan orden, control y respaldo, sin depender de conocimientos técnicos. Todo queda centralizado, actualizado y disponible cuando se necesita."
      features={[
        { 
          title: "Gestión de socios", 
          description: "Registro de socios activos e inactivos, historial por socio y datos centralizados y ordenados." 
        },
        { 
          title: "Control de ingresos", 
          description: "Registro de cuotas sociales, aportes y donaciones con control por fecha y concepto." 
        },
        { 
          title: "Control de egresos", 
          description: "Registro de gastos operativos, control básico de proveedores con observaciones y respaldo." 
        },
        { 
          title: "Cobro y control de cuotas", 
          description: "Configuración de cuota mensual, registro de pagos y estado al día o moroso por socio." 
        },
        { 
          title: "Emisión de certificados", 
          description: "Certificados de residencia y de socio con emisión rápida en formato digital." 
        },
        { 
          title: "Resumen de gestión", 
          description: "Ingresos vs egresos, estado financiero simple y reportes claros para la directiva." 
        }
      ]}
      benefits={[
        { 
          title: "Mayor transparencia", 
          description: "Información clara y accesible para toda la directiva y socios." 
        },
        { 
          title: "Mejor control financiero", 
          description: "Visibilidad completa de ingresos, egresos y estado de cuotas." 
        },
        { 
          title: "Menos errores", 
          description: "Reduce errores administrativos y reprocesos manuales." 
        },
        { 
          title: "Información respaldada", 
          description: "Toda la información ordenada y disponible cuando se necesita." 
        }
      ]}
      targetAudienceTitle="¿Para quién es esta solución?"
      targetAudience={[
        "Juntas de vecinos",
        "Organizaciones comunitarias",
        "Clubes sociales y deportivos",
        "Fundaciones",
        "Agrupaciones territoriales"
      ]}
      workflowTitle="Cómo trabajamos en Proscom"
      workflow={[
        { 
          step: 1, 
          title: "Diagnóstico breve", 
          description: "Conocemos tu organización y sus necesidades específicas." 
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
      finalCtaTitle="Da el primer paso hacia una gestión ordenada y transparente"
      finalCtaText="Solicitar Demo"
    />
  );
}

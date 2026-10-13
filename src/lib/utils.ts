import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface CardItemData {
  id: number | string;
  title: string;
  description: string;
  color?: string;
  badge?: string;
  category?: string;
  categoryLabel?: string;
  deliverables?: string[];
  legalBasis?: string;
  frequency?: string;
  image?: string;
  whatsappMessage?: string;
}

export const cardData: CardItemData[] = [
  {
    id: 1,
    title: "Contabilidad general",
    description: "Registro sistemático bajo NIIF para PYMES. Balances, conciliaciones y libros mayores listos para fiscalización.",
    color: "rgba(2, 132, 199, 0.8)",
    badge: "NIIF PYMES",
    deliverables: ["Libros diarios y mayores", "Conciliaciones bancarias", "Balances mensuales"],
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hola GP SOLUTIONS, deseo cotizar Contabilidad general."
  },
  {
    id: 2,
    title: "Estados Financieros",
    description: "Estructuración técnica de Situación Financiera, Resultados, Flujo de Efectivo y Notas Explicativas auditables.",
    color: "rgba(56, 189, 248, 0.8)",
    badge: "Auditable",
    deliverables: ["Balance General", "Estado de Resultados", "Notas NIIF"],
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hola GP SOLUTIONS, requiero elaboración de Estados Financieros."
  },
  {
    id: 3,
    title: "Superintendencia de Compañías",
    description: "Carga y validación anual de balances, informes de Gerente, Comisario y nómina societaria sin sanciones.",
    color: "rgba(16, 37, 71, 0.8)",
    badge: "SuperCías",
    deliverables: ["Validación en portal", "Informes anuales", "Certificado de cumplimiento"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hola GP SOLUTIONS, necesito cumplir con la Superintendencia de Compañías."
  },
  {
    id: 4,
    title: "Constitución de Empresas S.A.S.",
    description: "Creación legal expedita de compañías por acciones simplificadas, estatutos, RUC patronal y firmas electrónicas.",
    color: "rgba(2, 132, 199, 0.8)",
    badge: "Express S.A.S.",
    deliverables: ["Estatutos societarios", "Nombramientos inscritos", "RUC y clave SRI"],
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hola GP SOLUTIONS, deseo constituir una empresa S.A.S."
  }
];

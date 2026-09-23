export type TabKey = 'inicio' | 'servicios' | 'cotizador' | 'nosotros' | 'contacto';

export type ServiceCategory = 'contable' | 'tributaria' | 'laboral';

export interface ServiceItem {
  id: string;
  number: number;
  title: string;
  description: string;
  category: ServiceCategory;
  categoryLabel: string;
  badge: string;
  deliverables: string[];
  legalBasis: string;
  frequency: string;
  image: string;
  whatsappMessage: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

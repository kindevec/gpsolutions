export interface ServiceSubsection {
  id: string;
  number: number;
  title: string;
  description: string;
  services: string[];
  image: string;
  authorityBadge?: string;
}

export interface ServiceCategoryDetail {
  id: 'seguridad-salud' | 'asesoria-tributaria' | 'asesoria-legal';
  title: string;
  shortTitle: string;
  generalDescription: string;
  heroImage: string;
  heroBadge: string;
  subsections: ServiceSubsection[];
}

export const CATEGORIES_DATA: Record<string, ServiceCategoryDetail> = {
  'seguridad-salud': {
    id: 'seguridad-salud',
    title: 'Seguridad y Salud Ocupacional',
    shortTitle: 'Seguridad y Salud',
    generalDescription:
      'Brindamos asesoría integral en Seguridad y Salud en el Trabajo, orientada a prevenir riesgos laborales, proteger a los trabajadores y facilitar el cumplimiento de las obligaciones aplicables a cada organización.',
    heroImage: '/images/heroes/hero-sso.jpg',
    heroBadge: 'Gestión Laboral & Prevención Integral',
    subsections: [
      {
        id: 'sso-1',
        number: 1,
        title: 'Gestión Integral del Riesgo Laboral',
        description:
          'Acompañamos a empresas y empleadores en la implementación y mantenimiento de su gestión de Seguridad y Salud en el Trabajo, de acuerdo con su actividad, número de trabajadores y nivel de riesgo.',
        services: [
          'Matrices de identificación de peligros y evaluación de riesgos.',
          'Planes integrales de prevención de riesgos',
          'Elaboración de reglamentos internos de higiene y seguridad',
          'Gestión de organismos paritarios',
          'Elaboración de Informe de Cumplimiento de Gestión al Ministerio de Trabajo',
        ],
        image: '/images/sso-seccion/gestion-riesgo-laboral.jpg',
        authorityBadge: 'MDT & SUT',
      },
      {
        id: 'sso-2',
        number: 2,
        title: 'Planes de Emergencia y Capacitación',
        description:
          'Preparamos a las organizaciones y a sus trabajadores para responder adecuadamente frente a emergencias y fortalecer una cultura interna de prevención.',
        services: [
          'Elaboración de planes de: evacuación, contra incendios, manejo de emergencias y continuidad de las operaciones.',
          'Capacitaciones obligatorias en SSO: ergonomía, manejo de productos, prevención de acoso laboral y emergencias.',
          'Elaboración de Políticas de Prevención de Riesgos en el trabajo.',
          'Elaboración de Informes de morbilidad.',
        ],
        image: '/images/sso-seccion/planes-emergencia-capacitacion.jpg',
        authorityBadge: 'Bomberos & MDT',
      },
      {
        id: 'sso-3',
        number: 3,
        title: 'Cumplimiento y Acompañamiento',
        description:
          'Apoyamos a las organizaciones en el cumplimiento de sus obligaciones formales en Seguridad y Salud en el Trabajo y en la atención de requerimientos de las autoridades competentes.',
        services: [
          'Gestión y actualización de documentación obligatoria.',
          'Registros ante el Ministerio del Trabajo',
          'Preparación documental para inspecciones.',
          'Acompañamiento frente a requerimientos de autoridades.',
          'Elaboración de planes de acción para subsanar hallazgos.',
        ],
        image: '/images/sso-seccion/cumplimiento-normativo-inspecciones.png',
        authorityBadge: 'Inspecciones Laborales',
      },
    ],
  },
  'asesoria-tributaria': {
    id: 'asesoria-tributaria',
    title: 'Asesoría Tributaria',
    shortTitle: 'Asesoría Tributaria',
    generalDescription:
      'Asesoramos a empresas, emprendedores y personas naturales en el cumplimiento de sus obligaciones tributarias, combinando acompañamiento permanente, prevención de contingencias y atención de trámites específicos.',
    heroImage: '/images/heroes/hero-tax.jpg',
    heroBadge: 'Cumplimiento & Estrategia Fiscal SRI',
    subsections: [
      {
        id: 'trib-1',
        number: 1,
        title: 'Cumplimiento Tributario',
        description:
          'Gestionamos y acompañamos el cumplimiento periódico de las obligaciones tributarias, procurando que declaraciones, anexos y demás deberes formales sean atendidos correctamente y dentro de los plazos correspondientes.',
        services: [
          'Declaraciones de Impuestos.',
          'Elaboración y presentación de anexos tributarios.',
          'Devoluciones de impuestos',
          'Cumplimiento de obligaciones Tributarias',
        ],
        image: '/images/tributaria-seccion/cumplimiento-tributario.png',
        authorityBadge: 'Servicio de Rentas Internas (SRI)',
      },
      {
        id: 'trib-2',
        number: 2,
        title: 'Asesoría y Planificación Tributaria',
        description:
          'Analizamos las operaciones y proyecciones de su negocio para diseñar estrategias fiscales legítimas que optimicen la carga tributaria y aseguren el estricto cumplimiento ante el SRI.',
        services: [
          'Diagnóstico y diseño de planes fiscales anuales.',
          'Proyección y optimización técnica de la carga tributaria.',
          'Estructuración técnica de deducciones, costos y retenciones aplicables.',
          'Elaboración y revisión de Estados Financieros con impacto fiscal bajo NIIF.',
          'Acompañamiento continuo en decisiones financieras y presupuestarias de la empresa.',
        ],
        image: '/images/tributaria-seccion/planificacion-tributaria-estrategica.png',
        authorityBadge: 'Planificación Fiscal & NIIF',
      },
      {
        id: 'trib-3',
        number: 3,
        title: 'Atención y Prevención de Contingencias Tributarias',
        description:
          'Apoyamos a nuestros clientes en la revisión de posibles contingencias y en la atención oportuna de comunicaciones y actuaciones de la administración tributaria.',
        services: [
          'Diagnósticos de cumplimiento tributario.',
          'Revisión de diferencias y observaciones.',
          'Asesoría y patrocinio en requerimientos de administraciones tributarias.',
        ],
        image: '/images/tributaria-seccion/atencion-prevencion-contingencias.jpg',
        authorityBadge: 'Defensa & Saneamiento Fiscal',
      },
    ],
  },
  'asesoria-legal': {
    id: 'asesoria-legal',
    title: 'Asesoría Legal Corporativa',
    shortTitle: 'Asesoría Legal',
    generalDescription:
      'Brindamos asesoría legal a empresas y emprendedores durante las distintas etapas de sus negocios, desde su constitución y organización societaria hasta sus relaciones contractuales y protección de activos intangibles.',
    heroImage: '/images/heroes/hero-legal.jpg',
    heroBadge: 'Blindaje Jurídico Societario & Contractual',
    subsections: [
      {
        id: 'legal-1',
        number: 1,
        title: 'Asesoría Corporativa y Societaria',
        description:
          'Acompañamos a compañías y emprendedores en la constitución, organización y administración jurídica de sus negocios, así como en el cumplimiento de sus obligaciones societarias.',
        services: [
          'Constitución y liquidación de compañías.',
          'Elaboración de reforma de estatutos, transferencia de acciones y aumentos y recciones de capital.',
          'Manejo y actualización de libros societarios.',
          'Cambios de administradores y representantes legales.',
          'Cumplimiento de obligaciones ante la Superintendencia de Compañías.',
        ],
        image: '/images/legal-seccion/asesoria-corporativa-societaria.png',
        authorityBadge: 'Superintendencia de Compañías',
      },
      {
        id: 'legal-2',
        number: 2,
        title: 'Contratos y Negocios',
        description:
          'Elaboramos y revisamos contratos procurando que las relaciones comerciales de nuestros clientes cuenten con reglas claras, mecanismos de protección y una adecuada distribución de derechos, obligaciones y responsabilidades.',
        services: [
          'Elaboración y revisión de contratos civiles y mercantiles con clientes y proveedores.',
          'Elaboración de Acuerdos de confidencialidad.',
          'Revisión y negociación de cláusulas contractuales.',
          'Terminación y modificación de contratos.',
        ],
        image: '/images/legal-seccion/contratos-negocios.png',
        authorityBadge: 'Blindaje Mercantil',
      },
      {
        id: 'legal-3',
        number: 3,
        title: 'Asesoría Legal Empresarial',
        description:
          'Brindamos acompañamiento jurídico permanente para atender las necesidades que surgen en la operación cotidiana de las empresas y prevenir contingencias antes de que se conviertan en conflictos.',
        services: [
          'Elaboración y revisión de documentos jurídicos.',
          'Revisión de comunicaciones y requerimientos.',
          'Análisis preventivo de riesgos legales.',
          'Acompañamiento en negociaciones comerciales.',
          'Asesoría en decisiones corporativas.',
        ],
        image: '/images/legal-seccion/asesoria-legal-empresarial.png',
        authorityBadge: 'Consultoría Corporativa',
      },
      {
        id: 'legal-4',
        number: 4,
        title: 'Propiedad Intelectual',
        description:
          'Asesoramos a empresas y emprendedores en la protección de sus signos distintivos y otros activos intangibles relevantes para el desarrollo y posicionamiento de sus negocios.',
        services: [
          'Búsqueda y análisis previo de marcas.',
          'Solicitud de registro de marcas y signos distintivos.',
          'Asesoría para la protección de signos distintivos.',
          'Contestación y seguimiento de actuaciones administrativas relacionadas con marcas.',
        ],
        image: '/images/legal-seccion/propiedad-intelectual.png',
        authorityBadge: 'SENADI Marcas 10 Años',
      },
      {
        id: 'legal-5',
        number: 5,
        title: 'Asesoría Laboral Empresarial',
        description:
          'Asesoramos a empresas y empleadores en la gestión de sus relaciones laborales, procurando el adecuado cumplimiento de sus obligaciones y la prevención de contingencias derivadas de la contratación y administración de personal.',
        services: [
          'Elaboración y revisión de contratos de trabajo y actas de finiquito.',
          'Asesoría sobre obligaciones laborales.',
          'Gestión de obligaciones y trámites ante el IESS.',
          'Elaboración y revisión de reglamentos internos de trabajo.',
          'Acompañamiento frente a requerimientos e inspecciones laborales.',
        ],
        image: '/images/legal-seccion/asesoria-laboral-empresarial.png',
        authorityBadge: 'MDT & IESS',
      },
    ],
  },
};

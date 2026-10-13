import { ServiceItem } from '../types';

export const ALL_SERVICES: ServiceItem[] = [
  // =========================================================================
  // 1. SEGURIDAD Y SALUD OCUPACIONAL (OFICIALES GP SOLUTIONS)
  // =========================================================================
  {
    id: "sso-1",
    number: 1,
    title: "Elaboración de matrices de riesgo y planes de emergencia",
    description: "Identificación exhaustiva de peligros por puesto de trabajo, estructuración de matrices de riesgos laborales y diseño de planes de emergencia y contingencia conforme a normativas del MDT y Bomberos.",
    category: "seguridad-salud",
    categoryLabel: "Seguridad y Salud Ocupacional",
    badge: "Normativa MDT",
    deliverables: [
      "Matrices de identificación de peligros y evaluación de riesgos por puesto",
      "Diseño de Planes de Emergencia, Evacuación y Contingencia",
      "Conformación y capacitación de Brigadas de Emergencia",
      "Planificación, cronograma y ejecución de simulacros anuales"
    ],
    legalBasis: "Decisión 584 (Instrumento Andino de SSO), Reglamento 2393 y normativa de Bomberos",
    frequency: "Anual / Actualización continua",
    image: "/images/servicios-laborales/contratos-trabajo-finiquito.jpg",
    whatsappMessage: "Hola GP SOLUTIONS (+593 982577313), solicito información para el servicio de: Elaboración de matrices de riesgo y planes de emergencia."
  },
  {
    id: "sso-2",
    number: 2,
    title: "Gestión de reglamentos y planes de prevención",
    description: "Elaboración, revisión y legalización de Reglamentos Internos de Higiene y Seguridad ante el Ministerio del Trabajo, además de la estructuración de planes integrales de prevención de riesgos.",
    category: "seguridad-salud",
    categoryLabel: "Seguridad y Salud Ocupacional",
    badge: "Legalización MDT",
    deliverables: [
      "Elaboración y legalización del Reglamento de Higiene y Seguridad",
      "Planes integrales de prevención de riesgos laborales",
      "Gestión y conformación de organismos paritarios (Comités y Subcomités)",
      "Registro y actualización documental en plataforma SUT"
    ],
    legalBasis: "Código del Trabajo, Acuerdos Ministeriales MDT y Reglamento 2393",
    frequency: "Bianual / Permanente",
    image: "/images/servicios-contables/superintendencia-companias.jpg",
    whatsappMessage: "Hola GP SOLUTIONS (+593 982577313), solicito asesoría para el servicio de: Gestión de reglamentos y planes de prevención."
  },
  {
    id: "sso-3",
    number: 3,
    title: "Capacitaciones obligatorias en SSO",
    description: "Programas formativos obligatorios para el personal en ergonomía, manipulación segura de productos, prevención de acoso y violencia laboral, y actuación en emergencias para fortalecer la cultura preventiva.",
    category: "seguridad-salud",
    categoryLabel: "Seguridad y Salud Ocupacional",
    badge: "Cumplimiento Obligatorio",
    deliverables: [
      "Talleres de ergonomía laboral y manejo manual de cargas",
      "Capacitación en manejo seguro de productos y químicos",
      "Programas obligatorios de prevención de acoso y violencia laboral",
      "Entrenamiento y certificación técnica para brigadistas"
    ],
    legalBasis: "Resoluciones MDT sobre prevención de riesgos y erradicación del acoso laboral",
    frequency: "Semestral / Plan de capacitación anual",
    image: "/images/servicios-contables/contabilidad-general.jpg",
    whatsappMessage: "Hola GP SOLUTIONS (+593 982577313), solicito cotizar: Capacitaciones obligatorias en SSO para mi empresa."
  },
  {
    id: "sso-4",
    number: 4,
    title: "Cumplimiento y Acompañamiento ante el Ministerio de Trabajo",
    description: "Acompañamiento técnico y legal permanente en el cumplimiento de obligaciones formales en SSO y preparación documental frente a inspecciones laborales y del IESS.",
    category: "seguridad-salud",
    categoryLabel: "Seguridad y Salud Ocupacional",
    badge: "Inspecciones MDT",
    deliverables: [
      "Gestión y actualización de documentación obligatoria en plataforma SUT",
      "Preparación documental preventiva para inspecciones laborales",
      "Acompañamiento presencial ante requerimientos de autoridades",
      "Elaboración de planes de acción para subsanar hallazgos de fiscalización"
    ],
    legalBasis: "Código del Trabajo, Ley de Seguridad Social y Normativa Técnica MDT",
    frequency: "Permanente / Por requerimiento",
    image: "/images/servicios-contables/estados-financieros.jpg",
    whatsappMessage: "Hola GP SOLUTIONS (+593 982577313), requiero acompañamiento técnico para inspecciones del Ministerio del Trabajo."
  },

  // =========================================================================
  // 2. ASESORÍA TRIBUTARIA Y CONTABLE (OFICIALES GP SOLUTIONS)
  // =========================================================================
  {
    id: "trib-1",
    number: 5,
    title: "Declaraciones de Impuestos",
    description: "Liquidación y presentación periódica de declaraciones tributarias ante el SRI: IVA mensual/semestral, retenciones en la fuente e Impuesto a la Renta con estricta puntualidad y cero multas.",
    category: "tributaria",
    categoryLabel: "Asesoría Tributaria",
    badge: "Declaraciones SRI",
    deliverables: [
      "Declaraciones de IVA (Formulario 104) mensual y semestral",
      "Liquidación de Retenciones en la Fuente (Formulario 103)",
      "Declaración anual de Impuesto a la Renta Sociedades y Personas Naturales",
      "Elaboración y presentación oportuna de Anexos Transaccionales (ATS)"
    ],
    legalBasis: "Ley de Régimen Tributario Interno (LRTI) y Código Tributario",
    frequency: "Mensual / Semestral / Anual",
    image: "/images/servicios-contables/contabilidad-general.jpg",
    whatsappMessage: "Hola GP SOLUTIONS (+593 982577313), solicito asesoría para el servicio de: Declaraciones de Impuestos ante el SRI."
  },
  {
    id: "trib-2",
    number: 6,
    title: "Devoluciones de Impuestos",
    description: "Gestión y patrocinio del trámite de devolución de IVA para adultos mayores, personas con discapacidad, exportadores y proyectos inmobiliarios, además de reclamos por pagos indebidos de Impuesto a la Renta.",
    category: "tributaria",
    categoryLabel: "Asesoría Tributaria",
    badge: "Acreditación Directa",
    deliverables: [
      "Devolución de IVA para personas de la tercera edad y discapacidad",
      "Devolución de IVA a exportadores y proyectos de vivienda",
      "Reclamos administrativos por pago indebido o en exceso de Renta",
      "Monitoreo de estado procesal hasta la acreditación bancaria efectiva"
    ],
    legalBasis: "Art. 73 y 74 LRTI, Resoluciones SRI y Ley del Adulto Mayor",
    frequency: "Mensual / Por trámite puntual",
    image: "/images/servicios-tributarios/devolucion-impuestos.jpg",
    whatsappMessage: "Hola GP SOLUTIONS (+593 982577313), deseo tramitar la: Devolución de Impuestos ante el SRI."
  },
  {
    id: "trib-3",
    number: 7,
    title: "Manejo integral de nómina",
    description: "Administración técnica y confidencial de nóminas: elaboración de roles de pago individuales, cálculo de beneficios de ley (décimos, fondos de reserva), planillas de aportes al IESS y actas de finiquito.",
    category: "tributaria",
    categoryLabel: "Asesoría Tributaria",
    badge: "Nómina Blindada",
    deliverables: [
      "Emisión mensual de roles de pago y comprobantes para colaboradores",
      "Cálculo de horas suplementarias, extraordinarias y comisiones",
      "Liquidación y legalización de décimos, fondos de reserva y utilidades",
      "Generación y conciliación de planillas del IESS y actas en SUT"
    ],
    legalBasis: "Código del Trabajo y Ley de Seguridad Social",
    frequency: "Quincenal / Mensual",
    image: "/images/servicios-laborales/contratos-trabajo-finiquito.jpg",
    whatsappMessage: "Hola GP SOLUTIONS (+593 982577313), solicito información para el servicio de: Manejo integral de nómina."
  },
  {
    id: "trib-4",
    number: 8,
    title: "Asesoría y Planificación Tributaria",
    description: "Análisis estratégico de operaciones corporativas para optimizar cargas impositivas dentro de la legalidad vigente, prevención de riesgos y asesoramiento permanente ante reformas fiscales.",
    category: "tributaria",
    categoryLabel: "Asesoría Tributaria",
    badge: "Estrategia Fiscal",
    deliverables: [
      "Diagnóstico tributario preventivo y auditoría de riesgos impositivos",
      "Diseño de esquemas de planificación fiscal lícita y optimizada",
      "Asesoría técnica continua en reformas tributarias y nuevas leyes",
      "Acompañamiento en decisiones de inversión con implicaciones fiscales"
    ],
    legalBasis: "Código Tributario y Resoluciones del Servicio de Rentas Internas",
    frequency: "Mensual / Permanente",
    image: "/images/servicios-tributarios/impuestos-herencias-donaciones.jpg",
    whatsappMessage: "Hola GP SOLUTIONS (+593 982577313), solicito una consultoría de: Asesoría y Planificación Tributaria."
  },
  {
    id: "trib-5",
    number: 9,
    title: "Atención y Prevención de Contingencias Tributarias",
    description: "Revisión y defensa técnica frente a notificaciones, diferencias y determinaciones emitidas por la administración tributaria, con patrocinio especializado en requerimientos del SRI.",
    category: "tributaria",
    categoryLabel: "Asesoría Tributaria",
    badge: "Defensa SRI",
    deliverables: [
      "Diagnósticos de cumplimiento tributario previo a auditorías",
      "Revisión, descargo y justificación técnica de diferencias notificadas",
      "Patrocinio y asesoría jurídica en requerimientos formales del SRI",
      "Regularización y saneamiento integral de pasivos fiscales"
    ],
    legalBasis: "Código Tributario, Código Orgánico General de Procesos y LRTI",
    frequency: "Por evento / Requerimiento puntual",
    image: "/images/servicios-contables/estados-financieros.jpg",
    whatsappMessage: "Hola GP SOLUTIONS (+593 982577313), requiero asesoría para: Atención de contingencias o requerimientos del SRI."
  },
  {
    id: "trib-6",
    number: 10,
    title: "Elaboración de Estados Financieros NIIF",
    description: "Estructuración técnica de Estado de Situación Financiera, Estado de Resultados Integrales, Flujo de Efectivo y Notas Explicativas auditables para bancos, inversionistas y accionistas.",
    category: "tributaria",
    categoryLabel: "Asesoría Tributaria",
    badge: "Normativa NIIF",
    deliverables: [
      "Balance General y Estado de Resultados Integrales",
      "Estado de Flujos de Efectivo y Cambios en el Patrimonio",
      "Notas explicativas completas a los estados financieros",
      "Conciliación tributaria y dictamen de razonabilidad contable"
    ],
    legalBasis: "NIIF para PYMES, NIIF Completas y Resoluciones SuperCías",
    frequency: "Semestral / Cierre Anual",
    image: "/images/servicios-contables/estados-financieros.jpg",
    whatsappMessage: "Hola GP SOLUTIONS (+593 982577313), solicito la elaboración de Estados Financieros bajo normativa NIIF."
  },

  // =========================================================================
  // 3. ASESORÍA LEGAL CORPORATIVA (OFICIALES GP SOLUTIONS)
  // =========================================================================
  {
    id: "legal-1",
    number: 11,
    title: "Creación y liquidación de SAS",
    description: "Constitución rápida y digital de Sociedades por Acciones Simplificadas (S.A.S.) con estatutos blindados, además de procesos ordenados de disolución, liquidación y cancelación de compañías.",
    category: "legal-corporativa",
    categoryLabel: "Asesoría Legal Corporativa",
    badge: "SuperCías & SAS",
    deliverables: [
      "Elaboración de estatutos a medida con cláusulas de protección patrimonial",
      "Trámite 100% digital de constitución de SAS y obtención de RUC",
      "Nombramientos de administradores y representantes legales",
      "Trámites de disolución, liquidación y cancelación de compañías"
    ],
    legalBasis: "Ley de Modernización a la Ley de Compañías y Reglamento SAS",
    frequency: "Trámite puntual / Creación ágil",
    image: "/images/servicios-contables/constitucion-liquidacion-sas.jpg",
    whatsappMessage: "Hola GP SOLUTIONS (+593 982577313), solicito asesoría para el servicio de: Creación y liquidación de SAS."
  },
  {
    id: "legal-2",
    number: 12,
    title: "Manejo y actualización de libros societarios",
    description: "Apertura, custodia y actualización rigurosa de Libros de Acciones y Accionistas, actas de juntas generales, aumentos o disminuciones de capital y reformas estatutarias ante la Superintendencia de Compañías.",
    category: "legal-corporativa",
    categoryLabel: "Asesoría Legal Corporativa",
    badge: "Custodia Societaria",
    deliverables: [
      "Manejo y custodia de Libros de Acciones y Accionistas o Participaciones",
      "Redacción formal de Actas de Juntas Generales Ordinarias y Extraordinarias",
      "Elaboración de reformas estatutarias, cesión y transferencia de acciones",
      "Actualización de nombramientos e inscripción en el Registro Mercantil"
    ],
    legalBasis: "Ley de Compañías y Resoluciones de la Superintendencia de Compañías",
    frequency: "Mensual / Permanente",
    image: "/images/servicios-contables/superintendencia-companias.jpg",
    whatsappMessage: "Hola GP SOLUTIONS (+593 982577313), requiero información para el: Manejo y actualización de libros societarios."
  },
  {
    id: "legal-3",
    number: 13,
    title: "Registro de marcas y signos distintivos",
    description: "Búsqueda fonética previa, viabilidad registral y tramitación integral de registro de marcas, nombres comerciales y lemas distintivos ante el SENADI para proteger la identidad comercial por 10 años.",
    category: "legal-corporativa",
    categoryLabel: "Asesoría Legal Corporativa",
    badge: "SENADI 10 Años",
    deliverables: [
      "Búsqueda fonética y análisis previo de viabilidad de registro de marca",
      "Solicitud formal de registro ante el SENADI y seguimiento en gaceta",
      "Contestación técnica a oposiciones planteadas por terceros",
      "Título oficial de concesión de marca con vigencia por 10 años"
    ],
    legalBasis: "Código Orgánico de la Economía Social de los Conocimientos (COESCI)",
    frequency: "Registro por 10 años renovable",
    image: "/images/servicios-contables/registro-marcas.jpg",
    whatsappMessage: "Hola GP SOLUTIONS (+593 982577313), solicito asesoría para el: Registro de marcas y signos distintivos ante el SENADI."
  },
  {
    id: "legal-4",
    number: 14,
    title: "Contratos y Negocios",
    description: "Elaboración, revisión y blindaje de contratos civiles y mercantiles con clientes y proveedores, redacción de Acuerdos de Confidencialidad (NDA) y mitigación de riesgos legales contractuales.",
    category: "legal-corporativa",
    categoryLabel: "Asesoría Legal Corporativa",
    badge: "Blindaje Contractual",
    deliverables: [
      "Elaboración y revisión de contratos civiles y mercantiles a medida",
      "Redacción de Acuerdos de Confidencialidad (NDA) y pactos de socios",
      "Revisión y negociación de cláusulas de penalidad y resolución",
      "Terminación, resciliación y finiquito de vínculos contractuales"
    ],
    legalBasis: "Código de Comercio, Código Civil y Ley de Arbitraje y Mediación",
    frequency: "Por contrato / Demanda",
    image: "/images/servicios-laborales/contratos-trabajo-finiquito.jpg",
    whatsappMessage: "Hola GP SOLUTIONS (+593 982577313), solicito asesoría legal para: Contratos y Negocios de mi empresa."
  },
  {
    id: "legal-5",
    number: 15,
    title: "Asesoría Legal Empresarial",
    description: "Acompañamiento jurídico permanente para resolver las contingencias de la operación diaria, análisis preventivo de riesgos, revisión de comunicaciones y emisión de opiniones jurídicas para la toma de decisiones.",
    category: "legal-corporativa",
    categoryLabel: "Asesoría Legal Corporativa",
    badge: "Acompañamiento 360°",
    deliverables: [
      "Elaboración y revisión de documentos jurídicos y comerciales",
      "Revisión y respuesta técnica a comunicaciones y requerimientos legales",
      "Análisis preventivo de contingencias y riesgos legales operativos",
      "Acompañamiento estratégico en negociaciones comerciales clave"
    ],
    legalBasis: "Legislación Mercantil, Civil y Administrativa del Ecuador",
    frequency: "Permanente / Mensual",
    image: "/images/servicios-contables/contabilidad-general.jpg",
    whatsappMessage: "Hola GP SOLUTIONS (+593 982577313), deseo cotizar un plan mensual de: Asesoría Legal Empresarial."
  },
  {
    id: "legal-6",
    number: 16,
    title: "Asesoría Laboral Empresarial",
    description: "Asesoramiento integral a empleadores en contratación de personal, actas de finiquito, legalización de Reglamentos Internos de Trabajo y defensa frente a inspecciones del Ministerio del Trabajo.",
    category: "legal-corporativa",
    categoryLabel: "Asesoría Legal Corporativa",
    badge: "Defensa Laboral",
    deliverables: [
      "Elaboración y blindaje de contratos de trabajo individuales y especiales",
      "Asesoría técnica en desvinculaciones laborales y cálculo de finiquitos",
      "Elaboración y legalización del Reglamento Interno de Trabajo en el MDT",
      "Acompañamiento y defensa técnica en boletas de comparecencia e inspecciones"
    ],
    legalBasis: "Código del Trabajo, Mandatos Constituyentes y Acuerdos MDT",
    frequency: "Mensual / Por requerimiento",
    image: "/images/servicios-laborales/contratos-trabajo-finiquito.jpg",
    whatsappMessage: "Hola GP SOLUTIONS (+593 982577313), solicito asesoría jurídica para el área de: Asesoría Laboral Empresarial."
  }
];

export const CATEGORIES_CONFIG = [
  { key: 'todos', label: 'Todos los Servicios', count: 16 },
  { key: 'seguridad-salud', label: 'Seguridad y Salud Ocupacional', count: 4 },
  { key: 'tributaria', label: 'Asesoría Contable y Tributaria', count: 6 },
  { key: 'legal-corporativa', label: 'Asesoría Legal Corporativa', count: 6 }
];

// Los 9 servicios oficiales solicitados por el cliente para destacar en carruseles
export const FEATURED_CAROUSEL_SERVICES = ALL_SERVICES.filter((s) =>
  ['sso-1', 'sso-2', 'sso-3', 'trib-1', 'trib-2', 'trib-3', 'legal-1', 'legal-2', 'legal-3'].includes(s.id)
);

import { ServiceItem } from '../types';

export const ALL_SERVICES: ServiceItem[] = [
  // =========================================================================
  // 1. SERVICIOS CONTABLES Y CORPORATIVOS (8 OFICIALES)
  // =========================================================================
  {
    id: "cont-1",
    number: 1,
    title: "Contabilidad general",
    description: "Registro cronológico y sistemático bajo normativa NIIF para PYMES y personas naturales. Conciliaciones bancarias mensuales, libros diarios, mayores y balances de comprobación listos para fiscalización.",
    category: "contable",
    categoryLabel: "Contable y Corporativo",
    badge: "Normativa NIIF",
    deliverables: [
      "Libro Diario y Libro Mayor mensual",
      "Balance de comprobación de sumas y saldos",
      "Conciliaciones bancarias y arqueos de caja",
      "Control de inventarios y depreciación de activos"
    ],
    legalBasis: "NIIF para PYMES y Código Tributario Ecuatoriano",
    frequency: "Mensual / Cierre Anual",
    image: "/images/servicios-contables/contabilidad-general.jpg",
    whatsappMessage: "Hola GP SOLUTIONS (+593999840649), solicito asesoría para el servicio de: Contabilidad general."
  },
  {
    id: "cont-2",
    number: 2,
    title: "Elaboración de estados financieros",
    description: "Estructuración técnica de Estado de Situación Financiera, Estado de Resultados Integrales, Flujo de Efectivo y Notas Explicativas auditables para bancos y accionistas.",
    category: "contable",
    categoryLabel: "Contable y Corporativo",
    badge: "Auditable",
    deliverables: [
      "Balance General y Estado de Resultados",
      "Estado de Flujos de Efectivo y Cambios en el Patrimonio",
      "Notas explicativas a los estados financieros",
      "Dictamen de razonabilidad contable"
    ],
    legalBasis: "Resoluciones de la Superintendencia de Compañías y NIC 1",
    frequency: "Semestral / Anual",
    image: "/images/servicios-contables/estados-financieros.jpg",
    whatsappMessage: "Hola GP SOLUTIONS (+593999840649), solicito la elaboración de Estados Financieros para mi empresa."
  },
  {
    id: "cont-3",
    number: 3,
    title: "Cumplimiento ante Superintendencia de Compañías",
    description: "Carga y validación anual del juego completo de balances, informe de Representante Legal, informe de Comisario y nómina de socios o accionistas extranjeros.",
    category: "contable",
    categoryLabel: "Contable y Corporativo",
    badge: "SuperCías",
    deliverables: [
      "Subida de balances en portal de la SuperCías",
      "Informe anual de Representante Legal y Comisario",
      "Nómina de socios/accionistas actualizada",
      "Certificado de cumplimiento de obligaciones vigente"
    ],
    legalBasis: "Ley de Compañías y Reglamento de Presentación de Balances",
    frequency: "Anual (Vence 30 de Abril)",
    image: "/images/servicios-contables/superintendencia-companias.jpg",
    whatsappMessage: "Hola GP SOLUTIONS (+593999840649), necesito regularizar el cumplimiento anual ante la Superintendencia de Compañías."
  },
  {
    id: "cont-4",
    number: 4,
    title: "Constitución y liquidación de SAS",
    description: "Constitución ágil 100% digital de Sociedades por Acciones Simplificadas (S.A.S.) con estatutos blindados, o procesos de disolución y liquidación abreviada sin pasivos.",
    category: "contable",
    categoryLabel: "Contable y Corporativo",
    badge: "Societario",
    deliverables: [
      "Redacción de estatutos sociales personalizados",
      "Inscripción en Registro de Sociedades SuperCías",
      "Apertura de RUC societario y nombramientos directivos",
      "Libros de acciones y accionistas iniciales"
    ],
    legalBasis: "Ley Orgánica para el Emprendimiento e Innovación (S.A.S.)",
    frequency: "Trámite Integral (48-72h)",
    image: "/images/servicios-contables/constitucion-liquidacion-sas.jpg",
    whatsappMessage: "Hola GP SOLUTIONS (+593999840649), deseo constituir una empresa S.A.S. en Ecuador."
  },
  {
    id: "cont-5",
    number: 5,
    title: "Asesoría societaria y corporativa",
    description: "Mantenimiento preventivo del gobierno corporativo: actas de juntas generales, aumentos o cesiones de capital, reformas estatutarias y regularización de nombramientos.",
    category: "contable",
    categoryLabel: "Contable y Corporativo",
    badge: "Gobierno Corporativo",
    deliverables: [
      "Actas de Juntas Generales Ordinarias y Extraordinarias",
      "Inscripción de nuevos administradores y gerentes",
      "Expedientes corporativos digitalizados",
      "Dictámenes de viabilidad legal y patrimonial"
    ],
    legalBasis: "Ley de Compañías y Código de Comercio",
    frequency: "Permanente / Por Requerimiento",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hola GP SOLUTIONS (+593999840649), requiero asesoría societaria para gestión de actas y nombramientos."
  },
  {
    id: "cont-6",
    number: 6,
    title: "Registro de marcas",
    description: "Blindaje de activos intangibles ante el SENADI: búsqueda previa fonética, clasificación de Niza, contestación de oposiciones y obtención del título de marca por 10 años.",
    category: "contable",
    categoryLabel: "Contable y Corporativo",
    badge: "SENADI",
    deliverables: [
      "Búsqueda fonética y análisis de registrabilidad",
      "Ingreso y seguimiento de solicitud ante el SENADI",
      "Respuesta a observaciones u oposiciones formales",
      "Título de Registro de Marca protegido por 10 años"
    ],
    legalBasis: "Código Orgánico de la Economía Social de los Conocimientos (Ingenios)",
    frequency: "Trámite de 4 a 6 meses",
    image: "/images/servicios-contables/registro-marcas.jpg",
    whatsappMessage: "Hola GP SOLUTIONS (+593999840649), deseo registrar y proteger mi marca comercial ante el SENADI."
  },
  {
    id: "cont-7",
    number: 7,
    title: "Manejo de Nóminas",
    description: "Procesamiento integral de nómina mensual: liquidación de sueldos, horas extras, descuentos de ley y emisión de comprobantes de pago digitales para colaboradores.",
    category: "contable",
    categoryLabel: "Contable y Corporativo",
    badge: "Nómina Digital",
    deliverables: [
      "Matriz de cálculo mensual de nómina",
      "Generación de roles individuales de pago firmados",
      "Archivo plano para pago bancario masivo",
      "Cruce contable con cuentas de pasivo laboral"
    ],
    legalBasis: "Código del Trabajo y Ley de Seguridad Social",
    frequency: "Quincenal / Mensual",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hola GP SOLUTIONS (+593999840649), solicito información para el servicio de Manejo de Nóminas."
  },
  {
    id: "cont-8",
    number: 8,
    title: "Capacitación contable y tributaria",
    description: "Entrenamiento in-house y talleres especializados para directivos y equipos contables en actualización tributaria del SRI, facturación electrónica y manejo de NIIF.",
    category: "contable",
    categoryLabel: "Contable y Corporativo",
    badge: "Formación",
    deliverables: [
      "Temarios adaptados a la realidad de la empresa",
      "Talleres prácticos con simuladores del SRI y SUT",
      "Material didáctico y plantillas de cálculo",
      "Certificados de participación profesional"
    ],
    legalBasis: "Resoluciones de actualización del SRI y MDT 2026",
    frequency: "Bajo demanda / Programas a medida",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hola GP SOLUTIONS (+593999840649), deseo cotizar un taller de Capacitación Contable y Tributaria."
  },

  // =========================================================================
  // 2. SERVICIOS TRIBUTARIOS (8 OFICIALES)
  // =========================================================================
  {
    id: "trib-1",
    number: 9,
    title: "Declaraciones de IVA e Impuesto a la Renta",
    description: "Liquidación puntual de formularios 104 (IVA mensual/semestral) y 102/101 (Renta Personas Naturales y Sociedades). Optimización legal de gastos y deducciones.",
    category: "tributaria",
    categoryLabel: "Tributario y Fiscal",
    badge: "SRI Oficial",
    deliverables: [
      "Cálculo de crédito tributario y factor de proporcionalidad",
      "Generación y presentación en portal SRI en línea",
      "Convenios de débito bancario y comprobantes de pago",
      "Archivo digital respaldado de cada declaración"
    ],
    legalBasis: "Ley Orgánica de Régimen Tributario Interno (LORTI)",
    frequency: "Mensual / Semestral / Anual",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hola GP SOLUTIONS (+593999840649), solicito asesoría para mis declaraciones de IVA e Impuesto a la Renta."
  },
  {
    id: "trib-2",
    number: 10,
    title: "Retenciones en la fuente",
    description: "Determinación rigurosa de porcentajes de retención en IVA e Impuesto a la Renta para agentes de retención y contribuyentes especiales, evitando multas e intereses.",
    category: "tributaria",
    categoryLabel: "Tributario y Fiscal",
    badge: "Cero Glosas",
    deliverables: [
      "Aplicación de tabla de retenciones SRI actualizada",
      "Emisión de comprobantes de retención electrónicos",
      "Declaración mensual Formulario 103",
      "Conciliación con libros contables de pasivos"
    ],
    legalBasis: "Reglamento de Aplicación de la LORTI y Resoluciones SRI",
    frequency: "Mensual",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hola GP SOLUTIONS (+593999840649), necesito soporte en cálculo y declaración de Retenciones en la Fuente."
  },
  {
    id: "trib-3",
    number: 11,
    title: "Impuestos a las herencias, legados y donaciones",
    description: "Liquidación técnica de masa hereditaria y donaciones ante el SRI. Asesoría en deducciones por cargas familiares y gastos de última enfermedad para reducir la base imponible.",
    category: "tributaria",
    categoryLabel: "Tributario y Fiscal",
    badge: "Herencias SRI",
    deliverables: [
      "Inventario valorado de bienes muebles e inmuebles",
      "Declaración y liquidación Formulario 108",
      "Emisión del certificado de cumplimiento tributario para notarías",
      "Acompañamiento en posesión efectiva"
    ],
    legalBasis: "LORTI - Capítulo de Ingresos a Título Gratuito",
    frequency: "Por Sucesión o Donación",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hola GP SOLUTIONS (+593999840649), solicito asesoría técnica para la declaración de Impuesto a las Herencias."
  },
  {
    id: "trib-4",
    number: 12,
    title: "Declaración Patrimonial",
    description: "Elaboración de la declaración anual de patrimonio para personas naturales que superen el límite legal del SRI ($245,000+ individual o $490,000+ conyugal).",
    category: "tributaria",
    categoryLabel: "Tributario y Fiscal",
    badge: "Patrimonio",
    deliverables: [
      "Consolidación de activos (bienes raíces, vehículos, inversiones)",
      "Detalle de pasivos bancarios e hipotecarios respaldados",
      "Presentación en sistema SRI con calendario por noveno dígito",
      "Blindaje contra incrementos patrimoniales no justificados"
    ],
    legalBasis: "Resolución General del SRI para Declaración Patrimonial Anual",
    frequency: "Anual (Mayo)",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hola GP SOLUTIONS (+593999840649), necesito elaborar mi Declaración Patrimonial anual ante el SRI."
  },
  {
    id: "trib-5",
    number: 13,
    title: "Anexos Tributarios",
    description: "Validación y transmisión del Anexo Transaccional Simplificado (ATS), Anexo de Relación de Dependencia (RDEP), Anexo de Accionistas y Anexo de Dividendos sin rechazos.",
    category: "tributaria",
    categoryLabel: "Tributario y Fiscal",
    badge: "ATS / RDEP",
    deliverables: [
      "Estructuración de XML conforme esquema XSD del SRI",
      "Depuración de errores y talones resumen validados",
      "Carga exitosa en plataforma DIMM / SRI en línea",
      "Comprobante oficial de recepción sin multas"
    ],
    legalBasis: "Ficha Técnica del SRI para Anexos XML",
    frequency: "Mensual / Anual",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hola GP SOLUTIONS (+593999840649), necesito gestionar la presentación de mis Anexos Tributarios ATS/RDEP."
  },
  {
    id: "trib-6",
    number: 14,
    title: "Anexo de Gastos Personales",
    description: "Revisión y consolidación de comprobantes electrónicos en rubros de alimentación, salud, educación, vivienda, vestimenta y turismo para personas bajo relación de dependencia.",
    category: "tributaria",
    categoryLabel: "Tributario y Fiscal",
    badge: "Deducciones",
    deliverables: [
      "Cruce de facturas electrónicas emitidas en portal SRI",
      "Cálculo de rebaja por cargas familiares declaradas",
      "Generación y presentación del Anexo de Gastos Personales",
      "Formulario 107 para empleador"
    ],
    legalBasis: "Ley Orgánica para el Fortalecimiento de la Economía Familiar",
    frequency: "Anual (Febrero)",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hola GP SOLUTIONS (+593999840649), solicito apoyo para elaborar mi Anexo de Gastos Personales ante el SRI."
  },
  {
    id: "trib-7",
    number: 15,
    title: "Devolución de impuestos",
    description: "Recuperación de saldos a favor por concepto de IVA para Tercera Edad, Personas con Discapacidad y Exportadores, así como pagos en exceso o indebidos de Impuesto a la Renta.",
    category: "tributaria",
    categoryLabel: "Tributario y Fiscal",
    badge: "Reintegro SRI",
    deliverables: [
      "Auditoría de facturas y armado de expedientes de devolución",
      "Ingreso de solicitud virtual en portal del SRI",
      "Seguimiento hasta la acreditación directa en cuenta bancaria",
      "Resolución administrativa favorable"
    ],
    legalBasis: "Ley de Beneficios Tributarios y LORTI",
    frequency: "Mensual / Acumulado",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hola GP SOLUTIONS (+593999840649), deseo tramitar la Devolución de IVA / Impuestos ante el SRI."
  },
  {
    id: "trib-8",
    number: 16,
    title: "Declaración de Patentes, 1.5 x mil",
    description: "Cálculo y presentación ante el Municipio del Distrito Metropolitano de Quito y GADs de Pichincha para el impuesto de Patente Municipal y el 1.5 por mil sobre los activos totales.",
    category: "tributaria",
    categoryLabel: "Tributario y Fiscal",
    badge: "Municipal GAD",
    deliverables: [
      "Determinación de base imponible deducida por pasivos corrientes",
      "Llenado y carga en plataformas municipales metropolitanas",
      "Obtención de título de crédito y Registro Único de Patente (RAET)",
      "Renovación de permisos y solvencia municipal"
    ],
    legalBasis: "Código Orgánico de Organización Territorial (COOTAD)",
    frequency: "Anual (Mayo - Junio)",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hola GP SOLUTIONS (+593999840649), solicito la liquidación de Patente Municipal y 1.5 por mil."
  },

  // =========================================================================
  // 3. SERVICIOS LABORALES (5 OFICIALES)
  // =========================================================================
  {
    id: "lab-1",
    number: 17,
    title: "Contratos de trabajo y actas de Finiquito",
    description: "Elaboración e inscripción legal de contratos laborales en el sistema SUT del Ministerio del Trabajo. Liquidación exacta de actas de finiquito con cálculo de indemnizaciones.",
    category: "laboral",
    categoryLabel: "Laboral y Nómina",
    badge: "MDT / SUT",
    deliverables: [
      "Contratos a plazo indefinido, productivos o por obra en SUT",
      "Cálculo de liquidaciones laborales y desahucio",
      "Generación de acta de finiquito y turno de legalización",
      "Finiquitos sin contingencias judiciales laborales"
    ],
    legalBasis: "Código del Trabajo del Ecuador y Acuerdos Ministeriales",
    frequency: "Por Ingreso o Egreso de Personal",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hola GP SOLUTIONS (+593999840649), necesito gestionar contratos de trabajo o actas de finiquito en SUT."
  },
  {
    id: "lab-2",
    number: 18,
    title: "Roles de pago",
    description: "Emisión de comprobantes mensuales individuales para el personal: detalle de ingresos gravables, horas suplementarias, aporte personal IESS y descuentos autorizados.",
    category: "laboral",
    categoryLabel: "Laboral y Nómina",
    badge: "Rol Individual",
    deliverables: [
      "Rol general consolidado de toda la nómina",
      "Roles individuales impresos o digitales con constancia de firma",
      "Planilla de horas extras con registro de biométrico",
      "Historial de pagos salariales para auditorías laborales"
    ],
    legalBasis: "Art. 42 numeral 3 del Código del Trabajo",
    frequency: "Mensual",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hola GP SOLUTIONS (+593999840649), solicito la emisión y control de Roles de Pago para mi nómina."
  },
  {
    id: "lab-3",
    number: 19,
    title: "Beneficios Sociales",
    description: "Liquidación y legalización en SUT de 13er sueldo (Navideño), 14to sueldo (Escolar), fondos de reserva mensuales o acumulados en IESS, y cálculo del 15% de utilidades.",
    category: "laboral",
    categoryLabel: "Laboral y Nómina",
    badge: "Décimos & Utilidades",
    deliverables: [
      "Formularios del Ministerio del Trabajo validados en SUT",
      "Cálculo proporcional de 13ro y 14to por periodos laborados",
      "Repartición del 10% y 5% de utilidades por cargas familiares",
      "Comprobante oficial de pago sin multas del MDT"
    ],
    legalBasis: "Código del Trabajo - Décimos y Participación de Utilidades",
    frequency: "Febrero / Marzo / Agosto / Diciembre",
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hola GP SOLUTIONS (+593999840649), necesito calcular y legalizar los Beneficios Sociales de mis empleados."
  },
  {
    id: "lab-4",
    number: 20,
    title: "Gestión de planillas y obligaciones ante el IESS",
    description: "Administración integral del portal patronal del IESS: avisos de entrada y salida, planillas mensuales de aportes, fondos de reserva, préstamos de empleados y acuerdos de pago.",
    category: "laboral",
    categoryLabel: "Laboral y Nómina",
    badge: "IESS Patronal",
    deliverables: [
      "Avisos de entrada en máximo 15 días posteriores al ingreso",
      "Generación y pago puntual de comprobantes IESS antes del día 15",
      "Reporte de novedades laborales (variación de sueldos, subsidios)",
      "Certificado de cumplimiento patronal al día (Cero Mora)"
    ],
    legalBasis: "Ley de Seguridad Social y Resoluciones del IESS",
    frequency: "Mensual",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hola GP SOLUTIONS (+593999840649), solicito la gestión de planillas y obligaciones ante el IESS."
  },
  {
    id: "lab-5",
    number: 21,
    title: "Gestión de préstamos quirografarios e hipotecarios",
    description: "Asesoramiento y trámite especializado para afiliados y empleadores en solicitudes de créditos quirografarios, novaciones y desbloqueo de cuentas ante el BIESS.",
    category: "laboral",
    categoryLabel: "Laboral y Nómina",
    badge: "BIESS Crédito",
    deliverables: [
      "Calificación de capacidad de endeudamiento del afiliado",
      "Subsanación de impedimentos y retenciones patronales",
      "Gestión de cruce de fondos de reserva para amortización",
      "Asesoría técnica en desembolso efectivo"
    ],
    legalBasis: "Reglamento de Créditos del Banco del IESS (BIESS)",
    frequency: "Por Requerimiento",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hola GP SOLUTIONS (+593999840649), deseo asesoría para la gestión de préstamos quirografarios / hipotecarios BIESS."
  },
];

export const CATEGORIES_CONFIG = [
  { key: 'todos', label: 'Todos los Servicios', count: 21 },
  { key: 'contable', label: 'Contables y Corporativos', count: 8 },
  { key: 'tributaria', label: 'Tributarios (SRI)', count: 8 },
  { key: 'laboral', label: 'Laborales y Nómina (IESS)', count: 5 }
];

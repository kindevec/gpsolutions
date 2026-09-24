import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react';
import { WhatsAppIcon, FacebookIcon, InstagramIcon, LinkedInIcon } from '../components/ui/SocialIcons';
import { COMPANY_DATA, buildWhatsAppLink } from '../data/company';
import { CurvedShapeDivider } from '../components/ui/CurvedShapeDivider';

export const ContactView: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    servicio: 'Servicios Contables y Corporativos',
    mensaje: '',
    honeypot: '',
  });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    const message = `Hola GP SOLUTIONS (+593999840649), mi nombre es ${formData.nombre}.
- Teléfono: ${formData.telefono}
- Email: ${formData.email}
- Área de consulta: ${formData.servicio}
- Detalle: ${formData.mensaje}`;

    window.open(buildWhatsAppLink(message), '_blank');
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: '¿Qué sucede si tengo declaraciones mensuales o anuales atrasadas ante el SRI?',
      a: 'Es indispensable realizar una regularización técnica de inmediato. Presentamos las declaraciones sustitutivas u omitidas calculando los intereses de ley y multas mínimas con atenuantes antes de que el SRI emita una liquidación de pago o una orden de coactiva.',
    },
    {
      q: '¿Cuáles son las ventajas de constituir una empresa bajo la figura S.A.S. en Ecuador?',
      a: 'La Sociedad por Acciones Simplificada (S.A.S.) permite constituirse desde 1 solo accionista, no requiere capital mínimo obligatorio, su trámite es 100% digital ante la Superintendencia de Compañías y limita la responsabilidad patrimonial al monto aportado, protegiendo sus bienes personales.',
    },
    {
      q: '¿Cómo evitar multas y recargos patronales en el IESS?',
      a: 'Los avisos de entrada de trabajadores deben registrarse dentro de los primeros 15 días posteriores al inicio de labores, y las planillas mensuales deben cancelarse rigurosamente hasta el día 15 del mes siguiente para no incurrir en mora patronal ni bloqueo de servicios médicos para el personal.',
    },
    {
      q: '¿Quiénes tienen derecho al trámite de Devolución de IVA ante el SRI?',
      a: 'Tienen derecho las personas de la tercera edad (65 años o más), personas con carné de discapacidad, exportadores de bienes y servicios, y ejecutores de proyectos de vivienda de interés social. En GP SOLUTIONS armamos y validamos el expediente para su acreditación bancaria directa.',
    },
    {
      q: '¿Ofrecen atención presencial en Tumbaco / Quito o remota a nivel nacional?',
      a: 'Ambas modalidades. Contamos con atención personalizada previa cita en nuestro despacho de Tumbaco (Quito, Pichincha) y operamos con plataformas digitales y carpetas seguras en la nube para empresas de Guayaquil, Cuenca, Manta, Ambato y todo el territorio ecuatoriano.',
    },
  ];

  return (
    <div className="bg-[#F4F8FC] text-[#102547]">
      
      {/* =========================================================================
          1. HEADER INSTITUCIONAL ONDULADO (FOTO DESPACHO + MÁSCARA ONDULADA)
         ========================================================================= */}
      <section className="relative pt-32 pb-24 sm:pt-36 sm:pb-28 md:pt-40 md:pb-32 overflow-hidden bg-[#102547]">
        {/* Foto de Fondo con Máscara Ondulada y Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/heroes/hero-contact.jpg"
            alt="Despacho de Asesoría y Consultoría GP Solutions"
            className="w-full h-full object-cover object-center transform scale-105"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1a30]/95 via-[#102547]/88 to-[#0c1a30]/82" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1a30]/80 via-transparent to-[#102547]/90" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[300px] bg-sky-400/15 rounded-full blur-[140px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 font-heading drop-shadow-md leading-[1.12]">
            <span className="text-white">Canales de </span>
            <span className="bg-gradient-to-r from-[#38BDF8] via-[#7dd3fc] to-white bg-clip-text text-transparent">
              Contacto
            </span>{' '}
            <span className="bg-gradient-to-r from-amber-300 to-[#FCD34D] bg-clip-text text-transparent">
              Oficial
            </span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Coordine una cita presencial en nuestro despacho de Tumbaco o solicite una consultoría virtual inmediata para regularizar su empresa.
          </p>
        </div>

        {/* Separador Ondulado que corta la base de la imagen */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
          <CurvedShapeDivider fillColor="#FFFFFF" position="bottom" variant="organic" />
        </div>
      </section>


      {/* =========================================================================
          2. FORMULARIO Y DATOS DE DESPACHO
         ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
            
            {/* Formulario */}
            <div className="lg:col-span-7">
              <div className="p-8 rounded-3xl bg-[#F4F8FC] border border-sky-900/10 shadow-md">
                <h3 className="font-heading font-extrabold text-2xl text-[#102547] mb-2">
                  Envíenos su Requerimiento
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Complete los datos y se abrirá una conversación en WhatsApp oficial con Luis Fernando Guerra Padilla.
                </p>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-white border border-sky-200 text-center shadow-sm">
                    <CheckCircle2 className="w-12 h-12 text-[#0284C7] mx-auto mb-3" />
                    <h4 className="font-bold text-[#102547] text-base mb-1">¡Consulta lista para envío!</h4>
                    <p className="text-xs text-slate-600 mb-4">
                      Se ha generado el enlace de WhatsApp. Si no se abrió automáticamente, pulse el siguiente botón:
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-bold text-[#0284C7] hover:underline"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.nombre}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                          placeholder="Ej. Juan Pérez"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-sky-200 text-xs text-[#102547] focus:outline-none focus:border-[#0284C7] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">
                          Teléfono / Celular *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                          placeholder="Ej. 0999840649"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-sky-200 text-xs text-[#102547] focus:outline-none focus:border-[#0284C7] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">
                          Correo electrónico
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="correo@ejemplo.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-sky-200 text-xs text-[#102547] focus:outline-none focus:border-[#0284C7] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1">
                          Área de Interés *
                        </label>
                        <select
                          value={formData.servicio}
                          onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-sky-200 text-xs text-[#102547] focus:outline-none focus:border-[#0284C7] transition-colors"
                        >
                          <option value="Servicios Contables y Corporativos">Servicios Contables y Corporativos (NIIF / SuperCías)</option>
                          <option value="Servicios Tributarios SRI">Servicios Tributarios (SRI / Renta / IVA)</option>
                          <option value="Servicios Laborales e IESS">Servicios Laborales (IESS / SUT / Nómina)</option>
                          <option value="Constitución de SAS">Constitución de empresa S.A.S.</option>
                          <option value="Devolución de IVA">Devolución de IVA / Impuestos</option>
                          <option value="Otra consulta integral">Otra consulta integral</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        Detalle de su consulta
                      </label>
                      <textarea
                        rows={3}
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        placeholder="Describa brevemente su necesidad o si tiene declaraciones atrasadas..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sky-200 text-xs text-[#102547] focus:outline-none focus:border-[#0284C7] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-bold bg-[#0284C7] hover:bg-[#0369a1] text-white shadow-md shadow-[#0284C7]/20 transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar a WhatsApp Oficial</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Datos Directos */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Tarjeta de Identidad Institucional Oficial */}
              <div className="p-6 rounded-3xl bg-white border border-sky-900/10 shadow-sm flex items-center gap-4">
                <img
                  src="/logo.webp"
                  alt="Logo Oficial GP Solutions"
                  className="w-16 h-16 object-contain drop-shadow-md shrink-0"
                  width={64}
                  height={64}
                />
                <div>
                  <h3 className="font-heading font-black text-base text-[#102547]">
                    {COMPANY_DATA.commercialName}
                  </h3>
                  <p className="text-xs text-[#0284C7] font-semibold">
                    {COMPANY_DATA.name}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {COMPANY_DATA.slogan} • RUC Activo
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-gradient-to-br from-[#102547] to-[#153760] text-white shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#0284C7] text-white flex items-center justify-center shadow-md">
                    <WhatsAppIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Línea Directa WhatsApp</h4>
                    <p className="text-xs text-[#38BDF8] font-semibold">{COMPANY_DATA.phoneFormatted1}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 mb-4">
                  Atención ágil de lunes a viernes con nuestro equipo técnico en Tumbaco.
                </p>
                <a
                  href={COMPANY_DATA.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-white text-[#102547] hover:bg-slate-100 transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#0284C7]" />
                  <span>Chatear ahora</span>
                </a>
              </div>

              {/* Redes Sociales Oficiales */}
              <div className="p-5 rounded-2xl bg-[#F4F8FC] border border-sky-100">
                <div className="text-xs font-bold text-[#102547] mb-2.5">
                  Síganos en Redes Sociales Oficiales
                </div>
                <div className="flex items-center gap-3.5 pt-1">
                  <a
                    href={COMPANY_DATA.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp Oficial GP Solutions"
                    className="social-icon-btn rounded-xl text-[#25D366] transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_12px_rgba(37,211,102,0.8)] inline-flex items-center justify-center p-1.5 cursor-pointer"
                    title="WhatsApp"
                  >
                    <WhatsAppIcon className="w-6 h-6" />
                  </a>

                  <a
                    href={COMPANY_DATA.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook GP Solutions"
                    className="social-icon-btn rounded-xl text-[#1877F2] transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_12px_rgba(24,119,242,0.8)] inline-flex items-center justify-center p-1.5 cursor-pointer"
                    title="Facebook"
                  >
                    <FacebookIcon className="w-6 h-6" />
                  </a>

                  <a
                    href={COMPANY_DATA.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram GP Solutions"
                    className="social-icon-btn rounded-xl text-[#E4405F] transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_12px_rgba(228,64,95,0.8)] inline-flex items-center justify-center p-1.5 cursor-pointer"
                    title="Instagram"
                  >
                    <InstagramIcon className="w-6 h-6" />
                  </a>

                  <a
                    href={COMPANY_DATA.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn GP Solutions"
                    className="social-icon-btn rounded-xl text-[#0A66C2] transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_12px_rgba(10,102,194,0.8)] inline-flex items-center justify-center p-1.5 cursor-pointer"
                    title="LinkedIn"
                  >
                    <LinkedInIcon className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F4F8FC] border border-sky-100 flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#102547]">Línea Telefónica Secundaria</div>
                  <a href={`tel:${COMPANY_DATA.phoneFormatted2}`} className="text-xs text-slate-600 hover:text-[#0284C7] font-mono">
                    {COMPANY_DATA.phoneFormatted2}
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F4F8FC] border border-sky-100 flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#102547]">Correo Institucional</div>
                  <a href={`mailto:${COMPANY_DATA.email}`} className="text-xs text-slate-600 hover:text-[#0284C7] break-all">
                    {COMPANY_DATA.email}
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F4F8FC] border border-sky-100 flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#102547]">Despacho Presencial</div>
                  <p className="text-xs text-slate-600">{COMPANY_DATA.location}</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#F4F8FC] border border-sky-100 flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#102547]">Horario de Atención</div>
                  <p className="text-xs text-slate-600">{COMPANY_DATA.hours}</p>
                </div>
              </div>

            </div>

          </div>

          {/* Preguntas Frecuentes */}
          <div className="pt-10 border-t border-slate-100 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#102547] mb-2">
                Preguntas Frecuentes (FAQ)
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Aclaraciones directas sobre plazos del SRI, trámites con IESS y sociedades S.A.S.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#F4F8FC] border border-sky-100 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-sky-50/50 transition-colors"
                    >
                      <span className="font-heading font-bold text-xs sm:text-sm text-[#102547]">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#0284C7] shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-sky-100/60">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY_DATA, buildWhatsAppLink } from '../data/company';

export const ContactView: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    servicio: 'Contabilidad general',
    mensaje: '',
    honeypot: '', // anti-spam
  });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent discard bot

    const message = `Hola GP SOLUTIONS (+593999840649), mi nombre es ${formData.nombre}.
- Teléfono: ${formData.telefono}
- Email: ${formData.email}
- Servicio de interés: ${formData.servicio}
- Consulta: ${formData.mensaje}`;

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
    <div className="pb-16 sm:pb-28 pt-24 sm:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00D26A] uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Canales de Asesoría Inmediata</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            Atención & Despacho Profesional
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-300">
            Comuníquese directamente con nuestros especialistas contables y tributarios para coordinar una cita o resolver sus dudas normativas.
          </p>
        </div>

        {/* Contact Grid: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 sm:mb-24">
          
          {/* Columna Formulario Sanitizado (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-white/10 shadow-2xl">
              <h3 className="font-heading font-extrabold text-xl text-white mb-2">
                Envíenos su Consulta
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Complete el formulario y se abrirá una conversación directa en WhatsApp con su requerimiento estructurado.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#153760]/60 border border-[#00D26A]/40 text-center">
                  <CheckCircle2 className="w-12 h-12 text-[#00D26A] mx-auto mb-3" />
                  <h4 className="font-bold text-white text-base mb-1">¡Consulta lista para envío!</h4>
                  <p className="text-xs text-slate-300 mb-4">
                    Su mensaje ha sido preparado. Si su ventana de WhatsApp no se abrió automáticamente, pulse el siguiente botón:
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-[#00D26A] hover:underline font-semibold"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot anti-spam (oculto) */}
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
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Ej. Carlos Mendoza"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#00D26A] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        placeholder="Ej. 0999840649"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#00D26A] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contacto@empresa.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#00D26A] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        Área de interés *
                      </label>
                      <select
                        value={formData.servicio}
                        onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white focus:outline-none focus:border-[#00D26A] transition-colors"
                      >
                        <option value="Contabilidad general">Contabilidad general (NIIF)</option>
                        <option value="Declaraciones de IVA e Impuesto a la Renta">Declaraciones SRI (IVA / Renta)</option>
                        <option value="Constitución de SAS">Constitución de empresa S.A.S.</option>
                        <option value="Gestión de planillas IESS y Roles">Nómina y Planillas IESS</option>
                        <option value="Anexos ATS y RDEP">Anexos Tributarios ATS / RDEP</option>
                        <option value="Devolución de impuestos">Devolución de IVA / Impuestos</option>
                        <option value="Otra asesoría personalizada">Otra asesoría personalizada</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      Detalle de su requerimiento
                    </label>
                    <textarea
                      rows={3}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Indique si es persona natural o jurídica, si tiene declaraciones atrasadas o si necesita asesoría puntual..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#00D26A] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold bg-[#00D26A] hover:bg-[#00c060] text-[#0B192C] transition-all cursor-pointer shadow-lg shadow-[#00D26A]/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitud a WhatsApp Oficial</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Columna Datos Operativos (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Tarjeta WhatsApp Inmediato */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#153760] to-slate-900 border border-[#00C4A7]/30 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#00D26A] text-[#0B192C] flex items-center justify-center shadow-md">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Línea Directa WhatsApp</h4>
                  <p className="text-xs text-[#00D26A] font-semibold">{COMPANY_DATA.phoneFormatted1}</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 mb-4">
                Respuesta ágil de lunes a viernes con nuestro equipo contable en Tumbaco.
              </p>
              <a
                href={COMPANY_DATA.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-white text-[#0B192C] hover:bg-slate-100 transition-all cursor-pointer"
              >
                <span>Chatear ahora</span>
              </a>
            </div>

            {/* Teléfono Secundario */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 flex items-start gap-3.5">
              <Phone className="w-5 h-5 text-[#00B4D8] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">Línea Telefónica Secundaria</div>
                <a href={`tel:${COMPANY_DATA.phoneFormatted2}`} className="text-xs text-slate-300 hover:text-[#00D26A] font-mono">
                  {COMPANY_DATA.phoneFormatted2}
                </a>
              </div>
            </div>

            {/* Correo Oficial */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 flex items-start gap-3.5">
              <Mail className="w-5 h-5 text-[#D8AC43] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">Correo Institucional</div>
                <a href={`mailto:${COMPANY_DATA.email}`} className="text-xs text-slate-300 hover:text-[#00D26A] break-all">
                  {COMPANY_DATA.email}
                </a>
              </div>
            </div>

            {/* Despacho Físico */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 flex items-start gap-3.5">
              <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">Despacho Principal</div>
                <p className="text-xs text-slate-300">{COMPANY_DATA.location}</p>
              </div>
            </div>

            {/* Horarios */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 flex items-start gap-3.5">
              <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-white">Horarios de Atención</div>
                <p className="text-xs text-slate-300">{COMPANY_DATA.hours}</p>
              </div>
            </div>

          </div>

        </div>

        {/* Sección de Preguntas Frecuentes (FAQ Acordeón) */}
        <div className="pt-10 border-t border-white/10 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-2">
              Preguntas Frecuentes (FAQ)
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Respuestas directas a las dudas tributarias, contables y societarias más habituales en Ecuador.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/60 border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left transition-colors cursor-pointer hover:bg-white/5"
                  >
                    <span className="font-heading font-bold text-xs sm:text-sm text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#00D26A] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

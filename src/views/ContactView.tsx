import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Navigation,
  ExternalLink,
  Star,
} from 'lucide-react';
import { WhatsAppIcon, FacebookIcon, InstagramIcon, LinkedInIcon } from '../components/ui/SocialIcons';
import { COMPANY_DATA, buildWhatsAppLink } from '../data/company';
import { CurvedShapeDivider } from '../components/ui/CurvedShapeDivider';

export const ContactView: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    empresa: '',
    nombre: '',
    email: '',
    telefono: '',
    servicio: 'Servicios Contables y Corporativos',
    mensaje: '',
    honeypot: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    const message = `Hola GP SOLUTIONS (+593999840649), mi nombre es ${formData.nombre}${formData.empresa ? ` de la empresa ${formData.empresa}` : ''}.
- Teléfono: ${formData.telefono}
- Email: ${formData.email}
- Asunto / Área: ${formData.servicio}
- Detalle: ${formData.mensaje}`;

    window.open(buildWhatsAppLink(message), '_blank');
    setFormSubmitted(true);
  };

  return (
    <div className="bg-white text-[#102547]">
      
      {/* =========================================================================
          1. HEADER INSTITUCIONAL ONDULADO (FOTO DESPACHO + MÁSCARA ONDULADA)
         ========================================================================= */}
      <section className="relative pt-40 pb-28 sm:pt-48 sm:pb-32 md:pt-56 md:pb-36 overflow-hidden bg-[#102547]">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mt-4 sm:mt-8">
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
      </section>


      {/* =========================================================================
          2. FORMULARIO ESTILO TARJETA CHEVRON FLECHA + FONDO BLANCO
         ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Contenedor Principal con ancho normal (max-w-7xl) */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* LADO IZQUIERDO: Formulario estilo Send Us A Message */}
              <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 flex flex-col justify-between">
                <div>
                  {/* Título de Cabecera con barra suave */}
                  <div className="border-b border-slate-100 pb-4 mb-6">
                    <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#102547] tracking-tight">
                      Envíenos un Mensaje
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                      Complete el formulario a continuación y nos pondremos en contacto con usted en menos de 24 horas hábiles.
                    </p>
                    <p className="text-[11px] font-semibold text-slate-400 mt-2">
                      * Campos obligatorios
                    </p>
                  </div>

                  {formSubmitted ? (
                    <div className="p-8 rounded-2xl bg-[#F0FDF4] border border-green-200 text-center shadow-sm my-6">
                      <CheckCircle2 className="w-12 h-12 text-[#16A34A] mx-auto mb-3" />
                      <h4 className="font-bold text-[#102547] text-base mb-1">¡Consulta lista para envío!</h4>
                      <p className="text-xs text-slate-600 mb-4">
                        Se ha generado el enlace directo a WhatsApp oficial con Luis Fernando Guerra Padilla.
                      </p>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="text-xs font-bold text-[#0284C7] hover:underline cursor-pointer"
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

                      {/* Fila 1: Nombre de Empresa / RUC y Nombre Completo */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="text"
                            value={formData.empresa}
                            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                            placeholder="Nombre de su Empresa / RUC *"
                            required
                            className="w-full bg-[#F3F4F6] hover:bg-[#EAECEF] focus:bg-white text-slate-800 placeholder:text-slate-400 border border-slate-200/80 focus:border-[#0284C7] rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all"
                          />
                        </div>

                        <div>
                          <input
                            type="text"
                            required
                            value={formData.nombre}
                            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                            placeholder="Su Nombre Completo *"
                            className="w-full bg-[#F3F4F6] hover:bg-[#EAECEF] focus:bg-white text-slate-800 placeholder:text-slate-400 border border-slate-200/80 focus:border-[#0284C7] rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all"
                          />
                        </div>
                      </div>

                      {/* Fila 2: Correo Electrónico y Teléfono con Acento */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Correo Electrónico *"
                            className="w-full bg-[#F3F4F6] hover:bg-[#EAECEF] focus:bg-white text-slate-800 placeholder:text-slate-400 border border-slate-200/80 focus:border-[#0284C7] rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all"
                          />
                        </div>

                        <div>
                          <input
                            type="tel"
                            required
                            value={formData.telefono}
                            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                            placeholder="Teléfono / Celular *"
                            className="w-full bg-[#D97706]/10 hover:bg-[#D97706]/15 focus:bg-white text-slate-800 placeholder:text-amber-800/70 border border-amber-500/30 focus:border-[#D97706] rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all font-medium"
                          />
                        </div>
                      </div>

                      {/* Fila 3: Asunto / Área de Interés */}
                      <div>
                        <select
                          value={formData.servicio}
                          onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                          className="w-full bg-[#F3F4F6] hover:bg-[#EAECEF] focus:bg-white text-slate-800 border border-slate-200/80 focus:border-[#0284C7] rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all cursor-pointer"
                        >
                          <option value="Servicios Contables y Corporativos">Asunto: Servicios Contables y Corporativos (NIIF / SuperCías)</option>
                          <option value="Servicios Tributarios SRI">Asunto: Servicios Tributarios (SRI / Renta / IVA / RIMPE)</option>
                          <option value="Servicios Laborales e IESS">Asunto: Servicios Laborales (IESS / SUT / Nómina)</option>
                          <option value="Constitución de SAS">Asunto: Constitución de Sociedades S.A.S.</option>
                          <option value="Devolución de IVA">Asunto: Devolución de IVA / Tercera Edad</option>
                          <option value="Otra consulta integral">Asunto: Otra consulta o diagnóstico integral</option>
                        </select>
                      </div>

                      {/* Fila 4: Detalle del Mensaje */}
                      <div>
                        <textarea
                          rows={4}
                          required
                          value={formData.mensaje}
                          onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                          placeholder="Escriba aquí los detalles de su requerimiento contable, tributario o societario..."
                          className="w-full bg-[#F3F4F6] hover:bg-[#EAECEF] focus:bg-white text-slate-800 placeholder:text-slate-400 border border-slate-200/80 focus:border-[#0284C7] rounded-lg px-4 py-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all resize-none"
                        />
                      </div>

                      {/* Fila 5: Botón Enviar Mensaje CENTRADO */}
                      <div className="pt-3 flex items-center justify-center">
                        <button
                          type="submit"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-12 rounded-xl text-xs sm:text-sm font-bold bg-[#D97706] hover:bg-[#B45309] text-white shadow-md shadow-amber-600/20 hover:shadow-amber-600/30 transition-all cursor-pointer active:scale-98 text-center"
                        >
                          <Send className="w-4 h-4 text-white" />
                          <span>Enviar Mensaje</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* LADO DERECHO: Chevron Flecha Oscuro con Información de Contacto */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#0a172c] via-[#102547] to-[#153760] text-white p-8 sm:p-10 lg:pl-16 relative flex flex-col justify-center [clip-path:none] lg:[clip-path:polygon(42px_0,100%_0,100%_100%,42px_100%,0_50%)]">
                
                <div className="space-y-6">
                  
                  {/* Identidad del Despacho */}
                  <div className="flex items-center gap-3.5 pb-5 border-b border-sky-400/20">
                    <img
                      src="/logo.webp"
                      alt="Logo Oficial GP Solutions"
                      className="w-14 h-14 object-contain drop-shadow-md shrink-0 bg-white/10 p-1.5 rounded-2xl border border-white/20"
                      width={56}
                      height={56}
                    />
                    <div>
                      <h3 className="font-heading font-black text-lg text-white leading-tight">
                        {COMPANY_DATA.commercialName}
                      </h3>
                      <p className="text-xs text-[#38BDF8] font-semibold">
                        {COMPANY_DATA.name}
                      </p>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        {COMPANY_DATA.director} • Representante Legal
                      </p>
                    </div>
                  </div>

                  {/* Datos de Contacto Directos */}
                  <div className="space-y-4 text-xs sm:text-sm">
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-1" />
                      <div>
                        <span className="text-slate-300 block text-xs">Ubicación Despacho:</span>
                        <span className="text-white font-medium">{COMPANY_DATA.location}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-[#38BDF8] shrink-0 mt-1" />
                      <div>
                        <span className="text-slate-300 block text-xs">Líneas Directas:</span>
                        <a href={`tel:${COMPANY_DATA.phoneFormatted1}`} className="text-white font-bold hover:text-[#38BDF8] block">
                          {COMPANY_DATA.phoneFormatted1}
                        </a>
                        <a href={`tel:${COMPANY_DATA.phoneFormatted2}`} className="text-slate-300 hover:text-white block text-xs mt-0.5">
                          {COMPANY_DATA.phoneFormatted2}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                      <div>
                        <span className="text-slate-300 block text-xs">Correo Oficial:</span>
                        <a
                          href={`mailto:${COMPANY_DATA.email}`}
                          className="text-[#FCD34D] hover:text-amber-300 font-bold block break-all text-xs sm:text-sm"
                        >
                          {COMPANY_DATA.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-[#38BDF8] shrink-0 mt-1" />
                      <div>
                        <span className="text-slate-300 block text-xs">Horario de Atención:</span>
                        <span className="text-slate-200">{COMPANY_DATA.hours}</span>
                      </div>
                    </div>

                  </div>

                  {/* Redes Sociales centradas inmediatamente después del horario */}
                  <div className="pt-5 border-t border-sky-400/20 flex flex-col items-center justify-center gap-2">
                    <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider text-center">
                      Redes Sociales Oficiales
                    </span>
                    <div className="flex items-center justify-center gap-3 pt-1">
                      <a
                        href={COMPANY_DATA.socials.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/10 hover:bg-[#25D366] text-white transition-all shadow-sm hover:scale-110"
                        title="WhatsApp"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={COMPANY_DATA.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/10 hover:bg-[#1877F2] text-white transition-all shadow-sm hover:scale-110"
                        title="Facebook"
                      >
                        <FacebookIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={COMPANY_DATA.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/10 hover:bg-[#E4405F] text-white transition-all shadow-sm hover:scale-110"
                        title="Instagram"
                      >
                        <InstagramIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={COMPANY_DATA.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-white/10 hover:bg-[#0A66C2] text-white transition-all shadow-sm hover:scale-110"
                        title="LinkedIn"
                      >
                        <LinkedInIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>


          {/* =========================================================================
              3. MAPA DE UBICACIÓN INTERACTIVO (MAX-W-7XL)
             ========================================================================= */}
          <div className="w-full bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden relative">
            
            {/* Tarjeta Flotante estilo Google Maps */}
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-200/80 max-w-xs sm:max-w-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="font-heading font-extrabold text-sm sm:text-base text-[#102547] leading-tight">
                    GP SOLUTIONS Despacho Tumbaco
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {COMPANY_DATA.location}
                  </p>
                  
                  <div className="flex items-center gap-1.5 mt-2">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-slate-700">5.0</span>
                    <span className="text-[10px] text-slate-400">(Asesoría Contable)</span>
                  </div>
                </div>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_DATA.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#0284C7] text-white hover:bg-[#0369a1] transition-all shadow-md shrink-0 flex flex-col items-center justify-center group"
                  title="Cómo llegar"
                >
                  <Navigation className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-[9px] font-bold mt-0.5">Ruta</span>
                </a>
              </div>
            </div>

            {/* Iframe interactivo del Mapa */}
            <div className="w-full h-[380px] sm:h-[440px] md:h-[480px] bg-slate-100 relative">
              <iframe
                title="Ubicación GP Solutions Tumbaco Quito"
                src="https://maps.google.com/maps?q=Tumbaco,+Quito,+Pichincha,+Ecuador&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[10%] contrast-[1.05]"
              />
            </div>

            {/* Barra Inferior Informativa */}
            <div className="bg-[#102547] text-white px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-200">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>Atención presencial previa cita en Tumbaco y telemática en todo el Ecuador.</span>
              </div>
              <a
                href={COMPANY_DATA.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-300 hover:text-white font-bold transition-colors"
              >
                <span>Agendar visita técnica</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

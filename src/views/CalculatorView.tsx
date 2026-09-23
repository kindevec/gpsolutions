import React, { useState } from 'react';
import { Calculator, Check, MessageCircle, Sparkles, Building2, User, HelpCircle } from 'lucide-react';
import { COMPANY_DATA, buildWhatsAppLink } from '../data/company';

export const CalculatorView: React.FC = () => {
  const [personType, setPersonType] = useState<'natural' | 'sociedad'>('natural');
  const [regime, setRegime] = useState<'rimpe_np' | 'rimpe_emp' | 'general'>('rimpe_emp');
  const [invoices, setInvoices] = useState<'baja' | 'media' | 'alta'>('baja');
  const [employees, setEmployees] = useState<'cero' | 'pocos' | 'medios'>('cero');

  const [selectedServices, setSelectedServices] = useState<string[]>([
    'contabilidad',
    'sri',
  ]);

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((s) => s !== serviceId)
        : [...prev, serviceId]
    );
  };

  // Base estimation calculation for reference
  const calculateEstimate = () => {
    let base = personType === 'natural' ? 40 : 90;

    if (regime === 'general') base += 25;
    if (regime === 'rimpe_emp') base += 10;

    if (invoices === 'media') base += 30;
    if (invoices === 'alta') base += 70;

    if (employees === 'pocos') base += 25;
    if (employees === 'medios') base += 60;

    if (selectedServices.includes('ats')) base += 25;
    if (selectedServices.includes('iess')) base += 30;
    if (selectedServices.includes('supercias')) base += 35;
    if (selectedServices.includes('patentes')) base += 20;

    return Math.max(base, 50);
  };

  const estimatedTotal = calculateEstimate();

  const handleSendWhatsApp = () => {
    const personLabel = personType === 'natural' ? 'Persona Natural' : 'Sociedad / S.A.S.';
    const regimeLabel =
      regime === 'rimpe_np'
        ? 'RIMPE Negocio Popular'
        : regime === 'rimpe_emp'
        ? 'RIMPE Emprendedor'
        : 'Régimen General';
    const invoiceLabel =
      invoices === 'baja' ? 'Hasta 25 facturas/mes' : invoices === 'media' ? '26 a 100 facturas/mes' : '+100 facturas/mes';
    const employeeLabel =
      employees === 'cero' ? 'Sin empleados' : employees === 'pocos' ? '1 a 5 empleados' : '6 a 20 empleados';

    const message = `Hola GP SOLUTIONS (+593999840649), coticé en su plataforma web:
- Tipo: ${personLabel}
- Régimen: ${regimeLabel}
- Movimiento: ${invoiceLabel}
- Nómina: ${employeeLabel}
- Módulos requeridos: ${selectedServices.join(', ')}
- Estimado referencial web: $${estimatedTotal} USD/mes.
Deseo agendar una consulta formal para validar este plan.`;

    window.open(buildWhatsAppLink(message), '_blank');
  };

  return (
    <div className="pb-16 sm:pb-28 pt-24 sm:pt-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00D26A] uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador de Presupuesto Contable</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
            Cotizador Inteligente Bespoke
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-300">
            Configure las características de su negocio y obtenga una estimación mensual transparente adaptada a las normas del SRI e IESS.
          </p>
        </div>

        {/* Formulario Modular Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Tipo de Contribuyente */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10">
              <label className="text-xs font-bold text-white uppercase tracking-wider block mb-3">
                1. Tipo de Contribuyente
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPersonType('natural')}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                    personType === 'natural'
                      ? 'bg-[#153760] border-[#00D26A] text-white shadow-md'
                      : 'bg-slate-950 border-white/10 text-slate-300 hover:border-white/20'
                  }`}
                >
                  <User className="w-5 h-5 text-[#00D26A]" />
                  <div>
                    <div className="text-xs sm:text-sm font-bold">Persona Natural</div>
                    <div className="text-[11px] text-slate-400">Profesionales / Comercio</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPersonType('sociedad')}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                    personType === 'sociedad'
                      ? 'bg-[#153760] border-[#00D26A] text-white shadow-md'
                      : 'bg-slate-950 border-white/10 text-slate-300 hover:border-white/20'
                  }`}
                >
                  <Building2 className="w-5 h-5 text-[#00D26A]" />
                  <div>
                    <div className="text-xs sm:text-sm font-bold">Sociedad / Empresa</div>
                    <div className="text-[11px] text-slate-400">S.A.S. / Cía. Ltda. / S.A.</div>
                  </div>
                </button>
              </div>
            </div>

            {/* 2. Régimen Tributario SRI */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10">
              <label className="text-xs font-bold text-white uppercase tracking-wider block mb-3">
                2. Régimen Fiscal ante el SRI
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { key: 'rimpe_np', label: 'RIMPE Negocio Pop.', sub: 'Hasta $20k/año' },
                  { key: 'rimpe_emp', label: 'RIMPE Emprendedor', sub: '$20k a $300k' },
                  { key: 'general', label: 'Régimen General', sub: 'Sociedades / Servicios' },
                ].map((r) => (
                  <button
                    key={r.key}
                    type="button"
                    onClick={() => setRegime(r.key as any)}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                      regime === r.key
                        ? 'bg-[#153760] border-[#00D26A] text-white shadow-md'
                        : 'bg-slate-950 border-white/10 text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs font-bold">{r.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{r.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Volumen de Comprobantes & Nómina */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 space-y-5">
              <div>
                <label className="text-xs font-bold text-white uppercase tracking-wider block mb-2.5">
                  3. Emisión mensual de facturas
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { key: 'baja', label: '1 a 25 facturas' },
                    { key: 'media', label: '26 a 100 facturas' },
                    { key: 'alta', label: '+100 facturas' },
                  ].map((inv) => (
                    <button
                      key={inv.key}
                      type="button"
                      onClick={() => setInvoices(inv.key as any)}
                      className={`py-2 px-3 rounded-xl border text-xs font-semibold cursor-pointer ${
                        invoices === inv.key
                          ? 'bg-[#00D26A] text-[#0B192C] border-[#00D26A]'
                          : 'bg-slate-950 border-white/10 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {inv.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-white uppercase tracking-wider block mb-2.5">
                  4. Colaboradores en nómina (IESS)
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { key: 'cero', label: 'Sin colaboradores' },
                    { key: 'pocos', label: '1 a 5 empleados' },
                    { key: 'medios', label: '6 a 20 empleados' },
                  ].map((emp) => (
                    <button
                      key={emp.key}
                      type="button"
                      onClick={() => setEmployees(emp.key as any)}
                      className={`py-2 px-3 rounded-xl border text-xs font-semibold cursor-pointer ${
                        employees === emp.key
                          ? 'bg-[#00D26A] text-[#0B192C] border-[#00D26A]'
                          : 'bg-slate-950 border-white/10 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {emp.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Módulos Adicionales */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10">
              <label className="text-xs font-bold text-white uppercase tracking-wider block mb-3">
                5. Módulos y Trámites Específicos
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'contabilidad', label: 'Contabilidad NIIF y Balances' },
                  { id: 'sri', label: 'Declaraciones de IVA y Renta' },
                  { id: 'ats', label: 'Anexos Transaccionales (ATS / RDEP)' },
                  { id: 'iess', label: 'Roles de pago y planillas IESS' },
                  { id: 'supercias', label: 'Cumplimiento SuperCías anual' },
                  { id: 'patentes', label: 'Patente Municipal y 1.5 x mil' },
                ].map((serv) => {
                  const isChecked = selectedServices.includes(serv.id);
                  return (
                    <div
                      key={serv.id}
                      onClick={() => toggleService(serv.id)}
                      className={`p-3 rounded-xl border flex items-center gap-2.5 cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-[#153760]/70 border-[#00D26A] text-white'
                          : 'bg-slate-950 border-white/10 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center ${
                          isChecked ? 'bg-[#00D26A] text-[#0B192C]' : 'border border-white/20'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-medium">{serv.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Result Card Column (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-[#10243E] border border-white/15 shadow-2xl">
              
              <div className="flex items-center gap-2 text-xs font-bold text-[#00D26A] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Resumen del Plan</span>
              </div>

              <h3 className="font-heading font-black text-2xl text-white mb-4">
                Estimación de Honorarios
              </h3>

              <div className="p-6 rounded-2xl bg-black/40 border border-white/10 mb-6 text-center">
                <div className="text-xs text-slate-400 mb-1">Inversión mensual estimada</div>
                <div className="text-4xl sm:text-5xl font-black text-[#00D26A] font-heading tracking-tight">
                  ${estimatedTotal}
                  <span className="text-sm font-semibold text-slate-300"> USD / mes</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-2">
                  * Tarifa referencial sujeta a revisión previa de buzón del SRI y volumen real.
                </div>
              </div>

              {/* Incluye */}
              <div className="space-y-2 mb-8 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#00D26A] shrink-0 mt-0.5" />
                  <span>Acompañamiento profesional y representación técnica</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#00D26A] shrink-0 mt-0.5" />
                  <span>Monitoreo constante de calendario de vencimientos</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#00D26A] shrink-0 mt-0.5" />
                  <span>Atención presencial en Tumbaco/Quito y remota nacional</span>
                </div>
              </div>

              {/* CTA WhatsApp con datos precargados */}
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl text-sm font-bold bg-[#00D26A] hover:bg-[#00c060] text-[#0B192C] transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer shadow-lg shadow-[#00D26A]/25"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Enviar Cotización a WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-slate-400 mt-3">
                Respuesta inmediata en horario laboral con Luis Fernando Guerra Padilla.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

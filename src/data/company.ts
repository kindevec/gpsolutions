export const COMPANY_DATA = {
  name: "GUERRAPADILLAGPSOLUTIONS S.A.S.",
  commercialName: "GP SOLUTIONS",
  director: "Álvaro Guerra",
  legalAdvisor: "Luis Fernando Guerra",
  slogan: "Control Integral que construye Confianza",
  subSlogan: "Soluciones integrales en seguridad y salud ocupacional, asesoría contable, legal y financiera",
  legacySlogan: "Seguro con nosotros",
  trajectory: "Más de 12 años brindando soluciones integrales multidisciplinarias en Ecuador",
  experienceYears: "+12 Años de Experiencia",
  location: "Quito, Pichincha - Ecuador",
  phones: {
    alvaro: "+593 982577313",
    alvaroRaw: "593982577313",
    luis: "+593 997650599",
    luisRaw: "593997650599",
    general: "+593 997650599",
    generalRaw: "593997650599",
  },
  phoneFormatted1: "+593 997650599", // Luis Guerra / Oficina / Contacto General & Legal
  phoneFormatted2: "+593 982577313", // Álvaro Guerra / SSO & Tributaria
  primaryPhoneRaw: "593997650599", // General, WhatsApp oficial y Legal (+593 997650599)
  secondaryPhoneRaw: "593982577313", // Álvaro Guerra, SSO y Tributaria (+593 982577313)
  email: "administracion@gpsolutionec.com",
  secondaryEmail: "administracion@gpsolutionec.com",
  domain: "gpsolutionec.com",
  hours: "Lunes a Viernes: 08:30 – 17:30 | Sábados: 08:00 – 14:00",
  whatsappBaseUrl: "https://wa.me/593997650599",
  socials: {
    whatsapp: "https://wa.me/593997650599",
    facebook: "https://www.facebook.com/profile.php?id=61595158340101",
    instagram: "https://www.instagram.com/gpso_lutions/",
    linkedin: "#",
  },
};

export function buildWhatsAppLink(
  serviceOrMessage: string,
  targetPhone: 'general' | 'alvaro' | 'luis' | 'sso' | 'tributaria' | 'legal' = 'general'
): string {
  const isAlvaro =
    targetPhone === 'alvaro' ||
    targetPhone === 'sso' ||
    targetPhone === 'tributaria' ||
    serviceOrMessage.includes('982577313') ||
    serviceOrMessage.includes('Álvaro Guerra') ||
    serviceOrMessage.includes('Seguridad y Salud') ||
    serviceOrMessage.includes('Asesoría Tributaria');

  const phone = isAlvaro ? COMPANY_DATA.secondaryPhoneRaw : COMPANY_DATA.primaryPhoneRaw;
  const phoneDisplay = isAlvaro ? COMPANY_DATA.phoneFormatted2 : COMPANY_DATA.phoneFormatted1;

  let baseMessage = serviceOrMessage;
  if (!baseMessage.startsWith("Hola")) {
    baseMessage = `Hola GP SOLUTIONS (${phoneDisplay}), solicito asesoría directa en el área de: ${serviceOrMessage}`;
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(baseMessage)}`;
}

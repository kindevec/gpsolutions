export const COMPANY_DATA = {
  name: "GUERRAPADILLAGPSOLUTIONS S.A.S.",
  commercialName: "GP SOLUTIONS",
  director: "Álvaro Guerra",
  slogan: "Control Integral que construye Confianza",
  subSlogan: "Soluciones contables, tributarias, laborales y legales a tu alcance",
  legacySlogan: "Seguro con nosotros",
  trajectory: "Más de 12 años brindando asesoría contable, tributaria, laboral y legal a empresas y emprendedores",
  experienceYears: "+12 Años de Experiencia",
  location: "Quito, Pichincha - Ecuador",
  phones: ["+593 997650599", "+593 982577313"],
  phoneFormatted1: "+593 997650599",
  phoneFormatted2: "+593 982577313",
  primaryPhoneRaw: "593982577313", // Utilizado para WhatsApp oficial según requerimiento
  secondaryPhoneRaw: "593997650599",
  email: "administracion@gpsolutionec.com",
  secondaryEmail: "administracion@gpsolutionec.com",
  domain: "gpsolutionec.com",
  hours: "Lunes a Viernes: 08:30 – 17:30 | Sábados: 08:00 – 14:00",
  whatsappBaseUrl: "https://wa.me/593982577313",
  socials: {
    whatsapp: "https://wa.me/593982577313",
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
};

export function buildWhatsAppLink(serviceOrMessage: string): string {
  const baseMessage = serviceOrMessage.startsWith("Hola")
    ? serviceOrMessage
    : `Hola GP SOLUTIONS (+593 982577313), solicito asesoría directa en el área de: ${serviceOrMessage}`;
  return `https://wa.me/${COMPANY_DATA.primaryPhoneRaw}?text=${encodeURIComponent(baseMessage)}`;
}

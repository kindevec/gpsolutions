export const COMPANY_DATA = {
  name: "GUERRAPADILLAGPSOLUTIONS S.A.S.",
  commercialName: "GP SOLUTIONS",
  director: "Luis Fernando Guerra Padilla",
  slogan: "Control Integral que construye Confianza",
  subSlogan: "Soluciones contables, tributarias, laborales y legales a tu alcance",
  legacySlogan: "Seguro con nosotros",
  trajectory: "Más de 12 años brindando asesoría contable, tributaria, laboral y legal a empresas y emprendedores",
  experienceYears: "+12 Años de Experiencia",
  location: "Tumbaco, Quito, Pichincha - Ecuador",
  phones: ["0999840649", "0998160709"],
  phoneFormatted1: "0999840649",
  phoneFormatted2: "0998160709",
  primaryPhoneRaw: "593999840649",
  secondaryPhoneRaw: "593998160709",
  email: "administracion.gpsolutions@gmail.com",
  secondaryEmail: "contacto@gpsolutions.com.ec",
  domain: "gpsolutions.com.ec",
  hours: "Lunes a Viernes: 08:30 – 17:30 | Sábados: Previa cita",
  whatsappBaseUrl: "https://wa.me/593999840649",
  socials: {
    whatsapp: "https://wa.me/593999840649",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
};

export function buildWhatsAppLink(serviceOrMessage: string): string {
  const baseMessage = serviceOrMessage.startsWith("Hola")
    ? serviceOrMessage
    : `Hola GP SOLUTIONS (+593999840649), solicito asesoría directa en el área de: ${serviceOrMessage}`;
  return `https://wa.me/${COMPANY_DATA.primaryPhoneRaw}?text=${encodeURIComponent(baseMessage)}`;
}

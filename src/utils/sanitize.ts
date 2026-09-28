/**
 * Utilidad de sanitización para prevenir inyecciones XSS y datos maliciosos en formularios.
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .replace(/[<>]/g, '') // Elimina etiquetas HTML básicas
    .replace(/javascript:/gi, '') // Elimina pseudo-protocolos javascript
    .replace(/on\w+=/gi, '') // Elimina event handlers en línea
    .trim();
}

/**
 * Validador de correo electrónico con expresión regular RFC 5322 simplificada.
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
}

/**
 * Validador de número de teléfono / celular ecuatoriano (fijo 7 dígitos o celular 10 dígitos).
 */
export function isValidPhone(phone: string): boolean {
  const cleanPhone = phone.replace(/[\s-]/g, '');
  const phoneRegex = /^(\+?593|0)?[2-9]\d{6,8}$/;
  return phoneRegex.test(cleanPhone);
}

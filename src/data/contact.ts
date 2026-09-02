/**
 * Ponto único de verdade dos canais de contato — o número aparecia
 * hard-coded em uma URL do whatsa.me dentro do JSX.
 */
export const WHATSAPP_NUMBER = "5548991627338";

export const WHATSAPP_MESSAGE =
  "Olá, Dênis! Vi seu portfólio e gostaria de conversar sobre um projeto.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const EMAIL = "denisluft8@gmail.com";
export const EMAIL_URL = `mailto:${EMAIL}`;

export const LINKEDIN_URL = "https://www.linkedin.com/in/denisluft8/";
export const GITHUB_URL = "https://github.com/denisluft8";

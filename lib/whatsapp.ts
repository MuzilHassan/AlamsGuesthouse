import { siteConfig } from "@/data/siteConfig";

function sanitizePhone(phone: string): string {
  return phone.replace(/[^\d]/g, "");
}

export function buildWhatsAppLink(
  message: string,
  phone: string = siteConfig.whatsappNumber
): string {
  if (process.env.NODE_ENV !== "production" && !phone) {
    console.warn(
      "NEXT_PUBLIC_WHATSAPP_NUMBER is not set — WhatsApp links will be broken."
    );
  }
  const digits = sanitizePhone(phone);
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  general: () =>
    `Hi! I'd like to enquire about booking a stay at ${siteConfig.name}.`,
  room: (roomName: string) =>
    `Hi, I'd like to know more about the ${roomName}.`,
  hall: (hallName: string) =>
    `Hi, I'd like to enquire about booking the ${hallName} for an event.`,
  contact: () => `Hi! I have a question about ${siteConfig.name}.`,
};

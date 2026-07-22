export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Landmark {
  name: string;
  distance: string;
}

function formatPhoneDisplay(raw: string): string {
  const digits = raw.replace(/[^\d]/g, "");
  // Pakistan mobile numbers: +92 XXX XXXXXXX
  if (digits.startsWith("92") && digits.length === 12) {
    return `+92 ${digits.slice(2, 5)} ${digits.slice(5)}`;
  }
  return `+${digits}`;
}

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "923001234567";

export const siteConfig = {
  name: "Alam's Guest House",
  tagline: "Comfort & Hospitality in the Heart of Upper Chitral",
  description:
    "Alam's Guest House offers warm, family-run hospitality in Booni, Upper Chitral — one of Chitral's most scenic valleys — with comfortable rooms, an elegant event hall, and easy access to some of the region's most beautiful alpine meadows and valleys.",
  phoneDisplay: formatPhoneDisplay(whatsappNumber),
  whatsappNumber,
  email: "abidriza007@gmail.com",
  address:
    "Alam's Guest House, Booni Kruijinali, Opposite Post Office, Booni 17050, Upper Chitral, Khyber Pakhtunkhwa, Pakistan",
  mapEmbedUrl:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(
      "ALAM'S Guest House, Booni Kruijinali, opposite post office, Booni 17050, Upper Chitral, Khyber Pakhtunkhwa, Pakistan"
    ) +
    "&output=embed",
  socials: {
    facebook: "https://www.facebook.com/share/1BNVyoi3zN/",
    instagram:
      "https://www.instagram.com/alams.guest.house11?igsh=MWtsdzFlMTA1ZXhxZQ==",
    tiktok: "https://vt.tiktok.com/ZSXeugH8k/",
  },
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Rooms", href: "#rooms" },
    { label: "Halls", href: "#halls" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],
  stats: [
    { label: "Rooms", value: "12+" },
    { label: "Reception", value: "24/7" },
    { label: "WiFi", value: "Free" },
  ] satisfies Stat[],
  landmarks: [
    { name: "Booni Polo Ground", distance: "30 min walk" },
    { name: "Qaqlasht Meadows", distance: "20 min drive" },
    { name: "Shipishum Meadows", distance: "3 hr hike or 45 min by jeep" },
  ] satisfies Landmark[],
};

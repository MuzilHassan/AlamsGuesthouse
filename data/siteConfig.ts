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

export const siteConfig = {
  name: "Alam Guest House",
  tagline: "Comfort & Hospitality in the Heart of Upper Chitral",
  description:
    "Alam Guest House offers warm, family-run hospitality in Booni, Upper Chitral — comfortable rooms, an elegant event hall, and easy access to some of the region's most beautiful alpine meadows and valleys.",
  phoneDisplay: "+92 300 1234567",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "923001234567",
  email: "info@alamguesthouse.example.com",
  address:
    "Alam Guest House, Booni Kruijinali, Opposite Post Office, Booni 17050, Upper Chitral, Khyber Pakhtunkhwa, Pakistan",
  mapEmbedUrl:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(
      "ALAM'S Guest House, Booni Kruijinali, opposite post office, Booni 17050, Upper Chitral, Khyber Pakhtunkhwa, Pakistan"
    ) +
    "&output=embed",
  socials: {
    instagram: "https://instagram.com/alamguesthouse",
    facebook: "https://facebook.com/alamguesthouse",
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

import Hero from "@/components/Hero";
import About from "@/components/About";
import RoomsSection from "@/components/RoomsSection";
import HallsSection from "@/components/HallsSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <RoomsSection />
      <HallsSection />
      <ServicesSection />
      <GallerySection />
      <LocationSection />
      <ContactSection />
    </>
  );
}

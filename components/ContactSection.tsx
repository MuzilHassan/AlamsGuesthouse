import { Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { whatsappMessages } from "@/lib/whatsapp";
import WhatsAppButton from "./WhatsAppButton";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-navy-900 py-20 text-beige-50 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
          Ready to Book Your Stay?
        </h2>
        <p className="mt-4 text-base text-beige-200 sm:text-lg">
          Reach out on WhatsApp and our team will help you find the perfect
          room or event space at {siteConfig.name}.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <WhatsAppButton
            message={whatsappMessages.contact()}
            className="px-8 py-4 text-base"
          >
            Chat on WhatsApp
          </WhatsAppButton>

          <a
            href={`tel:${siteConfig.whatsappNumber}`}
            className="inline-flex items-center gap-2 rounded-[3px] border border-beige-100/40 px-8 py-4 text-base font-semibold text-beige-50 transition-colors hover:bg-beige-50/10"
          >
            <Phone size={18} />
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

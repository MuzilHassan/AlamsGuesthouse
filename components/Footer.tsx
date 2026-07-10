import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { InstagramIcon, FacebookIcon } from "./icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-beige-100">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-serif text-xl font-semibold text-beige-50">
              {siteConfig.name}
            </p>
            <p className="mt-3 flex items-start gap-2 text-sm text-beige-200">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              {siteConfig.address}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-terracotta-300">
              Quick Links
            </p>
            <nav className="mt-3 flex flex-col gap-2">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-beige-200 hover:text-beige-50"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-terracotta-300">
              Contact
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-beige-200">
              <a
                href={`tel:${siteConfig.whatsappNumber}`}
                className="flex items-center gap-2 hover:text-beige-50"
              >
                <Phone size={16} /> {siteConfig.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-beige-50"
              >
                <Mail size={16} /> {siteConfig.email}
              </a>
              <div className="mt-1 flex items-center gap-4">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-beige-50"
                >
                  <InstagramIcon width={20} height={20} />
                </a>
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-beige-50"
                >
                  <FacebookIcon width={20} height={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-navy-700 pt-6 text-center text-xs text-beige-300">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

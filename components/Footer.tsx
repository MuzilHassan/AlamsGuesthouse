import { siteConfig } from "@/data/siteConfig";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "./icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-beige-100">
      <div className="w-full border-t border-white/10 px-6 py-8 sm:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-lg font-semibold text-beige-50">
              {siteConfig.name}
            </p>
            <div className="mt-3 flex items-center gap-5">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-beige-200 hover:text-beige-50"
              >
                <FacebookIcon width={20} height={20} />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-beige-200 hover:text-beige-50"
              >
                <InstagramIcon width={20} height={20} />
              </a>
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-beige-200 hover:text-beige-50"
              >
                <TikTokIcon width={20} height={20} />
              </a>
            </div>
          </div>

          <p className="text-xs text-beige-300">
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { ArrowRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface WhatsAppLinkProps {
  message: string;
  children: React.ReactNode;
  className?: string;
}

export default function WhatsAppLink({
  message,
  children,
  className,
}: WhatsAppLinkProps) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group/link inline-flex items-center gap-1 text-sm font-semibold text-terracotta-700 transition-colors hover:text-terracotta-600",
        className
      )}
    >
      {children}
      <ArrowRight
        size={14}
        className="transition-transform group-hover/link:translate-x-1"
      />
    </a>
  );
}

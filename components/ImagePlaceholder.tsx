import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  labelPosition?: "center" | "top-left";
}

export default function ImagePlaceholder({
  label,
  className,
  labelPosition = "center",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative h-full w-full bg-[repeating-linear-gradient(135deg,var(--color-beige-300)_0px,var(--color-beige-300)_12px,var(--color-beige-100)_12px,var(--color-beige-100)_24px)]",
        className
      )}
    >
      {labelPosition === "center" ? (
        <div className="flex h-full w-full items-center justify-center px-4 text-center font-mono text-[11px] uppercase tracking-wide text-navy-700">
          {label}
        </div>
      ) : (
        <div className="absolute left-6 top-24 font-mono text-[11px] uppercase tracking-wide text-navy-700 sm:left-10 sm:top-28">
          {label}
        </div>
      )}
    </div>
  );
}

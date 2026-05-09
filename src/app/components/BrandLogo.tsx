import { cn } from "./ui/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  onDark?: boolean;
  boxed?: boolean;
};

export function BrandLogo({
  className,
  imageClassName,
  onDark = false,
  boxed = false,
}: BrandLogoProps) {
  const wordmarkColor = onDark ? "text-[var(--color-primary-light)]" : "text-[var(--color-primary)]";
  const detailColor = onDark ? "text-white/88" : "text-[var(--color-primary-dark)]";
  const rcColor = onDark ? "text-white/55" : "text-black/60";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 rounded-2xl transition-shadow",
        boxed && "bg-white/96 px-3 py-2 shadow-[0_16px_40px_rgba(0,0,0,0.16)]",
        className,
      )}
    >
      <img
        src="/kanato-logo.png"
        alt="Kanato Engineering icon"
        className={cn("h-8 w-auto shrink-0 sm:h-10", imageClassName)}
      />
      <span className="flex flex-col leading-none">
        <span className="relative inline-block pr-8">
          <span
            className={cn(
              "block text-[1.28rem] font-black tracking-[-0.08em] sm:text-[1.6rem]",
              wordmarkColor,
            )}
            style={{ fontFamily: "Montserrat, sans-serif", lineHeight: 0.9 }}
          >
            KANATO
          </span>
          <span
            className={cn(
              "absolute -top-1 right-0 text-[0.36rem] font-semibold tracking-[0.04em] sm:text-[0.42rem]",
              rcColor,
            )}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            RC 666713
          </span>
        </span>
        <span
          className={cn(
            "mt-1 text-[0.38rem] font-bold uppercase tracking-[-0.03em] sm:text-[0.46rem]",
            detailColor,
          )}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Engineering Resources Nig. Ltd.
        </span>
        <span
          className={cn(
            "mt-0.5 text-[0.38rem] font-bold uppercase tracking-[-0.03em] sm:text-[0.46rem]",
            detailColor,
          )}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Electrical, Mechanical & Civil
        </span>
      </span>
    </span>
  );
}



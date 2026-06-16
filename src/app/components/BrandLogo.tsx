import { cn } from "./ui/utils";
import { COMPANY } from "../../constants/company";

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
  const wordmarkColor = onDark ? "text-primary-light" : "text-primary";
  const detailColor = onDark ? "text-white/[0.88]" : "text-primary-dark";
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
              "kanato-logo-wordmark block text-[1.28rem] font-black tracking-[-0.08em] sm:text-[1.6rem] font-heading",
              wordmarkColor,
            )}
          >
            KANATO
          </span>
          <span
            className={cn(
              "absolute -top-1 right-0 text-[0.36rem] font-semibold tracking-[0.04em] sm:text-[0.42rem]",
              rcColor,
            )}
          >
            {COMPANY.rc}
          </span>
        </span>
        <span
          className={cn(
            "mt-1 text-[0.38rem] font-bold uppercase tracking-[-0.03em] sm:text-[0.46rem]",
            detailColor,
          )}
        >
          Engineering Resources Nig. Ltd.
        </span>
        <span
          className={cn(
            "mt-0.5 text-[0.38rem] font-bold uppercase tracking-[-0.03em] sm:text-[0.46rem]",
            detailColor,
          )}
        >
          Electrical, Mechanical &amp; Civil
        </span>
      </span>
    </span>
  );
}

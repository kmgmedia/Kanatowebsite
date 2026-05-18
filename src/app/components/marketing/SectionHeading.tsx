interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
        {eyebrow}
      </p>
      <h2
        className="text-secondary"
        style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)" }}
      >
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded bg-primary" />
    </div>
  );
}

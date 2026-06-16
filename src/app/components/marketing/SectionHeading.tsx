interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      <p className="kanato-primary-text mb-3 text-xs font-semibold uppercase tracking-widest">
        {eyebrow}
      </p>
      <h2 className="kanato-compact-section-title kanato-secondary-text">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded bg-primary" />
    </div>
  );
}

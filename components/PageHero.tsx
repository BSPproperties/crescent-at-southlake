type Props = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
};

export function PageHero({ title, subtitle, eyebrow }: Props) {
  return (
    <div className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        {eyebrow && <p className="section-label">{eyebrow}</p>}
        <h1 className="display-title mt-4 max-w-3xl text-5xl text-ink sm:text-6xl">{title}</h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

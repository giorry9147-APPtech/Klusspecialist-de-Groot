type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-navy py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

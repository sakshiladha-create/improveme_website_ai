import Link from "next/link";

export function PageHero({ eyebrow, title, copy, breadcrumbs = [], backgroundImage }) {
  return (
    <section
      className="relative overflow-hidden bg-[#0f172a] pb-16 pt-28 md:pb-20 md:pt-32"
      style={{
        backgroundImage: `url('${backgroundImage || "/overlay_image.webp"}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay absolute inset-0 z-0" />
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(0, 10, 40, 0.82) 0%, rgba(0, 10, 40, 0.55) 45%, rgba(0, 10, 40, 0.08) 100%)",
        }}
      />
      <div className="section-container relative z-10">
        {breadcrumbs.length ? (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-1">
                  {index > 0 ? <span className="mx-1 text-white/50">/</span> : null}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="font-semibold text-white">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="text-white/70 transition-colors hover:text-white">
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">{eyebrow}</p>
        <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight tracking-[-0.05em] text-white md:text-5xl">
          {title}
        </h1>
        {copy ? <p className="mt-4 max-w-2xl text-lg text-white/80">{copy}</p> : null}
      </div>
    </section>
  );
}

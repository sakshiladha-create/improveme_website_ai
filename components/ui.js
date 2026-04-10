import Link from "next/link";
import { MoveRight } from "lucide-react";
import { clsx } from "clsx";

export function SectionHeading({ eyebrow, title, copy, center = false }) {
  return (
    <div className={clsx("space-y-4", center && "text-center")}>
      {eyebrow ? <p className={clsx("eyebrow", center && "mx-auto")}>{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {copy ? (
        <p className={clsx("section-copy max-w-3xl", center && "mx-auto")}>{copy}</p>
      ) : null}
    </div>
  );
}

export function PrimaryButton({ href, children, className }) {
  return (
    <Link href={href} className={clsx("btn-primary", className)}>
      <span>{children}</span>
      <MoveRight className="h-4 w-4" />
    </Link>
  );
}

export function TextLink({ href, children, className }) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center gap-2 font-medium text-navy-900 transition-colors hover:text-yellow-500",
        className,
      )}
    >
      <span>{children}</span>
      <MoveRight className="h-4 w-4" />
    </Link>
  );
}

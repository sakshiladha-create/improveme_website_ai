import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import { getCourseIcon } from "@/data/site-data";

export function SubjectGradientCard({ course }) {
  const Icon = getCourseIcon(course.icon);

  return (
    <Link
      href={`/courses/${course.slug}`}
      className={clsx(
        "gradient-card flex min-h-28 flex-col justify-between bg-linear-to-br p-5",
        course.color,
      )}
    >
      <div className="flex items-start gap-3">
        <span className="rounded-xl bg-white/16 p-2.5">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="mb-0 font-display text-[1.15rem] font-bold tracking-[-0.03em] text-white">
            {course.title}
          </h3>
          <p className="mb-0 text-sm text-white/90">{course.short}</p>
        </div>
      </div>
    </Link>
  );
}

export function WhiteFeatureCard({ course }) {
  const Icon = getCourseIcon(course.icon);

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="white-card group flex min-h-40 flex-col justify-between p-5 transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="space-y-4">
        <span className="inline-flex rounded-xl bg-slate-50 p-3 text-navy-700 shadow-sm transition-colors group-hover:bg-slate-100">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="mb-2 font-display text-[1.18rem] font-bold tracking-[-0.03em] text-navy-900">
            {course.title}
          </h3>
          <p className="mb-0 text-[0.95rem] leading-7 text-slate-600">{course.short}</p>
        </div>
      </div>
    </Link>
  );
}

export function ApproachRow({ item }) {
  return (
    <div className="grid grid-cols-[72px_1fr] gap-6 border-b border-gray-200 px-6 py-8 last:border-b-0 md:grid-cols-[96px_1fr] md:px-10">
      <div className="font-display text-[3.2rem] font-bold leading-none tracking-[-0.06em] text-slate-200 md:text-[4rem]">
        {item.number}
      </div>
      <div>
        <h3 className="mb-2 text-[1.45rem] font-bold tracking-[-0.03em] text-navy-900">{item.title}</h3>
        <p className="mb-0 text-[1rem] leading-8 text-[#365080]">{item.copy}</p>
      </div>
    </div>
  );
}

export function TestimonialCard({ item }) {
  return (
    <article className="white-card flex h-full flex-col p-5">
      <div className="mb-4 text-yellow-400">★★★★★</div>
      <p className="mb-6 text-[1rem] italic leading-8 text-slate-600">{item.quote}</p>
      <div className="mt-auto border-t border-gray-100 pt-5">
        <h4 className="mb-1 text-base font-bold uppercase tracking-[-0.02em] text-navy-900">{item.name}</h4>
        <p className="mb-0 text-sm text-slate-500">{item.detail}</p>
      </div>
    </article>
  );
}

export function ContactMethod({ label, value, href }) {
  return (
    <a
      href={href}
      className="group flex flex-col items-center justify-center py-4 text-center lg:px-6 lg:py-0"
    >
      <span className="mb-1 text-base font-bold text-navy-900 transition-colors group-hover:text-yellow-500 lg:text-lg">
        {value}
      </span>
      <span className="text-xs uppercase tracking-[0.18em] text-navy-700">{label}</span>
    </a>
  );
}

export function TeacherCard({ teacher, index = 0 }) {
  return (
    <article
      className="white-card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
      style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.08}s both` }}
    >
      <div className="relative h-72 overflow-hidden bg-slate-100">
        <Image
          src={teacher.image}
          alt={teacher.name}
          fill
          sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-4 flex justify-start px-4">
          <span className="rounded-full bg-white/92 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-navy-900 shadow-sm uppercase">
            {teacher.experience}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-500">{teacher.role}</p>
        <h3 className="mb-2 font-display text-[1.45rem] font-bold tracking-[-0.03em] text-navy-900">
          {teacher.name}
        </h3>
        <p className="mb-0 text-[0.98rem] leading-7 text-slate-600">{teacher.bio}</p>
      </div>
    </article>
  );
}

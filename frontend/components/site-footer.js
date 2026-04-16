import Image from "next/image";
import Link from "next/link";
import { footerColumns, contactDetails } from "@/data/site-data";
import { SocialIcons } from "@/components/site-header";

export function SiteFooter() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="w-full px-4 py-10 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-6">
          <div className="space-y-3">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.webp"
                alt="Improve ME Institute tutoring centre Dubai logo"
                width={185}
                height={45}
                className="h-[45px] w-auto max-w-[185px] object-contain"
                sizes="185px"
              />
            </Link>
            <p className="text-sm text-white/60">Leading Tutoring Centre in Dubai</p>
            <SocialIcons />
            <Link
              href="/contact#booking-form"
              className="inline-flex rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-navy-900 transition-opacity hover:opacity-90"
            >
              Book Your Free Assessment
            </Link>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                {column.title}
              </h4>
              {column.groups ? (
                <div className="space-y-3">
                  {column.groups.map((group) => (
                    <div key={group.label}>
                      <p className="mb-1 text-[10px] uppercase tracking-[0.14em] text-white/30">{group.label}</p>
                      <ul className="space-y-1.5">
                        {group.links.map((link) => (
                          <li key={link.href}>
                            <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-yellow-400">
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-1.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-yellow-400">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/50">Contact</h4>
            <p className="text-sm leading-relaxed text-white/60">
              {contactDetails.addressLines[0]}
              <br />
              {contactDetails.addressLines[1]}
            </p>
            <ul className="mt-2 space-y-0.5">
              {contactDetails.phones.map((phone) => (
                <li key={phone.value}>
                  <a href={`tel:${phone.value}`} className="text-sm text-white/60 transition-colors hover:text-yellow-400">
                    {phone.label}: {phone.value.replace("+971", "+971 ")}
                  </a>
                </li>
              ))}
              <li>
                <a href={`tel:${contactDetails.landline.replace(/\s/g, "")}`} className="text-sm text-white/60 transition-colors hover:text-yellow-400">
                  Landline: {contactDetails.landline}
                </a>
              </li>
            </ul>
            <a href={`mailto:${contactDetails.email}`} className="mt-2 inline-block text-sm text-white/60 transition-colors hover:text-yellow-400">
              {contactDetails.email}
            </a>
            <p className="mt-2 text-xs text-white/40">{contactDetails.hours}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 py-3 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>Improve ME Institute 2026. All Rights Reserved.</p>
          <p>Operates under RAK Free Zone licence</p>
        </div>
      </div>
    </footer>
  );
}

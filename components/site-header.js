"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { contactDetails, megaMenus, navigation } from "@/data/site-data";
import { clsx } from "clsx";

function MegaPanel({ menuKey }) {
  const sections = megaMenus[menuKey];

  return (
    <div className="mega-panel absolute left-1/2 top-full z-50 mt-3 w-[920px] -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-10 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
      <div className="grid grid-cols-3 gap-16">
        {sections.map((section) => (
          <div key={section.title} className="space-y-6">
            <h4 className="text-[12px] font-bold uppercase tracking-[0.15em] text-slate-700">
              {section.title}
            </h4>
            {section.description ? (
              <p className="text-sm leading-6 text-slate-600">{section.description}</p>
            ) : null}
            {section.groups ? (
              <div className="space-y-5">
                {section.groups.map((group) => (
                  <div key={group.label} className="space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                      {group.label}
                    </p>
                    <ul className="space-y-2.5">
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="text-sm text-slate-700 transition-colors hover:text-yellow-500"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.href} className="group">
                    <Link
                      href={link.href}
                      className="block text-sm font-medium text-slate-900 transition-colors group-hover:text-yellow-500"
                    >
                      {link.label}
                    </Link>
                    {link.description && (
                      <p className="mt-1 text-xs text-slate-500">{link.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-[#002D62]">
        <div className="section-container hidden items-center justify-between gap-4 py-2 text-white md:flex">
          <Link href="/contact#map" className="flex items-center gap-2 transition-opacity hover:opacity-90">
            <MapPin className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium">{contactDetails.location}</span>
          </Link>
          <div className="flex items-center gap-4">
            {contactDetails.phones.map((phone, index) => (
              <div key={phone.value} className="flex items-center gap-2">
                {index > 0 ? <span className="text-white/50">|</span> : null}
                <a href={`tel:${phone.value}`} className="text-sm font-medium transition-colors hover:text-yellow-400">
                  {phone.detail}
                </a>
                <a
                  href={`https://wa.me/${phone.value.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-500 transition-colors hover:bg-green-600"
                  aria-label={`Chat with ${phone.label}`}
                >
                  <Phone className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <nav className="border-b border-gray-200 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        <div className="section-container">
          <div className="relative flex h-16 items-center justify-between">
            <Link href="/" className="transition-transform hover:scale-[1.03]" aria-label="Improve ME Institute Home">
              <Image
                src="/logo.png"
                alt="Improve ME Institute"
                width={185}
                height={45}
                className="h-9 w-auto"
                unoptimized
              />
            </Link>

            <div className="hidden items-center gap-0.5 lg:flex">
              {navigation.map((item) => (
                <div key={item.label} className={clsx("relative", item.menu && "mega-root")}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 rounded-md px-4 py-3 text-sm font-medium text-navy-900 transition-colors hover:text-yellow-500"
                  >
                    <span>{item.label}</span>
                    {item.menu ? <ChevronDown className="h-4 w-4" /> : null}
                  </Link>
                  {item.menu ? <MegaPanel menuKey={item.menu} /> : null}
                </div>
              ))}
            </div>

            <div className="hidden lg:block">
              <Link
                href="/contact#booking-form"
                className="inline-flex items-center justify-center rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-bold text-black transition-all hover:opacity-95 hover:shadow-md"
              >
                Book Free Assessment
              </Link>
            </div>

            <button
              type="button"
              className="rounded-lg p-2 text-navy-900 transition-colors hover:bg-gray-100 lg:hidden"
              aria-label="Toggle menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open ? (
            <div className="border-t border-gray-200 py-4 lg:hidden">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-gray-200 p-4">
                    <Link
                      href={item.href}
                      className="block text-base font-semibold text-navy-900"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.menu ? (
                      <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        {megaMenus[item.menu].map((section) => (
                          <div key={section.title} className="space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                              {section.title}
                            </p>
                            {section.groups ? (
                              section.groups.map((group) => (
                                <div key={group.label}>
                                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                                    {group.label}
                                  </p>
                                  <div className="space-y-1.5">
                                    {group.links.map((link) => (
                                      <Link
                                        key={link.href}
                                        href={link.href}
                                        className="block text-sm text-slate-600"
                                        onClick={() => setOpen(false)}
                                      >
                                        {link.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))
                            ) : (
                              <div className="space-y-1.5">
                                {section.links.map((link) => (
                                  <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block text-sm text-slate-600"
                                    onClick={() => setOpen(false)}
                                  >
                                    {link.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
}

export function SocialIcons() {
  return (
    <div className="flex gap-2">
      <Link
        href="https://www.instagram.com/improvemedxb"
        target="_blank"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:text-yellow-400"
      >
        <span className="text-sm font-semibold">IG</span>
      </Link>
      <Link
        href="https://www.facebook.com/improvemeinstitute"
        target="_blank"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:text-yellow-400"
      >
        <span className="text-sm font-semibold">f</span>
      </Link>
    </div>
  );
}

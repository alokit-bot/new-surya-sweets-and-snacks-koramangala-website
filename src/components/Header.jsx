import { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X, Flame } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_BASE } from "../data";

const LINKS = [
  { label: "Home", href: "#home", testid: "nav-link-home" },
  { label: "About", href: "#about", testid: "nav-link-about" },
  { label: "Sweets", href: "#sweets", testid: "nav-link-menu" },
  { label: "Snacks & Chaats", href: "#snacks", testid: "nav-link-snacks" },
  { label: "Gift Boxes", href: "#gifts", testid: "nav-link-gifts" },
  { label: "Reviews", href: "#reviews", testid: "nav-link-reviews" },
  { label: "Contact", href: "#contact", testid: "nav-link-contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="nav-container"
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-[#FFFDF7]/90 backdrop-blur-xl shadow-[0_4px_24px_rgba(131,24,67,0.08)]"
          : "bg-[#FFFDF7]/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" data-testid="brand-logo" className="flex items-center gap-2.5">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-700 shadow-md shadow-amber-600/30">
            <Flame className="h-5 w-5 text-amber-50" strokeWidth={2.2} />
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-lg font-bold text-amber-950">
              New Surya
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#831843]">
              Sweets &amp; Snacks
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={l.testid}
              className="text-sm font-semibold text-stone-700 transition-colors duration-200 hover:text-[#B45309]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="whatsapp-cta-header"
            className="flex items-center gap-2 rounded-full border border-emerald-700/30 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 transition-colors duration-200 hover:bg-emerald-100"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={PHONE_TEL}
            data-testid="call-cta-header"
            className="flex items-center gap-2 rounded-full bg-[#831843] px-5 py-2 text-sm font-semibold text-amber-50 shadow-md shadow-[#831843]/25 transition-transform duration-200 hover:scale-[1.03] hover:bg-[#6d1238]"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-200 bg-white text-amber-900 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-amber-100 bg-[#FFFDF7]/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-stone-700 transition-colors duration-200 hover:bg-amber-50 hover:text-[#B45309]"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 flex gap-2.5">
              <a
                href={PHONE_TEL}
                data-testid="call-cta-header-mobile"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#831843] px-4 py-3 text-sm font-semibold text-amber-50"
              >
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-emerald-700/30 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

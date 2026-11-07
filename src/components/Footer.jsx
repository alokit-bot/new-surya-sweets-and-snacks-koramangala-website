import { Flame, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import {
  ADDRESS,
  HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_BASE,
} from "../data";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Sweets", href: "#sweets" },
  { label: "Snacks & Chaats", href: "#snacks" },
  { label: "Gift Boxes", href: "#gifts" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => (
  <footer data-testid="footer-container" className="bg-amber-950 py-14 text-amber-100/80">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-600">
              <Flame className="h-5 w-5 text-amber-50" />
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-lg font-bold text-amber-50">New Surya</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-400">
                Sweets &amp; Snacks
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Authentic Indian mithai, crisp savories &amp; fresh chaats in
            Koramangala — made with pure desi ghee, fresh every day.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
            Quick Links
          </h3>
          <ul className="mt-5 grid grid-cols-2 gap-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium transition-colors duration-200 hover:text-amber-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
            Reach Us
          </h3>
          <p data-testid="footer-address" className="flex items-start gap-2.5 text-sm leading-relaxed">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
            {ADDRESS}
          </p>
          <a
            href={PHONE_TEL}
            data-testid="footer-phone"
            className="flex items-center gap-2.5 text-sm font-semibold text-amber-100 transition-colors duration-200 hover:text-amber-300"
          >
            <Phone className="h-4 w-4 text-amber-400" /> {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_BASE}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-whatsapp"
            className="flex items-center gap-2.5 text-sm font-semibold text-amber-100 transition-colors duration-200 hover:text-amber-300"
          >
            <MessageCircle className="h-4 w-4 text-amber-400" /> WhatsApp Orders
          </a>
          <p className="flex items-center gap-2.5 text-sm">
            <Clock className="h-4 w-4 text-amber-400" /> {HOURS}
          </p>
        </div>
      </div>

      <div className="mt-12 border-t border-amber-100/10 pt-7 text-center text-xs text-amber-100/50">
        © 2026 New Surya Sweets and Snacks. All rights reserved.
      </div>
    </div>
  </footer>
);

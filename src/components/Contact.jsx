import { useState } from "react";
import { MapPin, Phone, MessageCircle, Clock, Navigation, Send } from "lucide-react";
import { toast } from "sonner";
import {
  ADDRESS,
  HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_BASE,
  MAPS_LINK,
} from "../data";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", event: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for your inquiry! Our team will contact you shortly.", {
      data: { "data-testid": "inquiry-success-toast" },
    });
    setForm({ name: "", phone: "", event: "", message: "" });
  };

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  return (
    <section id="contact" data-testid="contact-section" className="py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B45309]">
            Visit or Order
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-amber-950 sm:text-4xl">
            Find Us in Maruthi Nagar, Koramangala
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            <div data-testid="store-address-info" className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100">
                  <MapPin className="h-5 w-5 text-[#B45309]" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-amber-950">Store Address</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-600">{ADDRESS}</p>
                  <p className="mt-1.5 text-xs font-semibold text-stone-500">
                    Landmark: Near Apollo Pharmacy, Maruthi Nagar Main Road
                  </p>
                </div>
              </div>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="google-maps-link"
                className="mt-5 flex items-center justify-center gap-2 rounded-full border-2 border-amber-700/50 py-2.5 text-sm font-bold text-amber-900 transition-colors duration-200 hover:bg-amber-50"
              >
                <Navigation className="h-4 w-4" />
                Get Directions on Google Maps
              </a>
            </div>

            <div data-testid="store-timings-info" className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100">
                  <Clock className="h-5 w-5 text-[#B45309]" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-amber-950">Timings</h3>
                  <p className="mt-1.5 text-sm text-stone-600">{HOURS}</p>
                  <p className="mt-1 text-xs font-semibold text-emerald-700">
                    Live Chaat Counter: 4:00 PM – 10:00 PM
                  </p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                <a
                  href={PHONE_TEL}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#831843] py-2.5 text-sm font-bold text-amber-50 transition-transform duration-200 hover:scale-[1.03]"
                >
                  <Phone className="h-4 w-4" /> Call
                </a>
                <a
                  href={WHATSAPP_BASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-emerald-600 py-2.5 text-sm font-bold text-emerald-50 transition-transform duration-200 hover:scale-[1.03]"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
              <p className="mt-3 text-center text-xs font-semibold text-stone-500">
                {PHONE_DISPLAY}
              </p>
            </div>
          </div>

          <form
            data-testid="inquiry-form"
            onSubmit={handleSubmit}
            className="rounded-3xl border border-amber-100 bg-white p-7 shadow-sm sm:p-9 lg:col-span-3"
          >
            <h3 className="font-serif text-2xl font-bold text-amber-950">
              Quick Inquiry / Order Request
            </h3>
            <p className="mt-2 text-sm text-stone-600">
              Planning a festival order, bulk sweets, or a chaat party? Drop your
              details and we'll call you back.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="inq-name" className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Your Name
                </label>
                <input
                  id="inq-name"
                  data-testid="inquiry-input-name"
                  required
                  value={form.name}
                  onChange={set("name")}
                  placeholder="e.g. Priya Sharma"
                  className="mt-2 w-full rounded-xl border border-amber-200 bg-[#FFFDF7] px-4 py-3 text-sm text-stone-800 outline-none transition-colors duration-200 placeholder:text-stone-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                />
              </div>
              <div>
                <label htmlFor="inq-phone" className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Phone Number
                </label>
                <input
                  id="inq-phone"
                  data-testid="inquiry-input-phone"
                  required
                  type="tel"
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="+91 ..."
                  className="mt-2 w-full rounded-xl border border-amber-200 bg-[#FFFDF7] px-4 py-3 text-sm text-stone-800 outline-none transition-colors duration-200 placeholder:text-stone-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="inq-event" className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Occasion / Order Type
              </label>
              <input
                id="inq-event"
                data-testid="inquiry-input-event"
                value={form.event}
                onChange={set("event")}
                placeholder="e.g. Diwali gift boxes, wedding sweets, bulk samosa order"
                className="mt-2 w-full rounded-xl border border-amber-200 bg-[#FFFDF7] px-4 py-3 text-sm text-stone-800 outline-none transition-colors duration-200 placeholder:text-stone-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              />
            </div>

            <div className="mt-5">
              <label htmlFor="inq-msg" className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Message
              </label>
              <textarea
                id="inq-msg"
                data-testid="inquiry-input-message"
                required
                rows={4}
                value={form.message}
                onChange={set("message")}
                placeholder="Tell us what you'd like, quantities, and your preferred date..."
                className="mt-2 w-full resize-none rounded-xl border border-amber-200 bg-[#FFFDF7] px-4 py-3 text-sm text-stone-800 outline-none transition-colors duration-200 placeholder:text-stone-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              />
            </div>

            <button
              type="submit"
              data-testid="inquiry-submit-button"
              className="mt-7 flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 py-3.5 text-sm font-bold text-amber-50 shadow-lg shadow-amber-700/25 transition-transform duration-200 hover:scale-[1.02] sm:w-auto sm:px-10"
            >
              <Send className="h-4 w-4" />
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

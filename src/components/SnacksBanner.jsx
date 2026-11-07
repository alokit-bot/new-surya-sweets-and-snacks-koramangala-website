import { Clock, Flame, MessageCircle } from "lucide-react";
import { IMAGES, waOrderLink } from "../data";

export const SnacksBanner = () => (
  <section id="snacks" data-testid="savories-section" className="py-20 sm:py-24 lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2.5rem] bg-[#065F46] shadow-2xl shadow-emerald-900/20">
        <div className="grid items-center lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-800/60 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-100">
              <Flame className="h-3.5 w-3.5" />
              Hot Savories, Farsan &amp; Evening Chaats
            </span>
            <h2 className="mt-6 font-serif text-3xl font-bold leading-tight text-emerald-50 sm:text-4xl">
              The Evening Counter Everyone Queues For
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-emerald-100/85">
              Golden khasta samosas at ₹40, flaky dal &amp; pyaaz kachoris at
              ₹35, spongy khaman dhokla at ₹60 a plate — and from 4 PM, our live
              chaat corner fires up Pani Puri, Sev Puri, Dahi Papdi and Bhel
              Puri starting at just ₹50.
            </p>
            <div className="mt-7 flex items-center gap-2.5 text-sm font-semibold text-emerald-100">
              <Clock className="h-4 w-4 text-amber-400" />
              Live Chaat Corner: 4:00 PM – 10:00 PM, every day
            </div>
            <a
              href={waOrderLink("Evening Snacks & Chaat")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-bold text-emerald-950 shadow-lg shadow-amber-900/30 transition-transform duration-200 hover:scale-[1.04] hover:bg-amber-400"
            >
              <MessageCircle className="h-4 w-4" />
              Order Snacks on WhatsApp
            </a>
          </div>
          <div className="relative h-72 lg:h-full lg:min-h-[480px]">
            <img
              src={IMAGES.chaat}
              alt="Fresh Indian chaat and evening snacks"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#065F46] via-transparent to-transparent hidden lg:block" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

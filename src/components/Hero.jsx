import { Star, Phone, ChevronRight, Flame, Sparkles, BadgeCheck } from "lucide-react";
import { PHONE_TEL, IMAGES } from "../data";

const BADGES = [
  { icon: Star, label: "4.1★ on Google Maps (2,800+ Reviews)", testid: "hero-badge-rating" },
  { icon: Flame, label: "100% Pure Desi Ghee", testid: "hero-badge-quality" },
  { icon: Sparkles, label: "Fresh Daily Batches", testid: "hero-badge-reviews" },
  { icon: BadgeCheck, label: "Festival & Bulk Orders", testid: "hero-badge-bulk" },
];

export const Hero = () => (
  <section
    id="home"
    data-testid="hero-section"
    className="texture-grain relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
  >
    <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-amber-200/40 blur-3xl" />
    <div className="pointer-events-none absolute top-40 -left-32 h-80 w-80 rounded-full bg-[#831843]/10 blur-3xl" />

    <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
      <div className="reveal">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-900">
          <Star className="h-3.5 w-3.5 fill-amber-600 text-amber-600" />
          Koramangala's Beloved Mithai House
        </span>

        <h1
          data-testid="hero-headline"
          className="mt-6 font-serif text-4xl font-bold leading-[1.08] tracking-tight text-amber-950 sm:text-5xl lg:text-6xl"
        >
          Pure Ghee Delights &amp;{" "}
          <span className="relative inline-block text-[#B45309]">
            Irresistible Savories
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 9C60 3 150 2 298 8"
                stroke="#D97706"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          Made Fresh Daily.
        </h1>

        <p
          data-testid="hero-subheading"
          className="mt-7 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg"
        >
          Serving the Koramangala &amp; Maruthi Nagar community with over 2,800+
          4.1★ reviews. From rich Kaju Katli and melt-in-mouth Rasgullas to
          piping hot evening Samosas and tangy Chaats — taste authentic Indian
          tradition in every bite.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3.5">
          <a
            href={PHONE_TEL}
            data-testid="hero-call-button"
            className="group flex items-center gap-2.5 rounded-full bg-[#831843] px-7 py-3.5 text-sm font-bold text-amber-50 shadow-lg shadow-[#831843]/30 transition-transform duration-200 hover:scale-[1.04] hover:bg-[#6d1238]"
          >
            <Phone className="h-4.5 w-4.5" />
            Order / Call Us
          </a>
          <a
            href="#sweets"
            data-testid="hero-menu-button"
            className="group flex items-center gap-2 rounded-full border-2 border-amber-700/60 bg-white/70 px-7 py-3.5 text-sm font-bold text-amber-900 backdrop-blur transition-colors duration-200 hover:border-amber-700 hover:bg-amber-50"
          >
            Explore Menu &amp; Sweets
            <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {BADGES.map(({ icon: Icon, label, testid }) => (
            <span
              key={testid}
              data-testid={testid}
              className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-stone-700 shadow-sm"
            >
              <Icon className="h-3.5 w-3.5 text-[#B45309]" />
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="reveal relative" style={{ animationDelay: "0.15s" }}>
        <div className="absolute -inset-4 -z-10 rotate-2 rounded-[2rem] bg-gradient-to-br from-amber-200/60 to-[#831843]/10" />
        <img
          src={IMAGES.hero}
          alt="Festive assortment of Indian mithai at New Surya Sweets"
          className="h-[320px] w-full rounded-[2rem] object-cover shadow-2xl shadow-amber-900/20 sm:h-[420px] lg:h-[520px]"
          loading="eager"
        />
        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/40 bg-white/80 px-5 py-4 backdrop-blur-xl">
          <div>
            <p className="font-serif text-lg font-bold text-amber-950">
              Fresh from the kadhai
            </p>
            <p className="text-xs font-medium text-stone-600">
              New batches every morning &amp; evening
            </p>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-[#065F46] px-3 py-1.5 text-xs font-bold text-emerald-50">
            <Star className="h-3.5 w-3.5 fill-emerald-50" /> 4.1
          </span>
        </div>
      </div>
    </div>
  </section>
);

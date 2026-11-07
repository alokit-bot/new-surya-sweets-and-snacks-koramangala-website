import { Flame, Sparkles, BadgeCheck, Check } from "lucide-react";
import { IMAGES } from "../data";

const CRAFT_POINTS = [
  "Time-honoured recipes, premium milk, rich saffron & pure desi ghee",
  "Fresh morning and evening batches — never stored, never stale",
  "Bengali mithai, North Indian classics & Karnataka royal sweets",
  "A welcoming counter for families, evening snack lovers & festive shoppers",
];

export const About = () => (
  <section id="about" data-testid="about-section" className="py-20 sm:py-24 lg:py-28">
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
      <div className="relative order-2 lg:order-1">
        <img
          src={IMAGES.counter}
          alt="The sweet and snacks counter at New Surya Sweets"
          className="h-[320px] w-full rounded-[2rem] object-cover shadow-xl shadow-amber-900/15 sm:h-[440px]"
          loading="lazy"
        />
        <div className="absolute -bottom-6 -right-3 rounded-2xl border border-amber-200 bg-white px-6 py-5 shadow-xl shadow-amber-900/10 sm:-right-6">
          <p className="font-serif text-2xl font-bold text-[#831843]">Since the heart</p>
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            of Maruthi Nagar Main Road
          </p>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B45309]">
          Our Story &amp; Craft
        </span>
        <h2
          data-testid="story-heading"
          className="mt-4 font-serif text-3xl font-bold text-amber-950 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
        >
          A Cherished Landmark on Maruthi Nagar Main Road
        </h2>
        <p className="mt-6 text-base leading-relaxed text-stone-600">
          New Surya Sweets and Snacks has been the neighbourhood's sweet spot —
          where the aroma of desi ghee greets you before the door does. Every
          ladle of ladoo, every sheet of Kaju Katli, and every evening samosa is
          made the way tradition intended: slowly, honestly, and fresh.
        </p>

        <ul className="mt-8 space-y-4">
          {CRAFT_POINTS.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                <Check className="h-3.5 w-3.5 text-[#065F46]" strokeWidth={3} />
              </span>
              <span className="text-sm font-medium leading-relaxed text-stone-700">
                {point}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-wrap gap-2.5">
          <span data-testid="craft-badge-ghee" className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-4 py-2 text-xs font-bold text-amber-900">
            <Flame className="h-3.5 w-3.5" /> 100% Pure Desi Ghee
          </span>
          <span data-testid="craft-badge-freshness" className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-4 py-2 text-xs font-bold text-amber-900">
            <Sparkles className="h-3.5 w-3.5" /> Zero Preservatives
          </span>
          <span data-testid="craft-badge-hygiene" className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-4 py-2 text-xs font-bold text-amber-900">
            <BadgeCheck className="h-3.5 w-3.5" /> Hygiene First
          </span>
        </div>
      </div>
    </div>
  </section>
);

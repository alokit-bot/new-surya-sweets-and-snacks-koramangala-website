import { Gift, MessageCircle, ArrowRight } from "lucide-react";
import { IMAGES, waOrderLink, WHATSAPP_BASE } from "../data";

export const Gifting = () => (
  <section id="gifts" data-testid="gifting-section" className="py-20 sm:py-24 lg:py-28">
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
      <div>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B45309]">
          Festive Gifting
        </span>
        <h2 className="mt-4 font-serif text-3xl font-bold text-amber-950 sm:text-4xl">
          Gift Boxes &amp; Corporate Hampers That Delight
        </h2>
        <p className="mt-5 text-base leading-relaxed text-stone-600">
          Weddings, Diwali, Rakhi, or office celebrations — our mithai hampers
          arrive beautifully packed and unmistakably fresh. Custom branding and
          bulk pricing available for corporate orders across Bengaluru.
        </p>

        <ul className="mt-8 space-y-5">
          <li data-testid="gift-card-silver" className="flex items-start gap-4 rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100">
              <Gift className="h-5 w-5 text-[#B45309]" />
            </span>
            <div>
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-serif text-lg font-bold text-amber-950">Silver Celebration Box</h3>
                <span className="font-serif text-base font-bold text-[#B45309]">₹550</span>
              </div>
              <p className="mt-1 text-sm text-stone-600">Assorted ghee sweets &amp; dry fruits (500g).</p>
            </div>
          </li>
          <li data-testid="gift-card-royal" className="flex items-start gap-4 rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100">
              <Gift className="h-5 w-5 text-[#B45309]" />
            </span>
            <div>
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-serif text-lg font-bold text-amber-950">Royal Mithai Collection</h3>
                <span className="font-serif text-base font-bold text-[#B45309]">₹1,050</span>
              </div>
              <p className="mt-1 text-sm text-stone-600">Kaju Katli, Dry Fruit Barfi &amp; Motichoor Ladoo (1kg).</p>
            </div>
          </li>
          <li data-testid="gift-card-corporate" className="flex items-start gap-4 rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100">
              <Gift className="h-5 w-5 text-[#B45309]" />
            </span>
            <div>
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-serif text-lg font-bold text-amber-950">Custom Corporate Gift Packs</h3>
                <span className="font-serif text-base font-bold text-[#B45309]">Custom Quote</span>
              </div>
              <p className="mt-1 text-sm text-stone-600">Customizable sweet &amp; savory boxes with branding options.</p>
            </div>
          </li>
        </ul>

        <a
          href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Hello New Surya Sweets! I'd like a quote for a corporate / bulk gift order.")}`}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="corporate-inquiry-button"
          className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#831843] px-7 py-3.5 text-sm font-bold text-amber-50 shadow-lg shadow-[#831843]/25 transition-transform duration-200 hover:scale-[1.04]"
        >
          <MessageCircle className="h-4 w-4" />
          Get a Bulk Order Quote
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <img
          src={IMAGES.giftSilver}
          alt="Silver celebration mithai gift box"
          loading="lazy"
          className="h-64 w-full rounded-3xl object-cover shadow-lg shadow-amber-900/10 sm:h-80"
        />
        <img
          src={IMAGES.giftRoyal}
          alt="Royal festive mithai hamper"
          loading="lazy"
          className="mt-10 h-64 w-full rounded-3xl object-cover shadow-lg shadow-amber-900/10 sm:h-80"
        />
      </div>
    </div>
  </section>
);

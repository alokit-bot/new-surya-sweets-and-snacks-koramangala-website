import { useState } from "react";
import { MessageCircle, Clock } from "lucide-react";
import { MENU_ITEMS, waOrderLink } from "../data";

const FILTERS = [
  { key: "All", testid: "filter-tab-all" },
  { key: "Sweets", testid: "filter-tab-sweets" },
  { key: "Savories", testid: "filter-tab-savories" },
  { key: "Chaats", testid: "filter-tab-chaats" },
  { key: "Gift Boxes", testid: "filter-tab-giftboxes" },
];

const ItemCard = ({ item, index }) => (
  <article
    data-testid="menu-item-card"
    className="group reveal flex flex-col overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-900/10"
    style={{ animationDelay: `${Math.min(index * 0.06, 0.4)}s` }}
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute left-3.5 top-3.5 rounded-full bg-[#831843]/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-amber-50 backdrop-blur">
        {item.badge}
      </span>
      {item.category === "Chaats" && (
        <span className="absolute right-3.5 top-3.5 flex items-center gap-1 rounded-full bg-emerald-700/90 px-3 py-1 text-[11px] font-bold text-emerald-50 backdrop-blur">
          <Clock className="h-3 w-3" /> Live Counter
        </span>
      )}
    </div>

    <div className="flex flex-1 flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-lg font-bold leading-snug text-amber-950">
          {item.name}
        </h3>
        <p className="shrink-0 text-right">
          <span className="font-serif text-lg font-bold text-[#B45309]">
            {item.price}
          </span>
          {item.unit && (
            <span className="block text-[11px] font-semibold text-stone-500">
              {item.unit}
            </span>
          )}
        </p>
      </div>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-stone-600">
        {item.desc}
      </p>
      <a
        href={waOrderLink(item.name)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex items-center justify-center gap-2 rounded-full border border-emerald-700/30 bg-emerald-50 py-2.5 text-sm font-bold text-emerald-800 transition-colors duration-200 hover:bg-emerald-600 hover:text-emerald-50"
      >
        <MessageCircle className="h-4 w-4" />
        Order on WhatsApp
      </a>
    </div>
  </article>
);

export const Menu = () => {
  const [active, setActive] = useState("All");
  const items =
    active === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((i) => i.category === active);

  return (
    <section
      id="sweets"
      data-testid="menu-section"
      className="bg-[#FBF5E8] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B45309]">
            Signature Collection
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-amber-950 sm:text-4xl">
            Sweets, Savories, Chaats &amp; Gift Boxes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Over 50 handcrafted varieties made fresh daily — pick your
            favourites and order straight on WhatsApp.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap gap-2.5">
          {FILTERS.map(({ key, testid }) => (
            <button
              key={key}
              data-testid={testid}
              onClick={() => setActive(key)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors duration-200 ${
                active === key
                  ? "bg-[#831843] text-amber-50 shadow-md shadow-[#831843]/25"
                  : "border border-amber-200 bg-white text-stone-600 hover:border-amber-400 hover:text-amber-900"
              }`}
            >
              {key}
            </button>
          ))}
        </div>

        <div
          data-testid="menu-grid"
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, i) => (
            <ItemCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

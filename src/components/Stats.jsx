import { Star, Users, Sparkles, BadgeCheck } from "lucide-react";

const STATS = [
  { icon: Users, value: "2,800+", label: "Happy Customers & Reviews", testid: "stat-reviews" },
  { icon: Star, value: "4.1★", label: "Google Rating", testid: "stat-rating" },
  { icon: Sparkles, value: "50+", label: "Handcrafted Mithai & Farsan Varieties", testid: "stat-varieties" },
  { icon: BadgeCheck, value: "100%", label: "Quality & Hygiene Assured", testid: "stat-quality" },
];

export const Stats = () => (
  <section data-testid="stats-banner" className="bg-[#831843] py-12 sm:py-14">
    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
      {STATS.map(({ icon: Icon, value, label, testid }) => (
        <div key={testid} data-testid={testid} className="text-center lg:text-left">
          <Icon className="mx-auto h-6 w-6 text-amber-400 lg:mx-0" />
          <p className="mt-3 font-serif text-3xl font-bold text-amber-50 sm:text-4xl">
            {value}
          </p>
          <p className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-amber-200/80">
            {label}
          </p>
        </div>
      ))}
    </div>
  </section>
);

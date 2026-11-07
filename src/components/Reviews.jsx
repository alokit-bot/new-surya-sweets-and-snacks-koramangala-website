import { Star, Quote } from "lucide-react";
import { REVIEWS } from "../data";

export const Reviews = () => (
  <section
    id="reviews"
    data-testid="reviews-section"
    className="texture-grain bg-[#FBF5E8] py-20 sm:py-24 lg:py-28"
  >
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B45309]">
            Customer Love
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-amber-950 sm:text-4xl">
            What Koramangala Says About Us
          </h2>
        </div>
        <div
          data-testid="google-rating-header"
          className="flex items-center gap-4 rounded-2xl border border-amber-200 bg-white px-6 py-4 shadow-sm"
        >
          <span className="font-serif text-4xl font-bold text-amber-950">4.1</span>
          <div>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
              ))}
              <Star className="h-4 w-4 fill-amber-200 text-amber-200" />
            </div>
            <p className="mt-1 text-xs font-semibold text-stone-500">
              Google Maps · 2,800+ reviews
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <figure
            key={r.name}
            data-testid="testimonial-card"
            className="reveal relative flex flex-col rounded-3xl border border-amber-100 bg-white p-7 shadow-sm"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <Quote className="h-7 w-7 text-amber-300" />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-stone-700">
              "{r.text}"
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-between border-t border-amber-100 pt-5">
              <span className="font-serif text-base font-bold text-amber-950">
                {r.name}
              </span>
              <span className="flex gap-0.5">
                {Array.from({ length: r.stars }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                ))}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

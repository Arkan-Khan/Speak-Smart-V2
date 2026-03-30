/**
 * ProductCards.tsx
 *
 * 4 product offerings in a 2×2 grid (desktop) / single column (mobile).
 * Images are 1920×1080 widescreen. Overlay is a tight frosted rectangle
 * positioned at the right-center of the card — only wraps the text + CTA,
 * does not cover the image background.
 *
 * Config dependency: src/config/productsConfig.ts
 */

import { products } from "@/config/productsConfig";

const ProductCards = () => {
  return (
    <section className="px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative rounded-2xl overflow-hidden aspect-video shadow-lg border border-white/5"
            >
              {/* Full card image */}
              <img
                src={product.image}
                alt={product.englishTitle}
                className="w-full h-full object-cover"
              />

              {/* Tight rectangle — only behind text + CTA, right-center */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 bg-black/70 backdrop-blur-md border border-white/10 px-5 py-4 rounded-2xl text-center w-[42%]">
                <p className="text-white font-bold text-sm md:text-base leading-snug">
                  {product.marathiTitle}
                </p>
                <p className="text-gray-300 text-[11px] md:text-xs leading-snug">
                  {product.englishTitle}
                </p>
                <a
                  href={product.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-4 py-1.5 rounded-lg transition-colors shadow"
                >
                  View Course
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;

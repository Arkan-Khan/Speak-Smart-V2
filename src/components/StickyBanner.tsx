/**
 * StickyBanner.tsx
 *
 * Full-width banner (1600×400) displayed just above the Footer.
 * Image fills the container width at its natural aspect ratio.
 */

const StickyBanner = () => {
  return (
    <div className="w-full">
      <img
        src="/footer-banner.jpg"
        alt="Speak Smart Banner"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default StickyBanner;

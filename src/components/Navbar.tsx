/**
 * Navbar.tsx
 *
 * Site navigation bar rendered at the very top of the page.
 *
 * Features:
 * - Speak Smart logo (sourced from /public/logo.png)
 * - "Book a Free Demo" CTA button that opens Gmail compose
 *   with the recipient email pre-filled
 *
 * No props required — fully self-contained.
 */

import { Button } from "@/components/ui/button";

const Navbar = () => {
  const handleBookDemo = () => {
    window.location.href =
      "mailto:speakenglishwithreshmad@gmail.com?subject=Book%20a%20Free%20Demo";
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
      {/* Logo */}
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
          <img
            src="/logo.png"
            alt="Speak Smart Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* CTA */}
      <Button
        className="bg-orange-500 hover:bg-orange-600 text-white px-4 md:px-6 py-2 rounded-lg text-sm md:text-base font-semibold"
        onClick={handleBookDemo}
      >
        Book a Free Demo
      </Button>
    </header>
  );
};

export default Navbar;

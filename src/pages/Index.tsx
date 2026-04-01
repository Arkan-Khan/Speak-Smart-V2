import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProductCards from "@/components/ProductCards";
import CoursePointsAndVision from "@/components/CoursePointsAndVision";
import WhySpeakSmart from "@/components/WhySpeakSmart";
import AsSeenIn from "@/components/AsSeenIn";
import CourseHighlights from "@/components/CourseHighlights";
import FounderSection from "@/components/FounderSection";
import TestimonialSection from "@/components/TestimonialSection";
// import StickyBanner from "@/components/StickyBanner";
import Footer from "@/components/Footer";

const NotificationBar = () => (
  <div className="w-full overflow-hidden bg-[#fdb602] py-2.5 border-t-2 border-b-2 border-black">
    <div
      className="inline-block whitespace-nowrap text-black text-lg font-bold"
      style={{ paddingLeft: "100%", animation: "scroll-left 12s linear infinite" }}
    >
      On a mission to help 100,000 students from rural areas speak English confidently and fluently.
    </div>
    <style>{`
      @keyframes scroll-left {
        0%   { transform: translateX(0%); }
        100% { transform: translateX(-100%); }
      }
    `}</style>
  </div>
);

// Subtle section divider — keeps bg-black uniform while marking boundaries
const Divider = () => (
  <div className="max-w-6xl mx-auto px-6">
    <div className="border-t border-white/[0.06]" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* ── 1. Navbar ─────────────────────────────────────────── */}
      <Navbar />

      {/* ── 2. Running Banner ─────────────────────────────────── */}
      <NotificationBar />

      {/* ── 3. Hero + 5-Star Review ───────────────────────────── */}
      <section className="px-6 pt-12 pb-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
          <span className="text-white block mb-3">ग्रामीण भागातील विद्यार्थ्यांसाठी</span>
          <span className="text-orange-500">इंग्रजी बोलायला शिकवणारा एकमेव <br /> e-Learning Application </span>
        </h2>
        <h3 className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          इंग्रजीची भीती घालवा ! आत्मविश्वास वाढवा !<br />
          अभ्यास म्हणून नव्हे तर भाषा म्हणून बोलायला शिका
        </h3>
        <div className="inline-flex flex-col items-center gap-2 bg-[#1a1a1a] border border-orange-500/50 px-6 py-4 rounded-2xl shadow-lg shadow-orange-900/10">
          <span className="text-white font-semibold text-sm tracking-wide">५ स्टार Reviews</span>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 4. Product Cards (2×2) ────────────────────────────── */}
      <ProductCards />

      <Divider />

      {/* ── 5. Course Points + Vision ─────────────────────────── */}
      <CoursePointsAndVision />

      <Divider />

      {/* ── 6. Introduction ───────────────────────────────────── */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex justify-center pt-8 pb-4">
              <h2 className="bg-orange-500 text-white px-8 py-3 rounded-xl text-xl md:text-2xl font-bold shadow-md">
                ABOUT US
              </h2>
            </div>
            <div
              className="px-6 md:px-10 pb-8 space-y-5"
              style={{ fontFamily: "'Noto Sans Devanagari', 'Mukta', sans-serif" }}
            >
              <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
               Welcome to SpeakSmart – Maharashtra’s leading customized Spoken English E Learning Application. At SpeakSmart, we believe English is best learned through real-life usage, not by memorizing rules. Our application -based learning approach focuses on practical English communication, helping learners speak the right English with clarity and confidence.
              </p>
              <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
                We place strong emphasis on confidence building for rural students, enabling them to express themselves freely and fearlessly. Our training does not focus on studying the language; instead, we focus on speaking English naturally and effectively. With special attention to correct pronunciation, accent, and real-life communication, we help learners speak smart, speak right, and speak with confidence.
              </p>
              <p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
               At SpeakSmart, our goal is to empower students to communicate confidently in English, succeed in education and careers, and open doors to global opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 7. Why Speak Smart ────────────────────────────────── */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <WhySpeakSmart />
        </div>
      </section>

      <Divider />

      {/* ── 8. As Seen In ─────────────────────────────────────── */}
      <AsSeenIn />

      <Divider />

      {/* ── 9 + 10. कोर्समध्ये काय + Highlights ─────────────── */}
      <CourseHighlights />

      <Divider />

      {/* ── 11. Founders ──────────────────────────────────────── */}
      <FounderSection />

      <Divider />

      {/* ── 12. Testimonials ──────────────────────────────────── */}
      <TestimonialSection />

      {/* ── 13. Sticky Banner ─────────────────────────────────── */}
      {/* <StickyBanner /> */}

      {/* ── 14. Footer ────────────────────────────────────────── */}
      <Footer />
    </div>
  );
};

export default Index;

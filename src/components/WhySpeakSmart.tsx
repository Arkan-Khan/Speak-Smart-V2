/**
 * WhySpeakSmart.tsx
 *
 * Full-width section listing 11 reasons to choose Speak Smart.
 * Bullets are displayed in a 2-column grid (1 column on mobile).
 * Each bullet: English bold + Marathi subtitle, with an orange check icon.
 */

import { CheckCircle2 } from "lucide-react";

const bullets = [
  { en: "Easy Installation Application",           mr: "सहज इन्स्टॉल होणारे अॅप" },
  { en: "Listening & Speaking Focus",               mr: "ऐकणे व बोलणे याचा सराव" },
  { en: "Confidence Building",                      mr: "आत्मविश्वास वाढवणे" },
  { en: "Customized for Rural Students",            mr: "ग्रामीण विद्यार्थ्यांसाठी विशेष तयार केलेले" },
  { en: "Right & Natural Pronunciation & Accent",  mr: "योग्य व नैसर्गिक उच्चार" },
  { en: "Vocabulary Building",                      mr: "शब्दसंग्रहात वाढ" },
  { en: "Day-to-Day Conversations",                 mr: "दैनंदिन संभाषण" },
  { en: "Real-Life Speaking Practice",              mr: "प्रत्यक्ष जीवनातील बोलण्याचा सराव" },
  { en: "Interactive Sessions",                     mr: "संवादात्मक सत्रे" },
  { en: "Translation Method (English & Marathi)",  mr: "इंग्रजी–मराठी पद्धती" },
  { en: "English-to-English Practice",              mr: "इंग्रजीत विचार करण्याचा सराव" },
];

const WhySpeakSmart = () => {
  return (
    <div className="bg-[#1a1a1a] border border-white/[0.06] rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-orange-500 px-6 py-4">
        <h2 className="text-white text-xl md:text-2xl font-bold text-center tracking-wide">
          Why Speak Smart?
        </h2>
      </div>

      {/* 2-column bullet grid — gap-px + bg-white/5 renders 1px dividers between all cells */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.05]"
        style={{ fontFamily: "'Noto Sans Devanagari', 'Mukta', sans-serif" }}
      >
        {bullets.map((item, i) => (
          <div
            key={i}
            className={`bg-[#1a1a1a] flex items-start gap-3 px-5 py-4 hover:bg-[#222] transition-colors ${
              i === bullets.length - 1 && bullets.length % 2 !== 0
                ? "sm:col-span-2 sm:justify-center"
                : ""
            }`}
          >
            <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-semibold text-sm leading-snug">{item.en}</p>
              <p className="text-gray-500 text-xs mt-0.5">{item.mr}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySpeakSmart;

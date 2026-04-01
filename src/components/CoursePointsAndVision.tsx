/**
 * CoursePointsAndVision.tsx
 *
 * Two-column section displayed side by side (stacked on mobile):
 *
 * LEFT — Course Points block: 4 key course highlights rendered as
 * icon + text rows inside a dark card.
 *
 * RIGHT — Vision card: portrait image on the left, vision text on
 * the right. No video — image is /public/mirror-child.jpeg (placeholder
 * until client provides the final portrait).
 *
 * No props required — all content is hardcoded in this file.
 */

import { Award, Headphones, BookOpen, Clock } from "lucide-react";

const coursePoints = [
  { icon: BookOpen, text: "Level 1 English Communication" },
  { icon: Headphones, text: "36 Listening and Speaking Sessions" },
  { icon: Award, text: "36 Assignments" },
  { icon: Clock, text: "1 Year Access" },
];

const CoursePointsAndVision = () => {
  return (
    <section className="px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left — Course Points */}
          <div className="bg-[#1a1a1a] border border-white/[0.06] rounded-2xl p-6 flex flex-col justify-center gap-4">
            <h3 className="text-orange-500 text-xl font-bold mb-2 text-center">
              Highlights
            </h3>
            {coursePoints.map((point, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-xl flex items-center p-3 gap-3"
              >
                <point.icon className="text-orange-500 w-6 h-6 flex-shrink-0" />
                <span className="font-medium">{point.text}</span>
              </div>
            ))}
          </div>

          {/* Right — Vision Card */}
          <div className="bg-[#1a1a1a] border border-white/[0.06] rounded-2xl overflow-hidden flex flex-col sm:flex-row">
            {/* Image — landscape on mobile, portrait on sm+ */}
            <div className="sm:w-2/5 w-full h-48 sm:h-auto flex-shrink-0">
              <img
                src="/mirror-child-landscape.png"
                alt="Vision"
                className="block sm:hidden w-full h-full object-cover"
              />
              <img
                src="/mirror-child.jpeg"
                alt="Vision"
                className="hidden sm:block w-full h-full object-cover"
              />
            </div>

            {/* Vision text */}
            <div className="flex-1 p-6 flex flex-col justify-start pt-5">
              <h3 className="text-orange-500 text-xl font-bold mb-3">
                Our Vision
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                “To inspire rural students to learn English with confidence. We aim to motivate them through practical and activity-based learning. We encourage effective communication skills from pre-school to college level. Through this, we empower students for better education, career, and life opportunities.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursePointsAndVision;

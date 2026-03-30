/**
 * TestimonialSection.tsx
 *
 * Config-driven testimonials grid supporting two card types:
 *
 * "text" cards — display student name, star rating, and written feedback.
 *
 * "video" cards — the entire card is a clickable link to a Google Drive
 * video. If a thumbnail is provided it fills the card background;
 * otherwise a dark placeholder with a play icon is shown.
 *
 * Config dependency: src/config/feedbackConfig.ts
 * No props required — data sourced entirely from feedbackConfig.
 * Adding more testimonials in future only requires updating the config file.
 */

import { Star, Play } from "lucide-react";
import { testimonials, TextTestimonial, VideoTestimonial } from "@/config/feedbackConfig";

/* ---------- Sub-components ---------- */

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
        }`}
      />
    ))}
  </div>
);

const TextCard = ({ testimonial }: { testimonial: TextTestimonial }) => {
  // Split on <br> tags so they render as actual line breaks
  const lines = testimonial.feedback.split(/<br\s*\/?>/i);
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-md"
      style={{ fontFamily: "'Noto Sans Devanagari', 'Mukta', sans-serif" }}
    >
      <StarRating rating={testimonial.rating} />
      <div className="text-gray-700 text-sm leading-relaxed flex-1">
        {lines.map((line, i) => (
          <p key={i} className={i > 0 ? "mt-2" : ""}>{line.trim()}</p>
        ))}
      </div>
      <p className="text-orange-500 font-semibold text-sm border-t border-gray-100 pt-3">
        {testimonial.name}
      </p>
    </div>
  );
};

const VideoCard = ({ testimonial }: { testimonial: VideoTestimonial }) => (
  <a
    href={testimonial.driveLink}
    target="_blank"
    rel="noopener noreferrer"
    className="relative block rounded-2xl overflow-hidden aspect-video bg-[#222] group"
    aria-label={`Watch testimonial from ${testimonial.name}`}
  >
    {/* Thumbnail or dark placeholder */}
    {testimonial.thumbnail ? (
      <img
        src={testimonial.thumbnail}
        alt={`${testimonial.name} testimonial`}
        className="w-full h-full object-cover"
      />
    ) : (
      <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
        <Play className="w-12 h-12 text-orange-500 opacity-80 group-hover:opacity-100 transition-opacity" />
      </div>
    )}

    {/* Hover overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
      {testimonial.thumbnail && (
        <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
      )}
    </div>

    {/* Name badge */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
      <p className="text-white font-semibold text-sm">{testimonial.name}</p>
    </div>
  </a>
);

/* ---------- Main component ---------- */

const TestimonialSection = () => {
  return (
    <section className="px-6 py-16 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="text-white">Student </span>
          <span className="text-orange-500">Feedback</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) =>
            t.type === "text" ? (
              <TextCard key={t.id} testimonial={t} />
            ) : (
              <VideoCard key={t.id} testimonial={t as VideoTestimonial} />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

/**
 * FounderSection.tsx
 *
 * Displays the Founder and Co-Founder side by side (stacked on mobile).
 * Each card contains: portrait, label badge, name, and individual bio.
 * Below both cards sits a shared "Together..." paragraph.
 *
 * Assets used:
 * - /public/founder.png     — Reshma Dabholkar Damari (Founder)
 * - /public/co-founder.jpeg — Capt. Omkar Dabholkar (Co-Founder)
 */

interface FounderCard {
  label: string;
  name: string;
  image: string;
  imageAlt: string;
  bio: string;
}

const founders: FounderCard[] = [
  {
    label: "Founder",
    name: "Reshma Dabholkar Damari",
    image: "/founder.png",
    imageAlt: "Reshma Dabholkar Damari — Founder",
    bio: "Reshma Dabholkar-Damari, Founder & Head Coach, brings 20+ years of experience in Human Resources, training, and communication development, along with over a decade of expertise in English and soft skills training.",
  },
  {
    label: "Co-Founder",
    name: "Capt. Omkar Dabholkar",
    image: "/co-founder.jpeg",
    imageAlt: "Capt. Omkar Dabholkar — Co-Founder",
    bio: "Captain Omkar Dabholkar, Co-Founder, has 18+ years of experience in the global shipping industry, with strong leadership and system-driven expertise.   is passionate about empowering rural students through skill development, confidence building, and connecting them to global career opportunities.",
  },
];

const FounderSection = () => {
  return (
    <section className="px-6 py-16 bg-black">
      <div className="max-w-6xl mx-auto border border-orange-500/25 rounded-3xl p-6 md:p-10 bg-[#0d0d0d]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="text-white">Meet the </span>
          <span className="text-orange-500">Founders</span>
        </h2>

        {/* Founder cards — side by side on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {founders.map((founder) => (
            <div
              key={founder.label}
              className="flex flex-col items-center text-center gap-4"
            >
              {/* Portrait */}
              <div className="w-36 h-36 rounded-full border-4 border-orange-500 overflow-hidden flex-shrink-0">
                <img
                  src={founder.image}
                  alt={founder.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info card — label, name, bio */}
              <div className="flex flex-col items-center gap-2 bg-[#1a1a1a] border border-white/[0.06] w-full rounded-xl p-5 shadow-lg">
                <span className="bg-orange-500 px-4 py-1.5 text-sm rounded-xl text-white font-semibold">
                  {founder.label}
                </span>
                <h3 className="text-white text-lg font-semibold">
                  {founder.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed text-center">
                  {founder.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Shared paragraph — combined mission */}
        <div className="bg-[#1a1a1a] border border-white/[0.06] rounded-2xl p-6 md:p-8 text-gray-300 text-sm md:text-base leading-relaxed">
          <p>
            Together, they are committed to empowering rural students with
            confidence, communication, and practical skills. Their programs
            focus on real-life learning, personality development, and
            future-ready growth. They aim to bridge the gap between rural
            potential and global opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import FeatureGrid from "@/components/FeatureGrid";
import CourseHighlights from "@/components/CourseHighlights";
import TargetAudience from "@/components/TargetAudience";
import TestimonialGrid from "@/components/TestimonialGrid";
import AsSeenIn from "@/components/AsSeenIn";
import Footer from "@/components/Footer";

// Dynamic date hook - calculates next 10th of the month
const useDynamicDate = () => {
  const [dynamicDate, setDynamicDate] = useState("");

  useEffect(() => {
    const getNext10thDate = () => {
      const now = new Date();
      const currentMonth = now.getMonth();
      const currentYear = now.getFullYear();
      const currentDay = now.getDate();

      let targetMonth = currentMonth;
      let targetYear = currentYear;

      // If current date is past the 10th, move to next month
      if (currentDay > 10) {
        targetMonth += 1;
        if (targetMonth > 11) {
          targetMonth = 0;
          targetYear += 1;
        }
      }

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      return `${months[targetMonth]} 10, ${targetYear}`;
    };

    setDynamicDate(getNext10thDate());
  }, []);

  return dynamicDate;
};

const NotificationBar = () => {
  return (
    <div className="w-full overflow-hidden bg-[#fdb602] py-2.5 relative border-t-2 border-b-2 border-black">
      <div
        className="inline-block whitespace-nowrap text-black text-lg font-bold"
        style={{
          paddingLeft: "100%",
          animation: "scroll-left 12s linear infinite",
        }}
      >
        On a mission to help 100,000 people from rural areas speak English
        confidently and fluently.
      </div>

      <style>
        {`
          @keyframes scroll-left {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};

const Index = () => {
  const dynamicDate = useDynamicDate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 pb-4 border-b border-gray-800">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
            <img
              src="/lovable-uploads/8169f376-7ae0-4490-a86c-2c09c3a37911.png"
              alt="Speak Smart Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col items-center space-y-1 md:space-y-2">
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 md:px-6 py-2 rounded-lg text-sm md:text-base"
            onClick={() =>
              (window.location.href = "https://rzp.io/rzp/sXXSw8Oq")
            }
          >
            Pay Now
          </Button>
          <span className="text-white text-xs md:text-sm">
            पे करा आणि कोर्स सुरु करा
          </span>
        </div>
      </header>

      <NotificationBar />

      {/* Hero Section */}
      <section className="px-6 py-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight px-4 py-6">
          <span className="text-white block mb-6">
            ग्रामीण भागातील लोकांसाठी
          </span>
          <span className="text-orange-500">
            इंग्रजी बोलायला शिकवणारा एकमेव कोर्स
          </span>
        </h2>

        <h3 className="text-base md:text-lg text-gray-300 mb-6 max-w-4xl mx-auto">
          इंग्रजीची भीती घालवा ! आत्मविश्वास वाढवा !<br />
          अभ्यास म्हणून नव्हे तर भाषा म्हणून बोलायला शिका
        </h3>

        {/* 5 Star Reviews Badge */}
        <div className="inline-flex flex-col items-center space-y-2 bg-[#222] border border-orange-500 px-6 py-4 rounded-xl mb-10">
          <span className="text-white font-medium">५ स्टार Reviews</span>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>

        {/* Banner Image */}
        <div className="w-full max-w-4xl mx-auto mb-4">
          <img
            src="/lovable-uploads/banner.jpeg"
            alt="Speak Smart Banner"
            className="w-full h-auto rounded-xl object-cover scale-105"
          />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mobile: Video First, Desktop: Features First */}
            <div className="md:order-1 order-2">
              <FeatureGrid />
            </div>

            {/* Mobile: Features Second, Desktop: Video Second */}
            <div className="md:order-2 order-1 flex flex-col items-center rounded-lg">
              <div className="w-full p-1 bg-white shadow-md rounded-xl mb-4">
                <div className="relative bg-gray-800 rounded-lg overflow-hidden aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/FlBg_sp749I"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    title="Introduction Video"
                  ></iframe>
                </div>
              </div>

              <h3 className="text-white text-lg leading-normal my-4 text-center">
                Reserve a seat by{" "}
                <span className="text-orange-500 font-bold">{dynamicDate}</span>
              </h3>

              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white py-6 px-8 rounded-2xl text-xl font-medium"
                onClick={() =>
                  (window.location.href = "https://rzp.io/rzp/sXXSw8Oq")
                }
              >
                Reserve Seat for ₹3500{" "}
                <span className="line-through text-sm ml-2">₹7000</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/*Intro Section */}
      <section className="px-6 py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto bg-white rounded-xl">
          <div className="flex justify-center pt-8 pb-4">
            <h2 className="bg-orange-500 text-white px-8 py-3 rounded-xl text-xl md:text-2xl font-bold shadow-lg">
              Introduction
            </h2>
          </div>

          <div
            className="px-6 md:px-8 pb-8"
            style={{
              fontFamily:
                "'Noto Sans Devanagari', 'Mukta', 'Lohit Devanagari', sans-serif",
            }}
          >
            <p className="text-base md:text-lg text-black leading-relaxed text-justify">
              10 वर्षांचा Corporate क्षेत्रात, Mumbai मध्ये Human Resource
              Management (HR) मध्ये अनुभव असून, मागील 9 वर्षांपासून students,
              teachers, business professionals, working professionals आणि
              housewives यांना Spoken English, Confidence Building, Soft Skills
              आणि Personality Development या areas मध्ये train करत आहे; आजपर्यंत
              1000+ students ना train केलं आहे आणि 150+ workshops आणि seminars
              घेतले आहेत.
            </p>

            <p className="text-base md:text-lg text-black leading-relaxed text-justify mt-6">
              "Speak Smart" हा Level 1 English Communication Certification कोर्स
              आहे, ज्यात ३ महिन्यांच्या कालावधीत ३६ Video Lectures, ३६ PDF
              Assignments, Weekly Live Doubts Solving आणि Lifetime Access उपलब्ध
              आहे; ग्रामीण विद्यार्थ्यांच्या कालावधीत सोपी भाषा व practical life
              situations मध्ये उपयुक्त अशा पद्धतीने हा कोर्स डिझाइन करण्यात आला
              आहे.
            </p>

            <p className="text-base md:text-lg text-black leading-relaxed text-justify mt-6">
              "One House, One Course" संकल्पनेतून हा कोर्स संपूर्ण कुटुंबासाठी
              लाभदायी ठरतो, प्रत्येक दिवशी तुमच्या इंग्रजी बोलण्याचा आत्मविश्वास
              वाढवतो आणि तीन महिन्यांत प्रभावशाली इंग्रजी बोलण्याची ताकद देतो.
            </p>
          </div>
        </div>
      </section>

      {/* As Seen In Section */}
      <AsSeenIn />

      {/* Target Audience Section */}
      <TargetAudience />

      {/* Course Highlights */}
      <CourseHighlights />

      {/* Testimonials */}
      <TestimonialGrid />

      {/* Final CTA Section */}
      <section className="px-6 py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="text-white">Join Now</span>
            <br />
            <span className="text-orange-500">50% Discount</span>
          </h2>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-4xl font-bold text-red-500 line-through">
              ₹7000
            </span>
            <span className="text-5xl font-bold text-orange-500">₹3500</span>
          </div>

          <CountdownTimer />

          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 rounded-2xl text-2xl font-bold mt-8 transform hover:scale-105 transition-transform"
            onClick={() =>
              (window.location.href = "https://rzp.io/rzp/sXXSw8Oq")
            }
          >
            Pay Now
          </Button>

          <span className="block mt-4 text-lg text-white">
            पे करा आणि कोर्स सुरु करा
          </span>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

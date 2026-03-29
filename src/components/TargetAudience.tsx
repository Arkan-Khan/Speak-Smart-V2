
import { GraduationCap, Users, Briefcase, Building, Heart } from "lucide-react";

const TargetAudience = () => {
  const audiences = [
    { icon: GraduationCap, title: "विद्यार्थी", description: "Students seeking English fluency" },
    { icon: Users, title: "शिक्षक", description: "Teachers improving communication" },
    { icon: Briefcase, title: "वर्किंग प्रोफेशनल्स", description: "Working professionals advancing careers" },
    { icon: Building, title: "व्यावसायिक", description: "Business owners expanding reach" },
    { icon: Heart, title: "गृहिणी", description: "Homemakers building confidence" }
  ];

  return (
    <section className="px-6 py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-white">कोर्स </span>
          <span className="text-orange-500">कोणासाठी आहे</span>
        </h2>
        
        <div className="grid md:grid-cols-5 grid-cols-2 gap-6">
          {audiences.map((audience, index) => (
            <div 
              key={index} 
              className={`bg-[#222] rounded-xl p-6 text-center hover:bg-gray-800 transition-colors ${
                index === 4 ? 'md:col-span-1 col-span-2 md:mx-0 mx-auto max-w-xs' : ''
              }`}
            >
              <audience.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{audience.title}</h3>
              <p className="text-gray-400 text-sm">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;


import { Clock, Video, Award, HeadphonesIcon } from "lucide-react";

const FeatureGrid = () => {
  const features = [
    { icon: Video, text: "36 Video Lectures" },
    { icon: Award, text: "36 Assignments" },
    { icon: Clock, text: "1 Year Access" },
    { icon: HeadphonesIcon, text: "Weekly Live Support" }
  ];

  return (
    <div className="bg-[#222] rounded-2xl overflow-hidden p-6">
      <div className="grid grid-cols-1 gap-2 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white text-black rounded-xl flex p-3 h-full items-center">
            <feature.icon className="text-orange-500 w-6 h-6 flex-shrink-0 mr-3" />
            <span className="font-medium">{feature.text}</span>
          </div>
        ))}
      </div>
      
      <div className="flex flex-col items-center mt-6 text-center">
        <div className="mb-4">
          <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden mx-auto">
            <img 
              src="/lovable-uploads/868ad4c4-8f79-4fc2-9ac2-db6aeab5748d.png" 
              alt="Reshma Dabholkar Damari" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center leading-6 gap-4 bg-white p-4 rounded-xl shadow-lg">
          <div className="bg-orange-500 px-4 py-2 text-sm rounded-xl text-black font-semibold">
            Your Trainer
          </div>
          <h3 className="sm:text-2xl text-base text-black font-semibold">
            Reshma Dabholkar Damari
          </h3>
          <p className="text-black text-sm leading-relaxed max-w-xs">
            इंग्रजी भाषा अगदी सहज सोप्या पद्धतीने शिकवणारी आणि आत्मविश्वास वाढवणारी अनुभवी प्रशिक्षक
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;

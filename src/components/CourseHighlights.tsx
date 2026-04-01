
import { Brain, Book, Volume2, Mic, MessageCircle, TrendingUp, BarChart3, Waves } from "lucide-react";

const CourseHighlights = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Translation Method (Sentence Clarity Builder)",
      subtitle: "(मराठीतून इंग्रजीत योग्य वाक्यरचना कशी करायची हे step-by-step शिकवणारी पद्धत. Translation च्या मदतीने grammar स्पष्ट होते आणि sentence structure मजबूत बनत.)",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Book,
      title: "English to English Thinking Method (Fluency Booster)",
      subtitle: "(मराठीत विचार न करता थेट इंग्रजीत विचार करण्याची सवय लावणारी पद्धत. यामुळे speaking speed वाढतो, confidence boost होतो आणि natural English बोलता येते.)",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Volume2,
      title: "Vocabulary, Pronunciation & Accent",
      subtitle: "(5 step process to develop vocabulary, pronunciation and accent. नवीन आणि सोप्या पद्धतीने स्मार्ट शब्द आणि उच्चारांचा, Accentचा भाषेला स्मार्ट टच)",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Waves,
      title: "Fluency Techniques",
      subtitle: "AI चा वापर - AI (ChatGPT) द्वारे विद्यार्थी त्यांच्या शंका थेट विचारू शकतात. त्यांना लगेच योग्य उत्तर आणि feedback मिळतो. त्यामुळे self-learning, confidence आणि English skills सुधारतात",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageCircle,
      title: "Real Life conversations",
      subtitle: "(Practical and easy ways of daily conversations.  Practical Situations घेऊन दैनंदिन जीवनातील संवाद आणि त्याचा सराव)",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "80-20 Rule",
      subtitle: "(What you speak versus How you speak ! काय बोलावे यापेक्षा कसे बोलावे यासाठी Verbal, Non Verbal Communication यावर मार्गदर्शन)",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          <span className="text-white">Our </span>
          <span className="text-orange-500">Syllabus</span>
        </h2>
        <p className="text-gray-400 text-center text-base md:text-lg mb-8">
          योग्य इंग्रजी ऐका आणि सहजपणे बोला <br /> Listen | Speak | Grow 

        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-[#1a1a1a] border border-white/[0.06] rounded-xl py-3 px-4 hover:bg-gray-800 transition-colors">
              <div className={`w-12 h-12 bg-gradient-to-r ${highlight.color} rounded-lg flex items-center justify-center mb-4`}>
                <highlight.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
              <p className="text-orange-400 text-sm">{highlight.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Highlights</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-500 bg-opacity-90 rounded-lg p-4">
              <BarChart3 className="w-8 h-8 text-white mx-auto mb-2" />
              <p className="text-white font-medium">इंग्रजीचा दर्जा सुधारेल</p>
              <p className="text-orange-100 text-sm">Adding Quality</p>
            </div>
            <div className="bg-blue-500 bg-opacity-90 rounded-lg p-4">
              <TrendingUp className="w-8 h-8 text-white mx-auto mb-2" />
              <p className="text-white font-medium">इंग्रजीचा फ्लो वाढेल</p>
              <p className="text-orange-100 text-sm">Adding Quantity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;

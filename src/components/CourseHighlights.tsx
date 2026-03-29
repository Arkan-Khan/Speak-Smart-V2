
import { Brain, Book, Volume2, Mic, MessageCircle, TrendingUp, BarChart3, Waves } from "lucide-react";

const CourseHighlights = () => {
  const highlights = [
    {
      icon: Brain,
      title: "5 secrets of Mindset Building",
      subtitle: "(अगदी पहिलीपासून इंग्रजी शिकत असून सुद्धा इंग्रजी बोलता येत नाही याची नेमकी कारण आणि त्याचे सोल्युशन्स इंग्रजी बोलण्याची स्टेप १ म्हणजेच त्याला अनुरूप अशी मानसिकता !)",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Book,
      title: "Foundation of English Language",
      subtitle: "(जरुरी आहे ते ग्रामर, English sentence structures चे बेसिक्स, सोप्या hints आणि shortcuts सोबत; कोणतही Complication नाही, confusion नाही. सहज सोपी पद्धत.)",
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
      subtitle: "(English Fluency develop करण्यासाठी लागणाऱ्या 4 Right Techniques LSRW module चे संपूर्ण मार्गदर्शन, नेमकं काय आणि कसे ऐकायचे, वाचायचे याच Practical Activities द्वारे मार्गदर्शन)",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageCircle,
      title: "Day to Day Conversations",
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-white">कोर्समध्ये काय </span>
          <span className="text-orange-500">शिकायला मिळेल</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-[#222] rounded-xl py-3 px-4 hover:bg-gray-800 transition-colors">
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

import { Star, Quote } from "lucide-react";

const TestimonialGrid = () => {
  const testimonials = [
    {
      name: "Jayram Desai",
      role: "Working @ Airport",
      content: `मी याआधी २ कोर्सेस केले होते, You Tube ला बराच अभ्यास केला पण इथे एक uniqueness आहे. Course ची simplicity आणि clear sequence खूपच helpful आहे. Video lectures practical life शी relate होतात. त्याने खूप confidence वाढतो. Live sessions पण खूप genuine आहेत. रेश्मा मॅम फार supportive आहेत. English व्यतिरिक personality development आणि confidence building साठी सुद्धा त्या मार्गदर्शन करतात. `,
      rating: 5,
    },
    {
      name: "Vedant Gawade",
      role: "School Student",
      content: `“Speak Smart” कोर्समुळे मला अभ्यासात खरंच खूप understanding वाढलं. इंग्रजीची खूप भीती वाटायची ती कमी झाली. आता वाटत की रोज थोडा थोडा प्रयत्न केला की एक दिवस English नक्की fluent होणार. हे कठीण नाही. विडिओ सेशन्स चा खूप फायदा होतो. रेश्मा मॅम च शिकवण एकदम Simple आणि सोपं वाटत. पुन्हा पुन्हा आणि आपल्या वेळेनुसार कधीही पाहू शकतो. आम्ही मित्र सुद्धा हे बघून प्रॅक्टिस करतो. Whatsppp ला कधीही काही डाउट विचारला की चोवीस तासात रिप्लाय येतो. फीज सुद्धा माफक आहे आणि खरोखर गरजू मुलांसाठी फार Useful आहे.`,
      rating: 5,
    },
    {
      name: "Madura Revulkar",
      role: "Hindi Teacher",
      content: `कामानंतरही Video lectures पाहून sequence follow करणे एकदम सोपं आहे. जाता - येताना कानात मी Ear-phones घालून ऐकत असते, पुन्हा पुन्हा ऐकल्यामुळे pronunciation, accent बऱ्यापैकी नीट समजतात. किती लहान लहान गोष्टी आपण चुकीच्या बोलतो आहोत हे समजत. रेश्मा मॅमची शिकवण्याची पद्धत, त्यांची इंग्रजी बोलण्याची शैली यातून खूप शिकायला मिळत. फार चांगली Clarity येते आहे. लाइव ला interact करताना पण फार confident वाटत आता. आपण हिंदी टीचर आहोत आपल्याला  कधीच इंग्रजी बोलता येणार नाही असं वाटत होत. पण आता फार सोपं वाटत. मी माझ्या मुलांशी इंग्रजीमध्ये interact करायला सुद्धा लागले आहे. कारण मॅम कायम सांगतात की भाषा ही घरातच develop होते म्हणून थोडा फार आपण सुद्धा मुलांशी नक्कीच बोलल पाहिजे याचा आपल्याला आणि मुलांना सुद्धा फायदा होतो. माझ्या सोबत मी मुलांना सुद्धा हे व्हिडिओज दाखवते.`,
      rating: 5,
    },
    {
      name: "अनुजा राणे",
      role: "गृहिणी",
      content: `२० वर्ष पूर्वी मी शिक्षण पूर्ण केलं होत, आता एवढ्या वर्षानंतर काही शिकायला जमेल असं अजिबात वाटलं नव्हत, पण पहिल्याच डेमो सेशनला वाटलं की सोपं आहे, आहे. भीती कमी झाली म्हणून मी कोर्सला जॉईन झाले. खरंच एकदम छान, सोपा असा कोर्सचा sequence आहे. रोजच्या आयुष्यात काय बोलायचं, कस बोलायचं हे सगळं समजत. कॉन्फिडन्स वाढतो. मी अगदी एका महिन्याच्या आत मॉल्स ना , Customer Care  सोबत जिथे जिथे शक्य होईल तिथे इंग्रजी मध्ये कम्युनिकेट करायला चालू केलं. हा कॉन्फिडन्स मला फक्त रेश्मा मॅम यांच्या शिकवण्याने आणि या कोर्सने आला. जेव्हा कधी वाटत तेव्हा मी एखादा सेशन काढते आणि ऐकते. Life Time Access चा खूप फायदा होतो. नुसत इंग्लिश नाही तर माझा कॉन्फिडन्स वाढल्याने मी स्वतःचा You Tube Channel सुद्धा काढू शकले आणि आज माझे ५००० followers सुद्धा आहेत. हे सर्व मी या कोर्स मुळेच करू शकले.`,
      rating: 5
    }

  ];

  return (
    <section className="px-6 py-16 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-white">विद्यार्थ्यांचे </span>
          <span className="text-orange-500">फीडबॅक</span>
        </h2>

        {/* Two Column Layout with items aligned to start */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <Quote className="w-8 h-8 text-orange-500 mb-4" />
              <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.content}</p>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-black font-semibold">{testimonial.name}</h4>
                  <p className="text-orange-500 text-sm">{testimonial.role}</p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialGrid;

/**
 * feedbackConfig.ts
 *
 * Config-driven data for the TestimonialSection component.
 * Supports two card types: "text" and "video".
 *
 * Text card fields:
 * - id, type: "text", name, feedback, rating (1–5)
 *
 * Video card fields:
 * - id, type: "video", name, thumbnail (optional), driveLink
 *   The entire card is wrapped in a clickable link to driveLink.
 *
 * To add more testimonials in the future, simply append entries to the array.
 */

export type TextTestimonial = {
  id: number;
  type: "text";
  name: string;
  feedback: string;
  rating: number;
};

export type VideoTestimonial = {
  id: number;
  type: "video";
  name: string;
  thumbnail?: string;
  driveLink: string;
};

export type Testimonial = TextTestimonial | VideoTestimonial;

export const testimonials: Testimonial[] = [
  {
    id: 1,
    type: "text",
    name: "Sheth Newchandra Mafatlal High School, Kharepatan",
    feedback:
      "SpeakSmart Application मुळे आमच्या शाळेतील विद्यार्थ्यांचा इंग्रजी बोलण्याचा आत्मविश्वास लक्षणीय वाढला आहे. <br> सोप्या आणि समजण्यासारख्या पद्धतीमुळे विद्यार्थ्यांना शिकणे सहज वाटते. या Application मुळे विद्यार्थ्यांचा वर्गातील सहभाग वाढला आहे आणि ते अधिक उत्साहाने इंग्रजीत संवाद साधत आहेत. दैनंदिन जीवनात वापरले जाणारे योग्य इंग्रजी ऐकायला मिळाल्यामुळे विद्यार्थ्यांना प्रत्यक्ष परिणाम दिसून येत आहेत. शाळेत सातत्याने होणाऱ्या सरावामुळे विद्यार्थ्यांची इंग्रजीची भीती कमी होत आहे आणि त्यामुळे त्यांच्या भविष्यातील करिअरसाठी हे निश्चितच उपयुक्त ठरेल.",
    rating: 5,
  },
  {
    id: 2,
    type: "text",
    name: "Vidyaniketan International School, Ahmednagar",
    feedback:
      "इंग्रजी ऐकणे आणि बोलणे ही विद्यार्थ्यांची मुख्य अडचण होती. SpeakSmart E-Learning Application वापरल्यानंतर ही अडचण सुरुवातीपासूनच कमी होताना दिसत आहे. विद्यार्थ्यांचा वर्गातील सहभाग वाढला आहे आणि ते इंग्रजी बोलण्याचा प्रयत्न अधिक आत्मविश्वासाने करत आहेत. नियमित सरावामुळे त्यांच्या बोलण्यात सुधारणा दिसून येत आहे. बाजारातील इतर AI साधनांच्या तुलनेत हे E-Learning Application ग्रामीण विद्यार्थ्यांच्या पातळीला समजेल असे सोपे आणि उपयोगी आहे, त्यामुळे ते वर्गात प्रभावीपणे वापरता येते.",
    rating: 5,
  },
  {
    id: 3,
    type: "text",
    name: "Sheth M.V. Kesarakar Madhyamik Vidyalay, Wargaon",
    feedback:
      "SpeakSmart E-Learning Application हे आमच्या शाळेसाठी उपयुक्त साधन ठरले आहे. विद्यार्थ्यांची English listening आणि speaking skills सुधारताना स्पष्ट दिसत आहेत. विशेषतः ग्रामीण भागातील विद्यार्थ्यांसाठी ही पद्धत अधिक practical आणि सोपी आहे. प्राथमिक आणि माध्यमिक स्तरासाठी वेगवेगळे modules असल्यामुळे प्रत्येक विद्यार्थ्याला त्याच्या समजेनुसार learning मिळते. Teachers साठी घेतल्या जाणाऱ्या online interactive sessions मुळे teaching मध्ये English बोलण्यावर अधिक भर दिला जात आहे. त्यामुळे वर्गात English वापरण्याची सवय तयार होत आहे आणि एक चांगली communication competency build होण्यास मदत होत आहे.",
    rating: 5,
  },
  // {
  //   id: 4,
  //   type: "video",
  //   name: "Student Name",
  //   thumbnail: "",
  //   driveLink: "#",
  // }
];

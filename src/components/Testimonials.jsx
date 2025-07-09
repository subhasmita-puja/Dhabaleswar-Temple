import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = ({ language }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const content = {
    en: {
      subtitle: "TESTIMONIALS",
      title: "Words from Our Devotees",
      testimonials: [
        {
          id: 1,
          quote: "A hidden gem in Odisha! The temple's architecture and the natural beauty of the island create a perfect blend of spirituality and tranquility.",
          name: "Chaitanya",
          title: "Founder",
          avatar: "SV"
        },
        {
          id: 2,
          quote: "The peaceful atmosphere and divine energy of Dhabaleswar Temple provide the perfect environment for meditation and spiritual growth.",
          name: "Subhasmita Sahoo",
          title: "Devotee",
          avatar: "RK"
        },
        {
          id: 3,
          quote: "Every visit to this sacred place fills my heart with peace and devotion. The temple management is excellent and very welcoming.",
          name: "Kajal Singh",
          title: "Regular Visitor",
          avatar: "PS"
        }
      ]
    },
    hi: {
      subtitle: "प्रशंसापत्र",
      title: "हमारे भक्तों के शब्द",
      testimonials: [
        {
          id: 1,
          quote: "ओडिशा में एक छुपा हुआ रत्न! मंदिर की वास्तुकला और द्वीप की प्राकृतिक सुंदरता आध्यात्मिकता और शांति का एक आदर्श मिश्रण बनाती है।",
          name: "सृष्टि वर्मा",
          title: "संस्थापक",
          avatar: "SV"
        },
        {
          id: 2,
          quote: "धाबलेश्वर मंदिर का शांतिपूर्ण वातावरण और दिव्य ऊर्जा ध्यान और आध्यात्मिक विकास के लिए आदर्श वातावरण प्रदान करती है।",
          name: "राजेश कुमार",
          title: "भक्त",
          avatar: "RK"
        },
        {
          id: 3,
          quote: "इस पवित्र स्थान की हर यात्रा मेरे दिल को शांति और भक्ति से भर देती है। मंदिर का प्रबंधन उत्कृष्ट और बहुत स्वागत करने वाला है।",
          name: "प्रिया शर्मा",
          title: "नियमित आगंतुक",
          avatar: "PS"
        }
      ]
    },
    or: {
      subtitle: "ପ୍ରଶଂସାପତ୍ର",
      title: "ଆମର ଭକ୍ତମାନଙ୍କ ଶବ୍ଦ",
      testimonials: [
        {
          id: 1,
          quote: "ଓଡ଼ିଶାରେ ଏକ ଲୁକ୍କାୟିତ ରତ୍ନ! ମନ୍ଦିରର ସ୍ଥାପତ୍ୟ ଏବଂ ଦ୍ୱୀପର ପ୍ରାକୃତିକ ସୌନ୍ଦର୍ଯ୍ୟ ଆଧ୍ୟାତ୍ମିକତା ଏବଂ ଶାନ୍ତିର ଏକ ଉତ୍କୃଷ୍ଟ ମିଶ୍ରଣ ସୃଷ୍ଟି କରେ।",
          name: "ସୃଷ୍ଟି ବର୍ମା",
          title: "ପ୍ରତିଷ୍ଠାତା",
          avatar: "SV"
        },
        {
          id: 2,
          quote: "ଧାବଲେଶ୍ୱର ମନ୍ଦିରର ଶାନ୍ତିପୂର୍ଣ୍ଣ ପରିବେଶ ଏବଂ ଦିବ୍ୟ ଶକ୍ତି ଧ୍ୟାନ ଏବଂ ଆଧ୍ୟାତ୍ମିକ ବିକାଶ ପାଇଁ ଉତ୍କୃଷ୍ଟ ପରିବେଶ ପ୍ରଦାନ କରେ।",
          name: "ରାଜେଶ କୁମାର",
          title: "ଭକ୍ତ",
          avatar: "RK"
        },
        {
          id: 3,
          quote: "ଏହି ପବିତ୍ର ସ୍ଥାନର ପ୍ରତ୍ୟେକ ପରିଦର୍ଶନ ମୋ ହୃଦୟକୁ ଶାନ୍ତି ଏବଂ ଭକ୍ତିରେ ପୂର୍ଣ୍ଣ କରେ। ମନ୍ଦିର ପରିଚାଳନା ଉତ୍କୃଷ୍ଟ ଏବଂ ଅତ୍ୟନ୍ତ ସ୍ୱାଗତଯୋଗ୍ୟ।",
          name: "ପ୍ରିୟା ଶର୍ମା",
          title: "ନିୟମିତ ପରିଦର୍ଶକ",
          avatar: "PS"
        }
      ]
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % content[language].testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + content[language].testimonials.length) % content[language].testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
            {content[language].subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-4">
            {content[language].title}
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </motion.div>

       
        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-orange-500" />
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-gray-600 italic leading-relaxed mb-8 max-w-3xl mx-auto">
              "{content[language].testimonials[currentTestimonial].quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {content[language].testimonials[currentTestimonial].avatar}
                </span>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-bold text-gray-800">
                  {content[language].testimonials[currentTestimonial].name}
                </h4>
                <p className="text-orange-500 font-medium">
                  {content[language].testimonials[currentTestimonial].title}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-12 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-orange-100 hover:bg-orange-200 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-orange-500" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {content[language].testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-orange-100 hover:bg-orange-200 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6 text-orange-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
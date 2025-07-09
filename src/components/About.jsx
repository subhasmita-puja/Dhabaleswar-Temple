import { motion } from 'framer-motion';

const About = ({ language }) => {
  const content = {
    en: {
      subtitle: "A DIVINE RETREAT ON MAHANADI'S ISLAND",
      title: "Dhabaleswar Temple in Gurujanga, Khurda",
      description1: "Located in the vibrant heart of Gurujanga, Dhabaleswar Temple is a sacred sanctuary where tradition meets spiritual devotion. Known for its commitment to divine service, peaceful atmosphere, and exceptional spiritual guidance, Dhabaleswar Temple invites you to experience a spiritual journey like no other.",
      description2: "The temple's interior is elegantly designed to provide a serene yet divine ambiance, with warm lighting and sacred decor that make every prayer feel special. Whether you're here for a quiet moment of reflection or participating in grand festivities, the spiritual atmosphere at Dhabaleswar Temple ensures a memorable divine experience.",
      stats: {
        devotees: "Daily Devotees",
        years: "Years of Service",
        festivals: "Major Festivals"
      }
    },
    hi: {
      subtitle: "महानदी के द्वीप पर एक दिव्य आश्रम",
      title: "गुरुजंगा, खुर्दा में धाबलेश्वर मंदिर",
      description1: "गुरुजंगा के जीवंत हृदय में स्थित, धाबलेश्वर मंदिर एक पवित्र अभयारण्य है जहां परंपरा आध्यात्मिक भक्ति से मिलती है। दिव्य सेवा, शांतिपूर्ण वातावरण और असाधारण आध्यात्मिक मार्गदर्शन के लिए प्रसिद्ध, धाबलेश्वर मंदिर आपको एक अनूठी आध्यात्मिक यात्रा का अनुभव करने के लिए आमंत्रित करता है।",
      description2: "मंदिर का आंतरिक भाग एक शांत लेकिन दिव्य माहौल प्रदान करने के लिए सुंदर रूप से डिज़ाइन किया गया है, गर्म प्रकाश और पवित्र सजावट के साथ जो हर प्रार्थना को विशेष बनाता है। चाहे आप यहां शांत चिंतन के लिए हों या भव्य उत्सवों में भाग ले रहे हों, धाबलेश्वर मंदिर का आध्यात्मिक वातावरण एक यादगार दिव्य अनुभव सुनिश्चित करता है।",
      stats: {
        devotees: "दैनिक भक्त",
        years: "सेवा के वर्ष",
        festivals: "प्रमुख त्योहार"
      }
    },
    or: {
      subtitle: "ମହାନଦୀର ଦ୍ୱୀପରେ ଏକ ଦିବ୍ୟ ଆଶ୍ରମ",
      title: "ଗୁରୁଜଙ୍ଗା, ଖୁର୍ଦ୍ଦାରେ ଧବଲେଶ୍ୱର ମନ୍ଦିର",
      description1: "ଗୁରୁଜଙ୍ଗାର ଜୀବନ୍ତ ହୃଦୟରେ ଅବସ୍ଥିତ, ଧାବଲେଶ୍ୱର ମନ୍ଦିର ଏକ ପବିତ୍ର ଅଭୟାରଣ୍ୟ ଯେଉଁଠାରେ ପରମ୍ପରା ଆଧ୍ୟାତ୍ମିକ ଭକ୍ତି ସହିତ ମିଶିଥାଏ। ଦିବ୍ୟ ସେବା, ଶାନ୍ତିପୂର୍ଣ୍ଣ ପରିବେଶ ଏବଂ ଅସାଧାରଣ ଆଧ୍ୟାତ୍ମିକ ମାର୍ଗଦର୍ଶନ ପାଇଁ ପ୍ରସିଦ୍ଧ, ଧବଲେଶ୍ୱର ମନ୍ଦିର ଆପଣଙ୍କୁ ଏକ ଅନନ୍ୟ ଆଧ୍ୟାତ୍ମିକ ଯାତ୍ରାର ଅନୁଭବ କରିବାକୁ ଆମନ୍ତ୍ରଣ କରେ।",
      description2: "ମନ୍ଦିରର ଭିତର ଭାଗ ଏକ ଶାନ୍ତ କିନ୍ତୁ ଦିବ୍ୟ ପରିବେଶ ପ୍ରଦାନ କରିବା ପାଇଁ ସୁନ୍ଦର ଭାବରେ ଡିଜାଇନ୍ କରାଯାଇଛି, ଉଷ୍ମ ଆଲୋକ ଏବଂ ପବିତ୍ର ସାଜସଜ୍ଜା ସହିତ ଯାହା ପ୍ରତ୍ୟେକ ପ୍ରାର୍ଥନାକୁ ବିଶେଷ କରିଥାଏ। ଆପଣ ଏଠାରେ ଶାନ୍ତ ଚିନ୍ତନ ପାଇଁ ହୁଅନ୍ତୁ କିମ୍ବା ମହାନ ଉତ୍ସବରେ ଭାଗ ନେଉଥିବେ, ଧବଲେଶ୍ୱର ମନ୍ଦିରର ଆଧ୍ୟାତ୍ମିକ ପରିବେଶ ଏକ ସ୍ମରଣୀୟ ଦିବ୍ୟ ଅନୁଭବ ନିଶ୍ଚିତ କରେ।",
      stats: {
        devotees: "ଦୈନିକ ଭକ୍ତ",
        years: "ସେବାର ବର୍ଷ",
        festivals: "ପ୍ରମୁଖ ପର୍ବ"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-orange-100 to-orange-200 h-96 flex items-center justify-center">
              <div className="text-center text-orange-600">
                <div className="text-6xl mb-4">🕉️</div>
                <p className="text-lg font-semibold">Sacred Temple Interior</p>
              </div>
            </div>
            {/* Floating decorative element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500 rounded-full opacity-80"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                {content[language].subtitle}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 leading-tight">
                {content[language].title}
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {content[language].description1}
              </p>
              
              <p>
                {content[language].description2}
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-orange-500">1000+</div>
                <div className="text-sm text-gray-600 mt-1">{content[language].stats.devotees}</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-orange-500">50+</div>
                <div className="text-sm text-gray-600 mt-1">{content[language].stats.years}</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-orange-500">12</div>
                <div className="text-sm text-gray-600 mt-1">{content[language].stats.festivals}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
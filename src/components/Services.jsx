import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock } from 'lucide-react'

export default function Services({ language }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const content = {
    en: {
      title: "Temple Services",
      subtitle: "Experience divine services and participate in sacred rituals that nurture your spiritual growth",
      specialSevaTitle: "Special Seva & Puja",
      specialSevaSubtitle: "Book personalized spiritual services for special occasions and divine blessings",
      templeTimingsTitle: "Temple Timings",
      dailySchedule: "Daily Schedule",
      specialTimings: "Special Timings",
      morningDarshan: "Morning Darshan",
      afternoonBreak: "Afternoon Break",
      eveningDarshan: "Evening Darshan",
      festivalDays: "Festival Days",
      mangalAarti: "Mangal Aarti",
      sandhyaAarti: "Sandhya Aarti",
      extendedHours: "Extended Hours",
      contactInfo: "Contact for More Information",
      bookNow: "Book Now",
      price: "Price:",
      duration: "Duration:",
      advanceBooking: "Advance booking required",
      free: "Free",
      donationBased: "Donation Based",
      byAppointment: "By Appointment",
      weekends: "Weekends"
    },
    hi: {
      title: "मंदिर सेवाएं",
      subtitle: "दिव्य सेवाओं का अनुभव करें और पवित्र अनुष्ठानों में भाग लें जो आपकी आध्यात्मिक वृद्धि का पोषण करते हैं",
      specialSevaTitle: "विशेष सेवा और पूजा",
      specialSevaSubtitle: "विशेष अवसरों और दिव्य आशीर्वाद के लिए व्यक्तिगत आध्यात्मिक सेवाएं बुक करें",
      templeTimingsTitle: "मंदिर का समय",
      dailySchedule: "दैनिक कार्यक्रम",
      specialTimings: "विशेष समय",
      morningDarshan: "प्रातः दर्शन",
      afternoonBreak: "दोपहर का विराम",
      eveningDarshan: "संध्या दर्शन",
      festivalDays: "त्योहार के दिन",
      mangalAarti: "मंगल आरती",
      sandhyaAarti: "संध्या आरती",
      extendedHours: "विस्तारित घंटे",
      contactInfo: "अधिक जानकारी के लिए संपर्क करें",
      bookNow: "अभी बुक करें",
      price: "मूल्य:",
      duration: "अवधि:",
      advanceBooking: "अग्रिम बुकिंग आवश्यक",
      free: "निःशुल्क",
      donationBased: "दान आधारित",
      byAppointment: "नियुक्ति द्वारा",
      weekends: "सप्ताहांत"
    },
    or: {
      title: "ମନ୍ଦିର ସେବା",
      subtitle: "ଦିବ୍ୟ ସେବା ଅନୁଭବ କରନ୍ତୁ ଏବଂ ପବିତ୍ର ରୀତିନୀତିରେ ଅଂଶଗ୍ରହଣ କରନ୍ତୁ ଯାହା ଆପଣଙ୍କ ଆଧ୍ୟାତ୍ମିକ ବୃଦ୍ଧିକୁ ପୋଷଣ କରେ",
      specialSevaTitle: "ବିଶେଷ ସେବା ଏବଂ ପୂଜା",
      specialSevaSubtitle: "ବିଶେଷ ଅବସର ଏବଂ ଦିବ୍ୟ ଆଶୀର୍ବାଦ ପାଇଁ ବ୍ୟକ୍ତିଗତ ଆଧ୍ୟାତ୍ମିକ ସେବା ବୁକ୍ କରନ୍ତୁ",
      templeTimingsTitle: "ମନ୍ଦିର ସମୟ",
      dailySchedule: "ଦୈନିକ କାର୍ଯ୍ୟସୂଚୀ",
      specialTimings: "ବିଶେଷ ସମୟ",
      morningDarshan: "ପ୍ରାତଃ ଦର୍ଶନ",
      afternoonBreak: "ଅପରାହ୍ନ ବିରତି",
      eveningDarshan: "ସନ୍ଧ୍ୟା ଦର୍ଶନ",
      festivalDays: "ପର୍ବ ଦିନ",
      mangalAarti: "ମଙ୍ଗଳ ଆରତି",
      sandhyaAarti: "ସନ୍ଧ୍ୟା ଆରତି",
      extendedHours: "ବିସ୍ତାରିତ ଘଣ୍ଟା",
      contactInfo: "ଅଧିକ ସୂଚନା ପାଇଁ ଯୋଗାଯୋଗ କରନ୍ତୁ",
      bookNow: "ବର୍ତ୍ତମାନ ବୁକ୍ କରନ୍ତୁ",
      price: "ମୂଲ୍ୟ:",
      duration: "ଅବଧି:",
      advanceBooking: "ଅଗ୍ରୀମ ବୁକିଂ ଆବଶ୍ୟକ",
      free: "ମାଗଣା",
      donationBased: "ଦାନ ଆଧାରିତ",
      byAppointment: "ନିଯୁକ୍ତି ଦ୍ୱାରା",
      weekends: "ସପ୍ତାହାନ୍ତ"
    }
  };

  const services = [
    {
      icon: '🧘‍♀️',
      title: {
        en: 'Meditation & Yoga',
        hi: 'ध्यान और योग',
        or: 'ଧ୍ୟାନ ଏବଂ ଯୋଗ'
      },
      description: {
        en: 'Daily meditation and yoga sessions for spiritual wellness',
        hi: 'आध्यात्मिक कल्याण के लिए दैनिक ध्यान और योग सत्र',
        or: 'ଆଧ୍ୟାତ୍ମିକ ସୁସ୍ଥତା ପାଇଁ ଦୈନିକ ଧ୍ୟାନ ଏବଂ ଯୋଗ ଅଧିବେଶନ'
      },
      features: {
        en: ['Morning Sessions', 'Expert Guidance', 'All Levels Welcome'],
        hi: ['प्रातःकालीन सत्र', 'विशेषज्ञ मार्गदर्शन', 'सभी स्तरों का स्वागत'],
        or: ['ପ୍ରାତଃକାଳୀନ ଅଧିବେଶନ', 'ବିଶେଷଜ୍ଞ ମାର୍ଗଦର୍ଶନ', 'ସମସ୍ତ ସ୍ତରର ସ୍ୱାଗତ']
      },
      timing: '6:00 AM - 7:00 AM',
      price: content[language].free
    },
    {
      icon: '📿',
      title: {
        en: 'Prayer Services',
        hi: 'प्रार्थना सेवाएं',
        or: 'ପ୍ରାର୍ଥନା ସେବା'
      },
      description: {
        en: 'Traditional prayer ceremonies and aarti',
        hi: 'पारंपरिक प्रार्थना समारोह और आरती',
        or: 'ପାରମ୍ପରିକ ପ୍ରାର୍ଥନା ସମାରୋହ ଏବଂ ଆରତି'
      },
      features: {
        en: ['Morning Aarti', 'Evening Aarti', 'Special Prayers'],
        hi: ['प्रातः आरती', 'संध्या आरती', 'विशेष प्रार्थनाएं'],
        or: ['ପ୍ରାତଃ ଆରତି', 'ସନ୍ଧ୍ୟା ଆରତି', 'ବିଶେଷ ପ୍ରାର୍ଥନା']
      },
      timing: '6:00 AM & 7:00 PM',
      price: content[language].free
    },
    {
      icon: '🕉️',
      title: {
        en: 'Spiritual Counseling',
        hi: 'आध्यात्मिक परामर्श',
        or: 'ଆଧ୍ୟାତ୍ମିକ ପରାମର୍ଶ'
      },
      description: {
        en: 'Personal guidance for your spiritual journey',
        hi: 'आपकी आध्यात्मिक यात्रा के लिए व्यक्तिगत मार्गदर्शन',
        or: 'ଆପଣଙ୍କ ଆଧ୍ୟାତ୍ମିକ ଯାତ୍ରା ପାଇଁ ବ୍ୟକ୍ତିଗତ ମାର୍ଗଦର୍ଶନ'
      },
      features: {
        en: ['One-on-One Sessions', 'Life Guidance', 'Spiritual Healing'],
        hi: ['व्यक्तिगत सत्र', 'जीवन मार्गदर्शन', 'आध्यात्मिक चिकित्सा'],
        or: ['ବ୍ୟକ୍ତିଗତ ଅଧିବେଶନ', 'ଜୀବନ ମାର୍ଗଦର୍ଶନ', 'ଆଧ୍ୟାତ୍ମିକ ଚିକିତ୍ସା']
      },
      timing: content[language].byAppointment,
      price: content[language].donationBased
    },
    {
      icon: '🏛️',
      title: {
        en: 'Temple Tours',
        hi: 'मंदिर भ्रमण',
        or: 'ମନ୍ଦିର ଭ୍ରମଣ'
      },
      description: {
        en: 'Guided tours of our sacred temple complex',
        hi: 'हमारे पवित्र मंदिर परिसर के निर्देशित भ्रमण',
        or: 'ଆମର ପବିତ୍ର ମନ୍ଦିର କମ୍ପ୍ଲେକ୍ସର ଗାଇଡ୍ ଟୁର୍'
      },
      features: {
        en: ['Historical Insights', 'Architectural Details', 'Cultural Learning'],
        hi: ['ऐतिहासिक अंतर्दृष्टि', 'स्थापत्य विवरण', 'सांस्कृतिक शिक्षा'],
        or: ['ଐତିହାସିକ ଅନ୍ତର୍ଦୃଷ୍ଟି', 'ସ୍ଥାପତ୍ୟ ବିବରଣୀ', 'ସାଂସ୍କୃତିକ ଶିକ୍ଷା']
      },
      timing: '9:00 AM - 5:00 PM',
      price: content[language].free
    },
    {
      icon: '🎭',
      title: {
        en: 'Cultural Programs',
        hi: 'सांस्कृतिक कार्यक्रम',
        or: 'ସାଂସ୍କୃତିକ କାର୍ଯ୍ୟକ୍ରମ'
      },
      description: {
        en: 'Traditional music, dance, and cultural events',
        hi: 'पारंपरिक संगीत, नृत्य और सांस्कृतिक कार्यक्रम',
        or: 'ପାରମ୍ପରିକ ସଙ୍ଗୀତ, ନୃତ୍ୟ ଏବଂ ସାଂସ୍କୃତିକ କାର୍ଯ୍ୟକ୍ରମ'
      },
      features: {
        en: ['Classical Music', 'Traditional Dance', 'Spiritual Discourses'],
        hi: ['शास्त्रीय संगीत', 'पारंपरिक नृत्य', 'आध्यात्मिक प्रवचन'],
        or: ['ଶାସ୍ତ୍ରୀୟ ସଙ୍ଗୀତ', 'ପାରମ୍ପରିକ ନୃତ୍ୟ', 'ଆଧ୍ୟାତ୍ମିକ ପ୍ରବଚନ']
      },
      timing: content[language].weekends,
      price: content[language].free
    },
    {
      icon: '🍽️',
      title: {
        en: 'Annadaan Seva',
        hi: 'अन्नदान सेवा',
        or: 'ଅନ୍ନଦାନ ସେବା'
      },
      description: {
        en: 'Free meals for devotees and the needy',
        hi: 'भक्तों और जरूरतमंदों के लिए मुफ्त भोजन',
        or: 'ଭକ୍ତ ଏବଂ ଅଭାବୀଙ୍କ ପାଇଁ ମାଗଣା ଭୋଜନ'
      },
      features: {
        en: ['Daily Meals', 'Festival Feasts', 'Community Service'],
        hi: ['दैनिक भोजन', 'त्योहारी भोज', 'सामुदायिक सेवा'],
        or: ['ଦୈନିକ ଭୋଜନ', 'ପର୍ବ ଭୋଜି', 'ସମ୍ପ୍ରଦାୟ ସେବା']
      },
      timing: '12:00 PM - 2:00 PM',
      price: content[language].free
    }
  ]

  const specialServices = [
    {
      name: {
        en: 'Abhishek Seva',
        hi: 'अभिषेक सेवा',
        or: 'ଅଭିଷେକ ସେବା'
      },
      description: {
        en: 'Sacred bathing ceremony of the deity',
        hi: 'देवता का पवित्र स्नान समारोह',
        or: 'ଦେବତାଙ୍କର ପବିତ୍ର ସ୍ନାନ ସମାରୋହ'
      },
      price: '₹501',
      duration: '30 minutes',
      booking: content[language].advanceBooking
    },
    {
      name: {
        en: 'Rudrabhishek',
        hi: 'रुद्राभिषेक',
        or: 'ରୁଦ୍ରାଭିଷେକ'
      },
      description: {
        en: 'Special prayers to Lord Shiva with Vedic mantras',
        hi: 'वैदिक मंत्रों के साथ भगवान शिव की विशेष प्रार्थना',
        or: 'ବେଦିକ ମନ୍ତ୍ର ସହିତ ଭଗବାନ ଶିବଙ୍କ ବିଶେଷ ପ୍ରାର୍ଥନା'
      },
      price: '₹1001',
      duration: '45 minutes',
      booking: content[language].advanceBooking
    },
    {
      name: {
        en: 'Mahamrityunjaya Jaap',
        hi: 'महामृत्युंजय जाप',
        or: 'ମହାମୃତ୍ୟୁଞ୍ଜୟ ଜାପ'
      },
      description: {
        en: 'Powerful healing mantra chanting for health and prosperity',
        hi: 'स्वास्थ्य और समृद्धि के लिए शक्तिशाली उपचार मंत्र जाप',
        or: 'ସ୍ୱାସ୍ଥ୍ୟ ଏବଂ ସମୃଦ୍ଧି ପାଇଁ ଶକ୍ତିଶାଳୀ ଉପଚାର ମନ୍ତ୍ର ଜାପ'
      },
      price: '₹2100',
      duration: '1 hour',
      booking: content[language].advanceBooking
    },
    {
      name: {
        en: 'Annakut Seva',
        hi: 'अन्नकूट सेवा',
        or: 'ଅନ୍ନକୂଟ ସେବା'
      },
      description: {
        en: 'Grand food offering to the deity with elaborate arrangements',
        hi: 'विस्तृत व्यवस्था के साथ देवता को भव्य भोजन अर्पण',
        or: 'ବିସ୍ତୃତ ବ୍ୟବସ୍ଥା ସହିତ ଦେବତାଙ୍କୁ ଭବ୍ୟ ଭୋଜନ ଅର୍ପଣ'
      },
      price: '₹5100',
      duration: '2 hours',
      booking: content[language].advanceBooking
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
            {content[language].title}
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-orange-600 to-orange-500 mx-auto mb-8"
          ></motion.div>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-medium">
            {content[language].subtitle}
          </p>
        </motion.div>

        {/* Regular Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100"
            >
              <div className="text-center mb-6">
                <motion.div 
                  className="text-6xl mb-4"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title[language]}</h3>
                <p className="text-gray-700 leading-relaxed mb-4 font-medium">{service.description[language]}</p>
              </div>
              
              <div className="space-y-3 mb-6">
                {service.features[language].map((feature, featureIndex) => (
                  <motion.div 
                    key={featureIndex} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: (index * 0.05) + (featureIndex * 0.05) }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mr-3"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    ></motion.div>
                    <span className="text-gray-800 text-sm font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="border-t border-gray-200 pt-4 space-y-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: (index * 0.05) + 0.15 }}
              >
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-4 h-4 mr-1 text-orange-500" />
                    <span className="font-medium">{service.timing}</span>
                  </div>
                  <span className="font-bold text-orange-500">{service.price}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Special Seva Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-3xl p-8 md:p-12 text-white mb-16"
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.h3 
              className="text-4xl font-bold mb-4"
              initial={{ scale: 0.8 }}
              animate={isInView ? { scale: 1 } : { scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              {content[language].specialSevaTitle}
            </motion.h3>
            <motion.p 
              className="text-xl opacity-95 max-w-2xl mx-auto font-medium"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.95 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {content[language].specialSevaSubtitle}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: 0.7 + (index * 0.05) }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/25 transition-all duration-300 border border-white/10"
              >
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + (index * 0.05) }}
                >
                  <h4 className="font-bold text-xl mb-2">{service.name[language]}</h4>
                  <p className="text-sm opacity-95 leading-relaxed font-medium">{service.description[language]}</p>
                </motion.div>
                
                <motion.div 
                  className="space-y-2 text-sm"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 + (index * 0.05) }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{content[language].price}</span>
                    <span className="font-bold text-lg">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{content[language].duration}</span>
                    <span className="font-medium">{service.duration}</span>
                  </div>
                  <div className="text-xs opacity-90 mt-3 font-medium">
                    {service.booking}
                  </div>
                </motion.div>
                
                <motion.button 
                  className="w-full mt-4 bg-white text-orange-500 px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 1 + (index * 0.05) }}
                >
                  {content[language].bookNow}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Hours */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto"
        >
          <motion.h3 
            className="text-3xl font-bold text-center text-gray-900 mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            {content[language].templeTimingsTitle}
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <motion.h4 
                className="text-xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                {content[language].dailySchedule}
              </motion.h4>
              <div className="space-y-3">
                <motion.div 
                  className="flex justify-between items-center py-2 border-b border-gray-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 1 }}
                >
                  <span className="font-bold text-gray-800">{content[language].morningDarshan}</span>
                  <span className="text-orange-500 font-bold">5:00 AM - 12:00 PM</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between items-center py-2 border-b border-gray-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 1.05 }}
                >
                  <span className="font-bold text-gray-800">{content[language].afternoonBreak}</span>
                  <span className="text-gray-600 font-bold">12:00 PM - 4:00 PM</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between items-center py-2 border-b border-gray-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 1.1 }}
                >
                  <span className="font-bold text-gray-800">{content[language].eveningDarshan}</span>
                  <span className="text-orange-500 font-bold">4:00 PM - 9:00 PM</span>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              <motion.h4 
                className="text-xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 1 }}
              >
                {content[language].specialTimings}
              </motion.h4>
              <div className="space-y-3">
                <motion.div 
                  className="flex justify-between items-center py-2 border-b border-gray-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 1.1 }}
                >
                  <span className="font-bold text-gray-800">{content[language].festivalDays}</span>
                  <span className="text-orange-500 font-bold">{content[language].extendedHours}</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between items-center py-2 border-b border-gray-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 1.15 }}
                >
                  <span className="font-bold text-gray-800">{content[language].mangalAarti}</span>
                  <span className="text-orange-500 font-bold">6:00 AM</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between items-center py-2 border-b border-gray-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 1.2 }}
                >
                  <span className="font-bold text-gray-800">{content[language].sandhyaAarti}</span>
                  <span className="text-orange-500 font-bold">7:00 PM</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 1.3 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {content[language].contactInfo}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
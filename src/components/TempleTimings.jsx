import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import templeImage from '../assets/int.png';

const TempleTimings = ({ language }) => {
  const content = {
    en: {
      title: "A Sacred Journey of Prayer and Worship",
      description: "At Dhabaleswar Temple, we understand that divine blessings should be available when you need them. Experience Divine Peace and Blessings throughout the week with our dedicated service hours.",
      timingsTitle: "Temple Timings",
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      times: ['5:00 am – 9:00 pm', '5:00 am – 9:00 pm', '5:00 am – 9:00 pm', '5:00 am – 9:00 pm', '5:00 am – 9:00 pm', '5:00 am – 9:00 pm', '4:00 am – 9:00 pm']
    },
    hi: {
      title: "प्रार्थना और पूजा की एक पवित्र यात्रा",
      description: "धाबलेश्वर मंदिर में, हम समझते हैं कि दिव्य आशीर्वाद तब उपलब्ध होना चाहिए जब आपको उनकी आवश्यकता हो। हमारे समर्पित सेवा घंटों के साथ सप्ताह भर दिव्य शांति और आशीर्वाद का अनुभव करें।",
      timingsTitle: "मंदिर का समय",
      days: ['सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार', 'रविवार'],
      times: ['सुबह 5:00 – रात 9:00', 'सुबह 5:00 – रात 9:00', 'सुबह 5:00 – रात 9:00', 'सुबह 5:00 – रात 9:00', 'सुबह 5:00 – रात 9:00', 'सुबह 5:00 – रात 9:00', 'सुबह 4:00 – रात 9:00']
    },
    or: {
      title: "ପ୍ରାର୍ଥନା ଏବଂ ପୂଜାର ଏକ ପବିତ୍ର ଯାତ୍ରା",
      description: "ଧାବଲେଶ୍ୱର ମନ୍ଦିରରେ, ଆମେ ବୁଝୁ ଯେ ଦିବ୍ୟ ଆଶୀର୍ବାଦ ଆପଣଙ୍କର ଆବଶ୍ୟକ ସମୟରେ ଉପଲବ୍ଧ ହେବା ଉଚିତ। ଆମର ସମର୍ପିତ ସେବା ଘଣ୍ଟା ସହିତ ସପ୍ତାହ ଭରିବା ଦିବ୍ୟ ଶାନ୍ତି ଏବଂ ଆଶୀର୍ବାଦ ଅନୁଭବ କରନ୍ତୁ।",
      timingsTitle: "ମନ୍ଦିର ସମୟ",
      days: ['ସୋମବାର', 'ମଙ୍ଗଳବାର', 'ବୁଧବାର', 'ଗୁରୁବାର', 'ଶୁକ୍ରବାର', 'ଶନିବାର', 'ରବିବାର'],
      times: ['ସକାଳ 5:00 – ରାତି 9:00', 'ସକାଳ 5:00 – ରାତି 9:00', 'ସକାଳ 5:00 – ରାତି 9:00', 'ସକାଳ 5:00 – ରାତି 9:00', 'ସକାଳ 5:00 – ରାତି 9:00', 'ସକାଳ 5:00 – ରାତି 9:00', 'ସକାଳ 4:00 – ରାତି 9:00']
    }
  };

  const timings = content[language].days.map((day, index) => ({
    day,
    time: content[language].times[index]
  }));

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                {content[language].title}
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              {content[language].description}
            </p>

            {/* Temple Timings Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{content[language].timingsTitle}</h3>
              </div>

              <div className="space-y-4">
                {timings.map((timing, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="font-medium text-gray-700">{timing.day}:</span>
                    <span className="text-orange-500 font-semibold">{timing.time}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -left-6 w-16 h-16 bg-orange-300 rounded-full opacity-30"
            />
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-orange-100 to-orange-200 h-96 flex items-center justify-center">
             
                <img 
                    src={templeImage} 
                    alt="Temple at night" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-8 -right-8 w-20 h-20 bg-orange-400 rounded-full opacity-70"
            />
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-400 rounded-full opacity-60"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TempleTimings;

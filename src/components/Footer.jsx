import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = ({ language }) => {
  const currentYear = new Date().getFullYear();
  
  const content = {
    en: {
      description: "A sacred sanctuary where tradition meets spiritual devotion, offering divine blessings and peaceful atmosphere.",
      quickLinks: "Quick Links",
      links: ['Home', 'About Us', 'Services', 'Festivals', 'Contact'],
      contactInfo: "Contact Info",
      address: "Gurujanga, Khurda, Odisha, India",
      phone: "+91 98765 43210",
      email: "info@dhabaleswar.org",
      templeTimings: "Temple Timings",
      hours1: "Mon - Sat: 5:00 AM - 9:00 PM",
      hours2: "Sunday: 4:00 AM - 9:00 PM",
      copyright: `© ${currentYear} Shiva Dhabaleswar Mandir. All rights reserved. | Designed with devotion`
    },
    hi: {
      description: "एक पवित्र अभयारण्य जहां परंपरा आध्यात्मिक भक्ति से मिलती है, दिव्य आशीर्वाद और शांतिपूर्ण वातावरण प्रदान करती है।",
      quickLinks: "त्वरित लिंक",
      links: ['होम', 'हमारे बारे में', 'सेवाएं', 'त्योहार', 'दान', 'संपर्क'],
      contactInfo: "संपर्क जानकारी",
      address: "गुरुजंगा, खुर्दा, ओडिशा, भारत",
      phone: "+91 98765 43210",
      email: "info@dhabaleswar.org",
      templeTimings: "मंदिर का समय",
      hours1: "सोम - शनि: सुबह 5:00 - रात 9:00",
      hours2: "रविवार: सुबह 4:00 - रात 9:00",
      copyright: `© ${currentYear} शिव धाबलेश्वर मंदिर। सभी अधिकार सुरक्षित। | भक्ति के साथ डिज़ाइन किया गया`
    },
    or: {
      description: "ଏକ ପବିତ୍ର ଅଭୟାରଣ୍ୟ ଯେଉଁଠାରେ ପରମ୍ପରା ଆଧ୍ୟାତ୍ମିକ ଭକ୍ତି ସହିତ ମିଶିଥାଏ, ଦିବ୍ୟ ଆଶୀର୍ବାଦ ଏବଂ ଶାନ୍ତିପୂର୍ଣ୍ଣ ପରିବେଶ ପ୍ରଦାନ କରେ।",
      quickLinks: "ଦ୍ରୁତ ଲିଙ୍କ",
      links: ['ହୋମ', 'ଆମ ବିଷୟରେ', 'ସେବା', 'ପର୍ବ', 'ଦାନ', 'ଯୋଗାଯୋଗ'],
      contactInfo: "ଯୋଗାଯୋଗ ସୂଚନା",
      address: "ଗୁରୁଜଙ୍ଗା, ଖୁର୍ଦ୍ଦା, ଓଡ଼ିଶା, ଭାରତ",
      phone: "+91 98765 43210",
      email: "info@dhabaleswar.org",
      templeTimings: "ମନ୍ଦିର ସମୟ",
      hours1: "ସୋମ - ଶନି: ସକାଳ 5:00 - ରାତି 9:00",
      hours2: "ରବିବାର: ସକାଳ 4:00 - ରାତି 9:00",
      copyright: `© ${currentYear} ଶିବ ଧାବଲେଶ୍ୱର ମନ୍ଦିର। ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ। | ଭକ୍ତି ସହିତ ଡିଜାଇନ୍ କରାଯାଇଛି`
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Temple Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">ॐ</span>
              </div>
              <span className="text-xl font-bold">Shiva Dhabaleswar Mandir</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {content[language].description}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">{content[language].quickLinks}</h3>
            <ul className="space-y-2">
              {content[language].links.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">{content[language].contactInfo}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                <span className="text-gray-400">{content[language].address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="text-gray-400">{content[language].phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <span className="text-gray-400">{content[language].email}</span>
              </div>
            </div>
          </motion.div>

          {/* Temple Timings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">{content[language].templeTimings}</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-orange-500" />
                <span className="text-gray-400">{content[language].hours1}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-orange-500" />
                <span className="text-gray-400">{content[language].hours2}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            {content[language].copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
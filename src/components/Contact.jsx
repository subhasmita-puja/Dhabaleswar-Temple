import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const Contact = ({ language }) => {
  const content = {
    en: {
      title: "Get in Touch",
      sendMessage: "Send us a Message",
      helpline: "Helpline",
      phone: "+91 93372 87145",
      available: "Available during temple hours",
      location: "Location",
      address1: "Gurujanga, Khurda",
      address2: "Mahanadi Island, Odisha",
      templeHours: "Temple Hours",
      hours1: "Mon-Sat: 5:00 AM - 9:00 PM",
      hours2: "Sunday: 4:00 AM - 9:00 PM",
      email: "Email",
      emailAddress: "info@dhabaleswarmandir.com",
      form: {
        fullName: "Full Name *",
        fullNamePlaceholder: "Your full name",
        emailAddress: "Email Address *",
        emailPlaceholder: "your.email@example.com",
        phoneNumber: "Phone Number",
        phonePlaceholder: "Your phone number",
        subject: "Subject",
        subjectPlaceholder: "What is this about?",
        message: "Message *",
        messagePlaceholder: "Your message...",
        sendMessage: "Send Message",
        newsletter: "Newsletter Signup"
      }
    },
    hi: {
      title: "संपर्क में रहें",
      sendMessage: "हमें संदेश भेजें",
      helpline: "हेल्पलाइन",
      phone: "+91 93372 87145",
      available: "मंदिर के घंटों के दौरान उपलब्ध",
      location: "स्थान",
      address1: "गुरुजंगा, खुर्दा",
      address2: "महानदी द्वीप, ओडिशा",
      templeHours: "मंदिर का समय",
      hours1: "सोम-शनि: सुबह 5:00 - रात 9:00",
      hours2: "रविवार: सुबह 4:00 - रात 9:00",
      email: "ईमेल",
      emailAddress: "info@dhabaleswarmandir.com",
      form: {
        fullName: "पूरा नाम *",
        fullNamePlaceholder: "आपका पूरा नाम",
        emailAddress: "ईमेल पता *",
        emailPlaceholder: "your.email@example.com",
        phoneNumber: "फोन नंबर",
        phonePlaceholder: "आपका फोन नंबर",
        subject: "विषय",
        subjectPlaceholder: "यह किस बारे में है?",
        message: "संदेश *",
        messagePlaceholder: "आपका संदेश...",
        sendMessage: "संदेश भेजें",
        newsletter: "न्यूज़लेटर साइनअप"
      }
    },
    or: {
      title: "ଯୋଗାଯୋଗ କରନ୍ତୁ",
      sendMessage: "ଆମକୁ ଏକ ସନ୍ଦେଶ ପଠାନ୍ତୁ",
      helpline: "ହେଲ୍ପଲାଇନ",
      phone: "+91 93372 87145",
      available: "ମନ୍ଦିର ସମୟରେ ଉପଲବ୍ଧ",
      location: "ସ୍ଥାନ",
      address1: "ଗୁରୁଜଙ୍ଗା, ଖୁର୍ଦ୍ଦା",
      address2: "ମହାନଦୀ ଦ୍ୱୀପ, ଓଡ଼ିଶା",
      templeHours: "ମନ୍ଦିର ସମୟ",
      hours1: "ସୋମ-ଶନି: ସକାଳ 5:00 - ରାତି 9:00",
      hours2: "ରବିବାର: ସକାଳ 4:00 - ରାତି 9:00",
      email: "ଇମେଲ",
      emailAddress: "info@dhabaleswarmandir.com",
      form: {
        fullName: "ପୂର୍ଣ୍ଣ ନାମ *",
        fullNamePlaceholder: "ଆପଣଙ୍କର ପୂର୍ଣ୍ଣ ନାମ",
        emailAddress: "ଇମେଲ ଠିକଣା *",
        emailPlaceholder: "your.email@example.com",
        phoneNumber: "ଫୋନ ନମ୍ବର",
        phonePlaceholder: "ଆପଣଙ୍କର ଫୋନ ନମ୍ବର",
        subject: "ବିଷୟ",
        subjectPlaceholder: "ଏହା କଣ ବିଷୟରେ?",
        message: "ସନ୍ଦେଶ *",
        messagePlaceholder: "ଆପଣଙ୍କର ସନ୍ଦେଶ...",
        sendMessage: "ସନ୍ଦେଶ ପଠାନ୍ତୁ",
        newsletter: "ନ୍ୟୁଜଲେଟର ସାଇନଅପ"
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                {content[language].title}
              </h2>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Helpline */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{content[language].helpline}</h3>
                  <p className="text-orange-500 font-semibold text-lg">{content[language].phone}</p>
                  <p className="text-gray-600 text-sm">{content[language].available}</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{content[language].location}</h3>
                  <p className="text-gray-700">{content[language].address1}</p>
                  <p className="text-gray-700">{content[language].address2}</p>
                </div>
              </div>

              {/* Temple Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{content[language].templeHours}</h3>
                  <p className="text-gray-700">{content[language].hours1}</p>
                  <p className="text-gray-700">{content[language].hours2}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{content[language].email}</h3>
                  <p className="text-gray-700">{content[language].emailAddress}</p>
                </div>
              </div>
            </div>

          
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {content[language].sendMessage}
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {content[language].form.fullName}
                  </label>
                  <input
                    type="text"
                    placeholder={content[language].form.fullNamePlaceholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    {content[language].form.emailAddress}
                  </label>
                  <input
                    type="email"
                    placeholder={content[language].form.emailPlaceholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {content[language].form.phoneNumber}
                </label>
                <input
                  type="tel"
                  placeholder={content[language].form.phonePlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {content[language].form.subject}
                </label>
                <input
                  type="text"
                  placeholder={content[language].form.subjectPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {content[language].form.message}
                </label>
                <textarea
                  rows="4"
                  placeholder={content[language].form.messagePlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                ></textarea>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  {content[language].form.sendMessage}
                </button>
                <button
                  type="button"
                  className="flex-1 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  {content[language].form.newsletter}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
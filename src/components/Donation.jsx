import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Heart, Shield } from 'lucide-react';

const Donation = ({ language }) => {
  const [selectedAmount, setSelectedAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState('');

  const content = {
    en: {
      subtitle: "DONATION",
      title: "Support Our Sacred Mission",
      makeTitle: "Make a Donation",
      selectAmount: "Select Donation Amount (₹)",
      customAmount: "Or Enter Custom Amount (₹)",
      customPlaceholder: "Enter amount",
      donationAmount: "Donation Amount:",
      donateNow: "Donate Now",
      securePayment: "Secure payment powered by trusted gateways",
      helpTitle: "How Your Donations Help",
      contributionTitle: "Your Contribution Matters",
      contributionText: "Every donation, no matter the size, helps us maintain the sacred traditions and serve our community better. Your generosity enables us to continue our spiritual mission and provide a peaceful sanctuary for all devotees.",
      purposes: [
        {
          title: 'Temple Maintenance',
          description: 'Upkeep of the sacred premises, cleaning, repairs, and infrastructure maintenance.'
        },
        {
          title: 'Daily Prayers',
          description: 'Supporting daily rituals, offerings, and spiritual ceremonies for devotees.'
        },
        {
          title: 'Community Service',
          description: 'Organizing festivals, feeding programs, and charitable activities for society.'
        }
      ]
    },
    hi: {
      subtitle: "दान",
      title: "हमारे पवित्र मिशन का समर्थन करें",
      makeTitle: "दान करें",
      selectAmount: "दान राशि चुनें (₹)",
      customAmount: "या कस्टम राशि दर्ज करें (₹)",
      customPlaceholder: "राशि दर्ज करें",
      donationAmount: "दान राशि:",
      donateNow: "अभी दान करें",
      securePayment: "विश्वसनीय गेटवे द्वारा संचालित सुरक्षित भुगतान",
      helpTitle: "आपका दान कैसे मदद करता है",
      contributionTitle: "आपका योगदान मायने रखता है",
      contributionText: "हर दान, चाहे वह कितना भी छोटा हो, हमें पवित्र परंपराओं को बनाए रखने और अपने समुदाय की बेहतर सेवा करने में मदद करता है। आपकी उदारता हमें अपने आध्यात्मिक मिशन को जारी रखने और सभी भक्तों के लिए एक शांतिपूर्ण अभयारण्य प्रदान करने में सक्षम बनाती है।",
      purposes: [
        {
          title: 'मंदिर रखरखाव',
          description: 'पवित्र परिसर का रखरखाव, सफाई, मरम्मत और बुनियादी ढांचे का रखरखाव।'
        },
        {
          title: 'दैनिक प्रार्थनाएं',
          description: 'भक्तों के लिए दैनिक अनुष्ठान, प्रसाद और आध्यात्मिक समारोहों का समर्थन।'
        },
        {
          title: 'सामुदायिक सेवा',
          description: 'समाज के लिए त्योहारों, भोजन कार्यक्रमों और धर्मार्थ गतिविधियों का आयोजन।'
        }
      ]
    },
    or: {
      subtitle: "ଦାନ",
      title: "ଆମର ପବିତ୍ର ମିଶନକୁ ସମର୍ଥନ କରନ୍ତୁ",
      makeTitle: "ଦାନ କରନ୍ତୁ",
      selectAmount: "ଦାନ ରାଶି ବାଛନ୍ତୁ (₹)",
      customAmount: "କିମ୍ବା କଷ୍ଟମ ରାଶି ପ୍ରବେଶ କରନ୍ତୁ (₹)",
      customPlaceholder: "ରାଶି ପ୍ରବେଶ କରନ୍ତୁ",
      donationAmount: "ଦାନ ରାଶି:",
      donateNow: "ବର୍ତ୍ତମାନ ଦାନ କରନ୍ତୁ",
      securePayment: "ବିଶ୍ୱସ୍ତ ଗେଟୱେ ଦ୍ୱାରା ଚାଳିତ ସୁରକ୍ଷିତ ଦେୟ",
      helpTitle: "ଆପଣଙ୍କ ଦାନ କିପରି ସାହାଯ୍ୟ କରେ",
      contributionTitle: "ଆପଣଙ୍କର ଅବଦାନ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ",
      contributionText: "ପ୍ରତ୍ୟେକ ଦାନ, ଯେତେ ଛୋଟ ହେଉନା କାହିଁକି, ଆମକୁ ପବିତ୍ର ପରମ୍ପରାଗୁଡ଼ିକୁ ବଜାୟ ରଖିବାରେ ଏବଂ ଆମର ସମ୍ପ୍ରଦାୟକୁ ଭଲ ସେବା କରିବାରେ ସାହାଯ୍ୟ କରେ। ଆପଣଙ୍କର ଉଦାରତା ଆମକୁ ଆମର ଆଧ୍ୟାତ୍ମିକ ମିଶନ ଜାରି ରଖିବାରେ ଏବଂ ସମସ୍ତ ଭକ୍ତଙ୍କ ପାଇଁ ଏକ ଶାନ୍ତିପୂର୍ଣ୍ଣ ଅଭୟାରଣ୍ୟ ପ୍ରଦାନ କରିବାରେ ସକ୍ଷମ କରେ।",
      purposes: [
        {
          title: 'ମନ୍ଦିର ରକ୍ଷଣାବେକ୍ଷଣ',
          description: 'ପବିତ୍ର ପରିସରର ରକ୍ଷଣାବେକ୍ଷଣ, ସଫାଇ, ମରାମତି ଏବଂ ଭିତ୍ତିଭୂମି ରକ୍ଷଣାବେକ୍ଷଣ।'
        },
        {
          title: 'ଦୈନିକ ପ୍ରାର୍ଥନା',
          description: 'ଭକ୍ତମାନଙ୍କ ପାଇଁ ଦୈନିକ ରୀତିନୀତି, ନୈବେଦ୍ୟ ଏବଂ ଆଧ୍ୟାତ୍ମିକ ସମାରୋହକୁ ସମର୍ଥନ କରିବା।'
        },
        {
          title: 'ସମ୍ପ୍ରଦାୟ ସେବା',
          description: 'ସମାଜ ପାଇଁ ପର୍ବ, ଖାଦ୍ୟ କାର୍ଯ୍ୟକ୍ରମ ଏବଂ ଦାନକାରୀ କାର୍ଯ୍ୟକଳାପ ଆୟୋଜନ କରିବା।'
        }
      ]
    }
  };

  const predefinedAmounts = [100, 250, 500, 1000, 2500, 5000];

  const donationPurposes = [
    { icon: CreditCard, color: 'bg-orange-500' },
    { icon: Heart, color: 'bg-orange-500' },
    { icon: Shield, color: 'bg-orange-500' }
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(0);
  };

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  return (
    <section className="py-20 bg-gray-50">
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {content[language].makeTitle}
            </h3>

            {/* Amount Selection */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-4">
                {content[language].selectAmount}
              </label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      selectedAmount === amount
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
                    }`}
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  {content[language].customAmount}
                </label>
                <input
                  type="number"
                  placeholder={content[language].customPlaceholder}
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Donation Summary */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">{content[language].donationAmount}</span>
                  <span className="text-2xl font-bold text-orange-500">₹{finalAmount}</span>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-400 rounded-full opacity-60"></div>
              </div>

              {/* Donate Button */}
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                <CreditCard className="w-5 h-5" />
                <span>{content[language].donateNow}</span>
              </button>

              {/* Security Note */}
              <div className="flex items-center justify-center mt-4 text-gray-600 text-sm">
                <Shield className="w-4 h-4 mr-2" />
                <span>{content[language].securePayment}</span>
              </div>
            </div>
          </motion.div>

          {/* How Donations Help */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-orange-500 mb-6">
                {content[language].helpTitle}
              </h3>
            </div>

            <div className="space-y-6">
              {content[language].purposes.map((purpose, index) => {
                const IconComponent = donationPurposes[index].icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className={`w-12 h-12 ${donationPurposes[index].color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        {purpose.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {purpose.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-orange-50 rounded-lg p-6 mt-8"
            >
              <h4 className="text-lg font-bold text-gray-800 mb-3">
                {content[language].contributionTitle}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {content[language].contributionText}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
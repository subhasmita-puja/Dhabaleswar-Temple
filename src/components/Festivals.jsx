import { useState } from 'react';
import { motion } from 'framer-motion';

const Festivals = ({ language }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const content = {
    en: {
      subtitle: "FESTIVALS",
      title: "Shiva Festival Celebrations",
      filterOptions: ['All', 'Bada Osha', 'Dola Purnima', 'Kartika Purnima', 'Mahashivaratri', 'Pausha Purnima'],
      festivals: [
        {
          id: 1,
          name: 'Bada Osha',
          description: 'A sacred festival dedicated to Lord Shiva with special prayers and offerings.',
          category: 'Bada Osha'
        },
        {
          id: 2,
          name: 'Mahashivaratri',
          description: 'The great night of Lord Shiva, celebrated with night-long vigils and prayers.',
          category: 'Mahashivaratri'
        },
        {
          id: 3,
          name: 'Kartika Purnima',
          description: 'A holy festival celebrated during the full moon of Kartika month.',
          category: 'Kartika Purnima'
        },
        {
          id: 4,
          name: 'Dola Purnima',
          description: 'Festival of colors celebrating the divine love of Lord Krishna.',
          category: 'Dola Purnima'
        },
        {
          id: 5,
          name: 'Pausha Purnima',
          description: 'Sacred festival observed during the full moon of Pausha month.',
          category: 'Pausha Purnima'
        }
      ]
    },
    hi: {
      subtitle: "त्योहार",
      title: "शिव त्योहार समारोह",
      filterOptions: ['सभी', 'बड़ा ओशा', 'डोला पूर्णिमा', 'कार्तिक पूर्णिमा', 'महाशिवरात्रि', 'पौष पूर्णिमा'],
      festivals: [
        {
          id: 1,
          name: 'बड़ा ओशा',
          description: 'भगवान शिव को समर्पित एक पवित्र त्योहार जिसमें विशेष प्रार्थनाएं और प्रसाद शामिल हैं।',
          category: 'Bada Osha'
        },
        {
          id: 2,
          name: 'महाशिवरात्रि',
          description: 'भगवान शिव की महान रात्रि, जो रात भर जागरण और प्रार्थनाओं के साथ मनाई जाती है।',
          category: 'Mahashivaratri'
        },
        {
          id: 3,
          name: 'कार्तिक पूर्णिमा',
          description: 'कार्तिक महीने की पूर्णिमा के दौरान मनाया जाने वाला एक पवित्र त्योहार।',
          category: 'Kartika Purnima'
        },
        {
          id: 4,
          name: 'डोला पूर्णिमा',
          description: 'भगवान कृष्ण के दिव्य प्रेम का जश्न मनाने वाला रंगों का त्योहार।',
          category: 'Dola Purnima'
        },
        {
          id: 5,
          name: 'पौष पूर्णिमा',
          description: 'पौष महीने की पूर्णिमा के दौरान मनाया जाने वाला पवित्र त्योहार।',
          category: 'Pausha Purnima'
        }
      ]
    },
    or: {
      subtitle: "ପର୍ବ",
      title: "ଶିବ ପର୍ବ ଉତ୍ସବ",
      filterOptions: ['ସବୁ', 'ବଡ଼ ଓଶା', 'ଦୋଳ ପୂର୍ଣ୍ଣିମା', 'କାର୍ତ୍ତିକ ପୂର୍ଣ୍ଣିମା', 'ମହାଶିବରାତ୍ରି', 'ପୌଷ ପୂର୍ଣ୍ଣିମା'],
      festivals: [
        {
          id: 1,
          name: 'ବଡ଼ ଓଶା',
          description: 'ବିଶେଷ ପ୍ରାର୍ଥନା ଏବଂ ନୈବେଦ୍ୟ ସହିତ ଭଗବାନ ଶିବଙ୍କୁ ସମର୍ପିତ ଏକ ପବିତ୍ର ପର୍ବ।',
          category: 'Bada Osha'
        },
        {
          id: 2,
          name: 'ମହାଶିବରାତ୍ରି',
          description: 'ଭଗବାନ ଶିବଙ୍କ ମହାନ ରାତ୍ରି, ରାତିସାରା ଜାଗରଣ ଏବଂ ପ୍ରାର୍ଥନା ସହିତ ପାଳିତ ହୁଏ।',
          category: 'Mahashivaratri'
        },
        {
          id: 3,
          name: 'କାର୍ତ୍ତିକ ପୂର୍ଣ୍ଣିମା',
          description: 'କାର୍ତ୍ତିକ ମାସର ପୂର୍ଣ୍ଣିମା ସମୟରେ ପାଳିତ ଏକ ପବିତ୍ର ପର୍ବ।',
          category: 'Kartika Purnima'
        },
        {
          id: 4,
          name: 'ଦୋଳ ପୂର୍ଣ୍ଣିମା',
          description: 'ଭଗବାନ କୃଷ୍ଣଙ୍କ ଦିବ୍ୟ ପ୍ରେମକୁ ପାଳନ କରୁଥିବା ରଙ୍ଗର ପର୍ବ।',
          category: 'Dola Purnima'
        },
        {
          id: 5,
          name: 'ପୌଷ ପୂର୍ଣ୍ଣିମା',
          description: 'ପୌଷ ମାସର ପୂର୍ଣ୍ଣିମା ସମୟରେ ପାଳିତ ପବିତ୍ର ପର୍ବ।',
          category: 'Pausha Purnima'
        }
      ]
    }
  };

  const filteredFestivals = activeFilter === 'All' || activeFilter === 'সবু' || activeFilter === 'सभी'
    ? content[language].festivals 
    : content[language].festivals.filter(festival => festival.category === activeFilter);

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

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {content[language].filterOptions.map((filter, index) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(index === 0 ? 'All' : content.en.filterOptions[index])}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                (activeFilter === 'All' && index === 0) || 
                (activeFilter === content.en.filterOptions[index])
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-orange-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

       

        {/* Festivals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFestivals.map((festival, index) => (
            <motion.div
              key={festival.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                  <div className="text-center text-orange-600">
                    <div className="text-4xl mb-2">🕉️</div>
                    <p className="text-sm font-semibold">Festival Image</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {festival.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {festival.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Festivals;
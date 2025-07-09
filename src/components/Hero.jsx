import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import shiva from '../assets/shiva-hero.png';
import shivaHero2 from '../assets/shiva-hero2.png';

const Hero = ({ language, setLanguage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      backgroundImage: shiva,
      title: {
        en: 'Harr Harr Mahadev',
        hi: 'हर हर महादेव',
        or: 'ହର ହର ମହାଦେବ'
      },
      subtitle: {
        en: 'Surrender to the cosmic energy of Mahadev, where spiritual transformation and divine grace await every soul seeking enlightenment.',
        hi: 'महादेव की ब्रह्मांडीय ऊर्जा के सामने समर्पण करें, जहां आध्यात्मिक परिवर्तन और दिव्य कृपा हर आत्मा का इंतजार करती है।',
        or: 'ମହାଦେବଙ୍କ ବ୍ରହ୍ମାଣ୍ଡୀୟ ଶକ୍ତିରେ ସମର୍ପଣ କରନ୍ତୁ, ଯେଉଁଠାରେ ଆଧ୍ୟାତ୍ମିକ ପରିବର୍ତ୍ତନ ଏବଂ ଦିବ୍ୟ କୃପା ପ୍ରତ୍ୟେକ ଆତ୍ମାକୁ ଅପେକ୍ଷା କରିଥାଏ।'
      },
      buttons: {
        about: {
          en: 'ABOUT TEMPLE',
          hi: 'मंदिर के बारे में',
          or: 'ମନ୍ଦିର ବିଷୟରେ'
        },
        visit: {
          en: 'VISIT US',
          hi: 'हमसे मिलें',
          or: 'ଆମକୁ ଦେଖନ୍ତୁ'
        }
      }
    },
    {
      backgroundImage: shivaHero2,
      title: {
        en: '|| Omm Namah Shivay ||',
        hi: '|| ॐ नमः शिवाय ||',
        or: '|| ॐ ନମଃ ଶିବାୟ ||'
      },
      subtitle: {
        en: 'Experience the divine presence of Lord Shiva at Dhabaleswar Temple, where the sacred trishul and Om embrace every devotee with eternal blessings.',
        hi: 'धाबलेश्वर मंदिर में भगवान शिव की दिव्य उपस्थिति का अनुभव करें, जहां पवित्र त्रिशूल और ॐ हर भक्त को शाश्वत आशीर्वाद देते हैं।',
        or: 'ଧାବଲେଶ୍ୱର ମନ୍ଦିରରେ ଭଗବାନ ଶିବଙ୍କ ଦିବ୍ୟ ଉପସ୍ଥିତି ଅନୁଭବ କରନ୍ତୁ, ଯେଉଁଠାରେ ପବିତ୍ର ତ୍ରିଶୂଳ ଏବଂ ଓଁ ପ୍ରତ୍ୟେକ ଭକ୍ତଙ୍କୁ ଅନନ୍ତ ଆଶୀର୍ବାଦ ଦେଇଥାଏ।'
      },
      buttons: {
        about: {
          en: 'ABOUT TEMPLE',
          hi: 'मंदिर के बारे में',
          or: 'ମନ୍ଦିର ବିଷୟରେ'
        },
        visit: {
          en: 'VISIT US',
          hi: 'हमसे मिलें',
          or: 'ଆମକୁ ଦେଖନ୍ତୁ'
        }
      }
    }
  ];

  // 3D floating elements
  const floatingElements = [
    { id: 1, shape: 'circle', color: '#ff6b35', size: 60, x: 10, y: 20 },
    { id: 2, shape: 'diamond', color: '#f7931e', size: 40, x: 85, y: 15 },
    { id: 3, shape: 'triangle', color: '#ffb347', size: 50, x: 15, y: 70 },
    { id: 4, shape: 'hexagon', color: '#ffd700', size: 35, x: 80, y: 75 },
    { id: 5, shape: 'square', color: '#ff8c42', size: 45, x: 50, y: 10 },
    { id: 6, shape: 'circle', color: '#ff8c42', size: 35, x: 90, y: 50 },
    { id: 7, shape: 'diamond', color: '#ffb347', size: 30, x: 5, y: 50 }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getShapeClasses = (shape) => {
    switch (shape) {
      case 'circle':
        return 'rounded-full';
      case 'diamond':
        return 'transform rotate-45';
      case 'triangle':
        return 'clip-triangle';
      case 'hexagon':
        return 'clip-hexagon';
      default:
        return '';
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image - Full Display */}
      <div className="absolute inset-0">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={slides[currentSlide].backgroundImage}
            alt="Shiva Background"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        {/* Light overlay for text readability only */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* 3D Floating Elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute pointer-events-none opacity-60 shadow-lg ${getShapeClasses(element.shape)}`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: element.size,
            height: element.size,
            backgroundColor: element.color,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + element.id,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <motion.h1
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl"
            style={{ fontFamily: 'serif', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            {slides[currentSlide].title[language]}
          </motion.h1>
          
          <motion.p
            key={`${currentSlide}-subtitle`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-lg"
            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}
          >
            {slides[currentSlide].subtitle[language]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={scrollToAbout}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl backdrop-blur-sm"
            >
              {slides[currentSlide].buttons.about[language]}
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10"
            >
              {slides[currentSlide].buttons.visit[language]}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-20 backdrop-blur-sm"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-20 backdrop-blur-sm"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
              index === currentSlide ? 'bg-orange-500' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
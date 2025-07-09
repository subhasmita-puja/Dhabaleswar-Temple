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

  // Responsive floating elements - fewer on mobile
  const floatingElements = [
    { id: 1, shape: 'circle', color: '#ff6b35', size: { mobile: 30, tablet: 45, desktop: 60 }, x: 10, y: 20, hideOnMobile: false },
    { id: 2, shape: 'diamond', color: '#f7931e', size: { mobile: 25, tablet: 35, desktop: 40 }, x: 85, y: 15, hideOnMobile: false },
    { id: 3, shape: 'triangle', color: '#ffb347', size: { mobile: 30, tablet: 40, desktop: 50 }, x: 15, y: 70, hideOnMobile: true },
    { id: 4, shape: 'hexagon', color: '#ffd700', size: { mobile: 20, tablet: 30, desktop: 35 }, x: 80, y: 75, hideOnMobile: false },
    { id: 5, shape: 'square', color: '#ff8c42', size: { mobile: 25, tablet: 35, desktop: 45 }, x: 50, y: 10, hideOnMobile: true },
    { id: 6, shape: 'circle', color: '#ff8c42', size: { mobile: 20, tablet: 30, desktop: 35 }, x: 90, y: 50, hideOnMobile: true },
    { id: 7, shape: 'diamond', color: '#ffb347', size: { mobile: 18, tablet: 25, desktop: 30 }, x: 5, y: 50, hideOnMobile: true }
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

  const getResponsiveSize = (element) => {
    // Default to mobile size, will be overridden by CSS classes
    return element.size.mobile;
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background Image - Fully Responsive */}
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
        {/* Responsive overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 sm:bg-black/30"></div>
      </div>

      {/* 3D Floating Elements - Responsive */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute pointer-events-none opacity-60 shadow-lg ${getShapeClasses(element.shape)} 
            ${element.hideOnMobile ? 'hidden sm:block' : 'block'}
            w-[${element.size.mobile}px] h-[${element.size.mobile}px]
            sm:w-[${element.size.tablet}px] sm:h-[${element.size.tablet}px]
            lg:w-[${element.size.desktop}px] lg:h-[${element.size.desktop}px]
          `}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: getResponsiveSize(element),
            height: getResponsiveSize(element),
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

      {/* Content - Fully Responsive */}
      <div className="relative z-10 h-full flex items-center justify-center pt-16 sm:pt-0">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          <motion.h1
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-2xl"
            style={{ 
              fontFamily: 'serif', 
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
              lineHeight: '1.1'
            }}
          >
            {slides[currentSlide].title[language]}
          </motion.h1>
          
          <motion.p
            key={`${currentSlide}-subtitle`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 leading-relaxed max-w-full mx-auto drop-shadow-lg"
            style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
          >
            {slides[currentSlide].subtitle[language]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <button 
              onClick={scrollToAbout}
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl backdrop-blur-sm text-sm sm:text-base"
            >
              {slides[currentSlide].buttons.about[language]}
            </button>
            <button 
              onClick={scrollToContact}
              className="w-full sm:w-auto border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10 text-sm sm:text-base"
            >
              {slides[currentSlide].buttons.visit[language]}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows - Responsive */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 z-20 backdrop-blur-sm"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 z-20 backdrop-blur-sm"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Slide Indicators - Responsive */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 backdrop-blur-sm ${
              index === currentSlide ? 'bg-orange-500' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
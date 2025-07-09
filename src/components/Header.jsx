import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = {
    en: 'English',
    hi: 'हिंदी',
    or: 'ଓଡ଼ିଆ'
  };

  const menuItems = {
    en: ['HOME', 'ABOUT US', 'SERVICES', 'FESTIVALS', 'CONTACT'],
    hi: ['होम', 'हमारे बारे में', 'सेवाएं', 'त्योहार', 'दान', 'संपर्क'],
    or: ['ହୋମ', 'ଆମ ବିଷୟରେ', 'ସେବା', 'ପର୍ବ', 'ଦାନ', 'ଯୋଗାଯୋଗ']
  };

  const sectionIds = ['hero', 'about', 'services', 'festivals', 'contact'];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

    return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Mobile First Design */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg sm:text-xl">ॐ</span>
            </div>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-600 truncate max-w-[140px] sm:max-w-[200px] lg:max-w-none">
              Shiva Dhabaleswar Mandir
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems[language].map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(sectionIds[index])}
                className="text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 text-base xl:text-lg whitespace-nowrap relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Right Side - Language & Mobile Menu */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="appearance-none bg-white border-2 border-orange-500 rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent cursor-pointer min-w-[70px] sm:min-w-[90px] font-medium text-orange-600"
              >
                {Object.entries(languages).map(([code, name]) => (
                  <option key={code} value={code} className="text-gray-700">{name}</option>
                ))}
              </select>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors duration-300 rounded-lg hover:bg-orange-50 relative z-50"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={toggleMenu}
          style={{ top: '64px' }}
        />

        {/* Mobile Navigation Menu */}
        <div 
          className={`lg:hidden absolute left-0 right-0 bg-white shadow-2xl transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
          }`}
          style={{ top: '100%' }}
        >
          <nav className="py-4">
            <div className="flex flex-col">
              {menuItems[language].map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(sectionIds[index])}
                  className="text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 text-left py-4 px-6 hover:bg-orange-50 border-b border-gray-100 last:border-b-0 text-lg relative group"
                >
                  <span className="relative z-10">{item}</span>
                  <div className="absolute left-0 top-0 w-0 h-full bg-orange-100 transition-all duration-300 group-hover:w-full"></div>
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
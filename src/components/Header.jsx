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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">ॐ</span>
            </div>
            <span className="text-xl font-bold text-orange-500">Shiva Dhabaleswar Mandir</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300"
            >
              {menuItems[language][0]}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300"
            >
              {menuItems[language][1]}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300"
            >
              {menuItems[language][2]}
            </button>
            <button
              onClick={() => scrollToSection('festivals')}
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300"
            >
              {menuItems[language][3]}
            </button>
           
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300"
            >
              {menuItems[language][5]}
            </button>
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="appearance-none bg-transparent border border-orange-500 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {Object.entries(languages).map(([code, name]) => (
                  <option key={code} value={code}>{name}</option>
                ))}
              </select>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-orange-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300 text-left"
              >
                {menuItems[language][0]}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300 text-left"
              >
                {menuItems[language][1]}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300 text-left"
              >
                {menuItems[language][2]}
              </button>
              <button
                onClick={() => scrollToSection('festivals')}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300 text-left"
              >
                {menuItems[language][3]}
              </button>
              <button
                onClick={() => scrollToSection('donation')}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300 text-left"
              >
                {menuItems[language][4]}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300 text-left"
              >
                {menuItems[language][5]}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
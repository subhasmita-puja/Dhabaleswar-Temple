import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TempleTimings from './components/TempleTimings';
import Festivals from './components/Festivals';
import Testimonials from './components/Testimonials';
import MouseFollower from './components/MouseFollower';
import Donation from './components/Donation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <div className="App">
       <MouseFollower />
      <Header language={language} setLanguage={setLanguage} />
      <div id="hero">
        <Hero language={language} setLanguage={setLanguage} />
      </div>
      <About language={language} />
      <Services language={language} />
      <TempleTimings language={language} />
      <div id="festivals">
        <Festivals language={language} />
      </div>
      <Testimonials language={language} />
      <div id="donation">
        <Donation language={language} />
      </div>
      <div id="contact">
        <Contact language={language} />
      </div>
      <Footer language={language} />
    </div>
  );
}

export default App;
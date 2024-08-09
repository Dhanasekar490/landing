import React from 'react';
import Header from './components/header';
import HeroSection from './components/herosection';
import FeaturesSection from './components/featuresection';
import TestimonialsSection from './components/TestimonialsSection';

import Footer from './components/footer';
import './components/styles.css';

const App = () => (
  <div>
    <Header />
    <HeroSection />
    <FeaturesSection />
    <TestimonialsSection />
    
    <Footer />
  </div>
);

export default App;

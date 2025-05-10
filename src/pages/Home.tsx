import React from 'react';
import Hero from '../components/home/Hero';
import ShapeSelector from '../components/home/ShapeSelector';
import FeaturesSection from '../components/home/FeaturesSection';
import InstagramGallery from '../components/home/InstagramGallery';
import FAQ from '../components/home/FAQ';
import Testimonials from '../components/home/Testimonials';
import OtherServices from '../components/home/OtherServices';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <Hero />
      <ShapeSelector />
      <FeaturesSection />
      <InstagramGallery />
      <FAQ />
      <Testimonials />
      <OtherServices />
    </div>
  );
};

export default Home;
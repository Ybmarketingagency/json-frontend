import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen">
      {/* Background image container */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed hidden md:block"
        style={{ 
          backgroundImage: 'url(https://imgur.com/OyyDqUp.jpg)',
          backgroundPosition: 'center',
          height: '100vh',
          maxHeight: '100vh'
        }}
      />
      
      {/* Mobile-optimized image */}
      <div className="absolute inset-0 md:hidden">
        <picture>
          <source
            srcSet="https://imgur.com/ajiQmjU.jpg"
            media="(max-width: 768px)"
          />
          <img 
            src="https://imgur.com/8A2boqI.jpg"
            alt="Hero background"
            className="w-full h-screen object-cover"
            style={{ objectPosition: 'center 40%' }}
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      </div>
      
      {/* Overlay with stronger gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl md:whitespace-nowrap">
          Spiegels op maat voor elk interieur
        </h1>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramGallery: React.FC = () => {
  const images = [
    'https://imgur.com/pA5ysrB.jpg',
    'https://imgur.com/by1q2Pq.jpg',
    'https://imgur.com/6sWkNG4.jpg',
    'https://imgur.com/t2q8gTS.jpg',
    'https://imgur.com/VJD0pUA.jpg',
    'https://imgur.com/n87WvVs.jpg'
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#f0ece5' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Onze Projecten
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bekijk onze laatste projecten en laat u inspireren
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <a
              key={index}
              href="https://www.instagram.com/beneluxspiegel/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group aspect-square overflow-hidden rounded-lg shadow-sm"
            >
              <img
                src={image}
                alt={`Instagram foto ${index + 1}`}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="text-white" size={32} strokeWidth={1.5} />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Volg ons op Instagram voor dagelijkse inspiratie, exclusieve aanbiedingen en een kijkje achter de schermen bij onze projecten.
          </p>
          <a
            href="https://www.instagram.com/beneluxspiegel/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-10 py-4 rounded-full hover:bg-gray-900 transition-all duration-300"
          >
            <span className="font-medium">Volg ons op Instagram</span>
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { mirrorShapes } from '../../data/mirrors';

const ShapeSelector: React.FC = () => {
  const mirrors = mirrorShapes;

  return (
    <div className="py-16 bg-[#f0ece5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kies Uw Perfecte Vorm
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Selecteer hieronder de gewenste vorm en configureer uw spiegel op maat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {mirrors.map((shape) => (
            <Link 
              key={shape.id}
              to={`/custom/${shape.slug}`}
              state={{ from: '/spiegels' }}
              className="group relative transition-transform hover:scale-105 flex flex-col bg-[#f0ece5]"
            >
              <div className="aspect-square bg-[#f0ece5]">
                <img 
                  src={shape.image} 
                  alt={shape.name} 
                  className="object-contain w-full h-full"
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-gray-900 font-medium text-lg min-h-[3.5rem]">{shape.name}</h3>
                <p className="text-gray-500 text-sm">
                  vanaf €{shape.startingPrice.toFixed(2)}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-black font-medium group-hover:underline transition-colors flex items-center gap-1">
                    Configureer <ChevronRight size={16} />
                  </span>
                  <span className="bg-gray-100 text-black text-xs font-medium px-2.5 py-0.5 rounded">
                    Op maat
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShapeSelector;
import React from 'react';
import { Truck, Shield, Package } from 'lucide-react';
import { MirrorShape } from '../../types';

interface MirrorPreviewProps {
  shape: MirrorShape;
}

const MirrorPreview: React.FC<MirrorPreviewProps> = ({ shape }) => {
  return (
    <div style={{ backgroundColor: '#f0ece5' }} className="p-8 rounded-xl">
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
      
      <h1 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{shape.name}</h1>
      <p className="text-gray-600 mb-8">{shape.description}</p>
      
      {/* Desktop specs */}
      <div className="hidden lg:block">
        <div style={{ backgroundColor: '#f0ece5' }} className="p-4 rounded-lg mb-8">
          <h3 className="font-semibold text-gray-800 mb-3">Productspecificaties</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Minder dan 0,1% lood</li>
            <li>• Geen koper en geen formaldehyde</li>
            <li>• 70% minder oplosmiddelen t.o.v. MNGE</li>
            <li>• 10x beter tegen corrosie bestand dan de norm EN 1036</li>
            <li>• 3x krasbestendiger dan traditionele spiegels</li>
            <li>• 2x meer compatibele kleefproducten</li>
            <li>• Bestand tegen chemische reacties op schoonmaakproducten</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 text-lg mb-6">Levering & garantie</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Truck className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-gray-800">Bezorging binnen 3 dagen</p>
                <p className="text-sm text-gray-600">Binnen Nederland.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-gray-800">3 jaar garantie</p>
                <p className="text-sm text-gray-600">Op fabricage- en materiaalfouten.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Package className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-gray-800">Zorgvuldig verpakt</p>
                <p className="text-sm text-gray-600">Uw spiegel wordt speciaal verpakt om transportschade te voorkomen.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MirrorPreview;
import React from 'react';
import { Check, PenTool as Tools, Truck, Shield, Package } from 'lucide-react';
import { MirrorDimensions, MirrorOptions as MirrorOptionsType } from '../../types';

interface MirrorSummaryProps {
  dimensions: MirrorDimensions;
  options: MirrorOptionsType;
  setOptions: (options: MirrorOptionsType) => void;
  calculatePrice: () => string;
  showSuccess: boolean;
  onAddToCart: () => void;
  disableAddToCart?: boolean;
}

const MirrorSummary: React.FC<MirrorSummaryProps> = ({
  dimensions,
  options,
  setOptions,
  calculatePrice,
  showSuccess,
  onAddToCart,
  disableAddToCart
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-50 p-6 rounded-xl">
        <div className="flex justify-between mb-4">
          <span className="text-gray-700">Afmetingen:</span>
          <span className="font-medium">{dimensions.width} × {dimensions.height} mm</span>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Aantal:
          </label>
          <div className="flex items-center">
            <button 
              onClick={() => setOptions({ ...options, quantity: Math.max(1, options.quantity - 1) })}
              className="w-8 h-8 flex items-center justify-center border rounded-l-lg text-gray-500 hover:bg-gray-50"
              type="button"
            >
              -
            </button>
            <input
              type="number"
              min="1"
              value={options.quantity}
              onChange={(e) => setOptions({ ...options, quantity: Math.max(1, parseInt(e.target.value) || 1) })}
              className="w-20 h-8 text-center border-y border-gray-200"
            />
            <button 
              onClick={() => setOptions({ ...options, quantity: options.quantity + 1 })}
              className="w-8 h-8 flex items-center justify-center border rounded-r-lg text-gray-500 hover:bg-gray-50"
              type="button"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex justify-between mb-6">
          <span className="text-gray-700">Prijs:</span>
          <div className="text-right">
            <span className="text-xl font-bold text-black">
              €{(Number(calculatePrice()) * options.quantity).toFixed(2)}
            </span>
            {options.quantity > 1 && (
              <span className="block text-sm text-gray-500">
                (€{calculatePrice()} per stuk)
              </span>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-center bg-gray-100 text-black p-3 rounded-lg mb-6">
          <Tools size={20} className="mr-2" />
          <span>Inclusief professionele montage</span>
        </div>
        
        <button
          onClick={onAddToCart}
          disabled={disableAddToCart}
          className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-colors flex items-center justify-center
            ${showSuccess 
              ? 'bg-green-600 hover:bg-green-700' 
              : disableAddToCart
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-black hover:bg-gray-900'
            }`}
        >
          {showSuccess ? (
            <>
              <Check size={20} className="mr-2" /> Toegevoegd aan winkelwagen
            </>
          ) : (
            'In winkelwagen'
          )}
        </button>
      </div>

      {/* Mobile specs */}
      <div style={{ backgroundColor: '#f0ece5' }} className="lg:hidden rounded-xl p-6 space-y-8">
        <div>
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

export default MirrorSummary;
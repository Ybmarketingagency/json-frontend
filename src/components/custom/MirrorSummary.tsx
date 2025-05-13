import React from 'react';
import { Check, PenTool as Tools } from 'lucide-react';
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
  const basePrice = Number(calculatePrice());
  const deliveryCost = options.delivery === 'delivery' ? 20 : 0;
  const totalPrice = basePrice + (options.delivery === 'delivery' ? deliveryCost : 0);

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

        <div className="space-y-2 border-t pt-4 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Prijs per stuk:</span>
            <span className="font-medium">€{basePrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Bezorgkosten:</span>
            <span className="font-medium">€{deliveryCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold pt-2 border-t">
            <span>Totaal (incl. BTW):</span>
            <div className="text-right">
              <span className="block">€{(totalPrice * options.quantity).toFixed(2)}</span>
              {options.quantity > 1 && (
                <span className="block text-sm text-gray-500">
                  (€{totalPrice.toFixed(2)} per stuk)
                </span>
              )}
            </div>
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
    </div>
  );
};

export default MirrorSummary;
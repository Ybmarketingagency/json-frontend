import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PaymentMethodProps {
  onSubmit: (method: 'ideal') => void;
  amount: number;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ onSubmit, amount }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <button 
        onClick={() => window.history.back()}
        className="text-gray-600 hover:text-gray-900 flex items-center mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Terug naar verzendgegevens
      </button>

      <h1 className="text-2xl font-semibold mb-6">Betaalmethode</h1>

      <div className="space-y-4 mb-8">
        <div className="border rounded-lg p-4 cursor-pointer border-black hover:border-black">
          <div className="flex items-center"> 
            <input
              type="radio"
              id="ideal"
              name="payment"
              className="h-4 w-4 accent-black"
              checked={true}
              readOnly
            />
            <label htmlFor="ideal" className="ml-3 flex items-center">
              <img 
                src="https://imgur.com/sUYSL39.jpg" 
                alt="iDEAL" 
                className="h-8 mr-3"
              />
              <span className="font-medium">iDEAL</span>
            </label>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <div className="flex justify-between text-lg font-semibold mb-8">
          <span>Totaal te betalen</span>
          <span>€{amount.toFixed(2)}</span>
        </div>

        <button
          onClick={() => onSubmit('ideal')}
          className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-900 transition-colors"
        >
          Betalen
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
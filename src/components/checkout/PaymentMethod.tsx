import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface PaymentMethodProps {
  onSubmit: (method: 'ideal' | 'creditcard') => void;
  amount: number;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ onSubmit, amount }) => {
  const [selectedMethod, setSelectedMethod] = useState<'ideal' | 'creditcard'>('ideal');

  const handleSubmit = () => {
    onSubmit(selectedMethod);
  };

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
        <div
          className={`border rounded-lg p-4 cursor-pointer ${selectedMethod === 'ideal' ? 'border-black' : 'border-gray-200'} hover:border-black`}
          onClick={() => setSelectedMethod('ideal')}
        >
          <div className="flex items-center"> 
            <input
              type="radio"
              id="ideal"
              name="payment"
              className="h-4 w-4 accent-black"
              checked={selectedMethod === 'ideal'}
              onChange={() => setSelectedMethod('ideal')}
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

        <div
          className={`border rounded-lg p-4 cursor-pointer ${selectedMethod === 'creditcard' ? 'border-black' : 'border-gray-200'} hover:border-black`}
          onClick={() => setSelectedMethod('creditcard')}
        >
          <div className="flex items-center">
            <input
              type="radio"
              id="dcc"
              name="payment"
              className="h-4 w-4 accent-black"
              checked={selectedMethod === 'creditcard'}
              onChange={() => setSelectedMethod('creditcard')}
            />
            <label htmlFor="dcc" className="ml-3 flex items-center">
              <img 
                src="https://imgur.com/3Q6ZIzR.jpg" 
                alt="Credit/Debit Card" 
                className="h-8 mr-3"
              />
              <span className="font-medium">Credit/Debit Card</span>
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
          onClick={handleSubmit}
          className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-900 transition-colors"
        >
          Betalen
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;

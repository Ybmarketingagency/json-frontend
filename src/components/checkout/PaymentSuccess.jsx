import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col justify-center items-center h-full pt-72">
      <h1 className="text-2xl font-semibold mb-6">Betaling geslaagd</h1>
      <p className="mb-8 text-center">
        Hartelijk bedankt voor uw bestelling! Wij zullen uw bestelling zo spoedig mogelijk
        verwerken en versturen.
      </p>
      <button
        className="bg-black text-white px-4 py-2 rounded-lg"
        onClick={() => navigate('/')}
      >
        Terug naar home
      </button>
    </div>
  );
};

export default PaymentSuccess;


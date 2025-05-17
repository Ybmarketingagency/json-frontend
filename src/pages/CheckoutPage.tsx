import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShippingForm from '../components/checkout/ShippingForm';
import PaymentMethod from '../components/checkout/PaymentMethod';
import { useCart } from '../context/CartContext';

const CheckoutPage: React.FC = () => {
  const [step, setStep] = useState<'shipping' | 'payment'>('shipping');
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const deliveryCost = 20;
  const finalTotal = cartTotal + deliveryCost;
  
  const handleShippingSubmit = async (data: any) => {
    console.log('Shipping data:', data);
    console.log('Cart:', cart);
    console.log('Cart total:', cartTotal);
    setStep('payment');
  };

  const handlePaymentSubmit = async (method: 'ideal' | 'creditcard') => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/create-payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          method, 
          items: cart
        })
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Payment failed.');

      window.location.href = result.paymentUrl;
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('Er is een fout opgetreden tijdens de betaling. Probeer het opnieuw.');
    }
  };

  return (
    <div className="mt-20 py-16" style={{ backgroundColor: '#f0ece5' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {step === 'shipping' ? (
            <ShippingForm onSubmit={handleShippingSubmit} />
          ) : (
            <PaymentMethod 
              onSubmit={handlePaymentSubmit}
              amount={finalTotal}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShippingForm from '../components/checkout/ShippingForm';
import PaymentMethod from '../components/checkout/PaymentMethod';
import { useCart } from '../context/CartContext';
// import { supabase } from '../lib/supabase';

const CheckoutPage: React.FC = () => {
  const [step, setStep] = useState<'shipping' | 'payment'>('shipping');
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const handleShippingSubmit = async (data: any) => {
    console.log('Shipping data:', data);
    console.log('Cart:', cart);
    console.log('Cart total:', cartTotal);
    setStep('payment');
    // try {
    //   // Insert customer data
    //   const { data: customer, error: customerError } = await supabase
    //     .from('customers')
    //     .insert({
    //       first_name: data.firstName,
    //       last_name: data.lastName,
    //       email: data.email,
    //       company: data.company || null,
    //       country: data.country,
    //       street: data.street,
    //       house_number: data.houseNumber,
    //       postal_code: data.postalCode,
    //       city: data.city,
    //       phone: data.phone
    //     })
    //     .select()
    //     .single();

    //   if (customerError) throw customerError;

    //   // Create order
    //   const { data: order, error: orderError } = await supabase
    //     .from('orders')
    //     .insert({
    //       customer_id: customer.id,
    //       total_amount: cartTotal > 50 ? cartTotal : cartTotal + 4.95,
    //       status: 'pending',
    //       payment_status: 'pending'
    //     })
    //     .select()
    //     .single();

    //   if (orderError) throw orderError;

    //   // Insert order items
    //   const orderItems = cart.map(item => ({
    //     order_id: order.id,
    //     shape_name: item.shape.name,
    //     a: item.width,
    //     b: item.height,
    //     dimension_c: item.dimensionC || null,
    //     dimension_d: item.dimensionD || null,
    //     color: item.color,
    //     edge_finish: item.edgeFinish || 'none',
    //     led_light: item.ledLight || 'none',
    //     mounting_system: item.mountingSystem || false,
    //     delivery: item.delivery === 'delivery',
    //     quantity: item.quantity,
    //     price: item.price
    //   }));

    //   const { error: itemsError } = await supabase
    //     .from('order_items')
    //     .insert(orderItems);

    //   if (itemsError) throw itemsError;

    //   // Store order ID for payment step
    //   localStorage.setItem('orderId', order.id);
    //   setStep('payment');
    // } catch (error) {
    //   console.error('Error saving order:', error);
    //   alert('Er is een fout opgetreden bij het opslaan van uw bestelling. Probeer het opnieuw.');
    // }
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
  
      // const result = await response.json();
      // if (!response.ok) throw new Error(result.message || 'Payment failed.');
  
  
      // clearCart();
      // navigate('/checkout/success');


      const result = await response.json();
if (!response.ok) throw new Error(result.message || 'Payment failed.');

window.location.href = result.paymentUrl; // ✅ redirect user to Mollie payment page
// clearCart();
// navigate('/checkout/success');

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
              amount={cartTotal > 50 ? cartTotal : cartTotal + 4.95}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
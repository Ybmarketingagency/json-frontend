import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowLeft, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const deliveryCost = 20;
  const finalTotal = cartTotal + deliveryCost;

  if (cart.length === 0) {
    return (
      <div className="mt-20 py-16" style={{ backgroundColor: '#f0ece5' }}>
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Winkelwagen</h1>
          <div className="bg-white rounded-xl shadow-sm p-8 text-center max-w-md mx-auto">
            <div className="flex justify-center mb-4">
              <ShoppingBag size={80} className="text-gray-300" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Uw winkelwagen is leeg</h2>
            <p className="text-gray-600 mb-6">
              Vind de perfecte spiegel voor uw ruimte in onze collectie.
            </p>
            <Link 
              to="/spiegels" 
              className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
            >
              Bekijk spiegels
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20 py-16" style={{ backgroundColor: '#f0ece5' }}>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Winkelwagen</h1>
        
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6 lg:mb-0">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900">
                  Uw geselecteerde spiegels ({cart.length})
                </h2>
              </div>
              
              {cart.map(item => (
                <div key={item.id} className="p-6 border-b flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                    <img 
                      src={item.shape.image} 
                      alt={item.shape.name} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.shape.name}</h3>
                    <p className="text-gray-500 text-sm">
                      Afmetingen: {item.width} × {item.height} mm
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="flex items-center">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center border rounded-l-lg text-gray-500 hover:bg-gray-50"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <div className="w-10 h-8 flex items-center justify-center border-t border-b text-center">
                        {item.quantity}
                      </div>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center border rounded-r-lg text-gray-500 hover:bg-gray-50"
                      >
                        +
                      </button>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <p className="font-semibold text-gray-900">
                        €{(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="p-6">
                <Link 
                  to="/spiegels" 
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ArrowLeft size={16} className="mr-1" />
                  Verder winkelen
                </Link>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Samenvatting
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotaal</span>
                  <span className="font-medium">€{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bezorgkosten</span>
                  <span className="font-medium">€{deliveryCost.toFixed(2)}</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Totaal (incl. BTW)</span>
                    <span>€{finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/checkout"
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors flex items-center justify-center"
              >
                Doorgaan naar betalen <ArrowRight size={16} className="ml-2" />
              </Link>
              
              <div className="mt-6 text-center text-gray-500 text-sm">
                <p>Veilig betalen met iDEAL, Bancontact, of creditcard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
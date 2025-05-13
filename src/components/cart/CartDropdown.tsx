import React from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

interface CartDropdownProps {
  onClose: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ onClose }) => {
  const { cart, removeFromCart, cartTotal } = useCart();
  const deliveryCost = 20;
  const finalTotal = cartTotal + deliveryCost;

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
      />
      
      {/* Cart dropdown */}
      <div className="fixed inset-0 z-50 md:absolute md:inset-auto md:top-full md:right-0 md:mt-2 w-full md:w-96 bg-white md:rounded-lg shadow-xl">
        <div className="p-4 border-b flex justify-between items-center bg-white">
          <h3 className="font-semibold text-lg">Winkelwagen</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="p-8 text-center bg-white">
            <div className="flex justify-center mb-4">
              <ShoppingBag size={64} className="text-gray-300" />
            </div>
            <p className="text-gray-500 mb-4">Uw winkelwagen is leeg</p>
            <Link 
              to="/spiegels" 
              className="inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-colors"
              onClick={onClose}
            >
              Bekijk spiegels
            </Link>
          </div>
        ) : (
          <>
            <div className="max-h-[calc(100vh-250px)] md:max-h-80 overflow-y-auto bg-white">
              {cart.map(item => (
                <div key={item.id} className="p-4 border-b">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                        <img 
                          src={item.shape.image} 
                          alt={item.shape.name} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.shape.name}</h4>
                        <p className="text-sm text-gray-500">
                          {item.width} × {item.height} mm
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm">Aantal: {item.quantity}</span>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 text-sm transition-colors"
                          >
                            Verwijderen
                          </button>
                        </div>
                      </div>
                    </div>
                    <span className="font-semibold whitespace-nowrap">
                      €{item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t bg-white">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotaal:</span>
                  <span className="font-medium">€{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bezorgkosten:</span>
                  <span className="font-medium">€{deliveryCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold pt-2 border-t">
                  <span>Totaal (incl. BTW):</span>
                  <span>€{finalTotal.toFixed(2)}</span>
                </div>
              </div>
              <Link 
                to="/checkout" 
                className="block w-full bg-black text-white text-center py-3 rounded-lg hover:bg-gray-900 transition-colors"
                onClick={onClose}
              >
                Afrekenen
              </Link>
              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  Levering binnen 3 werkdagen
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDropdown;
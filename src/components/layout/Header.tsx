import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartDropdown from '../cart/CartDropdown';

const Header: React.FC = () => {
  const { itemCount, isCartOpen, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const shouldShowDarkHeader = isHomePage ? isScrolled : true;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        shouldShowDarkHeader ? 'bg-[#1d1d1b] shadow-lg' : 'bg-transparent'
      }`}
      style={{ 
        backgroundColor: shouldShowDarkHeader ? '#1d1d1b' : 'transparent',
        backdropFilter: shouldShowDarkHeader ? 'blur(8px)' : 'none'
      }}
    >
      <div className="container mx-auto px-6 h-24">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="flex-shrink-0">
            <img 
              src="https://imgur.com/BfRrO6H.jpg" 
              alt="Benelux Spiegel Logo" 
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white font-medium hover:text-gray-200 transition-colors">
              Home
            </Link>
            <Link to="/spiegels" className="text-white font-medium hover:text-gray-200 transition-colors">
              Spiegels
            </Link>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white font-medium hover:text-gray-200 transition-colors"
            >
              Over Ons
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-white font-medium hover:text-gray-200 transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-white font-medium hover:text-gray-200 transition-colors"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('footer')}
              className="text-white font-medium hover:text-gray-200 transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <button 
                className="text-white hover:text-gray-200 transition-colors"
                onClick={() => setIsCartOpen(!isCartOpen)}
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-6 h-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium">
                    {itemCount}
                  </span>
                )}
              </button>
              {isCartOpen && <CartDropdown onClose={() => setIsCartOpen(false)} />}
            </div>

            <button 
              className="lg:hidden text-white hover:text-gray-200 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#1d1d1b] transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="container mx-auto px-6 py-6 flex flex-col space-y-4">
          <Link 
            to="/" 
            className="text-white font-medium hover:text-gray-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/spiegels" 
            className="text-white font-medium hover:text-gray-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Spiegels
          </Link>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white font-medium hover:text-gray-200 transition-colors text-left"
          >
            Over Ons
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-white font-medium hover:text-gray-200 transition-colors text-left"
          >
            FAQ
          </button>
          <button 
            onClick={() => scrollToSection('reviews')}
            className="text-white font-medium hover:text-gray-200 transition-colors text-left"
          >
            Reviews
          </button>
          <button 
            onClick={() => scrollToSection('footer')}
            className="text-white font-medium hover:text-gray-200 transition-colors text-left"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
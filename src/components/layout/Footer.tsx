import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" style={{ backgroundColor: '#e5e1da' }} className="pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Cormorant Garamond' }}>
              Benelux Spiegel
            </h3>
            <p className="mb-6 text-gray-600">
              Specialist in op maat gemaakte spiegels voor de Benelux. 
              Kwaliteit en service staan bij ons voorop.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/beneluxspiegel/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/beneluxspiegel/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@benelux.spiegel" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.321 5.562a5.122 5.122 0 0 1-.443-.258 6.228 6.228 0 0 1-1.138-1.009 6.268 6.268 0 0 1-1.362-2.618h.002l-1.731-.003v11.777c0 1.556-1.271 2.827-2.827 2.827-1.556 0-2.827-1.271-2.827-2.827 0-1.556 1.271-2.827 2.827-2.827.316 0 .619.054.903.151v-2.908a5.747 5.747 0 0 0-.903-.072c-3.113 0-5.636 2.523-5.636 5.636s2.523 5.636 5.636 5.636c3.113 0 5.636-2.523 5.636-5.636V7.838c1.118.812 2.43 1.276 3.829 1.276V6.435a3.936 3.936 0 0 1-1.966-.873Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Cormorant Garamond' }}>
              Snelle Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/spiegels" className="text-gray-600 hover:text-black transition-colors">
                  Spiegels
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Over Ons
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Cormorant Garamond' }}>
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://maps.google.com/?q=Hulsenboschstraat+31-6,+4251+LR+Werkendam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-gray-600 hover:text-black transition-colors group"
                >
                  <MapPin size={20} className="mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>
                    Hulsenboschstraat 31-6<br />
                    4251 LR Werkendam
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+31627336465" 
                  className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors group"
                >
                  <Phone size={20} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>06-27336465</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:beneluxspiegel@gmail.com" 
                  className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors group"
                >
                  <Mail size={20} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>beneluxspiegel@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm text-center md:text-left">
              <span className="block md:inline">© 2025 Benelux Spiegel. Alle rechten voorbehouden.</span>
              {' '}
              <span className="block md:inline mt-1 md:mt-0">
                <a 
                  href="https://techazura.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-colors"
                >
                  By TechAzura
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
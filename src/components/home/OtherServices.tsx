import React from 'react';
import { Phone, Mail } from 'lucide-react';

const OtherServices: React.FC = () => {
  return (
    <section className="py-24" style={{ backgroundColor: '#e5e1da' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Andere Diensten & Projecten
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                Naast spiegels op maat bieden wij ook andere diensten aan:
              </p>
              <ul className="mt-4 space-y-2">
                <li>Wandpanelen</li>
                <li>Wandkasten</li>
                <li>Klepdeurkasten</li>
                <li>Professionele montageservice voor losse spiegels</li>
                <li>Speciale spiegelprojecten</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="text-gray-600 mb-4">
                <strong>Let op:</strong> Deze webshop is alleen voor het bestellen en bezorgen van spiegels op maat. 
                Voor montageservice van losse spiegels en andere diensten kunt u direct contact met ons opnemen.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Neem Contact Op
              </h3>
              
              <a 
                href="tel:0627336465" 
                className="flex items-center gap-3 text-gray-900 hover:text-gray-600 transition-colors group"
              >
                <Phone className="w-5 h-5 text-gray-600 group-hover:scale-110 transition-transform" />
                <span className="group-hover:underline">06-27336465</span>
              </a>
              
              <a 
                href="mailto:beneluxspiegel@gmail.com"
                className="flex items-center gap-3 text-gray-900 hover:text-gray-600 transition-colors group"
              >
                <Mail className="w-5 h-5 text-gray-600 group-hover:scale-110 transition-transform" />
                <span className="group-hover:underline">beneluxspiegel@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Clock, Users } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Over Benelux Spiegel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Al meer dan 10 jaar uw specialist in maatwerk spiegels voor de Benelux. 
            Vakmanschap, kwaliteit en persoonlijke service staan bij ons voorop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <div className="flex justify-center mb-4">
              <Shield className="w-12 h-12 text-gray-900" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
              Kwaliteitsgarantie
            </h3>
            <p className="text-gray-600 text-center">
              Wij gebruiken alleen de beste materialen en geven 3 jaar garantie op al onze producten.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <div className="flex justify-center mb-4">
              <Award className="w-12 h-12 text-gray-900" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
              Vakmanschap
            </h3>
            <p className="text-gray-600 text-center">
              Onze ervaren vakmensen zorgen voor een perfecte afwerking van uw spiegel op maat.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <div className="flex justify-center mb-4">
              <Clock className="w-12 h-12 text-gray-900" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
              Snelle Levering
            </h3>
            <p className="text-gray-600 text-center">
              Binnen 24 uur produceren wij uw spiegel op maat, voor snelle levering in de hele Benelux.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-gray-900" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
              Persoonlijke Service
            </h3>
            <p className="text-gray-600 text-center">
              Wij denken graag met u mee en bieden persoonlijk advies voor het beste resultaat.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Uw Specialist in Maatwerk Spiegels
              </h3>
              <p className="text-gray-600 mb-6">
                Bij Benelux Spiegel combineren we traditioneel vakmanschap met moderne technieken. 
                Onze spiegels worden gemaakt van hoogwaardig spiegelglas en worden geleverd met alle 
                benodigde bevestigingsmaterialen.
              </p>
              <p className="text-gray-600 mb-6">
                We zijn trots op onze reputatie voor kwaliteit en service. Ons team staat klaar 
                om u te helpen bij het kiezen van de perfecte spiegel voor uw ruimte.
              </p>
              <Link 
                to="/custom" 
                className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Ontdek ons aanbod
              </Link>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img 
                src="https://images.pexels.com/photos/6207827/pexels-photo-6207827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Benelux Spiegel Werkplaats" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
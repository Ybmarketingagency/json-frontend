import React from 'react';

const CheckIcon = () => (
  <img 
    src="https://imgur.com/3VUABjA.jpg" 
    alt="Checkmark" 
    className="w-6 h-6 object-contain"
  />
);

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'EIGEN PRODUCTIE, TOPKWALITEIT & KORTE LIJNEN',
      description: 'Dankzij productie in eigen beheer garanderen we constante kwaliteit en flexibiliteit.'
    },
    {
      title: 'OPTIONELE LED VERLICHTING',
      description: 'Combineer design met sfeer: kies voor warm of koud witte LED-verlichting voor extra ambiance.'
    },
    {
      title: 'INMEETSERVICE & MONTAGE DOOR VAKMENSEN',
      description: 'Van meting tot installatie: wij begeleiden jouw project van A tot Z.'
    }
  ];

  return (
    <section id="about" style={{ backgroundColor: '#f0ece5' }} className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Waarom Kiezen voor Benelux Spiegel?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek wat ons onderscheidt en waarom klanten voor ons kiezen
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckIcon />
                </div>
                <div>
                  <h3 className="font-medium mb-2" style={{ fontFamily: 'Cormorant Garamond' }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-3xl mb-6 md:whitespace-nowrap lg:whitespace-normal" style={{ fontFamily: 'Cormorant Garamond' }}>
              Spiegel op maat bestellen<br className="hidden md:block lg:hidden" /> bij Benelux Spiegel
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Bij Benelux Spiegel combineren we design en gebruiksgemak in spiegels die met zorg worden ontworpen en geproduceerd. We werken met hoogwaardige materialen en stemmen elk ontwerp af op jouw wensen. Dankzij onze eigen productie, nauwkeurige inmeetservice en efficiënte logistiek begeleiden we het volledige traject – van advies en inmeting tot levering en professionele installatie. Vraag vandaag nog een vrijblijvende offerte aan en ontdek wat Benelux Spiegel voor jou kan betekenen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
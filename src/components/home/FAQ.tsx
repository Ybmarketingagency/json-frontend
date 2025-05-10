import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

type FAQItem = {
  question: string;
  answer: string | JSX.Element;
};

const faqItems: FAQItem[] = [
  {
    question: "Hoe lang duurt de levering en montage?",
    answer: "Wij streven ernaar om binnen 2-3 werkdagen na bestelling uw spiegel te leveren en monteren. Bij het plaatsen van uw bestelling nemen wij contact met u op voor het inplannen van een geschikte datum en tijd."
  },
  {
    question: "Wat houdt de montageservice precies in?",
    answer: "Onze professionele monteurs komen bij u thuis om de spiegel vakkundig te installeren. Dit omvat het uitpakken, ophangen en waterpas stellen van de spiegel. We gebruiken professioneel bevestigingsmateriaal en laten de ruimte netjes achter."
  },
  {
    question: "Welke garantie krijg ik?",
    answer: "Wij bieden 3 jaar garantie op al onze spiegels en de montage. Deze garantie dekt fabricagefouten, onthechting van de spiegellaag en defecten in het bevestigingssysteem."
  },
  {
    question: "Kan ik een spiegel op maat laten maken?",
    answer: <>Ja, wij maken spiegels volledig op maat. U kunt kiezen uit verschillende vormen en afmetingen in onze <Link to="/custom" className="text-gray-900 underline hover:no-underline">configurator</Link>. Ook voor speciale wensen kunt u contact met ons opnemen.</>
  },
  {
    question: "Wat zijn de minimale en maximale afmetingen?",
    answer: "Voor al onze spiegels geldt een minimale afmeting van 150mm en een maximale afmeting van 2500mm per zijde. Dit garandeert optimale kwaliteit en stabiliteit."
  },
  {
    question: "Hoe worden de spiegels verpakt voor transport?",
    answer: "Elke spiegel wordt zorgvuldig verpakt in speciaal beschermend materiaal en vervoerd in een op maat gemaakte kist om beschadiging tijdens transport te voorkomen."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16" style={{ backgroundColor: '#e5e1da' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Veelgestelde Vragen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Antwoorden op de meest gestelde vragen over onze spiegels en service
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="font-medium text-gray-900">{item.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
import React from 'react';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <WhatsAppWidget
        phoneNumber="+31627336465"
        companyName="Benelux Spiegel"
        message="Hallo! 👋 Hoe kunnen we u helpen?"
        sendButton="Versturen"
        inputPlaceHolder="Type een bericht..."
      />
    </div>
  );
};

export default WhatsAppButton;
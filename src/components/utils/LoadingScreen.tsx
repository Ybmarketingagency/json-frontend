import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#f0ece5] z-50 flex items-center justify-center">
      <div className="relative">
        <img 
          src="https://imgur.com/oH8sIqK.jpg" 
          alt="Benelux Spiegel Logo" 
          className="w-24 h-24 object-contain"
          loading="eager"
          fetchpriority="high"
          decoding="sync"
        />
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-black rounded-full animate-[bounce_1s_infinite_0ms]"></div>
            <div className="w-2 h-2 bg-black rounded-full animate-[bounce_1s_infinite_200ms]"></div>
            <div className="w-2 h-2 bg-black rounded-full animate-[bounce_1s_infinite_400ms]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
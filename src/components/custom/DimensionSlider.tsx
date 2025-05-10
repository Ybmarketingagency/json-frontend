import React from 'react';

interface DimensionSliderProps {
  label: string;
  value: number;
  inputValue: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  isActive: boolean;
  onSliderFocus: () => void;
}

const DimensionSlider: React.FC<DimensionSliderProps> = ({
  label,
  value,
  inputValue,
  onChange,
  onBlur,
  isActive,
  onSliderFocus
}) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <label className="text-gray-700">{label}</label>
        <span className="text-gray-900">{value} mm</span>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          min={150}
          className="w-24 px-3 py-2 border rounded-lg focus:outline-none bg-white"
          inputMode="numeric"
          pattern="[0-9]*"
        />
        <div className="relative flex-1 h-12">
          {/* Track background */}
          <div 
            className="absolute inset-x-0 h-1 bg-gray-200 rounded-full"
            style={{ top: 'calc(50% - 2px)' }}
          />
          
          {/* Filled track */}
          <div 
            className="absolute inset-y-0 left-0 h-1 bg-black rounded-full"
            style={{ 
              width: `${((value - 150) / 2350) * 100}%`,
              top: 'calc(50% - 2px)'
            }}
          />

          {/* Range input */}
          <input
            type="range"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={onSliderFocus}
            onBlur={onBlur}
            min={150}
            max={2500}
            step={1}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />

          {/* Handle */}
          <div 
            className={`absolute w-4 h-4 bg-black rounded-full shadow-md pointer-events-none transform transition-transform ${isActive ? 'scale-125' : ''}`}
            style={{ 
              left: `calc(${((value - 150) / 2350) * 100}% - 8px)`,
              top: 'calc(50% - 8px)'
            }}
          />
        </div>
      </div>
      <div className="flex justify-between mt-2 text-xs text-gray-500">
        <span>150 mm</span>
        <span>2500 mm</span>
      </div>
    </div>
  );
};

export default DimensionSlider;
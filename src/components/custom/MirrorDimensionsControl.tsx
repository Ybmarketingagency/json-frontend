import React from 'react';
import { MirrorDimensions, MirrorShape } from '../../types';

interface MirrorDimensionsControlProps {
  dimensions: MirrorDimensions;
  setDimensions: (dimensions: MirrorDimensions) => void;
  calculateArea: () => string;
  shape: MirrorShape;
}

const MirrorDimensionsControl: React.FC<MirrorDimensionsControlProps> = ({
  dimensions,
  setDimensions,
  calculateArea,
  shape
}) => {
  const handleDimensionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Allow empty input or numbers
    if (value === '') {
      setDimensions({
        ...dimensions,
        [name]: 150
      });
      return;
    }

    const numValue = Math.min(Math.max(Number(value), 150), 2000);
    
    setDimensions({
      ...dimensions,
      [name]: numValue
    });
  };

  const DimensionControl = ({ 
    name, 
    label, 
    value,
    show
  }: { 
    name: string; 
    label: string;
    value: number;
    show: boolean;
  }) => {
    if (!show) return null;
    
    return (
      <div>
        <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
          {label} (mm)
        </label>
        <div className="flex gap-4 items-center">
          <input
            type="number"
            id={`${name}-number`}
            value={value}
            onChange={handleDimensionChange}
            name={name}
            min={150}
            max={2000}
            className="w-24 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
          />
          <div className="relative flex-1 h-12 flex items-center">
            <div 
              className="absolute inset-x-0 h-1 bg-gray-200 rounded-full overflow-hidden"
              style={{ top: 'calc(50% - 2px)' }}
            >
              <div 
                className="h-full bg-black rounded-full"
                style={{ 
                  width: `${((value - 150) / 1850) * 100}%`,
                  transition: 'width 0.1s ease-out'
                }}
              />
            </div>
            <input
              type="range"
              id={name}
              name={name}
              min={150}
              max={2000}
              step={1}
              value={value}
              onChange={handleDimensionChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div 
              className="absolute w-6 h-6 bg-black rounded-full shadow-lg border-2 border-white pointer-events-none"
              style={{ 
                left: `calc(${((value - 150) / 1850) * 100}% - 12px)`,
                top: 'calc(50% - 12px)',
                transition: 'left 0.1s ease-out, transform 0.1s ease-out',
                transform: `scale(${document.activeElement?.id === name ? 1.2 : 1})`
              }}
            />
          </div>
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-500">
          <span>150 mm</span>
          <span>2000 mm</span>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <DimensionControl 
        name="width"
        label="A zijde - breedte"
        value={dimensions.width}
        show={shape.dimensions.a}
      />
      
      <DimensionControl 
        name="height"
        label="B zijde - hoogte"
        value={dimensions.height}
        show={shape.dimensions.b}
      />
      
      <DimensionControl 
        name="dimensionC"
        label="C zijde"
        value={dimensions.dimensionC || 150}
        show={shape.dimensions.c}
      />
      
      <DimensionControl 
        name="dimensionD"
        label="D zijde"
        value={dimensions.dimensionD || 150}
        show={shape.dimensions.d}
      />

      <div className="flex justify-between text-sm text-gray-600">
        <span>Totale oppervlakte:</span>
        <span>{calculateArea()} m²</span>
      </div>
    </div>
  );
};

export default MirrorDimensionsControl;
import React from 'react';
import DimensionSlider from './DimensionSlider';
import { MirrorShape } from '../../types';
import { AlertTriangle } from 'lucide-react';

interface DimensionsPanelProps {
  shape: MirrorShape;
  dimensions: {
    width: number;
    height: number;
    dimensionC: number;
    dimensionD: number;
  };
  inputValues: {
    width: string;
    height: string;
    dimensionC: string;
    dimensionD: string;
  };
  activeSlider: string | null;
  onDimensionChange: (dimension: string, value: string) => void;
  onDimensionBlur: (dimension: string) => void;
  onSliderFocus: (dimension: string) => void;
  calculateArea: () => string;
}

const DimensionsPanel: React.FC<DimensionsPanelProps> = ({
  shape,
  dimensions,
  inputValues,
  activeSlider,
  onDimensionChange,
  onDimensionBlur,
  onSliderFocus,
  calculateArea
}) => {
  return (
    <div style={{ backgroundColor: '#f0ece5' }} className="rounded-lg p-4 lg:p-6 space-y-3 lg:space-y-4 -mt-2">      
      <h2 className="text-xl font-semibold">Pas uw afmetingen aan</h2>

      {shape.dimensions.a && (
        <DimensionSlider
          label="A zijde - breedte (mm)"
          value={dimensions.width}
          inputValue={inputValues.width}
          onChange={(value) => onDimensionChange('width', value)}
          onBlur={() => onDimensionBlur('width')}
          isActive={activeSlider === 'width'}
          onSliderFocus={() => onSliderFocus('width')}
        />
      )}

      {shape.dimensions.b && (
        <DimensionSlider
          label="B zijde - hoogte (mm)"
          value={dimensions.height}
          inputValue={inputValues.height}
          onChange={(value) => onDimensionChange('height', value)}
          onBlur={() => onDimensionBlur('height')}
          isActive={activeSlider === 'height'}
          onSliderFocus={() => onSliderFocus('height')}
        />
      )}

      {shape.dimensions.c && (
        <div className="space-y-2">
          <DimensionSlider
            label="C zijde (mm)"
            value={dimensions.dimensionC}
            inputValue={inputValues.dimensionC}
            onChange={(value) => onDimensionChange('dimensionC', value)}
            onBlur={() => onDimensionBlur('dimensionC')}
            isActive={activeSlider === 'dimensionC'}
            onSliderFocus={() => onSliderFocus('dimensionC')}
          />
          {shape.slug === 'schuine-hoek' && (
            <div className="text-yellow-700 text-sm flex items-center gap-2 px-2">
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
              <span>C-zijde moet kleiner zijn dan A-zijde</span>
            </div>
          )}
        </div>
      )}

      {shape.dimensions.d && (
        <DimensionSlider
          label="D zijde (mm)"
          value={dimensions.dimensionD}
          inputValue={inputValues.dimensionD}
          onChange={(value) => onDimensionChange('dimensionD', value)}
          onBlur={() => onDimensionBlur('dimensionD')}
          isActive={activeSlider === 'dimensionD'}
          onSliderFocus={() => onSliderFocus('dimensionD')}
        />
      )}

      <div className="pt-3 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Totale oppervlakte:</span>
          <span className="font-medium">{calculateArea()} m²</span>
        </div>
      </div>
    </div>
  );
};

export default DimensionsPanel;
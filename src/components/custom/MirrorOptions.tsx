import React from 'react';
import { MirrorOptions as MirrorOptionsType, MirrorColor, DeliveryOption, LedLightOption } from '../../types';
import { MirrorShape } from '../../types';

interface MirrorOptionsProps {
  options: MirrorOptionsType;
  setOptions: (options: MirrorOptionsType) => void;
  shape: MirrorShape;
}

const MirrorOptions: React.FC<MirrorOptionsProps> = ({ options, setOptions, shape }) => {
  const colorOptions: { value: MirrorColor; label: string; price: number }[] = [
    { value: 'silver', label: 'Silver', price: 60 },
    { value: 'bronze', label: 'Brons', price: 80 },
    { value: 'anthracite', label: 'Antraciet', price: 80 }
  ];

  const deliveryOptions: { value: DeliveryOption; label: string; price: number }[] = [
    { value: 'delivery', label: 'Bezorgen', price: 20 },
    { value: 'pickup', label: 'Ophalen', price: 0 }
  ];

  const ledOptions: { value: LedLightOption; label: string; price: number }[] = [
    { value: 'none', label: 'Geen LED verlichting', price: 0 },
    { value: 'warm', label: 'LED Warm wit', price: 100 },
    { value: 'cold', label: 'LED Koud wit', price: 100 }
  ];

  const availableEdges = shape?.edges || ['none'];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Kies een kleur</h3>
        <div className="space-y-3">
          {colorOptions.map((color) => (
            <label key={color.value} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="color"
                value={color.value}
                checked={options.color === color.value}
                onChange={(e) => setOptions({ ...options, color: e.target.value as MirrorColor })}
                className="mr-3 accent-black"
              />
              <div>
                <span className="font-medium block">{color.label}</span>
                <span className="text-sm text-gray-500">€{color.price} per m²</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Kies een bewerking</h3>
        <div className="space-y-3">
          {availableEdges.includes('none') && (
            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="edgeFinish"
                value="none"
                checked={options.edgeFinish === 'none'}
                onChange={(e) => setOptions({ ...options, edgeFinish: e.target.value as 'none' })}
                className="mr-3 accent-black"
              />
              <div>
                <span className="font-medium block">Geen bewerking (scherpe randen)</span>
                <span className="text-sm text-gray-500">Geschikt voor inbouw of als u zelf de randen wilt afwerken.</span>
              </div>
            </label>
          )}
          
          {availableEdges.includes('polished') && (
            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="edgeFinish"
                value="polished"
                checked={options.edgeFinish === 'polished'}
                onChange={(e) => setOptions({ ...options, edgeFinish: e.target.value as 'polished' })}
                className="mr-3 accent-black"
              />
              <div>
                <span className="font-medium block">Polyslijpen</span>
                <span className="text-sm text-gray-500">Gladde, matte afwerking van de randen.</span>
              </div>
            </label>
          )}
          
          {availableEdges.includes('facet') && (
            <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="edgeFinish"
                value="facet"
                checked={options.edgeFinish === 'facet'}
                onChange={(e) => setOptions({ ...options, edgeFinish: e.target.value as 'facet' })}
                className="mr-3 accent-black"
              />
              <div>
                <span className="font-medium block">Facetslijpen</span>
                <span className="text-sm text-gray-500">Elegante, schuine afwerking van de randen voor een luxe uitstraling.</span>
              </div>
            </label>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">LED Verlichting</h3>
        <div className="space-y-3">
          {ledOptions.map((option) => (
            <label key={option.value} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="ledLight"
                value={option.value}
                checked={options.ledLight === option.value}
                onChange={(e) => setOptions({ ...options, ledLight: e.target.value as LedLightOption })}
                className="mr-3 accent-black"
              />
              <div>
                <span className="font-medium block">{option.label}</span>
                {option.price > 0 && (
                  <span className="text-sm text-gray-500">+ €{option.price.toFixed(2)}</span>
                )}
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Ophangsysteem</h3>
        <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
          <input
            type="checkbox"
            checked={options.mountingSystem}
            onChange={(e) => setOptions({ ...options, mountingSystem: e.target.checked })}
            className="mr-3 accent-black"
          />
          <div>
            <span className="font-medium block">Professioneel ophangsysteem</span>
            <span className="text-sm text-gray-500">+ €50.00</span>
          </div>
        </label>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Bezorging</h3>
        <div className="space-y-3">
          {deliveryOptions.map((option) => (
            <label key={option.value} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="delivery"
                value={option.value}
                checked={options.delivery === option.value}
                onChange={(e) => setOptions({ ...options, delivery: e.target.value as DeliveryOption })}
                className="mr-3 accent-black"
              />
              <div>
                <span className="font-medium block">{option.label}</span>
                <span className="text-sm text-gray-500">
                  {option.price === 0 ? 'Gratis' : `€${option.price.toFixed(2)}`}
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MirrorOptions;
import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { mirrorShapes } from '../../data/mirrors';
import { useCart } from '../../context/CartContext';
import MirrorPreview from './MirrorPreview';
import DimensionsPanel from './DimensionsPanel';
import MirrorOptions from './MirrorOptions';
import MirrorSummary from './MirrorSummary';
import { MirrorOptions as MirrorOptionsType } from '../../types';

const MirrorCustomizer: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useCart();
  
  const shape = mirrorShapes.find(s => s.slug === slug);
  
  const [dimensions, setDimensions] = useState({
    width: 150,
    height: 150,
    dimensionC: 150,
    dimensionD: 150
  });

  const [inputValues, setInputValues] = useState({
    width: '150',
    height: '150',
    dimensionC: '150',
    dimensionD: '150'
  });

  const [activeSlider, setActiveSlider] = useState<string | null>(null);
  const [showDimensionWarning, setShowDimensionWarning] = useState(false);

  const [options, setOptions] = useState<MirrorOptionsType>({
    thickness: '4',
    edgeFinish: 'none',
    quantity: 1,
    color: 'silver',
    delivery: 'delivery',
    ledLight: 'none',
    mountingSystem: false
  });
  
  const [showSuccess, setShowSuccess] = useState(false);

  const handleBack = () => {
    if (location.state?.from === '/spiegels') {
      navigate('/spiegels', { replace: true });
    } else {
      navigate(-1);
    }
  };
  
  if (!shape) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Vorm niet gevonden</h2>
        <p className="text-gray-600 mb-8">De door u geselecteerde spiegelvorm kon niet worden gevonden.</p>
        <button 
          onClick={handleBack}
          className="bg-black text-white font-medium py-2 px-6 rounded-lg hover:bg-gray-900 transition-colors"
        >
          Terug naar vormkeuze
        </button>
      </div>
    );
  }

  const calculateArea = () => {
    if (!shape) return "0.00";

    let area = 0;
    
    if (shape.slug === 'rond') {
      // For round shape: πr²
      const radius = dimensions.width / 2;
      area = Math.PI * radius * radius;
    } else if (shape.slug === 'ovaal') {
      // For oval shape: π * (width/2) * (height/2)
      const a = dimensions.width / 2;
      const b = dimensions.height / 2;
      area = Math.PI * a * b;
    } else if (shape.slug === 'getoogd') {
      // For arched top mirror:
      // Rectangle area + semi-circle area
      const rectangleArea = dimensions.width * dimensions.height;
      const radius = dimensions.width / 2;
      const archArea = (Math.PI * radius * radius) / 2;
      area = rectangleArea + archArea;
    } else if (shape.slug === 'schuine-hoek') {
      // For angled mirror, use trapezoid formula
      const h = Math.max(dimensions.height, dimensions.dimensionD);
      area = ((dimensions.width + dimensions.dimensionC) * h) / 2;
    } else if (shape.dimensions.c && shape.dimensions.d) {
      area = ((dimensions.width + dimensions.dimensionC) * dimensions.height) / 2;
    } else if (shape.dimensions.c) {
      area = (dimensions.width * dimensions.height) / 2;
    } else {
      area = dimensions.width * dimensions.height;
    }
    
    return (area / 1000000).toFixed(2); // Convert to m²
  };

  const calculatePerimeter = () => {
    if (!shape) return 0;

    let perimeter = 0;
    const mmToM = 0.001; // Convert mm to meters

    if (shape.slug === 'rond') {
      // Circle perimeter: 2πr
      const radius = dimensions.width / 2 * mmToM;
      perimeter = 2 * Math.PI * radius;
    } else if (shape.slug === 'ovaal') {
      // Ramanujan's approximation for ellipse perimeter
      const a = dimensions.width / 2 * mmToM;
      const b = dimensions.height / 2 * mmToM;
      perimeter = Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b)));
    } else if (shape.slug === 'getoogd') {
      // Straight edges + semi-circle arc
      const straightEdges = (dimensions.width * 2 + dimensions.height) * mmToM;
      const radius = (dimensions.width / 2) * mmToM;
      const archLength = Math.PI * radius;
      perimeter = straightEdges + archLength;
    } else if (shape.slug === 'schuine-hoek') {
      const a = dimensions.width * mmToM;
      const b = dimensions.height * mmToM;
      const c = dimensions.dimensionC * mmToM;
      const d = dimensions.dimensionD * mmToM;
      const h = Math.abs(d - b);
      const w = Math.abs(a - c);
      const diagonal = Math.sqrt(h * h + w * w);
      perimeter = a + b + c + d + (2 * diagonal);
    } else if (shape.dimensions.c && shape.dimensions.d) {
      perimeter = (dimensions.width + dimensions.height + dimensions.dimensionC + dimensions.dimensionD) * mmToM;
    } else if (shape.dimensions.c) {
      perimeter = (dimensions.width + dimensions.height + dimensions.dimensionC) * mmToM;
    } else {
      perimeter = 2 * (dimensions.width + dimensions.height) * mmToM;
    }

    return perimeter;
  };
  
  const calculatePrice = () => {
    const area = Number(calculateArea());
    const perimeter = calculatePerimeter();
    
    const colorPrices = {
      silver: 60,
      bronze: 80,
      anthracite: 80
    };
    
    let finalPrice = area * colorPrices[options.color];

    // Add complexity factors
    if (shape.slug === 'rond') {
      finalPrice *= 1.25; // 25% extra for round complexity
    } else if (shape.slug === 'ovaal') {
      finalPrice *= 1.3; // 30% extra for oval complexity
    } else if (shape.slug === 'schuine-hoek') {
      finalPrice *= 1.2; // 20% extra for angled complexity
    } else if (shape.slug === 'getoogd') {
      finalPrice *= 1.25; // 25% extra for arch complexity
    }
    
    // Add edge finish costs per meter of perimeter
    if (options.edgeFinish === 'polished') {
      finalPrice += perimeter * 5; // €5 per meter
    }
    if (options.edgeFinish === 'facet') {
      finalPrice += perimeter * 7; // €7 per meter
    }
    
    // Add LED lighting cost if selected
    if (options.ledLight === 'warm' || options.ledLight === 'cold') {
      finalPrice += 100;
    }

    // Add mounting system cost if selected
    if (options.mountingSystem) {
      finalPrice += 50;
    }
    
    return finalPrice.toFixed(2);
  };

  const handleDimensionChange = (dimension: string, value: string) => {
    setInputValues(prev => ({ ...prev, [dimension]: value }));
    
    const numValue = Math.min(Math.max(Number(value) || 150, 150), 2500);
    
    // For round mirror, keep width and height equal
    if (shape.slug === 'rond' && dimension === 'width') {
      setDimensions(prev => ({ ...prev, width: numValue, height: numValue }));
      setInputValues(prev => ({ ...prev, width: value, height: value }));
    } else {
      setDimensions(prev => ({ ...prev, [dimension]: numValue }));
    }
  };

  const handleDimensionBlur = (dimension: string) => {
    setActiveSlider(null);
    setInputValues(prev => ({
      ...prev,
      [dimension]: dimensions[dimension as keyof typeof dimensions].toString()
    }));
  };
  
  const handleAddToCart = () => {
    if (!shape || showDimensionWarning) return;

    addToCart({
      shape,
      width: dimensions.width,
      height: dimensions.height,
      dimensionC: dimensions.dimensionC,
      dimensionD: dimensions.dimensionD,
      quantity: options.quantity,
      price: Number(calculatePrice()),
      color: options.color,
      delivery: options.delivery,
      ledLight: options.ledLight,
      mountingSystem: options.mountingSystem
    });
    
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };
  
  return (
    <div className="container mx-auto px-4 py-16">
      <button 
        onClick={handleBack}
        className="flex items-center text-gray-600 hover:text-black mb-8 transition-colors"
      >
        <ArrowLeft size={16} className="mr-1" /> Terug naar vormkeuze
      </button>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <MirrorPreview shape={shape} />
        </div>
        
        <div className="space-y-6">
          {showDimensionWarning && shape.slug === 'schuine-hoek' && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2" />
                <p className="text-sm text-yellow-700">
                  De C-zijde kan niet groter zijn dan de A-zijde voor een schuine hoek spiegel.
                </p>
              </div>
            </div>
          )}
          
          <DimensionsPanel 
            shape={shape}
            dimensions={dimensions}
            inputValues={inputValues}
            activeSlider={activeSlider}
            onDimensionChange={handleDimensionChange}
            onDimensionBlur={handleDimensionBlur}
            onSliderFocus={(dimension) => setActiveSlider(dimension)}
            calculateArea={calculateArea}
          />
          
          <MirrorOptions 
            options={options}
            setOptions={setOptions}
            shape={shape}
          />
          
          <MirrorSummary 
            dimensions={dimensions}
            options={options}
            setOptions={setOptions}
            calculatePrice={calculatePrice}
            showSuccess={showSuccess}
            onAddToCart={handleAddToCart}
            disableAddToCart={showDimensionWarning}
          />
        </div>
      </div>
    </div>
  );
};

export default MirrorCustomizer;
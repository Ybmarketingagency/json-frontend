export interface MirrorShape {
  id: string;
  name: string;
  image: string;
  startingPrice: number;
  description: string;
  slug: string;
  edges?: string[];
  dimensions: {
    a: boolean;
    b: boolean;
    c: boolean;
    d: boolean;
  };
}

export interface CartItem {
  id: string;
  shape: MirrorShape;
  width: number;
  height: number;
  dimensionC?: number;
  dimensionD?: number;
  quantity: number;
  price: number;
  color: MirrorColor;
  delivery: DeliveryOption;
  ledLight?: LedLightOption;
  mountingSystem?: boolean;
}

export interface MirrorDimensions {
  width: number;
  height: number;
  dimensionC?: number;
  dimensionD?: number;
}

export interface MirrorOptions {
  thickness: '4' | '6' | '8';
  edgeFinish: 'none' | 'polished' | 'facet';
  quantity: number;
  color: MirrorColor;
  delivery: DeliveryOption;
  ledLight?: LedLightOption;
  mountingSystem: boolean;
}

export type MirrorColor = 'silver' | 'bronze' | 'anthracite';
export type DeliveryOption = 'delivery' | 'pickup';
export type LedLightOption = 'none' | 'warm' | 'cold';
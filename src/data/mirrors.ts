import { MirrorShape } from '../types';

export const mirrorShapes: MirrorShape[] = [
  {
    id: '1',
    name: 'Spiegel – vierkant / rechthoek',
    image: 'https://imgur.com/p9YM9bA.jpg',
    startingPrice: 7.02,
    description: 'Een klassieker voor elke ruimte. Onze rechthoekige spiegels zijn veelzijdig en passen in elk interieur.',
    slug: 'rechthoek',
    edges: ['none', 'polished', 'facet'],
    dimensions: {
      a: true,
      b: true,
      c: false,
      d: false
    }
  },
  {
    id: '2',
    name: 'Spiegel – schuine hoek',
    image: 'https://imgur.com/65F4scP.jpg',
    startingPrice: 9.83,
    description: 'Een moderne twist op het klassieke design. Perfect voor hoeken en unieke ruimtes.',
    slug: 'schuine-hoek',
    edges: ['none', 'polished', 'facet'],
    dimensions: {
      a: true,
      b: true,
      c: true,
      d: true
    }
  },
  {
    id: '3',
    name: 'Spiegel – getoogde bovenzijde',
    image: 'https://imgur.com/6dnSoJ0.jpg',
    startingPrice: 12.63,
    description: 'Elegantie met een klassieke toets. Deze spiegels geven uw ruimte een tijdloze uitstraling.',
    slug: 'getoogd',
    edges: ['none', 'polished'],
    dimensions: {
      a: true,
      b: true,
      c: true,
      d: false
    }
  },
  {
    id: '4',
    name: 'Spiegel – Ovaal',
    image: 'https://imgur.com/Uqsm7go.jpg',
    startingPrice: 17.40,
    description: 'Zachte, vloeiende lijnen voor een harmonieus effect in uw interieur.',
    slug: 'ovaal',
    edges: ['none', 'polished'],
    dimensions: {
      a: true,
      b: true,
      c: false,
      d: false
    }
  },
  {
    id: '5',
    name: 'Spiegel Rond',
    image: 'https://imgur.com/aUgTJXA.jpg',
    startingPrice: 14.04,
    description: 'Tijdloze ronde vorm die past in elk interieur.',
    slug: 'rond',
    edges: ['none', 'polished'],
    dimensions: {
      a: true,
      b: false,
      c: false,
      d: false
    }
  }
];

export const testimonials = [
  {
    id: '1',
    name: 'N S',
    text: 'Afgelopen donderdag hebben zij een hele mooie spiegel volledig naar wens bij mij in de gang neergezet! In een woord WAUW! Precies hoe ik het wilde en super goede service!',
    rating: 5
  },
  {
    id: '2',
    name: 'M D',
    text: 'De spiegels zijn van hoge kwaliteit en zien er prachtig uit. Super tevreden met het eindresultaat en de montage verliep soepel en snel. Een echte aanrader!',
    rating: 5
  },
  {
    id: '3',
    name: 'Maria P',
    text: 'Super service gehad! Ze waren snel bereikbaar en namen alle tijd voor mijn vragen. Mijn spiegel is prachtig geworden, echt een aanrader!',
    rating: 5
  }
];
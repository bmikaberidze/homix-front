import { Property } from './types';

export const sampleProperties: Property[] = [
  {
    id: '1',
    title: 'Luxurious Penthouse Suite',
    address: '123 Ocean Drive, Miami Beach',
    price: 8500,
    priceType: 'month',
    beds: 4,
    baths: 3,
    size: '3200 sqft',
    popular: true,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1677553512940-f79af72efd1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njg3ODA5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1080',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1080',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1080'
    ],
    description: 'Experience ultimate luxury living in this stunning penthouse suite with breathtaking ocean views. This meticulously designed residence features floor-to-ceiling windows, premium finishes throughout, and an expansive private terrace perfect for entertaining.',
    amenities: ['Ocean View', 'Private Terrace', 'Smart Home System', 'Concierge Service', 'Gym Access', 'Pool', 'Parking', 'Pet Friendly'],
    owner: {
      id: 'owner1',
      name: 'Sarah Johnson',
      type: 'individual',
      tier: 'professional',
      responseTime: '2 hours'
    }
  },
  {
    id: '2',
    title: 'Modern Downtown Apartment',
    address: '456 City Center, New York',
    price: 3200,
    priceType: 'month',
    beds: 2,
    baths: 2,
    size: '1200 sqft',
    popular: false,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1663756915301-2ba688e078cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2ODgzODA3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1080',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1080'
    ],
    description: 'Contemporary downtown living at its finest. This modern apartment features an open floor plan, stainless steel appliances, and stunning city views. Walking distance to shops, restaurants, and public transportation.',
    amenities: ['City View', 'Open Kitchen', 'In-Unit Laundry', 'Doorman', 'Rooftop Access', 'Bike Storage'],
    owner: {
      id: 'owner2',
      name: 'Prime Realty Group',
      type: 'company',
      tier: 'enterprise',
      responseTime: '1 hour'
    }
  },
  {
    id: '3',
    title: 'Cozy Studio Loft',
    address: '789 Arts District, Los Angeles',
    price: 1600,
    priceType: 'month',
    beds: 1,
    baths: 1,
    size: '650 sqft',
    popular: true,
    images: [
      'https://images.unsplash.com/photo-1740446568848-bfb43e66bfd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwc3R1ZGlvJTIwbG9mdHxlbnwxfHx8fDE3Njg4NTg5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1080'
    ],
    description: 'Charming studio loft in the heart of the Arts District. High ceilings, exposed brick, and large windows create a bright and airy space. Perfect for artists and creative professionals.',
    amenities: ['High Ceilings', 'Natural Light', 'Hardwood Floors', 'Close to Transit', 'Cafes Nearby'],
    owner: {
      id: 'owner3',
      name: 'Michael Chen',
      type: 'broker',
      tier: 'starter',
      responseTime: '3 hours'
    }
  },
  {
    id: '4',
    title: 'Spacious Family Home',
    address: '321 Suburban Lane, Austin',
    price: 450000,
    priceType: 'sale',
    beds: 4,
    baths: 3,
    size: '2800 sqft',
    popular: false,
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1762810981576-1b07f76af9d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjaW91cyUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzY4ODU4OTc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1080',
      'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1080'
    ],
    description: 'Beautiful family home in a quiet suburban neighborhood. Features include a modern kitchen, spacious backyard, and excellent school district. Move-in ready!',
    amenities: ['Backyard', 'Modern Kitchen', 'Master Suite', '2-Car Garage', 'Near Schools', 'Quiet Street'],
    owner: {
      id: 'owner1',
      name: 'Sarah Johnson',
      type: 'individual',
      tier: 'professional',
      responseTime: '2 hours'
    }
  },
  {
    id: '5',
    title: 'Charming Cottage by the Lake',
    address: '555 Waterfront Way, Seattle',
    price: 2800,
    priceType: 'month',
    beds: 3,
    baths: 2,
    size: '1800 sqft',
    popular: true,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1578654991424-bd24d2d272af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtlJTIwY290dGFnZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2ODg1ODk4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1080',
      'https://images.unsplash.com/photo-1600563438938-a650303f8f13?w=1080'
    ],
    description: 'Tranquil lakefront cottage with stunning water views. Wake up to beautiful sunrises and enjoy peaceful evenings by the water. Features private dock access and spacious deck.',
    amenities: ['Lakefront', 'Private Dock', 'Deck', 'Fireplace', 'Washer/Dryer', 'Mountain Views'],
    owner: {
      id: 'owner4',
      name: 'Lakeside Properties LLC',
      type: 'company',
      tier: 'enterprise',
      responseTime: '30 minutes'
    }
  },
  {
    id: '6',
    title: 'Urban Industrial Warehouse',
    address: '888 Factory St, Brooklyn',
    price: 5200,
    priceType: 'month',
    beds: 3,
    baths: 2,
    size: '2200 sqft',
    popular: false,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1758887250669-9ce43c44611d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwbG9mdHxlbnwxfHx8fDE3Njg4NTg5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1080'
    ],
    description: 'Unique industrial loft conversion with soaring ceilings and authentic warehouse character. Open concept layout with polished concrete floors and exposed beams.',
    amenities: ['High Ceilings', 'Industrial Style', 'Open Concept', 'Rooftop', 'Near Subway', 'Trendy Area'],
    owner: {
      id: 'owner2',
      name: 'Prime Realty Group',
      type: 'company',
      tier: 'enterprise',
      responseTime: '1 hour'
    }
  },
  {
    id: '7',
    title: 'Elegant Victorian Townhouse',
    address: '234 Heritage Boulevard, Boston',
    price: 725000,
    priceType: 'sale',
    beds: 5,
    baths: 4,
    size: '3800 sqft',
    popular: false,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1080',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1080',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1080'
    ],
    description: 'Meticulously restored Victorian townhouse with original architectural details. Features include crown molding, hardwood floors, and modern updates throughout while maintaining historic charm.',
    amenities: ['Historic Details', 'Updated Kitchen', 'Finished Basement', 'Garden', 'Walk to Parks', 'Original Hardwood'],
    owner: {
      id: 'owner5',
      name: 'Jennifer Martinez',
      type: 'broker',
      tier: 'professional',
      responseTime: '2 hours'
    }
  },
  {
    id: '8',
    title: 'Beachfront Bungalow',
    address: '777 Shoreline Drive, Santa Monica',
    price: 6800,
    priceType: 'month',
    beds: 3,
    baths: 2,
    size: '1900 sqft',
    popular: true,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1080',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1080',
      'https://images.unsplash.com/photo-1600563438938-a650303f8f13?w=1080'
    ],
    description: 'Wake up to ocean breezes in this charming beachfront bungalow. Direct beach access, spacious patio, and panoramic ocean views. Perfect for beach lovers and surfers.',
    amenities: ['Beach Access', 'Ocean View', 'Outdoor Shower', 'Fire Pit', 'Garage', 'Surf Storage'],
    owner: {
      id: 'owner6',
      name: 'Coastal Living Rentals',
      type: 'company',
      tier: 'professional',
      responseTime: '1 hour'
    }
  },
  {
    id: '9',
    title: 'Mountain View Chalet',
    address: '999 Alpine Road, Denver',
    price: 4500,
    priceType: 'month',
    beds: 4,
    baths: 3,
    size: '2600 sqft',
    popular: true,
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1080',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1080',
      'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1080'
    ],
    description: 'Stunning mountain chalet with breathtaking views. Features vaulted ceilings, stone fireplace, and expansive deck perfect for entertaining. Minutes from ski resorts.',
    amenities: ['Mountain View', 'Fireplace', 'Deck', 'Ski Storage', 'Hot Tub', 'Heated Floors'],
    owner: {
      id: 'owner7',
      name: 'Robert Williams',
      type: 'individual',
      tier: 'starter',
      responseTime: '4 hours'
    }
  },
  {
    id: '10',
    title: 'Luxury High-Rise Condo',
    address: '1200 Skyline Avenue, Chicago',
    price: 5500,
    priceType: 'month',
    beds: 3,
    baths: 2,
    size: '2100 sqft',
    popular: false,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1080',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1080',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1080'
    ],
    description: 'Sophisticated high-rise living with floor-to-ceiling windows and spectacular city views. Premium building amenities include pool, gym, and 24/7 concierge service.',
    amenities: ['City Views', 'Concierge', 'Pool', 'Gym', 'Valet Parking', 'Pet Friendly'],
    owner: {
      id: 'owner8',
      name: 'Skyline Properties Inc',
      type: 'company',
      tier: 'enterprise',
      responseTime: '30 minutes'
    }
  },
  {
    id: '11',
    title: 'Garden Courtyard Apartment',
    address: '456 Grove Street, Portland',
    price: 2100,
    priceType: 'month',
    beds: 2,
    baths: 1,
    size: '950 sqft',
    popular: false,
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1080',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1080'
    ],
    description: 'Peaceful garden apartment with private courtyard access. Recently updated with modern finishes, new appliances, and plenty of natural light. Pet-friendly community.',
    amenities: ['Garden Access', 'Updated Kitchen', 'Hardwood Floors', 'Pet Friendly', 'Laundry', 'Bike Storage'],
    owner: {
      id: 'owner9',
      name: 'Amanda Thompson',
      type: 'broker',
      tier: 'starter',
      responseTime: '3 hours'
    }
  },
  {
    id: '12',
    title: 'Historic Brownstone',
    address: '678 Park Avenue, Philadelphia',
    price: 895000,
    priceType: 'sale',
    beds: 4,
    baths: 3,
    size: '3200 sqft',
    popular: true,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1080',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1080',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1080'
    ],
    description: 'Beautifully preserved brownstone in a prestigious historic district. Features original woodwork, modern chef\'s kitchen, and private rooftop terrace with city views.',
    amenities: ['Rooftop Terrace', 'Chef Kitchen', 'Original Details', 'Wine Cellar', 'Smart Home', 'Private Entrance'],
    owner: {
      id: 'owner10',
      name: 'Heritage Homes Realty',
      type: 'company',
      tier: 'professional',
      responseTime: '2 hours'
    }
  },
];
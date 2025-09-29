export interface Shop {
  id: string;
  slug: string;
  name: string;
  category: ShopCategory;
  about?: string;
  address_line: string;
  area: string;
  city: string;
  postal_code: string;
  country: string;
  lat: number;
  lng: number;
  phone?: string;
  whatsapp?: string;
  website?: string;
  photos?: string[];
  status: "OPEN" | "CLOSED";
  status_updated_at: Date;
  hours?: string;
  owner_user_id?: string;
  is_claimed: boolean;
  verified: boolean;
  favorites_count: number;
  created_at: Date;
}

export type ShopCategory = "barber" | "tailor" | "café" | "pharmacy" | "bakery" | "grocery" | "salon";

export const categoryIcons: Record<ShopCategory, string> = {
  barber: "✂️",
  tailor: "🧵", 
  café: "☕",
  pharmacy: "💊",
  bakery: "🥖",
  grocery: "🛒",
  salon: "💅"
};

export const categoryLabels: Record<ShopCategory, string> = {
  barber: "Barber Shop",
  tailor: "Tailor",
  café: "Café",
  pharmacy: "Pharmacy", 
  bakery: "Bakery",
  grocery: "Grocery Store",
  salon: "Beauty Salon"
};

// Helper function to create random timestamps
const randomMinutesAgo = (min: number, max: number) => {
  const minutes = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Date(Date.now() - minutes * 60 * 1000);
};

export const seedShops: Shop[] = [
  {
    id: "1",
    slug: "blade-and-fade-barbershop",
    name: "Blade & Fade Barbershop",
    category: "barber",
    about: "Traditional barbershop with modern styling. Walk-ins welcome.",
    address_line: "123 Main Street",
    area: "Downtown",
    city: "San Francisco",
    postal_code: "94102",
    country: "US",
    lat: 37.7749,
    lng: -122.4194,
    phone: "+1-415-555-0123",
    whatsapp: "+14155550123",
    status: "OPEN",
    status_updated_at: randomMinutesAgo(5, 30),
    hours: "Mon-Fri 9AM-7PM, Sat 8AM-6PM, Sun Closed",
    is_claimed: true,
    verified: true,
    favorites_count: 24,
    created_at: new Date("2024-01-15"),
  },
  {
    id: "2", 
    slug: "stitchright-tailors",
    name: "StitchRight Tailors",
    category: "tailor",
    about: "Expert alterations and custom tailoring since 1985.",
    address_line: "456 Fashion Ave",
    area: "Mission District", 
    city: "San Francisco",
    postal_code: "94110",
    country: "US",
    lat: 37.7599,
    lng: -122.4148,
    phone: "+1-415-555-0456",
    status: "CLOSED",
    status_updated_at: randomMinutesAgo(45, 120),
    hours: "Tue-Sat 10AM-6PM, Sun-Mon Closed",
    is_claimed: true,
    verified: false,
    favorites_count: 12,
    created_at: new Date("2024-02-01"),
  },
  {
    id: "3",
    slug: "bean-and-bun-cafe",
    name: "Bean & Bun Café",
    category: "café",
    about: "Artisanal coffee and fresh pastries daily.",
    address_line: "789 Coffee Lane",
    area: "Castro",
    city: "San Francisco", 
    postal_code: "94114",
    country: "US",
    lat: 37.7609,
    lng: -122.4350,
    phone: "+1-415-555-0789",
    website: "https://beanandbun.com",
    status: "OPEN",
    status_updated_at: randomMinutesAgo(2, 15),
    hours: "Daily 6AM-8PM",
    is_claimed: true,
    verified: true,
    favorites_count: 89,
    created_at: new Date("2024-01-20"),
  },
  {
    id: "4",
    slug: "prime-pharma",
    name: "Prime Pharma",
    category: "pharmacy",
    about: "Full-service pharmacy with prescription delivery.",
    address_line: "321 Health Blvd",
    area: "Richmond",
    city: "San Francisco",
    postal_code: "94118",
    country: "US", 
    lat: 37.7834,
    lng: -122.4527,
    phone: "+1-415-555-0321",
    status: "OPEN",
    status_updated_at: randomMinutesAgo(10, 45),
    hours: "Mon-Sat 8AM-10PM, Sun 9AM-9PM",
    is_claimed: false,
    verified: false,
    favorites_count: 34,
    created_at: new Date("2024-03-01"),
  },
  {
    id: "5",
    slug: "crust-and-crumb-bakery", 
    name: "Crust & Crumb Bakery",
    category: "bakery",
    about: "Fresh bread and pastries baked daily.",
    address_line: "654 Baker Street",
    area: "Pacific Heights",
    city: "San Francisco",
    postal_code: "94109",
    country: "US",
    lat: 37.7956,
    lng: -122.4435,
    phone: "+1-415-555-0654",
    status: "CLOSED",
    status_updated_at: randomMinutesAgo(90, 180),
    hours: "Tue-Sun 6AM-3PM, Mon Closed",
    is_claimed: true,
    verified: true,
    favorites_count: 67,
    created_at: new Date("2024-01-10"),
  },
  {
    id: "6",
    slug: "sunrise-grocery",
    name: "Sunrise Grocery",
    category: "grocery",
    about: "Local grocery store with fresh produce and essentials.",
    address_line: "987 Market Street",
    area: "SOMA",
    city: "San Francisco",
    postal_code: "94103",
    country: "US",
    lat: 37.7853,
    lng: -122.4059,
    phone: "+1-415-555-0987",
    status: "OPEN",
    status_updated_at: randomMinutesAgo(20, 60),
    hours: "Daily 7AM-11PM",
    is_claimed: false,
    verified: false,
    favorites_count: 45,
    created_at: new Date("2024-02-15"),
  },
  {
    id: "7",
    slug: "bella-beauty-salon",
    name: "Bella Beauty Salon",
    category: "salon",
    about: "Full service salon for hair, nails, and beauty treatments.",
    address_line: "159 Glam Avenue",
    area: "Haight",
    city: "San Francisco",
    postal_code: "94117",
    country: "US",
    lat: 37.7693,
    lng: -122.4481,
    phone: "+1-415-555-0159",
    whatsapp: "+14155550159",
    status: "CLOSED",
    status_updated_at: randomMinutesAgo(30, 90),
    hours: "Wed-Sun 9AM-7PM, Mon-Tue Closed",
    is_claimed: true,
    verified: true,
    favorites_count: 156,
    created_at: new Date("2024-01-25"),
  },
  {
    id: "8",
    slug: "corner-coffee-roasters",
    name: "Corner Coffee Roasters",
    category: "café",
    about: "Small batch coffee roasted on-site daily.",
    address_line: "753 Roast Road",
    area: "Noe Valley",
    city: "San Francisco",
    postal_code: "94131",
    country: "US",
    lat: 37.7510,
    lng: -122.4330,
    phone: "+1-415-555-0753",
    website: "https://cornercoffee.com",
    status: "OPEN",
    status_updated_at: randomMinutesAgo(1, 10),
    hours: "Mon-Fri 6AM-6PM, Sat-Sun 7AM-7PM",
    is_claimed: true,
    verified: false,
    favorites_count: 78,
    created_at: new Date("2024-02-20"),
  },
  {
    id: "9",
    slug: "quick-cuts-barber",
    name: "Quick Cuts Barber",
    category: "barber",
    about: "Fast, affordable cuts for the whole family.",
    address_line: "246 Speed Street",
    area: "Sunset",
    city: "San Francisco", 
    postal_code: "94122",
    country: "US",
    lat: 37.7431,
    lng: -122.4697,
    phone: "+1-415-555-0246",
    status: "CLOSED",
    status_updated_at: randomMinutesAgo(150, 240),
    hours: "Mon-Sat 9AM-8PM, Sun 10AM-6PM",
    is_claimed: false,
    verified: false,
    favorites_count: 23,
    created_at: new Date("2024-03-05"),
  },
  {
    id: "10",
    slug: "healing-herbs-pharmacy",
    name: "Healing Herbs Pharmacy",
    category: "pharmacy",
    about: "Natural remedies and traditional prescriptions.",
    address_line: "135 Wellness Way",
    area: "Chinatown",
    city: "San Francisco",
    postal_code: "94108",
    country: "US",
    lat: 37.7941,
    lng: -122.4078,
    phone: "+1-415-555-0135",
    status: "OPEN",
    status_updated_at: randomMinutesAgo(25, 55),
    hours: "Mon-Fri 9AM-8PM, Sat 10AM-6PM, Sun Closed",
    is_claimed: true,
    verified: true,
    favorites_count: 56,
    created_at: new Date("2024-01-30"),
  }
];

// Helper functions for filtering
export const getShopsByCategory = (category?: ShopCategory) => {
  if (!category) return seedShops;
  return seedShops.filter(shop => shop.category === category);
};

export const getOpenShops = () => {
  return seedShops.filter(shop => shop.status === "OPEN");
};

export const getShopsByDistance = (userLat: number, userLng: number, maxDistance: number = 5) => {
  return seedShops.filter(shop => {
    const distance = calculateDistance(userLat, userLng, shop.lat, shop.lng);
    return distance <= maxDistance;
  });
};

// Calculate distance between two coordinates in km
export const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};
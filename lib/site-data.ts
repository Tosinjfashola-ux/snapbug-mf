export type ProcessStep = {
  n: number
  title: string
  short: string
  body: string
  status: string
  details: string[]
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    n: 1,
    title: 'Tell Us What You Want',
    short: 'Your request',
    body: 'You tell us the vehicle or boat you have in mind — make, model, year range, budget, colour, mileage and where in the world it needs to arrive.',
    status: 'Request Received',
    details: [
      'Vehicle or boat type',
      'Preferred make & model',
      'Year range & budget',
      'Colour & mileage preference',
      'Destination country & city',
    ],
  },
  {
    n: 2,
    title: 'We Source Options',
    short: 'Curated shortlist',
    body: 'Our sourcing network searches for the best available matches. You receive a shortlist of recommended vehicles or boats with full detail.',
    status: 'Vehicle Options Sent',
    details: [
      'Curated shortlist with photos',
      'VIN or vessel information',
      'Purchase price & inspection notes',
      'Estimated landed cost',
    ],
  },
  {
    n: 3,
    title: 'Payment & Procurement',
    short: 'Secure purchase',
    body: 'Once you approve an option, you receive a clear cost breakdown and payment instructions. We then purchase the asset on your behalf.',
    status: 'Payment Confirmed',
    details: [
      'Transparent cost breakdown',
      'Secure payment instructions',
      'We purchase on your behalf',
      'Written confirmation the asset is secured',
    ],
  },
  {
    n: 4,
    title: 'Vehicle Preparation',
    short: 'Export ready',
    body: 'The vehicle or boat is documented, title-processed, inspected and transported to port, ready for its journey.',
    status: 'Vehicle Received',
    details: [
      'Documentation & title processing',
      'Export preparation & inspection',
      'Transport to port',
      'Shipping booked',
    ],
  },
  {
    n: 5,
    title: 'Export & Customs Processing',
    short: 'Cleared for export',
    body: 'We coordinate export documentation and required customs processes before your asset leaves the origin country.',
    status: 'Export Clearance',
    details: [
      'Export documentation filed',
      'Origin customs processing',
      'Compliance verified',
      'Export clearance completed',
    ],
  },
  {
    n: 6,
    title: 'International Shipping',
    short: 'On the water',
    body: 'Your vehicle or boat is loaded and shipped to your destination country. Track it like a premium package, port to port.',
    status: 'In Transit',
    details: [
      'Shipping line & vessel name',
      'Origin & destination ports',
      'Departure & estimated arrival',
      'Bill of lading reference',
    ],
  },
  {
    n: 7,
    title: 'Destination Clearing',
    short: 'Arrival & clearance',
    body: 'On arrival we manage port handling, customs documentation, duties and clearing right through to release.',
    status: 'Customs Clearing',
    details: [
      'Arrived at port',
      'Entered customs',
      'Duties & clearing handled',
      'Vehicle released',
    ],
  },
  {
    n: 8,
    title: 'Final Delivery',
    short: 'At your door',
    body: 'After clearance we arrange transport to your requested location. Your vehicle has arrived.',
    status: 'Delivered',
    details: [
      'Transport to your address',
      'Final inspection',
      'Handover & documentation',
      'Delivered',
    ],
  },
]

export type Vehicle = {
  id: string
  name: string
  make: string
  model: string
  year: number
  category: string
  image: string
  mileage: string
  location: string
  price: string
  landed: string
  spec: string
}

export const CARS: Vehicle[] = [
  {
    id: 'gle-450',
    name: 'Mercedes-Benz GLE 450',
    make: 'Mercedes-Benz',
    model: 'GLE 450 4MATIC',
    year: 2024,
    category: 'Luxury SUV',
    image: '/images/vehicle-suv.png',
    mileage: '12,400 mi',
    location: 'Hamburg, DE',
    price: '$52,900',
    landed: '$61,400',
    spec: '3.0L I6 · Obsidian Black · Macchiato Beige',
  },
  {
    id: 'range-rover',
    name: 'Range Rover Autobiography',
    make: 'Land Rover',
    model: 'Range Rover Autobiography',
    year: 2023,
    category: 'Luxury SUV',
    image: '/images/vehicle-suv-white.png',
    mileage: '18,900 mi',
    location: 'Southampton, UK',
    price: '$118,500',
    landed: '$134,200',
    spec: '4.4L V8 · Fuji White · Ebony',
  },
  {
    id: 's-class',
    name: 'Mercedes-Benz S 580',
    make: 'Mercedes-Benz',
    model: 'S 580 4MATIC',
    year: 2024,
    category: 'Luxury Sedan',
    image: '/images/vehicle-sedan.png',
    mileage: '8,200 mi',
    location: 'Rotterdam, NL',
    price: '$96,700',
    landed: '$109,900',
    spec: '4.0L V8 · Nautical Blue · Nappa Leather',
  },
  {
    id: '911',
    name: 'Porsche 911 Carrera S',
    make: 'Porsche',
    model: '911 Carrera S',
    year: 2023,
    category: 'Sports Car',
    image: '/images/vehicle-sports.png',
    mileage: '6,750 mi',
    location: 'Stuttgart, DE',
    price: '$134,000',
    landed: '$151,600',
    spec: '3.0L Flat-6 · GT Silver · Bordeaux Red',
  },
  {
    id: 'f150',
    name: 'Ford F-150 Platinum',
    make: 'Ford',
    model: 'F-150 Platinum',
    year: 2024,
    category: 'Pickup Truck',
    image: '/images/vehicle-truck.png',
    mileage: '9,100 mi',
    location: 'Houston, US',
    price: '$68,400',
    landed: '$79,200',
    spec: '3.5L EcoBoost V6 · Agate Black · 4x4',
  },
  {
    id: 'gle-gray',
    name: 'Mercedes-Benz GLE 350',
    make: 'Mercedes-Benz',
    model: 'GLE 350 4MATIC',
    year: 2023,
    category: 'Luxury SUV',
    image: '/images/vehicle-suv-gray.png',
    mileage: '21,300 mi',
    location: 'Bremerhaven, DE',
    price: '$47,200',
    landed: '$55,600',
    spec: '2.0L Turbo · Selenite Grey · Espresso Brown',
  },
]

export type Boat = {
  id: string
  name: string
  type: string
  manufacturer: string
  year: number
  image: string
  length: string
  hours: string
  location: string
  price: string
  landed: string
  spec: string
}

export const BOATS: Boat[] = [
  {
    id: 'motor-yacht',
    name: 'Meridian 62 Motor Yacht',
    type: 'Motor Yacht',
    manufacturer: 'Azimut',
    year: 2022,
    image: '/images/boat-yacht.png',
    length: '62 ft',
    hours: '340 hrs',
    location: 'Monaco, MC',
    price: '$1,240,000',
    landed: '$1,398,000',
    spec: 'Twin diesel · 4 cabins · Flybridge',
  },
  {
    id: 'sport-boat',
    name: 'Coastal 34 Sport',
    type: 'Sport Boat',
    manufacturer: 'Sea Ray',
    year: 2023,
    image: '/images/boat-sport.png',
    length: '34 ft',
    hours: '120 hrs',
    location: 'Miami, US',
    price: '$268,000',
    landed: '$312,000',
    spec: 'Twin outboard · Navy hull · Day cruiser',
  },
  {
    id: 'sailing-yacht',
    name: 'Horizon 48 Sailing Yacht',
    type: 'Sailing Yacht',
    manufacturer: 'Beneteau',
    year: 2021,
    image: '/images/boat-sail.png',
    length: '48 ft',
    hours: '600 hrs',
    location: 'Palma, ES',
    price: '$540,000',
    landed: '$611,000',
    spec: 'Sloop rig · 3 cabins · Blue water ready',
  },
]

export type TrackStage = {
  label: string
  state: 'done' | 'current' | 'upcoming'
}

export const ORDER_STAGES: TrackStage[] = [
  { label: 'Request Received', state: 'done' },
  { label: 'Vehicle Options Sent', state: 'done' },
  { label: 'Vehicle Selected', state: 'done' },
  { label: 'Payment Confirmed', state: 'done' },
  { label: 'Vehicle Purchased', state: 'done' },
  { label: 'Vehicle Received', state: 'done' },
  { label: 'Shipping Booked', state: 'done' },
  { label: 'Export Clearance', state: 'done' },
  { label: 'In Transit', state: 'current' },
  { label: 'Arrived at Destination Port', state: 'upcoming' },
  { label: 'Customs Clearing', state: 'upcoming' },
  { label: 'Released', state: 'upcoming' },
  { label: 'Final Delivery', state: 'upcoming' },
  { label: 'Delivered', state: 'upcoming' },
]

export const SAMPLE_ORDER = {
  reference: 'ORD-2026-00128',
  vehicle: '2024 Mercedes-Benz GLE 450',
  image: '/images/order-gle.png',
  status: 'International Shipping',
  eta: 'October 18, 2026',
  details: {
    vehicle: {
      Make: 'Mercedes-Benz',
      Model: 'GLE 450 4MATIC',
      Year: '2024',
      VIN: 'W1N1671•••04821',
      Mileage: '12,400 mi',
      'Purchase Location': 'Hamburg, Germany',
    },
    shipping: {
      'Origin Port': 'Bremerhaven, DE',
      'Destination Port': 'Tema, GH',
      'Shipping Line': 'Grimaldi Lines',
      Vessel: 'MV Grande Lagos',
      'Departure Date': 'Sept 30, 2026',
      'Estimated Arrival': 'Oct 18, 2026',
      'Bill of Lading': 'GRIM-BRV-2026-7741',
    },
    destination: {
      Country: 'Ghana',
      Port: 'Tema',
      'Delivery City': 'Accra',
      'Final Delivery Address': 'East Legon, Accra',
    },
  },
  financials: [
    { label: 'Purchase Price', value: 52900 },
    { label: 'Shipping', value: 3400 },
    { label: 'Clearing', value: 3900 },
    { label: 'Delivery', value: 650 },
    { label: 'Other Fees', value: 550 },
  ],
  paid: 55000,
}

export type FaqItem = { q: string; a: string }
export type FaqGroup = { category: string; items: FaqItem[] }

export const FAQ_GROUPS: FaqGroup[] = [
  {
    category: 'Sourcing & Requests',
    items: [
      {
        q: 'Are you a dealership?',
        a: 'No. We are a sourcing and logistics partner. You tell us the car or boat you want, and we find it, purchase it on your behalf, and manage shipping, clearing and delivery. You are never left to coordinate sellers, ports or customs yourself.',
      },
      {
        q: 'Can you find a specific make, model and year?',
        a: 'Yes. Share your make, model, year range, budget, colour and mileage preferences and our sourcing network returns a curated shortlist of matching options with full detail and landed cost estimates.',
      },
      {
        q: 'What if I only have a rough idea of what I want?',
        a: 'That is perfectly fine. Tell us your intended use, budget and destination, and our team will propose suitable options for you to consider.',
      },
    ],
  },
  {
    category: 'Payment & Pricing',
    items: [
      {
        q: 'How does payment work?',
        a: 'Once you approve an option, you receive a transparent cost breakdown covering purchase price, shipping, clearing, delivery and any fees. After payment is confirmed, we purchase the asset on your behalf and send written confirmation it is secured.',
      },
      {
        q: 'What does the landed cost include?',
        a: 'The estimated landed cost covers the purchase price plus international shipping, destination clearing and duties, and final delivery — so you know the full cost to your door before committing.',
      },
      {
        q: 'Is my payment secure?',
        a: 'Yes. Payments follow clear, documented instructions and every step is confirmed in writing. You always know what has been paid and what remains.',
      },
    ],
  },
  {
    category: 'Shipping, Clearing & Delivery',
    items: [
      {
        q: 'Which countries do you ship to?',
        a: 'We ship across major global trade routes to more than 40 countries. Tell us your destination country and city and we will confirm routing and timelines.',
      },
      {
        q: 'Can I track my vehicle during shipping?',
        a: 'Yes. Every order has a live status page showing each milestone from request through purchase, export, shipping, customs clearing and final delivery — like tracking a premium package.',
      },
      {
        q: 'Do you handle customs and duties?',
        a: 'Yes. We manage export documentation, destination customs, duties and clearing right through to release, then arrange transport to your requested address.',
      },
      {
        q: 'How long does the full process take?',
        a: 'Timelines vary by origin, destination and shipping route, but most vehicles are delivered within several weeks of purchase. You receive an estimated arrival date once shipping is booked.',
      },
    ],
  },
]

export const VALUES = [
  {
    title: 'Single point of accountability',
    body: 'One partner owns your vehicle’s entire journey — no chasing sellers, agents or shipping lines across time zones.',
  },
  {
    title: 'Radical transparency',
    body: 'Clear cost breakdowns, written confirmations and a live status page at every milestone. You always know where things stand.',
  },
  {
    title: 'Verified sourcing',
    body: 'Every option is inspected and documented before it reaches your shortlist, so you buy with confidence.',
  },
  {
    title: 'Global logistics expertise',
    body: 'Established freight, port and clearing partnerships keep your vehicle moving smoothly across borders.',
  },
]

export const DOCUMENTS = [
  { name: 'Purchase Invoice', type: 'PDF', size: '284 KB', ready: true },
  { name: 'Vehicle Inspection Report', type: 'PDF', size: '1.2 MB', ready: true },
  { name: 'Title Documents', type: 'PDF', size: '640 KB', ready: true },
  { name: 'Shipping Booking', type: 'PDF', size: '198 KB', ready: true },
  { name: 'Bill of Lading', type: 'PDF', size: '312 KB', ready: true },
  { name: 'Customs Documentation', type: 'PDF', size: '—', ready: false },
  { name: 'Payment Receipts', type: 'PDF', size: '156 KB', ready: true },
  { name: 'Delivery Confirmation', type: 'PDF', size: '—', ready: false },
]

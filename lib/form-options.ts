export type AssetType = 'car' | 'boat' | 'motorbike' | 'jetski'

export const MAKES: Record<AssetType, string[]> = {
  car: [
    'Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Bugatti', 'Cadillac',
    'Chevrolet', 'Chrysler', 'Dodge', 'Ferrari', 'Ford', 'Genesis', 'GMC', 'Honda', 'Hyundai',
    'Infiniti', 'Jaguar', 'Jeep', 'Kia', 'Lamborghini', 'Land Rover', 'Lexus', 'Lincoln', 'Lucid',
    'Maserati', 'Mazda', 'McLaren', 'Mercedes-Benz', 'Mini', 'Mitsubishi', 'Nissan', 'Porsche',
    'RAM', 'Rivian', 'Rolls-Royce', 'Subaru', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo',
  ],
  boat: [
    'Azimut', 'Beneteau', 'Bertram', 'Boston Whaler', 'Chaparral', 'Chris-Craft', 'Cobalt',
    'Ferretti', 'Grady-White', 'Hatteras', 'Jeanneau', 'Lagoon', 'MasterCraft', 'Pershing',
    'Princess', 'Riva', 'Sea Ray', 'Sunseeker', 'Viking', 'Yamaha Boats',
  ],
  motorbike: [
    'Aprilia', 'BMW Motorrad', 'Ducati', 'Harley-Davidson', 'Honda', 'Indian', 'Kawasaki', 'KTM',
    'MV Agusta', 'Royal Enfield', 'Suzuki', 'Triumph', 'Yamaha',
  ],
  jetski: ['Kawasaki Jet Ski', 'Krash', 'Sea-Doo', 'Taiga', 'Yamaha WaveRunner'],
}

export const MODELS: Record<string, string[]> = {
  // cars
  'Mercedes-Benz': ['A-Class', 'C-Class', 'E-Class', 'S-Class', 'CLA', 'CLE', 'GLA', 'GLB', 'GLC', 'GLE', 'GLE Coupe', 'GLS', 'G-Class', 'AMG GT', 'EQE', 'EQS', 'Maybach S-Class', 'Sprinter'],
  BMW: ['1 Series', '2 Series', '3 Series', '4 Series', '5 Series', '7 Series', '8 Series', 'X1', 'X3', 'X4', 'X5', 'X6', 'X7', 'XM', 'i4', 'i7', 'iX', 'M3', 'M4', 'M5', 'Z4'],
  Audi: ['A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q3', 'Q5', 'Q7', 'Q8', 'e-tron GT', 'RS 6', 'RS Q8', 'R8'],
  Toyota: ['Camry', 'Corolla', 'Avalon', 'RAV4', 'Highlander', 'Land Cruiser', 'Land Cruiser Prado', '4Runner', 'Sequoia', 'Tacoma', 'Tundra', 'Hilux', 'Sienna', 'Supra', 'Venza'],
  Lexus: ['ES', 'IS', 'LS', 'NX', 'RX', 'GX', 'LX', 'LC', 'TX', 'UX'],
  'Land Rover': ['Defender', 'Discovery', 'Discovery Sport', 'Range Rover', 'Range Rover Sport', 'Range Rover Velar', 'Range Rover Evoque'],
  Porsche: ['911', '718 Cayman', '718 Boxster', 'Cayenne', 'Cayenne Coupe', 'Macan', 'Panamera', 'Taycan'],
  Honda: ['Accord', 'Civic', 'CR-V', 'HR-V', 'Pilot', 'Passport', 'Odyssey', 'Ridgeline'],
  Ford: ['Mustang', 'F-150', 'F-250 Super Duty', 'Ranger', 'Bronco', 'Explorer', 'Expedition', 'Edge', 'Escape', 'Mach-E'],
  Chevrolet: ['Camaro', 'Corvette', 'Malibu', 'Silverado', 'Tahoe', 'Suburban', 'Traverse', 'Equinox', 'Colorado'],
  Tesla: ['Model 3', 'Model S', 'Model X', 'Model Y', 'Cybertruck'],
  Lamborghini: ['Huracán', 'Revuelto', 'Urus', 'Temerario'],
  Ferrari: ['296 GTB', 'F8 Tributo', 'Roma', 'SF90 Stradale', 'Purosangue', '812 Superfast', '12Cilindri'],
  'Rolls-Royce': ['Ghost', 'Phantom', 'Cullinan', 'Wraith', 'Dawn', 'Spectre'],
  Bentley: ['Bentayga', 'Continental GT', 'Flying Spur'],
  Hyundai: ['Elantra', 'Sonata', 'Tucson', 'Santa Fe', 'Palisade', 'Ioniq 5', 'Ioniq 6'],
  Kia: ['K5', 'Sportage', 'Sorento', 'Telluride', 'Carnival', 'EV6', 'EV9'],
  Nissan: ['Altima', 'Maxima', 'Rogue', 'Pathfinder', 'Patrol', 'Armada', 'Frontier', 'GT-R', 'Z'],
  Jeep: ['Wrangler', 'Grand Cherokee', 'Cherokee', 'Compass', 'Gladiator', 'Wagoneer', 'Grand Wagoneer'],
  Volkswagen: ['Golf', 'Jetta', 'Passat', 'Tiguan', 'Atlas', 'Touareg', 'ID.4'],
  Cadillac: ['CT4', 'CT5', 'XT4', 'XT5', 'XT6', 'Escalade', 'Lyriq'],
  GMC: ['Sierra', 'Yukon', 'Yukon XL', 'Acadia', 'Terrain', 'Hummer EV'],
  Dodge: ['Charger', 'Challenger', 'Durango', 'Hornet'],
  RAM: ['1500', '2500', '3500', 'ProMaster'],
  // boats
  Azimut: ['Atlantis 45', 'Azimut 53', 'Azimut 62 Flybridge', 'Azimut 68', 'Grande 27M', 'S7', 'Verve 47'],
  Sunseeker: ['Predator 55', 'Predator 65', 'Manhattan 55', 'Manhattan 68', '76 Yacht', '88 Yacht'],
  Princess: ['F45', 'F55', 'F65', 'S62', 'V55', 'Y72', 'X80'],
  'Sea Ray': ['SDX 270', 'SLX 350', 'Sundancer 320', 'Sundancer 370', 'Sundancer 400'],
  'Boston Whaler': ['Montauk 170', 'Dauntless 240', 'Outrage 330', 'Realm 350', 'Vantage 280'],
  Riva: ['Aquariva Super', 'Rivamare', 'Iseo', 'Dolceriva', '76 Perseo'],
  Beneteau: ['Antares 11', 'Flyer 10', 'Gran Turismo 41', 'Oceanis 46.1', 'Swift Trawler 48'],
  // motorbikes
  Ducati: ['Panigale V2', 'Panigale V4', 'Streetfighter V4', 'Monster', 'Multistrada V4', 'Diavel V4', 'Scrambler', 'DesertX'],
  'Harley-Davidson': ['Street Glide', 'Road Glide', 'Fat Boy', 'Heritage Classic', 'Sportster S', 'Pan America', 'Low Rider S', 'Breakout'],
  'BMW Motorrad': ['S 1000 RR', 'M 1000 RR', 'R 1300 GS', 'R 1250 RT', 'F 900 R', 'R nineT', 'K 1600 GTL'],
  Kawasaki: ['Ninja ZX-10R', 'Ninja H2', 'Ninja 650', 'Z900', 'Versys 650', 'Vulcan S'],
  Yamaha: ['YZF-R1', 'YZF-R7', 'MT-09', 'MT-07', 'Ténéré 700', 'Tracer 9 GT', 'XSR900'],
  Triumph: ['Speed Triple 1200', 'Street Triple', 'Tiger 900', 'Tiger 1200', 'Bonneville T120', 'Rocket 3'],
  KTM: ['1390 Super Duke R', '890 Duke', '1290 Super Adventure', '890 Adventure', 'RC 390'],
  Indian: ['Chief', 'Chieftain', 'Scout', 'Challenger', 'FTR', 'Roadmaster'],
  // jet skis
  'Sea-Doo': ['GTX 300', 'RXP-X 325', 'RXT-X 325', 'Wake Pro 230', 'Spark Trixx', 'FishPro Apex', 'GTI SE 170'],
  'Yamaha WaveRunner': ['FX Cruiser SVHO', 'FX SVHO', 'GP SVHO', 'VX Cruiser', 'SuperJet', 'JetBlaster'],
  'Kawasaki Jet Ski': ['Ultra 310LX', 'Ultra 310R', 'STX 160LX', 'SX-R 160'],
}

const CURRENT_YEAR = new Date().getFullYear()
export const YEARS = Array.from({ length: CURRENT_YEAR + 1 - 1990 + 1 }, (_, i) =>
  String(CURRENT_YEAR + 1 - i),
)

export const BUDGETS: Record<AssetType, string[]> = {
  car: ['Under $20,000', '$20,000 – $35,000', '$35,000 – $50,000', '$50,000 – $70,000', '$70,000 – $100,000', '$100,000 – $150,000', '$150,000 – $250,000', '$250,000+'],
  boat: ['Under $50,000', '$50,000 – $150,000', '$150,000 – $500,000', '$500,000 – $1M', '$1M – $3M', '$3M+'],
  motorbike: ['Under $10,000', '$10,000 – $20,000', '$20,000 – $35,000', '$35,000 – $50,000', '$50,000+'],
  jetski: ['Under $10,000', '$10,000 – $15,000', '$15,000 – $20,000', '$20,000 – $30,000', '$30,000+'],
}

export const COLOURS = [
  'Any colour', 'Black', 'Obsidian Black', 'White', 'Pearl White', 'Silver', 'Grey', 'Graphite',
  'Blue', 'Navy Blue', 'Red', 'Burgundy', 'Green', 'British Racing Green', 'Brown', 'Beige',
  'Gold', 'Yellow', 'Orange', 'Matte Black', 'Custom / two-tone',
]

export const MILEAGE = ['Any mileage', 'Under 5,000 mi', 'Under 10,000 mi', 'Under 20,000 mi', 'Under 30,000 mi', 'Under 50,000 mi', 'Under 75,000 mi', 'Under 100,000 mi']
export const HOURS = ['Any hours', 'Under 50 hrs', 'Under 100 hrs', 'Under 250 hrs', 'Under 500 hrs', 'Under 1,000 hrs', 'Under 2,000 hrs']

export const COUNTRIES = [
  'Ghana', 'Nigeria', 'Kenya', 'South Africa', 'Côte d’Ivoire', 'Senegal', 'Cameroon', 'Togo',
  'Benin', 'Liberia', 'Sierra Leone', 'Gambia', 'Tanzania', 'Uganda', 'Rwanda', 'Ethiopia',
  'Zambia', 'Zimbabwe', 'Botswana', 'Namibia', 'Angola', 'Mozambique', 'Egypt', 'Morocco',
  'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain', 'Jordan',
  'United Kingdom', 'Ireland', 'France', 'Germany', 'Netherlands', 'Belgium', 'Spain',
  'Portugal', 'Italy', 'Switzerland', 'Poland', 'Sweden', 'Norway',
  'United States', 'Canada', 'Mexico', 'Jamaica', 'Trinidad and Tobago', 'Bahamas',
  'Dominican Republic', 'Brazil', 'Colombia', 'Chile', 'Argentina',
  'India', 'Pakistan', 'Bangladesh', 'Sri Lanka', 'Japan', 'South Korea', 'Singapore',
  'Malaysia', 'Thailand', 'Philippines', 'Indonesia', 'Vietnam', 'Australia', 'New Zealand',
]

export const CITIES: Record<string, string[]> = {
  Ghana: ['Accra', 'Kumasi', 'Tema', 'Takoradi', 'Tamale', 'Cape Coast', 'Koforidua', 'Sunyani', 'Ho'],
  Nigeria: ['Lagos', 'Abuja', 'Port Harcourt', 'Ibadan', 'Kano', 'Benin City', 'Enugu', 'Calabar', 'Warri'],
  Kenya: ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret'],
  'South Africa': ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Port Elizabeth'],
  'United Arab Emirates': ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah'],
  'United Kingdom': ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow', 'Liverpool', 'Bristol', 'Edinburgh'],
  'United States': ['New York', 'Los Angeles', 'Miami', 'Houston', 'Atlanta', 'Chicago', 'Dallas', 'Newark', 'Baltimore'],
  Canada: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa', 'Halifax'],
  'Côte d’Ivoire': ['Abidjan', 'Yamoussoukro', 'San-Pédro'],
  Senegal: ['Dakar', 'Thiès', 'Saint-Louis'],
  Togo: ['Lomé', 'Kara'],
  Cameroon: ['Douala', 'Yaoundé'],
  Tanzania: ['Dar es Salaam', 'Arusha', 'Zanzibar'],
  'Saudi Arabia': ['Riyadh', 'Jeddah', 'Dammam'],
  Qatar: ['Doha'],
  Jamaica: ['Kingston', 'Montego Bay'],
  Australia: ['Sydney', 'Melbourne', 'Brisbane', 'Perth'],
}

export const DIAL_CODES = [
  '+233 Ghana', '+234 Nigeria', '+254 Kenya', '+27 South Africa', '+225 Côte d’Ivoire',
  '+221 Senegal', '+228 Togo', '+229 Benin', '+237 Cameroon', '+231 Liberia', '+232 Sierra Leone',
  '+255 Tanzania', '+256 Uganda', '+250 Rwanda', '+971 UAE', '+966 Saudi Arabia', '+974 Qatar',
  '+44 United Kingdom', '+353 Ireland', '+33 France', '+49 Germany', '+31 Netherlands',
  '+34 Spain', '+39 Italy', '+1 United States / Canada', '+1 876 Jamaica', '+52 Mexico',
  '+55 Brazil', '+91 India', '+81 Japan', '+65 Singapore', '+61 Australia',
]

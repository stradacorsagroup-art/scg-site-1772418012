export type InventoryItem = {
  slug: string;
  car: string;
  terms: string[];
  down: Record<string, number>;
  monthly: number;
  scgMonthlyByTerm?: Record<string, number>;
  scgBuyoutByTerm?: Record<string, number>;
  display: string;
  location: string;
  mileage?: string;
  exterior?: string;
  interior?: string;
  notes?: string;
  images?: string[];
  video?: string;
};

export const inventory: InventoryItem[] = [
  {
    "slug": "2020-mclaren-720s-spyder-satin-black",
    "car": "2020 McLaren 720S Spider",
    "terms": [
      "12 mo"
    ],
    "down": {
      "12 mo": 59900
    },
    "monthly": 6995,
    "display": "From $59,900 down • $6,995/mo",
    "location": "New York, NY, United States",
    "scgMonthlyByTerm": {
      "12 mo": 6995
    },
    "scgBuyoutByTerm": {
      "12 mo": 229900
    },
    "mileage": "23,000"
  },
  {
    "slug": "2021-mercedes-benz-s580-faybach-w1kg7gbxma052327",
    "car": "2021 Mercedes-Benz S580 'FAYBACH",
    "terms": [
      "3 mo",
      "12 mo"
    ],
    "down": {
      "3 mo": 10900,
      "12 mo": 13900
    },
    "monthly": 2495,
    "display": "From $10,900 down • $2,495/mo",
    "location": "New York, NY, United States",
    "scgMonthlyByTerm": {
      "3 mo": 2495,
      "12 mo": 2495
    },
    "scgBuyoutByTerm": {
      "3 mo": 65000,
      "12 mo": 65000
    },
    "mileage": "65,000"
  },
  {
    "slug": "2022-mercedes-benz-s580",
    "car": "2022 Mercedes-Benz S580",
    "terms": [
      "3 mo",
      "12 mo"
    ],
    "down": {
      "3 mo": 10900,
      "12 mo": 12900
    },
    "monthly": 2695,
    "display": "From $10,900 down • $2,695/mo",
    "location": "New York, NY, United States",
    "scgMonthlyByTerm": {
      "3 mo": 2695,
      "12 mo": 2695
    },
    "scgBuyoutByTerm": {
      "3 mo": 65000,
      "12 mo": 65000
    },
    "mileage": "65,000",
    "images": [
      "/images/cars/2022-mercedes-benz-s580/hero.png",
      "/images/cars/2022-mercedes-benz-s580/2.png",
      "/images/cars/2022-mercedes-benz-s580/3.png",
      "/images/cars/2022-mercedes-benz-s580/4.png",
      "/images/cars/2022-mercedes-benz-s580/5.png",
      "/images/cars/2022-mercedes-benz-s580/6.png"
    ]
  },
  {
    "slug": "2019-lamborghini-urus-awd-blue-zpbua1zl6kla00922",
    "car": "2019 Lamborghini Urus AWD BLUE",
    "terms": [
      "3 mo",
      "12 mo"
    ],
    "down": {
      "3 mo": 17995,
      "12 mo": 29900
    },
    "monthly": 3995,
    "display": "From $17,995 down • $3,995/mo",
    "location": "—",
    "scgMonthlyByTerm": {
      "3 mo": 3995,
      "12 mo": 3995
    },
    "scgBuyoutByTerm": {
      "3 mo": 125000,
      "12 mo": 119000
    },
    "mileage": "111,000"
  },
  {
    "slug": "2019-lamborghini-urus-awd-green-zpbuc3zl4pla22334",
    "car": "2019 Lamborghini Urus AWD GREEN",
    "terms": [
      "3 mo"
    ],
    "down": {
      "3 mo": 26900
    },
    "monthly": 5995,
    "display": "From $26,900 down • $5,995/mo",
    "location": "New York, NY, United States",
    "scgMonthlyByTerm": {
      "3 mo": 5995
    },
    "scgBuyoutByTerm": {
      "3 mo": 250000
    },
    "mileage": "38,000"
  },
  {
    "slug": "2019-lamborghini-urus-awd-white-zpbua1zl5kla01124",
    "car": "2019 Lamborghini Urus AWD WHITE",
    "terms": [
      "3 mo",
      "12 mo"
    ],
    "down": {
      "3 mo": 19900,
      "12 mo": 29995
    },
    "monthly": 4495,
    "display": "From $19,900 down • $4,495/mo",
    "location": "—",
    "scgMonthlyByTerm": {
      "3 mo": 4495,
      "12 mo": 4495
    },
    "scgBuyoutByTerm": {
      "3 mo": 165000,
      "12 mo": 150000
    },
    "mileage": "40,000"
  },
  {
    "slug": "2023-maserati-mc20-18",
    "car": "2023 Maserati MC20",
    "terms": [
      "3 mo",
      "12 mo"
    ],
    "down": {
      "3 mo": 25995,
      "12 mo": 25995
    },
    "monthly": 3250,
    "display": "From $25,995 down • $3,250/mo",
    "location": "—",
    "notes": "$339,700 MSRP • 6/12 Month Lease To Own • No Credit/Income Check • Buyout Option At End",
    "scgMonthlyByTerm": {
      "3 mo": 3250,
      "12 mo": 3250
    },
    "mileage": "24,000"
  },
  {
    "slug": "2018-rr-dawn-66l-v12",
    "car": "2018 Rolls-Royce Dawn 6.6L V12",
    "terms": [
      "3 mo",
      "12 mo"
    ],
    "down": {
      "3 mo": 19995,
      "12 mo": 19995
    },
    "monthly": 5995,
    "display": "From $19,995 down • $5,995/mo",
    "location": "West Palm FL",
    "notes": "White Exterior / Handcrafted Red Interior • $235k Purchase Price • 6/12 Month Lease • No Credit or Income Check • Buyout Option at End",
    "scgMonthlyByTerm": {
      "3 mo": 5995,
      "12 mo": 5995
    },
    "mileage": "19,780"
  },
  {
    "slug": "2018-mercedes-amg-gt-c-21",
    "car": "2018 Mercedes-AMG GT C",
    "terms": [
      "3 mo",
      "12 mo"
    ],
    "down": {
      "3 mo": 17995,
      "12 mo": 17995
    },
    "monthly": 2000,
    "display": "From $17,995 down • $2,000/mo",
    "location": "—",
    "notes": "C = Competition (highly sought after trim) • Silver Matte Paint • 6/12 Month Lease to Own • No Credit or Income Check • Buyout Option at End of Lease",
    "scgMonthlyByTerm": {
      "3 mo": 2000,
      "12 mo": 2000
    },
    "mileage": "45,xxx"
  },
  {
    "slug": "2021-audi-rs-6-avant-22",
    "car": "2021 Audi RS 6 Avant",
    "terms": [
      "3 mo",
      "12 mo"
    ],
    "down": {
      "3 mo": 17995,
      "12 mo": 17995
    },
    "monthly": 2500,
    "display": "From $17,995 down • $2,500/mo",
    "location": "—",
    "notes": "Full Stealth PPF • 6/12 Month Lease to Own • No Credit or Income Check • Buyout Option at End of Lease",
    "scgMonthlyByTerm": {
      "3 mo": 2500,
      "12 mo": 2500
    },
    "mileage": "40,xxx"
  },
  {
    "slug": "2025-rolls-royce-spectre-electric-23",
    "car": "2025 Rolls-Royce Spectre Electric",
    "terms": [
      "3 mo",
      "12 mo"
    ],
    "down": {
      "3 mo": 49995,
      "12 mo": 49995
    },
    "monthly": 9000,
    "display": "From $49,995 down • $9,000/mo",
    "location": "—",
    "notes": "INSANE SPEC • TEMPESTE GREY • FACTORY BLUE INTERIOR • STARLIGHT DOORS • 6/12 Month Lease to Own • No Credit or Income Check • Buyout Option Available at End",
    "scgMonthlyByTerm": {
      "3 mo": 9000,
      "12 mo": 9000
    },
    "mileage": "13,xxx"
  },
  {
    "slug": "2021-mercedes-g63-satin-black-12",
    "car": "2021 MERCEDES G63 SATIN BLACK",
    "terms": [],
    "down": {},
    "monthly": 0,
    "display": "Pricing on request",
    "location": "—",
    "mileage": "—"
  },
  {
    "slug": "2021-mercedes-g63-satin-white-13",
    "car": "2021 MERCEDES G63 SATIN WHITE",
    "terms": [],
    "down": {},
    "monthly": 0,
    "display": "Pricing on request",
    "location": "—",
    "mileage": "—"
  },
  {
    "slug": "2023-maybach-gls600-blackred-14",
    "car": "2023 MAYBACH GLS600 BLACK/RED",
    "terms": [],
    "down": {},
    "monthly": 0,
    "display": "Pricing on request",
    "location": "—",
    "mileage": "—"
  },
  {
    "slug": "2021-maybach-gls600-blackgold-15",
    "car": "2021 MAYBACH GLS600 BLACK/GOLD",
    "terms": [],
    "down": {},
    "monthly": 0,
    "display": "Pricing on request",
    "location": "—",
    "mileage": "—"
  },
  {
    "slug": "2025-c8-2lt-16",
    "car": "2025 C8 2LT",
    "terms": [],
    "down": {},
    "monthly": 0,
    "display": "Pricing on request",
    "location": "—",
    "mileage": "—"
  },
  {
    "slug": "2022-mercedes-benz-e450-17",
    "car": "2022 Mercedes-Benz E450",
    "terms": [],
    "down": {},
    "monthly": 0,
    "display": "Pricing on request",
    "location": "—",
    "mileage": "—"
  },
  {
    "slug": "2021-mercedes-benz-s580-satin-red-18",
    "car": "2021 Mercedes-Benz S580 SATIN RED",
    "terms": [],
    "down": {},
    "monthly": 0,
    "display": "Pricing on request",
    "location": "—",
    "mileage": "—"
  },
  {
    "slug": "2019-ferrari-portofino-19",
    "car": "2019 Ferrari Portofino",
    "terms": [],
    "down": {},
    "monthly": 0,
    "display": "Pricing on request",
    "location": "—",
    "mileage": "—"
  },
  {
    "slug": "2024-maybach-gls-600-20",
    "car": "2024 Maybach GLS 600",
    "terms": [],
    "down": {},
    "monthly": 0,
    "display": "Pricing on request",
    "location": "—",
    "mileage": "—"
  },
  {
    "slug": "keyvany-keyrus-21",
    "car": "Keyvany Keyrus",
    "terms": [],
    "down": {},
    "monthly": 0,
    "display": "Pricing on request",
    "location": "—",
    "mileage": "—"
  },
  {
    "slug": "2021-bmw-m8-competition-gran-coupe-22",
    "car": "2021 BMW M8 Competition Gran Coupe",
    "terms": [],
    "down": {},
    "monthly": 0,
    "display": "Pricing on request",
    "location": "—",
    "mileage": "—"
  },
  {
    "slug": "2023-lamborghini-urus-performante-zpbuc3zl4pla22334",
    "car": "2023 Lamborghini Urus Performante",
    "terms": [
      "3 mo"
    ],
    "down": {
      "3 mo": 26900
    },
    "monthly": 5995,
    "display": "From $26,900 down • $5,995/mo",
    "location": "New York, NY, United States",
    "scgMonthlyByTerm": {
      "3 mo": 5995
    },
    "scgBuyoutByTerm": {
      "3 mo": 250000
    },
    "mileage": "38,000",
    "images": [
      "/images/cars/2023-lamborghini-urus-performante/hero.png",
      "/images/cars/2023-lamborghini-urus-performante/2.png",
      "/images/cars/2023-lamborghini-urus-performante/3.png",
      "/images/cars/2023-lamborghini-urus-performante/4.png",
      "/images/cars/2023-lamborghini-urus-performante/5.png",
      "/images/cars/2023-lamborghini-urus-performante/6.png"
    ]
  }
];

export const membershipFee = 1000;
export const deposit = 1000;

export function getInventoryBySlug(slug: string) {
  return inventory.find((item) => item.slug === slug);
}

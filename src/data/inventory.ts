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
  images?: string[];
  video?: string;
};

export const inventory: InventoryItem[] = [
  {
    "slug": "2022-rolls-royce-ghost-black-badge-whiteblack",
    "car": "2022 Rolls-Royce Ghost Black Badge",
    "terms": [
      "3 mo",
      "12 mo"
    ],
    "down": {
      "3 mo": 27900,
      "12 mo": 47900
    },
    "monthly": 5595,
    "display": "From $27,900 down • $5,595/mo",
    "location": "New York, NY, United States",
    "scgMonthlyByTerm": {
      "3 mo": 5595,
      "12 mo": 5595
    },
    "scgBuyoutByTerm": {
      "3 mo": 229900,
      "12 mo": 215000
    },
    "mileage": "61,000",
    "images": [
      "/images/cars/ghost-black-badge/1.jpg",
      "/images/cars/ghost-black-badge/1.png",
      "/images/cars/ghost-black-badge/2.jpg",
      "/images/cars/ghost-black-badge/2.png",
      "/images/cars/ghost-black-badge/3.jpg",
      "/images/cars/ghost-black-badge/3.png",
      "/images/cars/ghost-black-badge/a.jpg",
      "/images/cars/ghost-black-badge/b.jpg",
      "/images/cars/ghost-black-badge/c.jpg"
    ],
    "video": "/videos/cars/ghost-black-badge.mov"
  },
  {
    "slug": "2020-rolls-royce-cullinan-slatv4c0xlu201507",
    "car": "2020 Rolls-Royce Cullinan",
    "terms": [
      "3 mo",
      "12 mo"
    ],
    "down": {
      "3 mo": 26900,
      "12 mo": 49900
    },
    "monthly": 6900,
    "display": "From $26,900 down • $6,900/mo",
    "location": "New York, NY, United States",
    "scgMonthlyByTerm": {
      "3 mo": 6900,
      "12 mo": 6900
    },
    "scgBuyoutByTerm": {
      "3 mo": 244900,
      "12 mo": 229900
    },
    "mileage": "47,000",
    "images": [
      "/images/cars/2020-rolls-royce-cullinan/hero.png",
      "/images/cars/2020-rolls-royce-cullinan/2.png",
      "/images/cars/2020-rolls-royce-cullinan/3.png",
      "/images/cars/2020-rolls-royce-cullinan/4.png",
      "/images/cars/2020-rolls-royce-cullinan/5.png",
      "/images/cars/2020-rolls-royce-cullinan/6.png",
      "/images/cars/2020-rolls-royce-cullinan/7.png"
    ],
    "video": "/videos/cars/2020-rolls-royce-cullinan/hero.mov"
  },
  {
    "slug": "2020-rolls-royce-cullinan-black-badge-slatv8c09lu200999",
    "car": "2020 Rolls-Royce Cullinan Black Badge",
    "terms": [
      "3 mo",
      "12 mo"
    ],
    "down": {
      "3 mo": 26900,
      "12 mo": 49900
    },
    "monthly": 6900,
    "display": "From $26,900 down • $6,900/mo",
    "location": "New York, NY, United States",
    "scgMonthlyByTerm": {
      "3 mo": 6900,
      "12 mo": 6900
    },
    "scgBuyoutByTerm": {
      "3 mo": 239900,
      "12 mo": 229900
    },
    "mileage": "51,000",
    "images": [
      "/images/cars/2020-rolls-royce-cullinan-black-badge/hero.png",
      "/images/cars/2020-rolls-royce-cullinan-black-badge/2.png",
      "/images/cars/2020-rolls-royce-cullinan-black-badge/3.png"
    ],
    "video": "/videos/cars/2020-rolls-royce-cullinan-black-badge/hero.mov"
  },
  {
    "slug": "2018-ferrari-488-spider-yellow",
    "car": "2018 Ferrari 488 Spider",
    "terms": [
      "3 mo",
      "12 mo"
    ],
    "down": {
      "3 mo": 26900,
      "12 mo": 49900
    },
    "monthly": 6900,
    "display": "From $26,900 down • $6,900/mo",
    "location": "New York, NY, United States",
    "scgMonthlyByTerm": {
      "3 mo": 6900,
      "12 mo": 6900
    },
    "scgBuyoutByTerm": {
      "3 mo": 250000,
      "12 mo": 235000
    },
    "mileage": "27,000",
    "images": [
      "/images/cars/2018-ferrari-488-spider/hero.png",
      "/images/cars/2018-ferrari-488-spider/2.png",
      "/images/cars/2018-ferrari-488-spider/3.png",
      "/images/cars/2018-ferrari-488-spider/4.png",
      "/images/cars/2018-ferrari-488-spider/5.png"
    ]
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
  },
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
    "slug": "2021-mercedes-benz-s580-black-on-peanut-butter",
    "car": "2021 Mercedes-Benz S580 Black on Peanut Butter",
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
    "mileage": "65,000",
    "images": [
      "/images/cars/2021-mercedes-benz-s580/hero.png",
      "/images/cars/2021-mercedes-benz-s580/2.png",
      "/images/cars/2021-mercedes-benz-s580/3.png"
    ],
    "video": "/videos/cars/2021-mercedes-benz-s580/hero.mov"
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
    "slug": "2021-mercedes-benz-g-class-amg-g-63-w1nyc7hj3mx403105",
    "car": "2021 Mercedes-Benz G-Class AMG G 63",
    "terms": [
      "3 mo",
      "12 mo"
    ],
    "down": {
      "3 mo": 19900,
      "12 mo": 29900
    },
    "monthly": 4495,
    "display": "From $19,900 down • $4,495/mo",
    "location": "—",
    "scgMonthlyByTerm": {
      "3 mo": 4495,
      "12 mo": 4495
    },
    "scgBuyoutByTerm": {
      "3 mo": 170000,
      "12 mo": 160000
    },
    "mileage": "36,000"
  },
  {
    "slug": "2020-mercedes-g63-satin-black",
    "car": "2020 Mercedes-Benz G-Class AMG G 63",
    "terms": [
      "12 mo"
    ],
    "down": {
      "12 mo": 19900
    },
    "monthly": 3400,
    "display": "From $19,900 down • $3,400/mo",
    "location": "New York, NY, United States",
    "scgMonthlyByTerm": {
      "12 mo": 3400
    },
    "scgBuyoutByTerm": {
      "12 mo": 107000
    },
    "mileage": "56,000",
    "images": [
      "/images/cars/2021-mercedes-g63/hero.png",
      "/images/cars/2021-mercedes-g63/2.png",
      "/images/cars/2021-mercedes-g63/3.png",
      "/images/cars/2021-mercedes-g63/4.png"
    ]
  },
  {
    "slug": "2021-maybach-gls600-blackgold",
    "car": "2021 Mercedes-Benz Maybach GLS 600",
    "terms": [
      "3 mo",
      "12 mo"
    ],
    "down": {
      "3 mo": 14900,
      "12 mo": 24995
    },
    "monthly": 3700,
    "display": "From $14,900 down • $3,700/mo",
    "location": "New York, NY, United States",
    "scgMonthlyByTerm": {
      "3 mo": 3700
    },
    "scgBuyoutByTerm": {
      "3 mo": 125000,
      "12 mo": 116000
    },
    "mileage": "36,000",
    "images": [
      "/images/cars/2023-maybach-gls600-black-red/hero.png",
      "/images/cars/2023-maybach-gls600-black-red/2.png",
      "/images/cars/2023-maybach-gls600-black-red/3.png",
      "/images/cars/2023-maybach-gls600-black-red/4.png",
      "/images/cars/2023-maybach-gls600-black-red/5.png"
    ]
  },
  {
    "slug": "2019-lamborghini-urus-awd-zpbua1zl6kla00922",
    "car": "2019 Lamborghini Urus AWD",
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
    "slug": "2019-lamborghini-urus-awd-zpbua1zl5kla01124",
    "car": "2019 Lamborghini Urus AWD",
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
    "slug": "2024-bmw-xm-14",
    "car": "2024 BMW XM",
    "terms": [],
    "down": {},
    "monthly": 0,
    "display": "Pricing on request",
    "location": "—",
    "mileage": "9,000"
  },
  {
    "slug": "2026-jeep-wrangler-rubicon",
    "car": "2026 Jeep Wrangler Rubicon",
    "terms": [
      "12 mo"
    ],
    "down": {
      "12 mo": 7990
    },
    "monthly": 1995,
    "display": "From $7,990 down • $1,995/mo",
    "location": "ATL",
    "scgMonthlyByTerm": {
      "12 mo": 1995
    },
    "mileage": "630"
  },
  {
    "slug": "2020-rolls-royce-cullinan",
    "car": "2020 Rolls-Royce Cullinan",
    "terms": [
      "12 mo"
    ],
    "down": {
      "12 mo": 31900
    },
    "monthly": 4900,
    "display": "From $31,900 down • $4,900/mo",
    "location": "Miami, FL",
    "scgMonthlyByTerm": {
      "12 mo": 4900
    },
    "scgBuyoutByTerm": {
      "12 mo": 229900
    },
    "mileage": "35,000",
    "images": [
      "/images/cars/2020-rolls-royce-cullinan-black-badge/hero.png",
      "/images/cars/2020-rolls-royce-cullinan-black-badge/2.png",
      "/images/cars/2020-rolls-royce-cullinan-black-badge/3.png"
    ],
    "video": "/videos/cars/2020-rolls-royce-cullinan-black-badge/hero.mov"
  },
  {
    "slug": "2024-rolls-royce-spectre-electric",
    "car": "2024 Rolls-Royce Spectre Electric",
    "terms": [
      "12 mo"
    ],
    "down": {
      "12 mo": 44900
    },
    "monthly": 6400,
    "display": "From $44,900 down • $6,400/mo",
    "location": "Miami, FL",
    "scgMonthlyByTerm": {
      "12 mo": 6400
    },
    "scgBuyoutByTerm": {
      "12 mo": 421900
    },
    "mileage": "1,096"
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
    "scgMonthlyByTerm": {
      "3 mo": 9000,
      "12 mo": 9000
    },
    "mileage": "13,xxx"
  }
];

export const membershipFee = 1000;
export const deposit = 1000;

export function getInventoryBySlug(slug: string) {
  return inventory.find((item) => item.slug === slug);
}

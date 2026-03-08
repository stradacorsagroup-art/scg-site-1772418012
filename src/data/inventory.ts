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
    "slug": "2018-amg-gtc-competition",
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
    "location": "Atlanta, GA"
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
      "12 mo": 26900
    },
    "monthly": 6900,
    "display": "From $26,900 down • $6,900/mo",
    "location": "New York, NY, United States",
    "images": [
      "/images/cars/2018-ferrari-488-spider/hero.png",
      "/images/cars/2018-ferrari-488-spider/2.png",
      "/images/cars/2018-ferrari-488-spider/3.png",
      "/images/cars/2018-ferrari-488-spider/4.png",
      "/images/cars/2018-ferrari-488-spider/5.png"
    ]
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
    "location": "West Palm FL"
  },
  {
    "slug": "2019-lamborghini-urus-blue",
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
    "location": "Atlanta, GA"
  },
  {
    "slug": "2019-white-urus",
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
    "location": "Atlanta, GA"
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
    "location": "New York, NY, United States"
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
    "images": [
      "/images/cars/2021-mercedes-g63/hero.png",
      "/images/cars/2021-mercedes-g63/2.png",
      "/images/cars/2021-mercedes-g63/3.png",
      "/images/cars/2021-mercedes-g63/4.png"
    ]
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
    "images": [
      "/images/cars/2020-rolls-royce-cullinan-black-badge/hero.png",
      "/images/cars/2020-rolls-royce-cullinan-black-badge/2.png",
      "/images/cars/2020-rolls-royce-cullinan-black-badge/3.png"
    ],
    "video": "/videos/cars/2020-rolls-royce-cullinan-black-badge/hero.mov"
  },
  {
    "slug": "2020-rolls-royce-cullinan-bb-whitewhite-forgiatos",
    "car": "2020 Rolls-Royce Cullinan BB White/White Forgiatos",
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
    "images": [
      "/images/cars/2020-rolls-royce-cullinan-black-badge/hero.png",
      "/images/cars/2020-rolls-royce-cullinan-black-badge/2.png",
      "/images/cars/2020-rolls-royce-cullinan-black-badge/3.png"
    ],
    "video": "/videos/cars/2020-rolls-royce-cullinan-black-badge/hero.mov"
  },
  {
    "slug": "2020-rolls-royce-cullinan-whitered",
    "car": "2020 Rolls-Royce Cullinan White/Red",
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
    "images": [
      "/images/cars/2023-maybach-gls600-black-red/hero.png",
      "/images/cars/2023-maybach-gls600-black-red/2.png",
      "/images/cars/2023-maybach-gls600-black-red/3.png",
      "/images/cars/2023-maybach-gls600-black-red/4.png",
      "/images/cars/2023-maybach-gls600-black-red/5.png"
    ]
  },
  {
    "slug": "2021-mercedes-g63-199-exclusive-edition",
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
    "location": "Atlanta, GA"
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
    "images": [
      "/images/cars/2021-mercedes-benz-s580/hero.png",
      "/images/cars/2021-mercedes-benz-s580/2.png",
      "/images/cars/2021-mercedes-benz-s580/3.png"
    ],
    "video": "/videos/cars/2021-mercedes-benz-s580/hero.mov"
  },
  {
    "slug": "2021-rs6-avant",
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
    "location": "Atlanta, GA"
  },
  {
    "slug": "2022-bentley-gt",
    "car": "2022 Bentley GT",
    "terms": [
      "3 mo",
      "12 mo"
    ],
    "down": {
      "3 mo": 17995,
      "12 mo": 17995
    },
    "monthly": 3500,
    "display": "From $17,995 down • $3,500/mo",
    "location": "Atlanta, GA"
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
    "slug": "2023-lamborghini-urus-performante-yellow",
    "car": "2023 LAMBORGHINI URUS PERFORMANTE YELLOW",
    "terms": [
      "3 mo"
    ],
    "down": {
      "3 mo": 26900
    },
    "monthly": 5995,
    "display": "From $26,900 down • $5,995/mo",
    "location": "New York, NY, United States",
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
    "slug": "2023-mc20-cielo",
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
    "location": "Atlanta, GA"
  },
  {
    "slug": "2024-bmw-xm",
    "car": "2024 BMW XM",
    "terms": [],
    "down": {},
    "monthly": 0,
    "display": "$0/mo",
    "location": "Atlanta, GA"
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
    "location": "Miami, FL"
  },
  {
    "slug": "2025-rr-spectre",
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
    "location": "Atlanta, GA"
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
    "location": "ATL"
  }
];

export const membershipFee = 1000;
export const deposit = 1000;

export function getInventoryBySlug(slug: string) {
  return inventory.find((item) => item.slug === slug);
}

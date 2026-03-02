export type InventoryItem = {
  slug: string;
  car: string;
  terms: string[];
  down: Record<string, number>;
  monthly: number;
  display: string;
  location: string;
  mileage?: string;
  exterior?: string;
  interior?: string;
  images?: string[];
};

export const inventory: InventoryItem[] = [
  {
    "slug": "2020-mclaren-720s-spyder-satin-black",
    "car": "2020 McLaren 720s Spyder Satin Black",
    "terms": [
      "6 mo",
      "12 mo"
    ],
    "down": {
      "6 mo": 44900,
      "12 mo": 59900
    },
    "monthly": 6995,
    "display": "From $44,900 down • $6,995/mo",
    "location": "Atlanta, GA"
  },
  {
    "slug": "2020-mercedes-g63-satin-black",
    "car": "2020 Mercedes G63 Satin Black",
    "terms": [
      "12 mo"
    ],
    "down": {
      "12 mo": 19900
    },
    "monthly": 3400,
    "display": "$19,900 down • $3,400/mo",
    "location": "Atlanta, GA"
  },
  {
    "slug": "2017-rolls-royce-dawn-white-on-red",
    "car": "2017 Rolls Royce Dawn White on Red",
    "terms": [
      "3 mo"
    ],
    "down": {
      "3 mo": 26900
    },
    "monthly": 6900,
    "display": "$26,900 down • $6,900/mo",
    "location": "Atlanta, GA"
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
    "display": "$26,900 down • $5,995/mo",
    "location": "Atlanta, GA"
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
    "location": "Atlanta, GA"
  },
  {
    "slug": "2022-rolls-royce-ghost-black-badge-whiteblack",
    "car": "2022 Rolls-Royce Ghost Black Badge (White/Black)",
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
    "location": "Atlanta, GA",
    "images": [
      "/images/cars/ghost-black-badge/3.jpg",
      "/images/cars/ghost-black-badge/1.jpg",
      "/images/cars/ghost-black-badge/2.jpg"
    ]
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
    "location": "Atlanta, GA"
  },
  {
    "slug": "2018-ferrari-488-spider-yellow",
    "car": "2018 Ferrari 488 Spider Yellow",
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
    "location": "Atlanta, GA"
  },
  {
    "slug": "2021-mercedes-benz-s580-black-on-peanut-butter",
    "car": "2021 Mercedes-Benz S580\nBlack on Peanut Butter",
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
    "location": "Atlanta, GA"
  },
  {
    "slug": "2021-maybach-gls600-blackgold",
    "car": "2021 Maybach GLS600 Black/Gold",
    "terms": [
      "3 mo"
    ],
    "down": {
      "3 mo": 14900
    },
    "monthly": 3700,
    "display": "$14,900 down • $3,700/mo",
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
      "12 mo": 12900,
      "3 mo": 10900
    },
    "monthly": 2695,
    "display": "From $10,900 down • $2,695/mo",
    "location": "Atlanta, GA"
  }
];

export const membershipFee = 1000;
export const deposit = 1000;

export function getInventoryBySlug(slug: string) {
  return inventory.find((item) => item.slug === slug);
}

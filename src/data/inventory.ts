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
  sold?: boolean;
};

export const inventory: InventoryItem[] = [
  {
    "slug": "2020-mclaren-720s-spyder-satin-black",
    "car": "2020 McLaren 720S Spider",
    "terms": [
      "3 mo",
      "12 mo"
    ],
    "down": {
      "3 mo": 26995,
      "12 mo": 54890
    },
    "monthly": 6995,
    "display": "From $26,995 down • $6,995/mo",
    "location": "New York, NY, United States",
    "scgMonthlyByTerm": {
      "3 mo": 6995,
      "12 mo": 6995
    },
    "scgBuyoutByTerm": {
      "12 mo": 229895
    },
    "mileage": "23,000",
    "images": [
      "/images/cars/2020-mclaren-720s-spider/2.jpg",
      "/images/cars/2020-mclaren-720s-spider/hero.jpg"
    ],
    "video": "/videos/cars/2020-mclaren-720s-spider/hero.mov"
  },
  {
    "slug": "2021-mercedes-g63-199-exclusive-edition-7",
    "car": "2021 Mercedes G63 1/99 EXCLUSIVE EDITION",
    "terms": [
      "12 mo"
    ],
    "down": {
      "12 mo": 19995
    },
    "monthly": 4495,
    "display": "From $19,995 down • $4,495/mo",
    "location": "—",
    "notes": "Factory Matte White on Cardinal Red",
    "scgMonthlyByTerm": {
      "12 mo": 4495
    },
    "scgBuyoutByTerm": {
      "12 mo": 159995
    },
    "mileage": "36,000",
    "images": [
      "/images/cars/2021-mercedes-g63-satin-white/hero.jpg",
      "/images/cars/2021-mercedes-g63-satin-white/2.jpg",
      "/images/cars/2021-mercedes-g63-satin-white/3.jpg",
      "/images/cars/2021-mercedes-g63-satin-white/4.jpg"
    ]
  },
  {
    "slug": "2023-maserati-mc20-18",
    "car": "2023 Maserati MC20",
    "terms": [
      "12 mo"
    ],
    "down": {
      "12 mo": 25995
    },
    "monthly": 3245,
    "display": "From $25,995 down • $3,245/mo",
    "location": "—",
    "notes": "24,000",
    "scgMonthlyByTerm": {
      "12 mo": 3245
    },
    "mileage": "24,000",
    "images": [
      "/images/cars/2023-maserati-mc20/hero.jpg",
      "/images/cars/2023-maserati-mc20/2.jpg",
      "/images/cars/2023-maserati-mc20/3.jpg",
      "/images/cars/2023-maserati-mc20/4.jpg",
      "/images/cars/2023-maserati-mc20/5.jpg",
      "/images/cars/2023-maserati-mc20/6.jpg",
      "/images/cars/2023-maserati-mc20/7.jpg",
      "/images/cars/2023-maserati-mc20/8.jpg",
      "/images/cars/2023-maserati-mc20/9.jpg",
      "/images/cars/2023-maserati-mc20/10.jpg"
    ]
  },
  {
    "slug": "2019-lamborghini-urus-blue-zpbua1zl5kla01124",
    "car": "2019 LAMBORGHINI URUS BLUE",
    "terms": [
      "3 mo",
      "12 mo"
    ],
    "down": {
      "3 mo": 14995,
      "12 mo": 27995
    },
    "monthly": 4495,
    "display": "From $14,995 down • $4,495/mo",
    "location": "—",
    "scgMonthlyByTerm": {
      "3 mo": 4495,
      "12 mo": 4495
    },
    "scgBuyoutByTerm": {
      "3 mo": 164995,
      "12 mo": 149995
    },
    "mileage": "40,000",
    "images": [
      "/images/cars/2019-lamborghini-urus-awd-blue/4.jpg",
      "/images/cars/2019-lamborghini-urus-awd-blue/hero.jpg",
      "/images/cars/2019-lamborghini-urus-awd-blue/2.jpg",
      "/images/cars/2019-lamborghini-urus-awd-blue/3.jpg"
    ]
  },
  {
    "slug": "2019-lamborghini-urus-white-6",
    "car": "2019 LAMBORGHINI URUS WHITE",
    "terms": [
      "12 mo"
    ],
    "down": {
      "12 mo": 29995
    },
    "monthly": 3995,
    "display": "From $29,995 down • $3,995/mo",
    "location": "—",
    "scgMonthlyByTerm": {
      "12 mo": 3995
    },
    "mileage": "111,000",
    "images": [
      "/images/cars/2019-lamborghini-urus-awd-white/3.jpg",
      "/images/cars/2019-lamborghini-urus-awd-white/hero.jpg",
      "/images/cars/2019-lamborghini-urus-awd-white/2.jpg",
      "/images/cars/2019-lamborghini-urus-awd-white/4.jpg"
    ]
  },
  {
    "slug": "2023-maybach-gls600-blackred-14",
    "car": "2023 Maybach GLS600 Black/Red",
    "terms": [
      "12 mo"
    ],
    "down": {
      "12 mo": 19995
    },
    "monthly": 3595,
    "display": "From $19,995 down • $3,595/mo",
    "location": "—",
    "scgMonthlyByTerm": {
      "12 mo": 3595
    },
    "scgBuyoutByTerm": {
      "12 mo": 129995
    },
    "mileage": "23,000",
    "images": [
      "/images/cars/2023-maybach-gls600-black-red/hero.jpg",
      "/images/cars/2023-maybach-gls600-black-red/2.jpg",
      "/images/cars/2023-maybach-gls600-black-red/3.jpg",
      "/images/cars/2023-maybach-gls600-black-red/4.jpg",
      "/images/cars/2023-maybach-gls600-black-red/5.jpg"
    ]
  },
  {
    "slug": "2019-ferrari-portofino-19",
    "car": "2019 Ferrari Portofino",
    "terms": [
      "12 mo"
    ],
    "down": {
      "12 mo": 34995
    },
    "monthly": 4495,
    "display": "From $34,995 down • $4,495/mo",
    "location": "—",
    "scgMonthlyByTerm": {
      "12 mo": 4495
    },
    "scgBuyoutByTerm": {
      "12 mo": 169995
    },
    "mileage": "15,500",
    "images": [
      "/images/cars/2019-ferrari-portofino/2.jpg",
      "/images/cars/2019-ferrari-portofino/hero.jpg",
      "/images/cars/2019-ferrari-portofino/3.jpg"
    ]
  },
  {
    "slug": "2022-lamborghini-urus-green-zpbuc3zl4pla22334",
    "car": "2022 LAMBORGHINI URUS GREEN",
    "terms": [
      "3 mo",
      "12 mo"
    ],
    "down": {
      "3 mo": 17495,
      "12 mo": 29995
    },
    "monthly": 3995,
    "display": "From $17,495 down • $3,995/mo",
    "location": "New York, NY, United States",
    "scgMonthlyByTerm": {
      "3 mo": 3995,
      "12 mo": 3995
    },
    "scgBuyoutByTerm": {
      "3 mo": 209995,
      "12 mo": 199995
    },
    "mileage": "38,000",
    "sold": true,
    "images": [
      "/images/cars/2019-lamborghini-urus-awd-green/hero.jpg",
      "/images/cars/2019-lamborghini-urus-awd-green/2.jpg",
      "/images/cars/2019-lamborghini-urus-awd-green/3.jpg",
      "/images/cars/2019-lamborghini-urus-awd-green/4.jpg"
    ]
  },
  {
    "slug": "2018-rr-dawn-66l-v12",
    "car": "2018 Rolls-Royce Dawn",
    "terms": [
      "12 mo"
    ],
    "down": {
      "12 mo": 19995
    },
    "monthly": 5995,
    "display": "From $19,995 down • $5,995/mo",
    "location": "West Palm FL",
    "notes": "White Exterior / Handcrafted Red Interior • $235k Purchase Price",
    "scgMonthlyByTerm": {
      "12 mo": 5995
    },
    "mileage": "19,780",
    "sold": true,
    "images": [
      "/images/cars/2018-rolls-royce-dawn-66l-v12/4.jpg",
      "/images/cars/2018-rolls-royce-dawn-66l-v12/hero.jpg",
      "/images/cars/2018-rolls-royce-dawn-66l-v12/2.jpg",
      "/images/cars/2018-rolls-royce-dawn-66l-v12/3.jpg",
      "/images/cars/2018-rolls-royce-dawn-66l-v12/5.jpg",
      "/images/cars/2018-rolls-royce-dawn-66l-v12/6.jpg",
      "/images/cars/2018-rolls-royce-dawn-66l-v12/7.jpg",
      "/images/cars/2018-rolls-royce-dawn-66l-v12/8.jpg",
      "/images/cars/2018-rolls-royce-dawn-66l-v12/9.jpg"
    ]
  },
  {
    "slug": "2023-lamborghini-urus-performante-zpbuc3zl4pla22334",
    "car": "2023 Lamborghini Urus Performante",
    "terms": [
      "12 mo"
    ],
    "down": {
      "12 mo": 34995
    },
    "monthly": 5495,
    "display": "From $34,995 down • $5,495/mo",
    "location": "New York, NY, United States",
    "notes": "Satin Black Paint❗️\nTwo Tone Black/Red Interior Tons of Carbon & Alcantara❗️",
    "scgMonthlyByTerm": {
      "12 mo": 5495
    },
    "mileage": "31,000",
    "sold": true,
    "images": [
      "/images/cars/2023-lamborghini-urus-performante/hero.jpg",
      "/images/cars/2023-lamborghini-urus-performante/2.jpg"
    ]
  }
];

export const membershipFee = 1000;
export const deposit = 1000;

export function getInventoryBySlug(slug: string) {
  return inventory.find((item) => item.slug === slug);
}

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
    "slug": "keyvany-keyrus-21",
    "car": "2021 Lamborghini Urus \"Keyvany Keyrus\"",
    "terms": [
      "3 mo",
      "12 mo"
    ],
    "down": {
      "3 mo": 99995,
      "12 mo": 144995
    },
    "monthly": 8960,
    "display": "From $99,995 down • $8,960/mo",
    "location": "Miami, Florida",
    "notes": "Keyvany Keyrus 1 of 3 imported to North America. Most exclusive custom Urus on the planet. Originally created upon a Pearl Capsule Edition unit from Lamborghini, painted in Green base with heavy Gold metallic flakes. Every piece of bodywork on this vehicle has been hand crafted from the highest Aerograde Carbon Fiber. Only the door shells and roof have remained original aluminum. Full Catless RYFT Titanium Exhaust System with a Stage 2 Tune pushing just around 900 HP. Only Urus seen to shoot 3-4 foot flames. It's sitting on one-off AL13 3-Piece Wheels specially made for this Keyrus, running over $30,000 for the set with tires. Interior is also fully custom down to the floor mats, carbon door sills, and forged carbon fiber steering wheel with the Keyvany crest. Also has a color-changing Starlight Headliner that has twinkle effect, as well as color-changing ambient lighting. + Full Custom Interior",
    "scgMonthlyByTerm": {
      "3 mo": 8960,
      "12 mo": 8960
    },
    "mileage": "9,847",
    "images": [
      "/images/cars/keyvany-keyrus/7.jpg",
      "/images/cars/keyvany-keyrus/2.jpg",
      "/images/cars/keyvany-keyrus/hero.jpg",
      "/images/cars/keyvany-keyrus/3.jpg",
      "/images/cars/keyvany-keyrus/4.jpg",
      "/images/cars/keyvany-keyrus/5.jpg",
      "/images/cars/keyvany-keyrus/8.jpg",
      "/images/cars/keyvany-keyrus/9.jpg",
      "/images/cars/keyvany-keyrus/10.jpg"
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
      "/images/cars/2019-lamborghini-urus-awd-blue/hero.jpg",
      "/images/cars/2019-lamborghini-urus-awd-blue/2.jpg",
      "/images/cars/2019-lamborghini-urus-awd-blue/3.jpg",
      "/images/cars/2019-lamborghini-urus-awd-blue/4.jpg"
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
    "images": [
      "/images/cars/2019-lamborghini-urus-awd-green/hero.jpg",
      "/images/cars/2019-lamborghini-urus-awd-green/2.jpg",
      "/images/cars/2019-lamborghini-urus-awd-green/3.jpg",
      "/images/cars/2019-lamborghini-urus-awd-green/4.jpg"
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
      "/images/cars/2019-lamborghini-urus-awd-white/hero.jpg",
      "/images/cars/2019-lamborghini-urus-awd-white/2.jpg",
      "/images/cars/2019-lamborghini-urus-awd-white/3.jpg",
      "/images/cars/2019-lamborghini-urus-awd-white/4.jpg"
    ]
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
    "mileage": "36,000"
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
    "slug": "2018-mercedes-amg-gt-c-21",
    "car": "2018 Mercedes-AMG GT C",
    "terms": [
      "12 mo"
    ],
    "down": {
      "12 mo": 17995
    },
    "monthly": 1995,
    "display": "From $17,995 down • $1,995/mo",
    "location": "—",
    "notes": "Silver Matte Paint",
    "scgMonthlyByTerm": {
      "12 mo": 1995
    },
    "mileage": "45,xxx",
    "images": [
      "/images/cars/2018-mercedes-amg-gt-c/hero.jpg",
      "/images/cars/2018-mercedes-amg-gt-c/2.jpg",
      "/images/cars/2018-mercedes-amg-gt-c/3.jpg",
      "/images/cars/2018-mercedes-amg-gt-c/4.jpg",
      "/images/cars/2018-mercedes-amg-gt-c/6.jpg",
      "/images/cars/2018-mercedes-amg-gt-c/7.jpg",
      "/images/cars/2018-mercedes-amg-gt-c/8.jpg",
      "/images/cars/2018-mercedes-amg-gt-c/9.jpg",
      "/images/cars/2018-mercedes-amg-gt-c/10.jpg"
    ]
  },
  {
    "slug": "2021-audi-rs-6-avant-22",
    "car": "2021 Audi RS 6 Avant",
    "terms": [
      "12 mo"
    ],
    "down": {
      "12 mo": 17995
    },
    "monthly": 2495,
    "display": "From $17,995 down • $2,495/mo",
    "location": "—",
    "notes": "Full Stealth PPF",
    "scgMonthlyByTerm": {
      "12 mo": 2495
    },
    "mileage": "40,xxx",
    "images": [
      "/images/cars/2021-audi-rs-6-avant/hero.jpg",
      "/images/cars/2021-audi-rs-6-avant/2.jpg",
      "/images/cars/2021-audi-rs-6-avant/3.jpg",
      "/images/cars/2021-audi-rs-6-avant/4.jpg",
      "/images/cars/2021-audi-rs-6-avant/5.jpg",
      "/images/cars/2021-audi-rs-6-avant/6.jpg",
      "/images/cars/2021-audi-rs-6-avant/7.jpg",
      "/images/cars/2021-audi-rs-6-avant/8.jpg",
      "/images/cars/2021-audi-rs-6-avant/9.jpg"
    ]
  },
  {
    "slug": "2025-rolls-royce-spectre-electric-23",
    "car": "2025 Rolls-Royce Spectre",
    "terms": [
      "12 mo"
    ],
    "down": {
      "12 mo": 49995
    },
    "monthly": 8995,
    "display": "From $49,995 down • $8,995/mo",
    "location": "—",
    "notes": "INSANE SPEC • TEMPESTE GREY • FACTORY BLUE INTERIOR • STARLIGHT DOORS",
    "scgMonthlyByTerm": {
      "12 mo": 8995
    },
    "mileage": "13,xxx",
    "images": [
      "/images/cars/2025-rolls-royce-spectre-electric/hero.jpg",
      "/images/cars/2025-rolls-royce-spectre-electric/2.jpg",
      "/images/cars/2025-rolls-royce-spectre-electric/3.jpg",
      "/images/cars/2025-rolls-royce-spectre-electric/4.jpg",
      "/images/cars/2025-rolls-royce-spectre-electric/5.jpg",
      "/images/cars/2025-rolls-royce-spectre-electric/6.jpg"
    ]
  },
  {
    "slug": "2020-mercedes-g63-satin-black-wdcyc7hj6lx338220",
    "car": "2020 Mercedes G63 Satin Black",
    "terms": [
      "12 mo"
    ],
    "down": {
      "12 mo": 17995
    },
    "monthly": 2995,
    "display": "From $17,995 down • $2,995/mo",
    "location": "New York, NY, United States",
    "scgMonthlyByTerm": {
      "12 mo": 2995
    },
    "scgBuyoutByTerm": {
      "12 mo": 104995
    },
    "mileage": "56,000"
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
    "notes": "Satin Black Paint❗️\nTwo Tone Black/Red Interior Tons of Carbon & Alcantara❗️\n6 Month: 5k mile allowance, $5/mile over\n12 Month: 8k mile allowance, $5/mile over",
    "scgMonthlyByTerm": {
      "12 mo": 5495
    },
    "mileage": "31,000",
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
    "slug": "2021-maybach-gls600-blackgold-15",
    "car": "2021 Maybach GLS600 Black/Gold",
    "terms": [
      "3 mo",
      "12 mo"
    ],
    "down": {
      "3 mo": 12895,
      "12 mo": 19995
    },
    "monthly": 3195,
    "display": "From $12,895 down • $3,195/mo",
    "location": "New York, NY, United States",
    "scgMonthlyByTerm": {
      "3 mo": 3195,
      "12 mo": 3595
    },
    "scgBuyoutByTerm": {
      "3 mo": 124995,
      "12 mo": 114995
    },
    "mileage": "36,000",
    "images": [
      "/images/cars/2021-maybach-gls600-black-gold/hero.jpg",
      "/images/cars/2021-maybach-gls600-black-gold/2.jpg",
      "/images/cars/2021-maybach-gls600-black-gold/3.jpg",
      "/images/cars/2021-maybach-gls600-black-gold/4.jpg"
    ],
    "video": "/videos/cars/2021-maybach-gls600-black-gold/hero.mov"
  },
  {
    "slug": "2025-c8-2lt-16",
    "car": "2025 Corvette C8 2LT",
    "terms": [
      "12 mo"
    ],
    "down": {
      "12 mo": 7995
    },
    "monthly": 1645,
    "display": "From $7,995 down • $1,645/mo",
    "location": "—",
    "notes": "Hysteria Purple❗️Tons of Mods❗️\nLifetime Engine Warranty + 2 Years Left Factory Warranty❗️",
    "scgMonthlyByTerm": {
      "12 mo": 1645
    },
    "mileage": "9,xxx",
    "images": [
      "/images/cars/2025-c8-2lt/hero.jpg",
      "/images/cars/2025-c8-2lt/2.jpg",
      "/images/cars/2025-c8-2lt/3.jpg",
      "/images/cars/2025-c8-2lt/4.jpg",
      "/images/cars/2025-c8-2lt/5.jpg",
      "/images/cars/2025-c8-2lt/6.jpg"
    ]
  },
  {
    "slug": "2024-rolls-royce-spectre-24",
    "car": "2024 Rolls-Royce Spectre",
    "terms": [
      "12 mo"
    ],
    "down": {
      "12 mo": 38995
    },
    "monthly": 6495,
    "display": "From $38,995 down • $6,495/mo",
    "location": "Miami, FL",
    "scgMonthlyByTerm": {
      "12 mo": 6495
    },
    "scgBuyoutByTerm": {
      "12 mo": 422562
    },
    "mileage": "1,096",
    "images": [
      "/images/cars/2024-rolls-royce-spectre/hero.jpg",
      "/images/cars/2024-rolls-royce-spectre/2.jpg",
      "/images/cars/2024-rolls-royce-spectre/3.jpg",
      "/images/cars/2024-rolls-royce-spectre/4.jpg",
      "/images/cars/2024-rolls-royce-spectre/5.jpg"
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
    "slug": "2021-bmw-m8-competition-gran-coupe-22",
    "car": "2021 BMW M8 Competition Gran Coupe",
    "terms": [
      "12 mo"
    ],
    "down": {
      "12 mo": 16995
    },
    "monthly": 2245,
    "display": "From $16,995 down • $2,245/mo",
    "location": "—",
    "notes": "No Credit or Income Check",
    "scgMonthlyByTerm": {
      "12 mo": 2245
    },
    "scgBuyoutByTerm": {
      "12 mo": 64995
    },
    "mileage": "31,xxx",
    "images": [
      "/images/cars/2021-bmw-m8-competition-gran-coupe/hero.jpg",
      "/images/cars/2021-bmw-m8-competition-gran-coupe/2.jpg",
      "/images/cars/2021-bmw-m8-competition-gran-coupe/3.jpg",
      "/images/cars/2021-bmw-m8-competition-gran-coupe/4.jpg",
      "/images/cars/2021-bmw-m8-competition-gran-coupe/5.jpg",
      "/images/cars/2021-bmw-m8-competition-gran-coupe/6.jpg",
      "/images/cars/2021-bmw-m8-competition-gran-coupe/7.jpg",
      "/images/cars/2021-bmw-m8-competition-gran-coupe/8.jpg",
      "/images/cars/2021-bmw-m8-competition-gran-coupe/9.jpg",
      "/images/cars/2021-bmw-m8-competition-gran-coupe/10.jpg"
    ]
  }
];

export const membershipFee = 1000;
export const deposit = 1000;

export function getInventoryBySlug(slug: string) {
  return inventory.find((item) => item.slug === slug);
}

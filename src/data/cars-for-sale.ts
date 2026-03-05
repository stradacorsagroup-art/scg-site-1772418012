export type CarsForSaleCard = {
  car: string;
  miles?: string | null;
  vin?: string | null;
  ownerName?: string | null;
  ownerEmail?: string | null;
  notes?: string | null;
  location?: string | null;
  milesPerYear?: string | null;
  firstPaymentDueToOwner?: string | null;
  threeMo?: Record<string, any>;
  twelveMo?: Record<string, any>;
};

export const carsForSaleInventory: CarsForSaleCard[] = [
  {
    "car": "2022 Rolls-Royce Ghost Black Badge (White/Black)",
    "miles": "61,000",
    "vin": "SCATD6C05NU213792",
    "threeMo": {
      "ownerDown": 24900,
      "scgDown": 27900,
      "ownerMonthly": 5500,
      "scgMonthly": 5595,
      "profit": 8595,
      "buyout": 230000,
      "scgBuyout": 229900,
      "buyoutSpread": -100
    },
    "twelveMo": {
      "ownerDown": 44900,
      "scgDown": 47900,
      "ownerMonthly": 5500,
      "scgMonthly": 5595,
      "profit": 8595,
      "buyout": 215000,
      "scgBuyout": 215000,
      "buyoutSpread": 0
    },
    "milesPerYear": "—",
    "firstPaymentDueToOwner": "30 days after closing",
    "location": "New York, NY, United States",
    "ownerName": "Top 2 Not 2 LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": "—"
  },
  {
    "car": "2020 Rolls-Royce Cullinan White/Red",
    "miles": "47,000",
    "vin": "SLATV4C0XLU201507",
    "threeMo": {
      "ownerDown": 24900,
      "scgDown": 26900,
      "ownerMonthly": 6900,
      "scgMonthly": 6900,
      "profit": 8900,
      "buyout": 245000,
      "scgBuyout": 244900,
      "buyoutSpread": -100
    },
    "twelveMo": {
      "ownerDown": 49900,
      "scgDown": 49900,
      "ownerMonthly": 6900,
      "scgMonthly": 6900,
      "profit": 6900,
      "buyout": 229900,
      "scgBuyout": 229900,
      "buyoutSpread": 0
    },
    "milesPerYear": "—",
    "firstPaymentDueToOwner": "30 days after closing",
    "location": "New York, NY, United States",
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": "—"
  }
];

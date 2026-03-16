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
    "car": "2025 Aston Martin DBX",
    "miles": "61,000",
    "vin": "SCATD6C05NU213792",
    "msrp": 115000,
    "threeMo": {
      "buyout": 115000
    },
    "twelveMo": {
      "buyout": 115000
    },
    "notes": "—"
  },
  {
    "car": "2023 Nisan GTR",
    "miles": "61,000",
    "vin": "SCATD6C05NU213792",
    "msrp": 115000,
    "threeMo": {
      "buyout": 115000
    },
    "twelveMo": {
      "buyout": 115000
    },
    "notes": "—"
  }
];

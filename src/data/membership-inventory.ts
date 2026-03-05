export type MembershipCard = {
  car: string;
  miles?: string | null;
  vin?: string | null;
  ownerName?: string | null;
  ownerEmail?: string | null;
  notes?: string | null;
  location?: string | null;
  milesPerYear?: string | null;
  firstPaymentDueToOwner?: string | null;
  threeMo: Record<string, any>;
  twelveMo: Record<string, any>;
};

export const membershipInventory: MembershipCard[] = [
  {
    "car": "2022 Rolls-Royce Ghost Black Badge (White/Black)",
    "miles": "61,000",
    "vin": "SCATD6C05NU213792",
    "ownerName": "Top 2 Not 2 LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": null,
    "location": "New York, NY, United States",
    "milesPerYear": null,
    "firstPaymentDueToOwner": "30 days after closing",
    "threeMo": {
      "ownerDown": 24900,
      "scgDown": 27900,
      "scgMonthly": 5595,
      "profit": 8595,
      "buyout": 230000,
      "scgBuyout": 229900,
      "buyoutSpread": -100
    },
    "twelveMo": {
      "ownerDown": 44900,
      "scgDown": 47900,
      "scgMonthly": 5595,
      "profit": 8595,
      "buyout": 215000,
      "scgBuyout": 215000,
      "buyoutSpread": 0
    }
  },
  {
    "car": "2020 Rolls-Royce Cullinan White/Red",
    "miles": "47,000",
    "vin": "SLATV4C0XLU201507",
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": null,
    "location": "New York, NY, United States",
    "milesPerYear": null,
    "firstPaymentDueToOwner": "30 days after closing",
    "threeMo": {
      "ownerDown": 24900,
      "scgDown": 26900,
      "scgMonthly": 6900,
      "profit": 8900,
      "buyout": 245000,
      "scgBuyout": 244900,
      "buyoutSpread": -100
    },
    "twelveMo": {
      "ownerDown": 49900,
      "scgDown": 49900,
      "scgMonthly": 6900,
      "profit": 6900,
      "buyout": 229900,
      "scgBuyout": 229900,
      "buyoutSpread": 0
    }
  },
  {
    "car": "2020 Rolls-Royce Cullinan BB White/White Forgiatos",
    "miles": "51,000",
    "vin": "SLATV8C09LU200999",
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": null,
    "location": "New York, NY, United States",
    "milesPerYear": null,
    "firstPaymentDueToOwner": "30 days after closing",
    "threeMo": {
      "ownerDown": 24900,
      "scgDown": 26900,
      "scgMonthly": 6900,
      "profit": 8900,
      "buyout": 240000,
      "scgBuyout": 239900,
      "buyoutSpread": -100
    },
    "twelveMo": {
      "ownerDown": 49900,
      "scgDown": 49900,
      "scgMonthly": 6900,
      "profit": 6900,
      "buyout": 229900,
      "scgBuyout": 229900,
      "buyoutSpread": 0
    }
  },
  {
    "car": "2017 Rolls Royce Dawn White on Red",
    "miles": "39,000",
    "vin": null,
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": null,
    "location": "New York, NY, United States",
    "milesPerYear": "7,500",
    "firstPaymentDueToOwner": "30 days after closing",
    "threeMo": {
      "ownerDown": 24900,
      "scgDown": 26900,
      "scgMonthly": 6900,
      "profit": 8900,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": 0
    },
    "twelveMo": {
      "ownerDown": null,
      "scgDown": null,
      "scgMonthly": null,
      "profit": null,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    }
  },
  {
    "car": "2018 Ferrari 488 Spider Yellow",
    "miles": "27,000",
    "vin": "ZFF80AMA0J0231527",
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": null,
    "location": "New York, NY, United States",
    "milesPerYear": "7,500",
    "firstPaymentDueToOwner": "30 days after closing",
    "threeMo": {
      "ownerDown": 24900,
      "scgDown": 26900,
      "scgMonthly": 6900,
      "profit": 8900,
      "buyout": 250000,
      "scgBuyout": 250000,
      "buyoutSpread": 0
    },
    "twelveMo": {
      "ownerDown": 24900,
      "scgDown": 26900,
      "scgMonthly": 6900,
      "profit": 8900,
      "buyout": 245000,
      "scgBuyout": 250000,
      "buyoutSpread": 5000
    }
  },
  {
    "car": "2023 LAMBORGHINI URUS PERFORMANTE YELLOW",
    "miles": "38,000",
    "vin": "ZPBUC3ZL4PLA22334",
    "ownerName": "PNM Holdings Inc",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": null,
    "location": "New York, NY, United States",
    "milesPerYear": "7,500",
    "firstPaymentDueToOwner": "30 days after closing",
    "threeMo": {
      "ownerDown": 24900,
      "scgDown": 26900,
      "scgMonthly": 5995,
      "profit": 7995,
      "buyout": 250000,
      "scgBuyout": 250000,
      "buyoutSpread": 0
    },
    "twelveMo": {
      "ownerDown": null,
      "scgDown": null,
      "scgMonthly": null,
      "profit": null,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    }
  },
  {
    "car": "2020 McLaren 720s Spyder Satin Black",
    "miles": "23,000",
    "vin": "SBM14FCA6LW005258",
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": null,
    "location": "New York, NY, United States",
    "milesPerYear": "7,500",
    "firstPaymentDueToOwner": "30 days after closing",
    "threeMo": {
      "ownerDown": null,
      "scgDown": null,
      "scgMonthly": null,
      "profit": null,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    },
    "twelveMo": {
      "ownerDown": 54900,
      "scgDown": 59900,
      "scgMonthly": 6995,
      "profit": 11995,
      "buyout": 229000,
      "scgBuyout": 229900,
      "buyoutSpread": 900
    }
  },
  {
    "car": "2021 Mercedes-Benz S580 Black on Peanut Butter",
    "miles": "65,000",
    "vin": "W1KG7GBXMA052327",
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": null,
    "location": "New York, NY, United States",
    "milesPerYear": "7,500",
    "firstPaymentDueToOwner": "30 days after closing",
    "threeMo": {
      "ownerDown": 8990,
      "scgDown": 10900,
      "scgMonthly": 2495,
      "profit": 4405,
      "buyout": 65000,
      "scgBuyout": 65000,
      "buyoutSpread": 0
    },
    "twelveMo": {
      "ownerDown": 11990,
      "scgDown": 13900,
      "scgMonthly": 2495,
      "profit": 4405,
      "buyout": 65000,
      "scgBuyout": 65000,
      "buyoutSpread": 0
    }
  },
  {
    "car": "2022 Mercedes-Benz S580",
    "miles": "65,000",
    "vin": null,
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": null,
    "location": "New York, NY, United States",
    "milesPerYear": "10,000",
    "firstPaymentDueToOwner": "30 days after closing",
    "threeMo": {
      "ownerDown": 6900,
      "scgDown": 10900,
      "scgMonthly": 2695,
      "profit": 6695,
      "buyout": 65000,
      "scgBuyout": 65000,
      "buyoutSpread": 0
    },
    "twelveMo": {
      "ownerDown": 9900,
      "scgDown": 12900,
      "scgMonthly": 2695,
      "profit": 5695,
      "buyout": 65000,
      "scgBuyout": 65000,
      "buyoutSpread": 0
    }
  },
  {
    "car": "2021 Mercedes G63 1/99 EXCLUSIVE EDITION",
    "miles": "36,000",
    "vin": "W1NYC7HJ3MX403105",
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": null,
    "location": "—",
    "milesPerYear": "10,000",
    "firstPaymentDueToOwner": "30 days after closing",
    "threeMo": {
      "ownerDown": 15000,
      "scgDown": 19900,
      "ownerMonthly": 4495,
      "scgMonthly": 4495,
      "profit": null,
      "buyout": 170000,
      "scgBuyout": 170000,
      "buyoutSpread": null
    },
    "twelveMo": {
      "ownerDown": 24900,
      "scgDown": 29900,
      "ownerMonthly": 4495,
      "scgMonthly": 4495,
      "profit": null,
      "buyout": 160000,
      "scgBuyout": 160000,
      "buyoutSpread": null
    }
  },
  {
    "car": "2020 Mercedes G63 Satin Black",
    "miles": "56,000",
    "vin": "WDCYC7HJ6LX338220",
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": null,
    "location": "New York, NY, United States",
    "milesPerYear": "10,000",
    "firstPaymentDueToOwner": "30 days after closing",
    "threeMo": {
      "ownerDown": null,
      "scgDown": null,
      "scgMonthly": null,
      "profit": null,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    },
    "twelveMo": {
      "ownerDown": 17500,
      "scgDown": 19900,
      "scgMonthly": 3400,
      "profit": 5800,
      "buyout": 105000,
      "scgBuyout": 107000,
      "buyoutSpread": 2000
    }
  },
  {
    "car": "2021 Maybach GLS600 Black/Gold",
    "miles": "36,000",
    "vin": "4JGFF8HB4MA551962",
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": null,
    "location": "New York, NY, United States",
    "milesPerYear": null,
    "firstPaymentDueToOwner": "30 days after closing",
    "threeMo": {
      "ownerDown": 12900,
      "scgDown": 14900,
      "scgMonthly": 3700,
      "profit": 5700,
      "buyout": 125000,
      "scgBuyout": 125000,
      "buyoutSpread": 0
    },
    "twelveMo": {
      "ownerDown": 20000,
      "scgDown": 24995,
      "scgMonthly": null,
      "profit": 8695,
      "buyout": 115000,
      "scgBuyout": 116000,
      "buyoutSpread": null
    }
  },
  {
    "car": "2019 White urus",
    "miles": "111,000",
    "vin": "ZPBUA1ZL6KLA00922",
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": null,
    "location": "—",
    "milesPerYear": "10,000",
    "firstPaymentDueToOwner": "30 days after closing",
    "threeMo": {
      "ownerDown": 14900,
      "scgDown": 17995,
      "scgMonthly": 3995,
      "profit": null,
      "buyout": 125000,
      "scgBuyout": 125000,
      "buyoutSpread": null
    },
    "twelveMo": {
      "ownerDown": 29900,
      "scgDown": 29900,
      "scgMonthly": 3995,
      "profit": null,
      "buyout": 118000,
      "scgBuyout": 119000,
      "buyoutSpread": null
    }
  },
  {
    "car": "2019 LAMBORGHINI URUS BLUE",
    "miles": "40,000",
    "vin": "ZPBUA1ZL5KLA01124",
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": null,
    "location": "—",
    "milesPerYear": "7,500",
    "firstPaymentDueToOwner": "30 days after closing",
    "threeMo": {
      "ownerDown": 15000,
      "scgDown": 19900,
      "ownerMonthly": 4495,
      "scgMonthly": 4495,
      "profit": null,
      "buyout": 165000,
      "scgBuyout": 165000,
      "buyoutSpread": null
    },
    "twelveMo": {
      "ownerDown": 27995,
      "scgDown": 29995,
      "ownerMonthly": 4495,
      "scgMonthly": 4495,
      "profit": null,
      "buyout": 150000,
      "scgBuyout": 150000,
      "buyoutSpread": null
    }
  },
  {
    "car": "2024 BMW XM",
    "miles": "9,000",
    "vin": null,
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": "$165k sticker • 6 Month ONE PAY Lease: $17,995 (no monthly payments) • 12 Month ONE PAY Lease: $33,995 (no monthly payments)",
    "location": "—",
    "milesPerYear": "—",
    "firstPaymentDueToOwner": "30 days after closing",
    "threeMo": {
      "ownerDown": null,
      "scgDown": null,
      "ownerMonthly": null,
      "scgMonthly": null,
      "profit": null,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    },
    "twelveMo": {
      "ownerDown": null,
      "scgDown": null,
      "ownerMonthly": null,
      "scgMonthly": null,
      "profit": null,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    }
  },
  {
    "car": "2022 Tesla Model 3 Performance",
    "miles": "49,000",
    "vin": null,
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": null,
    "location": "ATL",
    "milesPerYear": "10,000",
    "firstPaymentDueToOwner": "at closing",
    "threeMo": {
      "ownerDown": null,
      "scgDown": null,
      "ownerMonthly": null,
      "scgMonthly": null,
      "profit": null,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    },
    "twelveMo": {
      "ownerDown": 11990,
      "scgDown": 11990,
      "ownerMonthly": 995,
      "scgMonthly": 995,
      "profit": 995,
      "buyout": 15000,
      "scgBuyout": 15000,
      "buyoutSpread": 0
    }
  },
  {
    "car": "2026 Jeep Wrangler Rubicon",
    "miles": "630",
    "vin": null,
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": null,
    "location": "ATL",
    "milesPerYear": "10,000",
    "firstPaymentDueToOwner": "at closing",
    "threeMo": {
      "ownerDown": null,
      "scgDown": null,
      "ownerMonthly": null,
      "scgMonthly": null,
      "profit": null,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    },
    "twelveMo": {
      "ownerDown": 7990,
      "scgDown": 7990,
      "ownerMonthly": 1995,
      "scgMonthly": 1995,
      "profit": 1995,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    }
  },
  {
    "car": "2020 Rolls-Royce Cullinan",
    "miles": "35,000",
    "vin": null,
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": null,
    "location": "Miami, FL",
    "milesPerYear": "7,500",
    "firstPaymentDueToOwner": "at closing",
    "threeMo": {
      "ownerDown": null,
      "scgDown": null,
      "ownerMonthly": null,
      "scgMonthly": null,
      "profit": null,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    },
    "twelveMo": {
      "ownerDown": 31900,
      "scgDown": 31900,
      "ownerMonthly": 4900,
      "scgMonthly": 4900,
      "profit": 4900,
      "buyout": 229900,
      "scgBuyout": 229900,
      "buyoutSpread": 0
    }
  },
  {
    "car": "2024 Rolls-Royce Spectre Electric",
    "miles": "1,096",
    "vin": null,
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": null,
    "location": "Miami, FL",
    "milesPerYear": "7,500",
    "firstPaymentDueToOwner": "at closing",
    "threeMo": {
      "ownerDown": null,
      "scgDown": null,
      "ownerMonthly": null,
      "scgMonthly": null,
      "profit": null,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    },
    "twelveMo": {
      "ownerDown": 44900,
      "scgDown": 44900,
      "ownerMonthly": 6400,
      "scgMonthly": 6400,
      "profit": 6400,
      "buyout": 421900,
      "scgBuyout": 421900,
      "buyoutSpread": 0
    }
  },
  {
    "car": "2023 MC20 Cielo",
    "miles": "24,000",
    "vin": null,
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": "$339,700 MSRP • 6/12 Month Lease To Own • No Credit/Income Check • Buyout Option At End",
    "location": "—",
    "milesPerYear": "—",
    "firstPaymentDueToOwner": "at closing",
    "threeMo": {
      "ownerDown": 25995,
      "scgDown": 25995,
      "ownerMonthly": 3250,
      "scgMonthly": 3250,
      "profit": 3250,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    },
    "twelveMo": {
      "ownerDown": 25995,
      "scgDown": 25995,
      "ownerMonthly": 3250,
      "scgMonthly": 3250,
      "profit": 3250,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    }
  },
  {
    "car": "2018 RR Dawn 6.6L V12",
    "miles": "19,780",
    "vin": null,
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": "White Exterior / Handcrafted Red Interior • $235k Purchase Price • 6/12 Month Lease • No Credit or Income Check • Buyout Option at End",
    "location": "West Palm FL",
    "milesPerYear": "—",
    "firstPaymentDueToOwner": "at closing",
    "threeMo": {
      "ownerDown": 19995,
      "scgDown": 19995,
      "ownerMonthly": 5995,
      "scgMonthly": 5995,
      "profit": 5995,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    },
    "twelveMo": {
      "ownerDown": 19995,
      "scgDown": 19995,
      "ownerMonthly": 5995,
      "scgMonthly": 5995,
      "profit": 5995,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    }
  },
  {
    "car": "2019 G63 Brabus Kit",
    "miles": "65,xxx",
    "vin": null,
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": "Starlight Headliner • Pink Wrap • Over $50,000 Invested • $149,995 cash price • 6/12 Month Lease to Own • No Credit or Income Check • Buyout Option at End",
    "location": "—",
    "milesPerYear": "—",
    "firstPaymentDueToOwner": "at closing",
    "threeMo": {
      "ownerDown": 34995,
      "scgDown": 34995,
      "ownerMonthly": 3500,
      "scgMonthly": 3500,
      "profit": 3500,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    },
    "twelveMo": {
      "ownerDown": 34995,
      "scgDown": 34995,
      "ownerMonthly": 3500,
      "scgMonthly": 3500,
      "profit": 3500,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    }
  },
  {
    "car": "2022 Bentley GT",
    "miles": "9,000",
    "vin": null,
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": "PRICE DROP • Spec is 🔥 • Won’t Find Better Deal Anywhere Else • Buyouts Available At End",
    "location": "—",
    "milesPerYear": "—",
    "firstPaymentDueToOwner": "at closing",
    "threeMo": {
      "ownerDown": 17995,
      "scgDown": 17995,
      "ownerMonthly": 3200,
      "scgMonthly": 3200,
      "profit": 3200,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    },
    "twelveMo": {
      "ownerDown": 17995,
      "scgDown": 17995,
      "ownerMonthly": 3500,
      "scgMonthly": 3500,
      "profit": 3500,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    }
  },
  {
    "car": "2018 AMG GTC Competition",
    "miles": "45,xxx",
    "vin": null,
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": "C = Competition (highly sought after trim) • Silver Matte Paint • 6/12 Month Lease to Own • No Credit or Income Check • Buyout Option at End of Lease",
    "location": "—",
    "milesPerYear": "—",
    "firstPaymentDueToOwner": "at closing",
    "threeMo": {
      "ownerDown": 17995,
      "scgDown": 17995,
      "ownerMonthly": 2000,
      "scgMonthly": 2000,
      "profit": 2000,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    },
    "twelveMo": {
      "ownerDown": 17995,
      "scgDown": 17995,
      "ownerMonthly": 2000,
      "scgMonthly": 2000,
      "profit": 2000,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    }
  },
  {
    "car": "2021 RS6 Avant",
    "miles": "40,xxx",
    "vin": null,
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": "Full Stealth PPF • 6/12 Month Lease to Own • No Credit or Income Check • Buyout Option at End of Lease",
    "location": "—",
    "milesPerYear": "—",
    "firstPaymentDueToOwner": "at closing",
    "threeMo": {
      "ownerDown": 17995,
      "scgDown": 17995,
      "ownerMonthly": 2500,
      "scgMonthly": 2500,
      "profit": 2500,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    },
    "twelveMo": {
      "ownerDown": 17995,
      "scgDown": 17995,
      "ownerMonthly": 2500,
      "scgMonthly": 2500,
      "profit": 2500,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    }
  },
  {
    "car": "2025 RR Spectre",
    "miles": "13,xxx",
    "vin": null,
    "ownerName": "DAM HOLDINGS LLC",
    "ownerEmail": "stage2autogroup@gmail.com",
    "notes": "INSANE SPEC • TEMPESTE GREY • FACTORY BLUE INTERIOR • STARLIGHT DOORS • 6/12 Month Lease to Own • No Credit or Income Check • Buyout Option Available at End",
    "location": "—",
    "milesPerYear": "—",
    "firstPaymentDueToOwner": "at closing",
    "threeMo": {
      "ownerDown": 49995,
      "scgDown": 49995,
      "ownerMonthly": 9000,
      "scgMonthly": 9000,
      "profit": 9000,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    },
    "twelveMo": {
      "ownerDown": 49995,
      "scgDown": 49995,
      "ownerMonthly": 9000,
      "scgMonthly": 9000,
      "profit": 9000,
      "buyout": null,
      "scgBuyout": null,
      "buyoutSpread": null
    }
  }
];

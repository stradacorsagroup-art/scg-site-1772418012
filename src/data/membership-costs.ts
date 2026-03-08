export type TermCost = { scgDown?: number | null; scgMonthly?: number | null; scgBuyout?: number | null };
export type MembershipCost = { car: string; threeMo?: TermCost; twelveMo?: TermCost };

export function normalizeCarKey(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, '');
}

export const membershipCostsByCarKey: Record<string, MembershipCost> = {
  "2022rollsroyceghostblackbadge": {
    "car": "2022 Rolls-Royce Ghost Black Badge",
    "threeMo": {
      "scgDown": 27900.0,
      "scgMonthly": 5595.0,
      "scgBuyout": 229900.0
    },
    "twelveMo": {
      "scgDown": 47900.0,
      "scgMonthly": 5595.0,
      "scgBuyout": 215000.0
    }
  },
  "2020rollsroycecullinan": {
    "car": "2020 Rolls-Royce Cullinan",
    "threeMo": {
      "scgDown": null,
      "scgMonthly": null,
      "scgBuyout": null
    },
    "twelveMo": {
      "scgDown": 31900,
      "scgMonthly": 4900,
      "scgBuyout": 229900
    }
  },
  "2020rollsroycecullinanblackbadge": {
    "car": "2020 Rolls-Royce Cullinan Black Badge",
    "threeMo": {
      "scgDown": 26900.0,
      "scgMonthly": 6900.0,
      "scgBuyout": 239900.0
    },
    "twelveMo": {
      "scgDown": 49900.0,
      "scgMonthly": 6900.0,
      "scgBuyout": 229900.0
    }
  },
  "2018ferrari488spider": {
    "car": "2018 Ferrari 488 Spider",
    "threeMo": {
      "scgDown": 26900.0,
      "scgMonthly": 6900.0,
      "scgBuyout": 250000.0
    },
    "twelveMo": {
      "scgDown": 26900.0,
      "scgMonthly": 6900.0,
      "scgBuyout": 250000.0
    }
  },
  "2023lamborghiniurusperformante": {
    "car": "2023 Lamborghini Urus Performante",
    "threeMo": {
      "scgDown": 26900.0,
      "scgMonthly": 5995.0,
      "scgBuyout": 250000.0
    },
    "twelveMo": {
      "scgDown": null,
      "scgMonthly": null,
      "scgBuyout": null
    }
  },
  "2020mclaren720sspider": {
    "car": "2020 McLaren 720S Spider",
    "threeMo": {
      "scgDown": null,
      "scgMonthly": null,
      "scgBuyout": null
    },
    "twelveMo": {
      "scgDown": 59900.0,
      "scgMonthly": 6995.0,
      "scgBuyout": 229900.0
    }
  },
  "2021mercedesbenzs580blackonpeanutbutter": {
    "car": "2021 Mercedes-Benz S580 Black on Peanut Butter",
    "threeMo": {
      "scgDown": 10900.0,
      "scgMonthly": 2495.0,
      "scgBuyout": 65000.0
    },
    "twelveMo": {
      "scgDown": 13900.0,
      "scgMonthly": 2495.0,
      "scgBuyout": 65000.0
    }
  },
  "2022mercedesbenzs580": {
    "car": "2022 Mercedes-Benz S580",
    "threeMo": {
      "scgDown": 10900.0,
      "scgMonthly": 2695.0,
      "scgBuyout": 65000.0
    },
    "twelveMo": {
      "scgDown": 12900.0,
      "scgMonthly": 2695.0,
      "scgBuyout": 65000.0
    }
  },
  "2021mercedesbenzgclassamgg63": {
    "car": "2021 Mercedes-Benz G-Class AMG G 63",
    "threeMo": {
      "scgDown": 19900,
      "scgMonthly": 4495,
      "scgBuyout": 170000
    },
    "twelveMo": {
      "scgDown": 29900,
      "scgMonthly": 4495,
      "scgBuyout": 160000
    }
  },
  "2020mercedesbenzgclassamgg63": {
    "car": "2020 Mercedes-Benz G-Class AMG G 63",
    "threeMo": {
      "scgDown": null,
      "scgMonthly": null,
      "scgBuyout": null
    },
    "twelveMo": {
      "scgDown": 19900.0,
      "scgMonthly": 3400.0,
      "scgBuyout": 107000.0
    }
  },
  "2021mercedesbenzmaybachgls600": {
    "car": "2021 Mercedes-Benz Maybach GLS 600",
    "threeMo": {
      "scgDown": 14900.0,
      "scgMonthly": 3700.0,
      "scgBuyout": 125000.0
    },
    "twelveMo": {
      "scgDown": 24995,
      "scgMonthly": null,
      "scgBuyout": 116000
    }
  },
  "2019lamborghiniurusawd": {
    "car": "2019 Lamborghini Urus AWD",
    "threeMo": {
      "scgDown": 19900,
      "scgMonthly": 4495,
      "scgBuyout": 165000
    },
    "twelveMo": {
      "scgDown": 29995,
      "scgMonthly": 4495,
      "scgBuyout": 150000
    }
  },
  "2024bmwxm": {
    "car": "2024 BMW XM",
    "threeMo": {
      "scgDown": null,
      "scgMonthly": null,
      "scgBuyout": null
    },
    "twelveMo": {
      "scgDown": null,
      "scgMonthly": null,
      "scgBuyout": null
    }
  },
  "2026jeepwranglerrubicon": {
    "car": "2026 Jeep Wrangler Rubicon",
    "threeMo": {
      "scgDown": null,
      "scgMonthly": null,
      "scgBuyout": null
    },
    "twelveMo": {
      "scgDown": 7990,
      "scgMonthly": 1995,
      "scgBuyout": null
    }
  },
  "2024rollsroycespectreelectric": {
    "car": "2024 Rolls-Royce Spectre Electric",
    "threeMo": {
      "scgDown": null,
      "scgMonthly": null,
      "scgBuyout": null
    },
    "twelveMo": {
      "scgDown": 44900,
      "scgMonthly": 6400,
      "scgBuyout": 421900
    }
  },
  "2023maseratimc20": {
    "car": "2023 Maserati MC20",
    "threeMo": {
      "scgDown": 25995,
      "scgMonthly": 3250,
      "scgBuyout": null
    },
    "twelveMo": {
      "scgDown": 25995,
      "scgMonthly": 3250,
      "scgBuyout": null
    }
  },
  "2018rollsroycedawn66lv12": {
    "car": "2018 Rolls-Royce Dawn 6.6L V12",
    "threeMo": {
      "scgDown": 19995,
      "scgMonthly": 5995,
      "scgBuyout": null
    },
    "twelveMo": {
      "scgDown": 19995,
      "scgMonthly": 5995,
      "scgBuyout": null
    }
  },
  "2022bentleygt": {
    "car": "2022 Bentley GT",
    "threeMo": {
      "scgDown": 17995,
      "scgMonthly": 3200,
      "scgBuyout": null
    },
    "twelveMo": {
      "scgDown": 17995,
      "scgMonthly": 3500,
      "scgBuyout": null
    }
  },
  "2018mercedesamggtc": {
    "car": "2018 Mercedes-AMG GT C",
    "threeMo": {
      "scgDown": 17995,
      "scgMonthly": 2000,
      "scgBuyout": null
    },
    "twelveMo": {
      "scgDown": 17995,
      "scgMonthly": 2000,
      "scgBuyout": null
    }
  },
  "2021rs6avant": {
    "car": "2021 Audi RS 6 Avant",
    "threeMo": {
      "scgDown": 17995,
      "scgMonthly": 2500,
      "scgBuyout": null
    },
    "twelveMo": {
      "scgDown": 17995,
      "scgMonthly": 2500,
      "scgBuyout": null
    }
  },
  "2025rollsroycespectreelectric": {
    "car": "2025 Rolls-Royce Spectre Electric",
    "threeMo": {
      "scgDown": 49995,
      "scgMonthly": 9000,
      "scgBuyout": null
    },
    "twelveMo": {
      "scgDown": 49995,
      "scgMonthly": 9000,
      "scgBuyout": null
    }
  }
};

export function getMembershipCostForCar(car: string): MembershipCost | undefined {
  const key = normalizeCarKey(car);
  if (membershipCostsByCarKey[key]) return membershipCostsByCarKey[key];

  // Fallback: tolerate extra descriptors/colors in either dataset name.
  for (const [k, v] of Object.entries(membershipCostsByCarKey)) {
    if (k.includes(key) || key.includes(k)) return v;
  }

  return undefined;
}

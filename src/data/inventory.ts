export type InventoryItem = {
  car: string;
  terms: string[];
  down: Record<string, number>;
  monthly: number;
  display: string;
};

export const inventory: InventoryItem[] = [
  { car: "2022 Rolls-Royce Ghost Black Badge (White/Black)", terms: ["3 mo", "12 mo"], down: { "3 mo": 26900, "12 mo": 46900 }, monthly: 5595, display: "From $26,900 down • $5,595/mo" },
  { car: "2020 Rolls-Royce Cullinan White/Red", terms: ["3 mo", "12 mo"], down: { "3 mo": 26900, "12 mo": 49900 }, monthly: 6900, display: "From $26,900 down • $6,900/mo" },
  { car: "2020 Rolls-Royce Cullinan BB White/White Forgiatos", terms: ["3 mo", "12 mo"], down: { "3 mo": 26900, "12 mo": 49900 }, monthly: 6900, display: "From $26,900 down • $6,900/mo" },
  { car: "2017 Rolls Royce Dawn White on Red", terms: ["3 mo"], down: { "3 mo": 26900 }, monthly: 6900, display: "$26,900 down • $6,900/mo" },
  { car: "2018 Ferrari 488 Spider Yellow", terms: ["3 mo", "12 mo"], down: { "3 mo": 26900, "12 mo": 26900 }, monthly: 6900, display: "$26,900 down • $6,900/mo" },
  { car: "2023 Lamborghini Urus Performante Yellow", terms: ["3 mo"], down: { "3 mo": 26900 }, monthly: 5995, display: "$26,900 down • $5,995/mo" },
  { car: "2020 McLaren 720S Spyder Satin Black", terms: ["6 mo", "12 mo"], down: { "6 mo": 44900, "12 mo": 59900 }, monthly: 6995, display: "From $44,900 down • $6,995/mo" },
  { car: "2021 Mercedes-Benz S580 (Black on Peanut Butter)", terms: ["3 mo", "12 mo"], down: { "3 mo": 10900, "12 mo": 13900 }, monthly: 2495, display: "From $10,900 down • $2,495/mo" },
  { car: "2022 Mercedes-Benz S580", terms: ["3 mo", "12 mo"], down: { "3 mo": 10900, "12 mo": 12900 }, monthly: 2695, display: "From $10,900 down • $2,695/mo" },
  { car: "2020 Mercedes G63 Satin Black", terms: ["12 mo"], down: { "12 mo": 19900 }, monthly: 3400, display: "$19,900 down • $3,400/mo" },
  { car: "2021 Maybach GLS600 Black/Gold", terms: ["3 mo"], down: { "3 mo": 14900 }, monthly: 3700, display: "$14,900 down • $3,700/mo" }
];

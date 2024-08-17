// src/types/Toothpaste.ts

export type Toothpaste = {
    id: number;
    barcode: string;
    toothpasteName: string;
    imageUrl: string;
    manufacturer: string;
    importer: string;
    distributor: string;
    toothpasteType: string;
    ingredients: string;
    ageGroup: string;
    labelWarnings: string;
    containsFluoride: number; // 1 = Yes, 0 = No
    fluorideAmountLabeled: number; // 1 = Labeled, 0 = Not Labeled
    fluorideAmount: string;
    benefits: string;
  };
  
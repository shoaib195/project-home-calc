export type CategorySlug =
  | "construction"
  | "landscaping"
  | "flooring"
  | "painting"
  | "roofing"
  | "deck-fence"
  | "home-improvement"
  | "cost-estimation";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Tool {
  slug: string;
  category: CategorySlug;
  name: string;
  shortDescription: string;
  intro: string;
  synonyms: string[];
  formulaExplanation: string[];
  methodology: string;
  workedExample: { title: string; steps: string[] };
  faq: FaqItem[];
  relatedTools: string[];
  relatedGuides: string[];
  updated: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  index?: boolean;
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  updated: string;
  relatedTools: string[];
  intro: string;
  sections: { heading: string; body: string[] }[];
  faq: FaqItem[];
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  index?: boolean;
}

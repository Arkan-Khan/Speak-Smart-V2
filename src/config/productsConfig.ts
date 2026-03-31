/**
 * productsConfig.ts
 *
 * Config-driven data for the ProductCards section.
 * Each entry maps to one card in the 2×2 product grid.
 *
 * Fields:
 * - id: unique identifier
 * - marathiTitle: Marathi name displayed on the card overlay
 * - englishTitle: English translation displayed below the Marathi title
 * - image: path to the card image (relative to /public)
 * - driveLink: Google Drive link for the course; used as the CTA button href
 */

export interface Product {
  id: number;
  marathiTitle: string;
  englishTitle: string;
  image: string;
  driveLink: string;
}

export const products: Product[] = [
  {
    id: 1,
    marathiTitle: "Preschool Program",
    englishTitle: "Pre-School Institutions",
    image: "/product-1.png",
    driveLink: "https://preschool.speak-smart.co.in/",
  },
  {
    id: 2,
    marathiTitle: "Primary Program",
    englishTitle: "Primary Educational Institutions",
    image: "/product-2.png",
    driveLink: "https://primary.speak-smart.co.in/",
  },
  {
    id: 3,
    marathiTitle: "High School Program",
    englishTitle: "Secondary Educational Institutions",
    image: "/product-3.png",
    driveLink: "https://highschool.speak-smart.co.in/",
  },
  {
    id: 4,
    marathiTitle: "College Program",
    englishTitle: "College/University Institutions",
    image: "/product-4.png",
    driveLink: "https://college.speak-smart.co.in/",
  },
];

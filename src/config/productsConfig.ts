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
    marathiTitle: "प्रि-स्कूल संस्था",
    englishTitle: "Pre-School Institutions",
    image: "/product-1.png",
    driveLink: "#", // TODO: replace with actual Google Drive link
  },
  {
    id: 2,
    marathiTitle: "प्राथमिक शिक्षण संस्था",
    englishTitle: "Primary Educational Institutions",
    image: "/product-2.png",
    driveLink: "#", // TODO: replace with actual Google Drive link
  },
  {
    id: 3,
    marathiTitle: "माध्यमिक शिक्षण संस्था",
    englishTitle: "Secondary Educational Institutions",
    image: "/product-3.png",
    driveLink: "#", // TODO: replace with actual Google Drive link
  },
  {
    id: 4,
    marathiTitle: "महाविद्यालयीन संस्था",
    englishTitle: "College/University Institutions",
    image: "/product-4.png",
    driveLink: "#", // TODO: replace with actual Google Drive link
  },
];

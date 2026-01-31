export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  year: number;
  image: string;
  featured?: boolean;
}

import food from "@/assets/portfolio/food.png";
import grad from "@/assets/portfolio/grad.png";
import lesehan from "@/assets/portfolio/lesehan.png";
import makmur from "@/assets/portfolio/makmur.png";
import nom from "@/assets/portfolio/nom.png";
import ramen from "@/assets/portfolio/ramen.png";
import snake from "@/assets/portfolio/snake.png";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Omah Latare Ombo Menu",
    description: "Restaurant menu illustration featuring Indonesian dishes including Jadah Mozarella, Singkong Goreng, Panna Cotta, and Latare Ombo Lava Cake",
    category: "Food Illustration",
    year: 2024,
    image: food,
    featured: true,
  },
  {
    id: "2",
    title: "Graduation in the Rain",
    description: "Celebratory graduation illustration with cum laude distinction, capturing a special moment of achievement",
    category: "Personal Illustration",
    year: 2024,
    image: grad,
    featured: true,
  },
  {
    id: "3",
    title: "Lesehan Citra Rasa",
    description: "Restaurant branding illustration featuring a chef character with traditional Indonesian culinary elements",
    category: "Branding",
    year: 2024,
    image: lesehan,
    featured: true,
  },
  {
    id: "4",
    title: "Makmur Restaurant",
    description: "Illustrated restaurant building design showcasing the Makmur restaurant facade with its distinctive signage and architectural details",
    category: "Branding",
    year: 2024,
    image: makmur,
    featured: true,
  },
  {
    id: "5",
    title: "When A Blind Man Cries",
    description: "Musical art piece inspired by Deep Purple's song, featuring a film strip with symbolic imagery",
    category: "Personal Illustration",
    year: 2017,
    image: nom,
    featured: true,
  },
  {
    id: "6",
    title: "Kohaku & Kuro Ramen",
    description: "Food illustration showcasing two distinct ramen bowls - Kohaku (clear broth) and Kuro (spicy broth)",
    category: "Food Illustration",
    year: 2024,
    image: ramen,
    featured: true,
  },
  {
    id: "7",
    title: "Year of the Snake 2026",
    description: "Chinese New Year celebration illustration for the Year of the Snake, featuring festive elements and traditional symbols",
    category: "Festival Art",
    year: 2025,
    image: snake,
    featured: true,
  },
  {
    id: "8",
    title: "Happy Birthday",
    description: "Birthday illustration featuring a birthday cake with candles and a birthday boy",
    category: "Personal Illustration",
    year: 2025,
    image: ramen,
    featured: true,
  },
  {
    id: "9",
    title: "Happy Birthday",
    description: "Birthday illustration featuring a birthday cake with candles and a birthday boy",
    category: "Personal Illustration",
    year: 2025,
    image: snake,
    featured: true,
  },
];

export const categories = [
  "All Works",
  "Building",
  "Event",
  "Fan Art",
  "Food",
  "Portrait",
];

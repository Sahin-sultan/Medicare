import { Pill, Tablets, Bandage, Thermometer } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";

const CATEGORIES = [
  {
    title: "Medicines",
    description: "Prescription and over-the-counter medications",
    icon: Pill,
    itemCount: 2500
  },
  {
    title: "Supplements",
    description: "Vitamins, minerals, and health supplements",
    icon: Tablets,
    itemCount: 1200
  },
  {
    title: "First Aid",
    description: "Bandages, antiseptics, and medical supplies",
    icon: Bandage,
    itemCount: 450
  },
  {
    title: "Medical Devices",
    description: "Thermometers, blood pressure monitors, and more",
    icon: Thermometer,
    itemCount: 300
  }
];

const Categories = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Product Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((category) => (
          <CategoryCard key={category.title} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;